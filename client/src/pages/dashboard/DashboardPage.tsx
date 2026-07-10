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
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back, Waja 👋"
      />

      {/* KPI Cards */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
          color="bg-orange-500"
        />
      </section>

      {/* Sales Overview */}
      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-8 rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
          <h2 className="mb-4 text-xl font-semibold">
            Sales Overview
          </h2>

          <div className="flex h-80 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 text-gray-400">
            Sales Chart (Coming in Sprint 4.6)
          </div>
        </div>

        <div className="col-span-4 rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
          <h2 className="mb-4 text-xl font-semibold">
            Low Stock Alerts
          </h2>

          <div className="space-y-4">
            <div className="rounded-lg bg-red-50 p-4">
              Tomato
            </div>

            <div className="rounded-lg bg-red-50 p-4">
              Chicken Breast
            </div>

            <div className="rounded-lg bg-red-50 p-4">
              Cooking Oil
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-8 rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
          <h2 className="mb-4 text-xl font-semibold">
            Recent Orders
          </h2>

          <div className="flex h-56 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 text-gray-400">
            Orders Table (Coming in Sprint 4.6)
          </div>
        </div>

        <div className="col-span-4 rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
          <h2 className="mb-4 text-xl font-semibold">
            Quick Actions
          </h2>

          <div className="grid gap-3">
            <button className="rounded-xl bg-orange-500 py-3 text-white hover:bg-orange-600">
              New Order
            </button>

            <button className="rounded-xl bg-blue-500 py-3 text-white hover:bg-blue-600">
              Add Product
            </button>

            <button className="rounded-xl bg-green-500 py-3 text-white hover:bg-green-600">
              Purchase Stock
            </button>

            <button className="rounded-xl bg-purple-500 py-3 text-white hover:bg-purple-600">
              View Reports
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}