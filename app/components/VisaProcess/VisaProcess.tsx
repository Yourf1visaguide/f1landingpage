"use client";

import { MessageCircle } from "lucide-react";
import RedButton from "../Red-Buttons";
import Badge from "../Badge";

const steps = [
{
number: "01",
icon: "🏫",
title: "Apply in Top US Universities",
description: "Choose universities that match your profile and goals.",
},
{
number: "02",
icon: "✅",
title: "Get Accepted",
description: "Receive your university admission offer.",
},
{
number: "03",
icon: "📄",
title: "Apply for I-20",
description: "Complete documentation for your I-20 issuance.",
},
{
number: "04",
icon: "📝",
title: "Complete DS-160",
description: "Submit your official visa application form.",
},
{
number: "05",
icon: "🎤",
title: "Prepare for Interview in Special Pods",
description: "Practice with experts and real interview scenarios.",
},
{
number: "06",
icon: "🗓️",
title: "Book Interview",
description: "Schedule your visa interview appointment.",
},
{
number: "07",
icon: "✈️",
title: "Fly to America",
description: "Begin your study journey in the USA.",
},
];

export default function VisaProcessSection() {
return ( <section className="relative overflow-hidden bg-white py-24">
{/* Background Accent */} <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.08),transparent_40%)]" />

```
  <div className="relative mx-auto max-w-7xl px-6">
    {/* Header */}
    <div className="mx-auto mb-20 max-w-3xl text-center">
      

      <Badge text=" USA Study Visa Roadmap" color="amber" isLive={true}  />

      <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        The F-1 <strong className="text-red-600">Visa Process</strong> Made Simple
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        We handle the confusion. You just follow the roadmap.
      </p>
    </div>

    {/* Desktop Timeline */}
    <div className="hidden lg:block">
      <div className="relative">
        {/* Journey Line */}
        <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-red-200 via-red-400 to-red-600" />

        <div className="grid grid-cols-7 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative ${
                index % 2 === 0 ? "mt-0" : "mt-20"
              }`}
            >
              {/* Connector Dot */}
              <div className="absolute left-1/2 top-[80px] z-20 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white bg-red-600 shadow-lg" />

              <div
                className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-red-200
                hover:shadow-xl
              "
              >
                <div className="mb-4 text-4xl">
                  {step.icon}
                </div>

                <div className="mb-3 text-sm font-bold tracking-wider text-red-600">
                  STEP {step.number}
                </div>

                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Mobile Timeline */}
    <div className="lg:hidden">
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-red-200" />

        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="relative pl-16">
              <div
                className="
                absolute
                left-0
                top-4
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-red-600
                text-white
                shadow-lg
              "
              >
                {step.icon}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-2 text-xs font-bold tracking-wider text-red-600">
                  STEP {step.number}
                </div>

                <h3 className="mb-2 font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Final CTA */}
    <div className="mt-12 lg:mt-16 text-center">
      <div className="mx-auto max-w-2xl rounded-xl ">
        <h3 className="text-5xl font-bold text-slate-900 mb-8">
          Ready to Start Step 1?
        </h3>
        <RedButton 
        text="Contact Us on WhatsApp"
        icon={<MessageCircle  />}
        className="text-xl p-4"
        />
          
        
      </div>
    </div>
  </div>
</section>

);
}
