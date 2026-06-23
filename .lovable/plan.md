# NASA-Grade Redesign Plan

A full upgrade pass on the landing site — cinematic Apple-style hero, mission-control telemetry mid-page, experimental Awwwards-style flourishes, and a buttery-smooth scroll-frame sequence that no longer races past.

## 1. Foundation (global)

- Add **Lenis** smooth-scroll wrapper at the root so every section eases instead of snapping.
- Install a tasteful **font stack**: `Space Grotesk` (display) + `JetBrains Mono` (HUD/telemetry) + `Inter` (body).
- Extend design tokens in `src/styles.css`: deep space background `oklch(0.12 0.02 250)`, ion-cyan accent, signal-orange warning, glass surfaces, signed-grid noise overlay.
- Global **custom cursor**: dot + ring, scales/morphs over interactive elements, hides on touch devices.
- Global **magnetic button** primitive — buttons pull toward the cursor within a radius.
- **Page loader**: countdown-style "T-00:03 / SYSTEMS NOMINAL" intro that fades to hero.

## 2. Scroll-frame section fix (the priority)

- Increase pinned scroll length from `800vh` → `1400vh` desktop / `900vh` mobile so each of the 96 frames gets meaningful scroll distance.
- Wrap progress in a Lenis-driven eased value (cubic-out) and **interpolate between adjacent frames** using canvas `globalAlpha` crossfade — eliminates the stepped feel.
- Only redraw when the eased frame index changes; keep the existing eager preload.
- Add HUD overlay on the canvas: `FRAME 042/096`, scroll %, vertical tick marks — looks like a mission console without touching the existing progress bar/label/orbs.

## 3. Hero (Apple-cinematic)

- Massive kinetic headline that **splits per-character** and assembles on load, then reacts subtly to cursor.
- Animated **WebGL gradient mesh** background (lightweight shader, ~80 LoC, falls back to CSS gradient).
- Floating glass spec-card with live "BUILD 2025.11 · LATENCY 12ms" telemetry.
- Scroll-cue chevron with a breathing animation.

## 4. New sections (added between existing ones)

1. **Mission Control telemetry strip** — live-looking panels: FPS, viewport, scroll %, time-on-page, cursor coords, "uplink stable" indicator. Pure visual, all client-side.
2. **Capabilities bento grid** — asymmetric 6-card bento, each card has a unique micro-interaction (parallax image, animated SVG, shader corner, counter).
3. **Process / Trajectory timeline** — horizontal scroll-jacked timeline with stage markers (Discover → Architect → Launch → Orbit).
4. **Case studies marquee** — infinite horizontal marquee of project cards, pauses + scales on hover.
5. **Manifesto** — oversized editorial typography, scroll-revealed word by word.
6. **Contact / Transmission** — terminal-style form ("> initiate transmission_"), magnetic submit button.

## 5. Polish pass on existing sections

- Replace any hard-coded colors with semantic tokens.
- Add scroll-reveal (fade + 12px rise) on every section header via a shared `<Reveal>` component.
- Section dividers: thin animated SVG telemetry lines.
- Footer becomes a "ground control" panel with coordinates, build hash, copyright.

## 6. Performance + a11y

- Respect `prefers-reduced-motion`: disables Lenis, cursor, kinetic type, shader.
- Lazy-mount heavy sections via `IntersectionObserver`.
- Lighthouse target ≥ 90 perf on desktop.

## Technical notes

- New deps: `lenis`, `@fontsource-variable/space-grotesk`, `@fontsource-variable/jetbrains-mono`, `@fontsource-variable/inter`.
- New files: `src/components/SmoothScroll.tsx`, `Cursor.tsx`, `MagneticButton.tsx`, `Reveal.tsx`, `ShaderBackground.tsx`, `TelemetryStrip.tsx`, `BentoGrid.tsx`, `Timeline.tsx`, `CaseStudiesMarquee.tsx`, `Manifesto.tsx`, `Transmission.tsx`, `Loader.tsx`.
- Frame section: edit `src/routes/index.tsx` only — bump pin height, swap raw progress for eased progress, add canvas crossfade + HUD overlay. Keep existing wrapper, progress bar, label, ambient orbs untouched.
- No backend changes. No new routes (everything composes on `/`).

## Out of scope (ask later if you want them)

- Real CMS-driven case studies
- Actual contact form submission backend
- Multi-page routing for case study detail views
