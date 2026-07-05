"use client";

import { MessageCircle } from "lucide-react";
import RedButton from "@/components/Red-Buttons";
import Badge from "@/components/Badge";
import { handleWhatsappClick } from "@/function/handleWhatsapp";
import { VisaProcessType } from "@/lib/types";
import { icons } from "@/lib/icons";

export default function VisaProcessSection({
  data,
}: {
  data: VisaProcessType;
}) {
  return (
    <section id="process" className="relative overflow-hidden bg-white py-24">
      {/* Background Accent */}{" "}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <Badge text={data.badgeText} color="amber" isLive={true} />

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {data.heading}
          </h2>

          <p className="mt-6 text-lg text-slate-600">{data.description}</p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Journey Line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-red-200 via-red-400 to-red-600" />

            <div className="grid grid-cols-7 gap-6">
              {data.steps.map((step, index) => {
                const Icon = icons[step.icon as keyof typeof icons]

                return (
                  <div
                    key={step.number}
                    className={`relative ${index % 2 === 0 ? "mt-0" : "mt-20"}`}
                  >
                    {/* Connector Dot */}
                    <div
                      className="  group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl "
                    >
                      <div className="mb-2 bg-red-600 inline-block p-2 rounded-lg ">
                      <Icon className="size-6 text-zinc-100" />

                      </div>

                      <div className="mb-2 text-sm font-bold tracking-wider text-red-600">
                        STEP {step.number}
                      </div>

                      <h3 className="mb-2 text-lg font-semibold text-slate-900">
                        {step.title}
                      </h3>

                      <p className="text-sm leading-6 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-1 bg-red-200" />

            <div className="space-y-6">
              {data.steps.map((step) => {
                const Icon = icons[step.icon as keyof typeof icons]
                return (
                <div key={step.number} className="relative pl-14">
            {/* <div className="absolute left-5 top-7 bottom-0 h-1 w-9 bg-red-200 -z-0" /> */}

                  <div
                    className=" absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-lg
              "
                  >
                    <Icon className="size-6" />
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="mb-2 text-xs font-bold tracking-wider text-red-600">
                      STEP {step.number}
                    </div>

                    <h3 className="mb-2 font-semibold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
              )
              })}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="mx-auto max-w-2xl rounded-xl ">
            <h3 className="sm:text-5xl text-4xl/tight font-bold text-slate-900 mb-8">
              Ready to Start Step 1?
            </h3>
            <RedButton
              onClick={handleWhatsappClick}
              text={data.buttonText}
              icon={<MessageCircle />}
              className="text-xl p-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
