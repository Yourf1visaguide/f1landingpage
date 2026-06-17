import Image from "next/image";
import { testimonialsData } from "./Testimonials";
import { useState } from "react";
import { Play, Star } from "lucide-react";

// --- Video Card Component (Universal & Optimized) ---
const VideoCard = ({ data }: { data: (typeof testimonialsData)[0] }) => {
  // --- Utilities ---
  const isYouTubeUrl = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };
  const getYouTubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const getYouTubeThumbnail = (url: string) => {
    const id = getYouTubeId(url);
    return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : null;
  };
  const [isPlaying, setIsPlaying] = useState(false);
  const isYouTube = isYouTubeUrl(data.videoUrl);

  // Smart Poster Logic
  const posterSrc =
    data.poster || (isYouTube ? getYouTubeThumbnail(data.videoUrl) : null);

  return (
    <div className="group bg-white rounded-md border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Video / Poster Area - Increased height to aspect-[4/5] for modern vertical feel */}
      <div className="relative aspect-[4/5] bg-slate-900 overflow-hidden">
        {!isPlaying ? (
          <>
            {posterSrc ? (
              <Image
                src={posterSrc}
                alt={`Testimonial by ${data.name}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            ) : (
              // Fallback for direct video without poster: loads ONLY the first frame
              <video
                src={data.videoUrl}
                className="absolute inset-0 w-full h-full object-cover"
                preload="metadata"
                muted
                playsInline
              />
            )}

            {/* Play Button Overlay */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group/play cursor-pointer"
              aria-label={`Play video testimonial from ${data.name}`}
            >
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover/play:scale-110">
                <Play
                  className="w-6 h-6 text-[#DC2626] ml-1"
                  fill="currentColor"
                />
              </div>
            </button>
          </>
        ) : // Render actual video player based on type
        isYouTube ? (
          <iframe
            src={`${data.videoUrl}?autoplay=1&rel=0`}
            title={`Testimonial by ${data.name}`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            src={data.videoUrl}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            controls
            playsInline
          />
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border w-fit mb-4 ${data.tagColor}`}
        >
          {data.tag}
        </div>

        <div className="flex gap-0.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 text-[#DC2626]"
              fill="currentColor"
            />
          ))}
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
          {data.description}
        </p>

        <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
          <div className="w-10 h-10 rounded-full bg-[#0B1120] text-white flex items-center justify-center font-bold text-sm">
            {data.initials}
          </div>
          <div>
            <div className="font-semibold text-[#0B1120] text-sm">
              {data.name}
            </div>
            <div className="text-xs text-slate-500">
              {data.visa} • {data.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
