import Image from "next/image";
import Link from "next/link";
import GetInTouch from "@/components/sections/GetInTouch";
import { cabins } from "@/data/cabins";

export default function PrefabCabinsPage() {
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
                                Prefab Solutions
                            </span>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                                <span className="text-green-700">Portable Cabins</span> & Prefab Structures
                            </h1>

                            <p className="mt-5 text-gray-600 leading-relaxed text-base md:text-lg">
                                High-quality portable office cabins, security cabins, and prefab structures. Ready to move, easy to install, built to last.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-green-600 text-white px-7 py-3.5 rounded-lg font-medium hover:bg-green-700 transition text-base"
                                >
                                    Get a Quote
                                </Link>
                                <Link
                                    href="#products"
                                    className="border border-gray-300 text-gray-700 px-7 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition text-base"
                                >
                                    View Products
                                </Link>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative h-80 md:h-[420px] bg-gradient-to-br from-green-50 to-green-100 rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.1),transparent)]" />
                            <Image
                                src="/images/prefab-cabins.png"
                                alt="Prefab Cabins"
                                fill
                                className="object-contain p-8"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== */}
            {/* CABIN TYPES */}
            {/* ===================== */}
            <section className="bg-white">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="text-center mb-14">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">What We Offer</h2>
                        <p className="mt-3 text-gray-600">Portable solutions for every need</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Office Cabins */}
                        <div className="bg-gradient-to-br from-[#eef7ec] to-white rounded-2xl p-6 border border-green-100 text-center">
                            <div className="text-5xl mb-4">🏢</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Office Cabins</h3>
                            <p className="text-gray-600 text-sm">Portable site offices and workspaces from 10ft to 40ft</p>
                        </div>

                        {/* Security Cabins */}
                        <div className="bg-gradient-to-br from-[#f5faf2] to-white rounded-2xl p-6 border border-green-100 text-center">
                            <div className="text-5xl mb-4">🛡️</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Security Cabins</h3>
                            <p className="text-gray-600 text-sm">Guard rooms and security posts in various sizes</p>
                        </div>

                        {/* Toilet Cabins */}
                        <div className="bg-gradient-to-br from-[#eef7ec] to-white rounded-2xl p-6 border border-green-100 text-center">
                            <div className="text-5xl mb-4">🚻</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Toilet Cabins</h3>
                            <p className="text-gray-600 text-sm">Portable sanitation solutions for sites and events</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== */}
            {/* PRODUCT SLIDER */}
            {/* ===================== */}
            <section id="products" className="bg-[#f8faf8]">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Cabins For Sale</h2>
                        <p className="mt-3 text-gray-600">Swipe or click to explore our available inventory</p>
                    </div>

                    {/* Product Slider */}
                    <div className="relative">
                        <div className="overflow-x-auto pb-4 scrollbar-hide">
                            <div className="flex gap-6" style={{ minWidth: 'max-content' }}>
                                {cabins.map((cabin) => (
                                    <Link
                                        key={cabin.id}
                                        href={`/services/prefab-cabins/${cabin.id}`}
                                        className="w-72 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                                    >
                                        {/* Image */}
                                        <div className="relative h-44 bg-gradient-to-br from-gray-50 to-gray-100">
                                            <Image
                                                src={cabin.image}
                                                alt={cabin.name}
                                                fill
                                                className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                                                {cabin.usage}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5">
                                            <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-green-600 transition-colors line-clamp-1">
                                                {cabin.name}
                                            </h3>
                                            <p className="text-xs text-gray-500 mb-3">
                                                {cabin.size} | {cabin.material}
                                            </p>
                                            <div className="flex items-baseline justify-between">
                                                <div>
                                                    <span className="text-xl font-bold text-green-600">
                                                        ₹{cabin.price.toLocaleString("en-IN")}
                                                    </span>
                                                    <span className="text-xs text-gray-500">/{cabin.priceUnit}</span>
                                                </div>
                                                <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                                                    🚚 {cabin.deliveryTime}
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
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Why Choose Our Cabins</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { icon: "🏗️", title: "Prefabricated", desc: "Quick installation" },
                            { icon: "🚚", title: "Easy to Move", desc: "Fully portable" },
                            { icon: "🌿", title: "Eco Friendly", desc: "Sustainable materials" },
                            { icon: "💪", title: "Durable", desc: "Built to last" },
                            { icon: "🎨", title: "Customizable", desc: "As per your needs" },
                            { icon: "💰", title: "Cost Effective", desc: "Best value for money" },
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
            {/* CTA */}
            {/* ===================== */}
            <section className="bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-6 py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">Need a Portable Cabin?</h2>
                            <ul className="space-y-3 text-gray-600 text-base">
                                <li className="flex items-center gap-3">
                                    <span className="text-green-600">✓</span> Office, Security & Toilet Cabins
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-green-600">✓</span> Custom sizes available
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-green-600">✓</span> Fast delivery across India
                                </li>
                            </ul>
                        </div>

                        <div className="text-center md:text-right">
                            <Link
                                href="/contact"
                                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition text-base"
                            >
                                Request Cabin Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <GetInTouch />

        </main>
    );
}
