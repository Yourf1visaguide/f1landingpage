"use client";

import { WhySection as WhySectionType } from "@/lib/types";
import { motion } from "framer-motion";
import {
  Globe,
  Building2,
  BadgeCheck,
  BriefcaseBusiness,
  IdCard,
  Rocket,
  ArrowUpRight,
  MessageCircle,
  SendHorizonal,
} from "lucide-react";
import Badge from "../Badge";
import RedButton from "../Red-Buttons";



export default function WhySection({title, description, features, badge}:WhySectionType) {

  const icons = {
   globe: Globe,
  building2: Building2,
  badgeCheck: BadgeCheck,
  briefcaseBusiness: BriefcaseBusiness,
  idCard: IdCard,
  rocket: Rocket,
};
  return (
    <section className="bg-zinc-50 py-24" id="whyNetherlands">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center mb-16"
        >
          <Badge isLive={true} text={badge} color="blue" />

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-zinc-950 md:text-5xl/tight">
            {title}
           
          </h2>

          <p className="mt-6 text-lg text-zinc-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {

            const Icon = icons[feature.icon as keyof typeof icons];;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`
                  group
                  rounded-md
                  border
                  border-zinc-200
                  bg-white
                  p-8
                  shadow-sm
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-red-200
                  hover:shadow-md
                  lg:col-span-1 min-h-[280px]
                `}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-100">
                  <Icon className="h-7 w-7 text-red-600" />
                </div>

                <h3 className="mt-4 text-2xl font-bold text-zinc-950">
                  {feature.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-zinc-600">
                  {feature.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-red-600 group-hover:w-40 transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
        <div className="pt-12 flex justify-center ">

        </div>
      </div>
    </section>
  );
}