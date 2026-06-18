"use client";

import { Inter, Playfair_Display } from "next/font/google";
import HeroStats from "./HeroStats";
import Badge from "@/components/Badge";
import HeroSectionCta from "./HeroSectionCta";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

function HeroLeft() {
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
        className={`${playfair.variable} font-serif text-5xl lg:text-6xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-white`}
      >
        Your Dream of Studying <br className="hidden lg:block" />
        in <span className="text-red-600">America </span> Starts Here
        <br />
      </h1>

      <p
        ref={paragraphRef}
        className="text-lg lg:text-xl text-zinc-200 leading-relaxed max-w-3xl"
      >
        Navigate the F-1 student visa process with confidence.
        <span className="font-semibold text-red-600">
          {" "}
          Apply now in just Rs 36,000
        </span>{" "}
        and get step-by-step guidance, mock interview mastery, and everything
        you need to land your USA study visa.
      </p>

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