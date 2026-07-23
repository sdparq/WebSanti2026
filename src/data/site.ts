// Configuración global del estudio. Edita aquí los datos de contacto,
// el texto del estudio y los enlaces. Todo es bilingüe (es / en).

export const site = {
  name: 'Santiago de Pablo',
  nameFull: 'Santiago de Pablo Arquitectura',
  shortName: 'SDP Arquitectura',
  email: 'santiagodepablo.arquitectura@gmail.com',
  phone: '',
  // Rellena con tu perfil real de LinkedIn
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
  ],
  // Sedes del estudio
  offices: [
    {
      city: { es: 'Dubái', en: 'Dubai' },
      address: { es: 'Peninsula Three, Business Bay', en: 'Peninsula Three, Business Bay' },
    },
    {
      city: { es: 'Madrid', en: 'Madrid' },
      address: { es: 'La Masó 2, oficina 10', en: 'La Masó 2, office 10' },
    },
  ],
  address: {
    es: 'Dubái · Madrid',
    en: 'Dubai · Madrid',
  },
} as const;

// Textos SEO (título y descripción de la portada en buscadores;
// no cambian el texto visible de la web)
export const seo = {
  homeTitle: {
    es: 'Estudio de arquitectura en Dubái y Madrid',
    en: 'Architecture Studio in Dubai & Madrid',
  },
  homeDescription: {
    es: 'Santiago de Pablo Arquitectura: estudio de arquitectura con sedes en Dubái (Business Bay) y Madrid. Villas, vivienda, rehabilitación e interiorismo.',
    en: 'Santiago de Pablo Arquitectura: architecture practice with offices in Dubai (Business Bay) and Madrid. Villas, housing, renovation and interior design.',
  },
} as const;

export const intro = {
  // Frase grande que aparece en la portada (manifiesto del estudio)
  hero: {
    es: 'Arquitectura que nace del lugar, la luz y la materia.',
    en: 'Architecture born from place, light and matter.',
  },
  // Párrafo de presentación en portada
  lead: {
    es: 'Estudio de arquitectura dedicado a crear espacios honestos y atemporales, donde cada proyecto dialoga con su entorno y con quienes lo habitan.',
    en: 'An architecture practice devoted to honest, timeless spaces, where every project converses with its surroundings and with the people who inhabit it.',
  },
} as const;

export const about = {
  title: { es: 'Estudio', en: 'Studio' },
  paragraphs: {
    es: [
      'Santiago de Pablo Arquitectura es un estudio que entiende la arquitectura como un oficio paciente: escuchar el lugar, comprender al cliente y dar forma a espacios que perduren.',
      'Trabajamos desde la idea hasta el último detalle constructivo, cuidando la materia, la luz natural y la relación de cada edificio con el paisaje. Creemos en una arquitectura sobria, durable y profundamente humana.',
      'Cada encargo, sea una vivienda, una rehabilitación o un espacio público, se aborda como una oportunidad para construir mejor: con sentido, con medida y con respeto por el entorno.',
    ],
    en: [
      'Santiago de Pablo Arquitectura is a studio that understands architecture as a patient craft: listening to the place, understanding the client, and shaping spaces that endure.',
      'We work from the first idea to the last construction detail, caring for materials, natural light and the relationship between each building and its landscape. We believe in sober, durable and deeply human architecture.',
      'Every commission — a home, a renovation or a public space — is approached as an opportunity to build better: with meaning, measure and respect for its context.',
    ],
  },
} as const;

// Servicios / áreas de trabajo
export const services = {
  title: { es: 'Qué hacemos', en: 'What we do' },
  items: [
    {
      title: { es: 'Vivienda', en: 'Housing' },
      text: {
        es: 'Casas y viviendas pensadas para vivir mejor, adaptadas a cada forma de habitar.',
        en: 'Homes designed for a better life, tailored to each way of living.',
      },
    },
    {
      title: { es: 'Rehabilitación', en: 'Renovation' },
      text: {
        es: 'Intervención y puesta en valor del patrimonio construido con sensibilidad contemporánea.',
        en: 'Intervening and revaluing built heritage with a contemporary sensibility.',
      },
    },
    {
      title: { es: 'Interiorismo', en: 'Interior design' },
      text: {
        es: 'Espacios interiores coherentes con la arquitectura, hasta el último detalle.',
        en: 'Interior spaces coherent with the architecture, down to the last detail.',
      },
    },
    {
      title: { es: 'Consultoría', en: 'Consultancy' },
      text: {
        es: 'Asesoramiento técnico, estudios previos y dirección de obra.',
        en: 'Technical advice, feasibility studies and site supervision.',
      },
    },
  ],
} as const;
