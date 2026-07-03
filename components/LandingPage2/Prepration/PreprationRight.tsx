import React from 'react'
import PreprationCtaButton from "./PreprationCtaButton"
import { BadgeDollarSign } from "lucide-react"
import { CostAndRequirementType } from "@/lib/types"

function PreprationRight({data}:{data:CostAndRequirementType}) {
  return (
    <div className="lg:col-span-5">
        <div className="sticky top-10 rounded-3xl border border-red-100 bg-white p-8 shadow-xl shadow-red-100/40">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-red-50 p-3">
              <BadgeDollarSign className="h-6 w-6 text-red-600" />
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                {data.pricing.governmentFees.title}
              </h3>

              <p className="text-sm text-slate-500">
                {data.pricing.governmentFees.description}
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            {data.pricing.governmentFees.items.map((item) => (
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-slate-600">
                {item.label}
              </span>

              <span className="font-bold text-slate-900">
                {item.value}
              </span>
            </div>
            ))}
            

           
          </div>

          <div className="my-6 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent " />

          <div className="mt-0 flex justify-between  items-center">
             <span className="text-xl text-zinc-700 font-semibold">{data.pricing.package.title}</span> <span className="font-bold text-2xl text-red-700">{data.pricing.package.price}</span> 
            </div>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            {data.pricing.package.description}
          </p>

          <PreprationCtaButton text={data.pricing.package.button.text} />
            
        </div>
      </div>
  )
}

export default PreprationRight