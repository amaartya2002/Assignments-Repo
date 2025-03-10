import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Fix for some environments (e.g., WSL, Docker)
    },
    hmr: true, // Explicitly enable Hot Module Replacement
  },
})

