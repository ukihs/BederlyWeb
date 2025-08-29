// astro.config.mjs
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  output: 'static',            // บังคับเป็น SSG
  integrations: [tailwind()],
})
