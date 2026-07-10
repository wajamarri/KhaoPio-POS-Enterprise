import type { HTMLAttributes } from "react";

import { cn } from "@/design-system";

export interface CardHeaderProps
  extends HTMLAttributes<HTMLDivElement> {}

export function CardHeader({
  className,
  children,
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b border-slate-100 px-8 py-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}