import type { CSSProperties } from "react";
import { countries, loaderCopy } from "@/data/journey";
import { FONT_DISPLAY } from "@/components/home-page/PassportJourney/ui/tokens";
import { LOADER } from "../timeline";
import styles from "../passport.module.css";

/**
 * Runs before paint. Records when the loader appeared (so the JavaScript exit lines up with
 * the CSS animation) and hides the loader for visitors who prefer reduced motion.
 * It does not touch any element React renders, so hydration stays clean.
 */
const SKIP_SCRIPT = `window.__pjLoaderStart=performance.now();try{if(matchMedia('(prefers-reduced-motion: reduce)').matches){var s=document.createElement('style');s.textContent='[data-loader]{display:none!important}';document.head.appendChild(s)}}catch(e){}`;

const names = countries.slice(0, LOADER.names);
const fill = loaderCopy.totalSeconds - LOADER.exit;
const per = fill / LOADER.names;

/**
 * Scene 0. A large circle with destination names changing inside it.
 * Names and ring are CSS animations, so they move from the first paint even on slow
 * connections. The circle then flies into the hero circle (useJourneyIntro).
 */
export default function Preloader() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: SKIP_SCRIPT }} />
      <noscript>
        <style>{`[data-loader]{display:none!important}`}</style>
      </noscript>
      <div
        data-loader
        role="status"
        aria-label={loaderCopy.label}
        className="fixed inset-0 z-[70] flex flex-col items-center justify-center gap-8"
        style={{ "--pj-fill": `${fill}s`, "--pj-cycle": `${per * LOADER.names}s` } as CSSProperties}
      >
        <div data-loader-bg className="absolute inset-0 bg-primary" />
        <div data-loader-circle className="relative grid aspect-square w-[min(352px,74vw)] place-items-center">
          <svg viewBox="0 0 100 100" className="absolute inset-0 size-full overflow-visible" aria-hidden="true">
            <circle cx="50" cy="50" r="48" fill="none" className="stroke-secondary" strokeWidth="0.4" />
            <circle
              data-loader-progress
              cx="50"
              cy="50"
              r="48"
              fill="none"
              className={`${styles.loaderRing} stroke-accent`}
              strokeWidth="0.7"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={1}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div data-loader-names className="grid" aria-hidden="true">
            {names.map((c, i) => (
              <span
                key={c.id}
                className={`${FONT_DISPLAY} ${styles.loaderName} col-start-1 row-start-1 text-center text-[clamp(28px,7vw,44px)] leading-none text-secondary`}
                style={{ "--pj-delay": `${i * per}s` } as CSSProperties}
              >
                {c.name}
              </span>
            ))}
          </div>
        </div>
        <p data-loader-label className="relative font-mono text-[12px] font-semibold uppercase tracking-[0.3em] text-secondary/70">
          {loaderCopy.label}
        </p>
      </div>
    </>
  );
}