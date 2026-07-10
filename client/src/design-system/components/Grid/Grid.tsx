import type { HTMLAttributes } from "react";

import { cn } from "@/design-system";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: "sm" | "md" | "lg";
}

const colsClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
  5: "grid-cols-1 md:grid-cols-3 xl:grid-cols-5",
  6: "grid-cols-2 md:grid-cols-3 xl:grid-cols-6",
} as const;

const gapClasses = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
} as const;

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: keyof typeof colsClasses;
  gap?: keyof typeof gapClasses;
}

export function Grid({
  cols = 4,
  gap = "md",
  className,
  children,
  ...props
}: GridProps) {
  return (
    <div
      className={cn(
        "grid w-full",
        colsClasses[cols],
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}