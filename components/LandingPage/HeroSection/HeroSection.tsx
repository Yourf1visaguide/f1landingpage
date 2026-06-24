import HeroRight from "./HeroRight";
import HeroLeft from "./HeroLeft";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#fafafa] overflow-hidden mt-16 ">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-full h-full bg-linear-to-l to-zinc-900 via-zinc-900 from-transparent opacity-80  z-10" />
      <Image src="/images/hero-section-bg.jpg" fill alt="Background Image"  className="z-0 object-cover object-top"/>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-12 lg:pt-16 lg:pb-16 ">
        <div className="flex flex-col">
          
          <HeroLeft />
          {/* <HeroRight /> */}

        </div>
      </div>
    </section>
  );
}