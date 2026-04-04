import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://about.johnsonlee.io',
  integrations: [tailwind()],
  output: 'static',
});
