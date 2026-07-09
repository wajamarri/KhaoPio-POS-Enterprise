import { StatCard } from "../../components/ui";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        Welcome to KhaoPio POS Enterprise
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Today's Sales"
          value="Rs 0"
        />

        <StatCard
          title="Orders"
          value="0"
        />

        <StatCard
          title="Customers"
          value="0"
        />

        <StatCard
          title="Profit"
          value="Rs 0"
        />
      </div>
    </div>
  );
}