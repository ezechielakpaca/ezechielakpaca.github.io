// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Adresse publique du site. Avec un dépôt GitHub nommé
// « ezechielakpaca.github.io », le site est servi à la racine.
export default defineConfig({
  site: 'https://ezechielakpaca.github.io',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR' } },
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
  ],
});
