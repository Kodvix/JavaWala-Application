import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/", // Ensures correct path for deployment
  server: {
    host: true, // Or '0.0.0.0' for network access
    port: 5173
  },
  plugins: [react()],
})
