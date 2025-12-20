import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://p.snowcnews.com',

  // 確保這裡是用 server 或 hybrid，看你的需求
  output: 'server',

  adapter: cloudflare({
    // ✅ 加上這一行來解決 Sharp 的警告
    imageService: 'compile', 
  }),

  integrations: [sitemap()],
});