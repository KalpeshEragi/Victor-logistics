import Image from "next/image";
import Link from "next/link";
import GetInTouch from "@/components/sections/GetInTouch";

{/* 
  ========================================
  IMAGE PLACEHOLDER TO DOWNLOAD:
  → /images/custom-clearance.png (customs/documentation illustration)
  ========================================
*/}

export default function CustomClearancePage() {
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
                                Customs Clearance
                            </span>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                                Hassle-Free <span className="text-green-700">Customs Clearance</span> for Smooth Trade
                            </h1>

                            <p className="mt-5 text-gray-600 leading-relaxed text-base md:text-lg">
                                Complete import and export customs documentation, compliance verification, and clearance support to ensure your cargo moves without delays.
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
                                src="/images/custom-clearance.png"
                                alt="Custom Clearance Services"
                                fill
                                className="object-contain p-8"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== */}
            {/* WHAT WE OFFER */}
            {/* ===================== */}
            <section id="services" className="bg-white">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-2 gap-14 items-start">
                        {/* Left - Key Points */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                                Our Customs Services
                            </h2>

                            <ul className="space-y-5">
                                <li className="flex items-start gap-4">
                                    <span className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5 text-base">✓</span>
                                    <div>
                                        <span className="font-semibold text-gray-800 text-base">Import Clearance</span>
                                        <p className="text-gray-600 mt-1">Complete documentation for incoming cargo</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5 text-base">✓</span>
                                    <div>
                                        <span className="font-semibold text-gray-800 text-base">Export Clearance</span>
                                        <p className="text-gray-600 mt-1">Outbound shipment compliance & paperwork</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5 text-base">✓</span>
                                    <div>
                                        <span className="font-semibold text-gray-800 text-base">Duty Assessment</span>
                                        <p className="text-gray-600 mt-1">Accurate HS code classification & duty calculation</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5 text-base">✓</span>
                                    <div>
                                        <span className="font-semibold text-gray-800 text-base">Compliance Support</span>
                                        <p className="text-gray-600 mt-1">Regulatory adherence & audit preparation</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5 text-base">✓</span>
                                    <div>
                                        <span className="font-semibold text-gray-800 text-base">Liaison with Authorities</span>
                                        <p className="text-gray-600 mt-1">Direct coordination with customs officials</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Right - Document Types */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-6">Documents We Handle</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "Bill of Lading",
                                    "Commercial Invoice",
                                    "Packing List",
                                    "Certificate of Origin",
                                    "Insurance Certificate",
                                    "License & Permits",
                                    "Shipping Bill",
                                    "Bill of Entry"
                                ].map((doc, i) => (
                                    <div key={i} className="bg-[#f8faf8] rounded-xl px-5 py-4 text-gray-700 border border-gray-100 flex items-center gap-3">
                                        <span className="text-xl">📄</span>
                                        <span>{doc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== */}
            {/* HOW IT WORKS */}
            {/* ===================== */}
            <section className="bg-[#f8faf8]">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="text-center mb-14">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">How It Works</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: "📝", title: "Submit Documents", desc: "Share your shipment details with us" },
                            { icon: "🔍", title: "Verification", desc: "We check compliance requirements" },
                            { icon: "📋", title: "Filing", desc: "Submit to customs authorities" },
                            { icon: "✅", title: "Clearance", desc: "Cargo released for delivery" },
                        ].map((item, i) => (
                            <div key={i} className="text-center bg-white rounded-xl p-6 shadow-sm">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="font-semibold text-gray-800 text-base mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
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
                            { icon: "⚡", title: "Fast Processing", desc: "Quick turnaround times" },
                            { icon: "📊", title: "Accurate Classification", desc: "Correct HS codes & duties" },
                            { icon: "🛡️", title: "Compliance First", desc: "Zero penalty approach" },
                            { icon: "👤", title: "Dedicated Agent", desc: "Single point of contact" },
                            { icon: "📍", title: "Pan-India Coverage", desc: "All major ports & ICDs" },
                            { icon: "💰", title: "Cost Effective", desc: "Competitive service rates" },
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
            {/* CTA BANNER */}
            {/* ===================== */}
            <section className="bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-6 py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-800">Need Customs Support?</h2>
                            <ul className="space-y-3 text-gray-600 text-base">
                                <li className="flex items-center gap-3">
                                    <span className="text-green-600">✓</span> Import & Export clearance
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-green-600">✓</span> All major ports covered
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-green-600">✓</span> Quick response within 24 hours
                                </li>
                            </ul>
                        </div>

                        <div className="text-center md:text-right">
                            <Link
                                href="/contact"
                                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition text-base"
                            >
                                Get Customs Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <GetInTouch />

        </main>
    );
}
