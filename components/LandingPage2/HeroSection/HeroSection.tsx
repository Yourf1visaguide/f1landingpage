import HeroRight from "./HeroRight";
import HeroLeft from "./HeroLeft";
import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroLeftProps{
  image:string;
  imageClass:string;
heading:ReactNode;
description:ReactNode;
}

export default function HeroSection({image, imageClass, heading, description}:HeroLeftProps) {
  return (
    <section className="relative min-h-screen bg-[#fafafa] overflow-hidden mt-16 ">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-full h-full bg-linear-to-r  from-zinc-950 from-30% via-zinc-900 via-70% to-transparent opacity-80  z-10" />
      <Image src={`/images/${image}`} fill alt="Background Image"  className={cn("z-0 object-cover", imageClass)}/>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-12 lg:pt-16 lg:pb-16 ">
        <div className="flex flex-col">
          
          <HeroLeft heading={heading} description={description} />
          {/* <HeroRight /> */}

        </div>
      </div>
    </section>
  );
}