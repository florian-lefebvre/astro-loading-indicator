import type { AstroIntegration } from "astro";
import type { Options } from "./types";

export const integration = ({
	color,
	height = "2px",
}: Options): AstroIntegration => {
	return {
		name: "astro-loading-indicator",
		hooks: {
			"astro:config:setup": ({ injectScript }) => {
				const style = {
					"pointer-events": "none",
					background: `${color}`,
					position: "fixed",
					"z-index": "1031",
					top: "0",
					left: "0",
					width: "100%",
					height: `${height}`,
				};

				injectScript(
					"page",
					`import { configure, start, done } from "astro-loading-indicator/deps";

configure({
    template: '<div style="${Object.entries(style)
			.map(([key, value]) => `${key}: ${value};`)
			.join("")}" role="bar"></div>',
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
