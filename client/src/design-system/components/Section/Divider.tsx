import type { HTMLAttributes } from "react";
import { cn } from "@/design-system";

export interface DividerProps
  extends HTMLAttributes<HTMLHRElement> {
  spacing?: "sm" | "md" | "lg";
}

const spacingClasses = {
  sm: "my-4",
  md: "my-6",
  lg: "my-8",
} as const;

export function Divider({
  spacing = "md",
  className,
  ...props
}: DividerProps) {
  return (
    <hr
      className={cn(
        "border-0 border-t border-slate-200",
        spacingClasses[spacing],
        className
      )}
      {...props}
    />
  );
}