"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Badge from "@/components/Badge";
import { FAQType } from "@/lib/types";


export default function FAQSection({data}:{data:FAQType[]}) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-white py-24">
      {" "}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,.06),transparent_35%)]" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Badge */}

        <Badge text="Have Questions?" color="blue" isLive={true} />

        {/* Heading */}

        <div className="mt-6">
          <h2 className="text-4xl font-bold text-slate-900 lg:text-6xl">
            Frequently Asked
            <span className=" text-red-600"> Questions</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            Everything you need to know before starting your visa journey. We’ve
            answered the most common questions to help you get started.
          </p>
        </div>

        {/* FAQ */}

        <div className="mt-14 space-y-4">
          <div className="space-y-5">
            {data.map((faq, index) => {
              const isOpen = open === index;

              return (
                <div key={`question-${index}`} className={` overflow-hidden border-2
              rounded-3xl transition-all duration-300 ${ isOpen ? "border-red-200 bg-white shadow-lg" : "border-slate-200 bg-white" } `} >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className=" flex w-full items-center justify-between cursor-pointer p-6 text-left " >
                    <span className="pr-4 text-lg font-semibold text-slate-900">
                      {faq.question}
                    </span>

                    <ChevronDown  className={` h-5 w-5 shrink-0 text-red-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""} `} />
                  </button>

                  <div
                    className={` grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} `} >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 text-slate-600 leading-7">
                        <div className="space-y-5">
                          {/* Paragraphs */}

                          {faq.paragraphs?.map((paragraph, paragraphIndex) => (
                            <p
                              key={`paragraph-${paragraphIndex}`}
                              className="leading-7 text-slate-600"
                            >
                              {paragraph}
                            </p>
                          ))}

                          {/* List */}

                          {faq.list && (
                            <ul className="space-y-4">
                              {faq.list.map((item, itemIndex) => (
                                <li
                                  key={`item-${itemIndex}`}
                                  className="flex items-start gap-3"
                                >
                                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-red-600" />

                                  <span className="text-slate-600">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Table */}

                          {faq.table && (
                            <div className="overflow-hidden rounded-2xl border border-slate-200">
                              <div className="grid grid-cols-2 bg-red-600 text-white">
                                {faq.table.headers.map((header, headerIndex) => (
                                  <div
                                    key={`header-${headerIndex}`}
                                    className="p-4 font-semibold"
                                  >
                                    {header}
                                  </div>
                                ))}
                              </div>

                              {faq.table.rows.map((row, rowindex) => (
                                <div
                                  key={`row-${rowindex}`}
                                  className="grid grid-cols-2 border-t border-slate-200"
                                >
                                  {row.map((cell, cellIndex) => (
                                    <div
                                      key={`cell-${cellIndex}`}
                                      className="p-4 text-slate-700"
                                    >
                                      {cell}
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Completely custom content */}

                          {faq.custom}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
