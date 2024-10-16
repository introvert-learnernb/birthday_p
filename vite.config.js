import { defineConfig } from 'vite';

export default defineConfig({
  base: '/birthday_p/', // Adjust this base path for GitHub Pages
  build: {
    rollupOptions: {
      external: ['fsevents'], // Exclude fsevents from the build
    },
  },
});