import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper function to merge classes intelligently
const cn = (...inputs: clsx.ClassValue[]) => {
  return twMerge(clsx(inputs));
};

interface RedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
}

const RedButton = ({ 
  text, 
  href, 
  onClick, 
  className, 
  icon,
  disabled,
  ...props 
}: RedButtonProps) => {
  
  // Base styles (Default fallbacks)
  const baseStyles = "inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-semibold text-sm rounded-xl px-5 py-2 transition-all duration-200 shadow-md shadow-red-900/10 active:bg-[#991B1B] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 cursor-pointer";

  // twMerge ensures your custom className ALWAYS overrides baseStyles
  const finalClasses = cn(baseStyles, className);

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{text}</span>
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        className={finalClasses}
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
      className={finalClasses}
      type="button"
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default RedButton;