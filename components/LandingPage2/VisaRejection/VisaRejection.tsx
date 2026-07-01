"use client";

import { motion } from "framer-motion";

import Badge from "@/components/Badge";
import RedButton from "@/components/Red-Buttons";
import { icons } from "@/lib/icons";
import {
 CheckCircle2,
  XCircle,
} from "lucide-react";
import { handleWhatsappClick } from "@/function/handleWhatsapp";

type Props = {
  badge: string;
  title: React.ReactNode;
  description: string;

  reasons: {
    reason: {
      icon: string;
      title: string;
      description: string;
    };

    solution: {
      icon: string;
      title: string;
      description: string;
    };
  }[];

  cta: {
    title: string;
    description: string;
    points: string[];
  };

  buttonText: string;
};

export default function VisaRejection({
  badge,
  title,
  description,
  reasons,
  cta,
  buttonText,
}: Props) {


  return (
    <section className="bg-zinc-50 py-24" id="rejection">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <Badge isLive color="red" text={badge} />

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-zinc-950 md:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            {description}
          </p>
        </motion.div>

        {/* Comparison */}

        <div className="mt-16 space-y-5">
          {reasons.map((item, index) => {
            const ReasonIcon = icons[item.reason.icon as keyof typeof icons];

            const SolutionIcon =
              icons[item.solution.icon as keyof typeof icons];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                }}
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-zinc-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <div className="grid lg:grid-cols-2">
                  {/* Left Side */}

                  <div
                    className="
                    border-b
                    border-zinc-200
                    bg-red-50/60
                    p-8
                    lg:border-b-0
                    lg:border-r
                  "
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-red-100
                      "
                      >
                        <XCircle className="size-6 text-red-600" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
                          Common Mistake
                        </p>

                        <h3 className="mt-1 text-2xl font-bold text-zinc-950">
                          {item.reason.title}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-8 flex items-start gap-5">
                      <div
                        className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white
                        shadow-sm
                      "
                      >
                        <ReasonIcon className="size-7 text-red-600" />
                      </div>

                      <p className="leading-8 text-zinc-600">
                        {item.reason.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Side */}

                  <div
                    className="
                    bg-emerald-50/50
                    p-8
                  "
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-emerald-100
                      "
                      >
                        <CheckCircle2 className="size-6 text-emerald-600" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                          Our Solution
                        </p>

                        <h3 className="mt-1 text-2xl font-bold text-zinc-950">
                          {item.solution.title}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-8 flex items-start gap-5">
                      <div
                        className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white
                        shadow-sm
                      "
                      >
                        <SolutionIcon className="size-7 text-emerald-600" />
                      </div>

                      <p className="leading-8 text-zinc-600">
                        {item.solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-20
            overflow-hidden
            rounded-[32px]
            border
            border-red-100
            bg-gradient-to-br
            from-red-50
            via-white
            to-red-50
            p-10
            shadow-xl
            shadow-red-100/40
          "
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* Left */}

            <div>
              <h3 className="text-3xl font-bold text-zinc-950">{cta.title}</h3>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
                {cta.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cta.points.map((point) => (
                  <div
                    key={point}
                    className="
                      flex
                      items-center
                      gap-3

                      rounded-2xl
                      bg-white

                      px-5
                      py-4

                      shadow-sm
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center

                        rounded-full

                        bg-red-100
                      "
                    >
                      <CheckCircle2 className="size-5 text-red-600" />
                    </div>

                    <span className="font-medium text-zinc-800">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}

            <div className="flex justify-center lg:justify-end">
              <RedButton text={buttonText} onClick={handleWhatsappClick} className="px-10 py-5 text-lg" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
