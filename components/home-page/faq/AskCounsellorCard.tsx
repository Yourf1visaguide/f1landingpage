import { ArrowUpRight, Phone } from "lucide-react";
import RedButton from "@/components/Red-Buttons";
import BlackButton from "@/components/BlackButton";
import { phone } from "@/function/handleWhatsapp";
import { faqCopy } from "@/data/home-page/faq";
import { OFFICE } from "@/data/home-page/about";
import { FONT_DISPLAY } from "@/components/home-page/PassportJourney/ui/tokens";

const whatsappHref = `https://wa.me/${phone}?text=${encodeURIComponent(faqCopy.whatsappMessage)}`;

/** "Still have a question?" card: WhatsApp (red) and call the office (black). */
export default function AskCounsellorCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-secondary/10 bg-[#fbf7ee] shadow-[0_24px_48px_-30px_rgb(23_32_43/0.45)]">
      <div className="flex items-center justify-between gap-4 border-b border-dashed border-secondary/20 px-6 py-3.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.22em] text-secondary/55">
        <span className="whitespace-nowrap">Counsellor desk</span>
        <span className="whitespace-nowrap">{OFFICE.city.split(",")[0]}</span>
      </div>
      <div className="flex flex-col gap-4 p-6 sm:p-7">
        <p className="flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.26em] text-accent">
          <span aria-hidden="true" className="h-0.5 w-6 bg-accent" />
          {faqCopy.askLabel}
        </p>
        <h3 className={`${FONT_DISPLAY} text-[clamp(30px,3vw,40px)] leading-[0.95] text-secondary`}>{faqCopy.askHeading}</h3>
        <p className="text-[15.5px] leading-relaxed text-secondary/70">{faqCopy.askText}</p>
        <div className="mt-2 flex flex-wrap gap-3">
          <RedButton
            text={faqCopy.askWhatsapp}
            href={whatsappHref}
            icon={<ArrowUpRight size={18} strokeWidth={2.5} aria-hidden="true" />}
            className="rounded-lg px-5 py-3 text-[15px]"
          />
          <BlackButton
            text={faqCopy.askCall}
            href={OFFICE.phoneHref}
            icon={<Phone size={16} strokeWidth={2.25} aria-hidden="true" />}
            className="rounded-lg px-5 py-3 text-[15px]"
          />
        </div>
      </div>
    </div>
  );
}