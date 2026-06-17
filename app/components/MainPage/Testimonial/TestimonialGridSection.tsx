"use client";

import React, { useState, useRef } from "react";
import { Play, Star, Loader2, MessageCircle } from "lucide-react";
import Image from "next/image";

import BlackButton from "../../BlackButton";
import { testimonialsData } from "./Testimonials";
import VideoCard from "./VideoCard";
import RedButton from "../../Red-Buttons";
import { handleWhatsappClick } from "@/app/function/handleWhatsapp";

// --- Section 1: Instagram-style Grid ---
export const TestimonialGridSection = () => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonialsData.slice(0, visibleCount).map((t) => (
          <VideoCard key={t.id} data={t} />
        ))}
      </div>

      
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
          <RedButton onClick={handleWhatsappClick} text="APPLY IN JUST RS 36000" className="text-xl py-4" icon={<MessageCircle className="size-4" />} />
          
        </div>
      

      
    </section>
  );
};
