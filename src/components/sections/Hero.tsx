import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#eef7ec]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-700">
            International <br />
            <span className="text-green-700">Shipping & Logistics</span>{" "}
            Solutions
          </h1>

          <p className="mt-4 text-sm text-gray-600 font-medium">
            Sea Freight (NVOCC) · Customs Clearance · Containers · Cabins
          </p>

          <p className="mt-6 text-gray-700 max-w-xl">
            <span className="font-semibold text-green-700">
              Victor & Co.
            </span>{" "}
            is a trusted logistics and infrastructure solutions provider
            offering reliable sea freight (NVOCC), customs clearance,
            container trading, and modular cabin solutions across India and
            global trade routes.
          </p>

          <p className="mt-4 text-gray-600 max-w-xl">
            Serving India and international markets with proven expertise in
            shipping, container logistics, and site infrastructure solutions.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 rounded-md bg-green-700 px-6 py-3 text-white font-medium hover:bg-green-800 transition"
          >
            Get a Quote
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[320px] md:h-[420px]">
          <Image
            src="/images/hero-logistics.png"
            alt="International Shipping and Logistics Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
