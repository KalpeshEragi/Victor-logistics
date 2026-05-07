import ServiceCard from "@/components/ui/ServiceCard";
import Reveal from "@/components/ui/Reveal";

export default function Services() {
  return (
    <section id="services" className="relative bg-white scroll-mt-20 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-50/80 via-white to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
        <Reveal delay={0}>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-wide rounded-full mb-3">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Our Services
            </h2>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
              Comprehensive logistics, container, and infrastructure solutions
              designed to support your business operations.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Reveal delay={100} className="h-full">
            <ServiceCard
              icon="/images/sea-freight.png"
              title="Sea Freight"
              description="End-to-end shipping solutions with reliable NVOCC operations for global trade."
              href="/services/sea-freight"
            />
          </Reveal>

          <Reveal delay={200} className="h-full">
            <ServiceCard
              icon="/icons/customs.png"
              title="Custom Clearance"
              description="Complete customs documentation and clearance support for smooth import and export."
              href="/services/custom-clearance"
            />
          </Reveal>

          <Reveal delay={300} className="h-full">
            <ServiceCard
              icon="/icons/container.png"
              title="Container Trading & One-Way Leasing"
              description="Flexible container buying, selling, and leasing solutions to reduce logistics costs."
              href="/services/container-trading"
            />
          </Reveal>

          <Reveal delay={400} className="h-full">
            <ServiceCard
              icon="/icons/prefab.png"
              title="Prefab Cabins"
              description="Ready-to-install modular prefab cabins for offices, sites, yards, and industrial use."
              href="/services/prefab-cabins"
            />
          </Reveal>

          <Reveal delay={500} className="h-full">
            <ServiceCard
              icon="/icons/fabricated.png"
              title="Fabricated Cabins"
              description="Custom-fabricated cabins designed and built to meet specific operational needs."
              href="/services/fabricated-cabins"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
