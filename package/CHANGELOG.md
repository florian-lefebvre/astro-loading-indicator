# astro-loading-indicator

## 0.7.0

### Minor Changes

- d057e74: Adds support for Astro 5.0

## 0.6.1

### Patch Changes

- b64c000: Fixes an invalid html attribute on the injected style tag

## 0.6.0

### Minor Changes

- 2ea5345: Adds support for RTL

### Patch Changes

- 2ea5345: Fixes threshold that was not respected

## 0.5.0

### Minor Changes

- 515dc78: Adds a `threshold` prop. If the page loads in less than the specified duration (in ms), the indicator will not be shown. It can be set to `false` to always show it. Defaults to `200`.

  ```tsx
  <LoadingIndicator
    color="..."
    threshold={600}
    // threshold={false}
  />
  ```

## 0.4.0

### Minor Changes

- abe0616: Removes the internal `@swup/progress-plugin` dependency and exposes 2 new props: `class` and `animationDuration`.

## 0.3.0

### Minor Changes

- 6d06726: Updates implementation to use `swup` instead of `nprogress`

## 0.2.0

### Minor Changes

- 5bdacd7: Removes the integration API and fixes the component

## 0.1.2

### Patch Changes

- 36fc58d: Improves imports

## 0.1.1

### Patch Changes

- ccfb7ef: Adds HMR support

## 0.1.0

### Minor Changes

- 38a29a8: Allows using the package features as a component: `<LoadingIndicator />`

## 0.0.1

### Patch Changes

- f618cdc: Initial release
