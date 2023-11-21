import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [alpine(), react(), tailwind()]
});