import {
  StatCard,
  PageHeader,
  Badge,
} from "../../components/ui";

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back to KhaoPio POS Enterprise"
        action={
          <Badge
            text="System Online"
            color="green"
          />
        }
      />

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