"use client";

import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { StudyTransferFromDubaiCountryType } from "@/lib/types";

interface StudyTransferFromDubaiSvgProps {
  destinations: StudyTransferFromDubaiCountryType[];
  className?: string;
}

const SVG_WIDTH = 600;
const SVG_HEIGHT = 500;

const CENTER_X = SVG_WIDTH / 2;
const CENTER_Y = SVG_HEIGHT / 2;

export default function StudyTransferFromDubaiSvg({
  destinations,
  className = "",
}: StudyTransferFromDubaiSvgProps) {
  const animatedPaths = useRef<SVGPathElement[]>([]);

  useGSAP(() => {
    animatedPaths.current.forEach((path, i) => {
      if (!path) return;

      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: `${length * 0.90} ${length}`,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: -length,
        duration: 8.8 + i * 0.2,
        ease: "none",
        repeat: -1,
      });
    });
  }, []);

  return (
    <svg
      className={`absolute inset-0 h-full w-full ${className}`}
      viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
      preserveAspectRatio="none"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="8"
          refY="5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path
            d="M0 0 L10 5 L0 10 L3 5 Z"
            fill="#dc2626"
          />
        </marker>
      </defs>

      <g fill="none" strokeLinecap="round">
        {destinations.map((item, index) => {
          const endX = (item.x / 100) * SVG_WIDTH;
          const endY = (item.y / 100) * SVG_HEIGHT;

          const dx = endX - CENTER_X;
          const dy = endY - CENTER_Y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          const radius = 45;

          const finalX = endX - (dx / distance) * radius;
          const finalY = endY - (dy / distance) * radius;

          const controlX =
            (CENTER_X + finalX) / 2 + dx * 0.12;

          const controlY =
            (CENTER_Y + finalY) / 2 + dy * 0.12;

          const pathData = `
            M ${CENTER_X} ${CENTER_Y}
            Q ${controlX} ${controlY}
            ${finalX} ${finalY}
          `;

          return (
            <g key={item.name}>
              {/* Base Route */}

              <path
                d={pathData}
                stroke="#ff8383"
                strokeWidth="1"
                strokeDasharray="3 3"
                markerEnd="url(#arrowhead)"
              />

              {/* Animated Flow */}

              <path
                ref={(el) => {
                  if (el) animatedPaths.current[index] = el;
                }}
                d={pathData}
                stroke="#dc2626"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}