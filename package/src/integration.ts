import type { AstroIntegration } from "astro";
import { createResolver, watchIntegration } from "astro-integration-kit";
import type { Options } from "./types";
import { resolveOptions, resolveTemplate } from "./utils";

export const integration = (_options: Options): AstroIntegration => {
	const options = resolveOptions(_options);

	const { resolve } = createResolver(import.meta.url);

	return {
		name: "astro-loading-indicator",
		hooks: {
			"astro:config:setup": async ({
				addWatchFile,
				command,
				injectScript,
				updateConfig,
			}) => {
				await watchIntegration({
					addWatchFile,
					command,
					dir: resolve(),
					updateConfig,
				});

				injectScript(
					"page",
					`import { configure, start, done } from "astro-loading-indicator/deps";

configure({
    template: '${resolveTemplate(options)}',
    showSpinner: false,
});

document.addEventListener("astro:before-preparation", () => {
    start();
});
document.addEventListener("astro:after-swap", () => {
    done();
});`,
				);
			},
		},
	};
};
