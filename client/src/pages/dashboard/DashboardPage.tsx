export default function DashboardPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        Welcome to KhaoPio POS Enterprise
      </h1>

      <div className="grid grid-cols-4 gap-6">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-gray-500">Today's Sales</h2>
          <p className="mt-2 text-3xl font-bold">Rs 0</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-gray-500">Orders</h2>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-gray-500">Customers</h2>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-gray-500">Profit</h2>
          <p className="mt-2 text-3xl font-bold">Rs 0</p>
        </div>
      </div>
    </div>
  );
}