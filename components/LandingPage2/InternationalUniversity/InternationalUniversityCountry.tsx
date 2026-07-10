import Image from "next/image";

import InternationalUniversityCard from "./InternationalUniversityCard";

import { InternationalUniversityCountry as InternationalUniversityCountryType, InternationalUniversityType } from "@/lib/types";

interface InternationalUniversityCountryProps {
  item: InternationalUniversityCountryType;
}

export default function InternationalUniversityCountry({
  item,
}: InternationalUniversityCountryProps) {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex items-center gap-4">
        <div className="relative size-14 rounded-full">
          <Image
          src={`https://flagcdn.com/w80/${item.flag}.png`}
          alt={item.country}
          fill
          className="rounded-full border border-zinc-200 shadow-sm"
        />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-zinc-900">
            {item.country}
          </h3>

          <p className="mt-1 text-zinc-600">
            {item.description}
          </p>
        </div>
      </div>

      {/* Universities */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {item.universities.map((university) => (
          <InternationalUniversityCard
            key={university.name}
            items={university}
            country={item.country}
            flag={item.flag}
          />
        ))}
      </div>
    </div>
  );
}