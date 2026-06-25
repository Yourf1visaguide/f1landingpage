import {
  FileText,
  Monitor,
  Landmark,
  GraduationCap,
  BadgeDollarSign,
  MessageCircle,
  CheckCircle,
  CheckCheckIcon,
  Check,
} from "lucide-react";
import Badge from "@/components/Badge";
import BlackButton from "@/components/BlackButton";
import { handleWhatsappClick } from "@/function/handleWhatsapp";
import EligibilityCtaButton from "./EligibilityCtaButton";
import RightColumn from "./RightColumn";
import EligibilityCtaArea from "./EligibilityCtaArea";

export default function EligibilityAndCost() {
  const documents = [
    {
      icon: <GraduationCap className="h-7 w-7 text-red-600" />,
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
      icon: <GraduationCap className="h-7 w-7 text-red-600" />,
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
      id="eligibility"
      className="relative overflow-hidden bg-slate-50 py-20"
    >
      <div className="relative mx-auto max-w-7xl px-4 flex justify-center items-center flex-col">
        {/* Badge */}
        <Badge text="Eligibility & Cost" color="red" isLive={true} />

        {/* Header */}

        <div className="mt-6 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl text-center">
            Check your <span className="text-red-700">Eligibility & Cost </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 text-center">
            Flexible criteria designed to give every Indian student a real shot
            at Europe. Complete Netherlands education under ₹13–15 Lakhs.
            Everything included.
          </p>
        </div>

        {/* Content */}

        <div className="mt-16 grid gap-8 lg:grid-cols-12 rounded-lg border border-slate-200 bg-white p-4 py-6 shadow-sm">
          {/* Left Side */}

          <div className="lg:col-span-7 ">
            <div className="">
              <div className="mb-8 flex items-start gap-3">
                <div className="rounded-2xl bg-red-50 p-3">
                  <FileText className="h-6 w-6 text-red-600" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Clear Eligibility Criteria
                  </h3>

                  <p className="text-sm text-slate-500">
                    Check if you qualify and know exactly before starting your Netherlands journey.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {documents.map((item) => (
                  <div
                    key={item.title}
                    className=" group  border border-zinc-200  bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg rounded-lg cursor-pointer shadow-sm "
                  >
                    <div className="mb-4 flex items-center gap-x-2 font-semibold text-slate-900 ">
                      {item.icon} {item.title}
                    </div>

                    <ul className="leading-6 ">
                      {item.description.map((li, index) => (
                        <li
                          key={index}
                          className="py-2  border-zinc-200 flex items-baseline justify-start  "
                        >
                          <div className=" rounded-full bg-red-600 p-0.5 mr-2">
                            <Check className="size-3 text-white" />
                          </div>

                          <div className="text-sm sm:text-base text-justify text-zinc-950">
                            {li}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
              <EligibilityCtaArea />
              {/* <RightColumn2 /> */}

          </div>

          {/* Right Side */}

          <RightColumn />
        </div>
      </div>
    </section>
  );
}
