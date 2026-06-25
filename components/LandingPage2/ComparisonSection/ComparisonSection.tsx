"use client";

import Badge from "@/components/Badge";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  Trophy,
  GitCompare,
} from "lucide-react";

const rows = [
  {
    feature: "Visa Approval Ratio",
    canada: "Very Low",
    australia: "Very Low",
    uk: "Low",
    germany: "Medium",
    netherlands: "HIGH",
  },
  {
    feature: "Total Cost (INR)",
    canada: "30L+",
    australia: "35L+",
    uk: "30L+",
    germany: "20L+",
    netherlands: "13–15L",
  },
  {
    feature: "Schengen Access",
    canada: false,
    australia: false,
    uk: false,
    germany: true,
    netherlands: true,
  },
  {
    feature: "Work While Studying",
    canada: "Limited",
    australia: "Limited",
    uk: "Limited",
    germany: "Yes",
    netherlands: "16–20 Hrs",
  },
  {
    feature: "Low IELTS Accepted",
    canada: false,
    australia: false,
    uk: false,
    germany: false,
    netherlands: "5 Bands",
  },
  {
    feature: "Gap Years Accepted",
    canada: "Limited",
    australia: "Limited",
    uk: "Limited",
    germany: "Limited",
    netherlands: "5 Years",
  },
  {
    feature: "Visa Guarantee",
    canada: false,
    australia: false,
    uk: false,
    germany: false,
    netherlands: true,
  },
];

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
    ) : (
      <XCircle className="mx-auto h-5 w-5 text-red-500" />
    );
  }

  if (value === "Medium") {
    return (
      <div className="flex items-center justify-center gap-2">
        <AlertCircle className="h-4 w-4 text-amber-500" />
        <span>{value}</span>
      </div>
    );
  }

  return <span>{value}</span>;
}

export default function CountryComparison() {
  return (
    <section className="bg-white py-24" id="whyNetherlands">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          {/* <Badge  text="COUNTRY COMPARISON" /> */}

          <h2 className="mt-6 text-4xl font-bold text-slate-950 md:text-5xl">
            Why Netherlands{" "}
            <span className="text-red-600">
              Beats Every Option
            </span>{" "}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-700">
            The numbers don't lie. See why thousands of Indian students are
            making the smart switch.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 overflow-x-auto"
        >
          <div className="min-w-[800px] overflow-hidden rounded-md border border-red-200 bg-white shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-center bg-black border-b border-slate-200 ">
              <div className="bg-black min-w-44    px-3 py-4 font-bold text-white">
                Feature
              </div>
              <div className="bg-black w-28 px-3 py-4  text-center font-semibold text-white">
                Canada
              </div>

              <div className="bg-black w-28 px-3 py-4  text-center font-semibold text-white">
                Australia
              </div>

              <div className="bg-black w-28 px-3 py-4  text-center font-semibold text-white">
                UK
              </div>

              <div className="bg-black w-32 px-3 py-4  text-center font-semibold text-white">
                Germany
              </div>

              <div className="flex justify-center items-center bg-red-700 px-3 py-4 text-center text-white w-64 text-base font-bold h-full">
                <Trophy className="h-6 w-6 text-amber-300 mr-2  " />
                  Netherlands <i className="text-sm ">(BEST OPTION)</i> 
                  
                
              </div>
            </div>

            {/* Rows */}
            
{rows.map((row, index) => (
              <div
                key={row.feature}
                className={`flex justify-between items-center cursor-pointer ${
                  index % 2 === 0
                    ? "bg-red-50/50"
                    : "bg-white"
                } hover:bg-red-50 transition-colors`}
              >
                <div className="px-3 py-3 min-w-44 font-semibold text-slate-900 text-sm ">
                  {row.feature}
                </div>

                <div className="px-3 py-3 w-28  text-center text-zinc-600">
                  <Cell value={row.canada} />
                </div>

                <div className="px-3 py-3 w-28  text-center text-zinc-600">
                  <Cell value={row.australia} />
                </div>

                <div className="px-3 py-3 w-28 text-center text-zinc-600">
                  <Cell value={row.uk} />
                </div>

                <div className="px-3 py-3 w-32 text-center text-zinc-600 ">
                  <Cell value={row.germany} />
                </div>

                <div className="border-l w-64 border-red-200 bg-red-50 px-3 py-5 text-center font-bold text-red-700 h-full border-b">
                  <Cell value={row.netherlands} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}