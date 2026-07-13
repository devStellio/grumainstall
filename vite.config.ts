import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages sirve el sitio en /grumainstall/; Azure Static Web Apps lo sirve en la raíz
  base: process.env.DEPLOY_TARGET === 'gh-pages' ? '/grumainstall/' : '/',
});
