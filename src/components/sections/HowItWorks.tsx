'use client';

import Image from "next/image";

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
    <section className="bg-gradient-to-b from-white to-[#f5faf2] py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-wide rounded-full mb-3">
            Simple Process
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How It Works
          </h2>
        </div>

        {/* VERTICAL TIMELINE */}
        <div className="relative">
          {/* Center Line - Desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-green-200 -translate-x-1/2" />

          <div className="space-y-10 md:space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  {/* Timeline Dot - Desktop */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-5 h-5 rounded-full bg-green-600 ring-4 ring-white shadow-lg" />
                  </div>

                  {/* Content Row */}
                  <div className={`flex flex-col md:flex-row items-center gap-6 ${isEven ? '' : 'md:flex-row-reverse'
                    }`}>

                    {/* IMAGE SIDE */}
                    <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12'}`}>
                      <div className="relative w-32 h-32 md:w-40 md:h-40 bg-green-50 rounded-2xl p-4 shadow-sm">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-contain p-3"
                        />
                      </div>
                    </div>

                    {/* CONTENT SIDE */}
                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right'}`}>
                      {/* Mobile Step Badge */}
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? '' : 'md:justify-end'}`}>
                        <span className="w-7 h-7 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center">
                          {index + 1}
                        </span>
                        <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
                          Step {index + 1}
                        </span>
                      </div>

                      <h3 className="font-bold text-gray-800 text-lg mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
          >
            Start Your Journey
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}