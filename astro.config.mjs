import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'], // Usar cadenas de texto directamente
    routing: {
      prefixDefaultLocale: false,
    },
  },
});