import React from "react";
import { BadgeDollarSign, Check } from "lucide-react";
import BadgeWithoutDot from "@/components/BadgeWithoutDot";

function RightColumn() {
  const featuresData = [
    {
      badge1: "Application Fee",
      badge2: "One Time",
      heading: "Start Today (To begin your application)",
      value: "₹36,000",
      data: [
        "University Application Processing",
        "Document Preparation & Review",
        "Offer Letter Coordination",
        "Interview Coaching & Prep",
        "Dedicated Personal Counselor",
      ],
    },
    {
      badge1: "Visa Benefit",
      badge2: "After Approval",
      heading: "Payable only after your visa is approved",
      value: "₹50,000",
      data: [
        "Complete Visa Filing & Support",
        "Visa Guarantee Certificate",
        "Pre-Departure Briefing",
        "FREE Air Ticket OR FREE Laptop 🎁",
        "₹50,000 Refund if Visa Refused*",
      ],
    },
  ];

  return (
    <div className="lg:col-span-5">
      <div className="sticky top-10 rounded-xl border border-t-4 border-red-100 bg-white p-4 md:p-6 shadow-xl shadow-red-100/40  ">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-red-50 p-3">
            <BadgeDollarSign className="h-6 w-6 text-red-600" />
          </div>

          <div>
            <h3 className="font-bold text-slate-900">Cost</h3>

            <p className="text-sm text-slate-500">Under 15 Lakhs.</p>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          {featuresData.map((feature, index) => (
            <div key={index}>
              <div
                className="border-2 px-4 py-4 rounded-md bg-red-50/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500"
                
              >
                <div className="py-6 flex justify-between">
                  <BadgeWithoutDot
                    className="md:text-[12px] text-[11px] uppercase"
                    text={feature.badge1}
                  />
                  <BadgeWithoutDot
                    className="md:text-[12px] text-[11px]"
                    color="green"
                    text={feature.badge2}
                  />
                </div>
                <div className="flex items-start justify-between border-b border-slate-100 pb-4 ">
                  <span className="text-slate-600 text-sm sm:text-base">{feature.heading}</span>

                  <span className="font-bold text-slate-900">
                    {feature.value}
                  </span>
                </div>
                <ul className="leading-6 ">
                  {feature.data.map((li, index) => (
                    <li
                      key={index}
                      className="py-2  border-zinc-200 flex items-baseline justify-start  "
                    >
                      <div className=" rounded-full bg-red-200 p-0.5 mr-2">
                        <Check className="size-3 text-red-600" />
                      </div>

                      <div className="text-base text-sm sm:text-base text-zinc-950">
                        {li}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="my-6 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightColumn;
