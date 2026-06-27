"use client";
import Image from "next/image";
import {
  Clock3,
  FileText,
  BadgeDollarSign,
  Plane,
  ChevronRight,
  Check,
  Star,
} from "lucide-react";
import { TouristDestination } from "@/lib/types";
import StatCard from "./StatCard";
import { useState } from "react";
import TouristCardBack from "./TouristCardBack";
import TouristCardFront from "./TouristCardFront";

type TouristCardProps = {
  data: TouristDestination;
  onClick?: () => void;
};

export default function TouristCard({ data, onClick }: TouristCardProps) {
  const [flip, setFlip] = useState(false);
  const handleBottomVisible = () => {
    setFlip(true);
  };
  const handleBottomHidden = () => {
    setFlip(false);
  };
  console.log(flip);
  return (
    <button
      onClick={() => setFlip((prev) => !prev)}
      className=" group relative w-full border border-red-50 rounded-xl overflow-hidden bg-black text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl cursor-pointer "
    >
      {/* Image */}

      <div className="relative h-[480px]">
        <Image
          src={data.image}
          alt={data.country}
          fill
          priority
          className=" object-cover transition-transform duration-700 group-hover:scale-110 "
        />

        {/* Overlay */}

        <div className=" absolute  inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/85 " />

        
          <div className="perspective-[1500px]">

    <div
        className={`
            relative
            h-[480px]
            transition-transform
            duration-700
            [transform-style:preserve-3d]
            ${flip ? "[transform:rotateY(180deg)]" : ""}
        `}
    >

        <div
            className="
                absolute
                inset-0
                [backface-visibility:hidden]
            "
        >
            <TouristCardFront data={data} />
        </div>

        <div
            className="
                absolute
                inset-0
                [transform:rotateY(180deg)]
                [backface-visibility:hidden]
            "
        >
            <TouristCardBack data={data} />
        </div>

    </div>

</div>
      
        
      </div>
    </button>
  );
}
