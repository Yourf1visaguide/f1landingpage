import React from 'react'
import EligibilityCtaButton from "./EligibilityCtaButton"
import { BookText, GraduationCap } from "lucide-react"

function EligibilityCtaArea() {
  return (
    <div className="mt-8 shadow-sm rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-white p-6">

      <div className="flex  gap-x-2 items-center">
        <div className="size-6">
        <BookText className="h-6 w-6 text-red-700" />
      </div>
      <h4 className="text-lg font-bold text-red-700">
        Low English Score? Still Qualify!
      </h4>
      </div>


  <p className="mt-2 text-sm leading-6 text-slate-600 text-justify">
        Masters admission possible with just IELTS 5 Bands or PTE 40. Visa is still guaranteed. Don't let your score stop your European dream — talk to our counselors today!
      </p>

  <div className="mt-6">
    <EligibilityCtaButton />
  </div>
</div>
  )
}

export default EligibilityCtaArea