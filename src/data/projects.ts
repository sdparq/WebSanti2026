// ────────────────────────────────────────────────────────────────────────────
// PROYECTOS — Santiago de Pablo Arquitectura
//
// Cómo añadir/editar un proyecto:
//   1. Copia uno de los bloques de abajo y cámbialo.
//   2. `slug` es la dirección en la web: /es/proyectos/<slug>
//   3. `images` son las fotos reales (en /public/proyectos/<slug>/...).
//      La primera imagen es la portada del proyecto.
//      Si dejas images: [], la web genera una escena atmosférica con el nombre.
//   4. `hue` (0–360) solo afecta al color de esa escena cuando no hay fotos.
// ────────────────────────────────────────────────────────────────────────────

type Bilingual = { es: string; en: string };

export interface Project {
  slug: string;
  title: string;
  year?: string;
  featured?: boolean;
  hue: number;
  location: Bilingual;
  category: Bilingual;
  award?: Bilingual;
  status?: Bilingual;
  area?: string;
  summary: Bilingual;
  description: { es: string[]; en: string[] };
  images: string[];
}

export const projects: Project[] = [
  {
    slug: '85-vpo-bilbao',
    title: '85 VPO Bilbao',
    featured: true,
    hue: 30,
    location: { es: 'Iturrigorri, Bilbao', en: 'Iturrigorri, Bilbao' },
    category: { es: 'Vivienda colectiva', en: 'Collective housing' },
    award: { es: '1.er premio', en: '1st prize' },
    summary: {
      es: 'Concurso de 85 viviendas de protección oficial que fragmenta su volumen para adaptarse a un terreno en pendiente y a la escala del entorno.',
      en: 'A competition for 85 social-housing units whose volume is fragmented to adapt to a sloping site and the scale of its surroundings.',
    },
    description: {
      es: [
        'La propuesta busca dar respuesta a un entorno urbano complejo desde su volumetría y la composición de sus planos. Por un lado encontramos el fuerte desnivel que presenta el terreno; por otro, la cercanía de los edificios más próximos.',
        'Para dar respuesta decidimos fragmentar el proyecto, rompiendo su lado largo y ajustándolo a la escala urbana que presentan las inmediaciones.',
      ],
      en: [
        'The proposal responds to a complex urban setting through its massing and the composition of its planes. On one hand, the site has a steep slope; on the other, the neighbouring buildings sit very close.',
        'To address this, we fragmented the project, breaking up its long side and adjusting it to the urban scale of its surroundings.',
      ],
    },
    // Solo renders en la galería (los planos quedan fuera a propósito)
    images: [
      '/proyectos/85-vpo-bilbao/exterior.jpg',
      '/proyectos/85-vpo-bilbao/interior.jpg',
    ],
  },
  {
    slug: 'cubricion-pistas-valdelasfuentes',
    title: 'Cubrición Pistas Valdelasfuentes',
    featured: true,
    hue: 200,
    location: { es: 'Alcobendas, Madrid', en: 'Alcobendas, Madrid' },
    category: { es: 'Equipamiento deportivo', en: 'Sports facility' },
    award: { es: '1.er premio', en: '1st prize' },
    summary: {
      es: 'Una cubierta ligera de madera que protege las pistas deportivas existentes con mínimo impacto, creando una estructura sugerente y funcional.',
      en: 'A light timber roof that shelters the existing sports courts with minimal impact, creating an evocative and functional structure.',
    },
    description: {
      es: [
        'El proyecto plantea una intervención acorde a la escala y la geometría de las pistas existentes, siguiendo su lógica y la del conjunto del complejo deportivo de Valdelasfuentes.',
        'Se adapta a la edificación existente buscando un mínimo impacto sobre ella, al tiempo que crea una estructura ligera, sugerente y funcional.',
      ],
      en: [
        'The project proposes an intervention in keeping with the scale and geometry of the existing courts, following their logic and that of the wider Valdelasfuentes sports complex.',
        'It adapts to the existing buildings with minimal impact, while creating a light, evocative and functional structure.',
      ],
    },
    // Solo renders (la axonometría queda fuera a propósito)
    images: [
      '/proyectos/cubricion-pistas-valdelasfuentes/exterior-futbol.jpg',
      '/proyectos/cubricion-pistas-valdelasfuentes/basket.jpg',
      '/proyectos/cubricion-pistas-valdelasfuentes/futsal.jpg',
      '/proyectos/cubricion-pistas-valdelasfuentes/pasillo.jpg',
    ],
  },
  {
    slug: '32-vpo-entremutilvas',
    title: '32 VPO Entremutilvas',
    featured: true,
    hue: 90,
    location: { es: 'Pamplona, Navarra', en: 'Pamplona, Navarra' },
    category: { es: 'Vivienda colectiva', en: 'Collective housing' },
    summary: {
      es: 'Viviendas en alquiler para mayores y jóvenes organizadas en torno a un único núcleo, en clave de “co-living” y comunidad.',
      en: 'Rental housing for the elderly and the young, organised around a single core in a spirit of co-living and community.',
    },
    description: {
      es: [
        'El proyecto resuelve un programa de viviendas en alquiler para colectivos específicos —personas mayores de 65 y jóvenes menores de 35 años—, fomentando la colaboración vecinal, la igualdad y la corresponsabilidad en los cuidados. Nos acercamos al modelo del “co-living”, donde se valoran más las experiencias que las posesiones y se busca que las personas interactúen gracias a una mejor dotación de los espacios comunes.',
        'Para lograrlo, resolvemos el programa con un solo núcleo de comunicación vertical. Una única escalera crea una sola comunidad de vecinos, reduce el mantenimiento, optimiza los espacios comunes y fomenta una mejor socialización, además de mejorar el rendimiento de los locales en planta baja y del aparcamiento en el sótano.',
      ],
      en: [
        'The project resolves a programme of rental housing for specific groups — people over 65 and under 35 — fostering neighbourly collaboration, equality and shared responsibility in care. It moves towards a co-living model, where experiences matter more than possessions and people are encouraged to interact through better-equipped common spaces.',
        'To achieve this, the programme is organised around a single vertical core. One staircase creates a single community of neighbours, reduces maintenance, optimises the common areas and encourages social interaction, while improving the performance of the ground-floor premises and the basement parking.',
      ],
    },
    images: [
      '/proyectos/32-vpo-entremutilvas/exterior.jpg',
      '/proyectos/32-vpo-entremutilvas/galeria.jpg',
    ],
  },
  {
    slug: 'facultad-medicina-upna',
    title: 'Facultad de Medicina UPNA',
    featured: true,
    hue: 210,
    location: { es: 'Pamplona, Navarra', en: 'Pamplona, Navarra' },
    category: { es: 'Equipamiento docente', en: 'Educational building' },
    summary: {
      es: 'Un volumen ligero de lamas blancas para la nueva Facultad de Medicina, en diálogo con la edificación histórica del campus.',
      en: 'A light volume of white slats for the new Faculty of Medicine, in dialogue with the historic campus buildings.',
    },
    // TEXTO PROVISIONAL: sustituir por la memoria real del proyecto
    description: {
      es: [
        'El proyecto propone un volumen sereno y ligero, envuelto en una piel de lamas verticales que tamiza la luz y unifica el conjunto. La planta baja se abre en vidrio hacia la plaza, tejiendo la vida universitaria con el espacio público.',
        'La nueva pieza dialoga con la edificación histórica de ladrillo del campus desde el contraste respetuoso: escala ajustada, materialidad clara y una presencia silenciosa que ordena el frente urbano.',
      ],
      en: [
        'The project proposes a serene, light volume wrapped in a skin of vertical slats that filters daylight and unifies the whole. The ground floor opens in glass towards the plaza, weaving university life into the public space.',
        'The new piece converses with the historic brick buildings of the campus through respectful contrast: adjusted scale, light materiality and a quiet presence that orders the urban front.',
      ],
    },
    images: [
      '/proyectos/facultad-medicina-upna/frontal.jpg',
      '/proyectos/facultad-medicina-upna/atrio.jpg',
      '/proyectos/facultad-medicina-upna/interior-superior.jpg',
      '/proyectos/facultad-medicina-upna/pasillo.jpg',
      '/proyectos/facultad-medicina-upna/trasera.jpg',
      '/proyectos/facultad-medicina-upna/junta.jpg',
    ],
  },
  {
    slug: 'espacio-escenico-huarte',
    title: 'Espacio Escénico Huarte',
    featured: true,
    hue: 20,
    location: { es: 'Huarte, Navarra', en: 'Huarte, Navarra' },
    category: { es: 'Equipamiento cultural', en: 'Cultural building' },
    summary: {
      es: 'Un espacio escénico de ladrillo que se cierra con rotundidad a la calle y se abre, a través de una celosía cerámica, a la luz.',
      en: 'A brick performance venue that closes firmly to the street and opens to the light through a ceramic lattice.',
    },
    // TEXTO PROVISIONAL: sustituir por la memoria real del proyecto
    description: {
      es: [
        'El edificio se plantea como un volumen rotundo de ladrillo, coherente con la tradición constructiva del entorno. La masa cerámica protege la caja escénica y garantiza el aislamiento que exige el programa.',
        'En su coronación, el aparejo se abre en celosía: una banda permeable que ilumina los espacios servidores y aligera el volumen, cambiando de expresión con la luz del día.',
      ],
      en: [
        'The building is conceived as a bold brick volume, consistent with the construction tradition of its surroundings. The ceramic mass protects the stage box and provides the acoustic isolation the programme demands.',
        'At its crown the bond opens into a lattice: a permeable band that lights the serving spaces and lightens the volume, changing its expression with the daylight.',
      ],
    },
    images: [
      '/proyectos/espacio-escenico-huarte/exterior.jpg',
      '/proyectos/espacio-escenico-huarte/interior.jpg',
    ],
  },
  {
    slug: 'housing-new-york',
    title: 'Housing New York',
    featured: true,
    hue: 250,
    location: { es: 'Nueva York, EEUU', en: 'New York, USA' },
    category: { es: 'Vivienda colectiva', en: 'Collective housing' },
    summary: {
      es: 'Vivienda asequible de relleno urbano en pequeñas parcelas en desuso, construida a partir de cuatro elementos esenciales.',
      en: 'Affordable infill housing on small disused plots, built from four essential elements.',
    },
    description: {
      es: [
        'Pequeñas parcelas en desuso en la ciudad de Nueva York ofrecen oportunidades para dar una solución precisa a un objetivo específico: ¿cuáles son las partes más importantes y absolutamente necesarias de una vivienda?',
        'La propuesta ofrece viviendas asequibles de relleno urbano a pequeña escala que constan de cuatro elementos esenciales: un núcleo inteligente, un balcón, un espacio habitable y una fachada operable. Al ubicar cada elemento siguiendo la regla sugerida en la propuesta, pueden utilizarse y desarrollarse diversas tipologías de vivienda.',
      ],
      en: [
        'Small disused plots across New York City offer opportunities for a precise answer to a specific question: what are the most important, absolutely necessary parts of a home?',
        'The proposal delivers small-scale affordable infill housing made of four essential elements: a smart core, a balcony, a living space and an operable façade. By placing each element according to the rule suggested in the proposal, a wide range of housing typologies can be developed.',
      ],
    },
    images: [
      '/proyectos/housing-new-york/exterior.jpg',
      '/proyectos/housing-new-york/interior.jpg',
    ],
  },
  {
    slug: 'polideportivo-lasarte',
    title: 'Polideportivo Lasarte',
    featured: true,
    hue: 150,
    location: { es: 'Lasarte, Gipuzkoa', en: 'Lasarte, Gipuzkoa' },
    category: { es: 'Equipamiento deportivo', en: 'Sports facility' },
    summary: {
      es: 'Un polideportivo organizado por una calle interior, con el graderío integrado como gran puerta que mira al campo de fútbol.',
      en: 'A sports centre organised along an interior street, with the stands integrated as a great gate facing the football pitch.',
    },
    description: {
      es: [
        'La calle interior actúa como colector de los accesos a la mayoría de las instalaciones. Se propone integrar el graderío en el nuevo edificio mediante un vaciado de la parte inferior de su volumen prismático, a modo de gran puerta que mira al campo de fútbol, con accesos al frontón y al nuevo polideportivo en sus extremos.',
        'El espacio ganado entre el campo y el graderío permite reubicar varias de las calles de atletismo eliminadas con el nuevo vial rodado junto al río.',
      ],
      en: [
        'The interior street collects the accesses to most of the facilities. The stands are integrated into the new building by hollowing out the lower part of its prismatic volume, like a great gate facing the football pitch, with entrances to the fronton court and the new sports hall at its ends.',
        'The space gained between the pitch and the stands allows several of the athletics lanes removed by the new riverside road to be relocated.',
      ],
    },
    images: [
      '/proyectos/polideportivo-lasarte/exterior.jpg',
      '/proyectos/polideportivo-lasarte/piscina.jpg',
      '/proyectos/polideportivo-lasarte/futbito.jpg',
      '/proyectos/polideportivo-lasarte/futbito-lado.jpg',
    ],
  },
  {
    slug: 'mercado-biblioteca-ponteareas',
    title: 'Mercado-Biblioteca Ponteareas',
    featured: true,
    hue: 60,
    location: { es: 'Ponteareas, Pontevedra', en: 'Ponteareas, Pontevedra' },
    category: { es: 'Rehabilitación', en: 'Renovation' },
    summary: {
      es: 'La transformación del mercado existente en un catalizador social y cultural, nexo entre los espacios públicos que lo rodean.',
      en: 'The transformation of the existing market into a social and cultural catalyst, a link between the public spaces around it.',
    },
    description: {
      es: [
        'La propuesta plantea, desde el máximo aprovechamiento de la edificación existente, un edificio que actúe como catalizador de múltiples actividades sociales y culturales y como nexo entre los distintos espacios públicos que lo rodean. Conservando la estructura, el programa se articula alrededor de la crujía longitudinal central, que separa los espacios que requieren silencio de los que tienen vocación de relación e intercambio.',
        'Ese espacio central, abierto y continuo, se entiende como una prolongación de los espacios públicos exteriores. Las fachadas, con una piel exterior permeable proyectada desde criterios bioclimáticos, difuminan el límite entre exterior e interior creando espacios semiabiertos y de transición que multiplican las posibilidades de uso.',
      ],
      en: [
        'Starting from the fullest use of the existing building, the proposal creates a catalyst for multiple social and cultural activities and a link between the surrounding public spaces. Preserving the structure, the programme is arranged around the central longitudinal bay, separating spaces that require silence from those meant for meeting and exchange.',
        'That central space, open and continuous, is understood as an extension of the outdoor public realm. The façades, with a permeable outer skin designed on bioclimatic criteria, blur the boundary between outside and inside, creating semi-open transition spaces that multiply the ways the building can be used.',
      ],
    },
    images: [
      '/proyectos/mercado-biblioteca-ponteareas/exterior.jpg',
      '/proyectos/mercado-biblioteca-ponteareas/acceso.jpg',
      '/proyectos/mercado-biblioteca-ponteareas/interior.jpg',
    ],
  },
  {
    slug: 'mercado-de-abastos-de-vera',
    title: 'Mercado de Abastos de Vera',
    featured: true,
    hue: 40,
    location: { es: 'Vera, Almería', en: 'Vera, Almería' },
    category: { es: 'Equipamiento público', en: 'Public building' },
    award: { es: '4.º premio', en: '4th prize' },
    summary: {
      es: 'Un mercado que se teje con la ciudad: accesos en los lugares naturales de tránsito y una plaza sin cotas altas, abierta al entorno.',
      en: 'A market woven into the town: entrances at the natural pedestrian crossings and a plaza without high levels, open to its surroundings.',
    },
    description: {
      es: [
        'El proyecto propone una conexión real y de gran interés entre el espacio público y el mercado. Para ello, los accesos se sitúan en lugares naturales de tránsito peatonal, y se evitan cotas altas en la plaza, favoreciendo la conexión con la ciudad y el entorno inmediato.',
        'Se potencia la relación con el entorno, especialmente con la calle Jacinto Anglada, minimizando el impacto visual, integrando todos los elementos en el conjunto y resolviendo el acuerdo con los desniveles perimetrales, favoreciendo los encuentros con la plaza.',
      ],
      en: [
        'The project proposes a real and meaningful connection between public space and the market. Entrances are placed at the natural points of pedestrian movement, and high levels are avoided in the plaza, favouring the connection with the town and its immediate surroundings.',
        'The relationship with the context is reinforced, especially with Jacinto Anglada street, minimising visual impact, integrating every element into the whole and resolving the perimeter level changes to encourage encounters with the plaza.',
      ],
    },
    // Pendiente de imágenes: mientras tanto se muestra una escena generada
    images: [],
  },
  {
    slug: 'reforma-estadio-el-sadar',
    title: 'Reforma Estadio El Sadar',
    featured: true,
    hue: 350,
    location: { es: 'Pamplona, Navarra', en: 'Pamplona, Navarra' },
    category: { es: 'Equipamiento deportivo', en: 'Sports facility' },
    award: { es: '3.er premio', en: '3rd prize' },
    summary: {
      es: 'Una nueva envolvente para El Sadar: un diamante tallándose, con las señas de identidad de Osasuna y su afición.',
      en: 'A new envelope for El Sadar: a diamond being cut, carrying the identity of Osasuna and its supporters.',
    },
    description: {
      es: [
        'El Sadar es considerado uno de los estadios más difíciles de España, gracias al empuje de los aficionados y la cercanía al campo. El estadio representa la pluralidad de la ciudad, la lealtad y el compromiso de su afición.',
        'La envolvente busca la personalización respecto a otros estadios, representando las señas de identidad del C.A. Osasuna. Un equipo rocoso: un diamante que se está tallando hasta convertirse en una joya.',
      ],
      en: [
        'El Sadar is considered one of the most intimidating grounds in Spain, thanks to the drive of its supporters and their closeness to the pitch. The stadium represents the plurality of the city, and the loyalty and commitment of its fans.',
        'The envelope seeks to set it apart from other stadiums, carrying the identity of C.A. Osasuna. A rock-solid team: a diamond being cut until it becomes a jewel.',
      ],
    },
    images: [
      '/proyectos/reforma-estadio-el-sadar/aerea.jpg',
      '/proyectos/reforma-estadio-el-sadar/exterior-lateral.jpg',
      '/proyectos/reforma-estadio-el-sadar/detalle-fachada.jpg',
      '/proyectos/reforma-estadio-el-sadar/interior-frontal.jpg',
      '/proyectos/reforma-estadio-el-sadar/graderio-sur.jpg',
      '/proyectos/reforma-estadio-el-sadar/interior-lateral.jpg',
      '/proyectos/reforma-estadio-el-sadar/zona-vip.jpg',
    ],
  },
  {
    slug: 'sede-nordex',
    title: 'Sede Nordex',
    featured: true,
    hue: 110,
    location: { es: 'Pamplona, Navarra', en: 'Pamplona, Navarra' },
    category: { es: 'Oficinas', en: 'Offices' },
    award: { es: '2.º premio', en: '2nd prize' },
    summary: {
      es: 'Una oficina soterrada en torno a tres grandes patios verdes, sin renunciar a la luz natural ni a la calidad ambiental.',
      en: 'An office sunk into the ground around three large green courtyards, without giving up natural light or environmental quality.',
    },
    description: {
      es: [
        'La propuesta rompe con la idea convencional de oficina y busca dotar a los trabajadores de un espacio de concentración soterrado sin sacrificar la luz natural ni la calidad ambiental exterior.',
        'Los usos se distribuyen en torno a tres grandes patios verdes que sirven como pulmones del proyecto y permiten disfrutar de un espacio exterior para reuniones informales y descansos.',
      ],
      en: [
        'The proposal breaks with the conventional idea of the office, giving workers a sunken space for concentration without sacrificing natural light or outdoor environmental quality.',
        'The programme is arranged around three large green courtyards that act as the lungs of the project and provide outdoor space for informal meetings and breaks.',
      ],
    },
    images: [
      '/proyectos/sede-nordex/exterior.jpg',
      '/proyectos/sede-nordex/patio.jpg',
      '/proyectos/sede-nordex/zona-trabajo.jpg',
      '/proyectos/sede-nordex/comedor.jpg',
    ],
  },
  {
    slug: 'the-factory',
    title: 'The Factory',
    featured: true,
    hue: 25,
    location: { es: 'Pamplona, Navarra', en: 'Pamplona, Navarra' },
    category: { es: 'Rehabilitación', en: 'Renovation' },
    summary: {
      es: 'Un antiguo molino de harina devuelto a la vida como espacio de trabajo y reunión, conservando el alma del edificio.',
      en: 'An old flour mill brought back to life as a space for work and gathering, preserving the soul of the building.',
    },
    description: {
      es: [
        'The Factory devuelve a la vida un antiguo molino de harina convertido en un espacio de trabajo y reunión. Mantener la esencia del lugar es tan ambicioso como interesante: los viejos túneles de harina son ahora parte del alma de los nuevos usos, que conservan la identidad de un edificio tan característico.',
        'La propuesta se organiza en torno a un cobertizo central dedicado a los usos más públicos y de reunión, del que surgen tanto las oficinas como los talleres. El acceso desde la calle y la conexión entre cobertizos se realiza mediante pequeños volúmenes transparentes que favorecen un ejercicio espacial de compresión y descompresión que potencia la secuencialidad del edificio.',
      ],
      en: [
        'The Factory brings an old flour mill back to life as a space for work and gathering. Keeping the essence of the place is as ambitious as it is compelling: the old flour tunnels are now part of the soul of the new uses, preserving the identity of such a distinctive building.',
        'The proposal is organised around a central shed for the most public, gathering uses, from which both offices and workshops emerge. Access from the street and the connection between sheds happen through small transparent volumes that create a spatial play of compression and decompression, heightening the sequence of the building.',
      ],
    },
    images: [
      '/proyectos/the-factory/exterior.jpg',
      '/proyectos/the-factory/hall.jpg',
      '/proyectos/the-factory/set.jpg',
      '/proyectos/the-factory/trabajo.jpg',
      '/proyectos/the-factory/cafeteria.jpg',
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
