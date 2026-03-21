import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Use the new Vite plugin here

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})