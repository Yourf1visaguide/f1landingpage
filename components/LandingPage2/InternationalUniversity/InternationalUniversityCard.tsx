import Image from "next/image";
import {
  GraduationCap,
  Globe2,
  ArrowRight,
  MapPinCheckInside,
  Check,
  Pin,
  MapPin,
} from "lucide-react";

import { InternationalUniversityArrayType } from "@/lib/types";

interface InternationalUniversityCardProps {
  item: InternationalUniversityArrayType;
}

export default function InternationalUniversityCard({
  item,
}: InternationalUniversityCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-red-100 hover:shadow-md my-8 ">
      {/* Image */}

      <div className="relative h-[300px] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className=" object-cover transition-transform duration-700 group-hover:scale-105 "
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

        {/* Country */}

        <div className="absolute left-4 top-4 rounded-full shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-x-2">
            <div className="size-6 relative rounded-full">
              <Image
                src={`https://flagcdn.com/w80/${item.flag}.png`}
                alt={item.country}
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute text-xs top-4 right-4 bg-red-700 font-semibold rounded-full px-2 py-1 text-white flex gap-x-0.5 items-start justify-around ">
          {item.featured}
        </div>
        <div className="absolute text-xs bottom-4 right-4 bg-zinc-700 font-semibold rounded-full px-2 py-1 text-zinc-50 flex gap-x-0.5 items-start justify-around ">
          Dubai Campus
        </div>

        {/* University */}
      </div>

      <div className="p-4">
        {/* University Name */}

        <h3 className="text-xl/tight font-bold leading-tight text-zinc-900  min-h-[64px] line-clamp-2">
          {item.name}
        </h3>

        {/* Country */}

        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-2 py-1 ">
          <GraduationCap className="size-4 text-red-600" />

          <span className="text-sm font-medium text-zinc-700">
            From {item.country}
          </span>
        </div>

        {/* Divider */}

        <div className="my-4 border-t border-dashed border-zinc-200" />

        {/* Programs */}

        <div>
          <div className="mb-4 flex items-center gap-2">
            <GraduationCap className="size-5 text-red-600" />

            <h4 className="text-base font-semibold text-zinc-900">
              Popular Programs
            </h4>
          </div>

          <ul className="space-y-2">
            {item.programs.map((program) => (
              <li key={program} className="flex items-center gap-3">
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-red-50">
                  <Check className="size-4 text-red-600"/>
                </div>

                <span className="text-base text-zinc-700">{program}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
