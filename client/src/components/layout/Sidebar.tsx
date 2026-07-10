import {
  HomeIcon,
  ShoppingCartIcon,
  ClipboardDocumentListIcon,
  CubeIcon,
  ArchiveBoxIcon,
  UsersIcon,
  TruckIcon,
  UserGroupIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const menu = [
  { name: "Dashboard", icon: HomeIcon },
  { name: "POS", icon: ShoppingCartIcon },
  { name: "Orders", icon: ClipboardDocumentListIcon },
  { name: "Products", icon: CubeIcon },
  { name: "Inventory", icon: ArchiveBoxIcon },
  { name: "Customers", icon: UsersIcon },
  { name: "Suppliers", icon: TruckIcon },
  { name: "Staff", icon: UserGroupIcon },
  { name: "Reports", icon: ChartBarIcon },
  { name: "Settings", icon: Cog6ToothIcon },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-gray-200 bg-[#111827] text-white">

      <div className="border-b border-gray-700 p-8">

        <h1 className="text-3xl font-bold">

          <span className="text-white">KhaoPio</span>

          <span className="text-orange-500"> POS</span>

        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Enterprise Edition
        </p>

      </div>

      <nav className="flex-1 px-4 py-6">

        {menu.map((item, index) => {

          const Icon = item.icon;

          return (

            <button
              key={index}
              className={`mb-2 flex w-full items-center gap-4 rounded-xl px-5 py-4 transition-all

              ${
                index === 0
                  ? "bg-orange-500 text-white shadow-lg"
                  : "text-gray-300 hover:bg-gray-800"
              }
            `}
            >
              <Icon className="h-6 w-6" />

              <span>{item.name}</span>

            </button>

          );

        })}

      </nav>

      <div className="border-t border-gray-700 p-5 text-center text-gray-500">

        Version 1.0

      </div>

    </aside>
  );
}