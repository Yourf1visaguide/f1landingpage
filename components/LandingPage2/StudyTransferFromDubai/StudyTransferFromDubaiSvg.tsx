import { StudyTransferFromDubaiCountryType } from "@/lib/types";

interface StudyTransferFromDubaiSvgProps {
  destinations: StudyTransferFromDubaiCountryType[];
  className?: string;
}

const SVG_WIDTH = 1000;
const SVG_HEIGHT = 700;

const CENTER_X = SVG_WIDTH / 2;
const CENTER_Y = SVG_HEIGHT / 2;

export default function StudyTransferFromDubaiSvg({
  destinations,
  className = "",
}: StudyTransferFromDubaiSvgProps) {
  return (
    <svg
      className={`absolute inset-0 h-full w-full ${className}`}
      viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
      preserveAspectRatio="none"
    >
      <g
        fill="none"
        stroke="#fecaca"
        strokeWidth={2.5}
        strokeLinecap="round"
      >
        {destinations.map((item) => {
          const endX = (item.x / 100) * SVG_WIDTH;
          const endY = (item.y / 100) * SVG_HEIGHT;

          const dx = endX - CENTER_X;
          const dy = endY - CENTER_Y;

          // Midpoint
          let controlX = (CENTER_X + endX) / 2;
          let controlY = (CENTER_Y + endY) / 2;

          // Push the curve outward slightly
          controlX += dx * 0.08;
          controlY += dy * 0.08;

          return (
            <path
              key={item.name}
              d={`
                M ${CENTER_X} ${CENTER_Y}
                Q ${controlX} ${controlY}
                ${endX} ${endY}
              `}
            />
          );
        })}
      </g>
    </svg>
  );
}