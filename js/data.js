// ============================================================
// TCG Art Gallery — Card Data
// Sources: Bulbapedia, pokemontcg.io API, artofpkm.com
// ============================================================

// Comprehensive list of notable Pokémon TCG illustrators
// Card counts sourced from Bulbapedia list of TCG illustrators
const ARTISTS = [
  // ── Highest Volume / Most Prolific ──────────────────────────
  {
    id: "5ban-graphics",
    name: "5ban Graphics",
    query: 'artist:"5ban graphics"',
    description: "A digital art studio responsible for the sleek, computer-rendered full-art EX, GX, and V cards. With over 1,000 cards credited, 5ban Graphics is the single largest contributor to the Pokémon TCG. Their glossy, cinematic style defined the look of the XY through Sword & Shield eras.",
    cardCount: "1,019+",
    era: "XY → SWSH",
    tags: ["Digital", "Full Art", "EX / GX / V", "Studio"],
    featuredCardId: null
  },
  {
    id: "ken-sugimori",
    name: "Ken Sugimori",
    query: 'artist:"ken sugimori"',
    description: "Co-founder of Game Freak and original designer of the Pokémon species, Sugimori's clean ink-and-watercolor illustrations appeared on nearly 1,000 TCG cards. His artwork defined the visual identity of the franchise from the very beginning.",
    cardCount: "969+",
    era: "Base Set → Modern",
    tags: ["Game Freak", "Original Designer", "Watercolor", "Classic"],
    featuredCardId: "base1-54"
  },
  {
    id: "kouki-saitou",
    name: "Kouki Saitou",
    query: 'artist:"kouki saitou"',
    description: "One of the most prolific TCG illustrators with nearly 700 cards to his name, Saitou has contributed to virtually every era of the game since 2002. He is known for expressive, painterly compositions that convey motion and drama.",
    cardCount: "693+",
    era: "EX Era → Modern",
    tags: ["Painterly", "Prolific", "Multi-era", "Action"],
    featuredCardId: null
  },
  {
    id: "toyste-beach",
    name: "Toyste Beach",
    query: 'artist:"toyste beach"',
    description: "A 3D computer-graphics studio credited on 743+ cards. Toyste Beach specializes in clean, photorealistic CG rendering, producing the standard V and VMAX card art that dominates the Sword & Shield era and beyond.",
    cardCount: "743+",
    era: "BW → SWSH",
    tags: ["3D CG", "Studio", "Digital", "V / VMAX"],
    featuredCardId: null
  },
  {
    id: "mitsuhiro-arita",
    name: "Mitsuhiro Arita",
    query: 'artist:"mitsuhiro arita"',
    description: "Illustrated the iconic Base Set Charizard — arguably the most famous trading card ever printed. With 644+ cards across the full history of the TCG, Arita's dynamic action scenes and bold compositions are instantly recognizable to any collector.",
    cardCount: "644+",
    era: "Base Set → Modern",
    tags: ["Base Set", "Charizard", "Action", "Iconic"],
    featuredCardId: "base1-4"
  },
  {
    id: "kagemaru-himeno",
    name: "Kagemaru Himeno",
    query: 'artist:"kagemaru himeno"',
    description: "A veteran illustrator with 635+ cards spanning from the original Base Set through the modern era. Himeno is celebrated for vivid, richly detailed backgrounds and a mastery of color that makes her cards instantly stand out.",
    cardCount: "635+",
    era: "Base Set → Modern",
    tags: ["Veteran", "Vivid Color", "Detailed", "Multi-era"],
    featuredCardId: null
  },
  {
    id: "atsuko-nishida",
    name: "Atsuko Nishida",
    query: 'artist:"atsuko nishida"',
    description: "An original Pokémon designer at Game Freak who designed Eevee, Squirtle, and others. Her 447+ TCG cards carry the intimacy of someone who created these creatures, with soft linework and faithful character expression.",
    cardCount: "447+",
    era: "Base Set → Modern",
    tags: ["Game Freak", "Original Designer", "Eevee", "Squirtle"],
    featuredCardId: null
  },
  {
    id: "masakazu-fukuda",
    name: "Masakazu Fukuda",
    query: 'artist:"masakazu fukuda"',
    description: "With 472+ cards from the EX FireRed & LeafGreen era through the Scarlet & Violet era, Fukuda is one of the game's most consistent contributors. He is noted for clean composition and expressive Pokémon poses.",
    cardCount: "472+",
    era: "EX Era → SV",
    tags: ["EX Era", "Consistent", "Expressive", "Multi-era"],
    featuredCardId: null
  },
  {
    id: "ryo-ueda",
    name: "Ryo Ueda",
    query: 'artist:"ryo ueda"',
    description: "A key contributor to the Black & White era with 381+ cards total. Ueda's work is characterized by bold linework, strong graphic design sensibility, and dynamic battle compositions.",
    cardCount: "381+",
    era: "DP → BW",
    tags: ["BW Era", "Bold", "Graphic", "Dynamic"],
    featuredCardId: null
  },
  {
    id: "midori-harada",
    name: "Midori Harada",
    query: 'artist:"midori harada"',
    description: "363+ cards across multiple eras. Harada is known for warm, inviting illustrations that place Pokémon in naturalistic settings, with particular attention to environmental storytelling.",
    cardCount: "363+",
    era: "EX Era → Modern",
    tags: ["Nature", "Warm", "Storytelling", "Multi-era"],
    featuredCardId: null
  },
  // ── Well-Known Artists ───────────────────────────────────────
  {
    id: "tomokazu-komiya",
    name: "Tomokazu Komiya",
    query: 'artist:"tomokazu komiya"',
    description: "Beloved for whimsical storybook illustrations showing Pokémon in cozy, everyday moments. His 270+ cards are favorites among collectors for their warmth, humor, and heartfelt narrative quality.",
    cardCount: "270+",
    era: "XY → Modern",
    tags: ["Whimsical", "Storybook", "Cozy", "Fan Favorite"],
    featuredCardId: null
  },
  {
    id: "yuka-morii",
    name: "Yuka Morii",
    query: 'artist:"yuka morii"',
    description: "Unique among all TCG artists for creating actual clay sculptures of Pokémon, then photographing them for card art. Her 212+ cards are immediately recognizable for their tactile, three-dimensional quality.",
    cardCount: "212+",
    era: "Base Set → Modern",
    tags: ["Clay Art", "3D Sculpture", "Unique Style", "Iconic"],
    featuredCardId: null
  },
  {
    id: "hajime-kusajima",
    name: "Hajime Kusajima",
    query: 'artist:"hajime kusajima"',
    description: "203+ cards with a style that emphasizes bold, saturated colors and clean, modern digital illustration. A key contributor to the Sun & Moon and Sword & Shield eras.",
    cardCount: "203+",
    era: "SM → SWSH",
    tags: ["Digital", "Bold Color", "Modern", "Sun & Moon"],
    featuredCardId: null
  },
  {
    id: "naoyo-kimura",
    name: "Naoyo Kimura",
    query: 'artist:"naoyo kimura"',
    description: "A veteran illustrator spanning multiple eras who contributed to the iconic Southern Islands promo set. Known for detailed environmental scenes and expressive Pokémon portraiture.",
    cardCount: "200+",
    era: "Neo Era → Modern",
    tags: ["Veteran", "Southern Islands", "Environmental", "Detailed"],
    featuredCardId: null
  },
  {
    id: "naoki-saito",
    name: "Naoki Saito",
    query: 'artist:"naoki saito"',
    description: "Highly sought after by collectors for vibrant, painterly full-art illustrations with rich atmospheric lighting. His alternative-art V and ex cards are consistently among the most popular pulls in any modern set.",
    cardCount: "100+",
    era: "SWSH → SV",
    tags: ["Alt Art", "Painterly", "Atmospheric", "Collector Favorite"],
    featuredCardId: null
  },
  {
    id: "shinji-kanda",
    name: "Shinji Kanda",
    query: 'artist:"shinji kanda"',
    description: "Known for vivid color palettes and detailed, layered backgrounds. Kanda's cards often feature Pokémon in action-packed or emotionally charged scenes across multiple eras.",
    cardCount: "150+",
    era: "EX Era → SV",
    tags: ["Vivid Color", "Detailed", "Multi-era", "Action"],
    featuredCardId: null
  },
  {
    id: "saya-tsuruta",
    name: "Saya Tsuruta",
    query: 'artist:"saya tsuruta"',
    description: "Creates soft, ethereal illustrations with a dream-like quality. Her cards frequently feature delicate lighting, pastel color gradients, and a sense of wonder that suits Fairy- and Psychic-type Pokémon especially well.",
    cardCount: "80+",
    era: "XY → Modern",
    tags: ["Ethereal", "Soft", "Fairy Type", "Dream-like"],
    featuredCardId: null
  },
  {
    id: "aya-kusube",
    name: "Aya Kusube",
    query: 'artist:"aya kusube"',
    description: "A modern illustrator celebrated for clean linework, beautiful color gradients, and tranquil scene compositions. Her cards frequently depict Pokémon in lush natural environments.",
    cardCount: "100+",
    era: "SM → SV",
    tags: ["Modern", "Clean", "Nature", "Tranquil"],
    featuredCardId: null
  },
  {
    id: "hyogonosuke",
    name: "HYOGONOSUKE",
    query: 'artist:"hyogonosuke"',
    description: "A standout modern illustrator known for cards featuring intimate, slice-of-life moments between Trainers and their Pokémon. Their illustration rares in the Scarlet & Violet era are among the most treasured by fans.",
    cardCount: "50+",
    era: "SWSH → SV",
    tags: ["Illustration Rare", "Intimate", "Modern", "SV Era"],
    featuredCardId: null
  },
  {
    id: "nagimiso",
    name: "nagimiso",
    query: 'artist:"nagimiso"',
    description: "A contemporary illustrator whose work emphasizes vibrant, lush backgrounds and expressive character-driven compositions. A key contributor to the Scarlet & Violet illustration rare lineup.",
    cardCount: "50+",
    era: "SV Era",
    tags: ["Vibrant", "Illustration Rare", "Modern", "SV Era"],
    featuredCardId: null
  },
  {
    id: "teeziro",
    name: "Teeziro",
    query: 'artist:"teeziro"',
    description: "A modern illustrator whose nine-card connected panoramic art series (spanning Twilight Masquerade, Temporal Forces, and Surging Sparks) is one of the most celebrated multi-card projects in recent TCG history.",
    cardCount: "30+",
    era: "SV Era",
    tags: ["Connected Art", "Panoramic", "SV Era", "Series"],
    featuredCardId: null
  },
  {
    id: "ayako-ozaki",
    name: "Ayako Ozaki",
    query: 'artist:"ayako ozaki"',
    description: "Known for a distinctive style combining detailed natural environments with expressive Pokémon personalities. Created a celebrated six-card panoramic nature scene distributed across multiple 2024–2025 sets.",
    cardCount: "30+",
    era: "SV Era",
    tags: ["Panoramic", "Nature", "Connected Art", "SV Era"],
    featuredCardId: null
  },
  {
    id: "wataru-kawahara",
    name: "Wataru Kawahara",
    query: 'artist:"wataru kawahara"',
    description: "A modern illustrator active in the Sword & Shield and Scarlet & Violet eras, recognized for dynamic compositions and a bold digital painting style with strong use of contrast.",
    cardCount: "60+",
    era: "SWSH → SV",
    tags: ["Digital Painting", "Bold", "Dynamic", "Modern"],
    featuredCardId: null
  },
  {
    id: "haccan",
    name: "HACCAN",
    query: 'artist:"haccan"',
    description: "A modern illustrator whose detailed, painterly style is particularly noted for dramatic lighting effects. Often illustrates Legendary and Mythical Pokémon with a sense of epic scale.",
    cardCount: "80+",
    era: "XY → SV",
    tags: ["Painterly", "Legendary", "Epic Scale", "Lighting"],
    featuredCardId: null
  },
  {
    id: "ooyama",
    name: "Ooyama",
    query: 'artist:"ooyama"',
    description: "Known for charming, character-focused illustrations that emphasize personality and emotion. Their cards often feature Pokémon in playful, relatable situations.",
    cardCount: "60+",
    era: "SM → SV",
    tags: ["Charming", "Character Focus", "Playful", "Modern"],
    featuredCardId: null
  },
  {
    id: "hitoshi-ariga",
    name: "Hitoshi Ariga",
    query: 'artist:"hitoshi ariga"',
    description: "A manga artist and illustrator whose detailed, ink-influenced style brings a unique graphic novel quality to the TCG. Known for the Pokémon Adventures manga as well as TCG card work.",
    cardCount: "100+",
    era: "EX Era → Modern",
    tags: ["Manga Style", "Ink", "Detailed", "Graphic Novel"],
    featuredCardId: null
  },
  {
    id: "keiko-fukuyama",
    name: "Keiko Fukuyama",
    query: 'artist:"keiko fukuyama"',
    description: "Illustrated the iconic Southern Islands promo set (2001), creating lush tropical panoramas across triptych card groups. Her soft, painterly island scenes are among the most collectible and visually distinctive in TCG history.",
    cardCount: "50+",
    era: "Classic Era",
    tags: ["Southern Islands", "Tropical", "Triptych", "Classic"],
    featuredCardId: null
  },
  {
    id: "orca",
    name: "Orca",
    query: 'artist:"orca"',
    description: "A modern illustrator known for distinctive connected pairs of cards featuring complementary Pokémon. Their Volbeat & Illumise diptych in Twilight Masquerade is a standout example of connected art in the Scarlet & Violet era.",
    cardCount: "30+",
    era: "SV Era",
    tags: ["Connected Art", "Diptych", "Modern", "SV Era"],
    featuredCardId: null
  },
  {
    id: "shin-nagasawa",
    name: "Shin Nagasawa",
    query: 'artist:"shin nagasawa"',
    description: "Contributes painterly illustrations with warm, inviting color palettes. Often places Pokémon in domestic or peaceful natural settings that feel accessible and comforting.",
    cardCount: "80+",
    era: "BW → SWSH",
    tags: ["Painterly", "Warm", "Peaceful", "Domestic"],
    featuredCardId: null
  },
  {
    id: "kuroimori",
    name: "kuroimori",
    query: 'artist:"kuroimori"',
    description: "A modern SV-era illustrator whose work features moody, atmospheric lighting and highly detailed environmental backgrounds. Known for creating a sense of depth and mystery in their card illustrations.",
    cardCount: "30+",
    era: "SV Era",
    tags: ["Atmospheric", "Moody", "Detailed", "SV Era"],
    featuredCardId: null
  },
  {
    id: "eri-yamaki",
    name: "Eri Yamaki",
    query: 'artist:"eri yamaki"',
    description: "Known for delicate, pastel-toned illustrations with an emphasis on gentle emotional moments between Pokémon. A consistent contributor across multiple modern sets.",
    cardCount: "50+",
    era: "SM → SV",
    tags: ["Pastel", "Delicate", "Emotional", "Modern"],
    featuredCardId: null
  },
  {
    id: "souichirou-gunjima",
    name: "Souichirou Gunjima",
    query: 'artist:"souichirou gunjima"',
    description: "Produces richly detailed full-art illustrations, especially for Legendary and Ultra Beast Pokémon, often showing them in dramatic cosmic or elemental environments.",
    cardCount: "60+",
    era: "SM → SV",
    tags: ["Full Art", "Legendary", "Cosmic", "Dramatic"],
    featuredCardId: null
  }
];

// ============================================================
// Scene Sets — multi-card connected/panoramic artwork
// Sources: Bulbapedia "Combined illustration (TCG)" article
// ============================================================

const SCENE_SETS = [

  // ── POKÉMON LEGEND Cards (2010–2011) ──────────────────────
  // Each LEGEND card is a single illustration split across two cards:
  // a Top half and Bottom half that must be assembled together.
  {
    id: "legend-ho-oh-lugia",
    title: "Ho-Oh & Lugia LEGEND",
    description: "One of the most iconic LEGEND pairs from the HeartGold & SoulSilver base set (2010). The top and bottom halves combine to reveal both legendary birds soaring above a dramatic sky — a beloved moment for fans of Johto.",
    orientation: "vertical",
    assembleLabel: "Stack Cards",
    disassembleLabel: "Split Apart",
    type: "LEGEND",
    tags: ["LEGEND", "HeartGold SoulSilver", "Ho-Oh", "Lugia", "2010"],
    cards: [
      { id: "hgss1-113", label: "Ho-Oh & Lugia LEGEND (Top)" },
      { id: "hgss1-114", label: "Ho-Oh & Lugia LEGEND (Bottom)" }
    ]
  },
  {
    id: "legend-entei-raikou",
    title: "Entei & Raikou LEGEND",
    description: "From HS—Unleashed (2010), these two cards assemble into a continuous illustration of Entei and Raikou charging through a fiery, storm-swept landscape.",
    orientation: "vertical",
    assembleLabel: "Stack Cards",
    disassembleLabel: "Split Apart",
    type: "LEGEND",
    tags: ["LEGEND", "HS-Unleashed", "Entei", "Raikou", "2010"],
    cards: [
      { id: "hsu-83", label: "Entei & Raikou LEGEND (Top)" },
      { id: "hsu-84", label: "Entei & Raikou LEGEND (Bottom)" }
    ]
  },
  {
    id: "legend-raikou-suicune",
    title: "Raikou & Suicune LEGEND",
    description: "Also from HS—Unleashed, Raikou and Suicune share a panoramic scene of electricity and water clashing across a twilight sky.",
    orientation: "vertical",
    assembleLabel: "Stack Cards",
    disassembleLabel: "Split Apart",
    type: "LEGEND",
    tags: ["LEGEND", "HS-Unleashed", "Raikou", "Suicune", "2010"],
    cards: [
      { id: "hsu-85", label: "Raikou & Suicune LEGEND (Top)" },
      { id: "hsu-86", label: "Raikou & Suicune LEGEND (Bottom)" }
    ]
  },
  {
    id: "legend-kyogre-groudon",
    title: "Kyogre & Groudon LEGEND",
    description: "From HS—Undaunted (2010), the clash of the two super-ancient Pokémon fills both halves of this dramatic LEGEND card pair — sea rising against earth in epic scale.",
    orientation: "vertical",
    assembleLabel: "Stack Cards",
    disassembleLabel: "Split Apart",
    type: "LEGEND",
    tags: ["LEGEND", "HS-Undaunted", "Kyogre", "Groudon", "2010"],
    cards: [
      { id: "hud-87", label: "Kyogre & Groudon LEGEND (Top)" },
      { id: "hud-88", label: "Kyogre & Groudon LEGEND (Bottom)" }
    ]
  },
  {
    id: "legend-rayquaza-deoxys",
    title: "Rayquaza & Deoxys LEGEND",
    description: "From HS—Undaunted, Rayquaza and Deoxys battle in the stratosphere. The two halves form a breathtaking space-border scene with the curve of the Earth visible below.",
    orientation: "vertical",
    assembleLabel: "Stack Cards",
    disassembleLabel: "Split Apart",
    type: "LEGEND",
    tags: ["LEGEND", "HS-Undaunted", "Rayquaza", "Deoxys", "2010"],
    cards: [
      { id: "hud-89", label: "Rayquaza & Deoxys LEGEND (Top)" },
      { id: "hud-90", label: "Rayquaza & Deoxys LEGEND (Bottom)" }
    ]
  },
  {
    id: "legend-dialga-palkia",
    title: "Dialga & Palkia LEGEND",
    description: "From HS—Triumphant (2010), the two masters of time and space dominate a cosmic illustration that spans both card halves in an explosion of energy.",
    orientation: "vertical",
    assembleLabel: "Stack Cards",
    disassembleLabel: "Split Apart",
    type: "LEGEND",
    tags: ["LEGEND", "HS-Triumphant", "Dialga", "Palkia", "2010"],
    cards: [
      { id: "htr-99", label: "Dialga & Palkia LEGEND (Top)" },
      { id: "htr-100", label: "Dialga & Palkia LEGEND (Bottom)" }
    ]
  },
  {
    id: "legend-darkrai-cresselia",
    title: "Darkrai & Cresselia LEGEND",
    description: "Also from HS—Triumphant, this haunting pair shows the Lord of Nightmares and the Lunar Pokémon sharing a dreamscape illustration across their top and bottom halves.",
    orientation: "vertical",
    assembleLabel: "Stack Cards",
    disassembleLabel: "Split Apart",
    type: "LEGEND",
    tags: ["LEGEND", "HS-Triumphant", "Darkrai", "Cresselia", "2010"],
    cards: [
      { id: "htr-97", label: "Darkrai & Cresselia LEGEND (Top)" },
      { id: "htr-98", label: "Darkrai & Cresselia LEGEND (Bottom)" }
    ]
  },

  // ── POKÉMON V-UNION (2021) ────────────────────────────────
  // Each V-UNION is a single illustration across FOUR card pieces.
  {
    id: "v-union-pikachu",
    title: "Pikachu V-UNION",
    description: "Released as SWSH Black Star Promos in 2021, these four cards form a single large illustration of Pikachu unleashing a massive thunderbolt. The assembled image spans all four card faces in a dramatic 2×2 grid.",
    orientation: "grid",
    assembleLabel: "Assemble V-UNION",
    disassembleLabel: "Separate Pieces",
    type: "V-UNION",
    tags: ["V-UNION", "SWSH Promos", "Pikachu", "4-Card", "2021"],
    cards: [
      { id: "swshp-SWSH139", label: "Pikachu V-UNION (Top Left)" },
      { id: "swshp-SWSH140", label: "Pikachu V-UNION (Top Right)" },
      { id: "swshp-SWSH141", label: "Pikachu V-UNION (Bottom Left)" },
      { id: "swshp-SWSH142", label: "Pikachu V-UNION (Bottom Right)" }
    ]
  },
  {
    id: "v-union-mewtwo",
    title: "Mewtwo V-UNION",
    description: "The Mewtwo V-UNION promos (SWSH159–162) form a striking illustration of Mewtwo in an energy-charged pose. Assembled into a 2×2 grid, the full power of the Genetic Pokémon is revealed.",
    orientation: "grid",
    assembleLabel: "Assemble V-UNION",
    disassembleLabel: "Separate Pieces",
    type: "V-UNION",
    tags: ["V-UNION", "SWSH Promos", "Mewtwo", "4-Card", "2021"],
    cards: [
      { id: "swshp-SWSH159", label: "Mewtwo V-UNION (Top Left)" },
      { id: "swshp-SWSH160", label: "Mewtwo V-UNION (Top Right)" },
      { id: "swshp-SWSH161", label: "Mewtwo V-UNION (Bottom Left)" },
      { id: "swshp-SWSH162", label: "Mewtwo V-UNION (Bottom Right)" }
    ]
  },
  {
    id: "v-union-greninja",
    title: "Greninja V-UNION",
    description: "The Greninja V-UNION (SWSH155–158) splits a dynamic water-blade illustration across four cards. When assembled, the full artwork shows Greninja poised for a decisive strike.",
    orientation: "grid",
    assembleLabel: "Assemble V-UNION",
    disassembleLabel: "Separate Pieces",
    type: "V-UNION",
    tags: ["V-UNION", "SWSH Promos", "Greninja", "4-Card", "2021"],
    cards: [
      { id: "swshp-SWSH155", label: "Greninja V-UNION (Top Left)" },
      { id: "swshp-SWSH156", label: "Greninja V-UNION (Top Right)" },
      { id: "swshp-SWSH157", label: "Greninja V-UNION (Bottom Left)" },
      { id: "swshp-SWSH158", label: "Greninja V-UNION (Bottom Right)" }
    ]
  },
  {
    id: "v-union-zacian",
    title: "Zacian V-UNION",
    description: "The Zacian V-UNION (SWSH163–166) features the Warrior Pokémon in its Crowned Sword form across four connected pieces. A fitting tribute to the Sword Shield flagship Legendary.",
    orientation: "grid",
    assembleLabel: "Assemble V-UNION",
    disassembleLabel: "Separate Pieces",
    type: "V-UNION",
    tags: ["V-UNION", "SWSH Promos", "Zacian", "4-Card", "2021"],
    cards: [
      { id: "swshp-SWSH163", label: "Zacian V-UNION (Top Left)" },
      { id: "swshp-SWSH164", label: "Zacian V-UNION (Top Right)" },
      { id: "swshp-SWSH165", label: "Zacian V-UNION (Bottom Left)" },
      { id: "swshp-SWSH166", label: "Zacian V-UNION (Bottom Right)" }
    ]
  },

  // ── SOUTHERN ISLANDS (2001) ───────────────────────────────
  // 18 promo cards arranged into 6 triptychs, each forming
  // a continuous tropical scene from a different part of the islands.
  {
    id: "southern-islands-beach",
    title: "Southern Islands — Beach",
    description: "Three cards from the 2001 Southern Islands promo set (illustrated by Keiko Fukuyama and Naoyo Kimura) form a continuous tropical beach panorama. Slowking, Exeggutor, and Wartortle share a sun-drenched coastal scene.",
    orientation: "horizontal",
    assembleLabel: "Assemble Scene",
    disassembleLabel: "Spread Cards",
    type: "Triptych",
    tags: ["Southern Islands", "Triptych", "Promo 2001", "Tropical", "Keiko Fukuyama"],
    cards: [
      { id: "si2-1", label: "Slowking" },
      { id: "si2-2", label: "Exeggutor" },
      { id: "si2-3", label: "Wartortle" }
    ]
  },
  {
    id: "southern-islands-sea",
    title: "Southern Islands — Sea",
    description: "Tentacruel, Marill, and Lapras share a continuous underwater / sea-surface scene in this Southern Islands triptych, showing the waters around the tropical islands.",
    orientation: "horizontal",
    assembleLabel: "Assemble Scene",
    disassembleLabel: "Spread Cards",
    type: "Triptych",
    tags: ["Southern Islands", "Triptych", "Promo 2001", "Water", "Naoyo Kimura"],
    cards: [
      { id: "si2-4", label: "Tentacruel" },
      { id: "si2-5", label: "Marill" },
      { id: "si2-6", label: "Lapras" }
    ]
  },
  {
    id: "southern-islands-jungle",
    title: "Southern Islands — Jungle",
    description: "Lickitung, Vileplume, and Primeape form a lush jungle interior scene. Dense tropical foliage ties the three cards together into one continuous island environment.",
    orientation: "horizontal",
    assembleLabel: "Assemble Scene",
    disassembleLabel: "Spread Cards",
    type: "Triptych",
    tags: ["Southern Islands", "Triptych", "Promo 2001", "Jungle", "Keiko Fukuyama"],
    cards: [
      { id: "si1-1", label: "Lickitung" },
      { id: "si1-2", label: "Vileplume" },
      { id: "si1-3", label: "Primeape" }
    ]
  },

  // ── CONNECTED PAIRS — SV Era ──────────────────────────────
  {
    id: "volbeat-illumise-sv6",
    title: "Volbeat & Illumise — Twilight Masquerade",
    description: "Illustrated by Orca, these two cards from Twilight Masquerade (SV6, 2024) form a seamless connected diptych of Volbeat (#9/167) and Illumise (#10/167) sharing a moonlit, firefly-lit nighttime scene.",
    orientation: "horizontal",
    assembleLabel: "Assemble Scene",
    disassembleLabel: "Spread Cards",
    type: "Diptych",
    tags: ["SV6", "Twilight Masquerade", "Diptych", "Orca", "2024"],
    cards: [
      { id: "sv6-9", label: "Volbeat (9/167)" },
      { id: "sv6-10", label: "Illumise (10/167)" }
    ]
  },
  {
    id: "plusle-minun-paradox",
    title: "Plusle & Minun — Paradox Rift",
    description: "In Paradox Rift (SV4, 2023), Plusle (#193) and Minun (#194) appear as a connected Secret Rare pair — two illustration rares whose backgrounds seamlessly merge into a single energetic scene.",
    orientation: "horizontal",
    assembleLabel: "Assemble Scene",
    disassembleLabel: "Spread Cards",
    type: "Diptych",
    tags: ["SV4", "Paradox Rift", "Illustration Rare", "Secret Rare", "2023"],
    cards: [
      { id: "sv4-193", label: "Plusle (193/182)" },
      { id: "sv4-194", label: "Minun (194/182)" }
    ]
  },

  // ── TEEZIRO CONNECTED SERIES (2024–2025) ─────────────────
  {
    id: "teeziro-series-sv",
    title: "Teeziro — 9-Card Connected Series",
    description: "Illustrator Teeziro created a celebrated nine-card connected panorama distributed across three Scarlet & Violet sets: Twilight Masquerade, Temporal Forces, and Surging Sparks. Each group of three cards forms a regional scene that connects with the others.",
    orientation: "horizontal",
    assembleLabel: "Assemble Scene",
    disassembleLabel: "Spread Cards",
    type: "Panorama",
    tags: ["Teeziro", "Connected Series", "SV Era", "9-Card", "2024–2025"],
    cards: [
      { id: "sv6-189", label: "Torkoal (Twilight Masquerade)" },
      { id: "sv6-190", label: "Torkoal (Twilight Masquerade)" },
      { id: "sv5-189", label: "Temporal Forces Card" },
      { id: "sv5-190", label: "Temporal Forces Card" },
      { id: "sv8-1",   label: "Surging Sparks Card" }
    ]
  },

  // ── AYAKO OZAKI NATURE PANORAMA (2024–2025) ──────────────
  {
    id: "ayako-ozaki-nature",
    title: "Ayako Ozaki — Nature Panorama",
    description: "Illustrator Ayako Ozaki distributed a six-card connected nature panorama across multiple 2024–2025 sets. Each pair of cards from Temporal Forces, Twilight Masquerade, and Surging Sparks adds to a continuous woodland scene.",
    orientation: "horizontal",
    assembleLabel: "Assemble Scene",
    disassembleLabel: "Spread Cards",
    type: "Panorama",
    tags: ["Ayako Ozaki", "Nature", "6-Card", "SV Era", "2024–2025"],
    cards: [
      { id: "sv9-4",  label: "Paras (Destined Rivals/Temporal Forces)" },
      { id: "sv9-21", label: "Lotad (Destined Rivals/Temporal Forces)" },
      { id: "sv6-13", label: "Ponyta (Twilight Masquerade)" },
      { id: "sv6-30", label: "Buizel (Twilight Masquerade)" },
      { id: "sv8-45", label: "Mankey (Surging Sparks)" },
      { id: "sv8-84", label: "Taillow (Surging Sparks)" }
    ]
  }
];

// Site metadata
const SITE_META = {
  title: "TCG Art Gallery",
  subtitle: "Exploring the artwork of the Pokémon Trading Card Game",
  apiBase: "https://api.pokemontcg.io/v2",
  totalArtists: ARTISTS.length,
  totalScenes: SCENE_SETS.length
};
