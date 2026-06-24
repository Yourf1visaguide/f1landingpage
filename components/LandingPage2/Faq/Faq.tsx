"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Badge from "@/components/Badge";

const faqs = [
  {
    question: "What is your service fee?",
    answer:
      "Our service fee for the complete Netherlands study process is ₹36,000 only. This covers application guidance, documentation, university liaison, and visa support — end to end.",
  },
  {
    question: "What is the ₹50,000 guarantee? How does it work?",
    answer: `We are so confident in our service that we offer a unique ₹50,000 benefit regardless of outcome:

Visa Result | What You Get

✅ Approved — We give you ₹50,000 🎉 as a welcome bonus after your visa is approved.

❌ Refused — We give you ₹50,000 as a refund/compensation if the visa is refused.

✅ So whether your visa is approved or refused, you receive ₹50,000 from us in either case. Your ₹36,000 fee is fully covered and you walk away with more.`,
  },
  {
    question: "How much funds do I need to show?",
    answer:
      "You need to show ₹40 Lakhs (40L) in your bank account as proof of sufficient funds for living expenses and tuition.✅ New funds work too — we can help you arrange the required statement if needed.",
  },
  {
    question: "I don't have ₹40L in my account. Can you help?",
    answer:
      "Yes! If you don't have the required funds, we have funding support available. Just reach out to us and we'll guide you through the options.",
  },
  {
    question: "Is there an interview with the embassy?",
    answer:
      "No. There is no interview required. The visa process is straightforward and handled through your university and the IND. You just need to submit the right documents — we guide you through everything.",
  },
  {
    question: "Do I need to apply for the visa myself?",
    answer:
      "No. Once you get admission, your Dutch university applies for the visa (MVV + residence permit) on your behalf through the IND. We coordinate with the university to ensure everything is submitted correctly and on time.",
  },
  {
    question: "What documents are needed for the Netherlands study visa?",
    answer: `Typical documents include:

• Valid passport (scanned — all pages for MVV applicants)

• Unconditional admission letter from the Dutch university

• Proof of financial resources (₹40L bank statement)

• Health insurance proof or intent to purchase

• Antecedents certificate (declaration of good conduct)

• Statement of intent (with IND request form)

We provide a full checklist and review every document before submission.`,
  },
  {
    question: "How long does the visa process take?",
    answer:
      "IND processing typically takes 60–90 days (around 2–3 months) from the date a complete application is submitted. We recommend starting the process at least 4–5 months before your intended arrival.",
  },
  {
    question: "When do I pay the ₹36,000 fee?",
    answer:
      "The ₹36,000 fee is paid upfront when you enroll with us for the complete process. After that, we handle everything.",
  },
  {
    question: "When will I receive the ₹50,000?",
    answer: `You receive the ₹50,000 after the visa decision is announced:

If approved → we transfer ₹50,000 to you within [X days].

If refused → we transfer ₹50,000 to you within [X days].`,
  },
  {
    question: "Can I work while studying in the Netherlands?",
    answer: `Yes! As an international student you can work:

• Up to 16 hours per week during the academic year (with a work permit arranged by your employer), or

• Full-time during June, July, and August (summer months — no permit needed).`,
  },
  {
    question: "What happens after I get the visa?",
    answer: `After your MVV entry sticker is issued:

• You collect it from the Dutch embassy/consulate (Delhi, Mumbai, or Bangalore).

• You schedule your travel to the Netherlands.

• Within 2 weeks of arrival, you register at your local municipality (gemeente) to get your BSN (citizen service number).

• Your VVR residence permit card is collected from the IND office.

We guide you through each step even after the visa is issued.`,
  },
  {
    question: "What if I have more questions?",
    answer:
      "You can reach out to us anytime! We're here to help you through the entire process — from choosing a university to arriving in the Netherlands.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section 
    id="faq"
    className="relative overflow-hidden bg-white py-24">
      {" "}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,.06),transparent_35%)]" />
      ```
      <div className="relative mx-auto max-w-7xl px-6">
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
