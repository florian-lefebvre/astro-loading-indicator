# `astro-loading-indicator`

This is an [Astro integration](https://docs.astro.build/en/guides/integrations-guide/) that displays a progress bar between page navigations when using View Transitions.

## Usage

### Prerequisites

- View Transitions enabled on the whole site, [view docs](https://docs.astro.build/en/guides/view-transitions/#full-site-view-transitions-spa-mode).

### Installation

Install the integration **automatically** using the Astro CLI:

```bash
pnpm astro add astro-loading-indicator
```

```bash
npm astro add astro-loading-indicator
```

```bash
yarn astro add astro-loading-indicator
```

Or install it **manually**:

1. Install the required dependencies

```bash
pnpm add astro-loading-indicator
```

```bash
npm install astro-loading-indicator
```

```bash
yarn add astro-loading-indicator
```

2. Add the integration to your astro config

```diff
+import integration from "astro-loading-indicator";

export default defineConfig({
  integrations: [
+    integration(),
  ],
});
```

### Configuration

TODO:configuration

## Contributing

This package is structured as a monorepo:

- `playground` contains code for testing the package
- `package` contains the actual package

Install dependencies using pnpm: 

```bash
pnpm i --frozen-lockfile
```

Start the playground:

```bash
pnpm playground:dev
```

You can now edit files in `package`. Please note that making changes to those files may require restarting the playground dev server.

## Licensing

[MIT Licensed](https://github.com/florian-lefebvre/astro-loading-indicator/blob/main/LICENSE). Made with ❤️ by [Florian Lefebvre](https://github.com/florian-lefebvre).

## Acknowledgements

- https://github.com/rstacruz/nprogress
