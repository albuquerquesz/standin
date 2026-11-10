import { bindings, defineConfig } from "cf/config";
export default defineConfig({ worker: { name: "standin-albq", compatibilityDate: "2026-11-09", entrypoint: "./worker.js", assets: { notFoundHandling: "single-page-application", runWorkerFirst: ["/api/*"] }, env: { ASSETS: bindings.assets() } } });
