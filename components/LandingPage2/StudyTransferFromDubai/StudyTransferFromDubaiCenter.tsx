import Image from "next/image";
import { GraduationCap } from "lucide-react";

interface StudyTransferFromDubaiCenterProps {
  title: string;
  subtitle: string;
  flag: string;
}

export default function StudyTransferFromDubaiCenter({
  title,
  subtitle,
  flag,
}: StudyTransferFromDubaiCenterProps) {
  return (
    <div
      className=" relative overflow-hidden rounded-3xl border border-red-100 bg-white px-4 sm:px-8 py-10 shadow-lg transition-all duration-300 "
    >
      {/* Decorative Background */}

      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-50" />
      <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-zinc-100" />

      <div className="relative flex flex-col items-center">

        {/* Icon */}

        <div className="flex sm:size-20 size-12  items-center justify-center rounded-full bg-red-600 shadow-lg">
          <GraduationCap
            className="text-white size-6 sm:size-10"
            
          />
        </div>

        {/* Title */}

        <h3 className="mt-6 text-lg sm:text-3xl font-bold text-zinc-900 text-nowrap">
          {title}
        </h3>

        <p className="mt-2 text-center text-zinc-600 text-nowrap">
          {subtitle}
        </p>

        {/* UAE Flag */}

        <div className="mt-6 flex items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2">

          <Image
            src={`https://flagcdn.com/w80/${flag}.png`}
            alt="United Arab Emirates"
            width={28}
            height={20}
            className="rounded-sm"
          />

          <span className="font-medium text-zinc-800 hidden sm:inline">
            United Arab Emirates
          </span>
          <span className="font-medium text-zinc-800 sm:hidden inline">
            UAE
          </span>

        </div>

      </div>
    </div>
  );
}