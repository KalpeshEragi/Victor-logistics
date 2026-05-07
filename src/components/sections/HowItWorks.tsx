'use client';

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    title: "Share Your Requirement",
    description: "Tell us what you need – shipping, containers, or cabins.",
    image: "/icons/step-contact.png",
  },
  {
    title: "Plan & Document",
    description: "We handle logistics planning and all paperwork.",
    image: "/icons/step-plan.png",
  },
  {
    title: "Execute & Ship",
    description: "Coordinated operations across our network.",
    image: "/icons/step-ship.png",
  },
  {
    title: "Deliver & Support",
    description: "On-time delivery with continued assistance.",
    image: "/icons/step-delivery.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-white to-[#f5faf2] py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <Reveal delay={0}>
          <div className="text-center mb-20">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-wide rounded-full mb-3 shadow-sm">
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              How It Works
            </h2>
          </div>
        </Reveal>

        {/* VERTICAL TIMELINE */}
        <div className="relative">
          {/* Center Line - Desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-100 via-green-300 to-green-100 -translate-x-1/2 rounded-full opacity-50" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <Reveal key={index} delay={index * 150}>
                  <div className="relative group">
                    {/* Timeline Dot - Desktop */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-green-600 ring-4 ring-white shadow-[0_0_15px_rgba(34,197,94,0.5)] group-hover:scale-125 transition-transform duration-500" />
                    </div>

                    {/* Content Row */}
                    <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                      
                      {/* IMAGE SIDE */}
                      <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'}`}>
                        <div className="relative w-40 h-40 md:w-48 md:h-48 bg-white/60 backdrop-blur-md rounded-[2rem] p-6 shadow-xl border border-white/50 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(22,163,74,0.3)] transition-all duration-500 overflow-hidden">
                          <div className="absolute inset-0 bg-green-500/5 rounded-full blur-2xl scale-0 group-hover:scale-150 transition-transform duration-700" />
                          <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                              src={step.image}
                              alt={step.title}
                              fill
                              className="object-contain p-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-md"
                            />
                          </div>
                        </div>
                      </div>

                      {/* CONTENT SIDE */}
                      <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16 md:text-left' : 'md:pr-16 md:text-right'}`}>
                        {/* Mobile Step Badge */}
                        <div className={`flex items-center gap-3 mb-4 ${isEven ? '' : 'md:justify-end'}`}>
                          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white text-sm font-bold flex items-center justify-center shadow-md">
                            {index + 1}
                          </span>
                          <span className="text-xs font-bold text-green-600 uppercase tracking-widest">
                            Step {index + 1}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-base text-gray-500 leading-relaxed max-w-sm ${isEven ? '' : 'ml-auto'}">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <Reveal delay={600}>
          <div className="text-center mt-24">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-600 transition-all shadow-[0_10px_20px_-10px_rgba(22,163,74,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(22,163,74,0.6)] hover:-translate-y-1"
            >
              Start Your Journey
              <span className="text-xl leading-none">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}