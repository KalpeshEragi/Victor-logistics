import Image from "next/image";
import Link from "next/link";
import GetInTouch from "@/components/sections/GetInTouch";

export default function SeaFreightPage() {
  return (
    <main className="bg-white">

      {/* ===================== */}
      {/* HERO - Compact & Clean */}
      {/* ===================== */}
      <section className="bg-gradient-to-br from-[#fdf6f0] to-[#f5ebe0]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-wide rounded-full mb-4">
                Sea Freight Services
              </span>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                Reliable <span className="text-green-700">Sea Freight</span> Solutions with Complete Transparency
              </h1>

              <p className="mt-4 text-gray-600 leading-relaxed">
                As an NVOCC operator, we manage end-to-end sea freight with clear pricing and dependable service across global trade routes.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
                >
                  Get a Quote
                </Link>
                <Link
                  href="#services"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Image - Larger & Eye-catching */}
            <div className="relative h-80 md:h-[420px] bg-gradient-to-br from-green-50 to-green-100 rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.1),transparent)]" />
              <Image
                src="/images/sea-freight.png"
                alt="Sea Freight Services"
                fill
                className="object-contain p-8"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* WHAT WE OFFER - Bullet Points */}
      {/* ===================== */}
      <section id="services" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Key Points */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                What We Offer
              </h2>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">NVOCC Operations</span>
                    <p className="text-sm text-gray-600">Complete shipment coordination without vessel ownership</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">Documentation & Customs</span>
                    <p className="text-sm text-gray-600">All paperwork handled end-to-end</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">Transparent Pricing</span>
                    <p className="text-sm text-gray-600">Clear cost breakdown before shipment</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">Global Partner Network</span>
                    <p className="text-sm text-gray-600">Trusted agents across major trade lanes</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right - Service Cards */}
            <div className="grid gap-4">
              <div className="bg-[#f8faf8] rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-green-700 mb-2">FCL (Full Container)</h3>
                <p className="text-sm text-gray-600">Exclusive container for large shipments with faster transit</p>
              </div>
              <div className="bg-[#f8faf8] rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-green-700 mb-2">LCL (Less than Container)</h3>
                <p className="text-sm text-gray-600">Cost-effective option for smaller cargo volumes</p>
              </div>
              <div className="bg-[#f8faf8] rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-green-700 mb-2">Break Bulk / Project Cargo</h3>
                <p className="text-sm text-gray-600">Oversized machinery and non-containerized goods</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* ROUTES - Compact */}
      {/* ===================== */}
      <section className="bg-[#f8faf8]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800">Routes We Cover</h2>
          </div>

          <div className="flex justify-center mb-8">
            <Image
              src="/images/routes-map.png"
              alt="Global Sea Freight Routes"
              width={700}
              height={350}
              className="rounded-xl"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["India ↔ Singapore", "India ↔ Middle East", "India ↔ South East Asia", "Cross Trade"].map((route) => (
              <span key={route} className="bg-green-600 text-white text-sm px-4 py-2 rounded-full">
                {route}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* WHY CHOOSE US - Clean Grid */}
      {/* ===================== */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800">Why Choose Victor & Co.</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: "🚢", title: "NVOCC Expertise", desc: "Specialized sea freight operations" },
              { icon: "📋", title: "Transparent Charges", desc: "No hidden fees or surprises" },
              { icon: "🌍", title: "Global Network", desc: "Partners across trade lanes" },
              { icon: "👤", title: "Dedicated Support", desc: "Single point of contact" },
              { icon: "📅", title: "Reliable Schedules", desc: "On-time departures & arrivals" },
              { icon: "📦", title: "Full Service", desc: "Import & export handling" },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-[#f8faf8] to-white rounded-xl p-5 border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* LOCAL CHARGES - Clean */}
      {/* ===================== */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Transparent Local Charges</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Terminal handling & documentation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Customs coordination
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Clear breakdown before shipment
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Port-specific cost explanations
                </li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-600 mb-4 text-sm">
                We serve Mumbai, Chennai, Delhi, Bengaluru, Hyderabad, Pune & more
              </p>
              <Link
                href="/contact"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Request Charges Breakdown
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch />

    </main>
  );
}
