import { ReactNode } from "react";

interface KpiCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  color?: string;
}

export default function KpiCard({
  title,
  value,
  icon,
  color = "bg-amber-500",
}: KpiCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl text-white ${color}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}