import Badge from "@/components/Badge";


import InternationalUniversityCountry from "./InternationalUniversityCountry";
import { InternationalUniversityType } from "@/lib/types";

export default function InternationalUniversity({data}:{data:InternationalUniversityType}) {
  return (
    <section
      id="international-universities"
      className="relative overflow-hidden bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <Badge
            text={data.badgeText}
            color="red"
            isLive
          />

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            {data.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {data.description}
          </p>

        </div>

        {/* Countries */}

        <div className="mt-20 space-y-20">

          {data.countries.map((country) => (
            <InternationalUniversityCountry
              key={country.country}
              item={country}
            />
          ))}

        </div>

        {/* Bottom Information */}

        <div className="mt-20 rounded-3xl border border-red-100 bg-white p-8 lg:p-10">

          <div className="">

            <h3 className="text-2xl text-center font-bold text-slate-900">
              {data.whyChoose}
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              {data.WhyChooseDescription}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}