// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Set SITE_URL (or edit the fallback) to your real address so the sitemap,
// RSS feed, robots.txt and social previews use absolute links.
const site = process.env.SITE_URL || "https://slowcommute.example.com";

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "ignore",
  integrations: [sitemap()],
});
