"use client";

import { useState } from "react";

function VideoCardDescriptionWithSeeMore({
  description,
}: {
  description: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <p className="mb-3 flex-grow text-sm leading-relaxed text-slate-600 min-h-32">
      {expanded ? description : description.slice(0, 190)}

      {!expanded && description.length > 190 && (
        <>
          
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="ml-1 cursor-pointer p-0 text-red-700 hover:underline"
          >
            See More
          </button>
        </>
      )}
    </p>
  );
}

export default VideoCardDescriptionWithSeeMore;