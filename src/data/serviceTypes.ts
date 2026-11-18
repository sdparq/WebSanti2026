// Forma común de las páginas de servicio (villas, promotoras…).
// Cada página es un fichero de datos con esta estructura; la plantilla
// es la misma: src/components/pages/VillaServicePage.astro

export type Bi = { es: string; en: string };
export type BiList = { es: string[]; en: string[] };

export interface ServiceData {
  slug: Bi;
  seoTitle: Bi;
  seoDescription: Bi;
  serviceType: Bi; // tipo de servicio para los datos estructurados
  image: string; // imagen al compartir
  eyebrow: Bi;
  title: Bi;
  lead: Bi;
  processTitle: Bi;
  process: { title: Bi; text: Bi }[];
  scopeTitle: Bi;
  scope: BiList;
  entry: { eyebrow: Bi; title: Bi; text: Bi; points: BiList };
  // Zonas donde se trabaja (opcional)
  areas?: { title: Bi; text: Bi; items: string[] };
  faqTitle: Bi;
  faq: { q: Bi; a: Bi }[];
  worksTitle: Bi;
  workSlugs: string[];
  ctaTitle: Bi;
  ctaText: Bi;
  // Enlaces a otras páginas del sitio (clave de ruta en i18n/ui.ts)
  related?: { label: Bi; route: string }[];
}
