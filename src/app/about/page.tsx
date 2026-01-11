import Image from "next/image";
import Link from "next/link";

{/* 
  ========================================
  IMAGE PLACEHOLDER TO DOWNLOAD:
  → /images/about-hero.png (team/office/logistics illustration)
  ========================================
*/}

export default function AboutPage() {
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
                About Us
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Your Trusted <span className="text-green-700">Logistics Partner</span> Since 2009
              </h1>

              <p className="mt-5 text-gray-600 leading-relaxed text-base md:text-lg">
                Victor Express Line delivers transparent, reliable, and customer-focused shipping solutions across global trade routes.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-green-600 text-white px-7 py-3.5 rounded-lg font-medium hover:bg-green-700 transition text-base"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/services"
                  className="border border-gray-300 text-gray-700 px-7 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition text-base"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-80 md:h-[420px] bg-gradient-to-br from-green-50 to-green-100 rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.1),transparent)]" />
              <Image
                src="/images/about-hero.png"
                alt="Victor Express Line Team"
                fill
                className="object-contain p-8"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* WHO WE ARE - With Stats */}
      {/* ===================== */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Left - Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Who We Are
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                Victor Express Line is a Singapore-owned logistics company with our Indian head office in Mumbai. We support global trade through dependable and transparent logistics services.
              </p>

              <ul className="space-y-3 mt-6">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-600 text-lg">✓</span> Established by experienced shipping professionals
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-600 text-lg">✓</span> Specialized in sea freight & container solutions
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-600 text-lg">✓</span> Focus on consistency & operational clarity
                </li>
              </ul>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#f8faf8] rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-green-600">15+</div>
                <p className="text-gray-600 mt-2">Years Experience</p>
              </div>
              <div className="bg-[#f8faf8] rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-green-600">50+</div>
                <p className="text-gray-600 mt-2">Global Partners</p>
              </div>
              <div className="bg-[#f8faf8] rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-green-600">1000+</div>
                <p className="text-gray-600 mt-2">Shipments Yearly</p>
              </div>
              <div className="bg-[#f8faf8] rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-green-600">100%</div>
                <p className="text-gray-600 mt-2">Client Focused</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* VISION & MISSION */}
      {/* ===================== */}
      <section className="bg-[#f8faf8]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a trusted and premium logistics partner across the Indian Sub-Continent, South East Asia, and Far East regions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide complete and competitive logistics solutions through a responsive, transparent, and service-driven approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* WHY CHOOSE US */}
      {/* ===================== */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Why Victor Express Line</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: "🚢", title: "NVOCC Expertise", desc: "Freight forwarding specialists" },
              { icon: "💰", title: "Transparent Pricing", desc: "Clear local charges" },
              { icon: "🌍", title: "Global Network", desc: "Strong agent partnerships" },
              { icon: "⚡", title: "Reliable Operations", desc: "Consistent performance" },
              { icon: "📦", title: "All Cargo Sizes", desc: "Small to large shipments" },
              { icon: "🤝", title: "Customer First", desc: "Service-driven approach" },
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
      {/* CAPABILITIES */}
      {/* ===================== */}
      <section className="bg-[#f8faf8]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Capabilities</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Sea Freight (FCL / LCL)",
              "Container Trading",
              "One-Way Leasing",
              "Customs Clearance",
              "Door-to-Door Logistics",
              "Warehousing Support",
              "Marine Insurance",
              "Special Cargo Handling"
            ].map((item, i) => (
              <span key={i} className="bg-white border border-gray-200 px-5 py-3 rounded-full text-gray-700 flex items-center gap-2">
                <span className="text-green-600">✓</span> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* CTA */}
      {/* ===================== */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Ready to Work Together?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Let us handle your logistics needs with transparency and reliability.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition text-base"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
