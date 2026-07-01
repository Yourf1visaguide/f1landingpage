"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

import Badge from "@/components/Badge";
import RedButton from "@/components/Red-Buttons";


import DestinationCategory from "./DestinationCategory";
import JourneySummary from "./JourneySummary";
import CardSelectionProgress from "./CardSelectionProgress";
import { handleWhatsappClickWithMessage } from "@/function/handleWhatsapp";
import { touristDestinationBasicData, touristDestinationData, } from "@/data/tourist-visa";
import { TouristDestinationMessage } from "./whatsappMessageSentFormt";

export default function TouristDestination() {

  const [selectedCountries, setSelectedCountries] = useState< Record<number, string>>({});

  const handleSelect = (categoryIndex: number, countryId: string) => {
    setSelectedCountries((prev) => ({
      ...prev,
      [categoryIndex]: prev[categoryIndex] === countryId ? "" : countryId,
    }));
  };

  const selectedCount = Object.values(selectedCountries).filter(Boolean).length;

  const totalCategories = touristDestinationData.length;

  const progress = Math.round((selectedCount / totalCategories) * 100);

  const selectedDestinations = useMemo(() => {
    return touristDestinationData.map((category, index) => {
      return category.countries.find((c) => c.id === selectedCountries[index]);
    });
  }, [selectedCountries]);


  const message = TouristDestinationMessage(selectedCountries)

  return (
    <section className="bg-white py-24" id="destination">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}

        <div className="text-center">
          <Badge isLive color="red" text="Choose Destination" />
          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            {touristDestinationBasicData.title}
          </h2>

          <p className="mx-auto mt-6 max-w-5xl text-lg text-zinc-600">
            {touristDestinationBasicData.description}
          </p>
        </div>

        {/* Progress */}


        <JourneySummary selectedDestinations={selectedDestinations} />


        {/* Categories */}

        <div className="mt-24 space-y-24">
          {touristDestinationData.map((category, index) => (
            <DestinationCategory
              key={category.mainTitle}
              title={category.mainTitle}
              description={category.description}
              titleColor={category.titleColor}
              countries={category.countries}
              selectedId={selectedCountries[index]}
              onSelect={(id) => handleSelect(index, id)}
            />
          ))}
        </div>
        
        {/* Journey Summary */}

        <CardSelectionProgress selectedCount={selectedCount} totalCategories={totalCategories} progress={progress} selectedCountries={selectedCountries} touristDestinationData={touristDestinationData} />

        {/* CTA */}

        <div className="mt-20 flex justify-center">
          <RedButton
            text={
              selectedCount === totalCategories
                ? touristDestinationBasicData.buttonText
                : `Choose ${totalCategories - selectedCount} More Destination${
                    totalCategories - selectedCount > 1 ? "s" : ""
                  }`
            }
            onClick={() => handleWhatsappClickWithMessage(message)}
            disabled={selectedCount !== totalCategories}
            className="py-4"
            icon={<ArrowRight />}
          />
        </div>
      </div>
    </section>
  );
}
