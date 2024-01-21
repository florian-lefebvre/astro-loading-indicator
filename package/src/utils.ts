import type { Options } from "./types";

export const resolveOptions = ({
	color,
	height = "2px",
}: Options): Required<Options> => {
	return { color, height };
};

export const resolveTemplate = ({
	color,
	height,
}: Required<Options>): string => {
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

	return `<div style="${Object.entries(style)
		.map(([key, value]) => `${key}: ${value};`)
		.join("")}" role="bar"></div>`;
};
