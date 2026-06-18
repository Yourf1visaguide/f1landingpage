"use client";

import {useState } from "react";
import { Loader2, MessageCircle } from "lucide-react";

import BlackButton from "@/components/BlackButton";
import VideoCard from "./VideoCard";
import RedButton from "@/components/Red-Buttons";
import { handleWhatsappClick } from "@/function/handleWhatsapp";
import { Testimonial } from "@/lib/types";
import VideoCardSkeleton from "./VideoCardSkeleton";

// --- Section 1: Instagram-style Grid ---

export const TestimonialGridSection = ({
  testimonialsData,
  error,
  loading,
}: {
  testimonialsData: Testimonial[];
  error: string | null;
  loading: boolean;
}) => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 4);
      setIsLoading(false);
    }, 800);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0B1120] tracking-tight mb-4">
          Real Students. <span className="text-[#DC2626]">Real Results.</span>
        </h2>
        <p className="text-lg text-slate-600  mx-auto">
          Join thousands of successful applicants who navigated the F-1 process
          with our strategy.
        </p>
      </div>

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center">
          <h3 className="text-xl font-semibold text-red-700">
            Unable to load student stories
          </h3>

          <p className="mt-2 text-zinc-600">
            Please refresh the page and try again.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-5 py-2 bg-red-700 text-white rounded-lg"
          >
            Retry
          </button>
        </div>
      ) : loading === false ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.slice(0, visibleCount).map((t) => (
            <VideoCard key={t.id} data={t} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <VideoCardSkeleton key={index} />
          ))}
        </div>
      )}

      <div className="flex justify-center mt-15 gap-x-4">
        {visibleCount < testimonialsData.length && (
          <BlackButton
            onClick={handleLoadMore}
            disabled={isLoading}
            className="text-xl"
            text={isLoading ? "Loading..." : "Load More Stories"}
            icon={
              isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : null
            }
          />
        )}

        <RedButton
          onClick={handleWhatsappClick}
          text="APPLY IN JUST RS 36000"
          className="text-xl py-4"
          icon={<MessageCircle className="size-4" />}
        />
      </div>
    </section>
  );
};
