import styles from "./finale.module.css";

const PAPER = "#efe4cf";
const SHADE = "#e3d4b6";
const EDGE = "#d2c19f";

/**
 * Airmail envelope in three layers so the letter can sit between them:
 * back (behind the letter), flap (flips open) and front pocket (in front of the letter).
 * Rendered as separate elements; FinaleSection stacks the letter between back and pocket.
 */
export function EnvelopeBack() {
  return <div aria-hidden="true" className="absolute inset-0 rounded-md" style={{ background: SHADE }} />;
}

export function EnvelopeFlap() {
  return (
    <svg data-finale-flap viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true" className="absolute  inset-x-0 top-0 h-[62%] w-full overflow-visible ">
      <path d="M0 0H1000L500 400Z" fill={SHADE} stroke={EDGE} strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function EnvelopePocket() {
  return (
    <div aria-hidden="true" className="absolute inset-0 shadow-md ">
      <svg viewBox="0 0 1000 500" preserveAspectRatio="none" className="absolute inset-0 size-full">
        <path d="M0 110L500 330L1000 110V500H0Z" fill={PAPER} />
        <path d="M0 110L500 330L1000 110" fill="none" stroke={EDGE} strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className={`${styles.airmail} absolute inset-x-0 bottom-0 h-3`} />
      <div className="absolute bottom-[14%] right-[6%] grid size-[clamp(64px,8vw,92px)] place-items-center rounded-full border-2 border-secondary/30 text-center font-mono text-[9px] font-semibold uppercase leading-relaxed tracking-[0.2em] text-secondary/45">
        Jalandhar
        <br />
        Punjab
      </div>
    </div>
  );
}