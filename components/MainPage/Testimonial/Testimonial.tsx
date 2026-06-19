"use client";
import { TestimonialGridSection } from "./TestimonialGridSection";
import { useEffect, useState } from "react";
import { Testimonial } from "@/lib/types";

// --- Main Export ---
export default function TestimonialsPage() {
  const [testimonialsData, setTestimonialsData] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getTestimonials() {
      try {
        setLoading(true);
        setError(null);
        const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;

        const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Google Sheet request failed: ${response.status}`);
        }

        const text = await response.text();
        const start = text.indexOf("{");
        const end = text.lastIndexOf("}");

        const json = JSON.parse(text.substring(start, end + 1));

        const data: Testimonial[] = await json.table.rows
          .map((row: any) => ({
            id: Number(row.c[0]?.v ?? 0),
            tagColor: "bg-red-50 text-red-800 border-red-300",
            description: String(row.c[1]?.v ?? ""),
            name: String(row.c[2]?.v ?? ""),
            visa: String(row.c[3]?.v ?? ""),
            location: String(row.c[4]?.v ?? ""),
            initials: String(row.c[5]?.v ?? ""),
            priority: Boolean(row.c[6]?.v ?? false),
            videoUrl: String(row.c[7]?.v ?? "").trim(),
            tag: String(
              row.c[8]?.v?.trim() && row.c[8]?.v?.trim() !== "-"
                ? row.c[8].v.trim()
                : "Study Visa",
            ),
            type: String(row.c[9]?.v?.toLowerCase()),
          }))
          .filter((item: Testimonial) => item.id > 0)
          .sort((a: Testimonial, b: Testimonial) => {
            // Featured first
            if (a.priority !== b.priority) {
              return a.priority ? -1 : 1;
            }

            // Then by ID
            return a.id - b.id;
          });
        setTestimonialsData(data);
      } catch (error) {
        setError("Unable to load testimonials.");
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
    <main id="stories" className="bg-zinc-100 border-t-2 border-zinc-200">
      <TestimonialGridSection
        testimonialsData={testimonialsData}
        loading={loading}
        error={error}
      />
    </main>
  );
}
