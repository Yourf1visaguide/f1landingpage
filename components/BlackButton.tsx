import React from 'react';
import clsx, {ClassValue} from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility to intelligently merge Tailwind classes (allows overriding base styles)
const cn = (...inputs: ClassValue[]) =>
  twMerge(clsx(...inputs));

interface BlackButtonProps {
  text: string;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const BlackButton = ({ 
  text, 
  href, 
  onClick, 
  className, 
  icon,
  disabled,
  ...props 
}: BlackButtonProps) => {
  
  // Premium dark button design with corrected states
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2",
    "bg-zinc-950 hover:bg-zinc-800 active:bg-zinc-900", // Fixed: Removed bg-white, corrected active state
    "text-white font-semibold text-sm",
    "rounded-xl px-5 py-2.5", // Matched Red/White button dimensions
    "transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
    "hover:scale-[1.02] active:scale-[0.98]", // Tactile press feedback
    "shadow-md shadow-black/20 hover:shadow-lg hover:shadow-black/30", // Depth without borders
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2", // WCAG Keyboard nav
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100",
    "cursor-pointer",
    className // Your custom classes will now correctly override the base styles
  );

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{text}</span>
    </>
  );

  // Render as anchor if href provided, otherwise button
  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        onClick={(e) => onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>)}
        className={baseStyles}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={baseStyles}
      type="button"
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default BlackButton;