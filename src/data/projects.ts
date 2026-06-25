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
    images: [
      '/proyectos/85-vpo-bilbao/exterior.jpg',
      '/proyectos/85-vpo-bilbao/interior.jpg',
      '/proyectos/85-vpo-bilbao/planta.jpg',
      '/proyectos/85-vpo-bilbao/esquemas.jpg',
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
    images: [
      '/proyectos/cubricion-pistas-valdelasfuentes/exterior-futbol.jpg',
      '/proyectos/cubricion-pistas-valdelasfuentes/basket.jpg',
      '/proyectos/cubricion-pistas-valdelasfuentes/futsal.jpg',
      '/proyectos/cubricion-pistas-valdelasfuentes/pasillo.jpg',
      '/proyectos/cubricion-pistas-valdelasfuentes/axonometria.jpg',
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
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
