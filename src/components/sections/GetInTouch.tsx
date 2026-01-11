"use client";

import { useState } from "react";

export default function GetInTouch() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      service: form.service.value,
      message: form.message.value,
      consent: form.consent.checked,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSuccess("Thank you! We will contact you shortly.");
      form.reset();
    }

    setLoading(false);
  };

  return (
    <section className="bg-gradient-to-br from-[#eef7ec] to-[#d6efd6]">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl font-bold text-gray-800">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Ready to streamline your logistics? Fill out the form and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Call Us</p>
                  <p className="text-gray-800 font-semibold">+91 22 1234 5678</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Us</p>
                  <p className="text-gray-800 font-semibold">info@victorlogistics.com</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Visit Us</p>
                  <p className="text-gray-800 font-semibold">Mumbai, India</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-green-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">⚡</span>
                <p className="font-semibold">Quick Response</p>
              </div>
              <p className="text-green-100 text-sm">
                We respond to all enquiries within 24 business hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    placeholder="John Doe"
                    required
                    className="border border-gray-200 p-3.5 rounded-xl w-full focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="border border-gray-200 p-3.5 rounded-xl w-full focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Number *
                  </label>
                  <input
                    name="phone"
                    placeholder="+91 98765 43210"
                    required
                    className="border border-gray-200 p-3.5 rounded-xl w-full focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    required
                    className="border border-gray-200 p-3.5 rounded-xl w-full focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition bg-white"
                  >
                    <option value="">Select a service</option>
                    <option>Sea Freight</option>
                    <option>Air Freight</option>
                    <option>Customs Clearance</option>
                    <option>Containers</option>
                    <option>Prefabricated Cabins</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  required
                  rows={4}
                  className="border border-gray-200 p-3.5 rounded-xl w-full focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition resize-none"
                />
              </div>

              <label className="flex items-start gap-3 mt-5 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  className="mt-0.5 w-4 h-4 accent-green-600 rounded"
                />
                <span className="text-sm text-gray-600">
                  I agree to receive updates and communications from Victor & Co.
                </span>
              </label>

              <button
                disabled={loading}
                className="mt-6 w-full bg-green-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-green-200"
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Enquiry
                    <span className="text-lg">→</span>
                  </>
                )}
              </button>

              {success && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                  <span className="text-xl">✅</span>
                  <p className="text-green-700 font-medium">{success}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
