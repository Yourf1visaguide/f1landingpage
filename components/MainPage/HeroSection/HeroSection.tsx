import HeroRight from "./HeroRight";
import HeroLeft from "./HeroLeft";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#fafafa] overflow-hidden ">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tl from-red-100 via-transparent to-zinc-200 opacity-60 blur-2xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-32 lg:pt-32 lg:pb-32 ">
        <div className="grid lg:grid-cols-12">
          
          <HeroLeft />
          <HeroRight />

        </div>
      </div>
    </section>
  );
}