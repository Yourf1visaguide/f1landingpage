import {
FileText,
Monitor,
Landmark,
GraduationCap,
BadgeDollarSign,
MessageCircle,
} from "lucide-react";
import Badge from "@/components/Badge";
import BlackButton from "@/components/BlackButton";
import { handleWhatsappClick } from "@/function/handleWhatsapp";
import PreprationCtaButton from "./PreprationCtaButton";
import PreprationRight from "./PreprationRight";

export default function PreparationSection() {
const documents = [
{
icon: <FileText className="h-7 w-7 text-red-600" />,
title: "Valid Passport & Form I-20",
description:
"Ensuring your core eligibility documents are perfectly aligned.",
},
{
icon: <Monitor className="h-7 w-7 text-red-600" />,
title: "DS-160 Confirmation",
description:
"Completed and verified online application forms.",
},
{
icon: <Landmark className="h-7 w-7 text-red-600" />,
title: "Financial Evidence",
description:
"Structuring bank statements and loan approvals beautifully.",
},
{
icon: <GraduationCap className="h-7 w-7 text-red-600" />,
title: "Study Documents",
description:
"Academic transcripts, degree certificates, and test scores (IELTS / PTE / Duolingo).",
},
];

return ( <section id="requirements" className="relative overflow-hidden bg-slate-50 py-20">

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8 flex justify-center items-center flex-col">
    {/* Badge */}
<Badge text="Preparation" color="red"  />

    {/* Header */}

    <div className="mt-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl text-center">
        Requirements & Costs at a <span className="text-red-700">Glance</span>
        
      </h2>

      <p className="mt-6 text-lg text-slate-600 text-center">
        Know exactly what documents to prepare and fees
        to budget for.
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
                Documents We Help You Organize
              </h3>

              <p className="text-sm text-slate-500">
                Everything needed for a strong visa profile.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {documents.map((item) => (
              <div
                key={item.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-red-200
                  hover:shadow-lg
                "
              >
                <div className="mb-4">
                  {item.icon}
                </div>

                <h4 className="mb-3 font-semibold text-slate-900">
                  {item.title}
                </h4>

                <p className="text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}

      <PreprationRight />
    </div>
  </div>
</section>

);
}
