"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

export default function GetInTouch() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    // Simulate API call for premium UX feel
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSuccess("Thank you! We will contact you shortly.");
    form.reset();
    setLoading(false);
  };

  return (
    <section className="relative bg-gradient-to-br from-[#eef7ec] to-white py-28 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-green-300/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <Reveal delay={0}>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-white border border-green-100 text-green-700 text-sm font-bold uppercase tracking-wider rounded-full mb-4 shadow-sm">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Get in Touch
            </h2>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
              Ready to streamline your logistics? Fill out the form and our team will get back to you within 24 hours.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            <Reveal delay={100}>
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/5 transition-all duration-300 group">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-1">Call Us</p>
                    <a href="tel:+918108834666" className="text-gray-900 font-bold hover:text-green-600 transition-colors block">
                      +91 8108834666
                    </a>
                    <a href="tel:+918885087666" className="text-gray-900 font-bold hover:text-green-600 transition-colors block">
                      +91 8885087666
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/5 transition-all duration-300 group">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-1">Email Us</p>
                    <a
                      href="mailto:cs.mum@victorexpressline.com"
                      className="text-gray-900 font-bold hover:text-green-600 transition-colors"
                    >
                      cs.mum@victorexpressline.com
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/5 transition-all duration-300 group">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-1">Visit Us</p>
                    <p className="text-gray-900 font-bold">Mumbai, India</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-white shadow-xl shadow-green-900/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl animate-pulse">⚡</span>
                    <p className="font-bold text-lg">Quick Response</p>
                  </div>
                  <p className="text-green-50 text-sm leading-relaxed font-medium">
                    We respond to all enquiries within 24 business hours.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={200} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 block p-4 transition-all duration-300 outline-none"
                  />
                </div>
                <div className="relative">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 block p-4 transition-all duration-300 outline-none"
                  />
                </div>
                <div className="relative">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1">
                    Contact Number *
                  </label>
                  <input
                    name="phone"
                    placeholder="+91 98765 43210"
                    required
                    className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 block p-4 transition-all duration-300 outline-none"
                  />
                </div>
                <div className="relative">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 block p-4 transition-all duration-300 outline-none appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option>Sea Freight</option>
                    <option>Air Freight</option>
                    <option>Customs Clearance</option>
                    <option>Containers</option>
                    <option>Prefabricated Cabins</option>
                    <option>Other</option>
                  </select>
                  {/* Custom select arrow */}
                  <div className="absolute right-4 top-[2.4rem] pointer-events-none text-gray-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-6 relative">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  required
                  rows={4}
                  className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 block p-4 transition-all duration-300 outline-none resize-none"
                />
              </div>

              <label className="flex items-start gap-3 mt-6 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input
                    type="checkbox"
                    name="consent"
                    className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded focus:ring-4 focus:ring-green-500/20 checked:bg-green-600 checked:border-green-600 transition-all cursor-pointer"
                  />
                  <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 font-medium group-hover:text-gray-700 transition-colors">
                  I agree to receive updates and communications from Victor & Co.
                </span>
              </label>

              <div className="mt-8 relative h-14">
                <button
                  disabled={loading || !!success}
                  className={`absolute inset-0 w-full rounded-2xl font-bold transition-all duration-500 flex items-center justify-center gap-2 overflow-hidden ${
                    success 
                      ? "bg-green-50 text-green-700 border border-green-200" 
                      : "bg-green-600 text-white hover:bg-green-700 shadow-[0_10px_20px_-10px_rgba(22,163,74,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(22,163,74,0.6)] hover:-translate-y-1"
                  } disabled:opacity-90 disabled:cursor-not-allowed`}
                >
                  <div className={`flex items-center gap-2 transition-transform duration-500 ${loading ? "-translate-y-16" : "translate-y-0"}`}>
                    {success ? (
                      <>
                        <span className="text-xl">✨</span>
                        {success}
                      </>
                    ) : (
                      <>
                        Submit Enquiry
                        <span className="text-xl leading-none">→</span>
                      </>
                    )}
                  </div>
                  
                  {/* Loading State Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-transform duration-500 ${loading ? "translate-y-0" : "translate-y-16"}`}>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                    <span>Sending...</span>
                  </div>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
