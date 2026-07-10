import type { HTMLAttributes } from "react";

import { cn } from "@/design-system";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  spacing?: "xs" | "sm" | "md" | "lg" | "xl";
}

const spacingClasses = {
  xs: "space-y-2",
  sm: "space-y-4",
  md: "space-y-6",
  lg: "space-y-8",
  xl: "space-y-12",
} as const;

export function Stack({
  spacing = "md",
  className,
  children,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}