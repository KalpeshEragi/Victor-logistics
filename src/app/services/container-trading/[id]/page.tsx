import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { containers } from "@/data/containers";

export function generateStaticParams() {
    return containers.map((container) => ({
        id: container.id,
    }));
}

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ContainerDetailPage({ params }: PageProps) {
    const { id } = await params;
    const container = containers.find((c) => c.id === id);

    if (!container) {
        notFound();
    }

    // Get related containers (same type, different product)
    const relatedContainers = containers
        .filter((c) => c.id !== container.id)
        .slice(0, 3);

    return (
        <main className="bg-white">
            {/* Breadcrumb */}
            <div className="bg-[#f8faf8] border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <nav className="flex items-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-green-600">Home</Link>
                        <span>/</span>
                        <Link href="/services/container-trading" className="hover:text-green-600">Containers</Link>
                        <span>/</span>
                        <span className="text-gray-800">{container.name}</span>
                    </nav>
                </div>
            </div>

            {/* Product Section */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Left: Image */}
                        <div className="relative h-80 md:h-[450px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden">
                            <Image
                                src={container.image}
                                alt={container.name}
                                fill
                                className="object-contain p-8"
                                priority
                            />
                            <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                In Stock
                            </div>
                        </div>

                        {/* Right: Details */}
                        <div>
                            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                {container.type}
                            </span>

                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                                {container.name}
                            </h1>

                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-3xl font-bold text-green-600">
                                    ₹{container.price.toLocaleString("en-IN")}
                                </span>
                                <span className="text-gray-500">/ {container.priceUnit}</span>
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {container.description}
                            </p>

                            {/* Specs Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-[#f8faf8] rounded-xl p-4">
                                    <span className="text-xs text-gray-500 uppercase tracking-wide">Length</span>
                                    <p className="font-semibold text-gray-800 mt-1">{container.length}</p>
                                </div>
                                <div className="bg-[#f8faf8] rounded-xl p-4">
                                    <span className="text-xs text-gray-500 uppercase tracking-wide">Size</span>
                                    <p className="font-semibold text-gray-800 mt-1">{container.size}</p>
                                </div>
                                <div className="bg-[#f8faf8] rounded-xl p-4">
                                    <span className="text-xs text-gray-500 uppercase tracking-wide">Material</span>
                                    <p className="font-semibold text-gray-800 mt-1">{container.material}</p>
                                </div>
                                <div className="bg-[#f8faf8] rounded-xl p-4">
                                    <span className="text-xs text-gray-500 uppercase tracking-wide">Capacity</span>
                                    <p className="font-semibold text-gray-800 mt-1">{container.capacity}</p>
                                </div>
                                <div className="bg-[#f8faf8] rounded-xl p-4">
                                    <span className="text-xs text-gray-500 uppercase tracking-wide">Color</span>
                                    <p className="font-semibold text-gray-800 mt-1">{container.color}</p>
                                </div>
                                <div className="bg-[#f8faf8] rounded-xl p-4">
                                    <span className="text-xs text-gray-500 uppercase tracking-wide">Delivery</span>
                                    <p className="font-semibold text-gray-800 mt-1">{container.deliveryTime}</p>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="flex-1 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-center hover:bg-green-700 transition"
                                >
                                    Get Best Quote
                                </Link>
                                <a
                                    href="tel:+918885087666"
                                    className="flex-1 border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold text-center hover:bg-green-50 transition"
                                >
                                    📞 Call Now
                                </a>
                            </div>

                            <p className="mt-4 text-sm text-gray-500 text-center">
                                Minimum Order: 1 {container.priceUnit} | {container.origin}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            {relatedContainers.length > 0 && (
                <section className="bg-[#f8faf8]">
                    <div className="max-w-7xl mx-auto px-6 py-16">
                        <h2 className="text-2xl font-bold text-gray-800 mb-8">More Containers</h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {relatedContainers.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/services/container-trading/${item.id}`}
                                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                                >
                                    <div className="relative h-40 bg-gray-50">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-contain p-4 group-hover:scale-105 transition-transform"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                                        <p className="text-green-600 font-bold">₹{item.price.toLocaleString("en-IN")}</p>
                                        <p className="text-xs text-gray-500 mt-1">{item.length} | {item.type}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Banner */}
            <section className="bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-6 py-14 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Interested in This Container?</h2>
                    <p className="text-gray-600 mb-6">Get the best price and fast delivery for your business needs.</p>
                    <Link
                        href="/contact"
                        className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition"
                    >
                        Request Quote
                    </Link>
                </div>
            </section>
        </main>
    );
}
