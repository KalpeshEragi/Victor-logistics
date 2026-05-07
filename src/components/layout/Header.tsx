"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About Us", href: "/about" },
    { name: "Our Locations", href: "/network" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group transition-transform hover:scale-105">
          <div className="relative">
            <div className="absolute inset-0 bg-green-400/20 blur-lg rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
            <Image
              src="/icons/Victor-logo.png"
              alt="Victor & Co Logo"
              width={42}
              height={42}
              className="relative z-10 object-contain drop-shadow-sm"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-green-700 transition-colors">
            Victor <span className="text-green-600">&</span> Co.
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide text-gray-600 uppercase">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="relative hover:text-green-700 transition-colors group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          
          <Link 
            href="/contact" 
            className="bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200 hover:-translate-y-0.5 active:scale-95"
          >
            Contact Us
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-green-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-50"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 bg-green-600 text-white text-center px-5 py-4 rounded-xl font-bold hover:bg-green-700 transition-all"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
