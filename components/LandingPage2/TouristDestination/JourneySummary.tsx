"use client";

import { ArrowDown, CheckCircle2, PlaneTakeoff } from "lucide-react";

import { TouristDestination } from "@/lib/types";
import Image from "next/image";

type Props = {
  selectedDestinations: (TouristDestination | undefined)[];
};

export default function JourneySummary({ selectedDestinations }: Props) {
  const completed = selectedDestinations.every(Boolean);

  return (
    <section className="mt-12 ">
      <div className=" overflow-hidden rounded-lg border border-red-100 bg-white shadow-xl shadow-red-100/30 p-4 sm:p-6">
        {/* Header */}

        <div className="border-b border-zinc-100 ">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-red-50 p-4">
              <PlaneTakeoff className="size-8 text-red-600" />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
                Your Journey
              </p>

              <h3 className="mt-1 sm:text-2xl text-xl font-bold text-slate-900">
                Selected Destinations
              </h3>
            </div>
          </div>
        </div>

        {/* Content */}

        <div className="py-8 ">
          {completed ? (
            <div className="md:flex md:flex-row md:gap-8  items-center justify-between ">
              {selectedDestinations.map((country, index) => {
              return (
                <div key={country!.id} className="flex flex-col items-center my-8 w-full">
                  <div className=" flex items-center gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 px-8 py-5 w-full  ">
                    <span className="size-10 rounded-lg overflow-hidden relative object-cover">
                      <Image src={`https://flagcdn.com/w80/${country!.flag}.png`} className="border-2" fill objectFit="cover" alt={country!.flag} />
                    </span>

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
              )})}
            </div>
          ) : (
            <div className=" flex flex-col  items-center justify-center rounded-lg border-2 border-dashed border-zinc-200 py-16 px-4 sm:px-8">
              <PlaneTakeoff className="size-10 text-zinc-300" />

              <h4 className="mt-6 text-2xl font-bold text-slate-900 text-center">
                Build Your Dream Journey By Selecting Any Three Countries. 
              </h4>

              <p className="mt-3 max-w-4xl text-center text-zinc-500">
                Choose one destination from each category. Your selected travel
                route will appear here. Then, click on continue button to start the process.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
