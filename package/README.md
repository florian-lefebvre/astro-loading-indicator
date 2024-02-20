# `astro-loading-indicator`

This is an [Astro integration](https://docs.astro.build/en/guides/integrations-guide/) that displays a progress bar between page navigations when using View Transitions.

## Usage

### Prerequisites

- View Transitions enabled on the whole site, [view docs](https://docs.astro.build/en/guides/view-transitions/#full-site-view-transitions-spa-mode).

### Installation

Install the package **manually**:

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

2. Add the component to your main layout:

```diff
---
import { ViewTransitions } from "astro:transitions";
+import LoadingIndicator from "astro-loading-indicator/component"

---
<!doctype html>
<html>
  <head>
  	<ViewTransitions />
+		<LoadingIndicator />
  </head>
</html>
```

### Configuration

Here is the TypeScript type:

```ts
export type Props = {
    color: string;
    height?: string;
}
```

#### `color`

The indicator background color. Can be any valid CSS property.

```tsx
<LoadingIndicator
  color="#7e22ce"
  // color="red"
  // color="var(--myColor)"
/>
```

#### `height`

The indicator height. Can be any valid CSS property. Defaults to `"2px"`.

```tsx
<LoadingIndicator
  color="..."
  height="1rem"
/>
```

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

- https://swup.js.org/plugins/progress-plugin/
