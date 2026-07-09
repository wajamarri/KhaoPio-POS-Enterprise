import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  action,
}: PageHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-1 text-gray-500">
            {subtitle}
          </p>
        )}
      </div>

      {action}
    </div>
  );
}