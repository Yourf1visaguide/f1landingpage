import Image from "next/image";
import { ArrowDown, GraduationCap, Globe2 } from "lucide-react";
import StudyTransferFromDubaiCenterSteps from "./StudyTransferFromDubaiCenterSteps";

interface StudyTransferFromDubaiCenterProps {
  title: string;
  subtitle: string;
  subtitle2: string;
  flag: string;
}

export default function StudyTransferFromDubaiCenter({
  title,
  subtitle,
  subtitle2,
  flag,
}: StudyTransferFromDubaiCenterProps) {
  return (
    <>
      <div
        className=" relative overflow-hidden rounded-lg border border-red-200 bg-red-50 
 p-2 "
      >
        <div className="flex flex-row items-start justify-center gap-2">
          <div className="relative size-12  overflow-hidden rounded-full ">
            <Image
              src={`https://flagcdn.com/w80/${flag}.png`}
              alt="Dubai"
              fill
              priority={false}
              blurDataURL="/images/blur.jpg"
              fetchPriority="low"
              className="object-fill object-left"
            />
          </div>
          <div className="text-base text-nowrap sm:text-lg font-bold text-zinc-700  rounded-base text-left p-0">
            <h5 className="text-sm font-semibold uppercase tracking-widest text-red-600">
              1 Year
            </h5>
            {title}
          </div>
        </div>
      </div>
    </>
  );
}
