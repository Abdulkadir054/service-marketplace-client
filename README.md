# Service Marketplace - Client (React + Vite + Tailwind)

Minimal React front-end for the services marketplace demo.

## Scripts
- `npm run dev` → local dev server (Vite)
- `npm run build` → build to `dist/`
- `npm run preview` → preview build locally

## Environment
- `VITE_API_BASE_URL` must point to your API (e.g., `http://localhost:5000` locally, or your Render Web Service URL in production).

## Deploy on Render (Static Site)
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
- Environment Variables: add `VITE_API_BASE_URL` pointing to your API URL.
