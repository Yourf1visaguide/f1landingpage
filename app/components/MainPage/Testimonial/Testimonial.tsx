import { TestimonialGridSection } from "./TestimonialGridSection";
import { TestimonialSliderSection } from "./TestimonialSliderSection";

// --- Main Export ---
export default function TestimonialsPage() {
  return (
    <main className="bg-zinc-100 border-t-2 border-zinc-200">
      <TestimonialGridSection />
      {/* <TestimonialSliderSection /> */}
    </main>
  );
}