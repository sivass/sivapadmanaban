import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
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
        </div>
        <div className="flex space-x-6 pt-2">
          <Link href="/" className="font-semibold">
            HOME
          </Link>
          <Link href="/works" className="hover:text-gray-600">
            WORKS
          </Link>
          <Link href="/notes" className="hover:text-gray-600">
            NOTES
          </Link>
          <Link href="/thoughts" className="hover:text-gray-600">
            THOUGHTS
          </Link>
        </div>
      </div>
    </nav>
  );
}
