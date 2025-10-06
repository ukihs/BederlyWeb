// astro.config.mjs
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  site: 'https://test.bederly.com',
  trailingSlash: 'ignore',
  
  // ตรวจสอบให้แน่ใจว่า env vars ถูกโหลด
  vite: {
    define: {
      // Hardcode fallback ถ้า env ไม่โหลด
      'import.meta.env.PUBLIC_WP_GRAPHQL': JSON.stringify(
        process.env.PUBLIC_WP_GRAPHQL || 'https://cms.bederly.com/graphql'
      )
    }
  }
})