import { countries } from "@/data/journey";
import { PHASE, timelineFor } from "./timeline";

export type JourneyPoint = "hero" | "countries" | "steps";

/**
 * Scrolls to a moment inside the pinned passport story. Works from anywhere on the page
 * (nav, footer), because it finds the story by its data attribute.
 */
export function scrollToJourney(point: JourneyPoint) {
  const story = document.querySelector<HTMLElement>("[data-journey-story]");
  if (!story) return;
  const t = timelineFor(countries.length);
  const time = point === "hero" ? 0 : point === "countries" ? t.countriesAt : t.total - PHASE.hold;
  const range = story.offsetHeight - window.innerHeight;
  const top = story.getBoundingClientRect().top + window.scrollY + (time / t.total) * range;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
}