# AetherFlow Futuristic Ecosystem Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use subagent-driven-development (recommended) or executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the site into a dark, cinematic, `AetherFlow`-inspired product ecosystem experience with a new navigation structure, cohesive shared components, and premium inner pages.

**Architecture:** The work starts by establishing a global design system and a minimal automated test harness, then rebuilding the application shell and route model, and finally replacing the current marketing pages with a new `Home`, `Platform`, `Products`, `Company`, `Resources`, and `Contact` flow. Existing product detail data stays as the content backbone, but page composition, shared components, and route emphasis are reauthored around the new visual system.

**Tech Stack:** React 19, TypeScript, Vite 6, React Router, Tailwind CSS 4, Framer Motion, Lucide React, Vitest, React Testing Library

---

## File Structure

### Existing files to modify

- `package.json`
  Responsibility: add test scripts and frontend test dependencies.
- `tailwind.config.js`
  Responsibility: update tokens for the new palette, fonts, shadows, and motion primitives.
- `index.css`
  Responsibility: define the global dark design system, typography imports, surface primitives, and motion-safe helpers.
- `App.tsx`
  Responsibility: update the route map and top-level page composition.
- `constants.ts`
  Responsibility: replace legacy navigation items and adapt product metadata for the new IA.
- `translations.ts`
  Responsibility: add copy for the new page titles, navigation, section labels, and CTA text.
- `components/Navbar.tsx`
  Responsibility: implement the new top navigation, mobile menu, and action hierarchy.
- `components/Footer.tsx`
  Responsibility: replace the legacy footer with a premium closing network section.
- `pages/Home.tsx`
  Responsibility: rebuild the homepage around the cinematic hero and ecosystem story.
- `pages/Solutions.tsx`
  Responsibility: repurpose into the new `Platform` or `Products` overview page if that yields the least churn.
- `pages/SolutionDetail.tsx`
  Responsibility: preserve product detail routes while shifting their presentation to the new system.
- `pages/About.tsx`
  Responsibility: repurpose or replace as the new `Company` page.
- `pages/Resources.tsx`
  Responsibility: convert the flat list into a curated resource library.
- `pages/Contact.tsx`
  Responsibility: redesign the contact experience into a premium conversion page.

### Existing files to inspect during implementation

- `components/DataCoreModel.tsx`
  Responsibility: decide whether to reuse, restyle, or demote this visual depending on how well it fits the new home/platform pages.
- `pages/SmartPartner.tsx`
  Responsibility: fold useful partnership content into the new `Company` page or a company section.
- `pages/Gallery.tsx`
  Responsibility: decide whether to keep as a supporting route, demote from top-level nav, or leave intact for later.
- `pages/MiPay.tsx`
  Responsibility: ensure the route still fits the new shell if kept accessible.
- `utils/assets.ts`
  Responsibility: retain asset path helper if page refactors still depend on it.
- `contexts/LanguageContext.tsx`
  Responsibility: ensure the new route and shared shell continue to use the existing bilingual mode cleanly.

### New files to create

- `vitest.config.ts`
  Responsibility: Vitest config for jsdom-based component tests.
- `src/test/setup.ts` or `test/setup.ts`
  Responsibility: testing-library setup and global matcher registration.
- `components/ParticleField.tsx`
  Responsibility: reusable, production-safe canvas background component derived from the `AetherFlowHero` concept.
- `components/SectionHeading.tsx`
  Responsibility: reusable premium section header component.
- `components/SurfaceCard.tsx`
  Responsibility: shared card/panel wrapper for consistent surface treatment.
- `components/PrimaryCta.tsx`
  Responsibility: shared primary/secondary CTA component API if duplication becomes noisy.
- `components/ProductShowcase.tsx`
  Responsibility: reusable product grid or panel section for home/products/platform pages.
- `pages/Platform.tsx`
  Responsibility: new ecosystem overview page if not reusing `pages/Solutions.tsx`.
- `pages/Products.tsx`
  Responsibility: new product overview entry point if not reusing `pages/Solutions.tsx`.
- `pages/Company.tsx`
  Responsibility: new combined company/trust/partner page if not reusing `pages/About.tsx`.
- `tests/app-shell.test.tsx`
  Responsibility: verify the new shell and nav items render.
- `tests/routes.test.tsx`
  Responsibility: verify critical route rendering and IA changes.
- `tests/components/particle-field.test.tsx`
  Responsibility: verify reduced-motion and canvas mounting behavior at a unit level.

### Decomposition notes

- Keep the visual system centralized in `index.css` and a few reusable components. Do not duplicate panel styles and section header logic in every page.
- Prefer reusing existing page files where it reduces route churn, but create new files if the old names make the implementation harder to understand.
- Keep current product detail routes reachable even if top-level navigation becomes simpler.

## Task 1: Bootstrap The Test Harness

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`
- Create: `tests/setup.ts`
- Create: `tests/app-shell.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders the primary application shell', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(await screen.findByRole('navigation')).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/app-shell.test.tsx`
Expected: FAIL because Vitest/testing-library config does not exist yet.

- [ ] **Step 3: Write minimal implementation**

Add:

- Vitest and Testing Library dev dependencies
- `test` and `test:run` scripts
- a jsdom Vitest config
- matcher setup file

Minimal `vitest.config.ts`:

```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
  },
});
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test:run -- tests/app-shell.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json vitest.config.ts tests/setup.ts tests/app-shell.test.tsx
git commit -m "test: bootstrap frontend test harness"
```

## Task 2: Define The Global AetherFlow Design System

**Files:**
- Modify: `tailwind.config.js`
- Modify: `index.css`
- Test: `npm run build`

- [ ] **Step 1: Write the failing test**

Document the expected CSS contract in a small smoke test:

```tsx
import { readFileSync } from 'node:fs';

test('global stylesheet defines aetherflow surface tokens', () => {
  const css = readFileSync('index.css', 'utf8');
  expect(css).toContain('--surface-glass');
  expect(css).toContain('--accent-violet');
});
```

Save this in `tests/design-system.test.ts`.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test:run -- tests/design-system.test.ts`
Expected: FAIL because the new tokens are not present.

- [ ] **Step 3: Write minimal implementation**

Update `tailwind.config.js` and `index.css` to add:

- new dark palette tokens
- refined font families
- global body/background treatment
- reusable classes for glass panels, section shells, buttons, labels, and reduced-motion behavior

Minimal CSS token shape:

```css
:root {
  --bg-base: #05060a;
  --bg-elevated: #0d1018;
  --surface-glass: rgba(12, 16, 24, 0.72);
  --surface-border: rgba(255, 255, 255, 0.1);
  --text-primary: #f5f7fb;
  --text-muted: rgba(245, 247, 251, 0.68);
  --accent-violet: #bf80ff;
}
```

- [ ] **Step 4: Run verification**

Run:

- `npm run test:run -- tests/design-system.test.ts`
- `npm run build`

Expected: PASS and successful production build.

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.js index.css tests/design-system.test.ts
git commit -m "feat: add aetherflow global design system"
```

## Task 3: Build Reusable Visual Primitives

**Files:**
- Create: `components/ParticleField.tsx`
- Create: `components/SectionHeading.tsx`
- Create: `components/SurfaceCard.tsx`
- Optionally Create: `components/PrimaryCta.tsx`
- Create: `tests/components/particle-field.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
import { render } from '@testing-library/react';
import ParticleField from '../../components/ParticleField';

test('renders a canvas background', () => {
  const { container } = render(<ParticleField />);
  expect(container.querySelector('canvas')).not.toBeNull();
});
```

Add a second test for reduced-motion fallback:

```tsx
test('skips animation setup when reduced motion is preferred', () => {
  window.matchMedia = vi.fn().mockReturnValue({ matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() }) as any;
  render(<ParticleField />);
  expect(window.matchMedia).toHaveBeenCalled();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test:run -- tests/components/particle-field.test.tsx`
Expected: FAIL because the component does not exist.

- [ ] **Step 3: Write minimal implementation**

Create:

- `ParticleField.tsx` with a client-safe canvas animation adapted from the approved reference
- `SectionHeading.tsx` for repeated overline + title + copy blocks
- `SurfaceCard.tsx` for repeated panel treatment

Minimal `ParticleField` component shape:

```tsx
type ParticleFieldProps = {
  className?: string;
  density?: number;
  interactive?: boolean;
};
```

- [ ] **Step 4: Run test to verify it passes**

Run:

- `npm run test:run -- tests/components/particle-field.test.tsx`
- `npm run build`

Expected: PASS and successful build.

- [ ] **Step 5: Commit**

```bash
git add components/ParticleField.tsx components/SectionHeading.tsx components/SurfaceCard.tsx tests/components/particle-field.test.tsx
git commit -m "feat: add reusable aetherflow visual primitives"
```

## Task 4: Rebuild Navigation And Footer Around The New IA

**Files:**
- Modify: `constants.ts`
- Modify: `translations.ts`
- Modify: `components/Navbar.tsx`
- Modify: `components/Footer.tsx`
- Modify: `App.tsx`
- Test: `tests/app-shell.test.tsx`

- [ ] **Step 1: Write the failing test**

Extend `tests/app-shell.test.tsx`:

```tsx
test('renders the new primary navigation items', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(await screen.findByText(/Platform/i)).toBeInTheDocument();
  expect(screen.getByText(/Products/i)).toBeInTheDocument();
  expect(screen.getByText(/Company/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test:run -- tests/app-shell.test.tsx`
Expected: FAIL because the old nav structure is still present.

- [ ] **Step 3: Write minimal implementation**

Update:

- `constants.ts` navigation data to the new IA
- `translations.ts` navigation labels and footer copy
- `Navbar.tsx` to a slimmer architectural shell
- `Footer.tsx` to a structured closing section
- `App.tsx` to align route declarations with the new top-level destinations

Preserve access to existing product detail routes even if their entry points move.

- [ ] **Step 4: Run verification**

Run:

- `npm run test:run -- tests/app-shell.test.tsx`
- `npm run build`

Expected: PASS and successful build.

- [ ] **Step 5: Commit**

```bash
git add constants.ts translations.ts components/Navbar.tsx components/Footer.tsx App.tsx tests/app-shell.test.tsx
git commit -m "feat: rebuild shell for aetherflow navigation"
```

## Task 5: Rebuild The Homepage As The Cinematic Ecosystem Entry

**Files:**
- Modify: `pages/Home.tsx`
- Modify: `components/DataCoreModel.tsx` if reused
- Reuse: `components/ParticleField.tsx`
- Reuse: `components/SectionHeading.tsx`
- Reuse: `components/SurfaceCard.tsx`
- Create or Modify: `tests/routes.test.tsx`

- [ ] **Step 1: Write the failing test**

Add a route test:

```tsx
test('homepage renders the ecosystem hero and platform summary', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  expect(await screen.findByRole('heading', { name: /AetherFlow|Cooperative/i })).toBeInTheDocument();
  expect(screen.getByText(/Platform|Ecosystem/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test:run -- tests/routes.test.tsx`
Expected: FAIL because the current home page content does not match the new contract.

- [ ] **Step 3: Write minimal implementation**

Replace `pages/Home.tsx` with:

- particle hero
- tighter narrative copy
- ecosystem overview
- featured products
- trust strip
- closing CTA

Keep content density high enough to support the hybrid requirement without reverting to brochure-style block stacking.

- [ ] **Step 4: Run verification**

Run:

- `npm run test:run -- tests/routes.test.tsx`
- `npm run build`

Expected: PASS and successful build.

- [ ] **Step 5: Commit**

```bash
git add pages/Home.tsx components/DataCoreModel.tsx tests/routes.test.tsx
git commit -m "feat: rebuild homepage as cinematic ecosystem entry"
```

## Task 6: Create The Platform And Products Overview Flow

**Files:**
- Create or Modify: `pages/Platform.tsx`
- Create or Modify: `pages/Products.tsx`
- Modify: `pages/Solutions.tsx` if reused instead of creating new files
- Create: `components/ProductShowcase.tsx`
- Modify: `App.tsx`
- Modify: `translations.ts`
- Test: `tests/routes.test.tsx`

- [ ] **Step 1: Write the failing test**

Add:

```tsx
test('platform route renders ecosystem orchestration content', async () => {
  render(
    <MemoryRouter initialEntries={['/platform']}>
      <App />
    </MemoryRouter>
  );

  expect(await screen.findByRole('heading', { name: /Platform/i })).toBeInTheDocument();
});

test('products route renders product overview panels', async () => {
  render(
    <MemoryRouter initialEntries={['/products']}>
      <App />
    </MemoryRouter>
  );

  expect(await screen.findByText(/ICMIS/i)).toBeInTheDocument();
  expect(screen.getByText(/KoSMART/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test:run -- tests/routes.test.tsx`
Expected: FAIL because the routes do not exist or do not match the new IA.

- [ ] **Step 3: Write minimal implementation**

Implement:

- one ecosystem page for orchestration and cross-product story
- one product overview page with reusable product panels
- route wiring in `App.tsx`

Reuse `SOLUTIONS_DATA` rather than duplicating product metadata.

- [ ] **Step 4: Run verification**

Run:

- `npm run test:run -- tests/routes.test.tsx`
- `npm run build`

Expected: PASS and successful build.

- [ ] **Step 5: Commit**

```bash
git add pages/Platform.tsx pages/Products.tsx pages/Solutions.tsx components/ProductShowcase.tsx App.tsx translations.ts tests/routes.test.tsx
git commit -m "feat: add platform and products overview pages"
```

## Task 7: Rebuild Product Detail Pages In The New Visual System

**Files:**
- Modify: `pages/SolutionDetail.tsx`
- Modify: `translations.ts` if new CTA labels are needed
- Test: `tests/routes.test.tsx`

- [ ] **Step 1: Write the failing test**

Add:

```tsx
test('product detail route renders structured product content', async () => {
  render(
    <MemoryRouter initialEntries={['/solutions/icmis']}>
      <App />
    </MemoryRouter>
  );

  expect(await screen.findByText(/ICMIS/i)).toBeInTheDocument();
  expect(screen.getByText(/Benefits|Modules/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test:run -- tests/routes.test.tsx`
Expected: FAIL if the page still reflects the old design contract.

- [ ] **Step 3: Write minimal implementation**

Refactor `pages/SolutionDetail.tsx` to use:

- cinematic subsystem hero
- structured features/modules layout
- premium CTA placement
- visual consistency with the new shared components

Do not break brochure download links already defined by `SOLUTIONS_DATA`.

- [ ] **Step 4: Run verification**

Run:

- `npm run test:run -- tests/routes.test.tsx`
- `npm run build`

Expected: PASS and successful build.

- [ ] **Step 5: Commit**

```bash
git add pages/SolutionDetail.tsx translations.ts tests/routes.test.tsx
git commit -m "feat: redesign product detail pages"
```

## Task 8: Fold About And Smart Partner Into A New Company Page

**Files:**
- Create or Modify: `pages/Company.tsx`
- Modify: `pages/About.tsx` if reused
- Inspect/Modify: `pages/SmartPartner.tsx`
- Modify: `App.tsx`
- Modify: `translations.ts`
- Test: `tests/routes.test.tsx`

- [ ] **Step 1: Write the failing test**

Add:

```tsx
test('company route renders trust and partnership narrative', async () => {
  render(
    <MemoryRouter initialEntries={['/company']}>
      <App />
    </MemoryRouter>
  );

  expect(await screen.findByRole('heading', { name: /Company|About/i })).toBeInTheDocument();
  expect(screen.getByText(/Partner|Mission|Vision/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test:run -- tests/routes.test.tsx`
Expected: FAIL because the combined route does not exist yet.

- [ ] **Step 3: Write minimal implementation**

Build a single `Company` page that combines:

- mission/vision
- trust narrative
- partnership/business model
- selected institutional credibility content

If legacy routes remain for compatibility, make them redirect or render the new page content rather than maintaining separate designs.

- [ ] **Step 4: Run verification**

Run:

- `npm run test:run -- tests/routes.test.tsx`
- `npm run build`

Expected: PASS and successful build.

- [ ] **Step 5: Commit**

```bash
git add pages/Company.tsx pages/About.tsx pages/SmartPartner.tsx App.tsx translations.ts tests/routes.test.tsx
git commit -m "feat: consolidate company and partner storytelling"
```

## Task 9: Redesign Resources And Contact For Utility + Conversion

**Files:**
- Modify: `pages/Resources.tsx`
- Modify: `pages/Contact.tsx`
- Modify: `translations.ts`
- Test: `tests/routes.test.tsx`

- [ ] **Step 1: Write the failing test**

Add:

```tsx
test('resources route renders curated download cards', async () => {
  render(
    <MemoryRouter initialEntries={['/resources']}>
      <App />
    </MemoryRouter>
  );

  expect(await screen.findByText(/Company Profile/i)).toBeInTheDocument();
});

test('contact route renders the premium inquiry form', async () => {
  render(
    <MemoryRouter initialEntries={['/contact']}>
      <App />
    </MemoryRouter>
  );

  expect(await screen.findByRole('button', { name: /Send|Request/i })).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test:run -- tests/routes.test.tsx`
Expected: FAIL because those pages still reflect the old UI contract.

- [ ] **Step 3: Write minimal implementation**

Update `Resources` to:

- group documents
- improve card hierarchy
- preserve direct downloads

Update `Contact` to:

- use the new surface system
- simplify the form visually
- keep the WhatsApp-based submission behavior unless there is a clear reason to change it

- [ ] **Step 4: Run verification**

Run:

- `npm run test:run -- tests/routes.test.tsx`
- `npm run build`

Expected: PASS and successful build.

- [ ] **Step 5: Commit**

```bash
git add pages/Resources.tsx pages/Contact.tsx translations.ts tests/routes.test.tsx
git commit -m "feat: redesign resources and contact flows"
```

## Task 10: Compatibility Cleanup, Responsive Polish, And Final Verification

**Files:**
- Modify: `App.tsx`
- Modify: any touched page/component files as needed
- Modify: optional redirect helpers or compatibility links
- Test: full test suite and production build

- [ ] **Step 1: Write the failing test**

Add a final shell-level route regression test:

```tsx
test('legacy product detail route remains reachable', async () => {
  render(
    <MemoryRouter initialEntries={['/solutions/ilms']}>
      <App />
    </MemoryRouter>
  );

  expect(await screen.findByText(/iLMS/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test:run -- tests/routes.test.tsx`
Expected: FAIL if route consolidation broke detail accessibility.

- [ ] **Step 3: Write minimal implementation**

Clean up:

- route compatibility
- mobile spacing issues
- navbar/footer edge cases
- reduced-motion gaps
- any duplicated style logic discovered during the refactor

- [ ] **Step 4: Run full verification**

Run:

- `npm run test:run`
- `npm run build`

Expected: PASS for the full suite and successful production build.

Manual verification checklist:

- `/` feels visually dominant and matches the approved spec
- `/platform`, `/products`, `/company`, `/resources`, `/contact` all render without broken spacing
- mobile nav works
- product detail pages still load
- resources still download
- contact form still opens WhatsApp correctly
- reduced motion removes or softens ambient animation

- [ ] **Step 5: Commit**

```bash
git add App.tsx components pages tests translations.ts constants.ts index.css tailwind.config.js
git commit -m "feat: finalize aetherflow ecosystem redesign"
```

## Notes For The Implementer

- Use `SOLUTIONS_DATA` as the single source of truth for product content unless the plan explicitly calls for restructuring it.
- Preserve the bilingual architecture. Do not hardcode English-only copy into shared surfaces.
- Keep the homepage cinematic, but do not allow the inner pages to drop back to generic section stacks.
- If `Gallery` and `MiPay` are kept out of the top-level nav for now, ensure they still inherit the global shell and styling baseline.
- Avoid adding unnecessary abstraction beyond the shared primitives listed above.

## Verification Commands Summary

```bash
npm install
npm run test:run -- tests/app-shell.test.tsx
npm run test:run -- tests/design-system.test.ts
npm run test:run -- tests/components/particle-field.test.tsx
npm run test:run -- tests/routes.test.tsx
npm run test:run
npm run build
```
