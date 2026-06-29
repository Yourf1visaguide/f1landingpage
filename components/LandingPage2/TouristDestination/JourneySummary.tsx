"use client";

import { ArrowDown, CheckCircle2, PlaneTakeoff } from "lucide-react";

import { TouristDestination } from "@/lib/types";

type Props = {
  selectedDestinations: (TouristDestination | undefined)[];
};

export default function JourneySummary({ selectedDestinations }: Props) {
  const completed = selectedDestinations.every(Boolean);

  return (
    <section className="mt-24 ">
      <div className=" overflow-hidden rounded-lg border border-red-100 bg-white shadow-xl shadow-red-100/30">
        {/* Header */}

        <div className="border-b border-zinc-100 p-6">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-red-50 p-4">
              <PlaneTakeoff className="size-8 text-red-600" />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
                Your Journey
              </p>

              <h3 className="mt-1 text-2xl font-bold text-slate-900">
                Selected Destinations
              </h3>
            </div>
          </div>
        </div>

        {/* Content */}

        <div className="px-6 py-8">
          {completed ? (
            <div className="md:flex md:flex-row md:gap-8  items-center justify-between ">
              {selectedDestinations.map((country, index) => (
                <div key={country!.id} className="flex flex-col items-center my-8 w-full">
                  <div className=" flex items-center gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 px-8 py-5 w-full ">
                    <span className="text-4xl text-zinc-700">{country!.flag}</span>

                    <div>
                      <div className="font-bold text-zinc-600 text-xl">
                        {country!.country}
                      </div>

                      <div className="text-sm text-zinc-500">
                        {country!.visaType}
                      </div>
                    </div>

                    <CheckCircle2 className="ml-6 text-green-500" />
                  </div>

                  {/* {index !== selectedDestinations.length - 1 && (
                    <ArrowDown className="my-5 text-red-500" />
                  )} */}
                </div>
              ))}
            </div>
          ) : (
            <div className=" flex flex-col  items-center justify-center rounded-2xl border-2 border-dashed border-zinc-200 py-16 ">
              <PlaneTakeoff className="size-10 text-zinc-300" />

              <h4 className="mt-6 text-2xl font-bold text-slate-900">
                Build Your Dream Journey
              </h4>

              <p className="mt-3 max-w-md text-center text-zinc-500">
                Choose one destination from each category. Your selected travel
                route will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
