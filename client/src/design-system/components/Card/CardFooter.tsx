import type { HTMLAttributes } from "react";

import { cn } from "@/design-system";

export interface CardFooterProps
  extends HTMLAttributes<HTMLDivElement> {}

export function CardFooter({
  className,
  children,
  ...props
}: CardFooterProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-t border-slate-100 px-8 py-6 text-sm text-slate-500",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}