// Curated list of notable Pokémon TCG artists
const ARTISTS = [
  {
    id: "mitsuhiro-arita",
    name: "Mitsuhiro Arita",
    query: 'artist:"mitsuhiro arita"',
    description: "One of the most iconic Pokémon TCG artists, responsible for the original Base Set Charizard, Blastoise, and Venusaur. His dynamic, action-oriented style defined the early TCG era.",
    featuredCardId: "base1-4",
    tags: ["Base Set", "Classic", "Action"]
  },
  {
    id: "yuka-morii",
    name: "Yuka Morii",
    query: 'artist:"yuka morii"',
    description: "Celebrated for her unique clay-sculpt art style, crafting adorable 3D Pokémon figures and photographing them for cards. Her work stands apart from all other TCG artists.",
    featuredCardId: "base2-28",
    tags: ["Clay Art", "3D", "Unique Style"]
  },
  {
    id: "5ban-graphics",
    name: "5ban Graphics",
    query: 'artist:"5ban graphics"',
    description: "A studio responsible for the sleek, computer-generated full-art EX and GX cards. Their digital art style brought a modern aesthetic to the TCG through the XY and Sun & Moon eras.",
    featuredCardId: "xy1-97",
    tags: ["Digital", "Full Art", "EX/GX"]
  },
  {
    id: "kouki-saitou",
    name: "Kouki Saitou",
    query: 'artist:"kouki saitou"',
    description: "Known for expressive, painterly illustrations that capture dramatic moments and emotional depth. A prolific contributor across many modern sets.",
    featuredCardId: "sm12-1",
    tags: ["Painterly", "Modern", "Dramatic"]
  },
  {
    id: "tomokazu-komiya",
    name: "Tomokazu Komiya",
    query: 'artist:"tomokazu komiya"',
    description: "Beloved for whimsical, storybook-style illustrations that show Pokémon in heartwarming everyday scenes. His art often features small Pokémon in cozy or adventurous settings.",
    featuredCardId: "swsh1-1",
    tags: ["Whimsical", "Storybook", "Cozy"]
  },
  {
    id: "saya-tsuruta",
    name: "Saya Tsuruta",
    query: 'artist:"saya tsuruta"',
    description: "Creates soft, ethereal illustrations with a dream-like quality. Her cards often feature beautiful lighting and atmospheric scenes that evoke a sense of wonder.",
    featuredCardId: "sm9-1",
    tags: ["Ethereal", "Soft", "Atmospheric"]
  },
  {
    id: "ryo-ueda",
    name: "Ryo Ueda",
    query: 'artist:"ryo ueda"',
    description: "Known for dynamic compositions with a strong sense of movement and energy. A key contributor to the BW era cards with a bold, graphic style.",
    featuredCardId: "bw1-1",
    tags: ["Dynamic", "BW Era", "Bold"]
  },
  {
    id: "nagimiso",
    name: "nagimiso",
    query: 'artist:"nagimiso"',
    description: "A modern illustrator whose work frequently appears in Scarlet & Violet era sets, known for vibrant, lush backgrounds and expressive character-driven compositions.",
    featuredCardId: "sv1-1",
    tags: ["Modern", "Scarlet & Violet", "Vibrant"]
  },
  {
    id: "akira-komayama",
    name: "Akira Komayama",
    query: 'artist:"akira komayama"',
    description: "Creates richly detailed scenes with a focus on world-building. His illustrations often show Pokémon in their natural habitats with stunning environmental detail.",
    featuredCardId: "sm11-1",
    tags: ["Detailed", "Nature", "World-building"]
  },
  {
    id: "atsuko-nishida",
    name: "Atsuko Nishida",
    query: 'artist:"atsuko nishida"',
    description: "One of the original Pokémon designers at Game Freak, Atsuko Nishida designed iconic Pokémon like Eevee and Squirtle. Her TCG art reflects her intimate knowledge of the creatures she helped create.",
    featuredCardId: "base1-63",
    tags: ["Original Designer", "Classic", "Iconic"]
  },
  {
    id: "ryota-murayama",
    name: "Ryota Murayama",
    query: 'artist:"ryota murayama"',
    description: "Known for bold, action-packed compositions with a comic-book influence. His cards are immediately recognizable for their energetic linework and dramatic poses.",
    featuredCardId: "swsh5-1",
    tags: ["Action", "Comic Style", "Bold"]
  },
  {
    id: "shinji-kanda",
    name: "Shinji Kanda",
    query: 'artist:"shinji kanda"',
    description: "A versatile artist whose work spans multiple eras of the TCG. Known for clean linework and pleasing color palettes that showcase Pokémon in dynamic battle scenes.",
    featuredCardId: "ex1-1",
    tags: ["Versatile", "Clean", "Multi-era"]
  }
];

// Documented panoramic/connected scene card sets
// These are sets where multiple cards' artwork connects to form a larger image
const SCENE_SETS = [
  {
    id: "cosmic-eclipse-trainers",
    title: "Cosmic Eclipse — Trainer's Festival",
    description: "The Full Art Trainer cards from Cosmic Eclipse (2019) form a grand connected festival panorama featuring beloved Trainers from across the Pokémon world. Cards placed side by side reveal a continuous celebration scene.",
    orientation: "horizontal",
    tags: ["Cosmic Eclipse", "Full Art", "Trainers", "SM Era"],
    cards: [
      { id: "sm12-209", label: "Red & Blue" },
      { id: "sm12-205", label: "Mallow & Lana" },
      { id: "sm12-210", label: "Misty's Favor" },
      { id: "sm12-189", label: "Cynthia & Caitlin" },
      { id: "sm12-193", label: "Giovanni's Exile" }
    ]
  },
  {
    id: "team-up-tag-teams",
    title: "Team Up — Ocean Companions",
    description: "Tag Team cards from Team Up feature Pokémon in shared environments. Wailord and water-type companions share a continuous ocean backdrop across multiple cards.",
    orientation: "horizontal",
    tags: ["Team Up", "Tag Team", "Ocean", "SM Era"],
    cards: [
      { id: "sm9-183", label: "Magikarp & Wailord-GX" },
      { id: "sm9-132", label: "Alolan Exeggutor-GX" },
      { id: "sm9-56", label: "Wailord-GX" }
    ]
  },
  {
    id: "evolving-skies-sky",
    title: "Evolving Skies — Sky High",
    description: "Rayquaza and the Dragon-type legends of Evolving Skies (2021) share a connected sky scene. These alternate art cards, when arranged together, reveal the Dragons soaring through a unified high-altitude panorama.",
    orientation: "horizontal",
    tags: ["Evolving Skies", "Dragon", "Alt Art", "SWSH Era"],
    cards: [
      { id: "swsh7-200", label: "Rayquaza VMAX Alt Art" },
      { id: "swsh7-196", label: "Dragonite V Alt Art" },
      { id: "swsh7-203", label: "Noivern V Alt Art" }
    ]
  },
  {
    id: "shining-fates-shiny",
    title: "Shining Fates — Shiny Garden",
    description: "Select Shiny Vault cards from Shining Fates (2021) share a connected forest garden setting. The shiny Pokémon illustrations flow between cards, revealing a lush scene teeming with rare sparkling creatures.",
    orientation: "horizontal",
    tags: ["Shining Fates", "Shiny Vault", "Nature", "SWSH Era"],
    cards: [
      { id: "shf-sv1", label: "Shiny Celebi" },
      { id: "shf-sv79", label: "Shiny Eternatus VMAX" },
      { id: "shf-sv107", label: "Shiny Charizard VMAX" }
    ]
  },
  {
    id: "pokemon-151-ghost",
    title: "Pokémon 151 — Haunted Hollow",
    description: "The Illustration Rare cards for the Gastly evolutionary line in Pokémon 151 (2023) form a connected spooky nighttime scene — a haunted hollow that flows seamlessly across all three cards.",
    orientation: "horizontal",
    tags: ["Pokémon 151", "Ghost Type", "Illustration Rare", "SV Era"],
    cards: [
      { id: "sv3pt5-193", label: "Gastly IR" },
      { id: "sv3pt5-194", label: "Haunter IR" },
      { id: "sv3pt5-195", label: "Gengar ex IR" }
    ]
  },
  {
    id: "vivid-voltage-lightning",
    title: "Vivid Voltage — Stormy Skies",
    description: "Pikachu and its electric companions in Vivid Voltage share stormy, electrified backgrounds that connect across cards. A bolt of lightning ties the illustration together into one crackling scene.",
    orientation: "horizontal",
    tags: ["Vivid Voltage", "Electric", "Pikachu", "SWSH Era"],
    cards: [
      { id: "swsh4-43", label: "Pikachu V Full Art" },
      { id: "swsh4-169", label: "Amazing Pikachu" },
      { id: "swsh4-49", label: "Raichu V" }
    ]
  },
  {
    id: "celebrations-base-art",
    title: "Celebrations — The Original Scene",
    description: "The Classic Collection cards in Celebrations (2021) recreate iconic Base Set artwork. The iconic Pokémon share a continuous landscape that echoes the original 1996 scene — a nostalgic panorama celebrating 25 years of Pokémon.",
    orientation: "horizontal",
    tags: ["Celebrations", "25th Anniversary", "Base Set", "Classic"],
    cards: [
      { id: "cel25c-1", label: "Charizard" },
      { id: "cel25c-2", label: "Blastoise" },
      { id: "cel25c-3", label: "Venusaur" }
    ]
  }
];

// Footer links / metadata
const SITE_META = {
  title: "TCG Art Gallery",
  subtitle: "Exploring the artwork of the Pokémon Trading Card Game",
  apiBase: "https://api.pokemontcg.io/v2",
  cardImageFallback: "https://images.pokemontcg.io/",
  githubRepo: "TCGart"
};
