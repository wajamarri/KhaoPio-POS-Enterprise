import type { HTMLAttributes } from "react";
import { cn } from "@/design-system";

export interface SectionProps
  extends HTMLAttributes<HTMLElement> {
  spacing?: "none" | "sm" | "md" | "lg";
}

const spacingClasses = {
  none: "",
  sm: "py-4",
  md: "py-8",
  lg: "py-12",
} as const;

export function Section({
  spacing = "md",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "w-full",
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}