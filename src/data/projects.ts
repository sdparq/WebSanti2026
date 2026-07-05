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
      '/proyectos/85-vpo-bilbao/portada.jpg',
      '/proyectos/85-vpo-bilbao/01.jpg',
      '/proyectos/85-vpo-bilbao/02.jpg',
      '/proyectos/85-vpo-bilbao/03.jpg',
      '/proyectos/85-vpo-bilbao/04.jpg',
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
      '/proyectos/32-vpo-entremutilvas/portada.jpg',
      '/proyectos/32-vpo-entremutilvas/01.jpg',
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
      '/proyectos/mercado-biblioteca-ponteareas/portada.jpg',
      '/proyectos/mercado-biblioteca-ponteareas/01.jpg',
      '/proyectos/mercado-biblioteca-ponteareas/02.jpg',
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
    images: [
      '/proyectos/mercado-de-abastos-de-vera/portada.jpg',
      '/proyectos/mercado-de-abastos-de-vera/01.jpg',
      '/proyectos/mercado-de-abastos-de-vera/02.jpg',
      '/proyectos/mercado-de-abastos-de-vera/03.jpg',
    ],
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
  {
    slug: 'torre-observatorio-zagreb',
    title: 'Torre Observatorio Zagreb',
    featured: true,
    hue: 230,
    location: { es: 'Zagreb, Croacia', en: 'Zagreb, Croatia' },
    category: { es: 'Torre mirador', en: 'Observation tower' },
    award: { es: 'Finalista', en: 'Finalist' },
    summary: {
      es: 'Una torre observatorio que plantea un recorrido vertical: descubrir la ciudad participando de ella desde dentro.',
      en: 'An observation tower conceived as a vertical journey: discovering the city while taking part in it from within.',
    },
    description: {
      es: [
        'La torre observatorio de Zagreb es un concepto desarrollado para una promotora de Emiratos Árabes que plasma la necesidad de alzar la vista y encarar la ciudad desde el descubrimiento de todos sus puntos.',
        'El recorrido que se plantea es vertical: el espectador es partícipe, desde el interior, de todo lo que sucede en la ciudad.',
      ],
      en: [
        'The Zagreb observation tower is a concept developed for a UAE developer, expressing the need to raise one’s gaze and face the city by discovering it from every vantage point.',
        'The proposed journey is vertical: from within, the visitor takes part in everything happening in the city.',
      ],
    },
    images: [
      '/proyectos/torre-observatorio-zagreb/exterior-amanecer.jpg',
      '/proyectos/torre-observatorio-zagreb/exterior-noche.jpg',
      '/proyectos/torre-observatorio-zagreb/acceso.jpg',
      '/proyectos/torre-observatorio-zagreb/jardin-vertical.jpg',
      '/proyectos/torre-observatorio-zagreb/gradas.jpg',
      '/proyectos/torre-observatorio-zagreb/red.jpg',
      '/proyectos/torre-observatorio-zagreb/mirador.jpg',
    ],
  },
  {
    slug: 'monumento-a-los-caidos',
    title: 'Transformación del Monumento a los Caídos',
    featured: true,
    hue: 15,
    location: { es: 'Pamplona, Navarra', en: 'Pamplona, Navarra' },
    category: { es: 'Espacio público', en: 'Public space' },
    award: { es: 'Finalista', en: 'Finalist' },
    summary: {
      es: 'El monumento deja de ser una barrera para convertirse en la nueva Puerta del Sur de Pamplona.',
      en: 'The monument ceases to be a barrier and becomes the new South Gate of Pamplona.',
    },
    description: {
      es: [
        'La Plaza del Castillo y la Plaza de la Libertad son los dos polos del gran salón urbano que constituye la avenida de Carlos III tras su peatonalización. Sin embargo, la Plaza de la Libertad nunca ha tenido gran actividad urbana, debido a su condición periférica y a un diseño más atento a resaltar su monumentalidad que a facilitar los usos ciudadanos.',
        'La nueva condición central que el desarrollo de Lezkairu otorga a la plaza abre nuevas oportunidades: el Monumento a los Caídos debe dejar de ser una barrera para convertirse en la nueva Puerta del Sur de la ciudad.',
      ],
      en: [
        'Plaza del Castillo and Plaza de la Libertad are the two poles of the great urban hall that Carlos III avenue became after its pedestrianisation. Yet Plaza de la Libertad has never seen much urban life, due to its peripheral condition and a design more concerned with monumentality than with everyday civic use.',
        'The new centrality that the Lezkairu development brings to the square opens fresh opportunities: the Monument must stop being a barrier and become the city’s new South Gate.',
      ],
    },
    images: [
      '/proyectos/monumento-a-los-caidos/vista-central.jpg',
      '/proyectos/monumento-a-los-caidos/oculo.jpg',
      '/proyectos/monumento-a-los-caidos/lateral.jpg',
      '/proyectos/monumento-a-los-caidos/plataforma.jpg',
      '/proyectos/monumento-a-los-caidos/aerea.jpg',
    ],
  },
  {
    slug: 'viviendas-colaborativas-avila',
    title: 'Viviendas Colaborativas Ávila',
    featured: true,
    hue: 45,
    location: { es: 'Ávila', en: 'Ávila' },
    category: { es: 'Vivienda colaborativa', en: 'Co-housing' },
    summary: {
      es: 'Una edificación compacta hacia fuera y abierta hacia dentro: la vida gira en torno a un patio ajardinado.',
      en: 'Compact on its perimeter and open within: life revolves around a landscaped courtyard.',
    },
    description: {
      es: [
        'Se propone una edificación compacta en su perímetro —atendiendo a criterios de funcionalidad y eficiencia energética— y abierta en su interior en torno a un patio. Ese espacio central es el corazón del proyecto: distribuidor único del programa y generador de espacios de relación asociados a las viviendas.',
        'Una galería alrededor del patio ajardinado da acceso, en una única planta, a las viviendas. Entre ellas se intercalan los espacios comunes: estancias de relación en la propia galería, coworking, sala social y gimnasio. El diseño destaca así el carácter social de la edificación, núcleo desde el que se organiza el resto del programa.',
      ],
      en: [
        'The building is compact on its perimeter — following criteria of functional layout and energy efficiency — and open at its core around a courtyard. That central space is the heart of the project: the sole distributor of the programme and the generator of shared spaces linked to the homes.',
        'A gallery around the landscaped courtyard gives access to the dwellings on a single level. Interspersed among them are the common spaces: sitting areas along the gallery itself, coworking, a social room and a gym. The design thus emphasises the social character of the building, the nucleus around which the rest of the programme is organised.',
      ],
    },
    images: [
      '/proyectos/viviendas-colaborativas-avila/portada.jpg',
      '/proyectos/viviendas-colaborativas-avila/01.jpg',
      '/proyectos/viviendas-colaborativas-avila/02.jpg',
    ],
  },
  {
    slug: 'viviendas-colaborativas-valladolid',
    title: 'Viviendas Colaborativas Valladolid',
    featured: true,
    hue: 75,
    location: { es: 'Valladolid', en: 'Valladolid' },
    category: { es: 'Vivienda colaborativa', en: 'Co-housing' },
    award: { es: '3.er premio', en: '3rd prize' },
    summary: {
      es: '107 viviendas en 14 portales, con doble orientación y una planta baja concebida como nexo y punto de encuentro.',
      en: '107 dwellings across 14 entrances, all dual-aspect, with a ground floor conceived as a link and meeting point.',
    },
    description: {
      es: [
        'Para optimizar la solución y satisfacer el número de unidades propuesto, se plantean tres viviendas por núcleo y planta, todas con doble orientación —zonas vivideras a sur— y ventilación cruzada. En diálogo con las edificaciones de la zona, el proyecto se divide horizontalmente en dos bloques separados por un portal común y fragmenta verticalmente sus fachadas con cuerpos rítmicamente volados; los petos de cubierta, inclinados alternativamente, hacen del conjunto una suma de unidades que se relacionan en planta baja.',
        'Las 107 viviendas se organizan en 14 portales, a razón de 8 por portal, con un único acceso al conjunto. Una urbanización interior conecta todos los bloques y reparte los usos comunes en una planta baja concebida como nexo y punto de encuentro: aparcamiento de bicicletas, salas sociales, gimnasio y espacios flexibles con posible acceso directo desde la calle. La génesis modular permite además dividir la construcción en hasta 14 fases independientes.',
      ],
      en: [
        'To optimise the solution and meet the required number of units, three dwellings are arranged per core and floor, all dual-aspect — living areas facing south — with cross ventilation. In dialogue with the neighbouring buildings, the project splits horizontally into two blocks separated by a shared entrance, while its façades fragment vertically into rhythmically cantilevered bodies; the alternately tilted roof parapets turn the whole into a sum of dwelling units that relate to one another at ground level.',
        'The 107 homes are organised into 14 entrances of 8 dwellings each, with a single access to the complex. An interior landscaped ground connects all the blocks and distributes the shared uses across a ground floor conceived as a link and meeting point: bicycle parking, social rooms, a gym and flexible spaces with possible direct street access. The modular genesis also allows construction in up to 14 independent phases.',
      ],
    },
    images: [
      '/proyectos/viviendas-colaborativas-valladolid/portada.jpg',
      '/proyectos/viviendas-colaborativas-valladolid/01.jpg',
      '/proyectos/viviendas-colaborativas-valladolid/02.jpg',
    ],
  },
  {
    slug: 'viviendas-unifamiliares-gorraiz',
    title: 'Viviendas Unifamiliares en Gorraiz',
    featured: true,
    hue: 95,
    location: { es: 'Gorraiz, Navarra', en: 'Gorraiz, Navarra' },
    category: { es: 'Vivienda unifamiliar', en: 'Single-family housing' },
    award: { es: '3.er premio', en: '3rd prize' },
    summary: {
      es: 'Tres volúmenes de madera surgen del terreno; el salón y la barbacoa, transparentes, se abren al valle.',
      en: 'Three timber volumes rise from the ground; the living room and barbecue area, fully transparent, open to the valley.',
    },
    description: {
      es: [
        'Resaltando el contraste entre las áreas públicas y privadas, tres volúmenes de madera surgen del terreno para encerrar las habitaciones, los baños, el spa, el gimnasio, la bodega y la cocina.',
        'La sala de estar y el área de barbacoa, en cambio, son completamente transparentes, con una vista única del valle.',
      ],
      en: [
        'Heightening the contrast between public and private areas, three timber volumes rise from the ground to enclose the bedrooms, bathrooms, spa, gym, wine cellar and kitchen.',
        'The living room and the barbecue area, by contrast, are completely transparent, with a unique view over the valley.',
      ],
    },
    images: [
      '/proyectos/viviendas-unifamiliares-gorraiz/entrada.jpg',
      '/proyectos/viviendas-unifamiliares-gorraiz/frontal.jpg',
      '/proyectos/viviendas-unifamiliares-gorraiz/exterior-2.jpg',
      '/proyectos/viviendas-unifamiliares-gorraiz/piscina.jpg',
      '/proyectos/viviendas-unifamiliares-gorraiz/nocturna.jpg',
      '/proyectos/viviendas-unifamiliares-gorraiz/salon.jpg',
      '/proyectos/viviendas-unifamiliares-gorraiz/interior-2.jpg',
      '/proyectos/viviendas-unifamiliares-gorraiz/barbacoa.jpg',
    ],
  },
  {
    slug: 'yacimiento-san-esteban',
    title: 'Yacimiento Arqueológico San Esteban',
    featured: true,
    hue: 55,
    location: { es: 'Murcia', en: 'Murcia' },
    category: { es: 'Espacio público', en: 'Public space' },
    award: { es: 'Finalista', en: 'Finalist' },
    summary: {
      es: 'Un elemento urbano que resuelve los recorridos del yacimiento y regala a Murcia un pulmón verde sobre su memoria.',
      en: 'An urban element that resolves the site’s routes and gives Murcia a green lung above its buried memory.',
    },
    description: {
      es: [
        'La propuesta resuelve, por medio de un elemento urbano trascendental, tanto los recorridos del yacimiento como las conexiones entre los puntos fundamentales que desembocan de las calles.',
        'La plaza que se genera es un pulmón verde de la ciudad que esconde los entresijos de la Murcia antigua y permite a los viandantes disfrutar de una zona verde y de espacios infantiles.',
      ],
      en: [
        'By means of a decisive urban element, the proposal resolves both the routes through the archaeological site and the connections between the key points where the streets converge.',
        'The resulting plaza is a green lung for the city, concealing the inner workings of ancient Murcia while offering passers-by a green space and children’s play areas.',
      ],
    },
    images: [
      '/proyectos/yacimiento-san-esteban/aerea-noreste.jpg',
      '/proyectos/yacimiento-san-esteban/aerea-noroeste.jpg',
      '/proyectos/yacimiento-san-esteban/aerea-sureste.jpg',
      '/proyectos/yacimiento-san-esteban/interior-longitudinal.jpg',
      '/proyectos/yacimiento-san-esteban/interior-transversal.jpg',
    ],
  },
  {
    slug: '96-vpo-almeria',
    title: '96 VPO Almería',
    featured: true,
    hue: 35,
    location: { es: 'Almería', en: 'Almería' },
    category: { es: 'Vivienda colectiva', en: 'Collective housing' },
    summary: {
      es: 'Torres de vivienda protegida coronadas por pérgolas, con terrazas corridas vegetadas y un zócalo comercial abierto a la calle.',
      en: 'Social-housing towers crowned by pergolas, with planted continuous terraces and a commercial plinth open to the street.',
    },
    // TEXTO PROVISIONAL: sustituir por la memoria real del proyecto
    description: {
      es: [
        'El conjunto organiza 96 viviendas de protección oficial en volúmenes escalonados que rematan en pérgolas, con terrazas corridas que dan sombra y vegetación a cada vivienda.',
        'La planta baja concentra locales y accesos ajardinados, tejiendo el edificio con la vida de la calle.',
      ],
      en: [
        'The complex arranges 96 social-housing units in stepped volumes crowned by pergolas, with continuous terraces bringing shade and greenery to every home.',
        'The ground floor gathers retail spaces and landscaped entrances, weaving the building into street life.',
      ],
    },
    images: [
      '/proyectos/96-vpo-almeria/portada.jpg',
      '/proyectos/96-vpo-almeria/01.jpg',
    ],
  },
  {
    slug: 'centro-comercial-el-encinar',
    title: 'Centro Comercial El Encinar',
    featured: true,
    hue: 25,
    location: { es: 'España', en: 'Spain' },
    category: { es: 'Comercial', en: 'Retail' },
    summary: {
      es: 'La renovación interior de un centro comercial: madera, lamas y luz para una atmósfera cálida y contemporánea.',
      en: 'The interior renovation of a shopping centre: timber, slats and light for a warm, contemporary atmosphere.',
    },
    // TEXTO PROVISIONAL: sustituir por la memoria real del proyecto
    description: {
      es: [
        'La intervención renueva los espacios comunes del centro comercial con un lenguaje cálido: vigas y planos de madera que ordenan el techo, lamas metálicas que tamizan la iluminación y una nueva escalera que protagoniza el atrio.',
        'El resultado actualiza la experiencia del visitante y pone en valor la arquitectura existente de ladrillo.',
      ],
      en: [
        'The intervention renews the common areas of the shopping centre with a warm language: timber beams and planes ordering the ceiling, metal slats filtering the lighting, and a new staircase starring in the atrium.',
        'The result refreshes the visitor experience while giving value to the existing brick architecture.',
      ],
    },
    images: [
      '/proyectos/centro-comercial-el-encinar/portada.jpg',
      '/proyectos/centro-comercial-el-encinar/01.jpg',
      '/proyectos/centro-comercial-el-encinar/02.jpg',
    ],
  },
  {
    slug: 'centro-comercial-saler',
    title: 'Centro Comercial Saler',
    featured: true,
    hue: 45,
    location: { es: 'Valencia', en: 'Valencia' },
    category: { es: 'Comercial', en: 'Retail' },
    summary: {
      es: 'La transformación del centro comercial Saler: una gran cornisa ondulante de lamas doradas que renueva su fachada y su plaza.',
      en: 'The transformation of the Saler shopping centre: a great undulating cornice of golden slats renewing its façade and plaza.',
    },
    // TEXTO PROVISIONAL: sustituir por la memoria real del proyecto
    description: {
      es: [
        'La renovación dota al centro comercial de una nueva imagen unitaria: una cornisa ondulante de lamas que envuelve el edificio, ilumina la plaza de acceso y convierte la llegada en un acontecimiento.',
        'El proyecto reordena también los espacios exteriores —fuentes, pérgolas y estancias— para devolver al conjunto su vocación de lugar de encuentro.',
      ],
      en: [
        'The renovation gives the shopping centre a new unified image: an undulating cornice of slats that wraps the building, lights the entrance plaza and turns arrival into an event.',
        'The project also reorders the outdoor spaces — fountains, pergolas and resting areas — restoring the complex’s vocation as a meeting place.',
      ],
    },
    images: [
      '/proyectos/centro-comercial-saler/portada.jpg',
      '/proyectos/centro-comercial-saler/01.jpg',
      '/proyectos/centro-comercial-saler/02.jpg',
      '/proyectos/centro-comercial-saler/03.jpg',
      '/proyectos/centro-comercial-saler/04.jpg',
      '/proyectos/centro-comercial-saler/05.jpg',
      '/proyectos/centro-comercial-saler/06.jpg',
      '/proyectos/centro-comercial-saler/07.jpg',
    ],
  },
  {
    slug: 'centro-de-salud-salamanca',
    title: 'Centro de Salud Salamanca',
    featured: true,
    hue: 30,
    location: { es: 'Salamanca', en: 'Salamanca' },
    category: { es: 'Equipamiento sanitario', en: 'Healthcare' },
    summary: {
      es: 'Un centro de salud de volúmenes escalonados y fachada cerámica estriada que filtra la luz, con un acceso cálido de madera.',
      en: 'A health centre of stepped volumes and a fluted ceramic façade that filters the light, with a warm timber entrance.',
    },
    // TEXTO PROVISIONAL: sustituir por la memoria real del proyecto
    description: {
      es: [
        'El edificio se fragmenta en volúmenes escalonados que ajustan su escala al entorno y organizan el programa sanitario con claridad.',
        'Una piel cerámica estriada unifica el conjunto y matiza la luz de las consultas, mientras el acceso se señala con un gran umbral revestido de madera.',
      ],
      en: [
        'The building breaks into stepped volumes that adjust its scale to the surroundings and organise the healthcare programme with clarity.',
        'A fluted ceramic skin unifies the whole and tempers the light of the consultation rooms, while the entrance is marked by a large timber-lined threshold.',
      ],
    },
    images: [
      '/proyectos/centro-de-salud-salamanca/portada.jpg',
      '/proyectos/centro-de-salud-salamanca/01.jpg',
      '/proyectos/centro-de-salud-salamanca/02.jpg',
      '/proyectos/centro-de-salud-salamanca/03.jpg',
    ],
  },
  {
    slug: 'centro-servicios-sociales-madrid',
    title: 'Centro de Servicios Sociales Madrid',
    featured: true,
    hue: 20,
    location: { es: 'Madrid', en: 'Madrid' },
    category: { es: 'Equipamiento público', en: 'Civic building' },
    summary: {
      es: 'Un edificio público de retícula de madera que se asoma a un anfiteatro hundido: la plaza cívica como corazón del proyecto.',
      en: 'A civic building with a timber grid façade overlooking a sunken amphitheatre: the public plaza as the heart of the project.',
    },
    // TEXTO PROVISIONAL: sustituir por la memoria real del proyecto
    description: {
      es: [
        'El centro se organiza en torno a un patio-anfiteatro hundido que prolonga la actividad del edificio al aire libre y convierte el espacio público en protagonista.',
        'Una retícula de madera ordena la fachada y filtra la luz de los espacios de trabajo, mientras las cubiertas ajardinadas devuelven a la ciudad el suelo ocupado.',
      ],
      en: [
        'The centre is organised around a sunken courtyard-amphitheatre that extends the building’s activity outdoors and makes public space the protagonist.',
        'A timber grid orders the façade and filters light into the working spaces, while planted roofs give back to the city the ground the building occupies.',
      ],
    },
    images: [
      '/proyectos/centro-servicios-sociales-madrid/portada.jpg',
      '/proyectos/centro-servicios-sociales-madrid/01.jpg',
      '/proyectos/centro-servicios-sociales-madrid/02.jpg',
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
