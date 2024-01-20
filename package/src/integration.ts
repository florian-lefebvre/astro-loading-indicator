import type { AstroIntegration } from "astro"

export const integration = (): AstroIntegration => {
    return {
        name: "astro-loading-indicator",
        hooks: {}
    }
}