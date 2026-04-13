# Design System Document: The Cinematic Hero Experience

## 1. Overview & Creative North Star
**Creative North Star: "The Neon Vanguard"**

To deliver a premium, high-end event agency vibe for 'Markus is 5', we are moving away from traditional "cartoonish" party layouts. Instead, we are adopting an **Editorial Cinematic** approach. This system treats the landing page like a high-budget film premiere. 

The "Neon Vanguard" aesthetic relies on high-contrast typography, intentional asymmetry (breaking the grid with overlapping elements), and "Electric Depth"—where elements don't just sit on a page, they glow and float within a pressurized, high-energy space. We avoid the "template look" by prioritizing large-scale typography and layered surfaces that feel like a curated digital invitation.

---

## 2. Colors & Surface Logic
This palette is designed to feel "Metallic & Electric." We use deep saturations to provide a luxury backdrop for neon accents.

### The "No-Line" Rule
**Explicit Instruction:** Traditional 1px solid borders are strictly prohibited for sectioning. Boundaries must be defined solely through background color shifts. For example, a section using `surface_container_low` should sit directly against the `background` color to create a natural, sophisticated break.

### Surface Hierarchy & Nesting
Treat the UI as a physical environment. Depth is achieved by "stacking" container tiers:
*   **Base Layer:** `surface` (#0b1229) — The infinite dark void.
*   **Section Layer:** `surface_container_low` (#141a32) — Sub-sections of information.
*   **Component Layer:** `surface_container_high` (#222941) — Interactive cards.
*   **Active Layer:** `surface_bright` (#323851) — The highest points of focus.

### The "Glass & Glow" Rule
To capture the "Superheroes and Transformers" energy, use **Glassmorphism** for floating cards. Apply `surface_container_highest` with a 60% opacity and a `backdrop-filter: blur(20px)`. 
*   **Signature Glows:** Use `secondary_container` (#00e3fd) as an outer-glow (box-shadow) for primary action items to simulate neon light reflecting off a metallic surface.

---

## 3. Typography
We utilize a "High-Contrast Editorial" scale. The interplay between the industrial `Space Grotesk` and the modern `Plus Jakarta Sans` creates a "Tech-Luxury" feel.

*   **Display (Space Grotesk):** Used for the "WOW" factor (e.g., "MARKUS IS 5"). Use `display-lg` with tight letter-spacing (-0.04em) to mimic high-end movie posters.
*   **Headlines (Space Grotesk):** For section headers. Use `headline-lg` in `primary` (#e9c400) to command attention.
*   **Titles & Body (Plus Jakarta Sans):** For all informational content. `title-lg` should be used for event details (Time, Location) to ensure maximum legibility against the dark background.
*   **Labels (Plus Jakarta Sans):** Use `label-md` in `on_tertiary_container` (#8f9090) for metadata or small "Mission Brief" tags.

---

## 4. Elevation & Depth
We eschew traditional drop shadows in favor of **Tonal Layering** and **Ambient Light**.

*   **The Layering Principle:** Place a `surface_container_lowest` card on a `surface_container_low` section to create a soft, natural lift.
*   **Ambient Shadows:** For floating hero elements, use a shadow with a blur radius of `40px` and an opacity of `8%`. The shadow color must be a tinted version of `surface_container_lowest` rather than black, preventing the design from looking "muddy."
*   **The "Ghost Border" Fallback:** If a boundary is required for accessibility, use the `outline_variant` (#444650) at **15% opacity**. Never use a 100% opaque border.
*   **Metallic Texture:** On primary CTAs, apply a subtle linear gradient: `primary` (#e9c400) to `primary_fixed_dim` (#e9c400) at a 135-degree angle to simulate a brushed gold/metallic finish.

---

## 5. Components

### Buttons (The "Pulse" Variants)
*   **Primary:** Solid `primary` (#e9c400). Label in `on_primary` (#3a3000). Use `xl` (3rem) rounded corners. Add a subtle `secondary_container` neon outer glow on hover.
*   **Secondary:** Glass-style. `surface_container_highest` at 40% opacity with a `secondary` (#bdf4ff) "Ghost Border."
*   **Micro-Animation:** All buttons should scale slightly (1.02x) on hover to feel "energized."

### Cards & Lists
*   **Cards:** Use `md` (1.5rem) or `lg` (2rem) corner radius. **Strictly no dividers.** Separate content using the `1.5rem` spacing token or a subtle shift from `surface_container_high` to `surface_container_highest`.
*   **Hero Cards:** Should use an "Asymmetric Overlap"—letting a Transformer/Hero image bleed outside the card boundary to break the "box" feel.

### Selection Chips
*   **Action Chips:** High-saturation `secondary_container` (#00e3fd) with `on_secondary_container` (#00616d) text. These should look like glowing HUD (Heads-Up Display) elements.

### Inputs
*   **Fields:** Use `surface_container_lowest` for the field background. The active state should trigger a `secondary` (#bdf4ff) "Ghost Border" and a subtle neon glow.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use extreme vertical whitespace between sections to create a "Luxury" feel.
*   **Do** use `secondary_fixed_dim` (#00daf3) for micro-interactions like loading bars or toggle states to keep the "Neon" energy alive.
*   **Do** use "Plus Jakarta Sans" for all long-form text; "Space Grotesk" is for impact, not reading.

### Don't:
*   **Don't** use pure black (#000000). Always use `background` (#0b1229) to maintain tonal depth.
*   **Don't** use sharp 90-degree corners. This system relies on the `xl`, `lg`, and `md` scales to feel modern and premium.
*   **Don't** use standard "Superhero" red/blue combos. Stick to the `Deep Blue`, `Bright Yellow`, and `Neon Cyan` palette to maintain the "High-End Agency" vibe.
*   **Don't** use 100% opaque dividers. If you must separate items in a list, use a 10% opacity `outline_variant` or simply more breathing room.