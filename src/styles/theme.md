# Color Theme System

All colors are defined as CSS variables in `src/index.css` and can be easily changed.

## 🎨 How to Change Colors

### Option 1: Edit CSS Variables (Recommended)
Edit the `:root` section in `src/index.css` to change the entire color scheme:

```css
:root {
  /* Change these RGB values to update colors */
  --color-primary-500: 14 165 233;  /* Main primary color */
  --color-accent-500: 217 70 239;   /* Main accent color */
}
```

### Option 2: Use in Tailwind Classes
```tsx
<div className="bg-primary-500 text-accent-400">
  Uses CSS variables automatically
</div>
```

## 📝 Available Color Variables

### Primary Colors (Blue/Cyan)
- `--color-primary-50` through `--color-primary-900`
- Usage: `bg-primary-500`, `text-primary-400`, `border-primary-300`

### Accent Colors (Purple/Pink)
- `--color-accent-50` through `--color-accent-900`
- Usage: `bg-accent-500`, `text-accent-400`, `border-accent-300`

### Background Colors
- `--color-bg-primary` - Main dark background
- `--color-bg-secondary` - Secondary background (cards, etc.)
- `--color-bg-tertiary` - Tertiary background (hover states)
- Usage: `bg-bg-primary`, `bg-bg-secondary`

### Text Colors
- `--color-text-primary` - Main text color (white/light)
- `--color-text-secondary` - Secondary text (gray)
- `--color-text-tertiary` - Tertiary text (dimmer gray)
- Usage: `text-text-primary`, `text-text-secondary`

### Border Colors
- `--color-border-primary` - Main borders
- `--color-border-secondary` - Secondary borders
- Usage: `border-border-primary`, `border-border-secondary`

## 🎭 Example Theme Changes

### Green & Orange Theme
```css
:root {
  --color-primary-500: 34 197 94;   /* Green */
  --color-accent-500: 249 115 22;   /* Orange */
}
```

### Red & Gold Theme
```css
:root {
  --color-primary-500: 239 68 68;   /* Red */
  --color-accent-500: 234 179 8;    /* Gold */
}
```

### Purple & Blue Theme
```css
:root {
  --color-primary-500: 168 85 247;  /* Purple */
  --color-accent-500: 59 130 246;   /* Blue */
}
```

## 💡 Tips
- RGB values are space-separated (e.g., `255 0 0` for red)
- The `<alpha-value>` in Tailwind config allows opacity classes like `bg-primary-500/50`
- Use online tools to convert HEX to RGB: `#0ea5e9` → `14 165 233`

