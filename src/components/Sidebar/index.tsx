"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const menuItems = [
  { name: "首页", path: "/dashboard" },
  { name: "设置", path: "/settings" },
  { name: "分析", path: "/analytics" },
  { name: "登录", path: "/auth" },
];

export default function Sidebar() {
  const currentPath = usePathname();

  return (
    <div className="w-64 bg-gray-100 h-screen p-4">
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={clsx(
              "block py-3 px-5 mb-2 rounded-4xl hover:bg-gray-100 transition-colors",
              currentPath === item.path && "bg-blue-200 font-medium"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
