import {
  CurrencyDollarIcon,
  ShoppingCartIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

import { KpiCard } from "../../components/dashboard";
import PageHeader from "../../components/ui/PageHeader";

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back, Waja 👋"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <KpiCard
          title="Today's Sales"
          value="Rs 0"
          icon={<CurrencyDollarIcon className="h-7 w-7" />}
          color="bg-green-500"
        />

        <KpiCard
          title="Orders"
          value="0"
          icon={<ShoppingCartIcon className="h-7 w-7" />}
          color="bg-blue-500"
        />

        <KpiCard
          title="Customers"
          value="0"
          icon={<UsersIcon className="h-7 w-7" />}
          color="bg-purple-500"
        />

        <KpiCard
          title="Profit"
          value="Rs 0"
          icon={<ChartBarIcon className="h-7 w-7" />}
          color="bg-amber-500"
        />

      </div>
    </div>
  );
}