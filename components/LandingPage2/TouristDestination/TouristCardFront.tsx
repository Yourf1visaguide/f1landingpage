import { BadgeDollarSign, ChevronRight, Clock3, Plane } from "lucide-react";
import React from "react";
import StatCard from "./StatCard";
import { TouristDestination } from "@/lib/types";
import Image from "next/image";

type TouristCardProps = {
  data: TouristDestination;
  onClick?: () => void;
  selected:boolean
};

function TouristCardFront({ data, onClick, selected }: TouristCardProps) {
  return (
    <div>
      <div className="absolute top-4 left-0 flex justify-between items-center w-full ">
        {/* Flag short form of  name */}
        <div className="text-xl ml-4 rounded-full h-7 w-7 relative ">
            <Image
            src={`https://flagcdn.com/w80/${data.flag}.png`}
            fill
            objectFit="cover"
            className="rounded-full object-cover"
            alt={data.flag.toUpperCase()}
          />
        </div>

        {/* Popular */}
        {data.popular && (
          <div className=" mr-4 rounded-full bg-red-700 px-3 py-1 text-xs font-semibold text-white ">
            {" "}
            Most Popular{" "}
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className={`absolute inset-x-0 bottom-0 p-6 text-white bg-linear-to-t from-zinc-900 to-transparent `}
      >
        {/* Country */}
        <div className="h-auto lg:h-[26px] lg:group-hover:h-[150px] transition-all duration-700">
          <h3 className="mt-3 text-3xl font-bold tracking-wide ">
            {data.country}
          </h3>

          <div className=" mt-6 grid grid-cols-2 gap-3 ">
            <StatCard
              icon={<Plane size={18} />}
              title="Visa"
              value={data.visaType}
            />

            <StatCard
              icon={<Clock3 size={18} />}
              title="Valid"
              value={data.validity}
            />

            {/* <StatCard
              icon={<BadgeDollarSign size={18} />}
              title="Fee"
              value={data.fee}
            /> */}
          </div>
        </div>

        {/* Stats */}

        <div className={`bottom transition-all duration-500`}>
          <div className="my-5 h-px bg-white/15" />

          {/* Documents */}

          {/* <div>
              <p className="  text-xs uppercase tracking-[0.18em] text-white/60 ">
                Documents
              </p>

              <div className="mt-3 space-y-2">
                {data.documents.slice(0, 2).map((doc) => (
                  <div key={doc} className=" flex items-center gap-2 text-sm ">
                    <Check className="size-4 text-green-400" />
                    {doc}
                  </div>
                ))}

                {data.documents.length > 2 && (
                  <div className="text-sm text-white/70">
                    +{data.documents.length - 2} More
                  </div>
                )}
              </div>
            </div> */}

          {/* Button */}

          <div className=" mt-6  flex items-center justify-between rounded-2xl bg-white/10 px-5 py-2 backdrop-blur transition group-hover:bg-red-600 ">
            <span className="font-semibold">View More</span>

            <ChevronRight className=" transition-transform group-hover:translate-x-1 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TouristCardFront;
