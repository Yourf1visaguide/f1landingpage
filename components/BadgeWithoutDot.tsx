import React from "react";
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { CheckCircle2, type LucideIcon } from "lucide-react";

// Utility to merge Tailwind classes safely
const cn = (...inputs: ClassValue[]) =>
  twMerge(clsx(...inputs));

// Define available color themes
type BadgeColor = "red" | "green" | "blue" | "amber" | "slate" | "white";

interface BadgeProps {
  text: string;
  color?: BadgeColor;
  icon?: LucideIcon;
  className?: string;
}

// Color mapping for premium, accessible contrast
const colorStyles: Record<BadgeColor, { container: string; icon: string }> = {
  red: {
    container: "bg-red-50 border-red-100 text-red-700",
    icon: "text-red-600",
  },
  green: {
    container: "bg-emerald-50 border-emerald-100 text-emerald-700",
    icon: "text-emerald-600",
  },
  blue: {
    container: "bg-blue-50 border-blue-100 text-blue-700",
    icon: "text-blue-600",
  },
  amber: {
    container: "bg-amber-50 border-amber-100 text-amber-700",
    icon: "text-amber-600",
  },
  slate: {
    container: "bg-slate-100 border-slate-200 text-slate-700",
    icon: "text-slate-600",
  },
  white: {
    container: "bg-white border-slate-200 text-slate-700",
    icon: "text-slate-600",
  },
};

export default function BadgeWithoutDot({
  text,
  color = "red",
  icon: Icon = CheckCircle2,
  className,
}: BadgeProps) {
  const styles = colorStyles[color];

  return (
    <div
      className={cn(
        // Base layout: robust inline-flex instead of absolute positioning
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-sm",
        // Color theme
        styles.container,
        // Typography: Premium SaaS badge styling
        "text-xs font-semibold tracking-wide",
        className
      )}
    >
     

      {/* Text Content */}
      <span className="leading-tight">{text}</span>
    </div>
  );
}