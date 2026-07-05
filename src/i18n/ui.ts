// Textos de la interfaz (menús, botones, etiquetas). Bilingüe.

export const languages = ['es', 'en'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'es';

// Segmentos de URL por idioma (para que /en use rutas en inglés)
export const routes: Record<Lang, Record<string, string>> = {
  es: {
    projects: 'proyectos',
    studio: 'estudio',
    contact: 'contacto',
  },
  en: {
    projects: 'projects',
    studio: 'studio',
    contact: 'contact',
  },
};

export const ui = {
  es: {
    'nav.projects': 'Proyectos',
    'nav.studio': 'Estudio',
    'nav.contact': 'Contacto',
    'nav.menu': 'Menú',
    'nav.close': 'Cerrar',
    'home.featured': 'Proyectos seleccionados',
    'home.allProjects': 'Ver todos los proyectos',
    'home.viewProject': 'Ver proyecto',
    'projects.title': 'Proyectos',
    'projects.intro': 'Una selección de obras y proyectos del estudio.',
    'project.back': 'Volver a proyectos',
    'project.next': 'Siguiente proyecto',
    'project.info': 'Ficha',
    'project.location': 'Localización',
    'project.year': 'Año',
    'project.category': 'Tipología',
    'project.status': 'Estado',
    'project.award': 'Premio',
    'project.collaborators': 'Colaboradores',
    'project.area': 'Superficie',
    'studio.title': 'Estudio',
    'contact.title': 'Contacto',
    'contact.lead': '¿Tienes un proyecto en mente? Cuéntanoslo.',
    'contact.email': 'Correo',
    'contact.follow': 'Síguenos',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.madeWith': 'Estudio de arquitectura',
    'lang.switch': 'EN',
    'cta.contact': 'Hablemos',
  },
  en: {
    'nav.projects': 'Projects',
    'nav.studio': 'Studio',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'home.featured': 'Selected projects',
    'home.allProjects': 'View all projects',
    'home.viewProject': 'View project',
    'projects.title': 'Projects',
    'projects.intro': 'A selection of the studio’s works and projects.',
    'project.back': 'Back to projects',
    'project.next': 'Next project',
    'project.info': 'Details',
    'project.location': 'Location',
    'project.year': 'Year',
    'project.category': 'Type',
    'project.status': 'Status',
    'project.award': 'Award',
    'project.collaborators': 'Collaborators',
    'project.area': 'Area',
    'studio.title': 'Studio',
    'contact.title': 'Contact',
    'contact.lead': 'Have a project in mind? Tell us about it.',
    'contact.email': 'Email',
    'contact.follow': 'Follow us',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Architecture studio',
    'lang.switch': 'ES',
    'cta.contact': "Let's talk",
  },
} as const;

export function t(lang: Lang, key: keyof (typeof ui)['es']): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

// Construye una URL localizada: url('es', 'projects') -> /es/proyectos
export function url(lang: Lang, segment?: string, slug?: string): string {
  let path = `/${lang}`;
  if (segment) {
    const seg = routes[lang][segment] ?? segment;
    path += `/${seg}`;
  }
  if (slug) path += `/${slug}`;
  return path;
}

// Dado un idioma, devuelve el otro
export function otherLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}
