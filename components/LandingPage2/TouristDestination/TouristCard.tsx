"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react"; 
import { TouristDestination } from "@/lib/types"; 
import TouristCardFront from "./TouristCardFront"; 
type TouristCardState = "default" | "selected" | "inactive"; 
type TouristCardProps = {
  data: TouristDestination; 
  state: TouristCardState; 
  step: number; 
  category: string; 
  onSelect: () => void; };

export default function TouristCard({
  data,
  state,
  step,
  category,
  onSelect,
}: TouristCardProps) {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover:hover)");
    const update = () => {
      setCanHover(media.matches);
    };

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const selected = state === "selected";
  const inactive = state === "inactive";

  return (
    <div
      onClick={onSelect}
      className={` group relative cursor-pointer transition-all duration-500 ${selected ? "-translate-y-1" : "hover:-translate-y-1"} ${inactive ? "opacity-65 grayscale-[.25] scale-[.97]" : ""} `}
    >
      <div
        className={` relative h-[520px]  overflow-hidden rounded-lg border transition-all duration-500 ${
          selected
            ? ` border-red-500 shadow-[0_20px_50px_rgba(220,38,38,.28)] `
            : `
                border-white/10 hover:border-red-200 hover:shadow-2xl `
        } `}
      >
        {/* Background Image */}

        <Image
          src={data.image}
          alt={data.country}
          fill
          priority
          className={` object-cover transition-all rounded-lg duration-700 ${selected ? "scale-110 brightness-105 saturate-110" : ` group-hover:scale-110 group-hover:brightness-110 group-hover:saturate-110 `} `}
        />

        {/* Overlay */}

        <div className=" absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/90 " />

        {/* Step */}

        

        {/* Selected Badge */}

        <div
          className={` absolute right-3 top-3 z-20 flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-500 ${
            selected
              ? "translate-y-0 opacity-100 scale-100"
              : "-translate-y-3 opacity-0 scale-75"
          } `}
        >
          <CheckCircle2 className="size-4" />
          Your Choice
        </div>

        {/* Content */}

        <div className=" absolute inset-0 flex flex-col justify-end ">
          <TouristCardFront data={data} selected={selected} />
        </div>

        {/* Bottom Status */}

        <div
          className={` absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/10 backdrop-blur-xl transition-all duration-500 ${selected ? "bg-red-600" : "bg-black/45 group-hover:bg-black/60"} `}
        >
          <div className=" flex items-center justify-center px-6 py-4 ">
            {selected ? (
              <div className=" flex items-center gap-3 text-white animate-in fade-in zoom-in-95 duration-300 ">
                <CheckCircle2 className="size-5" />

                <div>
                  <div className="font-semibold tracking-wide">
                    Destination Selected
                  </div>

                  <div className="text-xs text-white/80">
                    Click again to change your selection
                  </div>
                </div>
              </div>
            ) : (
              <div
                className=" flex items-center gap-3 transition-all duration-300 text-white " >
                <div className=" size-3 rounded-full border-2 border-white/80 transition-all duration-300 group-hover:scale-125 group-hover:border-red-400 " />

                <div>
                  <div className="font-medium">
                    {canHover ? "Click to Choose" : "Tap to Choose"}
                  </div>

                  <div className="text-xs text-white/60">
                    Make this your destination
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
