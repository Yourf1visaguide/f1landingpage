import { TouristDestination, TouristDestinationCategory } from "@/lib/types";
import { CheckCircle2, Circle } from "lucide-react";
import React from 'react'

type CardSelectionProgressProps = {
  totalCategories:number;
  selectedCount:number;
  progress:number;
  selectedCountries:Record<number, string>;
  touristDestinationData: TouristDestinationCategory[];
}

function CardSelectionProgress({selectedCount, totalCategories, progress, selectedCountries, touristDestinationData}:CardSelectionProgressProps) {
  return (
    <div className="mx-auto mt-14 max-w-7xl rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
                Progress
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Build Your Dream Journey
              </h3>
            </div>

            <div className="text-right">
              <p className="text-3xl font-bold text-red-600">{progress}%</p>

              <p className="text-sm text-zinc-500">
                {selectedCount} of {totalCategories} selected
              </p>
            </div>
          </div>

          {/* Progress Bar */}

          <div className="mt-8 h-3 overflow-hidden rounded-full bg-zinc-200">
            <div
              style={{
                width: `${progress}%`,
              }}
              className="h-full rounded-full bg-red-600 transition-all duration-700"
            />
          </div>

          {/* Steps */}

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {touristDestinationData.map((item, index) => {
              const completed = !!selectedCountries[index];

              return (
                <div
                  key={item.mainTitle}
                  className={`rounded-2xl border p-5 transition-all ${ completed ? "border-red-200 bg-red-50" : "border-zinc-200 bg-white" } `} >
                  <div className="flex items-center gap-3">
                    {completed ? ( 
                      <CheckCircle2 className="text-red-600" />
                    ) : (
                      <Circle className="text-zinc-400" />
                    )}

                    <div>
                      <p className="font-semibold text-slate-900">
                        {item.mainTitle}
                      </p>

                      <p className="mt-1 text-sm text-zinc-500">
                        {completed
                          ? "Destination Selected"
                          : "Waiting for Selection"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
  )
}

export default CardSelectionProgress