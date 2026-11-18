"use client";

import { type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Plane route, in the trail SVG's 1000×600 box: start, control point, end (quadratic curve).
const P0 = { x: -60, y: 340 };
const C = { x: 500, y: 60 };
const P2 = { x: 1080, y: 140 };

const bezier = (t: number, a: number, c: number, b: number) => (1 - t) * (1 - t) * a + 2 * (1 - t) * t * c + t * t * b;
const slope = (t: number, a: number, c: number, b: number) => 2 * (1 - t) * (c - a) + 2 * t * (b - c);

/**
 * Scroll-scrubbed timeline for the finale (0 → 1 over the pinned scroll):
 * 0.00–0.40 plane flies along its curve, trail draws behind it
 * 0.06–0.42 boarding pass appears small and zooms to full size (held until 0.58)
 * 0.58–0.72 pass lifts away, the desk colour fades in, envelope rises with the letter
 * 0.74–0.80 flap opens
 * 0.80–0.94 letter slides out while the envelope drops away, then a short hold
 * The footer (the rest of the letter) slides up over the bottom of the pinned letter, so
 * the two read as one sheet; its lines appear one by one.
 */
export function useFinaleAnimation(storyRef: RefObject<HTMLElement | null>, stageRef: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const story = storyRef.current;
      const stage = stageRef.current;
      if (!story || !stage) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const q = <T extends Element = HTMLElement>(sel: string) => Array.from(stage.querySelectorAll<T>(sel));
        const plane = stage.querySelector<HTMLElement>("[data-finale-plane]");
        const trail = stage.querySelector<SVGPathElement>("[data-finale-trail]");
        const ticket = stage.querySelector<HTMLElement>("[data-finale-ticket] > *");
        const desk = stage.querySelector<HTMLElement>("[data-finale-desk]");
        const env = q("[data-finale-env]");
        const flapBox = stage.querySelector<HTMLElement>("[data-finale-flapbox]");
        const flap = stage.querySelector<SVGElement>("[data-finale-flap]");
        const letter = stage.querySelector<HTMLElement>("[data-finale-letter]");
        const envWrap = stage.querySelector<HTMLElement>("[data-finale-envwrap]");
        const [cloudsBack, cloudsMid, cloudsFront] = ["back", "mid", "front"].map((k) => stage.querySelector(`[data-finale-clouds="${k}"]`));
        if (!plane || !trail || !ticket || !desk || !flapBox || !flap || !letter || !envWrap) return;

        const vh = (n: number) => () => (window.innerHeight * n) / 100;
        const flight = { t: 0 };
        const placePlane = () => {
          const w = (stage.clientWidth+150) / 1000;
          const h = (stage.clientHeight) /600;
          const t = flight.t;
          const angle = Math.atan2(slope(t, P0.y, C.y, P2.y) * h, slope(t, P0.x, C.x, P2.x) * w);
          gsap.set(plane, {
            x: bezier(t, P0.x, C.x, P2.x) * w,
            y: bezier(t, P0.y, C.y, P2.y) * h,
            rotation: (angle * 180) / Math.PI,
          });
          trail.style.strokeDashoffset = String(1 - t);
        };
        gsap.set(plane, { xPercent: -50, yPercent: -50, opacity: 1 });
        gsap.set(envWrap, { opacity: 1 });
        placePlane();

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: story,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
            onRefresh: placePlane,
          },
        });

        tl.to(flight, { t: 1, duration: 0.4, ease: "sine.inOut", onUpdate: placePlane }, 0)
          .fromTo(cloudsBack, { xPercent: 0 }, { xPercent: -6, duration: 0.7 }, 0)
          .fromTo(cloudsMid, { xPercent: 0 }, { xPercent: -14, duration: 0.7 }, 0)
          .fromTo(cloudsFront, { xPercent: 0, yPercent: 0 }, { xPercent: -24, yPercent: 10, duration: 0.7 }, 0)
          // Boarding pass: small near the plane, then zooms to the centre
          .fromTo(ticket, { scale: 0.0,  y: vh(-19), xPercent:-38, autoAlpha: 0 }, { autoAlpha: 1, duration: 0.06, delay:0.040,  }, 0.06)
          .to(ticket, { scale: 1, y: 0, xPercent:0, duration: 0.32, ease: "power2.inOut" }, 0.1)
          // Hold, then the pass lifts away and the envelope arrives
          .to(ticket, { y: vh(-70), scale: 0.9, autoAlpha: 0, duration: 0.12, ease: "power2.in" }, 0.58)
          .to(desk, { opacity: 1, duration: 0.1 }, 0.6)
          .fromTo(env, { y: vh(70) }, { y: 0, duration: 0.12, ease: "power2.out" }, 0.6)
          .fromTo(letter, { y: vh(98) }, { y: vh(28), duration: 0.12, ease: "power2.out" }, 0.6)
          // Flap flips open; halfway it moves behind the letter
          .fromTo(flap, { scaleY: 1 }, { scaleY: -1, transformOrigin: "50% 0%", duration: 0.06, ease: "power1.inOut" }, 0.74)
          .set(flapBox, { zIndex: 2 }, 0.77)
          // Letter slides out, envelope drops away
          .to(letter, { y: 0, duration: 0.14, ease: "power2.inOut" }, 0.8)
          .to(env, { y: vh(75), duration: 0.14, ease: "power2.in" }, 0.8)
          .to({}, { duration: 0.12 }, 0.94);

        // Footer lines appear one by one as they scroll into view
        const footerLines = Array.from(story.parentElement?.querySelectorAll<HTMLElement>("[data-finale-line]") ?? []);
        gsap.set(footerLines, { autoAlpha: 0 });
        ScrollTrigger.batch(footerLines, {
          start: "top 92%",
          once: true,
          onEnter: (els) => gsap.fromTo(els, { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out", stagger: 0.14 }),
        });

        // Sections above (stories, FAQ) can change height after they load. Re-measure the
        // scroll positions when the page height changes, so the scene stays in sync.
        let refreshTimer = 0;
        const resizeObserver = new ResizeObserver(() => {
          window.clearTimeout(refreshTimer);
          refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 200);
        });
        resizeObserver.observe(document.body);

        return () => {
          resizeObserver.disconnect();
          window.clearTimeout(refreshTimer);
          trail.style.strokeDashoffset = "";
        };
      });
    },
    { scope: stageRef },
  );
}