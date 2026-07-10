import type { HTMLAttributes } from "react";

import { cn } from "@/design-system";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1440px]",
  full: "max-w-full",
} as const;

export function Container({
  size = "lg",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto px-6 lg:px-8 xl:px-10",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}