import type { HTMLAttributes } from "react";

import { cn } from "@/design-system";

export interface CardBodyProps
  extends HTMLAttributes<HTMLDivElement> {}

export function CardBody({
  className,
  children,
  ...props
}: CardBodyProps) {
  return (
    <div
      className={cn(
        "px-8 py-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}