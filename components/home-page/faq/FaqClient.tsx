"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import BlackButton from "@/components/BlackButton";
import { faqCopy, homeFaqs } from "@/data/home-page/faq";
import { FONT_BODY } from "@/components/home-page/PassportJourney/ui/tokens";
import FaqHeader from "./FaqHeader";
import FaqItem from "./FaqItem";
import FaqIllustration from "./FaqIllustration";
import AskCounsellorCard from "./AskCounsellorCard";

/** Questions shown before "Load more": fewer on phones, more on desktop. Each click adds STEP. */
const SHOW_MOBILE = 5;
const SHOW_DESKTOP = 8;
const STEP = 5;
const HASH_PREFIX = "#faq-";

export default function FaqClient() {
  const [openId, setOpenId] = useState<string | null>(homeFaqs[0]?.id ?? null);
  const [extra, setExtra] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyTimer = useRef<number | undefined>(undefined);

  // Share links: /#faq-refused opens that answer and scrolls to it.
  useEffect(() => {
    let timers: number[] = [];
    const stopJumping = () => {
      timers.forEach((t) => window.clearTimeout(t));
      timers = [];
    };
    const openFromHash = () => {
      const { hash } = window.location;
      if (!hash.startsWith(HASH_PREFIX)) return;
      const index = homeFaqs.findIndex((f) => f.id === decodeURIComponent(hash.slice(HASH_PREFIX.length)));
      if (index < 0) return;
      setExtra((e) => Math.max(e, Math.ceil((index + 1 - SHOW_MOBILE) / STEP) * STEP));
      setOpenId(homeFaqs[index].id);
      // Sections above (stories, journey) can still change height while they load, so the
      // jump is repeated a few times, and stops as soon as the visitor scrolls themselves.
      const jump = () => document.getElementById(`faq-${homeFaqs[index].id}`)?.scrollIntoView({ block: "start" });
      stopJumping();
      timers = [350, 1200, 2500].map((ms) => window.setTimeout(jump, ms));
    };
    const userEvents = ["wheel", "touchstart", "keydown", "mousedown"] as const;
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    userEvents.forEach((e) => window.addEventListener(e, stopJumping, { passive: true }));
    return () => {
      stopJumping();
      window.removeEventListener("hashchange", openFromHash);
      userEvents.forEach((e) => window.removeEventListener(e, stopJumping));
      window.clearTimeout(copyTimer.current);
    };
  }, []);

  const toggle = useCallback((id: string) => setOpenId((cur) => (cur === id ? null : id)), []);

  const copy = useCallback(async (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}${HASH_PREFIX}${id}`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Clipboard blocked: put the link in the address bar so it can be copied from there.
      window.history.replaceState(null, "", `${HASH_PREFIX}${id}`);
    }
    setCopiedId(id);
    window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => setCopiedId(null), 2000);
  }, []);

  const total = homeFaqs.length;
  const mobileCount = SHOW_MOBILE + extra;
  const desktopCount = SHOW_DESKTOP + extra;
  const openIndex = homeFaqs.findIndex((f) => f.id === openId);
  // The button shows on phones while phone items remain, and on desktop while desktop items remain.
  const moreClass = desktopCount < total ? "flex" : mobileCount < total ? "flex lg:hidden" : "hidden";

  return (
    <section id="faq" aria-labelledby="faq-title" className={`bg-primary text-secondary ${FONT_BODY}`}>
      <FaqHeader current={openIndex >= 0 ? openIndex + 1 : null} total={total} />

      <div className="mx-auto grid max-w-[1500px] gap-12 px-4 py-14 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16 lg:px-14 lg:py-24 xl:gap-24">
        <div className="min-w-0">
          <ul className="border-t border-secondary/80">
            {homeFaqs.map((faq, i) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                index={i}
                open={openId === faq.id}
                copied={copiedId === faq.id}
                visibleMobile={i < mobileCount}
                visibleDesktop={i < desktopCount}
                onToggle={toggle}
                onCopy={copy}
              />
            ))}
          </ul>
          <div className={`${moreClass} mt-8 justify-center`}>
            <BlackButton
              text={faqCopy.loadMore}
              onClick={() => setExtra((e) => e + STEP)}
              icon={<ChevronDown size={18} aria-hidden="true" />}
              className="rounded-full px-6 py-3 text-[15px]"
            />
          </div>
        </div>

        <aside className="flex min-w-0 flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
          <FaqIllustration className="mx-auto hidden w-full max-w-[380px] lg:block" />
          <AskCounsellorCard />
        </aside>
      </div>
    </section>
  );
}