"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import { branches } from "@/data/branches";
import "maplibre-gl/dist/maplibre-gl.css";

export default function NetworkMap({ activeIndex }: { activeIndex: number }) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any>(null);
  const markersRef = useRef<maplibregl.Marker[]>([]);

  useEffect(() => {
    if (mapRef.current) return;

    mapRef.current = new maplibregl.Map({
      container: mapContainer.current!,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`,
      center: [78.9629, 20.5937],
      zoom: 3.5
    });

    // Create markers
    branches.forEach((branch, index) => {
      const el = document.createElement("div");
      el.className = "marker";
      el.style.width = "14px";
      el.style.height = "14px";
      el.style.borderRadius = "50%";
      el.style.backgroundColor =
        index === activeIndex ? "#14532d" : "#22c55e";

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([branch.lng, branch.lat])
        .addTo(mapRef.current);

      markersRef.current.push(marker);
    });
  }, []);

  // Update active marker + fly
  useEffect(() => {
    markersRef.current.forEach((marker, index) => {
      const el = marker.getElement();
      el.style.backgroundColor =
        index === activeIndex ? "#14532d" : "#22c55e";
      el.style.transform =
        index === activeIndex ? "scale(1.3)" : "scale(1)";
    });

    mapRef.current?.flyTo({
      center: [
        branches[activeIndex].lng,
        branches[activeIndex].lat
      ],
      zoom: 5,
      speed: 0.8
    });
  }, [activeIndex]);

  return (
    <div
      ref={mapContainer}
      className="w-full h-full rounded-xl"
    />
  );
}
