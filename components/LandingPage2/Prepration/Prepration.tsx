import {
FileText,
Monitor,
Landmark,
GraduationCap,
} from "lucide-react";

import Badge from "@/components/Badge";
import PreprationRight from "./PreprationRight";
import { CostAndRequirementType } from "@/lib/types";
import { icons } from "@/lib/icons";

export default function PreparationSection({data}:{data:CostAndRequirementType}) {
const documents = data.documents

return ( <section id="requirements" className="relative overflow-hidden bg-slate-50 py-20">

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8 flex justify-center items-center flex-col">
    {/* Badge */}
<Badge text={data.badge} color="red"  />

    {/* Header */}

    <div className="mt-6 ">
      <h2 className="text-4xl mx-auto max-w-4xl font-bold tracking-tight text-slate-900 lg:text-5xl text-center">
        {data.title}
        
      </h2>

      <p className="mt-6 text-lg text-slate-600 text-center mx-auto max-w-5xl">
        {data.description}
      </p>
    </div>

    {/* Content */}

    <div className="mt-16 grid gap-8 lg:grid-cols-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      {/* Left Side */}

      <div className="lg:col-span-7 ">
        <div className="">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-2xl bg-red-50 p-3">
              <FileText className="h-6 w-6 text-red-600" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {documents.title}
              </h3>

              <p className="text-sm text-slate-500">
                {documents.description}
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {documents.items.map((item) => {
              const Icon = icons[item.icon as keyof typeof icons]
              return (<div
                key={item.title}
                className=" group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg "
              >
                <div className="mb-4">
                  <Icon className="size-8 text-red-600" />
                </div>

                <h4 className="mb-3 font-semibold text-slate-900">
                  {item.title}
                </h4>

                <p className="text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>)
            })}
          </div>
        </div>
      </div>

      {/* Right Side */}

      <PreprationRight data={data}/>
    </div>
  </div>
</section>

);
}
