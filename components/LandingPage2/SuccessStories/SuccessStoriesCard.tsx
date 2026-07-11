"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useMemo } from "react";
import {
  ArrowDown,
  File,
  PlaneTakeoff,
  School,
} from "lucide-react";
import { SuccessStoryInfoType } from "@/lib/types";
import SuccessStoriesCardHeader from "./SuccessStoriesCardHeader";
import SuccessStoryCardFooter from "./SuccessStoryCardFooter";

// ─── Country → flag emoji ───────────────────────────────────────────────────
const FLAG_MAP: Record<string, string> = {
  Dubai: "🇦🇪",
  UAE: "🇦🇪",
  "United Arab Emirates": "🇦🇪",
  "United Kingdom": "🇬🇧",
  UK: "🇬🇧",
  Netherlands: "🇳🇱",
  USA: "🇺🇸",
  "United States": "🇺🇸",
  "United States of America": "🇺🇸",
  India: "🇮🇳",
  Canada: "🇨🇦",
  Australia: "🇦🇺",
  Germany: "🇩🇪",
  France: "🇫🇷",
  Singapore: "🇸🇬",
  "New Zealand": "🇳🇿",
  Ireland: "🇮🇪",
};

function getFlag(country: string): string {
  return FLAG_MAP[country] ?? "🌍";
}

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// ─── Animation variants ─────────────────────────────────────────────────────
const EASE = [0.4, 0, 0.2, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const stepVariants = {
  hidden: { opacity: 0, x: -14 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.14, duration: 0.38, ease: EASE },
  }),
};

const docVariants = {
  hidden: { opacity: 0, x: 16, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { delay: i * 0.14 + 0.08, duration: 0.38, ease: EASE },
  }),
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: (i: number) => ({
    scaleY: 1,
    transition: { delay: i * 0.14 + 0.05, duration: 0.55, ease: "easeOut" },
  }),
};

// ─── Component ─────────────────────────────────────────────────────────────
export default function SuccessStoriesCard({
  item,
  indexValue
}: {
  item: SuccessStoryInfoType;
  indexValue:number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReduced = useReducedMotion();

  // Respect prefers-reduced-motion — skip to visible immediately
  const animState = prefersReduced ? "visible" : inView ? "visible" : "hidden";

  const steps = useMemo(
    () => [
      { label: item.step1, image: `https://res.cloudinary.com/dkno1wygy/image/upload/f_auto,q_auto/${item.image1}` },
      { label: item.step2, image: `https://res.cloudinary.com/dkno1wygy/image/upload/f_auto,q_auto/${item.image2}` },
      { label: item.step3, image: `https://res.cloudinary.com/dkno1wygy/image/upload/f_auto,q_auto/${item.image3}` },
    ],
    [item],
  );

  const bgColors = ["bg-zinc-400", "bg-zinc-500", "bg-zinc-900"];
  const borderColors = ["border-zinc-400", "border-zinc-500", "border-zinc-900"];
  const textColors = ["text-zinc-400", "text-zinc-500", "text-zinc-900"];

  const icon = [School, File, PlaneTakeoff];
  return (
    <motion.article
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={animState}
      aria-label={`Success story: ${item.studentName} from ${item.fromCountry} to ${item.toCountry}`}
      className="relative bg-white border border-zinc-200 rounded-lg overflow-hidden w-full max-w-sm mx-auto
      "
    >
      {/* ── Header: avatar + name + route + badge ─────────────────── */}
      <SuccessStoriesCardHeader item={item} getInitials={getInitials} indexValue={indexValue} />

      {/* ── Timeline body ──────────────────────────────────────────── */}
      <div className="px-4 pt-6 " role="list" aria-label="Journey steps">
        {steps.map((step, i) => {
          const Icon = icon[i];
          const isLast = i === steps.length - 1;
          return (
            <div
      
              key={`${item.id}-step-${i}`}
              className="flex gap-x-3"
              role="listitem"
            >
              {/* Left: dot + connector line */}
              <div className="relative flex flex-col items-center w-7 flex-shrink-0">
                <motion.div
                  custom={i}
                  variants={stepVariants}
                  initial="hidden"
                  animate={animState}
                  className={`absolute top-2 w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-medium flex-shrink-0 z-10 ${bgColors[i]} `}
                  aria-hidden="true"
                >
                  {i + 1}
                </motion.div>

                <motion.div
                  custom={i} // variants={lineVariants}
                  initial="hidden"
                  animate={animState}
                  className={`absolute w-10  left-1 top-5 h-0.5 border-b-2 ${borderColors[i]} origin-top`}
                  aria-hidden="true"
                />

                
                {!isLast && (
                  <>
                    <motion.div
                      custom={i} // variants={lineVariants}
                      initial="hidden"
                      animate={animState}
                      className={`absolute w-0.5  left-[13px] top-20 h-48 border-l-2 ${borderColors[i]} origin-top`}
                      aria-hidden="true"
                    />
                    <ArrowDown className={`absolute size-4 left-1.5 top-28 ${textColors[i]} `} />
                    <ArrowDown className={`absolute size-4 left-1.5 top-40 ${textColors[i]} `} />
                    <ArrowDown className={`absolute size-4 left-1.5 top-52 ${textColors[i]} `} />
                    <ArrowDown className={`absolute size-4 left-1.5 top-65 ${textColors[i]} `} />

                  </>
                  
                )}
                {
                    isLast && (
                      <motion.div
                      custom={i} // variants={lineVariants}
                      initial="hidden"
                      animate={animState}
                      className={`absolute w-0.5  left-[13px] top-20 h-48 border-l-2 ${borderColors[i]} origin-top`}
                      aria-hidden="true"
                    />
                    )
                  }
              </div>

              {/* Right: label + document image */}
              <motion.div
                custom={i}
                variants={docVariants}
                initial="hidden"
                animate={animState}
                className={` relative z-50 bg-white rounded-lg flex-1  mb-6 shadow-[0px_0px_6px_rgba(0,0,0,0.25)] p-4 pt-2 border-l-8 ${borderColors[i]} `}
              >
                <div className="flex gap-x-1.5 mb-3 items-center ">
                  {/* <div className="bg-red-100 p-1 size-7 rounded-full ">
                    <Icon
                      className={`size-5  ${i === 0 ? "text-red-300" : `text-${stepsColors[i]}`}`}
                    />
                  </div> */}
                  <h6 className="text-sm text-zinc-600 font-semibold ">
                    {step.label}
                  </h6>
                </div>

                {/* Document image frame */}
                <div className="relative h-72 shdow-sm border border-zinc-200 rounded-md overflow-hidden ">
                  {step.image ? (
                    <Image
                      src={step.image}
                      alt={step.label}
                      fill
                      priority={indexValue < 3 }
                      draggable={false}
                      blurDataURL="/images/blur.jpg"
                      placeholder="blur"
                      className="object-contain object-top  "
                    />
                  ) : (
                    /* Fallback skeleton when no image provided */
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-zinc-200 animate-pulse" />
                    </div>
                  )}
                </div>
                {/* {!isLast && (i===0 ? (<ArrowDownLeft className={`absolute size-6 z-50 left-1.5 -bottom-6 text-red-600 `} />) : (<ArrowDownRight className={`absolute size-6 z-50 left-1.5 -bottom-6 text-red-600 `} />))} */}
              </motion.div>
            </div>
          );
        })}
      </div>
      <SuccessStoryCardFooter item={item} />
    </motion.article>
  );
}
