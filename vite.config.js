import { fileURLToPath, URL } from 'node:url'
import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


export default defineConfig({
  base: '/Portfolio_V2/', // GitHub Pages base path
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
