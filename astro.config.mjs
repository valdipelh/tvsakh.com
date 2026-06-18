// @ts-check
import { defineConfig } from 'astro/config';

// tvsakh.com — кинематографичный стриминговый лендинг.
// Статический вывод для максимального быстродействия.
export default defineConfig({
  site: 'https://tvsakh.com',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  image: {
    responsiveStyles: true,
  },
});
