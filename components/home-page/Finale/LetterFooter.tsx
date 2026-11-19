"use client";

import type { MouseEvent } from "react";
import { ArrowUp, ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { OFFICE } from "@/data/home-page/about";
import { letterCopy, pageLinks, socialLinks, visaLinks } from "@/data/home-page/finale";
import { scrollToJourney } from "@/components/home-page/PassportJourney/scrollToJourney";
import LetterTop from "./LetterTop";
import styles from "./finale.module.css";

const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";
const colTitle = "font-mono text-[10.5px] font-semibold uppercase tracking-[0.26em] text-accent";
const linkClass = `inline-flex w-fit items-center gap-1.5 text-[15.5px] text-secondary/75 transition-colors hover:text-accent ${focus}`;

type PageLink = (typeof pageLinks)[number];

/** Instagram outline (lucide no longer ships brand icons). */
// function InstagramIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" className="size-4">
//       <rect x="2" y="2" width="20" height="20" rx="5" />
//       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//       <path d="M17.5 6.5h.01" />
//     </svg>
//   );
// }

/** Facebook icon (path from simpleicons.org), in Facebook's brand blue. */
export function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="currentColor"
      aria-hidden="true"
      className="size-5 p-0.5 border rounded-sm "
    >
      <path d="M13.5 21v-8.2h2.8l.42-3.25H13.5V7.48c0-.94.26-1.58 1.61-1.58h1.72V3a23 23 0 0 0-2.5-.13c-2.48 0-4.18 1.51-4.18 4.29v2.39H7.34v3.25h2.81V21h3.35Z" />
    </svg>
  );
}

function goToSection(e: MouseEvent<HTMLAnchorElement>, link: PageLink) {
  e.preventDefault();
  if ("journey" in link.target) return scrollToJourney(link.target.journey);
  const el = document.getElementById(link.target.id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
}

/**
 * The rest of the letter, which is the page footer: address, phone, email, links and the
 * bottom line. Each part has data-finale-line so it can appear one by one as it scrolls in.
 */
export default function LetterFooter({ year }: { year: number }) {
  return (
    // Pulled up over the bottom of the pinned letter (66svh tall, its top lines take ~360px),
    // so this paper continues the same sheet. No overlap when the animation is off.
    <footer
      aria-label="Site footer"
      className="relative z-30 mt-[min(0px,calc(300px-68svh))] bg-[#efe4cf] motion-reduce:mt-0 "
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8 lg:px-14">
        <div
          className={`${styles.paper} relative border-x border-b border-secondary/10 px-4 pb-8 pt-6 shadow-[0_40px_60px_-40px_rgb(90_60_20/0.45)] motion-reduce:rounded-t-xl motion-reduce:border-t motion-reduce:pt-8 sm:px-10 lg:px-14 `}
        >
          {/* Shown here only when the envelope animation is off; otherwise it is on the animated letter above. */}
          <div className="hidden pb-8  motion-reduce:block">
            <LetterTop year={year} headingId="contact-title-static" />
          </div>

          <div className="grid  gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
            <div className="min-w-0 ">
              <address className="flex flex-col gap-5 not-italic">
                <a
                  data-finale-line
                  href={OFFICE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex gap-3 text-[16px] leading-relaxed text-secondary/80 sm:text-[17px] ${focus}`}
                >
                  <MapPin className="mt-1 size-5 shrink-0 text-accent" strokeWidth={1.8} aria-hidden="true" />
                  <span>
                    {OFFICE.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                    <span className="mt-1 inline-flex items-center gap-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent group-hover:underline">
                      {letterCopy.directions}
                      <ArrowUpRight size={13} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <span className="sr-only"> (opens Google Maps in a new tab)</span>
                  </span>
                </a>
                <a data-finale-line href={OFFICE.phoneHref} className={`inline-flex w-fit items-center gap-3 text-[17px] font-bold text-secondary hover:text-accent ${focus}`}>
                  <Phone className="size-5 text-accent" strokeWidth={1.8} aria-hidden="true" />
                  {OFFICE.phoneDisplay}
                </a>
                <a data-finale-line href={`mailto:${OFFICE.email}`} className={`inline-flex w-fit items-center gap-3 text-[17px] font-bold text-secondary hover:text-accent ${focus}`}>
                  <Mail className="size-5 text-accent" strokeWidth={1.8} aria-hidden="true" />
                  {OFFICE.email}
                </a>
              </address>
            </div>

            <nav aria-label="Footer" className="grid min-w-0 grid-cols-2 gap-x-8 gap-y-10">
              <div data-finale-line className="flex flex-col gap-3">
                <p className={colTitle}>{letterCopy.pageTitle}</p>
                {pageLinks.map((l) => (
                  <a key={l.label} href={"journey" in l.target ? "#" : `#${l.target.id}`} onClick={(e) => goToSection(e, l)} className={linkClass}>
                    {l.label}
                  </a>
                ))}
              </div>
              <div data-finale-line className="flex flex-col gap-3">
                <p className={colTitle}>{letterCopy.visasTitle}</p>
                {visaLinks.map((l) => (
                  <a key={l.label} href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                ))}
                <p className={`${colTitle} mt-5`}>{letterCopy.followTitle}</p>
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={`${linkClass} flex items-center`}>
                    {s.icon === "facebook" 
                    ? <div className="text-blue-600"><FacebookIcon /></div> 
                    : <div className="text-green-600">
                      <MessageCircle size={16} strokeWidth={1.8} aria-hidden="true" />
                      </div>}
                    {s.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <div data-finale-line className="mt-14 flex flex-col gap-4 border-t border-secondary/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1 text-[13.5px] text-secondary/55">
              <p>
                © {year} {letterCopy.rights}
              </p>
              <p>{letterCopy.disclaimer}</p>
            </div>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
              className={`inline-flex w-fit items-center gap-2 rounded-full border border-secondary/25 px-4 py-2 text-[13.5px] font-semibold text-secondary transition hover:border-secondary cursor-pointer ${focus}`}
            >
              <ArrowUp size={15} aria-hidden="true" />
              {letterCopy.backToTop}
            </button>
          </div>
        </div>
      </div>
      {/* <div aria-hidden="true" className={`${styles.airmail} mt-10 h-3`} /> */}
    </footer>
  );
}