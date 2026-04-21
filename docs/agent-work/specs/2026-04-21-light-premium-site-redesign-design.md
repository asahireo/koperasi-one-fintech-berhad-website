# Light Premium Site Redesign

Date: 2026-04-21

## Goal

Rebuild the website around a full light-premium visual system that replaces the current heavy dark presentation with a cleaner, more creative, and more consistent brand experience.

The redesign should keep the parts the user likes from the existing homepage:

- 2D visual language
- animation and motion
- premium feeling
- strong creative direction

The redesign should change the parts the user dislikes:

- overly dark page backgrounds
- inconsistent inner-page creativity
- pages that feel flatter or less designed than the homepage

## Approved Direction

### Chosen visual system

The site will use a full visual system reset, not a surface-level recolor.

Core style direction:

- pearl white base
- lavender atmospheric accents
- cobalt anchors for hierarchy and calls to action
- brighter layered cards
- softer shadows
- airy motion instead of cyber-dark pulse

The redesign must feel modern tech, light premium, and custom.

### Creativity standard

Every component and every page should feel creative, but creativity must stay structured and premium.

Creative means:

- strong composition
- memorable section framing
- intentional layered backgrounds
- elegant motion
- distinct page personalities

Creative does not mean:

- noisy gradients everywhere
- random decorative elements
- too many accent colors
- reused hero structures on every page
- effects that compete with content

## Visual System

### Backgrounds

The site should avoid flat white and avoid pure black as the dominant base.

Approved background approach:

- layered pearl and mist gradients
- soft lavender radial glows
- occasional cobalt geometric accents
- subtle mesh-like blends
- slow-moving 2D atmospheric shapes

The result should feel airy, luminous, and dimensional without becoming busy.

### Color roles

- Pearl white: primary background and open-space canvas
- Lavender: atmosphere, glow, decorative highlights, soft secondary surfaces
- Cobalt: primary action color, navigation emphasis, section anchors, important controls
- Neutral cool grays: supporting text, borders, quiet surfaces

Color should be role-driven. Lavender should not replace cobalt as the main action color.

### Surfaces and cards

Cards are a core brand tool in this redesign.

Approved card qualities:

- frosted light surfaces
- subtle transparency where useful
- soft but defined shadows
- thin tinted borders
- inner highlights
- rounded corners
- occasional decorative accent lines, floating shapes, or layered panels

Cards may vary slightly by use case, but all should feel part of the same family.

### Typography

Typography should feel more intentional than the current generic system.

Rules:

- headings need stronger personality and presence
- body text must remain calm and highly readable
- the hierarchy must feel premium and modern
- spacing and scale should carry more of the elegance, not just color

If the current font stack undermines the redesign, it should be updated as part of the implementation.

## Motion System

Animation remains part of the identity, but the tone changes.

Approved motion style:

- slow floating background elements
- staggered section reveals
- gentle card lift and parallax
- refined CTA hover motion
- soft diagram and shape motion
- reduced harsh pulsing and neon flicker

Motion must support clarity and quality, not spectacle alone.

Accessibility requirements:

- respect `prefers-reduced-motion`
- avoid motion that blocks interaction
- avoid excessive simultaneous animation

## Page Personalities

Each page needs a distinct composition while remaining inside one shared design system.

### Home

Home is the strongest visual statement.

It should include:

- a rebuilt hero with layered premium gradients
- floating 2D product shapes and visual ribbons
- strong section transitions
- premium stats and product framing
- clearer and brighter CTA treatment

### About

About should feel editorial, premium, and trustworthy.

It should include:

- asymmetrical composition
- refined mission and vision panels
- timeline or sequence-like storytelling where useful
- softer background motion than the homepage

### Solutions

Solutions should feel modular and product-led.

It should include:

- premium tech cards or product panels
- visual differentiation between offerings
- stronger hierarchy for titles, summaries, and features
- diagram-like 2D support elements

### Solution Detail

Each solution detail page should behave like a focused product landing page.

It should include:

- product-story hero framing
- feature strips or structured value sections
- visual process or architecture blocks
- a more premium conversion path

### Resources

Resources should feel curated instead of dumped.

It should include:

- elegant document cards
- category cues
- better preview framing
- softer motion and clearer grouping

### Contact

Contact should feel trustworthy and polished.

It should include:

- a premium light form container
- calm visual framing
- structured spacing
- motion that adds energy without distracting from conversion

### Gallery

Gallery should feel more like a designed editorial showcase.

It should include:

- a creative masonry or varied-tile feeling where feasible
- cleaner image framing
- refined hover and reveal behavior
- consistent lightbox or viewing polish if that interaction already exists

### Shared components

Navbar, footer, buttons, tags, chips, cards, and section headers all need to be rebuilt around the new system.

Shared component rules:

- consistent light premium surfaces
- cobalt-led interaction states
- lavender used as atmosphere, not as uncontrolled primary action
- every reusable element should feel designed, not utility-first

## Section And Component Rules

### Section headers

Each section should use a designed header pattern rather than plain title-plus-text.

Approved header ingredients:

- small overline or label
- strong heading
- elegant supporting copy
- graphic accent such as line, orbit, stacked circles, framed square, or similar motif

Not every section must use the same motif.

### Buttons and links

Buttons should feel brighter, sharper, and more premium.

Primary buttons:

- cobalt-led
- refined glow or lift
- clear depth and active state

Secondary buttons:

- lavender-tinted glass or outline treatment
- soft elevation changes on hover

Links:

- animated underline, arrow drift, or subtle accent shift

### Visual support blocks

The design should continue using 2D visuals, but with better art direction.

Approved visual support patterns:

- orbit dots
- floating bars
- framed data tiles
- abstract diagram panels
- layered geometry
- structured glow clusters

These elements should reinforce meaning and hierarchy.

## Layout Principles

- Keep the existing information architecture unless a layout change directly improves the redesign.
- Do not duplicate the same hero composition across every page.
- Use whitespace generously.
- Prefer fewer, stronger design moves over many small decorative ones.
- Mobile layouts must remain clean and intentional.
- Large-screen layouts should feel expansive, not stretched.

## Implementation Scope

This redesign should be executed as a site-wide design-system rebuild.

### Expected code changes

1. Rework global styling into a new light premium token system for colors, surfaces, borders, shadows, gradients, and motion.
2. Rebuild shared layout components such as the navbar and footer.
3. Redesign every main page in the `pages` directory, including the homepage.
4. Introduce reusable section wrappers and visual patterns where they reduce duplication and improve consistency.
5. Keep the current routing and content structure where practical, while replacing visual composition, spacing, and interaction design.
6. Verify mobile and desktop responsiveness after the reset.

### Out of scope

1. Changing the content model unless required by the redesign.
2. Leaving a mixed dark/light visual system by accident.
3. Shipping a template-like look that loses the site’s current ambition.

## Risks And Guardrails

### Primary risks

- a light redesign that becomes generic or bland
- a creative redesign that becomes visually noisy
- inconsistent page quality if each page is treated independently without a strict shared system
- unreadable contrast if lavender is overused on light surfaces

### Guardrails

- define shared tokens and component patterns first
- keep cobalt as the action anchor
- use lavender mainly for atmosphere and decorative support
- test readability against the lighter backgrounds
- keep motion subtle and meaningful

## Success Criteria

The redesign is successful if:

1. The entire site feels consistently premium and intentionally designed.
2. The homepage no longer feels isolated as the only creative page.
3. The site feels lighter, cleaner, and more welcoming than the current dark presentation.
4. Every page has a distinct composition without breaking the shared brand.
5. Shared UI components look custom and cohesive.
6. Motion still adds personality, but no longer makes the site feel heavy.
