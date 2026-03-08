import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const noCacheHeaders = {
  'Cache-Control': 'no-cache, no-store, must-revalidate',
  'Pragma': 'no-cache',
  'Expires': 'Thu, 01 Jan 1970 00:00:00 GMT',
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    headers: noCacheHeaders,
  },
  preview: {
    port: 4173,
    host: '0.0.0.0',
    allowedHosts: ['microgpt.enescang.dev'],
    headers: noCacheHeaders,
  },
})
