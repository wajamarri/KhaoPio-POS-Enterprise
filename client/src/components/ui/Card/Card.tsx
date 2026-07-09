import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-white p-6 shadow-sm border border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
}