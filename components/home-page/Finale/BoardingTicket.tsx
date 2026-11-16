import { ArrowUpRight, MapPin } from "lucide-react";
import RedButton from "@/components/Red-Buttons";
import BlackButton from "@/components/BlackButton";
import { phone } from "@/function/handleWhatsapp";
import { OFFICE } from "@/data/home-page/about";
import { ticketCopy } from "@/data/home-page/finale";
import { FONT_DISPLAY, FONT_EDITORIAL } from "@/components/home-page/PassportJourney/ui/tokens";
import styles from "./finale.module.css";

const whatsappHref = `https://wa.me/${phone}?text=${encodeURIComponent(ticketCopy.whatsappMessage)}`;
const label = "font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-secondary/45";

/** The "final call" boarding pass. Stacks vertically on phones and tablets. */
export default function BoardingTicket() {
  return (
    <article
      aria-labelledby="finale-ticket-title"
      className="grid w-full max-w-[1040px] overflow-hidden rounded-[22px] border border-secondary/10 bg-[#fbf7ee] text-secondary shadow-[0_40px_80px_-40px_rgb(90_40_10/0.55)] lg:grid-cols-[minmax(0,1fr)_300px]"
    >
      <div className="min-w-0 p-6 sm:p-8 lg:p-11">
        <div className="flex items-center justify-between gap-4 border-b border-secondary/10 pb-4">
          <p className={label}>
            {ticketCopy.label}
            <span className="hidden sm:inline"> · {ticketCopy.brand}</span>
          </p>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">{ticketCopy.status}</p>
        </div>
        <h2 id="finale-ticket-title" className={`${FONT_DISPLAY} mt-6 text-[clamp(38px,7vw,84px)] leading-[0.92] lg:mt-8`}>
          <span className="block">{ticketCopy.heading}</span>
          <span className={`${FONT_EDITORIAL} mt-1 block pb-[0.08em] text-[0.82em] font-medium italic leading-[1.05] text-accent`}>{ticketCopy.accent}</span>
        </h2>
        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:mt-8 sm:grid-cols-3">
          {ticketCopy.fields.map((f) => (
            <div key={f.label} className="min-w-0">
              <dt className={label}>{f.label}</dt>
              <dd className="mt-1 text-[15px] font-bold sm:text-[17px]">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={`${styles.notch} relative flex flex-col justify-center gap-3 border-t-2 border-dashed border-secondary/20 bg-secondary/[0.03] p-6 sm:p-8 lg:border-l-2 lg:border-t-0`}>
        <div className="hidden lg:block">
          <p className={label}>Seat</p>
          <p className={`${FONT_DISPLAY} text-[56px] leading-none`}>{ticketCopy.seat}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:mt-2 lg:flex-col">
          <RedButton
            text={ticketCopy.talk}
            href={whatsappHref}
            icon={<ArrowUpRight size={18} strokeWidth={2.5} aria-hidden="true" />}
            className="justify-between rounded-lg px-5 py-3.5 text-[15px] sm:flex-1"
          />
          <BlackButton
            text={ticketCopy.directions}
            href={OFFICE.mapsUrl}
            icon={<MapPin size={17} strokeWidth={2.25} aria-hidden="true" />}
            className="justify-center rounded-lg px-5 py-3.5 text-[15px] sm:flex-1"
          />
        </div>
        <div aria-hidden="true" className={`${styles.barcode} mt-2 hidden h-10 lg:block`} />
      </div>
    </article>
  );
}