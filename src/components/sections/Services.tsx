import ServiceCard from "@/components/ui/ServiceCard";

export default function Services() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Our Services
        </h2>

        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Comprehensive logistics, container, and infrastructure solutions
          designed to support your business operations.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceCard
            icon="/images/sea-freight.png"
            title="Sea Freight"
            description="End-to-end shipping solutions with reliable NVOCC operations for global trade."
          />

          <ServiceCard
            icon="/icons/customs.png"
            title="Custom Clearance"
            description="Complete customs documentation and clearance support for smooth import and export."
          />

          <ServiceCard
            icon="/icons/container.png"
            title="Container Trading & One-Way Leasing"
            description="Flexible container buying, selling, and leasing solutions to reduce logistics costs."
          />

          <ServiceCard
            icon="/icons/prefab.png"
            title="Prefab Cabins"
            description="Ready-to-install modular prefab cabins for offices, sites, yards, and industrial use."
          />

          <ServiceCard
            icon="/icons/fabricated.png"
            title="Fabricated Cabins"
            description="Custom-fabricated cabins designed and built to meet specific operational needs."
          />
        </div>
      </div>
    </section>
  );
}
