import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://sdparquitectura.com',
  // Las páginas de agradecimiento quedan fuera del sitemap: son de paso
  integrations: [
    sitemap({
      filter: (page) => !/\/(thank-you|gracias)\/?$/.test(page),
    }),
  ],
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
