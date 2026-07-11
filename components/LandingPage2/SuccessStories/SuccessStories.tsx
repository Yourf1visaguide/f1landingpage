"use client";

import { ReactNode, useEffect, useState } from "react";
import {  SuccessStoryInfoType, SuccessStoryType, Testimonial } from "@/lib/types";
import { SuccessStoriesGridSection } from "./SuccessStoriesGridSection";
import { successStoryData } from "@/data/dubai";
import Badge from "@/components/Badge";

// --- Main Export ---


export default function SuccessStoriesPage({
  data, sheet
}: {data:SuccessStoryType; sheet:string;}) {
  const [testimonialsData, setTestimonialsData] = useState<SuccessStoryInfoType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getTestimonials() {
      try {
        setLoading(true);
        setError(null);

        const url = `https://docs.google.com/spreadsheets/d/${sheet}/gviz/tq?tqx=out:json`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Google Sheet request failed: ${response.status}`);
        }

        const text = await response.text();
        const start = text.indexOf("{");
        const end = text.lastIndexOf("}");

        const json = JSON.parse(text.substring(start, end + 1));

        const data: SuccessStoryInfoType[] = await json.table.rows
          .map((row: any) => ({
            id: Number(row.c[0]?.v ?? 0),
            studentName: String(row.c[1]?.v ?? ""),
            profileImage: String(row.c[2]?.v ?? ""),
            fromCountry: String(row.c[3]?.v ?? ""),
            toCountry: String(row.c[4]?.v ?? ""),
            university: String(row.c[5]?.v ?? ""),
            program: String(row.c[6]?.v ?? ""),
            step1: String(row.c[7]?.v ?? "").trim(),
            image1: String(row.c[8]?.v ?? "").trim(),
            step2: String(row.c[9]?.v ?? "").trim(),
            image2: String(row.c[10]?.v ?? "").trim(),
            step3: String(row.c[11]?.v ?? "").trim(),
            image3: String(row.c[12]?.v ?? "").trim(),
            
          }))
          .filter((item: Testimonial) => item.id > 0)
          .sort((a: Testimonial, b: Testimonial) => {
            return a.id - b.id;
          });
        setTestimonialsData(data);
      } catch (error) {
        setError("Unable to load Success Stories.");
        if (process.env.NODE_ENV === "development") {
          console.error("[TESTIMONIALS_ERROR_FETCHING_SHEET]", error);
        }
      } finally {
        setLoading(false);
      }
    }

    getTestimonials();
  }, []);
  console.log(testimonialsData);
  return (
    <main id="stories" className="border-b-2 bg-zinc-100 border-t-2 border-zinc-200">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden ">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge text={data.badge} isLive={true} />
          <h2 className="text-4xl pt-6 pb-2 max-w-4xl mx-auto sm:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
            {data.title}
          </h2>

          <p className="text-lg max-w-5xl text-zinc-600  mx-auto">
            {data.description}
          </p>
        </div>
        <SuccessStoriesGridSection
          data={testimonialsData}
          loading={loading}
          error={error}
        />
      </section>
    </main>
  );
}
