import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  MapPinned,
  Plane,
} from "lucide-react";

import Image from "next/image";

import {  SuccessStoryInfoType } from "@/lib/types";
import { flags } from "@/lib/flags";
import { formatCountryWithThe } from "@/lib/countires-with-the";

function SuccessStoriesCardHeader({item, getInitials}:{item: SuccessStoryInfoType, getInitials:(name:string) => string}) {
   const fromCountry = flags[item.fromCountry.toLocaleLowerCase()];
    const toCountry = flags[item.toCountry.toLocaleLowerCase()];
  return (
    <div className=" p-4 bg-white text-center">

      {/* Student */}
      <div className="mb-8 flex items-center justify-between pb-4 border-b border-e-zinc-100 gap-x-2 ">
      <div className="flex gap-x-1 ">
        <div className=" h-7 w-7 relative ">
          <Image
            src={`https://flagcdn.com/w80/${fromCountry}.png`}
            fill
            objectFit="cover"
            className="rounded-full object-cover border border-zinc-200"
            alt={item.fromCountry.toUpperCase()}
          />
        </div>
        <div className="text-zinc-800 -mt-0.5 flex flex-col flex-y-0 h-9 overflow-hidden ">
          <div className="font-semibold text-[12px] capitalize  wrap  ">
            {item.fromCountry}
          </div>
          <div className="text-zinc-500 text-left text-[11px]">
            {" "}
            {fromCountry.toUpperCase()}
          </div> 
        </div>
      </div>


      <div className="flex gap-x-1 ">
        <div className="border-dashed w-4 truncate h-[11px] border-b border-red-500" />
        <Plane className="rotate-45 text-red-500 size-5 " />
        <div className="border-dashed w-4 truncate h-[11px] border-b border-red-500" />
        <ArrowRight className=" size-3 text-red-500 mt-[3.7px]" />
      </div>


      <div className="flex gap-x-1 ">
        <div className=" h-7 w-7 relative  ">
          <Image
            src={`https://flagcdn.com/w80/${toCountry}.png`}
            fill
            objectFit="cover"
            className="rounded-full object-cover border border-zinc-200"
            alt={item.toCountry.toUpperCase()}
          />
        </div>
        <div className="text-zinc-800 -mt-0.5 flex flex-col flex-y-0 h-9 overflow-hidden ">
          <div className="font-semibold text-[12px] capitalize  wrap ">
            {item.toCountry}
          </div>
          <div className="text-zinc-500 text-left  text-[11px]">
            {" "}
            {toCountry.toUpperCase()}
          </div> 
        </div>
      </div>
    </div>

      <div className="flex flex-row items-start justify-start gap-x-4 mt-4">

        <div className="relative size-20 overflow-hidden rounded-full ">
          <Image
            src={item.profileImage}
            alt={item.studentName}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className= " text-lg font-semibold text-left text-zinc-900">
          {item.studentName}
        </h3>

        <div className="mt-1.5 space-y-2 ">

          <div className="flex items-start text-left gap-x-2 text-zinc-500">
            <GraduationCap
              className="text-red-600 size-4"
            />

            <span className="font-medium text-sm">
              {item.university}
            </span>
          </div>

          <div className="flex items-start text-left gap-x-2 text-zinc-500 ">
            <BookOpen
              className="text-red-600 size-4"
            />

            <span className="text-sm">{item.program}</span>
          </div>

        </div>
        </div>

        

      </div>

      

      

      {/* Divider */}



    </div>
  );
}

export default SuccessStoriesCardHeader