"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    question: "What shipping services does Victor & Co. provide?",
    answer:
      "Victor & Co. offers comprehensive logistics solutions including sea freight (NVOCC), customs clearance, container trading and one-way leasing, prefab cabins, and fabricated cabin solutions.",
  },
  {
    question: "Do you handle customs clearance for imports and exports?",
    answer:
      "Yes. We provide complete customs clearance support including documentation, compliance, and coordination with port and customs authorities.",
  },
  {
    question: "Which regions do you operate in?",
    answer:
      "We serve clients across India and support international trade routes through our global logistics network.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        
        {/* LEFT IMAGE */}
        <Reveal delay={0}>
          <div className="relative mt-16 flex justify-center group">
            <div className="absolute inset-0 bg-green-200/30 rounded-full blur-3xl scale-90 group-hover:scale-100 transition-transform duration-700" />
            <Image
              src="/images/faq.png"
              alt="Frequently Asked Questions"
              width={460}
              height={520}
              className="object-contain relative z-10 animate-[float_6s_ease-in-out_infinite]"
            />
          </div>
        </Reveal>

        {/* RIGHT CONTENT */}
        <Reveal delay={200}>
          <div>
            {/* FAQ HEADER BOX */}
            <div className="bg-gradient-to-r from-green-50 to-white rounded-2xl px-8 py-6 flex items-center gap-5 mb-12 shadow-sm border border-green-100/50">
              <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center shadow-lg shadow-green-200">
                <span className="text-white text-xl font-bold">?</span>
              </div>
              <div>
                <span className="text-sm font-bold text-green-600 uppercase tracking-wider mb-1 block">Help Center</span>
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                  Frequently Asked
                </h2>
              </div>
            </div>

            {/* FAQ ACCORDION */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isActive 
                        ? "bg-white border-green-200 shadow-md shadow-green-100/50" 
                        : "bg-gray-50/50 border-transparent hover:bg-gray-50 hover:border-gray-200"
                    }`}
                  >
                    <button
                      onClick={() => setActiveIndex(isActive ? null : index)}
                      className="w-full flex justify-between items-center px-6 py-6 text-left focus:outline-none group"
                    >
                      <span className={`font-semibold text-lg transition-colors ${
                        isActive ? "text-green-700" : "text-gray-800 group-hover:text-green-600"
                      }`}>
                        {faq.question}
                      </span>
                      <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive ? "bg-green-100 text-green-700 rotate-180" : "bg-gray-200/50 text-gray-500 group-hover:bg-green-50 group-hover:text-green-600"
                      }`}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pt-0 text-base text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}} />
    </section>
  );
}
