# PRD: TBR Tamer - 404 Page

## 1. Project Overview

- **Product Name:** TBR Tamer
- **Feature:** Custom 404 (Not Found) Page
- **One-line Description:** A branded, book-themed 404 page that warmly redirects lost users back to the main site
- **Primary Problem:** Users who hit a non-existent route see a generic Next.js error page that breaks the brand experience and offers no helpful navigation
- **Key Success Metrics:**
  - 404 page matches the existing TBR Tamer brand and design language
  - Users can navigate back to the homepage or key sections within one click
  - Page loads instantly with no additional dependencies
- **Target Platform:** Web (responsive -- mobile, tablet, desktop)

---

## 2. Technical Foundation

### Tech Stack (Existing -- No Changes)

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, RSC) |
| UI Components | shadcn/ui (new-york style) + Radix UI |
| Styling | Tailwind CSS v4 (OKLCH CSS variables) |
| Icons | Lucide React v0.563.0 |
| Fonts | Playfair Display (headings), Dancing Script (decorative accents), Geist (body) |
| Auth | Clerk (`@clerk/nextjs`) |
| Utilities | clsx, tailwind-merge via `cn()` helper |

### Project Conventions

- **File naming:** kebab-case for files, PascalCase for components
- **Component structure:** Functional components, default exports for pages, named exports for shared components
- **Styling approach:** Tailwind utility classes with `cn()` merging; brand colors applied via direct hex values (`#1e3a4a`, `#FDBA31`, `#faf8f5`) and CSS variables
- **Layout pattern:** All pages wrap content with the shared Nav and Footer from `components/landing/`

---

## 3. Design System & UI Consistency

### Visual Language (Existing)

| Token | Value |
|---|---|
| Primary Dark (Nav/Footer/Hero BG) | `#1e3a4a` |
| Accent Gold (CTAs, highlights) | `#FDBA31` |
| Cream Background | `#faf8f5` |
| White | `#ffffff` |
| Border Radius | `0.625rem` (10px) |
| Container Padding | `px-4 sm:px-6 lg:px-8` |
| Section Padding | `py-20` |

### Typography

| Element | Font | Classes |
|---|---|---|
| Page Heading (404 number) | Playfair Display | `text-8xl md:text-9xl font-bold` |
| Subheading | Playfair Display | `text-3xl md:text-4xl font-bold` |
| Decorative Accent | Dancing Script | `italic text-[#FDBA31]` |
| Body Text | Geist (default sans) | `text-lg text-gray-300` |
| Button Label | Geist (default sans) | Inherited from Button component |

### Copy & Tone

- **Tone:** Playful and warm, book-themed
- **Headline:** "404" (large, dramatic Playfair Display)
- **Subheading:** "This Page Got Lost Between the Chapters"
- **Decorative accent:** "let's find your next read" (Dancing Script, gold, italic)
- **Body text:** "The page you're looking for doesn't exist -- but your TBR isn't going anywhere."
- **CTA Button Label:** "Back to Home"
- **Secondary Link Label:** "Browse Features"
- **Error message style:** Friendly, never technical

---

## 4. Security & Scalability Requirements

### Performance

- **Page type:** Static (no data fetching, no API calls, no auth required)
- **Rendering:** Server Component (RSC) -- zero client-side JavaScript
- **Load target:** Instant (no external assets beyond existing fonts)
- **SEO:** Include `<title>` of "Page Not Found | TBR Tamer" and appropriate meta description

### Security

- No user input on this page
- No API calls
- No sensitive data displayed
- Inherits existing Clerk auth state via Nav component (shows Sign In or User avatar)

---

## 5. Feature Specification

### Feature Name: Custom 404 Page

**User Story:** As a visitor who navigates to a non-existent page, I want to see a branded error page with helpful navigation so that I can easily return to the main site without feeling lost or confused.

**Acceptance Criteria:**

- [ ] Page renders for any unmatched route in the application
- [ ] Displays the existing Nav component (fixed, with auth state)
- [ ] Displays a book-themed illustration using Lucide icons (BookX or BookOpen combined with a search/question mark motif)
- [ ] Shows "404" in large Playfair Display heading
- [ ] Shows subheading "This Page Got Lost Between the Chapters" in Playfair Display
- [ ] Shows decorative text "let's find your next read" in Dancing Script, gold, italic
- [ ] Shows body text explaining the page doesn't exist
- [ ] Displays a primary CTA button "Back to Home" linking to `/`
- [ ] Displays a secondary link "Browse Features" linking to `/#features`
- [ ] Displays the existing Footer component
- [ ] Page is fully responsive (mobile, tablet, desktop)
- [ ] Background uses the cream color `#faf8f5` for the content area
- [ ] Visual hierarchy: Illustration > 404 > Subheading > Decorative text > Body > CTAs
- [ ] No layout shift or loading states needed (fully static)

**Implementation Tasks (ordered sequence):**

1. **Task:** Create the 404 page file
   - **Details:** In Next.js App Router, a custom 404 page is created as `app/not-found.tsx`. This is a special file that Next.js automatically renders for any unmatched route. It must export a default React component. It should be a Server Component (no `"use client"` directive).
   - **Files to create:** `app/not-found.tsx`

2. **Task:** Build the page layout structure
   - **Details:** The page must include the existing Nav and Footer components, matching the pattern used by other pages (about, privacy, terms). The content area sits between Nav and Footer with `pt-16` to offset the fixed navbar height of `h-16`.
   - **Structure:**
     ```
     <>
       <Nav />
       <main className="min-h-screen bg-[#faf8f5] flex items-center justify-center pt-16">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
           {/* Illustration */}
           {/* 404 Heading */}
           {/* Subheading */}
           {/* Decorative text */}
           {/* Body text */}
           {/* CTA buttons */}
         </div>
       </main>
       <Footer />
     </>
     ```
   - **Imports:** `Nav` from `@/components/landing/nav`, `Footer` from `@/components/landing/footer`
   - **Files to modify:** None (new file only)

3. **Task:** Create the book-themed illustration
   - **Details:** Compose a visual using Lucide React icons to create a book-themed "not found" illustration. Use `BookOpen` (size 64, stroke `#1e3a4a`) as the primary icon, placed inside a rounded container with a soft shadow. Add a small `SearchX` icon (size 24, `#FDBA31`) positioned as an overlay badge in the top-right corner of the container to convey "not found." The container should be a `div` with `bg-white rounded-full p-8 shadow-xl inline-flex items-center justify-center relative mb-8`.
   - **Icons to import:** `BookOpen`, `SearchX` from `lucide-react`
   - **Files to modify:** `app/not-found.tsx`

4. **Task:** Add typography and messaging content
   - **Details:**
     - "404" heading: `<h1>` with Playfair Display font class, `text-8xl md:text-9xl font-bold text-[#1e3a4a] mb-4`
     - Subheading: `<h2>` with Playfair Display, `text-2xl md:text-3xl font-bold text-[#1e3a4a] mb-3`
     - Decorative text: `<p>` with Dancing Script (`font-[var(--font-script)]`), `text-xl italic text-[#FDBA31] mb-6`
     - Body: `<p>` with default font, `text-lg text-gray-600 max-w-md mx-auto mb-10`
   - **Font imports:** Import `playfairDisplay` from the font configuration used in other components (check how hero.tsx and other landing components import fonts)
   - **Files to modify:** `app/not-found.tsx`

5. **Task:** Add navigation CTAs
   - **Details:**
     - Primary CTA: Use the existing shadcn `Button` component. Link wrapping with Next.js `Link` component. Styled as `bg-[#FDBA31] text-white hover:bg-[#FDBA31]/90 text-lg px-8 py-3 rounded-lg font-semibold`. Label: "Back to Home". Href: `/`
     - Secondary link: Use a `Link` component styled as `text-[#1e3a4a] hover:text-[#FDBA31] underline underline-offset-4 font-medium`. Label: "Browse Features". Href: `/#features`
     - Layout: Stack vertically on mobile with `flex flex-col sm:flex-row items-center justify-center gap-4`
   - **Imports:** `Button` from `@/components/ui/button`, `Link` from `next/link`
   - **Files to modify:** `app/not-found.tsx`

6. **Task:** Add metadata
   - **Details:** Export a `metadata` object from `app/not-found.tsx` with:
     ```ts
     export const metadata = {
       title: "Page Not Found | TBR Tamer",
       description: "The page you're looking for doesn't exist. Head back to TBR Tamer to organize your reading list.",
     }
     ```
   - **Files to modify:** `app/not-found.tsx`

**Edge Cases & Error Handling:**

- **Nested routes:** Next.js App Router automatically uses the root `not-found.tsx` for all unmatched routes, no additional configuration needed
- **Auth state:** Nav component already handles signed-in vs signed-out states via Clerk -- no special handling needed on the 404 page
- **Mobile viewport:** All content centered and stacked vertically; illustration scales down; heading sizes reduce via responsive classes
- **Dark mode:** If `next-themes` dark mode is toggled, the page inherits the existing dark mode CSS variable overrides from `globals.css`. The hardcoded hex colors (`#1e3a4a`, `#FDBA31`) will remain consistent. Body text uses `text-gray-600` which has reasonable dark mode contrast. No additional dark mode work required for v1.
- **Direct URL access:** Works identically whether the user types a bad URL directly or follows a broken link

**Related Features/Dependencies:**

- **Depends on:** Nav component (`components/landing/nav.tsx`), Footer component (`components/landing/footer.tsx`), Button component (`components/ui/button.tsx`)
- **No downstream dependencies**

---

## 6. Data Models & Relationships

No data models required. This is a static, presentational page with no database interaction.

---

## 7. API Specifications

No API endpoints required. This page makes no server or client-side API calls.

---

## 8. File Structure & Organization

**Files to create:**

```
/app
  not-found.tsx    <-- NEW: Custom 404 page
```

**Files referenced (read-only, no modifications):**

```
/components
  /landing
    nav.tsx          <-- Existing Nav component (imported)
    footer.tsx       <-- Existing Footer component (imported)
  /ui
    button.tsx       <-- Existing Button component (imported)
/app
  layout.tsx         <-- Existing root layout (wraps not-found.tsx automatically)
  globals.css        <-- Existing styles (inherited)
```

**Total files changed:** 1 new file created. 0 existing files modified.

---

## Checklist

- [x] Tech stack explicitly stated
- [x] Design system defined with specific values
- [x] Tasks ordered sequentially
- [x] File paths provided
- [x] Error cases covered
- [x] Security considerations included
- [x] Scalability approach specified
- [x] Component/pattern reuse noted (Nav, Footer, Button)
- [x] No ambiguous language
- [x] Success criteria testable
