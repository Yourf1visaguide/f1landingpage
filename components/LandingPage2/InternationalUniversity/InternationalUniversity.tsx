"use client";
import Badge from "@/components/Badge";

import { InternationalUniversityType } from "@/lib/types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import InternationalUniversityCard from "./InternationalUniversityCard";

export default function InternationalUniversity({
  data,
}: {
  data: InternationalUniversityType;
}) {
  return (
    <section
      id="international-universities"
      className="relative overflow-hidden bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}

        <div className="mx-auto max-w-5xl text-center">
          <Badge text={data.badgeText} color="red" isLive />

          <h2 className="mt-6 max-w-4xl mx-auto text-4xl/tight font-bold tracking-tight text-slate-900 md:text-5xl/tight">
            {data.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {data.description}
          </p>
        </div>

        {/* Countries */}

        <div className="mt-12 ">
          <Swiper
          className="testimonial-slider"
          modules={[Navigation, Autoplay, FreeMode]}
          navigation
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          grabCursor={true}
          simulateTouch={true}
          touchRatio={1.5}
          touchAngle={45}
          threshold={5}
          longSwipes={true}
          longSwipesRatio={0.2}
          longSwipesMs={200}
          freeMode={{
            enabled: false,
            momentum: true,
            momentumRatio: 0.8,
          }}
          speed={300}
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },

            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {data.universities.map((university) => (
            <SwiperSlide key={university.name}>
              <InternationalUniversityCard item={university} />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>

        {/* Bottom Information */}

        {/* <div className="mt-20 rounded-3xl border border-red-100 bg-white p-8 lg:p-10">

          <div className="">

            <h3 className="text-2xl text-center font-bold text-slate-900">
              {data.whyChoose}
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              {data.WhyChooseDescription}
            </p>

          </div>

        </div> */}
      </div>
    </section>
  );
}
