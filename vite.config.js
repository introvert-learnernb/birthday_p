import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Adjust this base path for GitHub Pages
  build: {
    rollupOptions: {
      external: ['fsevents'], // Exclude fsevents from the build
    },
  },
});