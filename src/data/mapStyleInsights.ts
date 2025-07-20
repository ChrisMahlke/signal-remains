export const mapStyleInsights = [
  {
    tour: 'Early Irish Shows',
    legNumber: 1,
    mapId: '11a94722049cf825113f7aff',
    themeName: 'Muted Earth Tones',
    visualSummary:
      "A dark, minimalist base map evoking Ireland's underground punk movement and the socio-political unrest of the late 1970s.",
    rationale: [
      {
        label: 'Base Geometry',
        featureType: 'all',
        elementType: 'geometry',
        color: '#1e1e26',
        meaning:
          'Creates a near-black visual foundation. Represents shadow, austerity, and the dimly lit venues where early shows took place.',
      },
      {
        label: 'Text Fill',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#a9a9b8',
        meaning:
          'Applies cool gray tones to all labels — legible but emotionally restrained, evoking a sense of distance or fatigue.',
      },
      {
        label: 'Text Stroke',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#0e0e0e',
        meaning:
          'Heavy black outlines improve legibility against dark backgrounds without lifting the mood — function without optimism.',
      },
      {
        label: 'Borders',
        featureType: 'administrative.country',
        elementType: 'geometry.stroke',
        color: '#3a3a3a',
        meaning:
          'Uses muted outlines to show borders without emphasizing national divisions during a politically fragile period.',
      },
      {
        label: 'City Labels',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#c8c8e8',
        meaning:
          'Makes major cities like Dublin slightly more prominent — emphasizing the local intensity of the underground music scene.',
      },
      {
        label: 'Parks and POIs',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#2e2e38',
        meaning:
          'Parks and POIs are dimmed or flattened — traditional civic spaces are visually merged with the background.',
      },
      {
        label: 'Roads',
        featureType: 'road',
        elementType: 'geometry',
        color: '#35353f',
        meaning:
          'Roads are reduced in contrast and lightness — de-emphasizing formal infrastructure in favor of neighborhood-scale geography.',
      },
      {
        label: 'Highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#41415c',
        meaning:
          "Highways are narrowed and darkened — U2 wasn't yet a touring band. Regional mobility wasn't part of the narrative.",
      },
      {
        label: 'Water',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#1b1b24',
        meaning:
          'Water is nearly indistinguishable from land — reflecting a flattened emotional landscape without romanticism.',
      },
    ],
  },
  {
    tour: 'Boy',
    legNumber: 1,
    mapId: '11a94722049cf8257567c411',
    themeName: 'Youthful Pastel Terrain',
    visualSummary:
      "This map design uses soft contrast, pale blues, and minimal visual noise to reflect the emotional openness of U2's early Boy tour. The palette evokes innocence and possibility, framing geography through the lens of youthful introspection rather than political division.",
    rationale: [
      {
        label: 'Soft background terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#f5f5f5',
        meaning:
          'A bright, neutral base enhances readability and invokes the clean slate of adolescence — ideal for a tour rooted in discovery and emotional emergence.',
      },
      {
        label: 'Emotive typography colors',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#3c3c3c on #ffffff stroke',
        meaning:
          'Text retains structure but softens impact with light outlines and subdued fills, supporting legibility while maintaining a gentle aesthetic.',
      },
      {
        label: 'Warm highway tones',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#ffdab9',
        meaning:
          'Instead of stark grays, warm pastel peach is used for highways — suggesting movement and energy without harshness, resonating with themes of journey and becoming.',
      },
      {
        label: 'Playful accent labeling',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#cc7150',
        meaning:
          'Local place names use a warm clay-orange tone, adding vibrancy and youth to otherwise quiet visual regions — a nod to small towns and emerging scenes.',
      },
      {
        label: 'Muted natural features',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#cce0d1',
        meaning:
          "Natural elements use dreamy pastel greens and aquatic blues, reinforcing the tour's reflective tone and the idea of landscape as emotional backdrop.",
      },
      {
        label: 'Hidden infrastructure',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          'By minimizing urban clutter, the style allows emotional and geographic narratives to take center stage — a map that favors mood over data density.',
      },
    ],
  },
  {
    tour: 'Boy',
    legNumber: 2,
    mapId: '11a94722049cf825c36e0411',
    themeName: 'Rustbelt Nocturne',
    visualSummary:
      "This style reflects U2's early 1980s entry into the American cultural landscape — where college radio, post-industrial cities, and Reagan-era contradictions defined the backdrop. Deep, industrial grays and burnt orange-gold text accents mirror the grit of northeastern campuses and the poetic darkness of U2's Boy-era lyrics.",
    rationale: [
      {
        label: 'Industrial Geometry',
        featureType: 'all',
        elementType: 'geometry',
        color: '#2e2f38',
        meaning:
          "A dark steel-blue background echoes American post-industrial regions like the Rust Belt — where U2's college radio following took root. It creates contrast for warm accents and simulates a nocturnal cityscape.",
      },
      {
        label: 'Golden Amber Labels',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#f4c17a and #f09b44',
        meaning:
          'Text styling features rich amber-gold tones, adding warmth, visibility, and a sense of 1980s optimism in contrast to the subdued background.',
      },
      {
        label: 'Muted Terrain',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#393b44',
        meaning:
          'The landscape blends with infrastructure to create continuity — reflecting cities where roads and buildings blur into the environment: New York, Boston, Detroit.',
      },
      {
        label: 'Park & Water Textures',
        featureType: 'poi.park / water',
        elementType: 'geometry.fill',
        color: '#4b5747 and #25324a',
        meaning:
          'Natural elements use near-military greens and navy tones, grounding the style in realism. This avoids romanticizing geography — appropriate for a tour reflecting emotional struggle and breakthrough.',
      },
      {
        label: 'Highway Contrast',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#f0af5d',
        meaning:
          "Warm, high-contrast orange highlights highways — metaphorically tracing U2's rising movement across American cities during their first major North American exposure.",
      },
      {
        label: 'Hidden Visual Noise',
        featureType: 'transit / poi / icons',
        elementType: 'geometry / labels',
        color: 'none',
        meaning:
          'Non-essential map clutter is suppressed to let typography and road networks define the narrative — emphasizing motion and place identity.',
      },
    ],
  },
  {
    tour: 'Boy',
    legNumber: 3,
    mapId: '11a94722049cf825440ec136',
    themeName: 'Urban Echo',
    visualSummary:
      "This map style encapsulates U2's 1981 North American expansion — marked by performances in gritty downtowns and art-driven college towns. The palette uses industrial grays, chalky whites, and muted golds to evoke the concrete textures and emotional tonality of the early '80s underground music scene.",
    rationale: [
      {
        label: 'Darkened Urban Core',
        featureType: 'all',
        elementType: 'geometry',
        color: '#2c2c2c',
        meaning:
          "A dense, near-black base simulates the heavy, low-contrast feel of urban sprawl — suggestive of U2's entry into major city venues and nighttime college circuits.",
      },
      {
        label: 'Dusty Highlighted Labels',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#f7f3dc with #ffe49a for localities',
        meaning:
          'Hand-drawn style text coloring in faded ivory and goldenrod balances legibility with an aged tone, resembling 1980s Xerox posters or chalkboard signage common at indie clubs.',
      },
      {
        label: 'Grayscale Infrastructure',
        featureType: 'landscape / road',
        elementType: 'geometry.fill',
        color: '#3a3a3a and #4c4c4c',
        meaning:
          "High-grit midtones reinforce a tactile sense of surface — concrete, steel, wet pavement — aligning with the visual and sonic textures of the Boy album's darker cuts.",
      },
      {
        label: 'Minimal Distraction',
        featureType: 'poi / transit / icons',
        elementType: 'labels / geometry',
        color: 'none',
        meaning:
          "Non-essential map elements are removed to center visual weight on city shape and name — symbolic of the band's focus on place as identity in this leg.",
      },
      {
        label: 'Burnished Highway Accents',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#b58e51',
        meaning:
          "The subtle gold-bronze tones on major routes subtly hint at movement, ambition, and the band's growing cross-border connectivity.",
      },
      {
        label: 'Monochrome Waterscapes',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#1e1e1e',
        meaning:
          'Rather than reflective blues, water is treated as a matte, textureless body — giving the map weight and solemnity, and avoiding sentimentality.',
      },
    ],
  },
  {
    tour: 'U2-3',
    legNumber: 1,
    mapId: '11a94722049cf8259c0ef597',
    themeName: 'Industrial Minimalism',
    visualSummary:
      "This map adopts a stark, post-industrial palette of steel grays, muted blacks, and subtle accent hues to evoke the aesthetic of late-70s London. Drawing from Brutalist architecture and the emergent post-punk scene, the design captures the emotional restraint, economic austerity, and urban edge of U2's early London performances.",
    rationale: [
      {
        label: 'Concrete terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#1a1a1a',
        meaning:
          'A dark gray base mimics the concrete uniformity of Brutalist London — a city shaped by modernist structures, economic strain, and post-industrial repetition.',
      },
      {
        label: 'Neon contrast text',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#e0c9ff',
        meaning:
          'Text coloration borrows from tube signage and industrial lighting — cold purples against dark backdrops, reflecting the technological minimalism of the era.',
      },
      {
        label: 'Heavy text outlines',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#0a0a0a',
        meaning:
          "Thick black strokes enforce structure and rigidity, reinforcing the map's severe visual tone and enhancing legibility amid dark layers.",
      },
      {
        label: 'Muted administrative boundaries',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#3e3e3e',
        meaning:
          'City boundaries and districts are present but subdued — an intentional nod to the eroding sense of place amid urban sprawl and socio-political fragmentation.',
      },
      {
        label: 'Accent city labeling',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#ffad66',
        meaning:
          'City names stand out with amber-orange hues, suggesting cultural heat spots amid an otherwise cold and industrial palette — much like key venues in Camden or Islington.',
      },
      {
        label: 'Asphalt landscape fill',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#222222',
        meaning:
          "The landscape is deliberately featureless — flat, dark, and tonal — to echo the flattened emotional topography of London's industrial grid.",
      },
      {
        label: 'Suppressed POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#1f1f1f',
        meaning:
          'Non-essential landmarks are visually silenced, placing emphasis on cultural undercurrents and music venues rather than commercial clutter.',
      },
      {
        label: 'Muted park overlays',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#2e2e2e',
        meaning:
          "Green spaces are visually neutralized — more memory than presence — reflecting the tour's focus on urban density rather than natural relief.",
      },
      {
        label: 'Subtle road detailing',
        featureType: 'road',
        elementType: 'geometry',
        color: '#393939',
        meaning:
          'Urban roads are shown in deep charcoal with slight variation, giving a sense of infrastructural permanence without overwhelming the visual hierarchy.',
      },
      {
        label: 'Rust-toned highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#543a3a',
        meaning:
          "Highways are drawn in aged reds and browns — suggestive of rust, decay, and the industrial arteries connecting London's working-class boroughs.",
      },
      {
        label: 'Removed iconography',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          "Navigation icons are hidden to preserve visual austerity and prevent distraction from the map's emotional tonality.",
      },
      {
        label: 'No local road text',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'Local road labels are removed to enhance abstraction — emphasizing emotional geography over literal street-by-street navigation.',
      },
      {
        label: 'Steel transit lines',
        featureType: 'transit.line',
        elementType: 'geometry',
        color: '#464646',
        meaning:
          "Transit infrastructure is retained but stylized — thin and metallic, they reference the London Underground's role in shaping urban culture and movement.",
      },
      {
        label: 'Hidden transit stations',
        featureType: 'transit.station',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Stations are visually suppressed to prioritize atmosphere over functional readability — this is not a map to navigate by, but to feel through.',
      },
      {
        label: 'Industrial water fill',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#1b1b2b',
        meaning:
          "The Thames and other waterways adopt an inky blue-black — reflective of London's industrial waterfront and symbolic depth.",
      },
      {
        label: 'Cold water labeling',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#555577',
        meaning:
          "Label colors for water remain subdued and steely, reinforcing the map's emotional restraint and nocturnal palette.",
      },
    ],
  },
  {
    tour: "11 O'Clock Tick Tock",
    legNumber: 1,
    mapId: '11a94722049cf8253008805d',
    themeName: 'Urgent Modernism',
    visualSummary:
      "This map channels the political urgency and emotional volatility of 1980 through sharp contrasts, angular design, and a tension-filled palette. A moody blue-black base, alarm-red accents, and structured geometry convey the pulse of Cold War anxieties and the clarity of U2's emerging voice.",
    rationale: [
      {
        label: 'Pressure-toned terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#0f0f1a',
        meaning:
          'A deep indigo-black background evokes the geopolitical weight and psychological pressure of the Cold War, creating a canvas of quiet tension.',
      },
      {
        label: 'Alert-gold text',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#e5b77a',
        meaning:
          'Typography glows with a yellowed urgency, reminiscent of ticker tapes, protest signs, and warning systems — hinting at constant awareness and motion.',
      },
      {
        label: 'Heavy type outlines',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#000000',
        meaning:
          'Text is grounded with thick black strokes, enforcing visual stability amid contrast-heavy design — much like political clarity cutting through chaos.',
      },
      {
        label: 'Rigid administrative edges',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#301a1a',
        meaning:
          'District and national boundaries are outlined in a dried-blood brown, symbolizing ideological separation and historical tension.',
      },
      {
        label: 'Crisis-colored locality labels',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#ff4c4c',
        meaning:
          'City names pulse in red, recalling sirens, alerts, and political flashpoints — placing urban centers in the visual spotlight.',
      },
      {
        label: 'Shadowed landscape base',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#1a1a2a',
        meaning:
          'The ground texture is toned down and shadowed, keeping focus on symbolic overlays while maintaining a sense of temporal darkness.',
      },
      {
        label: 'Suppressed commercial POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#1d1d27',
        meaning:
          'Points of interest are de-emphasized, reflecting a world where cultural landmarks recede beneath urgent geopolitical narratives.',
      },
      {
        label: 'Midnight park tone',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#202036',
        meaning:
          'Urban parks are rendered in inky purples — contemplative but overshadowed, representing a fading public calm amid political turbulence.',
      },
      {
        label: 'Grayscale road grid',
        featureType: 'road',
        elementType: 'geometry',
        color: '#2e2e3e',
        meaning:
          'Roads are treated with a functional charcoal — neither inviting nor oppressive — symbolizing structured paths in uncertain times.',
      },
      {
        label: 'Crisis highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#661111',
        meaning:
          'Major roads run red, like arteries of protest and unrest — hinting at both connectivity and volatility across nations.',
      },
      {
        label: 'Icon suppression',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Street icons are removed for focus and visual silence — reinforcing the theme of urgency over ornamentation.',
      },
      {
        label: 'Absent local labels',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'Local street names are hidden to prioritize macro-level tensions and regional symbology over neighborhood-level familiarity.',
      },
      {
        label: 'Steel transit lines',
        featureType: 'transit.line',
        elementType: 'geometry',
        color: '#3a3a3a',
        meaning:
          'Transit paths appear as stark wires — lean and mechanical — invoking themes of surveillance, networks, and state control.',
      },
      {
        label: 'Transit icon removal',
        featureType: 'transit.station',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Icons for stations are removed to maintain a minimal and high-stakes aesthetic — fitting for a map of fractured urgency.',
      },
      {
        label: 'Nuclear-water tones',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#14142a',
        meaning:
          'Bodies of water adopt a radioactive navy, evoking silent threats, ideological depth, and potential rupture.',
      },
      {
        label: 'Subdued aquatic labels',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#5f6a7f',
        meaning:
          'Text over water retains legibility without prominence — reinforcing the cool detachment of large, slow-moving forces.',
      },
    ],
  },
  {
    tour: 'October',
    legNumber: 1,
    mapId: '11a94722049cf825220c1246',
    themeName: 'Spiritual Minimalism',
    visualSummary:
      'This map reflects the contemplative tone of the October Tour with a grounded, earth-toned palette and clean text treatments. Soft contrasts and muted forms support a mood of personal reflection and inner clarity, standing in quiet contrast to the commercial noise of the era.',
    rationale: [
      {
        label: 'Earth-toned terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#2a1f1e',
        meaning:
          'A deep, earthen base evokes spiritual rootedness and emotional gravity — suited to the stripped-down intimacy of the October Tour.',
      },
      {
        label: 'Sepia-toned typography',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#e8dbc2',
        meaning:
          'Warm, parchment-inspired text colors reflect reflection and reverence — like aged scripture or handwritten lyrics.',
      },
      {
        label: 'Chapel-dark text strokes',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#1a0f0d',
        meaning:
          'Thick, dark strokes preserve visual clarity while invoking the hush and gravity of sacred spaces.',
      },
      {
        label: 'Muted boundaries',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#4e3b35',
        meaning:
          'Subtle, earthen borders maintain structural legibility without competing for emotional focus.',
      },
      {
        label: 'Golden city labels',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#c99c5a',
        meaning:
          'Place names glow with spiritual warmth, reflecting sacred architecture and personal storytelling tied to place.',
      },
      {
        label: 'Dusty landscape fill',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#3b2d2b',
        meaning:
          'Muted landscape tones echo a meditative mood — environments as soft backdrops to internal journeys.',
      },
      {
        label: 'Silenced commercial POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#2e2322',
        meaning:
          'Points of interest are dimmed and hidden, emphasizing stillness, simplicity, and non-material experience.',
      },
      {
        label: 'Shadowed park areas',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#423d3a',
        meaning:
          'Green spaces are softened, encouraging contemplation and emotional refuge rather than visual celebration.',
      },
      {
        label: 'Clay-colored roads',
        featureType: 'road',
        elementType: 'geometry',
        color: '#a87c5f',
        meaning:
          'Paths are visually present but unintrusive — roads as pilgrim trails rather than busy conduits.',
      },
      {
        label: 'Sun-dried highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#e0b884',
        meaning:
          'Major routes adopt golden hues, invoking warmth, direction, and hope within simplicity.',
      },
      {
        label: 'Hidden map icons',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Icons are removed to keep focus on mood and meaning over navigation or distraction.',
      },
      {
        label: 'No local road text',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          "Smaller street labels are silenced to keep the map's tone uncluttered and meditative.",
      },
      {
        label: 'No transit geometry',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          'Transit lines are omitted entirely — mobility becomes emotional rather than infrastructural.',
      },
      {
        label: 'Spiritual water tone',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#1e1a1a',
        meaning:
          'Water is dark and serene — symbolizing emotional depth and unspoken introspection.',
      },
      {
        label: 'Subdued aquatic text',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#786f6a',
        meaning:
          'Water labels are cool and quiet, maintaining reverence within the overall stillness.',
      },
    ],
  },
  {
    tour: 'October',
    legNumber: 2,
    mapId: '11a94722049cf825aecfa86f',
    themeName: 'Spiritual Minimalism',
    visualSummary:
      "This map reflects the October Tour's message of transcendence and quiet rebellion by pairing deep indigo geometry with radiant gold highlights. The style mirrors a generation questioning media spectacle, finding clarity in faith, sincerity, and simplicity.",
    rationale: [
      {
        label: 'Night-sky terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#1f2b33',
        meaning:
          "The deep, celestial blue base conjures the feeling of late-night reflection — introspective and vast — aligning with the tour's spiritual core.",
      },
      {
        label: 'Radiant gold text',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#fce27a',
        meaning:
          'Typography glows like candlelight or stained glass, highlighting inner awakening amidst societal distraction.',
      },
      {
        label: 'Structured contrast stroke',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#000000',
        meaning:
          'Black text outlines offer grounded legibility without disrupting the elevated visual tone — symbolic of faith grounded in reality.',
      },
      {
        label: 'Framed spiritual boundaries',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#3a4c56',
        meaning:
          "Boundaries are visible yet softened — suggesting structure without rigidity, mirroring the band's evolving moral and emotional philosophy.",
      },
      {
        label: 'Golden locality labeling',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#ffcb3a',
        meaning:
          'City names appear in a warm, guiding yellow — like lighthouses amid shifting cultural tides.',
      },
      {
        label: 'Subtle blue-gray landscape',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#263640',
        meaning:
          'The landscape adopts a serene, tonal wash — visualizing clarity and depth without emotional noise.',
      },
      {
        label: 'Muted POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#2b3c46',
        meaning:
          'Points of interest are dimmed and softened, focusing the eye inward rather than toward distraction or commerce.',
      },
      {
        label: 'Sanctuary greenspace',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#2f443f',
        meaning:
          'Parks are shaded with subtle forest tones — quiet sanctuaries echoing spiritual solitude within the city.',
      },
      {
        label: 'Cool-toned roads',
        featureType: 'road',
        elementType: 'geometry',
        color: '#d3d3d3',
        meaning:
          'Streets appear in soft, neutral gray — functional but not overpowering, like pathways to be chosen freely.',
      },
      {
        label: 'Gold-highlighted highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#ffd76a',
        meaning:
          'Major roads shimmer with warm gold — a symbolic thread connecting cities in the pursuit of truth and higher purpose.',
      },
      {
        label: 'Hidden road icons',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Road icons are removed to maintain visual serenity and reduce cartographic noise.',
      },
      {
        label: 'No local road labels',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'Removing small road names preserves the minimalist tone and shifts attention to emotional geography.',
      },
      {
        label: 'No transit overlay',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          'Transit elements are absent — this is a map for inner movement, not urban navigation.',
      },
      {
        label: 'Depth-filled water',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#192932',
        meaning:
          "Waterways reflect dark, contemplative blues — echoing the album's meditations on loss, faith, and spiritual passage.",
      },
      {
        label: 'Cool marine text',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#788d96',
        meaning:
          'Water labels are quiet and introspective — an emotional surface rather than a navigational layer.',
      },
    ],
  },
  {
    tour: 'October',
    legNumber: 3,
    mapId: '11a94722049cf825e12a2f32',
    themeName: 'Spiritual Minimalism',
    visualSummary:
      "This map embodies the October Tour's spiritual tone through a luminous, high-contrast minimalism. Pale backgrounds, gentle shadows, and soft blue-gray accents convey both clarity and reverence — echoing the band's quiet emotional intensity across North America in 1982.",
    rationale: [
      {
        label: 'Luminous base layer',
        featureType: 'all',
        elementType: 'geometry',
        color: '#e8e9ec',
        meaning:
          'A light gray base sets a clean, contemplative tone — suggesting purity, potential, and the search for spiritual grounding.',
      },
      {
        label: 'Muted steel-gray text',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#6d6f76',
        meaning:
          'Typography is legible but softened, reflecting humility and inner dialogue over media bravado.',
      },
      {
        label: 'White text strokes',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#ffffff',
        meaning:
          'White outlines give clarity without weight — text floats gently over a sacred, light-infused surface.',
      },
      {
        label: 'Hushed boundaries',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#b4bcc4',
        meaning:
          'Administrative lines are pale and ghostlike — barely there, evoking spiritual rather than political structure.',
      },
      {
        label: 'Cerulean city labels',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#9aabbf',
        meaning:
          'City names appear in soft blue-gray, symbolizing calm and sincerity across vast American geographies.',
      },
      {
        label: 'Washed-out landscape',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#f0f1f3',
        meaning:
          'The land is bleached and minimal — spaces for silence, contemplation, and quiet encounters.',
      },
      {
        label: 'Suppressed POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#f2f2f2',
        meaning:
          "Points of interest are rendered in near-invisible tones, aligning with the band's low-profile venues and anti-glamour aesthetic.",
      },
      {
        label: 'Peaceful park tones',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#dbe2e5',
        meaning:
          'Green spaces carry a spiritual coolness — places of rest and reflection along a journey of belief.',
      },
      {
        label: 'Calm gray roads',
        featureType: 'road',
        elementType: 'geometry',
        color: '#d4d7db',
        meaning:
          'Roads are light and even-toned — not assertive, but gentle pathways across a continent in flux.',
      },
      {
        label: 'Pale highways of connection',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#ccd4dd',
        meaning:
          'Highways appear in soft silver, suggesting graceful movement — not driven by fame, but by purpose and meaning.',
      },
      {
        label: 'Removed road icons',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Navigation icons are stripped to maintain visual stillness — this map is emotional, not functional.',
      },
      {
        label: 'Silent local roads',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'Local names are removed, directing focus to broader geographic emotions and spiritual resonance.',
      },
      {
        label: 'No transit elements',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          'Transit data is absent, reinforcing a slower, more intentional journey through place and sound.',
      },
      {
        label: 'Serene water fill',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#cfdde5',
        meaning:
          'Water adopts a tranquil pastel blue — reflecting stillness, flow, and emotional presence.',
      },
      {
        label: 'Cool, light water text',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#8fa4b3',
        meaning:
          "Water labels whisper rather than declare — a quiet nod to emotional undercurrents beneath the tour's surface.",
      },
    ],
  },
  {
    tour: 'War',
    legNumber: 1,
    mapId: '11a94722049cf8257566597d',
    themeName: 'Bold Political Contrast',
    visualSummary:
      "This map embodies the War Tour's confrontational tone with stark contrasts, military reds, and assertive borders. Its visual design reflects a world in ideological conflict — echoing the album's outcry against nationalism, violence, and division.",
    rationale: [
      {
        label: 'Charcoal battlefield base',
        featureType: 'all',
        elementType: 'geometry',
        color: '#1a1a1a',
        meaning:
          'A dark gray foundation sets a serious and unflinching tone — representing global unrest, tension, and conflict.',
      },
      {
        label: 'White-hot text fill',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#f5f5f5',
        meaning:
          'Typography is sharp and bright — defiant against the darkness, conveying clarity in the face of chaos.',
      },
      {
        label: 'Militarized black strokes',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#000000',
        meaning:
          'Heavy black outlines amplify contrast and rigidity — echoing propaganda posters and authoritarian signage.',
      },
      {
        label: 'Assertive national lines',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#444444',
        meaning:
          'Borders are bold and reinforced — visualizing geopolitical fracture, nationalism, and ideological division.',
      },
      {
        label: 'War-signal city labels',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#d44a36',
        meaning:
          'Urban labels blaze in conflict red — marking cultural hotspots and protest hubs as ideological battlegrounds.',
      },
      {
        label: 'Darkened terrain',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#2b2b2b',
        meaning:
          "The physical landscape is muted and oppressive — an emotional war zone reflective of the tour's themes.",
      },
      {
        label: 'Silenced POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#1f1f1f',
        meaning:
          'Points of interest are dimmed or removed, redirecting focus from leisure to urgency and message.',
      },
      {
        label: 'Shadowed public parks',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#3d3d3d',
        meaning:
          'Greenspace adopts somber gray-green hues — spaces of protest, not peace.',
      },
      {
        label: 'Arterial red roads',
        featureType: 'road',
        elementType: 'geometry',
        color: '#c73a2b',
        meaning:
          'Roads pulse in muted red — conduits of movement and resistance, symbolizing marching routes and conflict lines.',
      },
      {
        label: 'Explosive highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#ff2e2e',
        meaning:
          'Highways are drawn in a volatile, high-impact red — like warning signs or alarms cutting across borders.',
      },
      {
        label: 'Removed icon clutter',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Icons are eliminated to preserve focus and maximize the visual weight of contrast and structure.',
      },
      {
        label: 'Omitted local street names',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'Local road names are hidden to shift from granular detail to high-level geopolitical meaning.',
      },
      {
        label: 'Steeled transit geometry',
        featureType: 'transit',
        elementType: 'geometry',
        color: '#292929',
        meaning:
          'Transit systems are simplified and stylized — steel-gray networks of movement within militarized space.',
      },
      {
        label: 'Abyssal water fill',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#1c1c1c',
        meaning:
          'Bodies of water are rendered in black — symbolizing the emotional and political depths of war.',
      },
      {
        label: 'Gray aquatic labels',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#666666',
        meaning:
          "Water label text is cool and somber — a restrained visual echo of the tour's themes of warning and resistance.",
      },
    ],
  },
  {
    tour: 'War',
    legNumber: 2,
    mapId: '11a94722049cf8253719d5af',
    themeName: 'Bold Political Contrast',
    visualSummary:
      "This map extends the War Tour's militant visual language into a broader global canvas. Deep bronze tones, sharpened lines, and radical contrast define a world gripped by unrest — from Cold War capitals to activist strongholds. Aesthetic intensity mirrors the band's loud, uncompromising stage presence.",
    rationale: [
      {
        label: 'Bronzed conflict terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#3a2c22',
        meaning:
          'A burned-earth tone forms the visual base — rich and heavy, evoking global tension and ideological pressure.',
      },
      {
        label: 'Revolution gold text',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#f9e1b5',
        meaning:
          'Text is styled in a radiant, poster-like gold — suggestive of uprising, resistance, and mass messaging.',
      },
      {
        label: 'Dark sepia strokes',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#1c130e',
        meaning:
          'Letters are bordered with dense brown-black — a grounding force that enforces discipline and weight in typography.',
      },
      {
        label: 'Fortified administrative lines',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#5a4433',
        meaning:
          'National and city borders are highlighted as sites of confrontation and political delineation.',
      },
      {
        label: 'Activist yellow city labels',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#ffbf45',
        meaning:
          'Urban centers glow with ideological urgency — hotspots for protest, youth movements, and cultural upheaval.',
      },
      {
        label: 'Shadowed landscapes',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#4a3a2a',
        meaning:
          'The land is textured like an aging battlefield — worn, charged, and unrelenting in tone.',
      },
      {
        label: 'Muted POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#423229',
        meaning:
          'Non-essential landmarks are visually demoted — spotlight remains on civic tension, not commerce or tourism.',
      },
      {
        label: 'Tarnished park zones',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#706044',
        meaning:
          'Green areas carry the weight of public gathering, dissent, and historical memory — spaces where meaning is contested.',
      },
      {
        label: 'Dirt-toned roads',
        featureType: 'road',
        elementType: 'geometry',
        color: '#dfac6b',
        meaning:
          'Roads are shaded in desaturated tan — neutral but not peaceful — channels of both movement and unrest.',
      },
      {
        label: 'Fiery orange highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#f07057',
        meaning:
          'Highways cut across the map in hot orange-red — arterial routes of protest tours, state visits, and Cold War maneuvering.',
      },
      {
        label: 'Minimal road iconography',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Icons are stripped away to enforce an aesthetic of simplicity and ideological clarity.',
      },
      {
        label: 'Suppressed local road labels',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'Small-scale details are hidden — this is a geopolitical canvas, not a neighborhood guide.',
      },
      {
        label: 'Transit omitted',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          'Transit data is excluded to focus entirely on emotional and political geographies, not infrastructure.',
      },
      {
        label: 'Steel-blue water fill',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#1e2a2f',
        meaning:
          'Seas and rivers take on a cold, metal blue — symbolic of global tension, surveillance, and post-industrial energy.',
      },
      {
        label: 'Muted marine labels',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#7f9aa6',
        meaning:
          'Water labels retain legibility while staying emotionally restrained — cartographic calm in a sea of symbolic conflict.',
      },
    ],
  },
  {
    tour: 'Unforgettable Fire',
    legNumber: 1,
    mapId: '11a94722049cf825b019015b',
    themeName: 'Atmospheric Grandeur',
    visualSummary:
      "This map evokes cinematic expansiveness and warmth. Subtle gradients, light earth tones, and glowing detail create a visual landscape that mirrors U2's growing global presence and ambient musical textures.",
    rationale: [
      {
        label: 'Soft ivory terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#f8f4f1',
        meaning:
          'The bright, warm-toned base reflects cinematic light — conveying purity, scale, and visual airiness.',
      },
      {
        label: 'Sepia script fill',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#8c6f5d',
        meaning:
          'Typography takes on a soft, archival tone — like handwritten notes or old cinema titles, evoking nostalgia and atmosphere.',
      },
      {
        label: 'Gentle white strokes',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#ffffff',
        meaning:
          'Subtle outlines increase readability without adding tension — reinforcing the visual softness.',
      },
      {
        label: 'Faded administrative borders',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#c4b0a7',
        meaning:
          'Boundaries are light and quiet — geography as suggestion, not division.',
      },
      {
        label: 'Rosy locality names',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#cc8672',
        meaning:
          "City names appear warm and elegant — reflecting U2's emotional resonance across diverse locations.",
      },
      {
        label: 'Blushed landscape fill',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#ede8e3',
        meaning:
          'Ground textures echo parchment and cloudscapes — tying the visual world to the ambient sonic one.',
      },
      {
        label: 'Deactivated POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#f3f2f0',
        meaning:
          'Points of interest are suppressed to enhance visual clarity and spaciousness.',
      },
      {
        label: 'Pastel parks',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#d9d0c8',
        meaning:
          'Parks adopt a warm neutrality — serene and cinematic, supporting visual rest.',
      },
      {
        label: 'Velvet roads',
        featureType: 'road',
        elementType: 'geometry',
        color: '#d6cdc5',
        meaning:
          'Roads are softened with a gentle hue — functional yet aesthetic, echoing ambient transitions.',
      },
      {
        label: 'Rose-gold highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#e8b6a2',
        meaning:
          'Highways shine with warmth — symbolizing emotional connection and long-form journeys.',
      },
      {
        label: 'Icon minimization',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Icons are stripped away to maintain cinematic focus and prevent distraction.',
      },
      {
        label: 'No local road labels',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning: 'Text clutter is reduced to preserve elegance and immersion.',
      },
      {
        label: 'No transit rendering',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          'Transit features are omitted to emphasize poetic geography over infrastructure.',
      },
      {
        label: 'Pale ocean fill',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#d2d9df',
        meaning:
          'Water adopts a tranquil, dreamlike blue — a reflective emotional surface across the map.',
      },
      {
        label: 'Hazy aquatic text',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#a5b1b7',
        meaning:
          'Water labels remain understated — soft and ambient like distant vocals.',
      },
    ],
  },
  {
    tour: 'Unforgettable Fire',
    legNumber: 2,
    mapId: '11a94722049cf8255b86452e',
    themeName: 'Atmospheric Grandeur',
    visualSummary:
      "This map evokes the band's deepening presence in the American imagination — expansive, warm, and cinematic. It combines muted golds and refined gradients with glowing textures to reflect both U2's scale and their emotional resonance during their rise across U.S. stadiums.",
    rationale: [
      {
        label: 'Warmed ivory terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#f3efe9',
        meaning:
          'A sunlit beige base establishes a soft emotional tone — evoking midwestern skies, desert light, and stadium spotlight glow.',
      },
      {
        label: 'Lavender-gray typography',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#6f5b6b',
        meaning:
          'Text is refined but poetic — legible yet tinted with depth and nostalgia, echoing lyrics of loss and vision.',
      },
      {
        label: 'Brightened text outlines',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#ffffff',
        meaning:
          'White strokes preserve clarity in atmospheric space — like lyrics projected across fog or dusk.',
      },
      {
        label: 'Faint city borders',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#cfc0b7',
        meaning:
          'Political boundaries appear like architectural lines in stage lighting — structured but softened.',
      },
      {
        label: 'Apricot label accents',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#d19b73',
        meaning:
          'City names glow with warm tones, giving a spiritual aura to key stops like New York and Los Angeles.',
      },
      {
        label: 'Washed canvas landscape',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#f6f3ec',
        meaning:
          'The terrain fades to near-white, allowing other elements to shine and imbuing the map with cinematic air.',
      },
      {
        label: 'Muted POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#f4f1ed',
        meaning:
          'Landmarks are toned down, keeping focus on emotion and geography rather than iconography.',
      },
      {
        label: 'Dusty field parks',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#dcd6c7',
        meaning:
          'Parks are treated as textural space — settings for light, audience, and reflection.',
      },
      {
        label: 'Amber road grid',
        featureType: 'road',
        elementType: 'geometry',
        color: '#e0d7ce',
        meaning:
          'Roads gently emerge from the map — directional but not harsh, aligned with movement over spectacle.',
      },
      {
        label: 'Soft coral highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#e6b39c',
        meaning:
          'Major thoroughfares appear warm and elegant — threads of human journey stretched across a vast emotional landscape.',
      },
      {
        label: 'Suppressed icons',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Road icons are removed to keep the visual mood uninterrupted and immersive.',
      },
      {
        label: 'Hidden local road text',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'Local road text is silenced to prioritize scale and atmosphere over granular navigation.',
      },
      {
        label: 'No transit lines',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          'Transit infrastructure is removed — here, space is emotional, not logistical.',
      },
      {
        label: 'Powder blue water',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#d5dce3',
        meaning:
          'Bodies of water are rendered in soft, ambient hues — conveying stillness, reflection, and distance.',
      },
      {
        label: 'Muted ocean labels',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#9daab4',
        meaning:
          'Text over water is calm and elegant, mirroring the tone of ambient production and global scale.',
      },
    ],
  },
  {
    tour: 'Unforgettable Fire',
    legNumber: 3,
    mapId: '11a94722049cf82594c390c4',
    themeName: 'Atmospheric Grandeur',
    visualSummary:
      "This map reflects the drama and elevation of U2's Live Aid breakthrough — with rich twilight tones, glowing label treatments, and a subdued yet elegant infrastructure. The palette evokes both reverence and cinematic spectacle as the band stepped fully into the global humanitarian spotlight.",
    rationale: [
      {
        label: 'Twilight-toned terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#2d2c32',
        meaning:
          'A deep violet-gray base conjures stage lights against night skies — poised, ambient, and dramatic.',
      },
      {
        label: 'Ivory-gold text fill',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#e0d9c9',
        meaning:
          'Typography glows with warm light, evoking candlelit reverence or the emotional resonance of a final encore.',
      },
      {
        label: 'Sable text stroke',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#1a191d',
        meaning:
          'Thick, shadowy outlines stabilize the text — a balance between clarity and cinematic depth.',
      },
      {
        label: 'Shadowed administrative borders',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#4a4853',
        meaning:
          'Boundaries are softened and moody — less about division, more about poetic framing.',
      },
      {
        label: 'Lavender-highlighted city labels',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#b28aeb',
        meaning:
          'Urban names shine in glowing violet — celebratory yet introspective, like spotlights in a hazy arena.',
      },
      {
        label: 'Steel-violet landscape fill',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#39373f',
        meaning:
          'Ground cover appears metallic and theatrical — a reflective stage floor rather than geographic surface.',
      },
      {
        label: 'Dimmed POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#322f36',
        meaning:
          'Landmarks fade into the scene, giving presence to symbolic space over literal locations.',
      },
      {
        label: 'Shadowpark overlays',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#3d3b42',
        meaning:
          'Green areas become muted backdrops — contemplative spaces in the periphery of global attention.',
      },
      {
        label: 'Muted metro road grid',
        featureType: 'road',
        elementType: 'geometry',
        color: '#6f6b7b',
        meaning:
          "Roads appear toned down and desaturated — part of the city's supporting cast, not a focal point.",
      },
      {
        label: 'Eno-lavender highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#9d8cc4',
        meaning:
          'Highways cut through the map in rich lavender — reflecting ambient tempo and long-form musical motion.',
      },
      {
        label: 'Hidden icon layer',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Navigation icons are removed to maintain emotional clarity and focus on global symbolism.',
      },
      {
        label: 'Local road text removed',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'Small text elements are cleared to preserve the grand atmosphere of scale and stillness.',
      },
      {
        label: 'No transit geometry',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          'Transit infrastructure is omitted — distance is symbolic, not logistical.',
      },
      {
        label: 'Nocturnal water tone',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#2c3b45',
        meaning:
          'Water areas are rich and mysterious — evoking global scale and emotional depth.',
      },
      {
        label: 'Icy-blue water labels',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#7e9dab',
        meaning:
          "Text on water stays soft and ethereal — a subtle counterpoint to the stage's bright gravity.",
      },
    ],
  },
  {
    tour: 'Unforgettable Fire',
    legNumber: 4,
    mapId: '11a94722049cf82592319d5e',
    themeName: 'Atmospheric Grandeur',
    visualSummary:
      "This map captures the golden warmth and spiritual scale of U2's final North American leg. High-key tones, smooth pastel gradients, and golden city accents reflect the band's peak stadium presence — connecting expansive sound with humanitarian resonance.",
    rationale: [
      {
        label: 'Soft parchment terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#f4f1eb',
        meaning:
          'A light cream base reflects emotional clarity and mid-80s optimism — as though the map itself is lit by stage lights at dusk.',
      },
      {
        label: 'Vintage rose typography',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#7e6a69',
        meaning:
          'Text appears with aged warmth — subtle and human, like letterpress print on a concert poster.',
      },
      {
        label: 'Bright white strokes',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#ffffff',
        meaning:
          'Typography is made clean and luminous — bold enough to anchor the space without disrupting the serenity.',
      },
      {
        label: 'Refined administrative borders',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#cabaa8',
        meaning:
          'City and state boundaries are understated — present but never sharp, like softly drawn lines across a stadium floor.',
      },
      {
        label: 'Goldenrod city labels',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#ddb66e',
        meaning:
          "Urban centers shimmer in amber-gold — elevated to reflect U2's message-driven stardom and the Live Aid halo effect.",
      },
      {
        label: 'Cloud-soft landscape',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#f7f3ee',
        meaning:
          'The terrain blends with the sky — evoking expansiveness and transcendence at stadium scale.',
      },
      {
        label: 'Neutralized POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#f3f1ef',
        meaning:
          'Points of interest are visually neutral — allowing the map to operate as emotional field rather than functional index.',
      },
      {
        label: 'Sagewashed parks',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#d9ddce',
        meaning:
          'Green spaces hold serenity and contrast — public gathering points within a political and spiritual terrain.',
      },
      {
        label: 'Milk-toned roads',
        featureType: 'road',
        elementType: 'geometry',
        color: '#e7ded5',
        meaning:
          'Roads are pale and fluid — unobtrusive, flowing between cities like threads of sound or light.',
      },
      {
        label: 'Gold dust highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#efd8c0',
        meaning:
          'Highways radiate warmth — symbolizing connection, movement, and the energy of large crowds converging.',
      },
      {
        label: 'Removed road icons',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Navigation icons are removed to preserve atmospheric clarity and emotional focus.',
      },
      {
        label: 'No local road text',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'Local text is stripped to let cities and land breathe — minimizing clutter for maximum grandeur.',
      },
      {
        label: 'Transit removed',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          "Transit lines are omitted — U2's map is about aura and reach, not mobility infrastructure.",
      },
      {
        label: 'Sunlit water fill',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#ccdce7',
        meaning:
          'Water takes on a glowing, soft blue — sky and sea merging in the ambient visual field.',
      },
      {
        label: 'Polished aquatic text',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#94aab9',
        meaning:
          'Text on water remains clean and soft — present, but always secondary to the emotional tone.',
      },
    ],
  },
  {
    tour: 'Joshua Tree',
    legNumber: 1,
    mapId: '11a94722049cf8252c1815f1',
    themeName: 'Desert Americana',
    visualSummary:
      "This map evokes the warm, mythic vastness of the American Southwest — the spiritual and geographical bedrock of the Joshua Tree Tour. It blends rustic typography, desert hues, and soft cartographic elevation to frame U2's search for meaning across the American frontier.",
    rationale: [
      {
        label: 'Sandstone terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#f3f0e8',
        meaning:
          'A pale, dusty beige recalls Southwestern plains and sun-bleached landscapes — grounding the map in dry openness.',
      },
      {
        label: 'Charcoal serif text',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#4a4039',
        meaning:
          'Text feels rooted in Americana — reminiscent of weathered signage and Western road atlases.',
      },
      {
        label: 'Bright sunstroke outlines',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#ffffff',
        meaning:
          'White strokes around text enhance clarity while reflecting midday brightness and wide desert sky.',
      },
      {
        label: 'Dusty civic borders',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#d2c5b2',
        meaning:
          'Territorial lines are soft but firm — drawn like old state maps with a sense of place and power.',
      },
      {
        label: 'Terracotta city labeling',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#c69357',
        meaning:
          'City names glow like clay — highlighting cultural oases in a sparse visual and ideological terrain.',
      },
      {
        label: 'Desert canvas landscape',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#f5f2e9',
        meaning:
          'Land takes on an organic, ochre wash — reinforcing the environmental themes of heat, horizon, and exposure.',
      },
      {
        label: 'Muted POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#f1eee7',
        meaning:
          'Cultural landmarks are intentionally quieted — the focus is spiritual geography, not tourist sites.',
      },
      {
        label: 'Pale sage parks',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#e1dbc9',
        meaning:
          'Green spaces carry a faded palette — desert oases rendered with restraint.',
      },
      {
        label: 'Sunbaked road grid',
        featureType: 'road',
        elementType: 'geometry',
        color: '#c4b09b',
        meaning:
          'Roads are earthy and matte — visual metaphors for dust-covered touring vans and westbound travel.',
      },
      {
        label: 'Adobe highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#e6b27d',
        meaning:
          'Highways run like molten gold through the land — evoking movement and myth.',
      },
      {
        label: 'No map icons',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Icons are stripped away to preserve visual quiet and sacred space.',
      },
      {
        label: 'Local road labels removed',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'Local street names are hidden, allowing cities to emerge through cultural rather than cartographic hierarchy.',
      },
      {
        label: 'No transit system display',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          'Mass transit is irrelevant to this journey — movement is slow, symbolic, and scenic.',
      },
      {
        label: 'Dust-blue water',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#d1dce1',
        meaning:
          'Water appears as relief — refreshing but restrained in tone, reflecting drought-conscious mapping.',
      },
      {
        label: 'Steel coast labels',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#9eaeb9',
        meaning:
          'Text on water is calm and cool — a visual whisper next to the sunlit landmass.',
      },
    ],
  },
  {
    tour: 'Joshua Tree',
    legNumber: 2,
    mapId: '11a94722049cf8252c1815f1',
    themeName: 'Desert Americana',
    visualSummary:
      "This map brings the warmth and scale of the American desert into a European context, reflecting U2's dual role as both rock emissaries and political witnesses. Soft sands meet classical city textures, creating a contrast between the myth of the West and the realities of Cold War Europe.",
    rationale: [
      {
        label: 'Cream-stone terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#f1eee8',
        meaning:
          'A light, warm-stone foundation blends the feeling of ancient cities with sunlit desert plains — a fusion of history and myth.',
      },
      {
        label: 'Ash-brown label text',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#3d3d3d',
        meaning:
          'Text takes on a grounded, newsprint tone — tying together modern political clarity and timeless print design.',
      },
      {
        label: 'Crisp white outlines',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#ffffff',
        meaning:
          'Bold white strokes provide legibility over muted earth, enhancing clarity without harshness.',
      },
      {
        label: 'Neutral civic borders',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#bcb09c',
        meaning:
          'Political lines are softly reinforced — emphasizing diplomatic geography during a time of East–West tension.',
      },
      {
        label: 'Gold-rust city names',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#c79f58',
        meaning:
          'City names glow like twilight on stone facades — evoking both nostalgia and broadcast-era seriousness.',
      },
      {
        label: 'Stone-washed landscape',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#ece7de',
        meaning:
          'Terrain remains soft and wide — maintaining openness even as the map shifts toward urbanized space.',
      },
      {
        label: 'Faded POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#f2f0eb',
        meaning:
          'Points of interest are desaturated and backgrounded — allowing political symbolism to rise to the surface.',
      },
      {
        label: 'Pastel olive parks',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#d3dac8',
        meaning:
          'Parks appear subdued — not lush, but contemplative — ideal for the reflective tone of a post-industrial tour.',
      },
      {
        label: 'Taupe transport grid',
        featureType: 'road',
        elementType: 'geometry',
        color: '#c3b5a3',
        meaning:
          'Roads carry a faint metallic dust — visually linking cobblestones and asphalt across eras and ideologies.',
      },
      {
        label: 'Burnished highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#d7a871',
        meaning:
          'Highways run in rustic bronze — long arcs of ambition connecting past and present.',
      },
      {
        label: 'Suppressed icons',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Map icons are hidden to maintain visual stillness and thematic clarity.',
      },
      {
        label: 'Local road text removed',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'Local detail is intentionally absent — this is a map of message, not minutiae.',
      },
      {
        label: 'Transit hidden',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          'Transit systems are removed — movement is narrative, not logistical.',
      },
      {
        label: 'Mediterranean blue waters',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#c7d9e2',
        meaning:
          'Water appears cool and steady — the counterbalance to political heat and lyrical turbulence.',
      },
      {
        label: 'Blue-gray ocean labels',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#8aa3b0',
        meaning:
          'Aquatic labels stay legible yet gentle — part of the background score rather than front-page content.',
      },
    ],
  },
  {
    tour: 'Joshua Tree',
    legNumber: 3,
    mapId: '11a94722049cf82568c025e4',
    themeName: 'Desert Americana',
    visualSummary:
      "This map closes the Joshua Tree journey with dramatic contrast and cinematic tension — deep shadows, golden highlights, and a heavier visual weight reflect both the band's cultural apex and the political complexity of late 1987 America. It's a map of myth meeting reckoning.",
    rationale: [
      {
        label: 'Nightfall terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#1d1b1e',
        meaning:
          'A deep, near-black canvas reflects late-tour gravity — echoing stadium spotlights, Cold War dusk, and political uncertainty.',
      },
      {
        label: 'Moonlit label fill',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#f3eada',
        meaning:
          'Typography glows softly — like warm light from a stage or distant city skyline in a desert night.',
      },
      {
        label: 'Ink-black text stroke',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#121014',
        meaning:
          'Heavy contrast strokes reinforce clarity and seriousness — visual weight matching political stakes.',
      },
      {
        label: 'Ash-boundary outlines',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#3f3a39',
        meaning:
          'Borders are hardened, like state lines under tension — references to Reagan-era polarity and national identity.',
      },
      {
        label: 'Gold-dust city labeling',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#e1b766',
        meaning:
          'Cities shine in rich amber — signifiers of power, media reach, and cultural flashpoints.',
      },
      {
        label: 'Charcoal landcover',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#29252a',
        meaning:
          'The physical land is rendered heavy and abstract — like a mythic stage or historical theater.',
      },
      {
        label: 'Faded POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#2e2a30',
        meaning:
          'Points of interest are obscured — reflecting a focus on emotion and message over tourist familiarity.',
      },
      {
        label: 'Ash-violet park zones',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#393237',
        meaning:
          'Parks are treated with restraint — like shadows beneath the show, not escapes from it.',
      },
      {
        label: 'Canyon-road geometry',
        featureType: 'road',
        elementType: 'geometry',
        color: '#8a7561',
        meaning:
          'Streets are colored like old leather or canyon stone — tactile and historic, roads of memory and movement.',
      },
      {
        label: 'Goldbrick highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#be9c6b',
        meaning:
          'Major routes shimmer with gold — veins of mass connection running beneath a darkening national sky.',
      },
      {
        label: 'Removed road icons',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'All icons are stripped away — a visual stage cleared for emotion, performance, and scale.',
      },
      {
        label: 'Silent local roads',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'Neighborhood labels are erased — this is a map for arenas and atmospheres, not backstreets.',
      },
      {
        label: 'No transit geometry',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          'Public infrastructure is absent — the narrative is symbolic, emotional, and epic in scale.',
      },
      {
        label: 'Midnight water tone',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#24313a',
        meaning:
          'Waterways echo Cold War tension — dark, deep, and unyielding beneath soft glows of coastal light.',
      },
      {
        label: 'Icy blue marine labels',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#7c94a1',
        meaning:
          'Water labels glow faintly — distant, peaceful, and heavy with meaning, like the final notes of a song.',
      },
    ],
  },
  {
    tour: 'Lovetown',
    legNumber: 1,
    mapId: '11a94722049cf825d4b84d1a',
    themeName: 'Electric Gospel',
    visualSummary:
      "This map merges deep gospel warmth with late-'80s neon melancholy — a visual bridge between analog soul and global transition. Its hues, textures, and dimmed infrastructure reflect a world at the end of an era and a band preparing for reinvention.",
    rationale: [
      {
        label: 'Moody crimson terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#2e1a1a',
        meaning:
          'A rich maroon-black base grounds the map in mood and atmosphere — like velvet curtains or club shadows after last call.',
      },
      {
        label: 'Peach-light typography',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#ffddcc',
        meaning:
          'Text glows gently with a gospel-infused glow — romantic, retro, and emotionally resonant.',
      },
      {
        label: 'Night-black strokes',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#000000',
        meaning:
          'Dark outlines add clarity and gravity — a stylistic cue from concert fliers and broadcast overlays.',
      },
      {
        label: 'Burnt-orange borders',
        featureType: 'administrative.country',
        elementType: 'geometry.stroke',
        color: '#ff6a4d',
        meaning:
          'Borders glow like neon tubing — luminous but jagged, echoing the cultural intensity of a world in flux.',
      },
      {
        label: 'Salmon label accents',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#ffa07a',
        meaning:
          "City names feel personal and emotional — the heart of the tour's reflection and storytelling.",
      },
      {
        label: 'Mahogany natural fills',
        featureType: 'landscape.natural',
        elementType: 'geometry.fill',
        color: '#3d2c29',
        meaning:
          "Natural areas are deep and worn — like gospel vinyl crackle or a blues guitar's resonance.",
      },
      {
        label: 'Oxide infrastructure tones',
        featureType: 'landscape.man_made',
        elementType: 'geometry.fill',
        color: '#4e3835',
        meaning:
          'Urban space is rust-toned and textured — not polished, but lived-in and soulful.',
      },
      {
        label: 'Muted POIs',
        featureType: 'poi',
        elementType: 'geometry.fill',
        color: '#593939',
        meaning:
          'Points of interest fade into the backdrop — emotional weight outweighs landmarks here.',
      },
      {
        label: 'Olive-shadow parks',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#3f4a2f',
        meaning:
          'Greenspaces are dusk-toned — moments of stillness between sonic waves.',
      },
      {
        label: 'Soft crimson roads',
        featureType: 'road',
        elementType: 'geometry',
        color: '#664444',
        meaning:
          'Roads reflect emotional wear — tour paths drawn in heartlines rather than asphalt.',
      },
      {
        label: 'Signal red highways',
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        color: '#ff735c',
        meaning:
          'Major routes pulse with urgency and showtime energy — lit up like venue marquees.',
      },
      {
        label: 'Removed local icons',
        featureType: 'road.local',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Street-level markers are removed to preserve tone and avoid over-labeling.',
      },
      {
        label: 'Dimmed civic structures',
        featureType: 'structure',
        elementType: 'geometry.fill',
        color: '#4a3333',
        meaning:
          'Buildings are rendered in faded burgundy — textured but quiet.',
      },
      {
        label: 'Violet-black water',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#302a52',
        meaning:
          'Water becomes stage-like — reflective, cool, and heavy with emotional presence.',
      },
      {
        label: 'Lavender water labels',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#ccccff',
        meaning:
          'Aquatic text appears faintly lit — ethereal, spiritual, and ephemeral.',
      },
    ],
  },
  {
    tour: 'Lovetown',
    legNumber: 2,
    mapId: '11a94722049cf82581e0a8ad',
    themeName: 'Electric Gospel',
    visualSummary:
      "This map immerses Lovetown's European leg in hues of post-Cold War transformation — cold violets, diffused pinks, and broadcast-style strokes echo shifting identities, open borders, and emotional processing at the edge of a new decade.",
    rationale: [
      {
        label: 'Cold steel terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#2b2d42',
        meaning:
          'A deep indigo-gray base captures the twilight between eras — Berlin before and after the wall, Eastern Europe before and after unification.',
      },
      {
        label: 'Dusty rose fill text',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#ffccd5',
        meaning:
          'Typography glows like faded signage or last-call neon — nostalgic and emotional rather than futuristic.',
      },
      {
        label: 'Signal-black text stroke',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#1a1a1a',
        meaning:
          'Black text outlines lend contrast and urgency — a nod to protest posters and Cold War broadcast visuals.',
      },
      {
        label: 'Crimson borderlines',
        featureType: 'administrative.country',
        elementType: 'geometry.stroke',
        color: '#aa4466',
        meaning:
          'Nation-states are drawn in revolution red — signaling dissolving alliances and cultural rupture.',
      },
      {
        label: 'Pink ember city labels',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#ff9999',
        meaning:
          'Cities glow with residual heat — memory of protest, migration, and cultural reawakening.',
      },
      {
        label: 'Fogged violet nature',
        featureType: 'landscape.natural',
        elementType: 'geometry.fill',
        color: '#373a54',
        meaning:
          'Nature blends into urbanity — dim, moody, and atmospheric like rain on concrete.',
      },
      {
        label: 'Urban cool-gray fills',
        featureType: 'landscape.man_made',
        elementType: 'geometry.fill',
        color: '#3c3e59',
        meaning:
          'Manmade zones are rendered with subdued density — functional but not sterile.',
      },
      {
        label: 'Muted plum POIs',
        featureType: 'poi',
        elementType: 'geometry.fill',
        color: '#4b3b4e',
        meaning:
          'Points of interest sink into a dreamlike palette — settings for cultural shift, not spectacle.',
      },
      {
        label: 'Deep green park spaces',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#2e4739',
        meaning:
          'Green areas serve as counterpoint — places of relief or collective memory within a shifting map.',
      },
      {
        label: 'Slate arterial roads',
        featureType: 'road',
        elementType: 'geometry',
        color: '#44425a',
        meaning:
          'Roads are cool, matte, and industrial — the mapped infrastructure of a post-Cold War transition.',
      },
      {
        label: 'Hot pink highways',
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        color: '#dd4c91',
        meaning:
          'Highways burn with faded neon — routes of connection in a disintegrating world order.',
      },
      {
        label: 'No road icons',
        featureType: 'road.local',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Icons are hidden to keep the map quiet — less about direction, more about feeling.',
      },
      {
        label: 'Low-contrast buildings',
        featureType: 'structure',
        elementType: 'geometry.fill',
        color: '#40314e',
        meaning:
          'Structures blend into the background — as if drawn from a memory of passing city lights.',
      },
      {
        label: 'Electric navy water fill',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#2f3b59',
        meaning:
          'Water becomes dark and introspective — symbolic of emotional current beneath political change.',
      },
      {
        label: 'Blue neon marine labels',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#8aaaff',
        meaning:
          'Water text pulses like a broadcast ticker — cool, visible, and softly glowing against the void.',
      },
    ],
  },
  {
    tour: 'Zoo tv',
    legNumber: 1,
    mapId: '11a94722049cf825ea1f0813',
    themeName: 'Media Saturation',
    visualSummary:
      "This map reflects the early 1990s' shift into a 24-hour broadcast culture — dark, sharp, and pixel-lit. Designed like a CRT television turned inside-out, it captures the media distortion and visual chaos that defined the first leg of Zoo TV.",
    rationale: [
      {
        label: 'Dark broadcast terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#0b0b0c',
        meaning:
          "The base is almost black — representing the void behind the screen, the media's canvas of constructed reality.",
      },
      {
        label: 'White-hot typography',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#ffffff',
        meaning:
          'Text glows like overexposed headlines — a blinding stream of information flowing from screens.',
      },
      {
        label: 'Heavy signal stroke',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#000000',
        meaning:
          'Black outlines emulate digital compression and CRT scanlines — lending broadcast urgency to every word.',
      },
      {
        label: 'Static-line borders',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#4c4c4c',
        meaning:
          'Civic divisions resemble scrambled TV overlays — places defined more by media coverage than geography.',
      },
      {
        label: 'Hot magenta city labels',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#ff004c',
        meaning:
          'Cities scream in pink neon — cultural hotspots blaring through the static.',
      },
      {
        label: 'Signal-dampened landscape',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#1a1a1a',
        meaning:
          'Land is flat and dim — a neutralized broadcast floor where identity is constructed, not grown.',
      },
      {
        label: 'Suppressed POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#1f1f1f',
        meaning:
          "Points of interest are hidden — this isn't about destination, it's about transmission.",
      },
      {
        label: 'Glitched park overlay',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#133113',
        meaning:
          'Parks are deep green-black — visual rest zones amid overstimulated space.',
      },
      {
        label: 'Yellow voltage roads',
        featureType: 'road',
        elementType: 'geometry',
        color: '#fffb00',
        meaning:
          'Roads glow like warning signs — pathways through media overload.',
      },
      {
        label: 'Electric blue highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#00bfff',
        meaning:
          'Highways shine like fiber optics — the new infrastructure of speed, media, and reach.',
      },
      {
        label: 'No iconography',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Icons are stripped — space is reserved for typography and TV-style overlays.',
      },
      {
        label: 'Silenced street labels',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'Local detail is removed to elevate global-scale narrative — a show, not a neighborhood.',
      },
      {
        label: 'Transit hidden',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          'Movement is conceptual — via cable, satellite, screen. Not rail or bus.',
      },
      {
        label: 'Abyssal water fill',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#003344',
        meaning: 'Water appears digital and cold — not natural but networked.',
      },
      {
        label: 'Cyan water text',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#70a8c6',
        meaning:
          'Text floats like ticker tape or chyron — liquid information across geographic zones.',
      },
    ],
  },
  {
    tour: 'Zoo tv',
    legNumber: 2,
    mapId: '11a94722049cf82531e76448',
    themeName: 'Media Saturation',
    visualSummary:
      'This map brings the saturated, postmodern aesthetic of Zoo TV into a restructured European stage. Its layered blacks, fluorescent pinks, and sharp overlays mirror a continent waking up from Cold War division — now broadcast, commodified, and pixelated.',
    rationale: [
      {
        label: 'Pixel-black terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#0f0f0f',
        meaning:
          'The base is deep and shadowed — a stage beneath the static, a continent blinking into global media.',
      },
      {
        label: 'Soft white label fill',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#f2f2f2',
        meaning:
          'Text appears dimly illuminated — like old stock tickers or text over a CRT tube.',
      },
      {
        label: 'Broadcast shadow stroke',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#000000',
        meaning:
          'Heavy black strokes mimic screen flicker and pre-HD resolution — artificial clarity.',
      },
      {
        label: 'Neutral signal borders',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#444444',
        meaning:
          'Administrative lines resemble compression lines — sharp, pixelated seams between identity constructs.',
      },
      {
        label: 'Hyperpink city labels',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#ff0090',
        meaning:
          'Cities light up in high-voltage pink — high-frequency nodes in the European signal flow.',
      },
      {
        label: 'Dark matte terrain',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#1b1b1b',
        meaning:
          'The ground vanishes into screen-space — terrain as projection surface.',
      },
      {
        label: 'Muted POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#2a2a2a',
        meaning:
          'Cultural landmarks are rendered invisible — the spectacle overrides substance.',
      },
      {
        label: 'Flat green parks',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#334433',
        meaning:
          'Parks flicker quietly — like pause icons amid the media rush.',
      },
      {
        label: 'Yellow-haze roads',
        featureType: 'road',
        elementType: 'geometry',
        color: '#ffc107',
        meaning:
          'Roads shine like laser scan lines — horizontal movement across a media mesh.',
      },
      {
        label: 'Cyan glass highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#00ccff',
        meaning:
          'Highways become light channels — synthetic arteries of speed and data.',
      },
      {
        label: 'No road icons',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Icons are removed to preserve the aesthetic of broadcast clarity and noise reduction.',
      },
      {
        label: 'Omitted local labels',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'Local data is scrubbed in favor of continental perspective — a macro broadcast of fragmented identity.',
      },
      {
        label: 'Transit off',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          'Movement is symbolic — broadcast waves, fiber optics, disinformation highways.',
      },
      {
        label: 'Dark cyan water',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#002733',
        meaning:
          'Water is rendered as data fluid — placeless, weightless, still electric.',
      },
      {
        label: 'Muted aqua water labels',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#80a8b2',
        meaning:
          'Text on water becomes broadcast metadata — subdued, scannable, synthetic.',
      },
    ],
  },
  {
    tour: 'Zoo tv',
    legNumber: 3,
    mapId: '11a94722049cf825225b6515',
    themeName: 'Media Saturation',
    visualSummary:
      'This map intensifies the visual grammar of Zoo TV with broadcast yellows, cyber highways, and hyperpink accents. It reflects a satirical version of America — a country locked in visual feedback loops, political campaigns, and digital static.',
    rationale: [
      {
        label: 'Voidscreen base layer',
        featureType: 'all',
        elementType: 'geometry',
        color: '#0a0a0c',
        meaning:
          'The terrain is nearly black — a digital void framing saturated bursts of simulated meaning.',
      },
      {
        label: 'CRT-white text',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#ffffff',
        meaning:
          'Typography appears sharp and backlit — like teleprompter text or data feeds from a control room.',
      },
      {
        label: 'Blackline outline',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#000000',
        meaning:
          'Heavy outlines mimic signal jitter and hard UI frames — forcing visual clarity through distortion.',
      },
      {
        label: 'Pixelated civic borders',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#353535',
        meaning:
          'Borders look like compressed graphics — hinting at arbitrary digital divides amid the real ones.',
      },
      {
        label: 'Neon magenta city names',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#ff66cc',
        meaning:
          'Cities appear as blinking beacons — reality reduced to hyperlinked destinations.',
      },
      {
        label: 'Slate-gray land',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#1b1b1d',
        meaning:
          'The ground is quiet — acting as stage and feed, ready for projection and saturation.',
      },
      {
        label: 'Suppressed POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#262626',
        meaning:
          'Non-essential data points disappear — showtime overtakes sightseeing.',
      },
      {
        label: 'Muted digital park fill',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#334455',
        meaning:
          'Parks are toned to match backstage aesthetics — places of pause between media barrages.',
      },
      {
        label: 'Lemon-laced roads',
        featureType: 'road',
        elementType: 'geometry',
        color: '#ffff33',
        meaning:
          'Streets radiate electric yellow — tracing visual overexposure and media loops.',
      },
      {
        label: 'Sky blue data-highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#66ccff',
        meaning:
          'Highways cut through the map like fiber optic cables — built for signal, not people.',
      },
      {
        label: 'Removed icons',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning: "Icons are gone — this isn't GPS, it's media theater.",
      },
      {
        label: 'Cleared local road text',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning: 'Local markers are erased — only spectacle and signal remain.',
      },
      {
        label: 'Transit silenced',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          "No trains, no buses — just the digital trajectory of the tour's visual narrative.",
      },
      {
        label: 'Midnight broadcast ocean',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#001a33',
        meaning:
          'Water becomes deep and encoded — symbolic of hidden currents, subconscious noise, and cyber-drift.',
      },
      {
        label: 'Signal-blue marine labels',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#7aa3cc',
        meaning:
          'Text over water pulses like satellite text or channel overlays — ephemeral, glowing, contextual.',
      },
    ],
  },
  {
    tour: 'Zoo tv',
    legNumber: 4,
    mapId: '11a94722049cf82567030bc5',
    themeName: 'Media Saturation',
    visualSummary:
      "This map captures Zooropa's surreal European broadcast: glitch-fused colorways, broadcast text overlays, and faint postmodern trauma beneath the surface. It's a cartography of signal anxiety, designed like a dream in low-resolution newsprint.",
    rationale: [
      {
        label: 'Deep pixel terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#0f1014',
        meaning:
          'The terrain evokes a CRT afterimage — dark but not blank, dense with signal ghosts.',
      },
      {
        label: 'Lavender transmission text',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#d2c1ff',
        meaning:
          'Text glows with faded warmth — simultaneously sacred and synthetic, a postmodern hymn.',
      },
      {
        label: 'Black-lit stroke',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#050506',
        meaning:
          'Typography is grounded in static — crisp lines vibrating with residual tension.',
      },
      {
        label: 'Gray civic seamlines',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#2f2f3a',
        meaning:
          'Boundaries hint at former walls and dissolved certainties — cracked, but present.',
      },
      {
        label: 'Soft violet city labels',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#cc99ff',
        meaning:
          'Urban nodes pulse with melancholic violet — cities as memory circuits.',
      },
      {
        label: 'Dim steel-gray land',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#1d1f24',
        meaning:
          'The map reads like a stage — flat yet complex, framed for projection and metaphor.',
      },
      {
        label: 'Hidden POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#2a2d33',
        meaning:
          'Points of interest fade away — replaced by locations of meaning, conflict, and performance.',
      },
      {
        label: 'Slate-parks',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#3a3944',
        meaning:
          'Green areas are filtered through cold ambiance — spaces for echoes, not escape.',
      },
      {
        label: 'Muted tech roads',
        featureType: 'road',
        elementType: 'geometry',
        color: '#838ca1',
        meaning:
          'Streets are cool-toned — channels of sound, memory, and surveillance.',
      },
      {
        label: 'Electric lilac highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#9e85d2',
        meaning:
          'Major routes beam like backlit wires — infrastructure turned into broadcast cabling.',
      },
      {
        label: 'Icon wipe',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Icons are removed for immersion — no clutter in the dream interface.',
      },
      {
        label: 'Local text hidden',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'Minor detail is stripped to preserve aesthetic clarity — style over substance, form over navigation.',
      },
      {
        label: 'No transit system',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          'There is no real movement here — only simulation and circuit loops.',
      },
      {
        label: 'Night-glow ocean fill',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#151733',
        meaning:
          'Water becomes a deep interface layer — solemn, reflective, and data-rich.',
      },
      {
        label: 'Blue-gray water text',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#7fa2b6',
        meaning:
          'Marine labels are soft, ambient — subtitles in the background of a broadcasted dream.',
      },
    ],
  },
  {
    tour: 'Zoo tv',
    legNumber: 5,
    mapId: '11a94722049cf8256a275451',
    themeName: 'Media Saturation',
    visualSummary:
      'This map closes the Zoo TV arc with maximalist neon — a visual finale of pixel chaos and cultural critique. Fusing absurdity and clarity, its palette glows with end-of-transmission energy, echoing the media-saturated farewell to an iconic tour.',
    rationale: [
      {
        label: 'End-broadcast terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#0a0a0d',
        meaning:
          'The base is deep, clean black — the closing screen of a feed, blinking away from meaning.',
      },
      {
        label: 'Soft white text glow',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#f6f1f8',
        meaning:
          'Text is backlit and final — broadcast legibility with a hint of poetic fade-out.',
      },
      {
        label: 'Thick noir stroke',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#000000',
        meaning:
          'Typography is anchored in weight — like captions on legacy media, or credits rolling against black.',
      },
      {
        label: 'Muted gray borders',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#444',
        meaning:
          'Political boundaries appear as signal bars — faint and symbolic rather than functional.',
      },
      {
        label: 'Electric violet cities',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#ff66ff',
        meaning:
          'City names blink in retro magenta — the flare of late-night transmissions and cultural hotspots.',
      },
      {
        label: 'Dim purple landscape',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#1b1b1f',
        meaning:
          'The map is subdued but active — built for media overlays, not topography.',
      },
      {
        label: 'Flat POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#2c2c2f',
        meaning:
          'Points of interest are ghosted — replaced by places of emotion, irony, and screen presence.',
      },
      {
        label: 'Slate-purple parks',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#3d3a4c',
        meaning:
          'Parks are rendered in neon dusk — contemplative but artificial, like set pieces.',
      },
      {
        label: 'Amber signal roads',
        featureType: 'road',
        elementType: 'geometry',
        color: '#ffcc33',
        meaning:
          'Roads glow like active links — paths not of movement but of stimulus and message delivery.',
      },
      {
        label: 'Hyperviolet highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#9933ff',
        meaning:
          'Major arteries pulse in purple — a final flare of synthetic energy across continents.',
      },
      {
        label: 'No road icons',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Icons are absent to maintain purity of broadcast design — space for signal, not navigation.',
      },
      {
        label: 'No local road text',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'Local labels vanish — replaced by large-scale emotional markers.',
      },
      {
        label: 'No transit overlay',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          "Transit doesn't exist here — only the idea of motion through metaphor and screen.",
      },
      {
        label: 'Night blue waters',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#102233',
        meaning:
          'Water is rendered like a void — unknowable, broadcasted, ambient.',
      },
      {
        label: 'Cyan-lavender water text',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#7a9ebb',
        meaning:
          'Labels float like closing credits — fading away but still illuminated.',
      },
    ],
  },
  {
    tour: 'Popmart',
    legNumber: 1,
    mapId: '11a94722049cf825656c9823',
    themeName: 'Consumer Spectacle',
    visualSummary:
      "This map glows with mall-culture excess — hot pinks, neon yellows, and candy-coated contrast capture the hypercommercial satire of PopMart's opening leg. It's a synthetic terrain styled like a mega-mall flyer: ironic, flashy, and unmistakably American.",
    rationale: [
      {
        label: 'Velvet-mall terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#1a0f1e',
        meaning:
          'A deep magenta-black backdrop creates a glamorous foundation, evoking perfume counters, pop posters, and late-90s mall interiors.',
      },
      {
        label: 'Iridescent pink label fill',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#ffe6f0',
        meaning:
          'Typography radiates like illuminated signage — part romance, part retail, part retro.',
      },
      {
        label: 'Hardwired black outlines',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#000000',
        meaning:
          'Bold black strokes increase visibility while recalling coupon text and boldface discounts.',
      },
      {
        label: 'Golden yellow borders',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#ffcc00',
        meaning:
          'Civic boundaries beam like sale rack borders — strong but unserious, like a dotted line around a deal.',
      },
      {
        label: 'Neon candy city labels',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#ff66b3',
        meaning:
          'City names shimmer like product logos — icons in a marketplace of culture.',
      },
      {
        label: 'Orchid-matte landscape',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#2c102f',
        meaning:
          'Ground cover acts as display material — stylized, smooth, synthetic — like vinyl or fashion show flooring.',
      },
      {
        label: 'Muted POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#3d133d',
        meaning:
          'Points of interest disappear behind spectacle — commercial gravity outshines civic relevance.',
      },
      {
        label: 'Purple punch parks',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#662d91',
        meaning:
          'Parks adopt a punchy violet — recreational zones lit up like mall atriums.',
      },
      {
        label: 'Highlight yellow roads',
        featureType: 'road',
        elementType: 'geometry',
        color: '#ffcc66',
        meaning:
          'Roads pulse like highlighter strokes — fast, artificial, and cartoon-bright.',
      },
      {
        label: 'Lemon drop highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#ffde59',
        meaning:
          'Highways shine with spotlight clarity — the grand conveyors of the spectacle machine.',
      },
      {
        label: 'Hidden icons',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Icons are stripped to make room for maximum visual impact — clutter is a competitor here.',
      },
      {
        label: 'No local road text',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'Fine print is deleted — only the headline matters in a store window worldview.',
      },
      {
        label: 'Transit suppressed',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          'There is no subtle travel — just teleportation from screen to scene, show to show.',
      },
      {
        label: 'Plum glow water',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#190933',
        meaning:
          'Oceans read as glossy ink or holographic foil — reflective, styled, promotional.',
      },
      {
        label: 'Lilac water labels',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#c5a1ff',
        meaning:
          'Water names appear with boutique flair — pastel, poetic, mall-ready.',
      },
    ],
  },
  {
    tour: 'Popmart',
    legNumber: 2,
    mapId: '11a94722049cf8257a22b18c',
    themeName: 'Consumer Spectacle',
    visualSummary:
      "This map presents PopMart's European leg as a glossy retail paradise — bright pastels, product-like contrast, and storefront-style clarity. The tone blends parody with pop elegance, as if the map itself was printed in a seasonal catalog.",
    rationale: [
      {
        label: 'Porcelain retail terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#fefaf7',
        meaning:
          'A soft off-white base evokes the sterile polish of boutique showrooms and designer packaging.',
      },
      {
        label: 'Charcoal signage text',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#403535',
        meaning:
          'Text appears like serif type on shopping bags — sleek, unobtrusive, fashion-forward.',
      },
      {
        label: 'Gloss-white stroke',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#ffffff',
        meaning:
          'Text strokes give depth without density — the illusion of embossing in a luxury brand spread.',
      },
      {
        label: 'Peach-gold boundaries',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#ffd580',
        meaning:
          'Borders are subdued and soft — like dividers between store departments, not nations.',
      },
      {
        label: 'Strawberry signage labels',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#ff66aa',
        meaning:
          'City names feel playful and indulgent — reminiscent of skincare labels or snack logos.',
      },
      {
        label: 'Chalky white landscape',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#f9f5f1',
        meaning:
          'Land is treated as visual whitespace — giving maximum breathing room for spectacle and signage.',
      },
      {
        label: 'Creamy POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#f3e9e9',
        meaning:
          'Points of interest are softened into the background — distractions from the glossy feature set.',
      },
      {
        label: 'Mint parks',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#cbeee7',
        meaning:
          'Parks appear gentle and pastel — recreation rendered through candy tones and Instagram filters.',
      },
      {
        label: 'Bubblegum roads',
        featureType: 'road',
        elementType: 'geometry',
        color: '#ffc0cb',
        meaning:
          'Streets are painted pink — a literalization of play, indulgence, and brand-narrative pathways.',
      },
      {
        label: 'Banana split highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#ffeeaa',
        meaning:
          'Highways take on creamy tones — stylized like catalog dividers or app interface ribbons.',
      },
      {
        label: 'No icon distractions',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Map icons are removed to preserve pastel harmony and branding cohesion.',
      },
      {
        label: 'No local street names',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'Street labels are stripped — letting the spectacle and high-contrast landmarks speak for themselves.',
      },
      {
        label: 'Transit absent',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          "Transit lines don't exist in this world — movement is digital, curated, and delightfully directionless.",
      },
      {
        label: 'Sky blue water',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#aee4f7',
        meaning:
          'Water bodies appear gentle and airbrushed — like decorative blue space in an IKEA diagram.',
      },
      {
        label: 'Soft blue label fill',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#89bcd1',
        meaning:
          "Water text is calm and muted — a brand voice for a surface that says 'refreshing but synthetic.'",
      },
    ],
  },
  {
    tour: 'Popmart',
    legNumber: 3,
    mapId: '11a94722049cf8253fb1cc8f',
    themeName: 'Consumer Spectacle',
    visualSummary:
      'This map dials up the visual contrast — deeper saturation, sharper pinks, and golden accents make the U.S. encore feel like a luxury rebrand. The tone is glossier, more confident, and more ironic than before — like a store relaunch with even bolder signage.',
    rationale: [
      {
        label: 'Deep velvet terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#1c0f1f',
        meaning:
          'The ground is saturated and theatrical — reminiscent of lipstick counters or velvet theater backdrops.',
      },
      {
        label: 'Peach cream text',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#fff3e6',
        meaning:
          'Typography is indulgent and sugary — reminiscent of deluxe packaging or glowing signage.',
      },
      {
        label: 'Bold black outline',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#000000',
        meaning:
          'Sharp contrast outlines reinforce mall-style legibility and ad-campaign clarity.',
      },
      {
        label: 'Honey-gold boundaries',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#ffdf80',
        meaning:
          'Borders glow like price tags or popcorn lighting — separating zones of retail experience.',
      },
      {
        label: 'Hot pink city labels',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#ff80b3',
        meaning:
          'City names pop like cosmetics branding — high-frequency cultural centers highlighted in fluorescent fun.',
      },
      {
        label: 'Mauve mallscape',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#2d132c',
        meaning:
          'The land reads like soft fabric — stylized like the textures of high-end shopping interiors.',
      },
      {
        label: 'Plum POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#3a153a',
        meaning:
          'Points of interest take on club or lounge-like tone — less civic, more vibe.',
      },
      {
        label: 'Electric lilac parks',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#7832a1',
        meaning:
          'Parks go full glam — green turned purple for pure aesthetic punch.',
      },
      {
        label: 'Gold road network',
        featureType: 'road',
        elementType: 'geometry',
        color: '#ffe680',
        meaning:
          'Roads gleam like gift wrap ribbons — inviting, elegant, and ready to deliver you to the next event.',
      },
      {
        label: 'Cream-caramel highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#ffd699',
        meaning:
          'Highways become conveyor belts of spectacle — sleek and show-ready.',
      },
      {
        label: 'No road icons',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Icons removed to reduce clutter — all attention on the display, not the metadata.',
      },
      {
        label: 'Street labels silenced',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'No micro wayfinding — only major emotional and commercial direction matters here.',
      },
      {
        label: 'Transit blackout',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          "No bus lines, no trains — you're either in the showroom or you're not.",
      },
      {
        label: 'Purple-indigo water',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#28194d',
        meaning:
          'Water is thick and mysterious — an aesthetic anchor, not a navigational one.',
      },
      {
        label: 'Pastel water labels',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#a399cc',
        meaning:
          'Water text is delicate and polished — printed in soft-glow catalog type.',
      },
    ],
  },
  {
    tour: 'Popmart',
    legNumber: 4,
    mapId: '11a94722049cf8251da3e027',
    themeName: 'Consumer Spectacle',
    visualSummary:
      "This map infuses PopMart's spectacle with sunset warmth — rich oranges, raspberry pinks, and lush overlays celebrate Latin American energy and irony. It's a vivid, immersive take on the global mall — seductive, surreal, and deeply aware of its own artificiality.",
    rationale: [
      {
        label: 'Burnt cherry terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#29121f',
        meaning:
          'The base is bold and warm — inspired by tropical markets, nightclub lighting, and 90s pop album art.',
      },
      {
        label: 'Vanilla spotlight text',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#fff8e1',
        meaning:
          'Typography glows like signage at dusk — warm, nostalgic, and slightly decadent.',
      },
      {
        label: 'Raisin-black outlines',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#120b10',
        meaning:
          'Bold strokes anchor the vibrant palette — preserving legibility amid the chaos of color.',
      },
      {
        label: 'Peach-border divisions',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#ffb347',
        meaning:
          'Borders glow with warmth — like territory lines drawn in neon juice.',
      },
      {
        label: 'Strawberry city labeling',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#ff6699',
        meaning:
          'Urban centers beam in tropical pinks — rhythmic, playful, and impossible to miss.',
      },
      {
        label: 'Berry-plum terrain',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#3d1e2a',
        meaning:
          'The land appears lush and surreal — suggesting both street markets and glitter runways.',
      },
      {
        label: 'Maroon POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#4d2433',
        meaning:
          'Cultural markers blend into background layers — less location, more atmosphere.',
      },
      {
        label: 'Raspberry parks',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#995577',
        meaning:
          'Greenspaces become vibrant theatrical spaces — saturated zones of performance and crowd energy.',
      },
      {
        label: 'Mustard-gold roads',
        featureType: 'road',
        elementType: 'geometry',
        color: '#ffcc66',
        meaning:
          'Streets appear as bold lines — evoking stickers, pathways, and broadcast trails.',
      },
      {
        label: 'Peach-orange highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#ff9966',
        meaning:
          'Highways stretch in creamsicle hues — radiant and flowing, like pop anthems across the country.',
      },
      {
        label: 'Hidden icons',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Icon clutter is removed to keep the visual field unified and punchy.',
      },
      {
        label: 'No micro text',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'Minor street names are removed — this is macro design, big color, big tone.',
      },
      {
        label: 'Transit removed',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          'Transit systems vanish into the background — travel is visual, visceral, and symbolic.',
      },
      {
        label: 'Cerulean-deep water',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#2e3d4f',
        meaning:
          'Water is styled like a screen reflection — deep, moody, cinematic.',
      },
      {
        label: 'Sky-glow labels',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#90aacc',
        meaning:
          'Text glows softly over dark water — a mix of navigation, dream, and graphic design.',
      },
    ],
  },
  {
    tour: 'Popmart',
    legNumber: 5,
    mapId: '11a94722049cf825994f561b',
    themeName: 'Consumer Spectacle',
    visualSummary:
      'The final leg of PopMart explodes across continents in a warm-glow twilight of global consumerism. With gold-washed roads and oceanic shadows, this map closes the tour with cosmopolitan spectacle and cross-cultural satire — a polished global ad campaign made cartographic.',
    rationale: [
      {
        label: 'Steel-blue terrain',
        featureType: 'all',
        elementType: 'geometry',
        color: '#20242a',
        meaning:
          'The map base suggests a twilight showroom — modern, polished, and globally connected.',
      },
      {
        label: 'Eggshell ad text',
        featureType: 'all',
        elementType: 'labels.text.fill',
        color: '#f5f5f0',
        meaning:
          'Typography evokes packaging copy and minimalist billboards — crisp, refined, impersonal.',
      },
      {
        label: 'Inky black outline',
        featureType: 'all',
        elementType: 'labels.text.stroke',
        color: '#101214',
        meaning:
          'Dark strokes provide contrast — like bold print on product labels or election results on late-night news feeds.',
      },
      {
        label: 'Matte gold boundaries',
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        color: '#a98c62',
        meaning:
          'Civic divisions shimmer subtly — implying control, not enforcing it.',
      },
      {
        label: 'Icy blue city text',
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        color: '#7fb0d7',
        meaning:
          'City labels pop with cool digital clarity — visible from across continents like syndicated icons.',
      },
      {
        label: 'Slate concrete terrain',
        featureType: 'landscape',
        elementType: 'geometry.fill',
        color: '#2c3138',
        meaning:
          'Land is rendered in urban-neutral — evoking parking structures, product backdrops, and built space.',
      },
      {
        label: 'Muted POIs',
        featureType: 'poi',
        elementType: 'geometry',
        color: '#353c42',
        meaning:
          'Points of interest recede into grid-like neutrality — quiet tiles on a global dashboard.',
      },
      {
        label: 'Cool-gray parks',
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        color: '#4e5c66',
        meaning:
          "Parks are no longer green — they're corporate and contemplative, part of the branded cityscape.",
      },
      {
        label: 'Soft bronze roads',
        featureType: 'road',
        elementType: 'geometry',
        color: '#c3a77b',
        meaning:
          'Roads reflect consumer gold — flowing paths of movement, delivery, and design.',
      },
      {
        label: 'Sandy highways',
        featureType: 'road.highway',
        elementType: 'geometry',
        color: '#e0c59c',
        meaning:
          'Highways glow like designer products — expensive, elegant, and untouchably smooth.',
      },
      {
        label: 'Icon-free design',
        featureType: 'road',
        elementType: 'labels.icon',
        color: 'none',
        meaning:
          'Icons are removed to declutter the canvas — letting tone and color carry the emotion.',
      },
      {
        label: 'Silent local streets',
        featureType: 'road.local',
        elementType: 'labels.text',
        color: 'none',
        meaning:
          'No minor labeling — everything here is a major statement in design and delivery.',
      },
      {
        label: 'No transit system',
        featureType: 'transit',
        elementType: 'geometry',
        color: 'none',
        meaning:
          'Mass transit fades — this is individual, isolated luxury travel or immersive performance space.',
      },
      {
        label: 'Shadow-sea fill',
        featureType: 'water',
        elementType: 'geometry.fill',
        color: '#1a2a35',
        meaning:
          'Water is rendered like polished tech — dark, smooth, and quietly alive with possibility.',
      },
      {
        label: 'Soft slate labeling',
        featureType: 'water',
        elementType: 'labels.text.fill',
        color: '#96b0c0',
        meaning:
          'Marine labels are muted — part of the visual system, not the message.',
      },
    ],
  },
];
