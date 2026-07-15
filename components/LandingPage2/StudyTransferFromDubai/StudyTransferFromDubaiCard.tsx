import Image from "next/image";

import { StudyTransferFromDubaiCountryType } from "@/lib/types";

interface StudyTransferFromDubaiCardProps {
  item: StudyTransferFromDubaiCountryType;
}

export default function StudyTransferFromDubaiCard({
  item,
}: StudyTransferFromDubaiCardProps) {
  return (
    <div
      className=" group flex flex-col items-center gap-3 transition-all duration-300 "
    >
      <div
        className=" relative
          flex size-12 sm:size-16 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-red-200 group-hover:shadow-lg "
      >
        <Image
          src={`https://flagcdn.com/w160/${item.flag}.png`}
          alt={item.name}
          fill
          priority={false}
          blurDataURL="/images/blur.jpg"
          fetchPriority="low"
          className="rounded-full object-cover"
        />
      </div>

      <h3 className="max-w-10 min-[360px]:max-w-20 sm:max-w-32 text-wrap text-center max-[260px]:text-[12px] text-sm font-semibold text-zinc-800">
        2nd Year {item.name}
      </h3>
    </div>
  );
}