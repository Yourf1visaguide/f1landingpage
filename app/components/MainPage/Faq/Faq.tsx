"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, CheckCircle2 } from "lucide-react";
import Badge from "../../Badge";

const faqs = [
  {
    question: "What is included in the Rs 36,000 fee?",
    answer:
      "Our fee covers end-to-end consulting: DS-160 form filling assistance, SEVIS payment guidance, comprehensive financial document structuring, and personalized 1-on-1 mock interview sessions to guarantee you are fully prepared for the embassy.",
  },
  {
    question: "What happens if my visa was previously rejected?",
    answer:
      "A rejection is not the end. We specialize in cases with previous 214(b) refusals. We will evaluate your previous application, identify exactly where it failed, and rebuild your narrative with new, compelling information.",
  },
  {
    question: "Does the Rs 36,000 cover government fees?",
    answer:
      "No, the SEVIS fee ($350) and MRV embassy appointment fee ($185) are mandatory US government fees paid directly to the respective authorities. Our Rs 36,000 fee is strictly for our professional consulting and preparation services.",
  },
  {
    question: "Are there any hidden charges in the Rs 36,000 fee?",
    answer:
      "No, absolutely not. The Rs 36,000 is a flat fee for our complete end-to-end consulting, documentation, and interview preparation. There are no hidden fees or extra charges from our side.",
  },
  {
    question: "What is the benefit of preparing in a Visa Pod?",
    answer:
      "We specifically built Visa Pods to simulate a real-life embassy experience. Practicing your mock interviews in an environment that mimics the actual US consulate helps significantly reduce interview anxiety, builds your confidence, and prepares you to answer the officer's questions naturally under pressure.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {" "}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,.06),transparent_35%)]" />
      ```
      <div className="relative mx-auto max-w-5xl px-6">
        {/* Badge */}

        <Badge text="Have Questions?" color="blue"  isLive={true} />

        {/* Heading */}

        <div className="mt-6">
          <h2 className="text-4xl font-bold text-slate-900 lg:text-6xl">
            Frequently Asked 
            <span className=" text-red-600"> Questions</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            Everything you need to know before starting your F-1 visa journey.
          </p>
        </div>

        {/* FAQ */}

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className={`
              overflow-hidden
              border-2
              rounded-3xl
              transition-all
              duration-300
              ${
                isOpen
                  ? "border-red-200 bg-white shadow-lg"
                  : "border-slate-200 bg-white"
              }
            `}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="
                flex
                w-full
                items-center
                justify-between
                cursor-pointer
                p-6
                text-left
              "
                >
                  <span className="pr-4 text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`
                  h-5
                  w-5
                  shrink-0
                  text-red-600
                  transition-transform
                  duration-300
                  ${isOpen ? "rotate-180" : ""}
                `}
                  />
                </button>

                <div
                  className={`
                grid
                transition-all
                duration-300
                ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
              `}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-slate-600 leading-7">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        {/* <div className="mt-16 rounded-3xl border border-red-100 bg-red-50 p-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white">
            <CheckCircle2 className="h-7 w-7" fill="currentColor" />
          </div>

          <h3 className="mt-5 text-2xl font-bold text-slate-900">
            Still Have Questions?
          </h3>

          <p className="mt-3 text-slate-600">
            Talk directly with a visa expert and get personalized guidance.
          </p>

          <button
            className=" mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-4 font-semibold text-white transition hover:bg-red-700 "
          >
            <MessageCircle className="h-5 w-5" />
            Apply on WhatsApp
          </button>
        </div> */}
      </div>
    </section>
  );
}
