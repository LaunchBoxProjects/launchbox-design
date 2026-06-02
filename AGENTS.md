# LaunchBox Agent Workflow

## Overview
Multi-agent development workflow for LaunchBox.design. Each tool has a defined role. 
Don't use a tool outside its strength.

---

## Agent Roles

### Claude (claude.ai)
**Role:** Chief of Staff / Technical Translator  
**Use for:**
- Architecture decisions
- Understanding intent and translating to precise technical language
- Debugging strategy — describe the problem, get the solution before touching code
- Generating precise Cursor prompts
- Systems thinking — component structure, token pipeline, design patterns
- Pressure-testing ideas before building them

**Not for:**
- Direct file editing (use Cursor)
- Quick one-line fixes you already understand

---

### Cursor
**Role:** Code Execution  
**Use for:**
- Applying changes described by Claude
- Multi-file refactors via Composer (Cmd+I)
- Targeted inline edits via Cmd+K
- Autocomplete on known patterns

**Prompt structure that works:**
In [filename], find [specific element].
Change [specific property] from [current state] to [desired state].
The result should [describe visual outcome].
Do not change [anything to preserve].

**Prompt structure that doesn't work:**
- Vague location ("the buttons")
- Vague outcome ("make it better")
- Missing constraints ("full width" without specifying the parent has padding)

**Key learning:** Cursor executes precisely what you say, not what you mean. 
Unclear intent → come to Claude first.

---

### Replit
**Role:** Figma/PenPot Frame → Working Scaffold  
**Use for:**
- Translating design frames into functional React components fast
- Getting past the blank page problem in code
- Rapid UI scaffolding from visual reference

**Gets right:** Colours, spacing, shadows, corners, responsive structure  
**Gets wrong:** Type hierarchy, weight, layout decisions, component architecture

**Workflow:**
1. Import Figma frame into Replit
2. Get working scaffold
3. Bring code to Claude for componentisation and token wiring
4. Apply fixes in Cursor

---

### Spline
**Role:** 3D Asset Creation  
**Use for:**
- Building 3D objects and scenes
- Setting up lighting and materials
- Camera path animation for scroll-driven 3D
- Publishing scenes for web embed

**Integration approach:**
- Disable all export controls except what you need
- Use `@splinetool/runtime` for programmatic JS control
- Camera scroll animation set up in Spline natively, 
  then driven via ScrollTrigger or Spline's own scroll system
- Device orientation (tilt) handled in JavaScript as additive offset on top of scroll position

**Key learning:** Let Spline handle camera animation natively where possible. 
Drive it from JS only when you need precise scroll sync.

---

### PenPot
**Role:** Design & Token System  
**Use for:**
- Component design with tokens applied
- Token export (DTCG standard JSON)
- Design source of truth

**Token pipeline:**

PenPot → tokens.json → Style Dictionary → tokens.css + tokens.js → Next.js

**Known friction points:**
- Set names bleed into Style Dictionary output (fix: rename sets to `Primitives` / `Semantic`)
- No token reference autocomplete in composite token fields
- Can't view token tree across sets simultaneously
- Cross-set references need full path: `{Primitives.color.cream}` not `{color.cream}`
- Borders only support full borders, no per-side

---

### GitHub Desktop
**Role:** Version Control  
**Use for:**
- Committing and pushing changes
- No terminal git needed

**Workflow:**
1. Make changes in Cursor
2. Open GitHub Desktop
3. Write commit message
4. Commit to main
5. Push origin → Vercel deploys automatically

---

## Full Stack

Design intent (Neil)
↓
Architecture & translation (Claude)
↓
Prompt generation (Claude)
↓
Code execution (Cursor)
↓
Commit & push (GitHub Desktop)
↓
Deploy (Vercel — automatic)

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Design | PenPot |
| Tokens | Style Dictionary v5 |
| Framework | Next.js 15 (TypeScript, App Router) |
| Styling | Tailwind + CSS custom properties |
| Animation | GSAP (SplitText, ScrollTrigger, DrawSVG) |
| 3D | Spline + @splinetool/runtime |
| Fonts | next/font/google (Afacad + Albert Sans) |
| Video | Wistia |
| CMS | Sanity (planned) |
| Hosting | Vercel |
| DNS | Hostinger |
| Domain registrar | GoDaddy |
| CRM | ClickUp |
| Scheduling | cal.com |
| Payments | Stripe |

---

## Key Principles

**Design intent before code.** Describe what you're trying to achieve visually 
before touching a file. Claude translates intent to precise technical language. 
Cursor executes precise language. Vague language → wrong output.

**Fix at the source.** Token issues fix in PenPot. Layout issues fix in the component. 
Don't patch downstream what you can fix upstream.

**Ship, then iterate.** Get it live. Fix on the live site. 
Perfectionism in dev is just procrastination.

**The system is the product.** The token pipeline, component library, 
and agent workflow are as much the deliverable as the site itself. 
They make the next project faster.

---

## Lessons Learned

- `<a` tags get stripped in Claude chat copy-paste — always check opening tags are present
- Apostrophes in JSX strings need double quotes or curly braces: `{"don't"}`
- Inline styles can't do media queries — use CSS classes in globals.css
- Next.js `<Image>` with `fill` requires `sizes` prop and `position: relative` on parent
- Spline needs scenes set to public before iframe embed works
- Wistia embeds use web components (`<wistia-player>`) not iframes in newer versions
- DNS changes at Hostinger, not GoDaddy — email records live there
- PageSpeed scores don't correlate with perceived performance on animation-heavy sites
- `overflow-x: hidden` on html/body fixes horizontal scroll on mobile caused by `whiteSpace: nowrap`
- GSAP is now fully free including SplitText, ScrollSmoother, DrawSVG — no Club membership needed