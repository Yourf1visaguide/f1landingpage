import RedButton from "@/components/Red-Buttons"
import { ArrowRight } from "lucide-react"
import React from 'react'

function SuccessStoriesCTAButton() {
  return (
    <div className="flex justify-center  gap-x-4 max-w-4xl mx-auto">
        <div className="mt-16 w-full rounded-lg border border-red-200 bg-red-50 p-8 text-center">
          <h3 className="text-3xl font-bold text-zinc-900">
            Ready to Start Your Success Story?
          </h3>

          <p className="mx-auto mt-4 text-lg leading-8 text-zinc-600">
            Speak with our expert counsellors to explore your study options,
            eligibility, and personalized international education pathway.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <RedButton
              text="Book Free Consultation"
              className="py-3"
              icon={<ArrowRight className="size-5" />}
            />
          </div>
        </div>
      </div>
  )
}

export default SuccessStoriesCTAButton