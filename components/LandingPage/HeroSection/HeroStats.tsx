"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedCounter = ({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Create the counter animation with ScrollTrigger
    const ctx = gsap.context(() => {
      gsap.to(element, {
        innerHTML: value,
        duration: duration,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: element,
          start: "top 85%", // Start animation when element is 85% from top of viewport
          once: true, // Only trigger once
        },
        onUpdate: function () {
          const currentValue = Math.floor(parseFloat(element.innerHTML));
          const formattedValue = currentValue.toLocaleString("en-US");
          element.textContent = `${prefix}${formattedValue}${suffix}`;
        },
      });
    });

    return () => ctx.revert();
  }, [value, suffix, prefix, duration]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
};

// Stats Section Component
export default function HeroStats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the stat items container
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: 94, suffix: "%", label: "Approval Rate" },
    { value: 50, suffix: "K+", label: "Students Helped" },
    { value: 120, suffix: "+", label: "Countries" },
  ];

  return (
    <div
      ref={sectionRef}
      className="flex flex-wrap gap-8 lg:gap-12 pt-8 border-t border-zinc-500"
    >
      {stats.map((stat, index) => (
        <div key={stat.label} className="stat-item">
          <div className="text-3xl lg:text-4xl font-bold text-red-600">
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              duration={2}
            />
          </div>
          <div className="text-sm text-zinc-100 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}