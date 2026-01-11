"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { branches } from "@/data/branches";
import { networkCoverage } from "@/data/networkCoverage";

type LocationType = "branch" | "network";

interface SelectedLocation {
  type: LocationType;
  city: string;
  country?: string;
  address?: string;
  phone?: string;
  email?: string;
  lat: number;
  lng: number;
}

export default function NetworkPage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<SelectedLocation | null>(null);
  const [activeTab, setActiveTab] = useState<"branches" | "network">("branches");

  // Fly to location on map
  const flyToLocation = (lat: number, lng: number) => {
    if (map.current) {
      map.current.flyTo({
        center: [lng, lat],
        zoom: 10,
        duration: 1500,
        essential: true
      });
    }
  };

  // Handle card click
  const handleBranchClick = (branch: typeof branches[0]) => {
    setSelectedLocation({
      type: "branch",
      city: branch.city,
      address: branch.address,
      phone: branch.phone,
      email: branch.email,
      lat: branch.lat,
      lng: branch.lng,
    });
    flyToLocation(branch.lat, branch.lng);
  };

  const handleNetworkClick = (location: typeof networkCoverage[0]) => {
    setSelectedLocation({
      type: "network",
      city: location.city,
      country: location.country,
      lat: location.lat,
      lng: location.lng,
    });
    flyToLocation(location.lat, location.lng);
  };

  // Reset view
  const resetView = () => {
    setSelectedLocation(null);
    if (map.current) {
      map.current.flyTo({
        center: [78.9629, 20.5937],
        zoom: 3.5,
        duration: 1000
      });
    }
  };

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`,
      center: [78.9629, 20.5937],
      zoom: 3.5,
    });

    map.current.addControl(new maplibregl.NavigationControl(), "top-right");

    // Add Branch Markers (Green pins)
    branches.forEach((branch) => {
      const el = document.createElement("div");
      el.className = "branch-marker";
      el.style.cssText = `
        width: 32px; height: 40px; cursor: pointer;
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2316a34a"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>');
        background-size: contain; background-repeat: no-repeat;
        transition: transform 0.2s ease;
      `;
      el.onmouseenter = () => el.style.transform = "scale(1.2)";
      el.onmouseleave = () => el.style.transform = "scale(1)";

      new maplibregl.Marker({ element: el })
        .setLngLat([branch.lng, branch.lat])
        .addTo(map.current!);

      el.addEventListener("click", () => handleBranchClick(branch));
    });

    // Add Network Markers (Blue circles)
    networkCoverage.forEach((location) => {
      const el = document.createElement("div");
      el.className = "network-marker";
      el.style.cssText = `
        width: 20px; height: 20px; cursor: pointer;
        background: #2563eb; border-radius: 50%;
        border: 3px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        transition: transform 0.2s ease;
      `;
      el.onmouseenter = () => el.style.transform = "scale(1.3)";
      el.onmouseleave = () => el.style.transform = "scale(1)";

      new maplibregl.Marker({ element: el })
        .setLngLat([location.lng, location.lat])
        .addTo(map.current!);

      el.addEventListener("click", () => handleNetworkClick(location));
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#eef7ec] to-[#d6efd6]">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold uppercase tracking-wide rounded-full mb-4">
              Our Network
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              Global <span className="text-green-700">Presence</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700 font-medium max-w-2xl mx-auto">
              Connecting continents, delivering trust — your cargo, our commitment.
            </p>
            <p className="mt-2 text-gray-500 text-sm">
              Click any location card to explore on the map
            </p>
          </div>
        </div>
      </section>

      {/* MAP + SIDEBAR */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* LEFT: Map */}
            <div className="flex-1 relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <div ref={mapContainer} className="w-full h-[500px] lg:h-[560px]" />
              </div>

              {/* Selected Location Info */}
              {selectedLocation && (
                <div className="absolute bottom-4 left-4 right-4 lg:left-4 lg:right-auto lg:max-w-sm bg-white rounded-xl shadow-xl p-5 border border-gray-100 animate-slide-up">
                  <button
                    onClick={resetView}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-lg"
                  >
                    ✕
                  </button>
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-3 h-3 rounded-full animate-pulse ${selectedLocation.type === "branch" ? "bg-green-600" : "bg-blue-600"
                      }`}></div>
                    <span className="text-xs uppercase tracking-wide text-gray-500 font-medium">
                      {selectedLocation.type === "branch" ? "Branch Office" : "Network Partner"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {selectedLocation.city}
                    {selectedLocation.country && (
                      <span className="text-gray-400 font-normal text-base">, {selectedLocation.country}</span>
                    )}
                  </h3>
                  {selectedLocation.address && (
                    <p className="text-sm text-gray-600 mt-2">{selectedLocation.address}</p>
                  )}
                  {selectedLocation.phone && (
                    <p className="text-sm text-gray-600 mt-1">📞 {selectedLocation.phone}</p>
                  )}
                  {selectedLocation.email && (
                    <p className="text-sm text-gray-600">✉️ {selectedLocation.email}</p>
                  )}
                  {selectedLocation.type === "branch" && (
                    <Link
                      href="/contact"
                      className="inline-block mt-4 bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition"
                    >
                      Contact This Office
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* RIGHT: Location Cards */}
            <div className="w-full lg:w-80 flex-shrink-0 order-1 lg:order-2">
              {/* Tabs */}
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setActiveTab("branches")}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition ${activeTab === "branches"
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  🟢 Branches ({branches.length})
                </button>
                <button
                  onClick={() => setActiveTab("network")}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition ${activeTab === "network"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  🔵 Network ({networkCoverage.length})
                </button>
              </div>

              {/* Scrollable Cards */}
              <div className="h-[500px] overflow-y-auto space-y-3 pr-2">
                {activeTab === "branches" ? (
                  branches.map((branch, i) => (
                    <div
                      key={i}
                      onClick={() => handleBranchClick(branch)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${selectedLocation?.city === branch.city
                        ? "bg-green-50 border-green-400 shadow-md scale-[1.02]"
                        : "bg-white border-gray-100 hover:border-green-200 hover:shadow-sm"
                        }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-3 h-3 rounded-full ${selectedLocation?.city === branch.city ? "bg-green-600 animate-pulse" : "bg-green-500"
                          }`}></div>
                        <span className="font-semibold text-gray-800">{branch.city}</span>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2">{branch.address}</p>
                    </div>
                  ))
                ) : (
                  networkCoverage.map((location, i) => (
                    <div
                      key={i}
                      onClick={() => handleNetworkClick(location)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${selectedLocation?.city === location.city
                        ? "bg-blue-50 border-blue-400 shadow-md scale-[1.02]"
                        : "bg-white border-gray-100 hover:border-blue-200 hover:shadow-sm"
                        }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${selectedLocation?.city === location.city ? "bg-blue-600 animate-pulse" : "bg-blue-500"
                          }`}></div>
                        <span className="font-semibold text-gray-800">{location.city}</span>
                        <span className="text-xs text-gray-400">{location.country}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8faf8] border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Need Logistics Support?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Get in touch with our nearest office or network partner
          </p>
          <Link
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}
