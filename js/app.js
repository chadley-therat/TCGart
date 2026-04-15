/* ===========================
   TCG Art Gallery — App Logic
   =========================== */

const API = "https://api.pokemontcg.io/v2";

// --- State ---
const state = {
  currentView: "artists",
  currentArtist: null,
  currentCards: [],
  currentPage: 1,
  totalCards: 0,
  pageSize: 30,
  searchQuery: "",
  lightboxIndex: -1,
  activeFilter: "all",
  assembledScenes: new Set()
};

// --- DOM Refs ---
const views = {
  artists: document.getElementById("view-artists"),
  scenes: document.getElementById("view-scenes"),
  about: document.getElementById("view-about")
};

const tabs = document.querySelectorAll(".nav-tab");
const searchInput = document.getElementById("nav-search-input");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxName = document.getElementById("lightbox-name");
const lightboxMeta = document.getElementById("lightbox-meta");

// --- Navigation ---
function switchView(viewName) {
  state.currentView = viewName;
  state.currentArtist = null;

  Object.entries(views).forEach(([name, el]) => {
    el.classList.toggle("active", name === viewName);
  });

  tabs.forEach(tab => {
    tab.classList.toggle("active", tab.dataset.view === viewName);
  });

  // Render the target view
  if (viewName === "artists") renderArtistGrid();
  if (viewName === "scenes") renderSceneSets();
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => switchView(tab.dataset.view));
});

// --- Search ---
searchInput.addEventListener("input", debounce(() => {
  state.searchQuery = searchInput.value.trim();
  if (state.currentView === "artists" && !state.currentArtist) {
    renderArtistGrid();
  } else if (state.currentArtist) {
    state.currentPage = 1;
    fetchArtistCards(state.currentArtist, true);
  }
}, 350));

// --- Artist Grid ---
function renderArtistGrid() {
  const container = document.getElementById("artists-grid");
  const countEl = document.getElementById("artists-count");

  let artists = ARTISTS;
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    artists = ARTISTS.filter(a =>
      a.name.toLowerCase().includes(q) ||
      a.tags.some(t => t.toLowerCase().includes(q)) ||
      a.description.toLowerCase().includes(q)
    );
  }

  countEl.textContent = `${artists.length} artist${artists.length !== 1 ? "s" : ""}`;

  if (artists.length === 0) {
    container.innerHTML = emptyState("No artists found", `No results for "${state.searchQuery}"`);
    return;
  }

  container.innerHTML = artists.map(artist => `
    <div class="artist-card" data-artist-id="${artist.id}" onclick="openArtist('${artist.id}')">
      <div class="artist-card-preview">
        <div class="preview-loading" id="preview-spinner-${artist.id}"></div>
        <img
          id="preview-img-${artist.id}"
          style="display:none"
          alt="${artist.name}"
          onload="this.style.display='block'; document.getElementById('preview-spinner-${artist.id}').style.display='none';"
          onerror="this.parentElement.innerHTML='<span style=\\'font-size:2.5rem\\'>🎨</span>'"
        />
      </div>
      <div class="artist-card-body">
        <div class="artist-name">${escHtml(artist.name)}</div>
        <div class="artist-desc">${escHtml(artist.description)}</div>
        <div class="artist-tags">
          ${artist.tags.map(t => `<span class="artist-tag">${escHtml(t)}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");

  // Load preview images
  artists.forEach(artist => loadArtistPreview(artist));
}

async function loadArtistPreview(artist) {
  try {
    // First try the featured card
    if (artist.featuredCardId) {
      const res = await fetchWithRetry(`${API}/cards/${artist.featuredCardId}`);
      if (res.ok) {
        const data = await res.json();
        const img = document.getElementById(`preview-img-${artist.id}`);
        if (img && data.data?.images?.small) {
          img.src = data.data.images.small;
          return;
        }
      }
    }
    // Fallback: search first card by artist
    const res = await fetchWithRetry(`${API}/cards?q=${encodeURIComponent(artist.query)}&pageSize=1&orderBy=set.releaseDate`);
    if (res.ok) {
      const data = await res.json();
      const img = document.getElementById(`preview-img-${artist.id}`);
      if (img && data.data?.[0]?.images?.small) {
        img.src = data.data[0].images.small;
      }
    }
  } catch {
    // silently fail — spinner gets cleared by onerror on img
    const spinner = document.getElementById(`preview-spinner-${artist.id}`);
    if (spinner) spinner.parentElement.innerHTML = '<span style="font-size:2.5rem">🎨</span>';
  }
}

// --- Artist Detail ---
function openArtist(artistId) {
  const artist = ARTISTS.find(a => a.id === artistId);
  if (!artist) return;

  state.currentArtist = artist;
  state.currentPage = 1;
  state.currentCards = [];

  // Swap grid for detail view
  const container = document.getElementById("view-artists");
  container.innerHTML = `
    <div class="artist-detail-header">
      <button class="artist-detail-back" onclick="closeArtist()">
        ← Back to Artists
      </button>
      <div class="artist-detail-info">
        <div class="artist-detail-name">${escHtml(artist.name)}</div>
        <div class="artist-detail-desc">${escHtml(artist.description)}</div>
        <div class="artist-detail-tags">
          ${artist.tags.map(t => `<span class="artist-detail-tag">${escHtml(t)}</span>`).join("")}
        </div>
      </div>
    </div>
    <div class="section-header">
      <span class="section-title">Card Gallery</span>
      <span class="section-count" id="artist-card-count">Loading…</span>
    </div>
    <div id="artist-cards-grid" class="card-grid">
      ${loadingSkeletons(12)}
    </div>
    <div id="load-more-wrap" class="load-more-wrap" style="display:none">
      <button class="load-more-btn" id="load-more-btn" onclick="loadMoreCards()">Load More</button>
    </div>
  `;

  fetchArtistCards(artist, true);
}

function closeArtist() {
  state.currentArtist = null;
  const container = document.getElementById("view-artists");
  container.innerHTML = buildArtistViewHTML();
  renderArtistGrid();
}

async function fetchArtistCards(artist, replace = false) {
  const grid = document.getElementById("artist-cards-grid");
  const countEl = document.getElementById("artist-card-count");

  if (!grid) return;

  if (replace) {
    grid.innerHTML = loadingSkeletons(12);
    state.currentCards = [];
  }

  try {
    const url = `${API}/cards?q=${encodeURIComponent(artist.query)}&page=${state.currentPage}&pageSize=${state.pageSize}&orderBy=set.releaseDate`;
    const res = await fetchWithRetry(url);
    if (!res.ok) throw new Error(`API error ${res.status}`);
    const data = await res.json();

    state.totalCards = data.totalCount || 0;
    const newCards = data.data || [];
    state.currentCards = replace ? newCards : [...state.currentCards, ...newCards];

    if (replace) grid.innerHTML = "";

    newCards.forEach((card, i) => {
      const el = createCardElement(card, state.currentCards.length - newCards.length + i);
      grid.appendChild(el);
    });

    if (countEl) countEl.textContent = `${state.totalCards} card${state.totalCards !== 1 ? "s" : ""}`;

    // Load more
    const loadMoreWrap = document.getElementById("load-more-wrap");
    const loadMoreBtn = document.getElementById("load-more-btn");
    if (loadMoreWrap && loadMoreBtn) {
      const hasMore = state.currentPage * state.pageSize < state.totalCards;
      loadMoreWrap.style.display = hasMore ? "block" : "none";
      loadMoreBtn.disabled = false;
      loadMoreBtn.textContent = "Load More";
    }

    if (state.currentCards.length === 0) {
      grid.innerHTML = emptyState("No cards found", "This artist has no cards in the database yet.");
    }
  } catch (err) {
    if (grid) grid.innerHTML = `<div class="state-error">⚠ Failed to load cards: ${escHtml(err.message)}</div>`;
  }
}

function loadMoreCards() {
  if (!state.currentArtist) return;
  const btn = document.getElementById("load-more-btn");
  if (btn) { btn.disabled = true; btn.textContent = "Loading…"; }
  state.currentPage++;
  fetchArtistCards(state.currentArtist, false);
}

function createCardElement(card, index) {
  const div = document.createElement("div");
  div.className = "card-item";
  div.dataset.index = index;
  div.onclick = () => openLightbox(index);

  const img = document.createElement("img");
  img.className = "card-item-img";
  img.alt = card.name;
  img.loading = "lazy";
  img.src = card.images?.small || "";
  img.onerror = () => { img.style.display = "none"; };

  const footer = document.createElement("div");
  footer.className = "card-item-footer";
  footer.title = `${card.name} — ${card.set?.name || ""}`;
  footer.textContent = `${card.name} · ${card.set?.name || ""}`;

  div.appendChild(img);
  div.appendChild(footer);
  return div;
}

// --- Lightbox ---
function openLightbox(index) {
  state.lightboxIndex = index;
  updateLightbox();
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

function updateLightbox() {
  const card = state.currentCards[state.lightboxIndex];
  if (!card) return;
  lightboxImg.src = card.images?.large || card.images?.small || "";
  lightboxName.textContent = card.name;
  lightboxMeta.textContent = [
    card.set?.name,
    card.number ? `#${card.number}` : null,
    card.rarity
  ].filter(Boolean).join(" · ");

  document.getElementById("lb-prev").disabled = state.lightboxIndex === 0;
  document.getElementById("lb-next").disabled = state.lightboxIndex === state.currentCards.length - 1;
}

document.getElementById("lb-prev").addEventListener("click", () => {
  if (state.lightboxIndex > 0) { state.lightboxIndex--; updateLightbox(); }
});

document.getElementById("lb-next").addEventListener("click", () => {
  if (state.lightboxIndex < state.currentCards.length - 1) { state.lightboxIndex++; updateLightbox(); }
});

document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") document.getElementById("lb-prev").click();
  if (e.key === "ArrowRight") document.getElementById("lb-next").click();
});

// --- Scene Sets ---
function renderSceneSets() {
  const container = document.getElementById("scenes-list");
  container.innerHTML = SCENE_SETS.map(scene => buildSceneSetHTML(scene)).join("");

  // Trigger lazy-loading scene cards
  SCENE_SETS.forEach(scene => loadSceneCards(scene));
}

function buildSceneSetHTML(scene) {
  return `
    <div class="scene-set" id="scene-${scene.id}">
      <div class="scene-set-header">
        <div class="scene-set-title-group">
          <div class="scene-set-title">${escHtml(scene.title)}</div>
          <div class="scene-set-desc">${escHtml(scene.description)}</div>
          <div class="scene-set-tags">
            ${scene.tags.map(t => `<span class="scene-set-tag">${escHtml(t)}</span>`).join("")}
          </div>
        </div>
        <button
          class="scene-assemble-btn"
          id="assemble-btn-${scene.id}"
          onclick="toggleAssemble('${scene.id}')"
        >
          🧩 Assemble Scene
        </button>
      </div>
      <div class="scene-body">
        <div class="scene-cards-spread" id="scene-cards-${scene.id}">
          ${scene.cards.map(c => `
            <div class="scene-card-wrapper" id="scene-wrapper-${scene.id}-${c.id.replace(/[^a-z0-9]/gi,'_')}">
              <div class="scene-card-skeleton" id="scene-skel-${scene.id}-${c.id.replace(/[^a-z0-9]/gi,'_')}"></div>
              <div class="scene-card-label">${escHtml(c.label)}</div>
            </div>
          `).join("")}
        </div>
        <div class="scene-assembled-banner" id="scene-banner-${scene.id}">
          ✨ Scene assembled! These cards form a continuous panoramic illustration.
        </div>
      </div>
    </div>
  `;
}

async function loadSceneCards(scene) {
  for (const cardRef of scene.cards) {
    const safeId = cardRef.id.replace(/[^a-z0-9]/gi, "_");
    const wrapperId = `scene-wrapper-${scene.id}-${safeId}`;
    const skelId = `scene-skel-${scene.id}-${safeId}`;

    try {
      const res = await fetchWithRetry(`${API}/cards/${cardRef.id}`);
      let imageUrl = null;
      if (res.ok) {
        const data = await res.json();
        imageUrl = data.data?.images?.large || data.data?.images?.small || null;
      }

      const wrapper = document.getElementById(wrapperId);
      const skel = document.getElementById(skelId);

      if (!wrapper) continue;

      if (imageUrl) {
        const img = document.createElement("img");
        img.className = "scene-card-img";
        img.src = imageUrl;
        img.alt = cardRef.label;
        img.loading = "lazy";
        img.onclick = () => openSceneCardLightbox(imageUrl, cardRef.label, scene.title);
        img.onerror = () => {
          img.replaceWith(buildFallbackSceneCard(cardRef.label));
        };
        skel.replaceWith(img);
      } else {
        skel.replaceWith(buildFallbackSceneCard(cardRef.label));
      }
    } catch {
      const skel = document.getElementById(skelId);
      if (skel) skel.replaceWith(buildFallbackSceneCard(cardRef.label));
    }
  }
}

function buildFallbackSceneCard(label) {
  const div = document.createElement("div");
  div.className = "scene-card-img";
  div.style.cssText = "display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;background:var(--bg-hover);border-radius:8px;";
  div.innerHTML = `<span style="font-size:2rem">🃏</span><span style="font-size:0.75rem;color:var(--text-muted);text-align:center;padding:0 8px">${escHtml(label)}</span>`;
  return div;
}

function openSceneCardLightbox(imageUrl, name, setName) {
  // Temporarily set single card for lightbox display
  state.currentCards = [{ name, images: { large: imageUrl, small: imageUrl }, set: { name: setName } }];
  state.lightboxIndex = 0;
  lightboxImg.src = imageUrl;
  lightboxName.textContent = name;
  lightboxMeta.textContent = setName;
  document.getElementById("lb-prev").disabled = true;
  document.getElementById("lb-next").disabled = true;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function toggleAssemble(sceneId) {
  const spread = document.getElementById(`scene-cards-${sceneId}`);
  const btn = document.getElementById(`assemble-btn-${sceneId}`);
  const banner = document.getElementById(`scene-banner-${sceneId}`);

  const isAssembled = state.assembledScenes.has(sceneId);

  if (isAssembled) {
    state.assembledScenes.delete(sceneId);
    spread.classList.remove("assembling");
    btn.classList.remove("assembled");
    btn.innerHTML = "🧩 Assemble Scene";
    banner.classList.remove("visible");
  } else {
    state.assembledScenes.add(sceneId);
    spread.classList.add("assembling");
    btn.classList.add("assembled");
    btn.innerHTML = "🔀 Spread Apart";
    banner.classList.add("visible");
  }
}

// --- HTML Helpers ---
function buildArtistViewHTML() {
  return `
    <div class="hero">
      <h1>Pokémon TCG Art Gallery</h1>
      <p>Explore the incredible artwork behind every card — browse by artist and discover the panoramic scenes that span multiple cards.</p>
      <div class="hero-stats">
        <div class="hero-stat">
          <div class="hero-stat-value">${ARTISTS.length}</div>
          <div class="hero-stat-label">Artists</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-value">${SCENE_SETS.length}</div>
          <div class="hero-stat-label">Scene Sets</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-value">20K+</div>
          <div class="hero-stat-label">Cards</div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="section-header">
        <span class="section-title">Browse Artists</span>
        <span class="section-count" id="artists-count">${ARTISTS.length} artists</span>
      </div>
      <div id="artists-grid" class="artist-grid"></div>
    </div>
  `;
}

function loadingSkeletons(count) {
  return Array.from({ length: count }, () => `
    <div class="skeleton">
      <div class="skeleton-img"></div>
      <div class="skeleton-text" style="width:70%"></div>
    </div>
  `).join("");
}

function emptyState(title, desc) {
  return `
    <div class="state-empty" style="grid-column:1/-1">
      <div class="state-empty-icon">🔍</div>
      <div class="state-empty-title">${escHtml(title)}</div>
      <div class="state-empty-desc">${escHtml(desc)}</div>
    </div>
  `;
}

// --- Utils ---
function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function debounce(fn, ms) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

async function fetchWithRetry(url, retries = 2) {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url, { headers: { Accept: "application/json" } });
      return res;
    } catch (err) {
      if (i === retries) throw err;
      await new Promise(r => setTimeout(r, 500 * (i + 1)));
    }
  }
}

// --- Init ---
document.addEventListener("DOMContentLoaded", () => {
  // The artists view HTML is already in the page; just render the grid
  renderArtistGrid();
});
