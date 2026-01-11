import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* COMPANY INFO */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/icons/Victor-logo.png"
              alt="Victor & Co Logo"
              width={42}
              height={42}
            />
            <span className="text-lg font-semibold text-white">
              Victor & Co.
            </span>
          </div>

          <p className="text-sm leading-relaxed">
            Victor & Co. provides reliable logistics, container, and
            infrastructure solutions for businesses operating across
            India and international trade routes.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
            Navigation
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-green-500">Home</Link></li>
            <li><Link href="/about" className="hover:text-green-500">About Us</Link></li>
            <li><Link href="/services" className="hover:text-green-500">Services</Link></li>
            <li><Link href="/locations" className="hover:text-green-500">Our Locations</Link></li>
            <li><Link href="/contact" className="hover:text-green-500">Contact Us</Link></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
            Resources
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-green-500">
                Company Profile
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Services Overview
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-500">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL / CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
            Connect
          </h4>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition"
            >
              <span className="text-white font-bold">f</span>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Victor & Co. All rights reserved.
      </div>
    </footer>
  );
}
