// Formulario de contacto. Las respuestas llegan a Netlify (pestaña Forms)
// y, si lo configuras allí, también por correo.
// Los campos están pensados para cualificar el encargo: dónde está la
// parcela, qué tipo de proyecto y con qué plazos.

export const contactForm = {
  // Nombre interno del formulario en Netlify. No cambiar: es la clave
  // con la que Netlify agrupa las respuestas recibidas.
  name: 'project-enquiry',

  title: {
    es: 'Cuéntanos tu proyecto',
    en: 'Tell us about your project',
  },
  intro: {
    es: 'Respondemos en menos de 48 horas. Si prefieres, escríbenos directamente por correo.',
    en: 'We reply within 48 hours. If you prefer, write to us directly by email.',
  },

  fields: {
    name: { es: 'Nombre', en: 'Name' },
    email: { es: 'Correo electrónico', en: 'Email' },
    phone: { es: 'Teléfono o WhatsApp', en: 'Phone or WhatsApp' },
    location: { es: '¿Dónde está el proyecto?', en: 'Where is the project?' },
    locationHint: {
      es: 'Por ejemplo: Dubai Hills, parcela comprada',
      en: 'For example: Dubai Hills, plot already purchased',
    },
    type: { es: 'Tipo de proyecto', en: 'Project type' },
    timing: { es: '¿Cuándo quieres empezar?', en: 'When would you like to start?' },
    message: { es: 'Cuéntanos más', en: 'Tell us more' },
    messageHint: {
      es: 'Programa, superficie aproximada, referencias que te gusten…',
      en: 'Brief, approximate area, references you like…',
    },
    optional: { es: 'opcional', en: 'optional' },
  },

  types: [
    { value: 'villa-new', es: 'Villa de obra nueva', en: 'New-build villa' },
    { value: 'villa-reform', es: 'Reforma o ampliación de villa', en: 'Villa renovation or extension' },
    { value: 'interior', es: 'Interiorismo', en: 'Interior design' },
    { value: 'development', es: 'Promoción residencial', en: 'Residential development' },
    { value: 'other', es: 'Otro', en: 'Other' },
  ],

  timings: [
    { value: 'asap', es: 'Lo antes posible', en: 'As soon as possible' },
    { value: '3-6', es: 'En 3–6 meses', en: 'In 3–6 months' },
    { value: '6-12', es: 'En 6–12 meses', en: 'In 6–12 months' },
    { value: 'exploring', es: 'Aún lo estoy estudiando', en: 'Still exploring' },
  ],

  submit: { es: 'Enviar', en: 'Send' },
  select: { es: 'Selecciona una opción', en: 'Select an option' },

  // Texto con el que se abre WhatsApp: al cliente solo le queda enviar
  waMessage: {
    es: 'Hola Santiago, he visto vuestra web y me gustaría hablar de un proyecto.',
    en: 'Hello Santiago, I saw your website and would like to talk about a project.',
  },
  waLabel: { es: 'Escríbenos por WhatsApp', en: 'Message us on WhatsApp' },

  // Página de agradecimiento
  thanks: {
    title: { es: 'Mensaje recibido', en: 'Message received' },
    lead: {
      es: 'Gracias por escribirnos. Te responderemos en menos de 48 horas.',
      en: 'Thank you for getting in touch. We will reply within 48 hours.',
    },
    back: { es: 'Volver a la portada', en: 'Back to the home page' },
  },
} as const;
