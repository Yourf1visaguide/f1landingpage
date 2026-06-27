import React from "react";
import { Check, FileText, Info } from "lucide-react";
import TouristCardBackInfo from "./TouristCardBackInfo";
import { TouristDestination } from "@/lib/types";

type TouristCardProps = {
  data: TouristDestination;
  onClick?: () => void;
};


function TouristCardBack({ data, onClick }: TouristCardProps) {
  return (
    <div
      className="
      h-full w-full
      absolute inset-0
      backdrop-blur-md
      bg-zinc-900/50
      z-50
      p-4
          "
    >
      <div className="flex items-center gap-3">
        <div className="text-3xl">{data.flag}</div>

        <div>
          <h3 className="text-3xl font-bold">{data.country}</h3>

          <p className="text-white/60">{data.visaType}</p>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-6">
        <div className="mb-4 flex items-center gap-2">
          <FileText className="text-red-500" size={18} />

          <span className="font-semibold">Required Documents</span>
        </div>

        <div className="space-y-3">
          {data.documents.map((doc) => (
            <div key={doc} className="flex items-center gap-3">
              <div className="rounded-full bg-green-500 p-1">
                <Check className="size-3" />
              </div>

              <span className="text-white/90">{doc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="my-7 border-t border-white/10" />

      <div className="space-y-5">
        <TouristCardBackInfo label="Processing" value="3–5 Working Days" />

        <TouristCardBackInfo label="Validity" value={data.validity} />

        <TouristCardBackInfo label="Visa Fee" value={data.fee} />
      </div>

      {/* <button
        className="
              absolute
              bottom-7
              left-7
              right-7
              rounded-2xl
              bg-red-600
              py-4
              font-semibold
              transition
              hover:bg-red-700
            "
      >
        Apply Now
      </button> */}
    </div>
  );
}

export default TouristCardBack;
