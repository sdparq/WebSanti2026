// ────────────────────────────────────────────────────────────────────────────
// PROYECTOS
//
// Cómo añadir/editar un proyecto:
//   1. Copia uno de los bloques de abajo y cámbialo.
//   2. `slug` es la dirección en la web (sin espacios ni acentos): /es/proyectos/<slug>
//   3. `images` son las rutas a las fotos reales. Pon las fotos en /public/proyectos/<slug>/
//      y referencia, p.ej.: ['/proyectos/casa-roble/01.jpg', '/proyectos/casa-roble/02.jpg']
//      Mientras no haya imágenes, la web genera un fondo cálido con el nombre del proyecto.
//   4. `hue` (0–360) sólo afecta al color del placeholder mientras no haya fotos.
//
// NOTA: estos proyectos son DE EJEMPLO. Sustitúyelos por los reales de
// Santiago de Pablo Arquitectura cuando me pases el material.
// ────────────────────────────────────────────────────────────────────────────

export interface Project {
  slug: string;
  title: string;
  year: string;
  featured?: boolean;
  hue: number;
  location: Bilingual;
  category: Bilingual;
  status?: Bilingual;
  area?: string;
  summary: Bilingual;
  description: { es: string[]; en: string[] };
  images: string[];
}

type Bilingual = { es: string; en: string };

export const projects: Project[] = [
  {
    slug: 'casa-entre-encinas',
    title: 'Casa entre Encinas',
    year: '2024',
    featured: true,
    hue: 28,
    location: { es: 'Ávila, España', en: 'Ávila, Spain' },
    category: { es: 'Vivienda unifamiliar', en: 'Single-family house' },
    status: { es: 'Terminado', en: 'Completed' },
    area: '240 m²',
    summary: {
      es: 'Una vivienda de piedra y madera que se posa entre encinas centenarias, abriéndose al sur y protegiéndose del norte.',
      en: 'A house of stone and timber resting among centuries-old oaks, opening to the south and sheltering from the north.',
    },
    description: {
      es: [
        'La casa se organiza en una sola planta que sigue la pendiente suave del terreno, evitando talar un solo árbol. Los muros de piedra local anclan la vivienda al lugar, mientras la madera y el vidrio matizan la relación con el exterior.',
        'El programa se divide en dos volúmenes unidos por un porche pasante: la zona de día, completamente abierta al paisaje, y la zona de noche, más recogida e íntima. La luz cambia de carácter a lo largo del día gracias a la orientación cuidadosamente estudiada.',
      ],
      en: [
        'The house unfolds on a single floor following the gentle slope of the site, without felling a single tree. Local stone walls anchor the home to its place, while timber and glass mediate the relationship with the outside.',
        'The programme splits into two volumes joined by a covered walkway: the day area, fully open to the landscape, and the night area, more sheltered and intimate. Light shifts in character throughout the day thanks to the carefully studied orientation.',
      ],
    },
    images: [],
  },
  {
    slug: 'rehabilitacion-casa-del-molino',
    title: 'Casa del Molino',
    year: '2023',
    featured: true,
    hue: 18,
    location: { es: 'Segovia, España', en: 'Segovia, Spain' },
    category: { es: 'Rehabilitación', en: 'Renovation' },
    status: { es: 'Terminado', en: 'Completed' },
    area: '180 m²',
    summary: {
      es: 'Recuperación de un antiguo molino harinero como vivienda, conservando su estructura de muros gruesos y maderas vistas.',
      en: 'The recovery of an old flour mill as a home, preserving its thick walls and exposed timber structure.',
    },
    description: {
      es: [
        'La intervención parte del respeto: se conserva todo lo que el tiempo ha hecho valioso —la piedra, las vigas, la huella del agua— y se añade lo justo para hacerlo habitable hoy.',
        'Un nuevo núcleo de servicios, ligero y reversible, organiza la planta sin tocar los muros históricos. La luz se introduce con mesura, respetando el carácter recogido del edificio original.',
      ],
      en: [
        'The intervention begins with respect: everything that time has made valuable — the stone, the beams, the trace of water — is preserved, and only what is needed to make it livable today is added.',
        'A new, light and reversible services core organises the plan without touching the historic walls. Light is introduced with restraint, honouring the sheltered character of the original building.',
      ],
    },
    images: [],
  },
  {
    slug: 'pabellon-de-la-ladera',
    title: 'Pabellón de la Ladera',
    year: '2024',
    featured: true,
    hue: 90,
    location: { es: 'Cantabria, España', en: 'Cantabria, Spain' },
    category: { es: 'Equipamiento', en: 'Public building' },
    status: { es: 'En obra', en: 'Under construction' },
    area: '420 m²',
    summary: {
      es: 'Un pabellón cultural que se entierra parcialmente en la ladera para minimizar su impacto y aprovechar la inercia térmica.',
      en: 'A cultural pavilion partly buried in the hillside to minimise its impact and harness thermal mass.',
    },
    description: {
      es: [
        'El edificio renuncia al protagonismo: se integra en la topografía y deja que el paisaje siga siendo el verdadero protagonista. La cubierta vegetal devuelve al terreno lo que el edificio ocupa.',
        'En el interior, grandes luces de hormigón y madera laminada crean un espacio diáfano y flexible, capaz de acoger usos muy distintos a lo largo del año.',
      ],
      en: [
        'The building refuses to dominate: it settles into the topography and lets the landscape remain the true protagonist. A green roof returns to the ground what the building takes.',
        'Inside, long spans of concrete and laminated timber create an open, flexible space able to host very different uses throughout the year.',
      ],
    },
    images: [],
  },
  {
    slug: 'vivienda-patio',
    title: 'Vivienda Patio',
    year: '2022',
    hue: 35,
    location: { es: 'Valladolid, España', en: 'Valladolid, Spain' },
    category: { es: 'Vivienda unifamiliar', en: 'Single-family house' },
    status: { es: 'Terminado', en: 'Completed' },
    area: '160 m²',
    summary: {
      es: 'Una casa introvertida que organiza la vida alrededor de un patio central, su corazón de luz y silencio.',
      en: 'An introverted house that organises life around a central courtyard, its heart of light and silence.',
    },
    description: {
      es: [
        'En un entorno urbano denso, la casa se vuelve hacia dentro. El patio se convierte en el origen de todo: ordena las estancias, regula la temperatura y trae el cielo al interior.',
        'Una paleta breve de materiales —mortero, madera de pino y latón— da continuidad y calidez a todos los espacios.',
      ],
      en: [
        'In a dense urban setting, the house turns inward. The courtyard becomes the origin of everything: it orders the rooms, regulates temperature and brings the sky indoors.',
        'A brief palette of materials — render, pine wood and brass — gives continuity and warmth to every space.',
      ],
    },
    images: [],
  },
  {
    slug: 'refugio-de-montana',
    title: 'Refugio de Montaña',
    year: '2021',
    hue: 200,
    location: { es: 'Pirineos, España', en: 'Pyrenees, Spain' },
    category: { es: 'Vivienda', en: 'Housing' },
    status: { es: 'Terminado', en: 'Completed' },
    area: '95 m²',
    summary: {
      es: 'Un pequeño refugio de madera que resiste la nieve y enmarca, desde cada ventana, una pieza distinta de la montaña.',
      en: 'A small timber refuge that withstands the snow and frames, from each window, a different piece of the mountain.',
    },
    description: {
      es: [
        'La compacidad es aquí una virtud: menos superficie, menos energía, más intensidad. Cada metro cuadrado trabaja, y cada ventana está colocada para capturar una vista precisa.',
        'La madera, dentro y fuera, envuelve el refugio y lo hace cálido incluso en lo más crudo del invierno.',
      ],
      en: [
        'Compactness is a virtue here: less surface, less energy, more intensity. Every square metre works, and every window is placed to capture a precise view.',
        'Timber, inside and out, wraps the refuge and keeps it warm even in the harshest winter.',
      ],
    },
    images: [],
  },
  {
    slug: 'reforma-atico-luz',
    title: 'Ático Luz',
    year: '2023',
    hue: 45,
    location: { es: 'Madrid, España', en: 'Madrid, Spain' },
    category: { es: 'Interiorismo', en: 'Interior design' },
    status: { es: 'Terminado', en: 'Completed' },
    area: '110 m²',
    summary: {
      es: 'La reforma integral de un ático para liberarlo, llenarlo de luz y conectarlo con la terraza y el cielo de la ciudad.',
      en: 'The full renovation of a penthouse to free it, fill it with light and connect it with the terrace and the city sky.',
    },
    description: {
      es: [
        'Se eliminan tabiques y se unifica el suelo para que la luz recorra el ático de fachada a fachada. La cocina se convierte en el centro social de la casa.',
        'Materiales claros y naturales amplían visualmente el espacio y dan continuidad con la terraza, ahora una estancia más.',
      ],
      en: [
        'Partitions are removed and the floor unified so that light travels from façade to façade. The kitchen becomes the social heart of the home.',
        'Light, natural materials visually expand the space and create continuity with the terrace, now another room.',
      ],
    },
    images: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
