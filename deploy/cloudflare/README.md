# Cloudflare frontend

Build the frontend from the repository root with `VITE_BASE_API_URL=/api pnpm --filter web... build`. Then run `npm ci` and `npx cf deploy` in this directory. The Worker forwards `/api/*`, including WebSocket upgrades, to the Guara API. Update the origin in `worker.js` if the API address changes.
