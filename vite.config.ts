import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No-cache headers applied to every response so the browser always fetches
// the latest version of the page and never serves a stale cached copy.
const noCacheHeaders = {
  'Cache-Control': 'no-cache, no-store, must-revalidate',
  Pragma: 'no-cache',
  Expires: '0',
};

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
