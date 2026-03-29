export interface Cabin {
  id: string;
  name: string;
  price: number;
  priceUnit: string;
  material: string;
  builtType: "Prefab" | "Fabricated";
  usage: string;
  feature: string;
  shape: string;
  size: string;
  color: string;
  origin: string;
  description: string;
  deliveryTime: string;
  image: string;
}

export const cabins: Cabin[] = [
  // ======================
  // PREFAB CABINS
  // ======================
  {
    id: "prefab-office-40ft",
    name: "Portable Office Cabin 40ft",
    price: 350000,
    priceUnit: "Unit",
    material: "Mild Steel",
    builtType: "Prefab",
    usage: "Office",
    feature: "Durable & Portable",
    shape: "Rectangular",
    size: "40ft",
    color: "White",
    origin: "Made in India",
    description:
      "High-quality portable office cabin suitable for construction sites, industrial setups, and temporary office spaces.",
    deliveryTime: "7-10 days",
    image: "/images/cabins/office-40ft-ms.png",
  },
  {
    id: "prefab-office-40x10",
    name: "Office Cabin 40x10 ft",
    price: 0,
    priceUnit: "On Request",
    material: "Mild Steel",
    builtType: "Prefab",
    usage: "Office",
    feature: "Custom Size",
    shape: "Rectangular",
    size: "40x10 ft",
    color: "White",
    origin: "Made in India",
    description:
      "Custom-sized office cabin designed for larger workspace requirements with flexibility and durability.",
    deliveryTime: "7-10 days",
    image: "/images/cabins/office-40x10-ms.png",
  },
  {
    id: "prefab-toilet",
    name: "Portable Toilet Cabin",
    price: 155000,
    priceUnit: "Unit",
    material: "GI Sheet",
    builtType: "Prefab",
    usage: "Toilet",
    feature: "Portable & Easy Installation",
    shape: "Rectangular",
    size: "Standard",
    color: "White",
    origin: "Made in India",
    description:
      "Portable toilet cabin ideal for construction sites, events, and temporary sanitation needs.",
    deliveryTime: "10-15 days",
    image: "/images/cabins/toilet-cabin.png",
  },

  // ======================
  // FABRICATED CABINS
  // ======================
  {
    id: "fabricated-office-40ft",
    name: "Portable Office Cabin 40ft",
    price: 360000,
    priceUnit: "Unit",
    material: "Steel",
    builtType: "Fabricated",
    usage: "Office",
    feature: "Strong & Long Lasting",
    shape: "Rectangular",
    size: "40ft",
    color: "White",
    origin: "Made in India",
    description:
      "Fabricated office cabin built with strong steel structure, suitable for long-term industrial and office use.",
    deliveryTime: "10-15 days",
    image: "/images/cabins/office-40ft-ms.png",
  },
  {
    id: "fabricated-office-basic",
    name: "Office Cabin (No Wall Setup)",
    price: 185000,
    priceUnit: "Unit",
    material: "Steel",
    builtType: "Fabricated",
    usage: "Office",
    feature: "Basic Structure",
    shape: "Rectangular",
    size: "Standard",
    color: "White",
    origin: "Made in India",
    description:
      "Fabricated office cabin without wall setup, suitable for basic usage and customizable configurations.",
    deliveryTime: "7-10 days",
    image: "/images/cabins/office-40x10-ms.png",
  },
  {
    id: "fabricated-toilet-20x8",
    name: "20x8 Fabricated Toilet Cabin",
    price: 395000,
    priceUnit: "Unit",
    material: "Steel",
    builtType: "Fabricated",
    usage: "Toilet",
    feature: "Heavy Duty",
    shape: "Rectangular",
    size: "20x8 ft",
    color: "White",
    origin: "Made in India",
    description:
      "Heavy-duty fabricated toilet cabin designed for industrial and long-term usage.",
    deliveryTime: "10-15 days",
    image: "/images/cabins/toilet-cabin.png",
  },
];

// ─── Helpers ────────────────────────────────────────────────────────────────

export function getRouteBase(builtType: Cabin["builtType"]): string {
  return builtType === "Prefab"
    ? "/services/prefab-cabins"
    : "/services/fabricated-cabins";
}

export function formatPrice(cabin: Cabin): string {
  return cabin.price === 0
    ? "Price on Request"
    : `₹${cabin.price.toLocaleString("en-IN")}`;
}