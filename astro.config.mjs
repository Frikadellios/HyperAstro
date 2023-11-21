import { defineConfig } from "astro/config";
import alpine from "@astrojs/alpinejs";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  experimental: {
    i18n: {
      defaultLocale: "uk",
      locales: ["uk", "en", "ru"]
    }
  },
  prefetch: {
    prefetchAll: true
  },
  integrations: [alpine(), react(), tailwind()]
});