import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "danger";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        "rounded-xl px-4 py-2 font-semibold transition-all",
        {
          "bg-amber-600 hover:bg-amber-700 text-white":
            variant === "primary",

          "bg-gray-200 hover:bg-gray-300":
            variant === "secondary",

          "bg-red-600 hover:bg-red-700 text-white":
            variant === "danger",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}