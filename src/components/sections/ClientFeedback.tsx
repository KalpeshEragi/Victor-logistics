"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/ui/Reveal";

export default function ClientFeedback() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger animation shortly after mount
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const ratings = [
    { stars: 5, percent: 85 },
    { stars: 4, percent: 10 },
    { stars: 3, percent: 3 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 1 },
  ];

  return (
    <section className="bg-[#f8faf8] relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-green-200/40 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-28 relative z-10">
        
        {/* HEADER */}
        <Reveal delay={0}>
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Client Feedback Summary
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              An overview of how businesses rate Victor & Co. based on service
              quality, reliability, and operational efficiency.
            </p>
          </div>
        </Reveal>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: BAR CHART */}
          <Reveal delay={200}>
            <div className="space-y-6">
              <div className="flex items-center gap-6 mb-8">
                <div className="flex flex-col items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-lg border border-green-50">
                  <span className="text-4xl font-black text-green-600">4.8</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Out of 5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Excellent Rating</h3>
                  <p className="text-sm text-gray-500 mt-1">Based on 500+ client reviews</p>
                </div>
              </div>

              {ratings.map((item, i) => (
                <div key={item.stars} className="flex items-center gap-4 group">
                  
                  {/* STAR LABEL */}
                  <div className="w-12 text-sm font-bold text-gray-700 flex items-center gap-1">
                    {item.stars} <span className="text-yellow-400 text-lg">★</span>
                  </div>

                  {/* BAR */}
                  <div className="flex-1 bg-gray-200/60 rounded-full h-3.5 overflow-hidden backdrop-blur-sm border border-gray-100">
                    <div
                      className={`h-full rounded-full transition-all duration-[1500ms] ease-out ${
                        item.stars >= 4 
                          ? 'bg-gradient-to-r from-green-400 to-green-600 shadow-[0_0_12px_rgba(34,197,94,0.8)]' 
                          : 'bg-green-400'
                      }`}
                      style={{ 
                        width: mounted ? `${item.percent}%` : '0%',
                        transitionDelay: `${i * 100}ms`
                      }}
                    />
                  </div>

                  {/* PERCENT */}
                  <div className="w-12 text-sm font-semibold text-gray-600 text-right">
                    {item.percent}%
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* RIGHT: SUMMARY TEXT */}
          <Reveal delay={400}>
            <div className="relative bg-white/70 backdrop-blur-xl rounded-[2rem] p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white/50 group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <span className="text-2xl">✨</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  What Clients Appreciate
                </h3>

                <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                  Most clients rate Victor & Co. highly for reliable execution,
                  transparent documentation, and responsive coordination across
                  logistics and infrastructure services.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                  Consistent <strong className="text-gray-900">4–5 star feedback</strong> reflects long-term partnerships and
                  trust built through operational excellence.
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
