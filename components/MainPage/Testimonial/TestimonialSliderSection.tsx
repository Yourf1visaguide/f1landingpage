import { useRef } from "react";
import TestimonialsPage from "./Testimonial";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VideoCard from "./VideoCard";
import { testimonialsData } from "./Testimonials";

export const TestimonialSliderSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Scroll by 80% of the container width for a smooth, card-by-card feel
      const scrollAmount = scrollRef.current.offsetWidth * 0.8; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1120] tracking-tight mb-2">
              Success Stories
            </h2>
            <p className="text-slate-600">
              Watch how our students turned their dreams into reality.
            </p>
          </div>
        </div>

        {/* Slider Wrapper with Relative Position for Edge Buttons */}
        <div className="relative group/slider">
          {/* Slider Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 scroll-smooth snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Spacer for edge alignment */}
            <div className="flex-shrink-0 w-2" />
            
            {testimonialsData.map((t) => (
              <div key={t.id} className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[350px] snap-center">
                <VideoCard data={t} />
              </div>
            ))}
            
            {/* Spacer for edge alignment */}
            <div className="flex-shrink-0 w-2" />
          </div>

          {/* Left Navigation Button (Black bg, White icon, positioned on left edge) */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20 w-12 h-12 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg opacity-0 group-hover/slider:opacity-100 focus:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Navigation Button (Black bg, White icon, positioned on right edge) */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 w-12 h-12 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg opacity-0 group-hover/slider:opacity-100 focus:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};