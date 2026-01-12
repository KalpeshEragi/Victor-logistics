import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cabins } from "@/data/cabins";

export function generateStaticParams() {
    return cabins.map((cabin) => ({
        id: cabin.id,
    }));
}

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function CabinDetailPage({ params }: PageProps) {
    const { id } = await params;
    const cabin = cabins.find((c) => c.id === id);

    if (!cabin) {
        notFound();
    }

    // Get related cabins
    const relatedCabins = cabins
        .filter((c) => c.id !== cabin.id)
        .slice(0, 3);

    return (
        <main className="bg-white">
            {/* Breadcrumb */}
            <div className="bg-[#f8faf8] border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <nav className="flex items-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-green-600">Home</Link>
                        <span>/</span>
                        <Link href="/services/prefab-cabins" className="hover:text-green-600">Prefab Cabins</Link>
                        <span>/</span>
                        <span className="text-gray-800">{cabin.name}</span>
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
                                src={cabin.image}
                                alt={cabin.name}
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
                                {cabin.usage}
                            </span>

                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                                {cabin.name}
                            </h1>

                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-3xl font-bold text-green-600">
                                    ₹{cabin.price.toLocaleString("en-IN")}
                                </span>
                                <span className="text-gray-500">/ {cabin.priceUnit}</span>
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {cabin.description}
                            </p>

                            {/* Specs Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-[#f8faf8] rounded-xl p-4">
                                    <span className="text-xs text-gray-500 uppercase tracking-wide">Size</span>
                                    <p className="font-semibold text-gray-800 mt-1">{cabin.size}</p>
                                </div>
                                <div className="bg-[#f8faf8] rounded-xl p-4">
                                    <span className="text-xs text-gray-500 uppercase tracking-wide">Material</span>
                                    <p className="font-semibold text-gray-800 mt-1">{cabin.material}</p>
                                </div>
                                <div className="bg-[#f8faf8] rounded-xl p-4">
                                    <span className="text-xs text-gray-500 uppercase tracking-wide">Built Type</span>
                                    <p className="font-semibold text-gray-800 mt-1">{cabin.builtType}</p>
                                </div>
                                <div className="bg-[#f8faf8] rounded-xl p-4">
                                    <span className="text-xs text-gray-500 uppercase tracking-wide">Feature</span>
                                    <p className="font-semibold text-gray-800 mt-1">{cabin.feature}</p>
                                </div>
                                <div className="bg-[#f8faf8] rounded-xl p-4">
                                    <span className="text-xs text-gray-500 uppercase tracking-wide">Color</span>
                                    <p className="font-semibold text-gray-800 mt-1">{cabin.color}</p>
                                </div>
                                <div className="bg-[#f8faf8] rounded-xl p-4">
                                    <span className="text-xs text-gray-500 uppercase tracking-wide">Delivery</span>
                                    <p className="font-semibold text-gray-800 mt-1">{cabin.deliveryTime}</p>
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
                                Minimum Order: 1 {cabin.priceUnit} | {cabin.origin}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            {relatedCabins.length > 0 && (
                <section className="bg-[#f8faf8]">
                    <div className="max-w-7xl mx-auto px-6 py-16">
                        <h2 className="text-2xl font-bold text-gray-800 mb-8">More Cabins</h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {relatedCabins.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/services/prefab-cabins/${item.id}`}
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
                                        <p className="text-xs text-gray-500 mt-1">{item.size} | {item.material}</p>
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
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Interested in This Cabin?</h2>
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
