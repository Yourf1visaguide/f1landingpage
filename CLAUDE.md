@AGENTS.md

# Your F1 Visa Guide — project notes for Claude

Study-abroad / visa consultancy site for Indian students (office in Jalandhar, Punjab).
Live preview: yourf1.pages.dev. Owner: Amardeep.

## Stack
- Next.js 16 App Router, `output: "export"` (static), deployed on Cloudflare Pages.
- Tailwind CSS v4, TypeScript, GSAP 3 + ScrollTrigger + `@gsap/react` (`useGSAP`), lucide-react.
- Home page: `app/(pages)/page.tsx`. Country landing pages: `app/(pages)/(landing-page)/{usa,netherlands,dubai,tourist-visa}`.

## Hard rules
- Do NOT edit `app/globals.css`. Use its tokens through Tailwind: `bg-primary` (#f7f3eb cream), `text-secondary` / `bg-secondary` (#171717), `text-accent` / `bg-accent` (#b91c1c red), `accent-soft`, `muted`, `line`, `card`.
- Fonts come from `components/home-page/PassportJourney/ui/tokens.ts`: `FONT_DISPLAY` (Anton), `FONT_EDITORIAL` (Playfair italic), `FONT_BODY` (Manrope). Professional fonts only, no handwriting fonts.
- Reuse buttons: `RedButton` (`@/components/Red-Buttons`) and `BlackButton` (`@/components/BlackButton`). Props: text, href, icon, className, onClick. An `http` href opens in a new tab.
- WhatsApp: `phone` and `handleWhatsappClickWithMessage()` from `@/function/handleWhatsapp`.
- Office details: `OFFICE` in `data/home-page/about.ts`. Country URLs: `SITE` and `countries` in `data/journey.ts`.
- Safe wording: never promise or "guarantee" a visa. Visa decisions are made only by embassies.
- Passport artwork must stay legally safe: no national emblem.
- Always respect `prefers-reduced-motion` (`gsap.matchMedia` / `motion-reduce:`), WCAG AA, mobile first.
- Never mix Tailwind `translate-*` / `scale-*` classes with GSAP transforms on the same element.
- CSS modules: every selector must start with a local class (Turbopack "pure selector" rule).
- Keep components small and split by responsibility. Copy and text go in `data/home-page/*.ts`, not in components.

## Working style
- Inspect the existing files before changing anything. Prefer reuse, then extend, then create.
- Explain changes simply, step by step. Show exactly which lines to replace.
- Discuss bigger design choices first, giving options plus a recommendation.
- Check that `npx tsc --noEmit` and `npm run build` pass before saying something is done.

## Home page sections (`components/home-page/`)
1. `PassportJourney/`: loader, hero, countries (one stamp per country), 4 steps. A pinned, scroll-scrubbed GSAP story.
   - Timing is in `timeline.ts`. One scroll unit is `--pj-unit` (55svh on phones, 85svh from 1024px, set in `passport.module.css` `.story`).
   - The loader name cycle and ring are CSS. `useJourneyIntro` plays only the exit, and any tap or swipe skips it. The loader plays on every reload (wanted).
   - Stamps use a baked texture mask (`public/textures/stamp-ink.png`, class `.ink`). Never use SVG filters (`feTurbulence`) there: they made iPhones stutter.
   - Adding a country in `data/journey.ts` updates everything automatically.
2. `Testimonials/`: "Student Stories" from 3 public Google Sheets, with filters, a dialog and "show more" (4 on phones, 8 from 1024px). Live.
3. `faq/`: FAQ with load more, share links `#faq-<id>` and JSON-LD. Built, commented out in page.tsx.
4. `AboutSection/`: built, commented out. Its office block moved to the Finale footer.
5. `Finale/`: plane and clouds, boarding-pass CTA, then an airmail envelope whose letter becomes the site footer. Built, commented out. Must be the last section.

## Status and next steps
- iPhone smoothness fixes are done and the client approved them.
- Fallback if phones ever feel stuck: normal scrolling on phones, keeping the pinned story on desktop only.
- Still to do: Google reviews postcards (data in `data/home-page/reviews.ts`, not in the repo yet); enable FAQ, About and Finale on the home page; trim unused font weights.