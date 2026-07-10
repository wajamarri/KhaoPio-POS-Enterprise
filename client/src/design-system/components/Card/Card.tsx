import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

import { cn } from "@/design-system";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outlined" | "elevated";
  interactive?: boolean;
}

const variantClasses = {
  default:
    "bg-white border border-slate-200 rounded-2xl shadow-sm",

  outlined:
    "bg-white border border-slate-300 rounded-2xl",

  elevated:
    "bg-white rounded-2xl shadow-lg",
} as const;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      interactive = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "transition-all duration-300 ease-in-out",

          variantClasses[variant],

          interactive &&
            "cursor-pointer hover:-translate-y-1 hover:shadow-2xl",

          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";