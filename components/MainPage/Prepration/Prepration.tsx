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
```
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

      <div className="lg:col-span-5">
        <div className="sticky top-10 rounded-3xl border border-red-100 bg-white p-8 shadow-xl shadow-red-100/40">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-red-50 p-3">
              <BadgeDollarSign className="h-6 w-6 text-red-600" />
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                US Gov Fees
              </h3>

              <p className="text-sm text-slate-500">
                Paid Separately
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-slate-600">
                SEVIS I-901 Fee
              </span>

              <span className="font-bold text-slate-900">
                $350
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-slate-600">
                MRV Application Fee (DS-160)
              </span>

              <span className="font-bold text-slate-900">
                $185
              </span>
            </div>
          </div>

          <div className="my-6 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent " />

          <div className="mt-0 flex justify-between  items-center">
             <span className="text-xl text-zinc-700 font-semibold">Our Full Service Package</span> <span className="font-bold text-2xl text-red-700">Rs 36,000</span> 
            </div>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            * The Rs 36,000 fee covers our complete
            end-to-end consulting, DS-160 preparation,
            document structuring, and interview coaching.
            US Government fees are paid separately.
          </p>

          <BlackButton 
            text="Apply on WhatsApp" 
            icon={<MessageCircle className="h-5 w-5" />}
            className="w-full mt-4 py-4 md:text-xl text-base"
            onClick={handleWhatsappClick}
          />
            
        </div>
      </div>
    </div>
  </div>
</section>

);
}
