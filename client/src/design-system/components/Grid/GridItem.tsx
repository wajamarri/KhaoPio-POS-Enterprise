import type { HTMLAttributes } from "react";

import { cn } from "@/design-system";

const spanClasses = {
  1: "col-span-1",
  2: "md:col-span-2",
  3: "xl:col-span-3",
  4: "xl:col-span-4",
  5: "xl:col-span-5",
  6: "xl:col-span-6",
} as const;

export interface GridItemProps
  extends HTMLAttributes<HTMLDivElement> {
  span?: keyof typeof spanClasses;
}

export function GridItem({
  span = 1,
  className,
  children,
  ...props
}: GridItemProps) {
  return (
    <div
      className={cn(
        spanClasses[span],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}