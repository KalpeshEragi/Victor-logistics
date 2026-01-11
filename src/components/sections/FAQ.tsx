"use client";

import Image from "next/image";
import { useState } from "react";

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
  {
    question: "What are prefab and fabricated cabins used for?",
    answer:
      "They are commonly used for site offices, port operations, industrial yards, warehouses, and temporary infrastructure requirements.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT IMAGE */}
        <div className="relative mt-16 flex justify-center">
          <Image
            src="/images/faq.png"
            alt="Frequently Asked Questions"
            width={460}
            height={520}
            className="object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* FAQ HEADER BOX */}
          <div className="bg-[#eaf6ea] rounded-lg px-6 py-5 flex items-center gap-4 mb-10 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center">
              <span className="text-white text-lg font-bold">?</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              FAQs
            </h2>
          </div>

          {/* FAQ ACCORDION */}
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#eaf6ea] rounded-lg border border-green-100"
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <span className="text-2xl font-bold text-green-700">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="px-6 pb-6 text-sm text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
