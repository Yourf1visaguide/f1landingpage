"use client";

import { CheckCircle2, Circle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { TouristDestination } from "@/lib/types";
import TouristCard from "./TouristCard";

import "swiper/css";
import "swiper/css/navigation";

type Props = {
  title: string;
  description: string;
  titleColor?: string;
  countries: TouristDestination[];
  selectedId?: string;
  onSelect: (id: string) => void;
};

export default function DestinationCategory({  title, description, titleColor = "text-red-600", countries, selectedId, onSelect, }: Props) { 
  
  const hasSelection = !!selectedId;
  return (
    <section className="relative">
      {/* Left Accent */}
      <div className="mb-10 flex  gap-4">
        <div className={` mt-0 w-1.5 rounded-full transition-all duration-500 ${hasSelection ? "bg-red-600" : "bg-zinc-200"} `} />

        <div className="min-w-0 flex-1 border-b border-zinc-200 ">
          {/* Header */}

          <div className="flex flex-col justify-between lg:items-start gap-6  lg:flex-row ">
            <div>
              <div className="flex items-center ">
                {hasSelection ? (
                  <div className="flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-red-600">
                    <CheckCircle2 className="size-4" />
                    <span className="text-sm font-semibold">
                      Destination Selected
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 rounded-full bg-zinc-700 px-3 py-1 text-zinc-100">
                    <Circle className="size-4" />
                    <span className="text-sm font-semibold">
                      Choose One Destination
                    </span>
                  </div>
                )}
              </div>

              <h3 className={`my-4 text-4xl font-bold ${titleColor}`}>
                {title}
              </h3>

              <p className="max-w-3xl text-lg leading-7 text-zinc-600">
                {description}
              </p>
            </div>

            {/* Right Side */}

            <div className="hidden lg:block">
              <div className="rounded-2xl border border-zinc-200 bg-white px-6 py-5 text-center shadow-sm">
                <div className="text-3xl font-bold text-red-600">
                  {countries.length}
                </div>

                <div className="mt-1 text-sm text-zinc-500">Destinations</div>
              </div>
            </div>
          </div>

          {/* Slider */}

          <div className="mt-6  py-4">
            <Swiper
            className="testimonial-slider"
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={countries.length > 4}
              speed={500}
              grabCursor
              spaceBetween={8}
              slidesPerView={1.15}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },

                1024: {
                  slidesPerView: 3,
                },

                1400: {
                  slidesPerView: 4,
                },
              }}
            >
              {countries.map((country) => (
                <SwiperSlide key={country.id} className="pb-12  ">
                  <TouristCard
                    data={country}
                    step={1} // later use category.step
                    category={title}
                    state={
                      selectedId === country.id
                        ? "selected"
                        : hasSelection
                          ? "inactive"
                          : "default"
                    }
                    onSelect={() => onSelect(country.id)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
