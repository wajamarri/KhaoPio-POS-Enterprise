import {
  BellIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-10">

      <div className="relative w-[420px]">

        <MagnifyingGlassIcon className="absolute left-4 top-4 h-5 w-5 text-gray-400" />

        <input
          placeholder="Search products, orders, customers..."
          className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-orange-500"
        />

      </div>

      <div className="flex items-center gap-6">

        <button className="rounded-full bg-gray-100 p-3">

          <BellIcon className="h-6 w-6" />

        </button>

        <div className="flex items-center gap-3">

          <img
            src="https://ui-avatars.com/api/?name=Waja+Admin"
            className="h-12 w-12 rounded-full"
          />

          <div>

            <h4 className="font-semibold">

              Waja Admin

            </h4>

            <p className="text-sm text-gray-500">

              Administrator

            </p>

          </div>

        </div>

      </div>

    </header>
  );
}