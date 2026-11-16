import { letterCopy } from "@/data/home-page/finale";
import { FONT_DISPLAY, FONT_EDITORIAL } from "@/components/home-page/PassportJourney/ui/tokens";
import LetterHead from "./LetterHead";

/** First lines of the letter: airmail head, label and the "Come say hello." heading. */
export default function LetterTop({ year, headingId }: { year: number; headingId: string }) {
  return (
    <div>
      <LetterHead year={year} />
      <p className="mt-8 font-mono text-[10.5px] font-semibold uppercase tracking-[0.26em] text-accent sm:mt-10">{letterCopy.label}</p>
      <h2 id={headingId} className={`${FONT_DISPLAY} mt-3 text-[clamp(48px,9vw,96px)] leading-[0.92] text-secondary`}>
        {letterCopy.heading} <span className={`${FONT_EDITORIAL} font-medium italic text-accent`}>{letterCopy.accent}</span>
      </h2>
    </div>
  );
}