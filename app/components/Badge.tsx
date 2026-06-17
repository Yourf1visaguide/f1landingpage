import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { CheckCircle2, type LucideIcon } from "lucide-react";

// Utility to merge Tailwind classes safely
const cn = (...inputs: clsx.ClassValue[]) => twMerge(clsx(inputs));

// Define available color themes
type BadgeColor = "red" | "green" | "blue" | "amber" | "slate";

interface BadgeProps {
  /** The text content of the badge */
  text: string;
  /** The color theme of the badge */
  color?: BadgeColor;
  /** Optional custom icon (defaults to CheckCircle2) */
  icon?: LucideIcon;
  /** Enables the pulsing/pinging "live" animation effect */
  isLive?: boolean;
  /** Additional custom className overrides */
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
};

export default function Badge({
  text,
  color = "red",
  icon: Icon = CheckCircle2,
  isLive = false,
  className,
}: BadgeProps) {
  const styles = colorStyles[color];

  return (
    <div
      role={isLive ? "status" : undefined}
      className={cn(
        // Base layout: robust inline-flex instead of absolute positioning
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-sm",
        // Color theme
        styles.container,
        // Typography: Premium SaaS badge styling
        "text-xs font-semibold uppercase tracking-wide",
        className
      )}
    >
      {/* Icon Container */}
      <div className="relative flex items-center justify-center w-4 h-4">
        {isLive ? (
          <>
            {/* Pinging ripple effect (outer) */}
            <Icon
              className={cn(
                "absolute inset-0 w-4 h-4 animate-ping opacity-75",
                styles.icon
              )}
              fill="currentColor"
            />
            {/* Pulsing core effect (inner) */}
            <Icon
              className={cn("relative w-2.5 h-2.5 animate-pulse", styles.icon)}
              fill="currentColor"
            />
          </>
        ) : (
          <Icon className={cn("w-3.5 h-3.5", styles.icon)} fill="currentColor" />
        )}
      </div>

      {/* Text Content */}
      <span className="leading-tight">{text}</span>
    </div>
  );
}