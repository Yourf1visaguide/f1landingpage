import React from "react";
import Image from "next/image";

import { flags } from "@/lib/flags";
import { SuccessStoryInfoType } from "@/lib/types";
import { ArrowRight, Plane, PlaneTakeoff } from "lucide-react";
import { formatCountryWithThe } from "@/lib/countires-with-the";

function SuccessStoryCardFooter({ item }: { item: SuccessStoryInfoType }) {
  const fromCountry = flags[item.fromCountry.toLocaleLowerCase()];
  const toCountry = flags[item.toCountry.toLocaleLowerCase()];
  console.log(fromCountry, toCountry);
  return (
    <footer className="px-4 pb-4 gap-x-2 ">
      <div className="mx-auto my-4 mb-6 h-1 w-14 rounded-full bg-red-600" />


      <h2 className="text-lg/tight font-bold leading-tight text-center text-zinc-900">
        Successfully University Transfer from Dubai to 

        <span className="text-red-600">
          {" "}{formatCountryWithThe(item.toCountry)}
        </span>
      </h2>
    </footer>
  );
}

export default SuccessStoryCardFooter;
