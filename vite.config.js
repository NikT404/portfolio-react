import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Absolute minimal configuration
export default defineConfig({
  plugins: [react()],
  build: {
    // Disable source maps in production
    sourcemap: false,
    // Use a simpler chunking strategy
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
