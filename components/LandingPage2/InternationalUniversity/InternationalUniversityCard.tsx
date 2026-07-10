import Image from "next/image";

import { GraduationCap } from "lucide-react";

import { InternationalUniversity, InternationalUniversityType } from "@/lib/types";

interface UniversityCardProps {
  items: InternationalUniversity;
  country:string;
  flag:string;
}

export default function UniversityCard({
  items,
  country,
  flag
}: UniversityCardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-zinc-200
        bg-white
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-red-200
        hover:shadow-xl
      "
    >
      <div className="flex items-center justify-between">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            bg-red-50
          "
        >
          {items.image ? (
            <Image
              src={items.image}
              alt={items.name}
              width={42}
              height={42}
              className="object-contain"
            />
          ) : (
            <GraduationCap
              className="text-red-600"
              size={26}
            />
          )}
        </div>

        <Image
          src={`https://flagcdn.com/w80/${flag}.png`}
          alt={country}
          width={26}
          height={18}
          className="rounded-sm border"
        />
      </div>

      <h3
        className="
          mt-5
          line-clamp-2
          text-lg
          font-semibold
          text-zinc-900
        "
      >
        {items.name}
      </h3>

      <p className="mt-2 text-sm text-zinc-500">
        {country}
      </p>
    </div>
  );
}