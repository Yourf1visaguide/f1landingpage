import React from 'react'
import { GraduationCap } from "lucide-react"

function StudyTransferFromDubaiCenterSteps({subheadingTitle, subheading}:{subheadingTitle:string; subheading:string;}) {
  return (
     <div className="flex  items-start gap-4 rounded-lg mt-6 sm:mt-0 border-red-200 bg-red-50 px-4 py-1 ">

            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-600">
              <GraduationCap
                className="relative text-zinc-50 size-5"
              />
            </div>

            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-red-600">
                {subheadingTitle}
              </p>

              <p className="font-semibold text-sm sm:text-base text-zinc-600">
                {subheading}
              </p>
            </div>

          </div>
  )
}

export default StudyTransferFromDubaiCenterSteps