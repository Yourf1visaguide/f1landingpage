"use client";




import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { SuccessStoryInfoType } from "@/lib/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import SuccessStoriesCTAButton from "./SuccessStoriesCTAButton";
import SuccessStoriesSkeleton from "./SuccessStoriesSkeleton";
import SuccessStoriesCard from "./SuccessStoriesCard";


export const SuccessStoriesGridSection = ({
  data,
  error,
  loading,
}: {
  data: SuccessStoryInfoType[];
  error: string | null;
  loading: boolean;
}) => {
  return (
    <>
      {/* Error */}
      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center">
          <h3 className="text-xl font-semibold text-red-700">
            Unable to load student stories
          </h3>

          <p className="mt-2 text-zinc-600">
            Please refresh the page and try again.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-5 py-2 bg-red-700 text-white rounded-lg"
          >
            Retry
          </button>
        </div>
      ) : loading ? (
        // Skeleton Slider
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {Array.from({ length: 4 }).map((_, index) => (
            <SuccessStoriesSkeleton key={index} />
          ))}
        </div>
      ) : (
        // Netflix Slider
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
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((t, index) => (
            <SwiperSlide key={t.id} className="">
              <SuccessStoriesCard item={t} indexValue={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* CTA */}
      <SuccessStoriesCTAButton />
    </>
  );
};
