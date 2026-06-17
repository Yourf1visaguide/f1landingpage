"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// --- Data ---
const slides = [
  {
    id: 1,
    src: "1.webp",
    alt: "Modern minimalist living room with white sofa",
    caption: "Modern Interior",
  },
  {
    id: 2,
    src: "2.avif",
    alt: "Cozy bedroom with warm lighting",
    caption: "Cozy Retreat",
  },
  {
    id: 3,
    src: "3.jpg",
    alt: "Scandinavian style dining area",
    caption: "Scandinavian Design",
  },
  {
    id: 4,
    src: "2.avif",
    alt: "Luxury bathroom with marble finishes",
    caption: "Luxury Finishes",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Helper to determine slide position relative to active
  const getSlidePosition = (index: number) => {
    const diff = index - activeIndex;
    const total = slides.length;
    
    // Handle wrapping
    if (diff === 1 || diff === -(total - 1)) return "right";
    if (diff === -1 || diff === (total - 1)) return "left";
    if (diff === 0) return "center";
    return "hidden";
  };

  return (
    <section 
      className="relative w-full h-[600px] bg-[#FAFAFA] overflow-hidden flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Container */}
      <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center">
        
        {slides.map((slide, index) => {
          const position = getSlidePosition(index);
          
          // Base styles for all slides
          let baseClasses = "absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-lg overflow-hidden shadow-2xl";
          let specificClasses = "";

          if (position === "center") {
            specificClasses = "w-[80%] h-full z-20 opacity-100 scale-100 translate-x-0";
          } else if (position === "left") {
            // 10% peek on desktop, 5% on mobile
            specificClasses = "w-[80%] h-[90%] z-10 opacity-60 scale-95 -translate-x-[90%] md:-translate-x-[90%] -translate-x-[85%] sm:-translate-x-[88%]"; 
          } else if (position === "right") {
            specificClasses = "w-[80%] h-[90%] z-10 opacity-60 scale-95 translate-x-[90%] md:translate-x-[90%] translate-x-[85%] sm:translate-x-[88%]";
          } else {
            specificClasses = "w-[80%] h-full z-0 opacity-0 scale-90 pointer-events-none";
          }

          return (
            <div key={slide.id} className={`${baseClasses} ${specificClasses}`}>
              <Image
                src={`/images/${slide.src}`}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
              {/* Subtle overlay for side images to enhance depth */}
              {position !== "center" && (
                <div className="absolute inset-0 bg-black/20" />
              )}
            </div>
          );
        })}

        {/* Navigation Buttons - Placed over the peek areas */}
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 z-30  w-8 h-8 md:w-10 md:h-10 cursor-pointer bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 cursor-pointer bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Caption Area */}
      <div className="absolute bottom-8 left-0 right-0 text-center z-30 pointer-events-none">
        <div className="inline-block bg-white/90 backdrop-blur-md px-8 py-3 rounded-full shadow-lg border border-white/50">
          <h2 className="text-2xl md:text-3xl font-serif italic text-[#0B1120] tracking-wide">
            {slides[activeIndex].caption}
          </h2>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex ? "bg-[#0B1120] w-6" : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}