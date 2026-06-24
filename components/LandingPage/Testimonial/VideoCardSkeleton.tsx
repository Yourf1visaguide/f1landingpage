function VideoCardSkeleton() {
  return (
    <div className="bg-white rounded-md border border-slate-100 shadow-sm overflow-hidden animate-pulse">
      {/* Video Thumbnail */}
      <div className="relative aspect-[4/5] bg-slate-200" />

      {/* Content */}
      <div className="p-6">
        {/* Tag */}
        <div className="h-7 w-28 bg-slate-200 rounded-full mb-4" />

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-sm bg-slate-200"
            />
          ))}
        </div>

        {/* Description */}
        <div className="space-y-2 mb-6">
          <div className="h-4 bg-slate-200 rounded w-full" />
          <div className="h-4 bg-slate-200 rounded w-[90%]" />
          <div className="h-4 bg-slate-200 rounded w-[75%]" />
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
          <div className="w-10 h-10 rounded-full bg-slate-200" />

          <div className="flex-1">
            <div className="h-4 bg-slate-200 rounded w-24 mb-2" />
            <div className="h-3 bg-slate-200 rounded w-36" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCardSkeleton;