import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.tsx'

// When returning from a Google OAuth redirect, clear the OAuth params from the URL
// and perform a hard reload (bypassing cache) so the app starts with a clean, fresh state.
const searchParams = new URLSearchParams(window.location.search)
const hashParams = new URLSearchParams(window.location.hash.slice(1))
const hasGoogleCallback =
  searchParams.has('code') ||
  searchParams.has('access_token') ||
  hashParams.has('access_token') ||
  (searchParams.has('state') && searchParams.has('scope'))

if (hasGoogleCallback) {
  // Remove OAuth params to keep the URL clean, then force a no-cache reload.
  window.history.replaceState({}, '', window.location.pathname)
  window.location.reload()
} else {
  createRoot(document.getElementById('root')!).render(<App />)
}
