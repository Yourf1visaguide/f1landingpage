import { faqCopy } from "@/data/home-page/faq";
import { FONT_DISPLAY, FONT_EDITORIAL } from "@/components/home-page/PassportJourney/ui/tokens";
import styles from "./faq.module.css";

interface FaqHeaderProps {
  /** 1-based number of the open question, or null when none is open. */
  current: number | null;
  total: number;
}

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Slightly darker band than the page, so it reads as its own strip with a natural edge
 * above and below. The "Now answering" display follows the open question.
 */
export default function FaqHeader({ current, total }: FaqHeaderProps) {
  return (
    <div className="bg-secondary/[0.06]">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-8 px-4 py-14 sm:px-8 sm:py-16 lg:flex-row lg:items-end lg:justify-between lg:px-14 lg:py-20">
        <div className="min-w-0">
          <p className="flex items-center gap-3 font-mono text-[12px] font-semibold uppercase tracking-[0.3em] text-secondary/80 lg:text-[14px]">
            <span aria-hidden="true" className="h-0.5 w-8 bg-accent" />
            {faqCopy.label}
          </p>
          <h2 id="faq-title" className={`${FONT_DISPLAY} mt-6 text-[clamp(44px,11vw,72px)] leading-[0.92] text-secondary lg:mt-8 lg:text-[clamp(64px,6vw,104px)]`}>
            <span className="block">{faqCopy.heading}</span>
            <span className={`${FONT_EDITORIAL} block pb-[0.1em] font-medium italic leading-none text-accent`}>{faqCopy.accent}</span>
          </h2>
          <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-secondary/65 lg:text-[18px]">{faqCopy.intro}</p>
        </div>

        <div aria-hidden="true" className="flex w-fit items-center gap-6 rounded-2xl bg-secondary px-6 py-5 text-primary shadow-[0_24px_48px_-28px_rgb(0_0_0/0.6)] sm:gap-8 sm:px-7">
          <div>
            <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.26em] text-primary/50">
              {current ? faqCopy.nowServing : faqCopy.allQuestions}
            </p>
            <p className="mt-1.5 text-[15px] text-primary/85">{current ? `Question ${current} of ${total}` : `${total} questions`}</p>
          </div>
          <span className={`${FONT_DISPLAY} ${styles.led} min-w-[2ch] text-right text-[56px] leading-none text-[#ef4444] sm:text-[64px]`}>
            {pad(current ?? total)}
          </span>
        </div>
      </div>
    </div>
  );
}