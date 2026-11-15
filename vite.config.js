import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// O "base" precisa ser o nome exato do repositório no GitHub
// para que os assets carreguem corretamente no GitHub Pages.
// Repositório: https://github.com/dnb-code-44/studio-camile-simas
export default defineConfig({
  plugins: [react()],
  base: '/studio-camile-simas/',
})
