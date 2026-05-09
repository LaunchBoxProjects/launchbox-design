# LaunchBox Design Tokens

## Colours

### Primitives
| Token | Value |
|-------|-------|
| `--lb-primitives-color-signal` | `#ef2c60` |
| `--lb-primitives-color-charcoal` | `#3e3e3e` |
| `--lb-primitives-color-cream` | `#f5f1e7` |

### Semantic
| Token | Usage |
|-------|-------|
| `--lb-semantic-color-surface-page` | Page background |
| `--lb-semantic-color-text-primary` | Body text |
| `--lb-semantic-color-text-inverse` | Text on dark/signal backgrounds |
| `--lb-semantic-color-action-default` | Buttons, accents |
| `--lb-semantic-color-border-default` | All borders |

---

## Typography

### Font Families
| Token | Value |
|-------|-------|
| `--font-afacad` | Afacad — display, headings |
| `--font-albert-sans` | Albert Sans — body, UI |

### Font Sizes
| Token | Value | Usage |
|-------|-------|-------|
| `--lb-primitives-font-size-xs` | 14px | Captions, labels |
| `--lb-primitives-font-size-sm` | 16px | Small body |
| `--lb-primitives-font-size-md` | 22px | Body regular |
| `--lb-primitives-font-size-lg` | 32px | Body large |
| `--lb-primitives-font-size-xl` | 42px | Subheading |
| `--lb-primitives-font-size-2xl` | 72px | Price display |
| `--lb-primitives-font-size-3xl` | 96px | Heading |
| `--lb-primitives-font-size-4xl` | 190px | Section display |
| `--lb-primitives-font-size-5xl` | 290px | Hero/ABSOLUTE |

### Font Weights
| Token | Value |
|-------|-------|
| `--lb-primitives-font-weight-light` | 300 |
| `--lb-primitives-font-weight-regular` | 400 |
| `--lb-primitives-font-weight-semibold` | 600 |
| `--lb-primitives-font-weight-bold` | 700 |

### Line Heights
| Token | Value | Usage |
|-------|-------|-------|
| `--lb-primitives-font-line-height-tight` | 1 | Display type |
| `--lb-primitives-font-line-height-normal` | 1.4 | Body copy |

---

## Semantic Typography

### Display (Afacad, uppercase)
| Token | Size | Weight | Usage |
|-------|------|--------|-------|
| `typography.display.hero` | clamp(60px, 11vw, 190px) | semibold | Hero headline |
| `typography.display.section` | clamp(48px, 10vw, 96px) | bold | Section heads |
| `typography.display.heading` | clamp(32px, 6vw, 60px) | bold | Page headings |
| `typography.display.subheading` | clamp(24px, 4vw, 42px) | regular | Subheadings |

### Body (Albert Sans)
| Token | Size | Weight | Usage |
|-------|------|--------|-------|
| `typography.body.large` | 32px | regular | Intro copy |
| `typography.body.regular` | 22px | regular | Body copy |
| `typography.body.small` | 16px | regular | Captions, UI |

---

## Layout

### Container
- Max width: 90% of viewport
- Mobile: 98% of viewport (below 600px)
- Border: 1px solid `--lb-semantic-color-border-default` left/right

### Breakpoints
| Name | Value |
|------|-------|
| Mobile | 600px |

### Spacing
- Section padding: `clamp(24px, 4vw, 60px)` vertical
- Content padding: `clamp(16px, 3%, 48px)` horizontal
- Grid gap: `2px` (project grid)
- DISS gap: none (full bleed cells)

---

## Components

### Display
```tsx
<Display as="h1" size="hero">Text</Display>
// sizes: hero | section | heading | subheading
// as: h1 | h2 | h3 | h4 | span | p
```

### Body
```tsx
<Body size="regular">Text</Body>
// sizes: large | regular | small
// as: p | span | div | li
```

### Container
```tsx
<Container>
  {children}
</Container>
// Full width section with borderBottom
// Inner div is 90% width centered with left/right borders
// Scroll-driven border draw animation built in
// Selection handles on entry
```

### Button
```tsx
<Button fullWidth={true}>Plans & Pricing</Button>
// fullWidth: true | false
```