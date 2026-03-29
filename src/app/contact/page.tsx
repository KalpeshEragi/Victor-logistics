"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
};

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  consent: false,
};

const CONTACT_INFO = [
  {
    icon: "📞",
    label: "Call Us",
    content: (
      <div className="flex flex-col">
        <a href="tel:+918108834666" className="text-gray-800 font-semibold hover:text-green-600 transition-colors">
          +91 8108834666
        </a>
        <a href="tel:+918885087666" className="text-gray-800 font-semibold hover:text-green-600 transition-colors">
          +91 8885087666
        </a>
      </div>
    ),
  },
  {
    icon: "✉️",
    label: "Email Us",
    content: (
      <a
        href="mailto:cs.mum@victorexpressline.com"
        className="text-gray-800 font-semibold hover:text-green-600 transition-colors break-all"
      >
        cs.mum@victorexpressline.com
      </a>
    ),
  },
  {
    icon: "📍",
    label: "Visit Us",
    content: <p className="text-gray-800 font-semibold">Mumbai, India</p>,
  },
];

const SERVICES = [
  "Sea Freight",
  "Air Freight",
  "Customs Clearance",
  "Containers",
  "Prefabricated Cabins",
  "Fabricated Cabins",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    setForm((prev) => ({
      ...prev,
      [target.name]:
        target instanceof HTMLInputElement && target.type === "checkbox"
          ? target.checked
          : target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white">
      {/* ── Page Header ─────────────────────────────── */}
      <div className="bg-gradient-to-br from-[#eef7ec] to-[#d6efd6] border-b border-green-100">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold uppercase tracking-wide rounded-full mb-4">
            Contact Us
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Get in <span className="text-green-700">Touch</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Have a question or ready to get started? Our team will get back to
            you within 24 business hours.
          </p>
        </div>
      </div>

      {/* ── Main Content ────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#eef7ec] to-[#d6efd6]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* ── LEFT: Contact Info ─────────────────── */}
            <div className="lg:col-span-2 space-y-5">
              {CONTACT_INFO.map(({ icon, label, content }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{icon}</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">{label}</p>
                      {content}
                    </div>
                  </div>
                </div>
              ))}

              {/* Response time card */}
              <div className="bg-green-600 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">⚡</span>
                  <p className="font-semibold">Quick Response Guarantee</p>
                </div>
                <p className="text-green-100 text-sm leading-relaxed">
                  We respond to all enquiries within 24 business hours.
                  For urgent matters, call us directly.
                </p>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🕐</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Business Hours</p>
                    <p className="text-gray-800 font-semibold">Mon – Sat</p>
                    <p className="text-gray-600 text-sm">9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Contact Form ─────────────────── */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Send us an Enquiry
                </h2>

                <div className="grid md:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="border border-gray-200 p-3.5 rounded-xl w-full focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="border border-gray-200 p-3.5 rounded-xl w-full focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="border border-gray-200 p-3.5 rounded-xl w-full focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="border border-gray-200 p-3.5 rounded-xl w-full focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition bg-white text-gray-800"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    required
                    rows={5}
                    className="border border-gray-200 p-3.5 rounded-xl w-full focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition resize-none"
                  />
                </div>

                {/* Consent */}
                <label className="flex items-start gap-3 mt-5 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 accent-green-600 rounded flex-shrink-0"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to receive updates and communications from Victor &amp; Co.
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 w-full bg-green-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-green-200"
                >
                  {loading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <span className="text-lg">→</span>
                    </>
                  )}
                </button>

                {/* Success */}
                {status === "success" && (
                  <div className="mt-5 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                    <span className="text-xl flex-shrink-0">✅</span>
                    <p className="text-green-700 font-medium">
                      Thank you! We've received your enquiry and will get back to
                      you within 24 hours.
                    </p>
                  </div>
                )}

                {/* Error */}
                {status === "error" && (
                  <div className="mt-5 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                    <span className="text-xl flex-shrink-0">❌</span>
                    <p className="text-red-700 font-medium">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}