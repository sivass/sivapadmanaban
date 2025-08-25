"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "../ThemeSwitcher";
import { getMenu } from "@/services/menuService";
import { useEffect, useState } from "react";

interface MenuItem {
  id: string | number;
  title: string;
  url: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuItem[]>([]);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") {
      return true;
    }
    if (path !== "/" && pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    getMenu()
      .then((response) => setMenu(response.data))
      .catch((error) => console.error("Failed to fetch menu:", error));
  }, []);

  return (
    <nav className="max-w-screen-md mx-auto px-4 py-4 flex justify-baseline items-center pt-2">
      <div className="flex items-center space-x-4">
        <Image
          src="/avatar/profile.png"
          alt="Profile picture of Siva Padmanaban"
          width={64}
          height={64}
        />
      </div>
      <div className="flex-grow px-6">
        <div className="flex justify-between items-center pt-2">
          <Link href="/" className="text-3xl font-bold">
            Siva Padmanaban
          </Link>
          <ThemeSwitcher />
        </div>
        <div className="flex space-x-6 pt-2">
          {menu && menu.length > 0 ? (
            menu.map((item: MenuItem) => (
              <Link
                key={item.id}
                href={item.url}
                className={`transition-colors duration-200 ${
                  isActive(item.url)
                    ? "border-b-2 border-gray-600 dark:border-gray-400 font-semibold"
                    : "hover:text-gray-600 dark:hover:text-gray-300 text-gray-400"
                }`}
              >
                {item.title.toUpperCase()}
              </Link>
            ))
          ) : (
            <p>Loading menu...</p>
          )}
        </div>
      </div>
    </nav>
  );
}
