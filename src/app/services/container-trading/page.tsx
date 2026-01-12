import Image from "next/image";
import Link from "next/link";
import GetInTouch from "@/components/sections/GetInTouch";
import { containers } from "@/data/containers";

{/* 
  ========================================
  IMAGE PLACEHOLDER TO DOWNLOAD:
  → /images/container-trading.png (shipping containers illustration)
  ========================================
*/}

export default function ContainerTradingPage() {
    return (
        <main className="bg-white">

            {/* ===================== */}
            {/* HERO */}
            {/* ===================== */}
            <section className="bg-gradient-to-br from-[#eef7ec] to-[#d6efd6]">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold uppercase tracking-wide rounded-full mb-4">
                                Container Solutions
                            </span>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                                <span className="text-green-700">Container Trading</span> & One-Way Leasing
                            </h1>

                            <p className="mt-5 text-gray-600 leading-relaxed text-base md:text-lg">
                                Flexible container solutions for sale and one-way leasing. Reduce repositioning costs and optimize your supply chain with our wide inventory.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-green-600 text-white px-7 py-3.5 rounded-lg font-medium hover:bg-green-700 transition text-base"
                                >
                                    Get a Quote
                                </Link>
                                <Link
                                    href="#services"
                                    className="border border-gray-300 text-gray-700 px-7 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition text-base"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative h-80 md:h-[420px] bg-gradient-to-br from-green-50 to-green-100 rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.1),transparent)]" />
                            <Image
                                src="/images/container-trading.png"
                                alt="Container Trading Services"
                                fill
                                className="object-contain p-8"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== */}
            {/* TWO SERVICE TYPES */}
            {/* ===================== */}
            <section id="services" className="bg-white">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="text-center mb-14">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Container Solutions</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Container Trading */}
                        <div className="bg-gradient-to-br from-[#eef7ec] to-white rounded-2xl p-8 border border-green-100">
                            <div className="text-5xl mb-5">📦</div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Container Trading</h3>
                            <p className="text-gray-600 mb-5">
                                Buy new or used containers for your operational needs. Wide inventory of standard and specialized units available.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-green-600 text-lg">✓</span> 20ft & 40ft standard containers
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-green-600 text-lg">✓</span> High cube containers
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-green-600 text-lg">✓</span> Refrigerated (reefer) units
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-green-600 text-lg">✓</span> Open top & flat rack
                                </li>
                            </ul>
                        </div>

                        {/* One-Way Leasing */}
                        <div className="bg-gradient-to-br from-[#f5faf2] to-white rounded-2xl p-8 border border-green-100">
                            <div className="text-5xl mb-5">🔄</div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">One-Way Leasing</h3>
                            <p className="text-gray-600 mb-5">
                                Lease containers for a single trip without the cost of returning them. Perfect for asymmetric trade routes.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-green-600 text-lg">✓</span> No repositioning costs
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-green-600 text-lg">✓</span> Flexible terms
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-green-600 text-lg">✓</span> Drop at destination port
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-green-600 text-lg">✓</span> Ideal for one-time shipments
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== */}
            {/* AVAILABLE CONTAINERS - SLIDER */}
            {/* ===================== */}
            <section className="bg-[#f8faf8]">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Containers For Sale</h2>
                        <p className="mt-3 text-gray-600">Swipe or click to explore our available inventory</p>
                    </div>

                    {/* Product Slider */}
                    <div className="relative">
                        <div className="overflow-x-auto pb-4 scrollbar-hide">
                            <div className="flex gap-6" style={{ minWidth: 'max-content' }}>
                                {containers.map((container) => (
                                    <Link
                                        key={container.id}
                                        href={`/services/container-trading/${container.id}`}
                                        className="w-72 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                                    >
                                        {/* Image */}
                                        <div className="relative h-44 bg-gradient-to-br from-gray-50 to-gray-100">
                                            <Image
                                                src={container.image}
                                                alt={container.name}
                                                fill
                                                className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                                                {container.type}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5">
                                            <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-green-600 transition-colors">
                                                {container.name}
                                            </h3>
                                            <p className="text-xs text-gray-500 mb-3">
                                                {container.length} | {container.size}
                                            </p>
                                            <div className="flex items-baseline justify-between">
                                                <div>
                                                    <span className="text-xl font-bold text-green-600">
                                                        ₹{container.price.toLocaleString("en-IN")}
                                                    </span>
                                                    <span className="text-xs text-gray-500">/{container.priceUnit}</span>
                                                </div>
                                                <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                                                    🚚 Delivery in {container.deliveryTime}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Scroll Hint */}
                        <div className="flex justify-center mt-4 gap-2">
                            <span className="text-xs text-gray-400">← Scroll to see more →</span>
                        </div>
                    </div>

                    {/* View All CTA */}
                    <div className="text-center mt-10">
                        <Link
                            href="/contact"
                            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition"
                        >
                            Request Custom Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===================== */}
            {/* WHY CHOOSE US */}
            {/* ===================== */}
            <section className="bg-white">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="text-center mb-14">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Why Choose Victor & Co.</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { icon: "📊", title: "Wide Inventory", desc: "Large selection of containers" },
                            { icon: "💰", title: "Competitive Pricing", desc: "Best rates in the market" },
                            { icon: "🔍", title: "Quality Inspected", desc: "All units thoroughly checked" },
                            { icon: "🚚", title: "Delivery Arranged", desc: "Transport to your location" },
                            { icon: "📝", title: "Flexible Terms", desc: "Customized to your needs" },
                            { icon: "⚡", title: "Quick Availability", desc: "Fast turnaround" },
                        ].map((item, i) => (
                            <div key={i} className="bg-gradient-to-br from-[#f8faf8] to-white rounded-xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===================== */}
            {/* USE CASES */}
            {/* ===================== */}
            <section className="bg-[#f8faf8]">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Who Uses Our Containers</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Shipping Lines",
                            "Exporters",
                            "Importers",
                            "Freight Forwarders",
                            "Construction Sites",
                            "Storage Facilities",
                            "Event Companies",
                            "Modular Offices"
                        ].map((item, i) => (
                            <span key={i} className="bg-white border border-gray-200 px-6 py-3 rounded-full text-gray-700">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===================== */}
            {/* CTA BANNER */}
            {/* ===================== */}
            <section className="bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-6 py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-800">Need Containers?</h2>
                            <ul className="space-y-3 text-gray-600 text-base">
                                <li className="flex items-center gap-3">
                                    <span className="text-green-600">✓</span> New & used containers for sale
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-green-600">✓</span> One-way leasing available
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-green-600">✓</span> All container types in stock
                                </li>
                            </ul>
                        </div>

                        <div className="text-center md:text-right">
                            <Link
                                href="/contact"
                                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition text-base"
                            >
                                Request Container Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <GetInTouch />

        </main>
    );
}
