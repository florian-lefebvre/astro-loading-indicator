import tailwind from "@astrojs/tailwind";
import astroTailwindConfigViewer from "astro-tailwind-config-viewer";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		astroTailwindConfigViewer({
			viewer: true,
		}),
	],
});
