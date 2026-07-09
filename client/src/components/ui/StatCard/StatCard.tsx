import Card from "../Card";

interface StatCardProps {
  title: string;
  value: string;
}

export default function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <Card>
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        {value}
      </h2>
    </Card>
  );
}