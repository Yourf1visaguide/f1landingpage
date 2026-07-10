import React from "react";
import Image from "next/image";

import { flags } from "@/lib/flags";
import { SuccessStoryInfoType } from "@/lib/types";
import { ArrowRight, Award, BathIcon, Plane, PlaneTakeoff } from "lucide-react";
import { formatCountryWithThe } from "@/lib/countires-with-the";

function SuccessStoryCardFooter({ item }: { item: SuccessStoryInfoType }) {
  const fromCountry = flags[item.fromCountry.toLocaleLowerCase()];
  const toCountry = flags[item.toCountry.toLocaleLowerCase()];
  console.log(fromCountry, toCountry);
  return (
    <footer className="px-4 pb-4 gap-x-2 ">
      <div className="mx-auto my-4 mb-6 h-1 w-14 rounded-full bg-red-600" />


      <h2 className="text-lg/tight bg-zinc-50 p-2 rounded-lg font-medium leading-tight text-center text-zinc-900 flex gap-1 justify-start items-start h-18 italic">
        <Award className="text-red-600 size-5 shrink-0 mt-1" />
        
        <div className="text-center text-base">
          Successful University Transfer
from Dubai to

        <span className="text-red-700">
          {" "}{formatCountryWithThe(item.toCountry)}
        </span>
        </div>
      </h2>
    </footer>
  );
}

export default SuccessStoryCardFooter;
