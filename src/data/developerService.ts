// Página de servicio para promotoras: arquitecto de diseño en Dubái.
// Pensada para quien busca "design architect Dubai developers" y para
// enviar a promotoras. Misma plantilla que la página de villas.

import type { ServiceData } from './serviceTypes';

export const developerService: ServiceData = {
  slug: { es: 'arquitecto-promotoras-dubai', en: 'architect-for-developers-dubai' },
  serviceType: { es: 'Arquitectura para promotoras', en: 'Architecture for developers' },
  image: '/proyectos/torre-observatorio-zagreb/exterior-amanecer.jpg',

  seoTitle: {
    es: 'Arquitecto para promotoras en Dubái · Diseño residencial',
    en: 'Architect for Developers in Dubai · Residential Design',
  },
  seoDescription: {
    es: 'Arquitecto de diseño para promotoras en Dubái y Emiratos: villas, townhouses y residencial boutique. Concepto, imagen y desarrollo de diseño junto a su consultor local.',
    en: 'Design architect for property developers in Dubai and the UAE: villas, townhouses and boutique residential. Concept, identity and design development alongside your local consultant.',
  },

  eyebrow: { es: 'Promotoras · Dubái y Emiratos', en: 'Developers · Dubai & the UAE' },
  title: {
    es: 'Arquitecto de diseño para promotoras',
    en: 'Design architect for developers',
  },
  lead: {
    es: 'Trabajamos con promotoras como arquitecto de diseño: damos al proyecto una idea clara, una imagen que lo distingue en el mercado y unas plantas que aprovechan cada metro. Su consultor local firma y tramita; nosotros cuidamos el diseño hasta la entrega.',
    en: 'We work with developers as design architect: we give the project a clear idea, an image that sets it apart in the market and plans that make every square foot count. Your local consultant signs and submits; we look after the design through to handover.',
  },

  processTitle: { es: 'Cómo trabajamos con una promotora', en: 'How we work with a developer' },
  process: [
    {
      title: { es: 'Parcela y aprovechamiento', en: 'Site & yield' },
      text: {
        es: 'Estudiamos la parcela, su normativa y varias opciones de implantación: número de unidades, superficie vendible y orientación. Sabrá qué da de sí el suelo antes de comprometer el diseño.',
        en: 'We study the plot, its regulations and several massing options: unit count, sellable area and orientation. You know what the land can yield before committing to a design.',
      },
    },
    {
      title: { es: 'Concepto e identidad', en: 'Concept & identity' },
      text: {
        es: 'Definimos la idea del proyecto, las tipologías y la fachada. Entregamos plantas, alzados e imágenes realistas listas para presentar a inversores y para el lanzamiento comercial.',
        en: 'We define the idea of the project, the unit types and the facade. We deliver plans, elevations and realistic visuals ready for investors and for the sales launch.',
      },
    },
    {
      title: { es: 'Desarrollo con su consultor', en: 'Development with your consultant' },
      text: {
        es: 'Desarrollamos el diseño y lo coordinamos con su consultor local con licencia (architect of record), que firma la documentación y la tramita ante el organismo competente.',
        en: 'We develop the design and coordinate it with your locally licensed consultant (architect of record), who signs the documentation and files it with the relevant authority.',
      },
    },
    {
      title: { es: 'Fidelidad en obra', en: 'Design guardianship' },
      text: {
        es: 'Revisamos detalles, muestras y cambios durante la construcción para que lo que se entrega al comprador sea lo que se le enseñó en las imágenes.',
        en: 'We review details, samples and changes during construction so that what is handed over to the buyer is what the visuals promised.',
      },
    },
  ],

  scopeTitle: { es: 'Qué aportamos', en: 'What we bring' },
  scope: {
    es: [
      'Estudios de viabilidad y opciones de implantación',
      'Tipologías y plantas eficientes: más superficie útil por metro construido',
      'Concepto de fachada, materiales e identidad del proyecto',
      'Imágenes realistas para inversores y lanzamiento comercial',
      'Desarrollo de diseño coordinado con el consultor local',
      'Revisión de diseño durante la obra',
    ],
    en: [
      'Feasibility studies and massing options',
      'Unit types and efficient plans: more usable area per built square foot',
      'Facade concept, materials and project identity',
      'Realistic visuals for investors and the sales launch',
      'Design development coordinated with the local consultant',
      'Design review during construction',
    ],
  },

  entry: {
    eyebrow: { es: 'Para empezar', en: 'To get started' },
    title: { es: 'Estudio de concepto', en: 'Concept study' },
    text: {
      es: 'La forma más sencilla de saber si encajamos es probarlo sobre un caso real. Tomamos una parcela o una tipología de su próximo proyecto y desarrollamos un concepto breve: implantación, planta tipo, fachada y una imagen.',
      en: 'The simplest way to find out whether we fit is to test it on a real case. We take one plot or one unit type from your next project and develop a short concept: massing, typical plan, facade and one visual.',
    },
    points: {
      es: [
        'Alcance cerrado, plazo corto y precio fijo acordado de antemano',
        'El resultado es suyo y puede usarlo, sigamos o no',
        'Si el proyecto continúa, su importe se descuenta de los honorarios',
      ],
      en: [
        'Fixed scope, short timeframe and a fee agreed up front',
        'The result is yours to use, whether or not we continue',
        'If the project goes ahead, its fee is deducted from our charges',
      ],
    },
  },

  faqTitle: { es: 'Preguntas frecuentes', en: 'Frequently asked questions' },
  faq: [
    {
      q: {
        es: '¿Actuáis como architect of record?',
        en: 'Do you act as architect of record?',
      },
      a: {
        es: 'No. Trabajamos como arquitecto de diseño. La firma de la documentación y su tramitación corresponden a un consultor con licencia local, que puede ser el suyo habitual. Es el mismo reparto con el que trabajan en Dubái los estudios internacionales.',
        en: 'No. We work as design architect. Signing the documentation and filing it is the role of a locally licensed consultant, which can be the one you already work with. It is the same split international practices use in Dubai.',
      },
    },
    {
      q: {
        es: '¿Con qué tipo de proyectos trabajáis?',
        en: 'What kind of projects do you take on?',
      },
      a: {
        es: 'Villas, agrupaciones de townhouses y residencial boutique, además de usos mixtos de escala media. El estudio viene de la vivienda colectiva, el equipamiento y el concurso público en España, así que estamos acostumbrados a programas complejos y a plazos cortos.',
        en: 'Villas, townhouse clusters and boutique residential, as well as mid-scale mixed use. The practice comes from collective housing, public buildings and open competitions in Spain, so we are used to complex briefs and short deadlines.',
      },
    },
    {
      q: {
        es: '¿Cuánto se tarda en tener un primer concepto?',
        en: 'How long does a first concept take?',
      },
      a: {
        es: 'Un primer concepto con implantación, plantas e imágenes suele llevar entre dos y cuatro semanas, según la escala del proyecto.',
        en: 'A first concept with massing, plans and visuals usually takes two to four weeks, depending on the scale of the project.',
      },
    },
    {
      q: {
        es: '¿Hacéis las imágenes para la venta sobre plano?',
        en: 'Do you produce the visuals for off-plan sales?',
      },
      a: {
        es: 'Sí. Las imágenes forman parte del concepto: se hacen a partir del diseño real, de modo que lo que se vende es lo que después se construye.',
        en: 'Yes. Visuals are part of the concept: they are produced from the actual design, so what is sold is what later gets built.',
      },
    },
    {
      q: {
        es: '¿Dónde tenéis el estudio?',
        en: 'Where are you based?',
      },
      a: {
        es: 'En Business Bay (Dubái) y en Madrid. Trabajamos en inglés y en español.',
        en: 'In Business Bay (Dubai) and in Madrid. We work in English and Spanish.',
      },
    },
  ],

  worksTitle: { es: 'Proyectos del estudio', en: 'Work by the studio' },
  workSlugs: ['villa-abu-dabi', 'villa-dubai', '85-vpo-bilbao', 'torre-observatorio-zagreb'],

  related: [
    {
      label: { es: 'Diseño de villas en Dubái', en: 'Villa design in Dubai' },
      route: 'villas',
    },
    {
      label: {
        es: 'Guía: cómo construir una villa en Dubái',
        en: 'Guide: how to build a villa in Dubai',
      },
      route: 'guide',
    },
  ],

  ctaTitle: {
    es: '¿Está preparando su próximo proyecto?',
    en: 'Planning your next release?',
  },
  ctaText: {
    es: 'Cuéntenos la parcela y el producto que tiene en mente. Le enseñamos trabajo y vemos si tiene sentido un estudio de concepto.',
    en: 'Tell us about the plot and the product you have in mind. We will show you the work and see whether a concept study makes sense.',
  },
};
