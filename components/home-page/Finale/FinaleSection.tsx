"use client";

import { useRef } from "react";
import { FONT_BODY } from "@/components/home-page/PassportJourney/ui/tokens";
import SkyScene from "./SkyScene";
import BoardingTicket from "./BoardingTicket";
import { EnvelopeBack, EnvelopeFlap, EnvelopePocket } from "./Envelope";
import LetterTop from "./LetterTop";
import LetterFooter from "./LetterFooter";
import { useFinaleAnimation } from "./useFinaleAnimation";
import styles from "./finale.module.css";

const YEAR = new Date().getFullYear();

/** Same box for every envelope layer, slightly wider than the letter. */
const ENVELOPE_BOX = "absolute -inset-x-3 top-[58svh] h-[48svh] sm:-inset-x-6";

/**
 * End of the home page, told as one scroll story:
 * plane crosses the sky → boarding pass zooms in (live buttons) → airmail envelope opens →
 * the letter slides out and becomes the footer.
 * With reduced motion it is simply the ticket, then the letter footer, as normal sections.
 */
export default function FinaleSection() {
  const storyRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  useFinaleAnimation(storyRef, stageRef);

  return (
    <section aria-labelledby="finale-ticket-title" className={`relative ${FONT_BODY}`}>
      <div ref={storyRef} className="relative h-[420svh] motion-reduce:h-auto">
        <div ref={stageRef} className="sticky top-0 h-svh overflow-hidden motion-reduce:static motion-reduce:h-auto">
          <SkyScene />
          <div data-finale-desk aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#efe4cf] opacity-0 motion-reduce:hidden " />

          <div data-finale-ticket className="absolute inset-0  z-10 grid place-items-center px-4 sm:px-8 lg:px-14 motion-reduce:relative motion-reduce:py-28">
            <BoardingTicket />
          </div>

          {/* Envelope and letter (animated version only) */}
          <div data-finale-envwrap className="pointer-events-none absolute inset-0 z-20 opacity-0 motion-reduce:hidden">
            <div className="relative mx-auto h-full max-w-[1200px] px-4 sm:px-8 lg:px-14">
              <div className="relative h-full">
                <div data-finale-env className={`${ENVELOPE_BOX} z-[1]`}>
                  <EnvelopeBack />
                </div>
                <div data-finale-env data-finale-flapbox className={`${ENVELOPE_BOX} z-[5]`}>
                  <EnvelopeFlap />
                </div>
                <div
                  data-finale-letter
                  className={`${styles.paper} absolute inset-x-0 bottom-0 top-[34svh] z-[3] rounded-t-xl border-x border-t border-secondary/10 px-6 pt-6 sm:px-10 sm:pt-8 lg:px-14`}
                >
                  <LetterTop year={YEAR} headingId="contact-title" />
                </div>
                <div data-finale-env className={`${ENVELOPE_BOX} z-[4]`}>
                  <EnvelopePocket />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LetterFooter year={YEAR} />
    </section>
  );
}