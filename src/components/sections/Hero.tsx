"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { trackEvent } from "@/lib/analytics";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-green-950">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero-logistics.png"
      >
        <source src="/video/victor_hero.mp4" type="video/mp4" />
      </video>

      {/* Clearer Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-transparent to-green-950/70" />

      {/* Floating Gradient Blobs for 3D Depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20 flex flex-col items-center text-center">
        <Reveal delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-medium text-green-50 tracking-wide uppercase">Global Logistics Excellence</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight drop-shadow-xl">
            International <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">Shipping</span> &<br />
            Logistics Solutions
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-2 text-lg md:text-xl text-green-50/90 font-medium max-w-3xl drop-shadow-md">
            Seamless Sea Freight, Customs Clearance, Container Trading, and Modular Cabins. Trusted worldwide by industry leaders.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-col sm:flex-row gap-5 items-center justify-center">
            <Link
              href="/contact"
              onClick={() => trackEvent({ type: 'click', element: 'hero-quote', label: 'Get a Quote' })}
              className="group relative px-8 py-4 bg-green-500 text-white font-semibold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2">
                Get a Quote
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="#services"
              onClick={() => trackEvent({ type: 'click', element: 'hero-services', label: 'Explore Services' })}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all hover:scale-105"
            >
              Explore Services
            </Link>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-8 border-t border-white/10">
            {[
              { label: "Global Reach", value: "50+" },
              { label: "Shipments", value: "10K+" },
              { label: "Success Rate", value: "99%" },
              { label: "Partners", value: "200+" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-sm text-green-200 font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
