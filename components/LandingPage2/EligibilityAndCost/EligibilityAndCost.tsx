import {
  FileText,
  Monitor,
  Landmark,
  GraduationCap,
  BadgeDollarSign,
  MessageCircle,
  CheckCircle,
  CheckCheckIcon,
} from "lucide-react";
import Badge from "@/components/Badge";
import BlackButton from "@/components/BlackButton";
import { handleWhatsappClick } from "@/function/handleWhatsapp";
import EligibilityCtaButton from "./EligibilityCtaButton";

export default function EligibilityAndCost() {
  const documents = [
    {
      icon: <FileText className="h-7 w-7 text-red-600" />,
      title: "Masters Eligibility",
      description: [
        "Bachelor's degree with 70%+ marks",
        "IELTS: 6.0 bands / PTE: 50+",
        "Up to 5 years study gap accepted",
        "No old funds required",
        "Visa guarantee included",
        "Low scores? IELTS 5 / PTE 40 may work — ask us!",
      ],
    },
    {
      icon: <FileText className="h-7 w-7 text-red-600" />,
      title: "Bachelors Eligibility",
      description: [
        "12th with 60%+ mark",
        "IELTS: 7.0 bands / PTE: 65+",
        "Up to 5 years gap acceptable",
        "No old funds required",
        "Visa guarantee included",
        "Financial help available if needed",
      ],
    },
  ];

  return (
    <section
      id="requirements"
      className="relative overflow-hidden bg-slate-50 py-20"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 flex justify-center items-center flex-col">
        {/* Badge */}
        <Badge text="Preparation" color="red" />

        {/* Header */}

        <div className="mt-6 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl text-center">
            Check your{" "}
            <span className="text-red-700">Eligibility & Cost </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 text-center">
            Flexible criteria designed to give every Indian student a real shot
            at Europe. Complete Netherlands education under ₹13–15 Lakhs.
            Everything included.
          </p>
        </div>

        {/* Content */}

        <div className="mt-16 grid gap-8 lg:grid-cols-12 rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          {/* Left Side */}

          <div className="lg:col-span-7 ">
            <div className="">
              <div className="mb-8 flex items-center gap-3">
                <div className="rounded-2xl bg-red-50 p-3">
                  <FileText className="h-6 w-6 text-red-600" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Eligibility
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
                  rounded-
                  border
                  border-zinc-200 
                  bg-white
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-red-200
                  hover:shadow-lg
                  rounded-md
                "
                  >
                    <div className="mb-4 flex gap-x-2 font-semibold text-slate-900 ">
                      {item.icon} {item.title}
                    </div>

                    <ul className="text-sm leading-6 text-slate-600">
                      {item.description.map((li, index) => (
                        <li key={index} className="py-1 flex items-center  ">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />{" "}
                          {li}
                        </li>
                      ))}
                    </ul>
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
                  <h3 className="font-bold text-slate-900">Cost</h3>

                  <p className="text-sm text-slate-500">Under 15 Lakhs.</p>
                </div>
              </div>

              <div className="mt-8 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="text-slate-600">SEVIS I-901 Fee</span>

                  <span className="font-bold text-slate-900">$350</span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="text-slate-600">
                    MRV Application Fee (DS-160)
                  </span>

                  <span className="font-bold text-slate-900">$185</span>
                </div>
              </div>

              <div className="my-6 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent " />

              <div className="mt-0 flex justify-between  items-center">
                <span className="text-xl text-zinc-700 font-semibold">
                  Our Full Service Package
                </span>{" "}
                <span className="font-bold text-2xl text-red-700">
                  Rs 36,000
                </span>
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-500">
                * The Rs 36,000 fee covers our complete end-to-end consulting,
                DS-160 preparation, document structuring, and interview
                coaching. US Government fees are paid separately.
              </p>

              <EligibilityCtaButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
