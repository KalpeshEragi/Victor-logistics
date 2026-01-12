import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#d6efd6]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/icons/Victor-logo.png"
            alt="Victor & Co Logo"
            width={48}
            height={48}
            className="object-contain"
          />
          <span className="text-xl font-semibold text-gray-800">
            Victor & Co.
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
          <Link href="/" className="hover:text-green-700 transition">
            Home
          </Link>
          <Link href="/#services" className="hover:text-green-700 transition">
            Services
          </Link>
          <Link href="/about" className="hover:text-green-700 transition">
            About Us
          </Link>
          <Link href="/network" className="hover:text-green-700 transition">
            Our Locations
          </Link>
          <Link href="/contact" className="hover:text-green-700 transition">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
