import { letterCopy, letterStamps } from "@/data/home-page/finale";
import { FONT_DISPLAY } from "@/components/home-page/PassportJourney/ui/tokens";
import styles from "./finale.module.css";

const STAMP_INKS = ["#b91c1c", "#1f4e9c", "#1d7a55"];

/** Top of the letter: airmail label, from/to lines, postage stamps and a postmark. Decorative. */
export default function LetterHead({ year }: { year: number }) {
  return (
    <div aria-hidden="true" className="flex items-start justify-between gap-6">
      <div className="min-w-0">
        <p className="inline-flex items-center gap-3 font-mono text-[10.5px] font-semibold uppercase tracking-[0.26em] text-[#1f4e9c]">
          <span className={`${styles.airmail} h-3 w-10 rounded-sm`} />
          {letterCopy.airmail}
        </p>
        <p className="mt-4 text-[13.5px] text-secondary/60 sm:text-[14.5px]">{letterCopy.from}</p>
        <p className="mt-1 text-[13.5px] text-secondary/60 sm:text-[14.5px]">{letterCopy.to}</p>
      </div>
      <div className="relative flex shrink-0 items-start gap-2 pr-2 pt-1">
        {letterStamps.map((c, i) => (
          <span
            key={c.id}
            className={`${styles.stamp} ${i > 0 ? "hidden sm:block" : "block"} drop-shadow-[0_2px_3px_rgb(0_0_0/0.15)]`}
            style={{ transform: `rotate(${[-4, 3, -2][i]}deg)` }}
          >
            <span
              className="flex h-[74px] w-[60px] flex-col items-center justify-center gap-1 border bg-[#fff8ee] text-center sm:h-[84px] sm:w-[68px]"
              style={{ borderColor: STAMP_INKS[i % 3], color: STAMP_INKS[i % 3] }}
            >
              <span className={`${FONT_DISPLAY} px-1 text-[12px] uppercase leading-[1.05] tracking-wide`}>{c.name}</span>
              <span className="text-[16px] leading-none">✈</span>
              <span className="font-mono text-[7px] font-semibold tracking-[0.2em]">AIR MAIL</span>
            </span>
          </span>
        ))}
        <span className="absolute -left-10 top-10 grid size-[74px] -rotate-12 place-items-center rounded-full border-2 border-secondary/35 text-center font-mono text-[8px] font-semibold leading-tight tracking-[0.14em] text-secondary/50 sm:-left-12">
          <span>
            JALANDHAR
            <span className="block text-[12px] tracking-[0.08em]">{year}</span>
            PUNJAB
          </span>
        </span>
      </div>
    </div>
  );
}