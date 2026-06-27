"use client";

import { Inter, Playfair_Display } from "next/font/google";
import HeroStats from "./HeroStats";
import Badge from "@/components/Badge";
import HeroSectionCta from "./HeroSectionCta";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});


interface HeroLeftProps{
heading:ReactNode;
description:ReactNode;
}

function HeroLeft({heading, description}:HeroLeftProps) {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      badgeRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      }
    )
      .fromTo(
        headingRef.current,
        {
          x: -10,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.1"
      )
      .fromTo(
        paragraphRef.current,
        {
          x: -10,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .fromTo(
        ctaRef.current,
        {
          x: -10,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .fromTo(
        statsRef.current,
        {
          y: 10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="space-y-8 lg:col-span-8 z-30">
      <div ref={badgeRef}>
        <Badge
          text="Over 50,000+ Success Stories"
          isLive={true}
          color="red"
        />
      </div>

      <h1
        ref={headingRef}
        className={`${playfair.variable} font-serif text-5xl lg:text-6xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-white max-w-5xl `}
      >
        {heading}
        <br />
      </h1>

      <div
        ref={paragraphRef}
        className="text-lg lg:text-xl text-zinc-200 leading-relaxed max-w-3xl"
      >
       {description}
      </div>

      <div ref={ctaRef}>
        <HeroSectionCta />
      </div>

      <div ref={statsRef}>
        <HeroStats />
      </div>
    </div>
  );
}

export default HeroLeft;