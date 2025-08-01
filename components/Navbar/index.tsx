import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "../ThemeSwitcher";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") {
      return true;
    }
    if (path !== "/" && pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  return (
    <nav className="max-w-screen-md mx-auto px-4 py-4 flex justify-baseline items-center pt-2">
      <div className="flex items-center space-x-4">
        <Image
          src="/avatar/profile.png"
          alt="Siva Padmanaban"
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
          <Link
            href="/"
            className={`transition-colors duration-200 ${
              isActive("/")
                ? "border-b-2 border-gray-600 dark:border-gray-400 font-semibold"
                : "hover:text-gray-600 dark:hover:text-gray-300 text-gray-400"
            }`}
          >
            HOME
          </Link>
          <Link
            href="/works"
            className={`transition-colors duration-200 ${
              isActive("/works")
                ? "border-b-2 border-gray-600 dark:border-gray-400 font-semibold"
                : "hover:text-gray-600 dark:hover:text-gray-300 text-gray-400"
            }`}
          >
            WORKS
          </Link>
          <Link
            href="/notes"
            className={`transition-colors duration-200 ${
              isActive("/notes")
                ? "border-b-2 border-gray-600 dark:border-gray-400 font-semibold"
                : "hover:text-gray-600 dark:hover:text-gray-300 text-gray-400"
            }`}
          >
            NOTES
          </Link>
          <Link
            href="/thoughts"
            className={`transition-colors duration-200 ${
              isActive("/thoughts")
                ? "border-b-2 border-gray-600 dark:border-gray-400 font-semibold"
                : "hover:text-gray-600 dark:hover:text-gray-300 text-gray-400"
            }`}
          >
            THOUGHTS
          </Link>
        </div>
      </div>
    </nav>
  );
}
