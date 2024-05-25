---
"astro-loading-indicator": minor
---

Adds a `threshold` prop. If the page loads in less than the specified duration (in ms), the indicator will not be shown. It can be set to `false` to always show it. Defaults to `200`.

```tsx
<LoadingIndicator
  color="..."
  threshold={600}
  // threshold={false}
/>
```