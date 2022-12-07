import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      formats: ['en']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})
