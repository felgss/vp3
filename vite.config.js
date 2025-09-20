import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    host: true,
    allowedHosts: [
      '5173-it2mb8zz75wta4zskepe0-1fd62b23.manus.computer',
      '5174-it2mb8zz75wta4zskepe0-1fd62b23.manus.computer'
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
