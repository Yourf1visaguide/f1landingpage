import { memo } from "react";
import { Check, Link2, Plus } from "lucide-react";
import { faqCopy, type HomeFaq } from "@/data/home-page/faq";
import { FONT_DISPLAY, FONT_EDITORIAL } from "@/components/home-page/PassportJourney/ui/tokens";
import FaqAnswer from "./FaqAnswer";
import styles from "./faq.module.css";

interface FaqItemProps {
  faq: HomeFaq;
  index: number;
  open: boolean;
  copied: boolean;
  /** Visible on phones (false hides it until "Load more"). */
  visibleMobile: boolean;
  /** Visible from the lg breakpoint up. */
  visibleDesktop: boolean;
  onToggle: (id: string) => void;
  onCopy: (id: string) => void;
}

const pad = (n: number) => String(n).padStart(2, "0");

/** One question. The answer stays in the HTML when closed, so search engines can read it. */
function FaqItem({ faq, index, open, copied, visibleMobile, visibleDesktop, onToggle, onCopy }: FaqItemProps) {
  const qid = `faq-q-${faq.id}`;
  const aid = `faq-a-${faq.id}`;
  const display = `${visibleMobile ? "block" : "hidden"} ${visibleDesktop ? "lg:block" : "lg:hidden"}`;

  return (
    <li id={`faq-${faq.id}`} className={`${display} scroll-mt-28 border-b border-secondary/15`}>
      <h3>
        <button
          id={qid}
          type="button"
          aria-expanded={open}
          aria-controls={aid}
          onClick={() => onToggle(faq.id)}
          className="group grid w-full grid-cols-[44px_minmax(0,1fr)_38px] items-center gap-x-2 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:grid-cols-[72px_minmax(0,1fr)_44px] sm:py-6"
        >
          <span aria-hidden="true" className={`${FONT_DISPLAY} text-[20px] leading-none transition-colors sm:text-[28px] ${open ? "text-accent" : "text-secondary/25 group-hover:text-secondary/45"}`}>
            {pad(index + 1)}
          </span>
          <span className={`${FONT_EDITORIAL} text-[19px] font-medium italic leading-snug text-secondary sm:text-[24px]`}>{faq.question}</span>
          <span
            aria-hidden="true"
            className={`grid size-9 place-items-center justify-self-end rounded-full border transition-all duration-300 sm:size-10 ${
              open ? "rotate-45 border-accent bg-accent text-white" : "border-secondary/25 text-secondary group-hover:border-secondary"
            }`}
          >
            <Plus size={18} strokeWidth={2} />
          </span>
        </button>
      </h3>

      <div id={aid} role="region" aria-labelledby={qid} data-open={open} className={styles.panel}>
        <div className={styles.panelInner} inert={!open}>
          <div className="pb-6 sm:pl-[72px]">
            <div className={`${styles.paper} relative rounded-2xl border border-secondary/12 p-5 shadow-[0_18px_40px_-28px_rgb(23_32_43/0.5)] sm:p-7 sm:pr-32`}>
              <span
                aria-hidden="true"
                className="absolute right-6 top-6 hidden size-[84px] rotate-[8deg] place-items-center rounded-full border-[2.5px] border-accent bg-[#fbf7ee]/90 text-center font-mono text-[8px] font-semibold leading-[1.5] tracking-[0.16em] text-accent sm:grid"
              >
                <span>
                  YOUR F1
                  <span className={`${FONT_DISPLAY} block text-[19px] tracking-[0.04em]`}>ANSWERED</span>
                  JALANDHAR
                </span>
              </span>
              <FaqAnswer faq={faq} />
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-secondary/20 pt-4">
                <button
                  type="button"
                  onClick={() => onCopy(faq.id)}
                  className="inline-flex items-center gap-2 font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-secondary transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {copied ? <Check size={14} aria-hidden="true" /> : <Link2 size={14} aria-hidden="true" />}
                  <span aria-live="polite">{copied ? faqCopy.copied : faqCopy.copyLink}</span>
                </button>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary/45">Checked {faqCopy.checkedOn}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default memo(FaqItem);