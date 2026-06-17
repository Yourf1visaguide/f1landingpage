"use client";

import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  School,
  CreditCard,
  Mic,
  Plane,
} from "lucide-react";

const STEPS = [
  {
    id: 1,
    icon: School,
    title: "Onboarding & Strategy",
    description:
      "We review your university acceptance and academic profile to build a custom timeline.",
  },
  {
    id: 2,
    icon: CreditCard,
    title: "Filing & Financials",
    description:
      "We handle your DS-160, guide your SEVIS fee payment, and structure your sponsor documents perfectly.",
  },
  {
    id: 3,
    icon: Mic,
    title: "Mock Interviews",
    description:
      "Rigorous 1-on-1 practice to ensure you confidently prove your non-immigrant intent to the officer.",
  },
  {
    id: 4,
    icon: Plane,
    title: "Approval & Departure",
    description:
      "Get your visa stamped and prepare for your flight to the United States!",
  },
];

export default function VisaTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(
            entry.target.getAttribute("data-index")
          );

          setActiveStep(index);
        });
      },
      {
        threshold: 0.6,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    stepRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const ActiveIcon = STEPS[activeStep].icon;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2">
            <CalendarDays className="h-4 w-4 text-red-700" />

            <span className="text-sm font-semibold text-red-700">
              Timeline
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-bold text-black lg:text-6xl">
            Your Visa Journey
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            F-1 visas can be issued up to 365 days before
            your program.
          </p>
        </div>

        {/* ========================= */}
        {/* DESKTOP + TABLET */}
        {/* ========================= */}

        <div className="mt-20 hidden lg:grid lg:grid-cols-12 lg:gap-16">
          {/* LEFT STICKY CARD */}

          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div
                className={`
                  overflow-hidden rounded-[32px]
                  p-10 shadow-xl transition-all duration-700
                  ${
                    activeStep === 3
                      ? "bg-red-700 text-white"
                      : "bg-blue-950 text-white"
                  }
                `}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">
                  <ActiveIcon className="h-12 w-12" />
                </div>

                <p className="mt-8 text-sm font-bold tracking-[0.3em] text-red-300">
                  STEP {STEPS[activeStep].id}
                </p>

                <h3 className="mt-4 text-4xl font-bold leading-tight">
                  {STEPS[activeStep].title}
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  {STEPS[activeStep].description}
                </p>

                <div className="mt-10">
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full bg-red-500 transition-all duration-700"
                      style={{
                        width: `${
                          ((activeStep + 1) /
                            STEPS.length) *
                          100
                        }%`,
                      }}
                    />
                  </div>

                  <div className="mt-3 text-sm text-white/60">
                    Step {activeStep + 1} of{" "}
                    {STEPS.length}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="lg:col-span-7">
            <div className="relative">
              {/* Main Timeline */}

              <div className="absolute left-8 top-0 h-full w-[2px] bg-slate-200" />

              {/* Active Timeline */}

              <div
                className="absolute left-8 top-0 w-[2px] bg-red-700 transition-all duration-700"
                style={{
                  height: `${
                    ((activeStep + 1) /
                      STEPS.length) *
                    100
                  }%`,
                }}
              />

              <div className="space-y-10">
                {STEPS.map((step, index) => {
                  const Icon = step.icon;

                  const completed =
                    index <= activeStep;

                  return (
                    <div
                      key={step.id}
                      ref={(el) => {
                        stepRefs.current[index] = el;
                      }}
                      data-index={index}
                      className="relative min-h-[140px]"
                    >
                      {/* Icon */}

                      <div
                        className={`
                          absolute left-0 top-0
                          flex h-16 w-16 items-center justify-center
                          rounded-full border-4 bg-white
                          transition-all duration-700

                          ${
                            completed
                              ? "border-red-700 text-red-700"
                              : "border-slate-300 text-slate-300"
                          }
                        `}
                      >
                        <Icon className="h-7 w-7" />
                      </div>

                      {/* Content */}

                      <div className="ml-28">
                        <p
                          className={`
                            text-sm font-bold tracking-[0.3em]
                            transition-all duration-700

                            ${
                              completed
                                ? "text-red-700"
                                : "text-slate-400"
                            }
                          `}
                        >
                          STEP {step.id}
                        </p>

                        <h3
                          className={`
                            mt-3 text-4xl font-bold
                            transition-all duration-700

                            ${
                              completed
                                ? "text-black"
                                : "text-slate-400"
                            }
                          `}
                        >
                          {step.title}
                        </h3>

                        <p
                          className={`
                            mt-6 max-w-xl text-xl leading-relaxed
                            transition-all duration-700

                            ${
                              completed
                                ? "text-slate-600"
                                : "text-slate-400"
                            }
                          `}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* MOBILE */}
        {/* ========================= */}

        <div className="mt-16 lg:hidden">
          <div className="relative">
            {/* Timeline */}

            <div className="absolute left-7 top-0 h-full w-[2px] bg-slate-200" />

            <div className="space-y-8">
              {STEPS.map((step, index) => {
                const Icon = step.icon;

                const completed =
                  index <= activeStep;

                return (
                  <div
                    key={step.id}
                    ref={(el) => {
                      stepRefs.current[index] = el;
                    }}
                    data-index={index}
                    className="relative pl-20"
                  >
                    {/* Icon */}

                    <div
                      className={`
                        absolute left-0 top-1
                        flex h-14 w-14 items-center justify-center
                        rounded-full border-4 bg-white
                        transition-all duration-700

                        ${
                          completed
                            ? "border-red-700 text-red-700"
                            : "border-slate-300 text-slate-300"
                        }
                      `}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Content */}

                    <p
                      className={`
                        text-xs font-bold tracking-[0.3em]
                        transition-all duration-700

                        ${
                          completed
                            ? "text-red-700"
                            : "text-slate-400"
                        }
                      `}
                    >
                      STEP {step.id}
                    </p>

                    <h3
                      className={`
                        mt-2 text-2xl font-bold
                        transition-all duration-700

                        ${
                          completed
                            ? "text-black"
                            : "text-slate-400"
                        }
                      `}
                    >
                      {step.title}
                    </h3>

                    <p
                      className={`
                        mt-3 leading-7
                        transition-all duration-700

                        ${
                          completed
                            ? "text-slate-600"
                            : "text-slate-400"
                        }
                      `}
                    >
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}