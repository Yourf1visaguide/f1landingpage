"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// --- Data ---
const slides = [
    {
      id: 1,
      name: "Vikrant Bawa",
      role: "Algoma University",
      image: "t1.png",
      rating: 5,
      text: "Admit Letter's expert guidance combined with the Decoding F-1 Visa Interview E-Book helped me understand the interview process clearly. This preparation helped me crack my F-1 visa interview successfully.",
    },
    {
      id: 2,
      name: "Tanya",
      role: "Toranto College",
      image: "t2.png",
      rating: 5,
      text: "I am truly thankful to Admit Letter for their support. Their expert counselling helped me to crack usa  study visa and their  Decoding F-1 Visa Interview E-Book by Admit Letter played a major role in my preparation. ",
    },
    {
      id: 3,
      name: "Amandeep Singh",
      role: "Toranto College",
      image: "t3.png",
      rating: 5,
      text: "I received excellent guidance from Admit Letter. Their mock interviews and documentation support played a key role in my visa approval. The detailed guidance helped me crack my F-1 visa interview.",
    },
    {
      id: 4,
      name: "Rajveer Singh",
      role: "Toranto College",
      image: "t4.png",
      rating: 5,
      text: "Admit Letter made the entire visa process smooth and transparent. The Decoding F-1 Visa Interview E-Book helped me handle tricky interview questions with confidence, resulting in my successful visa approval. ",
    },
    {
      id: 5,
      name: "Guldeep Singh",
      role: "Toranto College",
      image: "t5.png",
      rating: 5,
      text: "Admit Letter guided me after my wife moved to the USA. Their clear guidance and documentation support helped me and our daughter successfully receive our dependent visas.",
    },
    {
      id: 6,
      name: "Meena",
      role: "Toranto College",
      image: "t6.png",
      rating: 5,
      text: "Their expert counselling and interview preparation helped me clear my F-1 visa interview with confidence. Because of their transparent process and continuous support, I was able to achieve my dream of studying in the USA.",
    },
    {
      id: 7,
      name: "Sahibjit Singh",
      role: "Toranto College",
      image: "t7.png",
      rating: 5,
      text: "I had a great experience with Admit Letter. Their step-by-step guidance and visa interview preparation using Admit Letter’s Decoding F-1 Visa Interview E-Book made my USA study visa process smooth and stress-free.",
    },
    {
      id: 8,
      name: "Anshdeep Singh",
      role: "Toranto College",
      image: "t8.png",
      rating: 5,
      text: "Admit Letter supported me at every stage of my USA study visa journey. The Decoding F-1 Visa Interview E-Book prepared me for real interview questions and helped me achieve my visa approval with confidence",
    },
    {
      id: 9,
      name: "Gurwinder Singh",
      role: "Toranto College",
      image: "t9.png",
      rating: 5,
      text: "I am thankful to Admit Letter for their continuous support. The Decoding F-1 Visa Interview E-Book played an important role in helping me stay calm and confident during my F-1 visa interview.",
    }, 
    {
      id: 10,
      name: "Aman Kumar",
      role: "Toranto College",
      image: "t10.png",
      rating: 5,
      text: "Admit Letter guided me throughout my USA study visa journey. Their professional approach and constant support helped me achieve my goal. Also, Admit Letter’s Decoding F-1 Visa Interview E-Book made interview preparation very easy.",
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
    }, 2000); // Change slide every 5 seconds

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
      id="MainSection"
      className="relative w-full h-[600px] bg-red-50 overflow-hidden flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Container */}
      <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center ">
        
        {slides.map((slide, index) => {
          const position = getSlidePosition(index);
          
          // Base styles for all slides
          let baseClasses = "absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-lg overflow-hidden shadow-2xl";
          let specificClasses = "";

          if (position === "center") {
            specificClasses = "w-[80%] h-full z-20 opacity-100 scale-100 translate-x-0 bg-white";
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
                src={`/images/testimonials/${slide.image}`}
                alt={slide.role}
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
            {slides[activeIndex].name}
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