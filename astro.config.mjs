import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://sdparquitectura.netlify.app',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
