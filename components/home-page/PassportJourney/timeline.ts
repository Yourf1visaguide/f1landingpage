// Scroll timeline in "units". One unit is one step of scrolling: --pj-unit of the screen height
// (55svh on phones/tablets, 85svh on desktop; see .story in passport.module.css).
// Everything is derived from the number of countries, so adding a country just adds one unit.

/** Loader timing. Whole length is loaderCopy.totalSeconds; `exit` is the fly-into-hero part. */
export const LOADER = {
  exit: 0.9,
  /** How many destination names cycle in the circle (passport.module.css keyframes assume 5). */
  names: 5,
} as const;

export const PHASE = {
  zoom: 1, // hero text fades out, circle + passport grow 1.5x into the centre
  open: 1, // passport moves left and opens, countries text comes in
  perCountry: 1, // one stamp per unit
  close: 1.2, // passport closes, shrinks onto the first step
  steps: 1.4, // route draws through the four steps
  hold: 0.3, // short rest at the end before the page continues
} as const;

export function timelineFor(countryCount: number) {
  const zoomAt = 0;
  const openAt = zoomAt + PHASE.zoom;
  const countriesAt = openAt + PHASE.open;
  const closeAt = countriesAt + countryCount * PHASE.perCountry;
  const stepsAt = closeAt + PHASE.close;
  const total = stepsAt + PHASE.steps + PHASE.hold;
  return { zoomAt, openAt, countriesAt, closeAt, stepsAt, total };
}

/** Height of the scroll container: one --pj-unit per timeline unit, plus the pinned screen. */
export function storyHeight(countryCount: number) {
  return `calc(${timelineFor(countryCount).total} * var(--pj-unit) + 100svh)`;
}