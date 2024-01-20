import tailwind from "@astrojs/tailwind";
import astroLoadingIndicator from "astro-loading-indicator";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		astroLoadingIndicator({
			color: "red",
			height: "6px",
		}),
	],
});
