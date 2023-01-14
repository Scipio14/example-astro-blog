import { defineConfig } from 'astro/config';

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site:'https://astro-blog.com',
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap({
    filter:(page)=>page!=='https://astro-blog.com/about/'
  })]
});