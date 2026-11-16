"use client";

import { useRef } from "react";
import { aboutCopy, aboutStats, promises } from "@/data/home-page/about";
import BrushUnderline from "@/components/home-page/PassportJourney/ui/BrushUnderline";
import { FONT_BODY, FONT_DISPLAY, FONT_EDITORIAL } from "@/components/home-page/PassportJourney/ui/tokens";
import IdentityCard from "./IdentityCard";
import { useAboutAnimation } from "./useAboutAnimation";

const pad = (n: number) => String(n).padStart(2, "0");
const format = (n: number) => n.toLocaleString("en-IN");

/** About us: who we are, what we promise, numbers, and a real office you can visit. */
export default function AboutSection() {
  const rootRef = useRef<HTMLElement>(null);
  useAboutAnimation(rootRef);

  return (
    <section
      ref={rootRef}
      id="about"
      aria-labelledby="about-title"
      className={`relative overflow-hidden bg-primary/50 px-4 py-20 text-secondary sm:px-8 sm:py-24 lg:px-14 lg:py-32 ${FONT_BODY}`}
    >
      <div className="mx-auto max-w-[1500px]">
        <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.3em] text-accent lg:text-[14px]">{aboutCopy.label}</p>

        {/* Phones/tablets: heading, card, promises. Desktop: text left, card right (sticky). */}
        <div className="mt-8 grid gap-12 lg:mt-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:grid-rows-[auto_1fr] xl:gap-x-[clamp(40px,5vw,96px)] xl:gap-y-0">
          <div className="min-w-0 xl:col-start-1 xl:row-start-1">
            <h2 id="about-title" className={`${FONT_DISPLAY} text-[clamp(44px,11vw,72px)] leading-[.92] lg:text-[clamp(64px,6vw,118px)]`}>
              <span className="block overflow-hidden pb-[0.06em]">
                <span data-about-line className="block">
                  {aboutCopy.heading}
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.12em]">
                <span data-about-line className={`${FONT_EDITORIAL} relative block w-fit font-medium italic leading-none text-accent`}>
                  {aboutCopy.accent}
                </span>
              </span>
              <span aria-hidden="true" className="block">
                <BrushUnderline className="ml-[18%] -mt-2 block h-3 w-[46%] origin-left lg:h-4" />
              </span>
            </h2>

            <p data-about-reveal className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-secondary/70 lg:mt-8 lg:text-[clamp(17px,1.35vw,21px)]">
              {aboutCopy.intro}
            </p>
          </div>

          {/* Passport-style profile card */}
          <div className="min-w-0 xl:sticky xl:top-24 xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:self-start">
            <div className="mx-auto max-w-[620px] xl:max-w-none">
              <IdentityCard />
            </div>
          </div>

          {/* Promises */}
          <div className="min-w-0 xl:col-start-1 xl:row-start-2">
            <h3 data-about-reveal className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-secondary/80 xl:mt-16">
              {aboutCopy.promisesTitle}
            </h3>
            <ol className="mt-4">
              {promises.map((p, i) => (
                <li key={p.title} data-about-reveal className="relative grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 py-5 sm:gap-x-8">
                  <span aria-hidden="true" data-about-rule className="absolute inset-x-0 top-0 h-px origin-left bg-secondary/15" />
                  <span className={`${FONT_DISPLAY} text-[28px] leading-none text-accent sm:text-[34px]`}>{pad(i + 1)}</span>
                  <div className="min-w-0">
                    <p className="text-[17px] font-bold leading-snug sm:text-[19px]">{p.title}</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-secondary/65 sm:text-[16px]">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Numbers */}
        <dl className="mt-20 grid grid-cols-2 border-y border-secondary/15 lg:mt-28 lg:grid-cols-4">
          {aboutStats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse gap-2 px-2 py-8 sm:px-6 lg:py-10 ${i % 2 ? "border-l border-secondary/15" : ""} ${i > 1 ? "border-t border-secondary/15 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary/70 sm:text-[12px]">{s.label}</dt>
              <dd className={`${FONT_DISPLAY} text-[clamp(44px,10vw,64px)] leading-none lg:text-[clamp(56px,5vw,92px)]`}>
                <span data-count={s.value}>{format(s.value)}</span>
                <span className="text-accent">{s.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>

        
      </div>
    </section>
  );
}