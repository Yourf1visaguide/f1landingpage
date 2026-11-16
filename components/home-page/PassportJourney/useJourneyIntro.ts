"use client";

import { type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { loaderCopy } from "@/data/journey";
import { LOADER } from "./timeline";

gsap.registerPlugin(ScrollTrigger, useGSAP);

declare global {
  interface Window {
    /** performance.now() when the loader first painted (set by the inline script in Preloader). */
    __pjLoaderStart?: number;
  }
}

/** Any of these ends the loader at once, so a visitor is never stuck waiting. */
const SKIP_EVENTS = ["wheel", "touchstart", "pointerdown", "keydown"] as const;

/**
 * Scene 0 and the hero entrance.
 * Loader: names and ring are CSS (Preloader). JavaScript only plays the exit: when the
 * CSS part is done (counted from when the loader first painted, so a slow download does
 * not make it longer), the circle flies into the hero circle and the hero animates in.
 * A tap, swipe, wheel or key press skips straight to the end.
 */
export function useJourneyIntro(stageRef: RefObject<HTMLDivElement | null>) {
  useGSAP(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const html = document.documentElement;
    const loader = document.querySelector<HTMLElement>("[data-loader]");
    const arc = stage.querySelector<SVGGElement>("[data-orbit-arc]");
    const line = stage.querySelector<SVGPathElement>("[data-orbit-line]");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const playArc = (delay: number) => {
      if (!arc || !line || reduce) return;
      gsap.fromTo(arc, { rotation: -170, svgOrigin: "50 50" }, { rotation: 0, svgOrigin: "50 50", duration: 1.5, ease: "power3.out", delay });
      gsap.fromTo(line, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.5, ease: "power2.out", delay });
    };

    if (!loader || reduce) {
      if (loader) loader.style.display = "none";
      playArc(0.2);
      return;
    }

    /* ---------- loader exit ---------- */
    const reveal = Array.from(stage.querySelectorAll<HTMLElement>('[data-scene="hero"] [data-reveal]'));
    const header = stage.querySelector("header");
    const orbitSvg = stage.querySelector("[data-orbit] svg");
    const ppIntro = stage.querySelector("[data-pp-intro]");
    const circle = loader.querySelector<HTMLElement>("[data-loader-circle]")!;
    const bg = loader.querySelector("[data-loader-bg]");
    const progress = loader.querySelector("[data-loader-progress]");
    const label = loader.querySelector("[data-loader-label]");
    const names = loader.querySelector("[data-loader-names]");

    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    html.style.overflow = "hidden";

    gsap.set(reveal, { autoAlpha: 0, y: 34 });
    gsap.set([header, orbitSvg], { autoAlpha: 0 });
    gsap.set(ppIntro, { autoAlpha: 0, scale: 0.6, y: 30 });

    // Seconds the CSS part still has to run (0 if the JavaScript arrived after it finished).
    const elapsed = (performance.now() - (window.__pjLoaderStart ?? 0)) / 1000;
    const exitAt = Math.max(0, loaderCopy.totalSeconds - LOADER.exit - elapsed);
    const exit = LOADER.exit;

    const tl = gsap.timeline();
    const skip = () => tl.progress(1);
    const stopListening = () => SKIP_EVENTS.forEach((e) => window.removeEventListener(e, skip));

    const finish = () => {
      stopListening();
      loader.style.display = "none";
      html.style.overflow = "";
      ScrollTrigger.refresh();
    };

    const hero = () => stage.querySelector('[data-slot="hero"]')!.getBoundingClientRect();

    // Circle flies into the hero circle
    tl.to([label, names], { autoAlpha: 0, duration: 0.25 }, exitAt);
    tl.to(
      circle,
      {
        x: () => {
          const a = circle.getBoundingClientRect();
          const b = hero();
          return b.left + b.width / 2 - (a.left + a.width / 2);
        },
        y: () => {
          const a = circle.getBoundingClientRect();
          const b = hero();
          return b.top + b.height / 2 - (a.top + a.height / 2);
        },
        scale: () => hero().width / circle.getBoundingClientRect().width,
        duration: exit,
        ease: "power3.inOut",
      },
      exitAt,
    );
    tl.to(progress, { autoAlpha: 0, duration: 0.3 }, exitAt);
    tl.to(bg, { autoAlpha: 0, duration: exit * 0.85, ease: "power1.inOut" }, exitAt + 0.1);

    // Hero comes in as the circle lands
    const landAt = exitAt + exit - 0.12;
    tl.set(orbitSvg, { autoAlpha: 1 }, landAt);
    tl.set(circle, { autoAlpha: 0 }, landAt);
    tl.add(() => playArc(0), landAt);
    tl.to(ppIntro, { autoAlpha: 1, scale: 1, y: 0, duration: 0.9, ease: "back.out(1.6)" }, landAt - 0.1);
    tl.to(header, { autoAlpha: 1, duration: 0.6 }, landAt);
    tl.to(reveal, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.07 }, landAt);
    tl.add(finish, landAt + 0.15);

    SKIP_EVENTS.forEach((e) => window.addEventListener(e, skip, { passive: true, once: true }));

    return () => {
      stopListening();
      html.style.overflow = "";
    };
  });
}