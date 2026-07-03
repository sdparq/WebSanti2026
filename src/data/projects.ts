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
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
