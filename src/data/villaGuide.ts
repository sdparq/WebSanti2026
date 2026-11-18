// Guía: cómo construir una villa en Dubái.
// Contenido informativo para quien busca en Google cómo se hace, cuánto
// tarda y cuánto cuesta. Las cifras son órdenes de magnitud de mercado:
// revísalas una vez al año y actualiza `updated`.

import type { Bi, BiList } from './serviceTypes';

interface GuideSection {
  id: string;
  title: Bi;
  body: BiList; // párrafos
  list?: BiList; // lista opcional tras los párrafos
}

export const villaGuide = {
  slug: { es: 'construir-villa-en-dubai', en: 'build-a-villa-in-dubai' },
  published: '2026-11-18',
  updated: '2026-11-18',
  image: '/proyectos/villa-dubai/portada.jpg',

  seoTitle: {
    es: 'Cómo construir una villa en Dubái: pasos, permisos y costes',
    en: 'How to Build a Villa in Dubai: Steps, Permits & Costs',
  },
  seoDescription: {
    es: 'Guía para construir una villa en Dubái: qué mirar en la parcela, quién firma el proyecto, permisos, plazos realistas y costes de construcción por pie cuadrado.',
    en: 'A guide to building a villa in Dubai: what to check on the plot, who signs the design, approvals, realistic timelines and construction cost per square foot.',
  },

  eyebrow: { es: 'Guía · Villas en Dubái', en: 'Guide · Villas in Dubai' },
  title: {
    es: 'Cómo construir una villa en Dubái',
    en: 'How to build a villa in Dubai',
  },
  lead: {
    es: 'Qué hay que mirar antes de comprar la parcela, quién hace qué, qué permisos hacen falta, cuánto se tarda y cuánto cuesta. Escrito por un arquitecto, sin letra pequeña.',
    en: 'What to check before buying the plot, who does what, which approvals you need, how long it takes and what it costs. Written by an architect, without the small print.',
  },

  tocTitle: { es: 'En esta guía', en: 'In this guide' },

  sections: [
    {
      id: 'plot',
      title: { es: '1. La parcela: antes de comprar', en: '1. The plot: before you buy' },
      body: {
        es: [
          'Un extranjero puede comprar suelo en propiedad plena (freehold) solo en las zonas designadas para ello. Fuera de esas zonas lo habitual es un arrendamiento a largo plazo, que no sirve igual para construir tu propia casa. Es lo primero que hay que confirmar.',
          'Lo segundo es el plano de afección (affection plan) o site plan de la parcela. Es el documento que dice qué se puede construir: uso permitido, número de plantas, retranqueos a cada lindero, ocupación y superficie edificable. Pídelo antes de firmar, no después.',
          'Si la parcela está dentro de una comunidad con promotor maestro, este tiene además sus propias guías de diseño: materiales, alturas, colores, cerramientos. A veces son más restrictivas que la normativa municipal.',
        ],
        en: [
          'A foreign buyer can purchase freehold land only in the areas designated for it. Outside those areas the usual option is a long lease, which is not the same thing when you want to build your own house. This is the first point to confirm.',
          'The second is the plot’s affection plan or site plan. It is the document that says what can be built: permitted use, number of floors, setbacks on each boundary, coverage and buildable area. Ask for it before you sign, not after.',
          'If the plot sits inside a master-planned community, the master developer also has its own design guidelines: materials, heights, colours, boundary walls. They are sometimes stricter than the municipal rules.',
        ],
      },
      list: {
        es: [
          'Confirma que la parcela es freehold y que puedes inscribirla a tu nombre',
          'Pide el plano de afección y las guías de diseño de la comunidad',
          'Comprueba orientación, vecinos, accesos y nivel del terreno',
          'Encarga un estudio de parcela antes de cerrar la compra si tienes dudas',
        ],
        en: [
          'Confirm the plot is freehold and can be registered in your name',
          'Ask for the affection plan and the community design guidelines',
          'Check orientation, neighbours, access and ground levels',
          'Commission a plot study before completing the purchase if in doubt',
        ],
      },
    },
    {
      id: 'team',
      title: { es: '2. El equipo: quién hace qué', en: '2. The team: who does what' },
      body: {
        es: [
          'En Dubái el permiso de obra no lo pide el propietario: lo tramita una consultora de ingeniería con licencia local, que firma los planos y responde de ellos ante la autoridad. Es una figura obligatoria.',
          'Eso no significa que el diseño tenga que hacerlo esa misma consultora. Es muy habitual separar los papeles: un arquitecto de diseño proyecta la casa y un consultor local actúa como architect of record, adapta la documentación a la normativa y la presenta. Así trabajan aquí muchos estudios internacionales.',
          'El tercer actor es el contratista, que se elige cuando el proyecto está definido, normalmente pidiendo ofertas a varios sobre los mismos planos.',
        ],
        en: [
          'In Dubai the owner does not apply for the building permit: it is filed by a locally licensed engineering consultancy, which signs the drawings and answers for them before the authority. This role is mandatory.',
          'That does not mean the same consultancy has to design the house. Splitting the roles is very common: a design architect designs the villa and a local consultant acts as architect of record, aligning the documentation with the regulations and filing it. Many international practices work here this way.',
          'The third party is the contractor, chosen once the design is defined, normally by asking several for prices on the same drawings.',
        ],
      },
    },
    {
      id: 'design',
      title: { es: '3. El diseño', en: '3. The design' },
      body: {
        es: [
          'El proyecto avanza por fases y cada una cierra decisiones. El concepto fija lo importante —dónde se coloca la casa en la parcela, cómo se entra, hacia dónde mira, dónde hay sombra— y es donde un buen diseño ahorra más dinero después.',
          'En el Golfo el clima manda. Una villa bien orientada, con patios, porches profundos y huecos protegidos del sol de poniente, es más fresca, gasta menos en climatización y se vive más meses al año en el exterior. Son decisiones de proyecto, no de instalaciones.',
          'Después vienen el desarrollo del diseño, con estructura e instalaciones coordinadas, y el proyecto de ejecución, que es el que se licita y se construye.',
        ],
        en: [
          'The design moves in stages and each one closes decisions. The concept settles what matters — where the house sits on the plot, how you arrive, what it looks at, where the shade is — and it is where good design saves the most money later.',
          'In the Gulf, climate rules. A well-oriented villa, with courtyards, deep verandas and openings protected from the western sun, is cooler, costs less to air-condition and lets you live outdoors for more months of the year. These are design decisions, not equipment.',
          'Then come design development, with structure and services coordinated, and the detailed design, which is what gets tendered and built.',
        ],
      },
    },
    {
      id: 'approvals',
      title: { es: '4. Permisos', en: '4. Approvals' },
      body: {
        es: [
          'La secuencia habitual tiene dos pasos. Primero, la conformidad del promotor maestro de la comunidad (NOC), que revisa el diseño contra sus guías. Después, el permiso de obra de la autoridad con jurisdicción sobre la zona: Dubai Municipality en la mayor parte de la ciudad, y otros organismos como Trakhees o la Dubai Development Authority en determinadas áreas.',
          'Según el proyecto pueden intervenir también Defensa Civil y las compañías de servicios. Todo ello lo tramita el consultor local a través de las plataformas en línea de cada organismo.',
          'Los plazos dependen del organismo y de lo completo que llegue el expediente. Un proyecto bien coordinado desde el principio recibe menos observaciones y avanza más rápido.',
        ],
        en: [
          'The usual sequence has two steps. First, the no-objection certificate (NOC) from the community’s master developer, who reviews the design against its guidelines. Then the building permit from the authority with jurisdiction over the area: Dubai Municipality in most of the city, and other bodies such as Trakhees or the Dubai Development Authority in certain zones.',
          'Depending on the project, Civil Defence and the utility providers may also be involved. All of this is handled by the local consultant through each authority’s online platform.',
          'Timeframes depend on the authority and on how complete the submission is. A design coordinated from the start receives fewer comments and moves faster.',
        ],
      },
    },
    {
      id: 'construction',
      title: { es: '5. La obra', en: '5. Construction' },
      body: {
        es: [
          'Con el permiso concedido se adjudica la obra. Elegir solo por precio es el error más caro: conviene comparar ofertas sobre los mismos planos y mediciones, visitar obras terminadas del contratista y dejar por escrito plazos, hitos de pago y calidades.',
          'Durante la construcción hay inspecciones de la autoridad en fases clave. Al terminar se obtiene el certificado de finalización, se conectan los suministros y el promotor maestro da su conformidad final.',
          'El seguimiento del arquitecto en esta fase sirve para una cosa concreta: que lo construido sea lo proyectado, y que los cambios que surjan se decidan con criterio y no por prisa.',
        ],
        en: [
          'With the permit granted, the contract is awarded. Choosing on price alone is the most expensive mistake: compare tenders on the same drawings and quantities, visit the contractor’s finished work and put timelines, payment milestones and specifications in writing.',
          'During construction the authority inspects at key stages. On completion you obtain the completion certificate, the utilities are connected and the master developer gives its final clearance.',
          'The architect’s follow-up at this stage has one concrete purpose: that what is built is what was designed, and that the changes that come up are decided with judgement rather than in a hurry.',
        ],
      },
    },
    {
      id: 'timeline',
      title: { es: '6. Plazos', en: '6. Timeline' },
      body: {
        es: [
          'Como orden de magnitud para una villa a medida: entre 4 y 8 meses de diseño y permisos, y entre 14 y 20 meses de obra. En total, de dos a dos años y medio desde el primer boceto hasta la entrega de llaves.',
          'Lo que más alarga un proyecto no es la obra, sino los cambios de criterio a mitad de camino. El tiempo invertido en decidir bien al principio se recupera con creces.',
        ],
        en: [
          'As an order of magnitude for a custom villa: 4 to 8 months for design and approvals, and 14 to 20 months of construction. In total, two to two and a half years from the first sketch to handover.',
          'What stretches a project most is not the building work but changes of mind halfway through. Time spent deciding well at the start is repaid many times over.',
        ],
      },
    },
    {
      id: 'cost',
      title: { es: '7. Cuánto cuesta', en: '7. What it costs' },
      body: {
        es: [
          'El coste de construcción depende sobre todo del nivel de acabados y de la complejidad de la casa. Las referencias de mercado de 2025-2026 se mueven en estas horquillas, por pie cuadrado construido y sin contar el suelo:',
        ],
        en: [
          'Construction cost depends mostly on the level of finish and on how complex the house is. Market benchmarks for 2025–2026 fall within these ranges, per built square foot and excluding land:',
        ],
      },
    },
    {
      id: 'mistakes',
      title: { es: '8. Errores frecuentes', en: '8. Common mistakes' },
      body: { es: [], en: [] },
      list: {
        es: [
          'Comprar la parcela sin haber leído el plano de afección ni las guías de la comunidad',
          'Empezar a diseñar sin un presupuesto objetivo claro',
          'Elegir contratista solo por el precio más bajo',
          'No reservar partida para urbanización exterior, piscina y jardín',
          'Cambiar el diseño después de obtener el permiso',
          'Orientar la casa hacia la vista sin protegerla del sol',
        ],
        en: [
          'Buying the plot without reading the affection plan or the community guidelines',
          'Starting to design without a clear target budget',
          'Choosing the contractor on the lowest price alone',
          'Leaving no allowance for external works, pool and garden',
          'Changing the design after the permit has been granted',
          'Turning the house towards the view without protecting it from the sun',
        ],
      },
    },
  ] as GuideSection[],

  // Tabla de costes (se muestra dentro de la sección `cost`)
  costs: {
    head: {
      es: ['Nivel', 'AED por pie cuadrado', 'Qué incluye'],
      en: ['Level', 'AED per sq ft', 'What it means'],
    },
    rows: [
      {
        level: { es: 'Estándar', en: 'Standard' },
        range: '390 – 500',
        note: {
          es: 'Acabados correctos, soluciones constructivas convencionales',
          en: 'Sound finishes, conventional construction',
        },
      },
      {
        level: { es: 'A medida, gama media', en: 'Custom, mid-range' },
        range: '600 – 850',
        note: {
          es: 'Diseño a medida, carpinterías y materiales de mayor calidad',
          en: 'Bespoke design, better glazing and materials',
        },
      },
      {
        level: { es: 'Gama alta', en: 'High end' },
        range: '900 – 1,400+',
        note: {
          es: 'Grandes luces, piedra natural, domótica, detalle a medida',
          en: 'Long spans, natural stone, automation, custom detailing',
        },
      },
    ],
    notes: {
      es: [
        'Son órdenes de magnitud tomados de guías de mercado publicadas; la única cifra fiable es la oferta de un contratista sobre un proyecto definido.',
        'No incluyen el suelo, los honorarios técnicos, las tasas, el mobiliario ni, por lo general, el jardín y la piscina.',
      ],
      en: [
        'These are orders of magnitude taken from published market guides; the only reliable figure is a contractor’s tender on a defined design.',
        'They exclude land, professional fees, authority fees, furniture and, as a rule, garden and pool.',
      ],
    },
  },

  faqTitle: { es: 'Preguntas frecuentes', en: 'Frequently asked questions' },
  faq: [
    {
      q: {
        es: '¿Puede un extranjero construir una villa en Dubái?',
        en: 'Can a foreigner build a villa in Dubai?',
      },
      a: {
        es: 'Sí, sobre una parcela en propiedad plena dentro de las zonas freehold designadas. El permiso de obra lo tramita una consultora con licencia local.',
        en: 'Yes, on a freehold plot within the designated freehold areas. The building permit is filed by a locally licensed consultancy.',
      },
    },
    {
      q: {
        es: '¿Cuánto se tarda en construir una villa en Dubái?',
        en: 'How long does it take to build a villa in Dubai?',
      },
      a: {
        es: 'Como referencia, de 4 a 8 meses de diseño y permisos y de 14 a 20 meses de obra: entre dos y dos años y medio en total.',
        en: 'As a guide, 4 to 8 months of design and approvals and 14 to 20 months of construction: two to two and a half years in total.',
      },
    },
    {
      q: {
        es: '¿Cuánto cuesta construir una villa en Dubái por pie cuadrado?',
        en: 'How much does it cost to build a villa in Dubai per square foot?',
      },
      a: {
        es: 'Las referencias de mercado de 2025-2026 van de unos 390-500 AED por pie cuadrado para una villa estándar a 900-1.400 o más en gama alta, sin contar el suelo.',
        en: 'Market benchmarks for 2025–2026 run from about AED 390–500 per square foot for a standard villa to AED 900–1,400 or more at the high end, excluding land.',
      },
    },
    {
      q: {
        es: '¿Puedo trabajar con un arquitecto extranjero en Dubái?',
        en: 'Can I work with a foreign architect in Dubai?',
      },
      a: {
        es: 'Sí. El arquitecto de diseño proyecta la villa y un consultor con licencia local actúa como architect of record y presenta la documentación. Es una fórmula habitual.',
        en: 'Yes. The design architect designs the villa and a locally licensed consultant acts as architect of record and files the documentation. It is a common arrangement.',
      },
    },
    {
      q: {
        es: '¿Qué es el plano de afección (affection plan)?',
        en: 'What is an affection plan?',
      },
      a: {
        es: 'Es el plano oficial de la parcela. Indica sus límites, el uso permitido, las plantas, los retranqueos y la superficie que se puede construir. Es el punto de partida de cualquier proyecto.',
        en: 'It is the official plan of the plot. It shows its boundaries, permitted use, number of floors, setbacks and how much can be built. It is the starting point of any design.',
      },
    },
  ],

  ctaTitle: {
    es: '¿Tienes una parcela, o estás a punto de comprarla?',
    en: 'Do you have a plot, or are you about to buy one?',
  },
  ctaText: {
    es: 'Cuéntanos dónde está. Con un estudio de parcela sabrás qué se puede construir, en cuánto tiempo y con qué presupuesto aproximado, antes de comprometerte.',
    en: 'Tell us where it is. A plot study tells you what can be built, how long it will take and at roughly what budget, before you commit.',
  },
  ctaService: { es: 'Diseño de villas en Dubái', en: 'Villa design in Dubai' },
};
