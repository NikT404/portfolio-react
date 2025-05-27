import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Minimal configuration for Vercel deployment
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild'
  }
})
