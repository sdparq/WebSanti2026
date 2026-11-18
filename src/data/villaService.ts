// Página de servicio: diseño de villas en Dubái.
// Pensada para quien busca "villa architect Dubai" y para enviar a
// clientes potenciales. Bilingüe (es / en).

import type { ServiceData } from './serviceTypes';

export const villaService: ServiceData = {
  slug: { es: 'villas-dubai', en: 'villa-design-dubai' },
  serviceType: { es: 'Diseño de villas', en: 'Villa design' },
  image: '/proyectos/villa-abu-dabi/portada.jpg',

  seoTitle: {
    es: 'Diseño de villas en Dubái · Arquitecto de villas a medida',
    en: 'Villa Design in Dubai · Custom Villa Architect',
  },
  seoDescription: {
    es: 'Arquitecto de villas en Dubái: diseño de villas a medida en Dubái y Emiratos, del estudio de parcela y el concepto al seguimiento de obra. Estudio en Business Bay.',
    en: 'Villa architect in Dubai: custom villa design across Dubai and the UAE, from plot study and concept to construction follow-up. Studio based in Business Bay.',
  },

  eyebrow: { es: 'Villas · Dubái y Emiratos', en: 'Villas · Dubai & the UAE' },
  title: {
    es: 'Diseño de villas en Dubái',
    en: 'Villa design in Dubai',
  },
  lead: {
    es: 'Diseñamos villas privadas en Dubái y los Emiratos: casas pensadas para el clima del Golfo, con patios en sombra, luz tamizada y materiales que envejecen bien. Del primer boceto a la entrega de llaves.',
    en: 'We design private villas in Dubai and across the Emirates: houses shaped for the Gulf climate, with shaded courtyards, filtered light and materials that age well. From the first sketch to handover.',
  },

  // Cómo trabajamos: proceso claro, la duda nº1 de un cliente en Dubái
  processTitle: { es: 'Cómo trabajamos', en: 'How we work' },
  process: [
    {
      title: { es: 'Parcela y viabilidad', en: 'Plot & feasibility' },
      text: {
        es: 'Estudiamos la parcela, la normativa aplicable y la edificabilidad real antes de dibujar nada. Sabrás qué puedes construir y con qué coste aproximado.',
        en: 'We study the plot, the applicable regulations and the real buildable area before drawing anything. You will know what can be built and at roughly what cost.',
      },
    },
    {
      title: { es: 'Concepto y diseño', en: 'Concept & design' },
      text: {
        es: 'Definimos la casa: orientación, patios, sombra y recorrido. Trabajamos con maquetas y vistas realistas para que veas la villa antes de construirla.',
        en: 'We define the house: orientation, courtyards, shade and circulation. We work with models and realistic views so you see the villa before it is built.',
      },
    },
    {
      title: { es: 'Permisos y licencias', en: 'Authority approvals' },
      text: {
        es: 'Preparamos la documentación de proyecto y coordinamos su tramitación con un consultor local con licencia, que la presenta ante el organismo competente —Dubai Municipality, DDA, Trakhees o la comunidad correspondiente— hasta obtener el permiso de obra.',
        en: 'We prepare the design documentation and coordinate its submission with a locally licensed consultant, who files it with the relevant authority — Dubai Municipality, DDA, Trakhees or the community developer — through to building permit.',
      },
    },
    {
      title: { es: 'Obra y entrega', en: 'Construction & handover' },
      text: {
        es: 'Proyecto de ejecución, apoyo en la licitación con contratistas y seguimiento de la obra hasta la entrega, cuidando que lo construido sea lo proyectado.',
        en: 'Detailed design, support during contractor tendering and design follow-up on site through to handover, making sure what is built is what was designed.',
      },
    },
  ],

  // Qué incluye el encargo
  scopeTitle: { es: 'Qué incluye el encargo', en: 'What the commission includes' },
  scope: {
    es: [
      'Estudio previo de la parcela y de la normativa aplicable',
      'Anteproyecto: plantas, alzados, secciones y vistas realistas',
      'Proyecto básico y de ejecución completo',
      'Coordinación del permiso de obra con el consultor local con licencia',
      'Diseño de interiores y selección de materiales y acabados',
      'Seguimiento de obra y control de calidad del diseño hasta la entrega',
    ],
    en: [
      'Plot survey and review of the applicable regulations',
      'Concept design: plans, elevations, sections and realistic views',
      'Full schematic and detailed design packages',
      'Building-permit coordination with the locally licensed consultant',
      'Interior design and selection of materials and finishes',
      'Site follow-up and design quality control through to handover',
    ],
  },

  // Encargo de entrada: pequeño, cerrado y de bajo riesgo para el
  // cliente. Es la vía natural para una primera colaboración.
  entry: {
    eyebrow: { es: 'Para empezar', en: 'To get started' },
    title: { es: 'Estudio de parcela', en: 'Plot study' },
    text: {
      es: 'Si todavía no sabes qué se puede construir en tu parcela, no hace falta encargar el proyecto entero para averiguarlo. Empezamos por un estudio breve y cerrado: edificabilidad real, normativa que te afecta, retranqueos y alturas, y un primer esquema de implantación con orientación y sombras.',
      en: 'If you do not yet know what can be built on your plot, you do not need to commission the whole project to find out. We start with a short, fixed-scope study: real buildable area, the regulations that apply, setbacks and heights, and a first layout showing orientation and shade.',
    },
    points: {
      es: [
        'Plazo corto y precio cerrado desde el principio',
        'Te queda un documento útil, sigas o no con nosotros',
        'Si continúas con el proyecto, su importe se descuenta de los honorarios',
      ],
      en: [
        'Short timeframe and a fixed fee agreed up front',
        'You keep a useful document, whether or not you continue with us',
        'If you go ahead with the project, its fee is deducted from our charges',
      ],
    },
  },

  // Zonas: dónde diseñamos villas (lo que la gente escribe en el buscador)
  areas: {
    title: { es: 'Dónde trabajamos', en: 'Where we work' },
    text: {
      es: 'Aceptamos encargos de villas en las principales comunidades de Dubái y en el resto de los Emiratos. Cada comunidad tiene sus propias guías de diseño: las estudiamos antes de dibujar.',
      en: 'We take on villa commissions across Dubai’s main villa communities and the rest of the Emirates. Each community has its own design guidelines: we study them before drawing.',
    },
    items: [
      'Al Barari',
      'Dubai Hills Estate',
      'Emirates Hills',
      'Jumeirah Golf Estates',
      'Palm Jumeirah',
      'Jumeirah Bay Island',
      'Mohammed Bin Rashid City · District One',
      'Nad Al Sheba',
      'Tilal Al Ghaf',
      'Al Furjan · Jumeirah Park',
      'Abu Dhabi · Saadiyat Island',
      'Ras Al Khaimah · Sharjah',
    ],
  },

  related: [
    {
      label: {
        es: 'Guía: cómo construir una villa en Dubái, paso a paso',
        en: 'Guide: how to build a villa in Dubai, step by step',
      },
      route: 'guide',
    },
    {
      label: {
        es: 'Para promotoras: arquitecto de diseño en Dubái',
        en: 'For developers: design architect in Dubai',
      },
      route: 'developers',
    },
  ],

  // Preguntas frecuentes: responden a lo que la gente busca en Google
  faqTitle: { es: 'Preguntas frecuentes', en: 'Frequently asked questions' },
  faq: [
    {
      q: {
        es: '¿Cuánto se tarda en diseñar y construir una villa en Dubái?',
        en: 'How long does it take to design and build a villa in Dubai?',
      },
      a: {
        es: 'El diseño y la obtención del permiso suelen llevar entre 4 y 8 meses según la parcela y el organismo competente. La construcción de una villa se mueve habitualmente entre 14 y 20 meses. Damos un calendario realista tras estudiar tu parcela.',
        en: 'Design and permit approval usually take between 4 and 8 months depending on the plot and the authority involved. Construction of a villa typically runs between 14 and 20 months. We give you a realistic schedule once we have studied your plot.',
      },
    },
    {
      q: {
        es: '¿Cuánto cuesta construir una villa en Dubái?',
        en: 'How much does it cost to build a villa in Dubai?',
      },
      a: {
        es: 'Depende sobre todo del nivel de acabados. Como orden de magnitud, las referencias de mercado de 2025-2026 sitúan una villa estándar en torno a 390-500 AED por pie cuadrado construido, una villa a medida de gama media entre 600 y 850, y la gama alta de 900 a 1.400 o más, sin contar el suelo. La única cifra fiable es la oferta de un contratista sobre un proyecto definido; en el estudio de parcela damos una primera horquilla.',
        en: 'It depends mostly on the level of finish. As an order of magnitude, 2025–2026 market benchmarks put a standard villa at around AED 390–500 per built square foot, a custom mid-range villa at AED 600–850, and the high end at AED 900–1,400 or more, excluding land. The only reliable figure is a contractor’s tender on a defined design; our plot study gives you a first range.',
      },
    },
    {
      q: {
        es: '¿Trabajáis con parcelas en zonas freehold?',
        en: 'Do you work on freehold plots?',
      },
      a: {
        es: 'Sí. Trabajamos tanto en parcelas freehold como en comunidades con normativa propia, adaptando el diseño a las guías de cada promotor y del organismo competente.',
        en: 'Yes. We work on freehold plots and in communities with their own design guidelines, adapting the design to each developer’s rules and to the relevant authority.',
      },
    },
    {
      q: {
        es: '¿Os encargáis también de los permisos?',
        en: 'Do you handle the approvals as well?',
      },
      a: {
        es: 'Sí, a través de un consultor local. En Dubái el permiso de obra lo presenta una consultora de ingeniería con licencia local. Nosotros preparamos el proyecto, trabajamos con ese consultor y hacemos el seguimiento ante Dubai Municipality, DDA, Trakhees o la comunidad que corresponda hasta obtener el permiso. Tú tienes un único interlocutor.',
        en: 'Yes, through a local consultant. In Dubai the building permit is filed by a locally licensed engineering consultancy. We prepare the design, work with that consultant and follow the submission with Dubai Municipality, DDA, Trakhees or the relevant community until the permit is granted. You deal with a single point of contact.',
      },
    },
    {
      q: {
        es: '¿Podéis seguir la obra si vivo fuera de los Emiratos?',
        en: 'Can you follow construction if I live outside the UAE?',
      },
      a: {
        es: 'Sí, es habitual. Damos parte del avance con visitas periódicas, informes con fotografías y reuniones en línea, en español o en inglés.',
        en: 'Yes, this is common. We report progress through regular site visits, photographic reports and online meetings, in English or Spanish.',
      },
    },
    {
      q: {
        es: '¿En qué idiomas trabajáis?',
        en: 'What languages do you work in?',
      },
      a: {
        es: 'Trabajamos en español e inglés, con estudio en Business Bay (Dubái) y en Madrid.',
        en: 'We work in English and Spanish, with offices in Business Bay (Dubai) and Madrid.',
      },
    },
  ],

  // Proyectos que se muestran como ejemplo
  worksTitle: { es: 'Villas del estudio', en: 'Villas by the studio' },
  workSlugs: ['villa-abu-dabi', 'villa-dubai'],

  ctaTitle: {
    es: '¿Tienes una parcela en Dubái?',
    en: 'Do you have a plot in Dubai?',
  },
  ctaText: {
    es: 'Cuéntanos dónde está y qué tienes en mente. Te diremos qué se puede construir y cómo abordarlo.',
    en: 'Tell us where it is and what you have in mind. We will tell you what can be built and how to approach it.',
  },
};
