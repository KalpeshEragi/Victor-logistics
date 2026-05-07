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

  {
  id: "prefab-square-office-container",
  name: "Square Steel Portable Office Container",
  price: 199000,
  priceUnit: "Unit",
  material: "Steel",
  builtType: "Prefab",
  usage: "Office",
  feature: "Customizable as per Requirement",
  shape: "Square",
  size: "Custom",
  color: "White",
  origin: "Made in India",
  description:
    "Prefabricated portable office container made with durable steel structure, suitable for modular office setups and temporary workspace solutions.",
  deliveryTime: "7-10 days",
  image: "/images/cabins/square-office-container.png",
},

{
  id: "prefab-project-site-office-cabin",
  name: "Portable Container Office - Project Site Office Cabin",
  price: 275000,
  priceUnit: "Unit",
  material: "Steel",
  builtType: "Prefab",
  usage: "Office",
  feature: "Durable & Mobile",
  shape: "Rectangular",
  size: "20x10x8.5 ft",
  color: "Gray",
  origin: "Ahmedabad, India",
  description:
    "Portable container office cabin designed for project sites where durability and mobility are essential. Built using a strong container-based steel structure for safe and flexible office usage.",
  deliveryTime: "7-10 days",
  image: "/images/cabins/project-site-office-cabin.png",
},

{
  id: "prefab-security-cabin-4x4x8-5",
  name: "Security Cabin",
  price: 48000,
  priceUnit: "Unit",
  material: "MS Steel",
  builtType: "Prefab",
  usage: "Security",
  feature: "Portable & Weather Resistant",
  shape: "Rectangular",
  size: "4x4x8.5 ft",
  color: "Color Coated",
  origin: "Made in India",
  description:
    "Portable security cabin made from durable MS steel, suitable for industrial and commercial security applications. Designed for all-weather usage and easy transportation from one place to another.",
  deliveryTime: "5-7 days",
  image: "/images/cabins/security-cabin-4x4x8-5.png",
},

{
  id: "prefab-bunk-bed-cabin-40x10x8-5",
  name: "Bunk Bed Accommodation Cabin",
  price: 530000,
  priceUnit: "Unit",
  material: "Steel",
  builtType: "Prefab",
  usage: "Accommodation",
  feature: "Custom Amenities & Modular Design",
  shape: "Rectangular",
  size: "40x10x8.5 ft",
  color: "White",
  origin: "Made in India",
  description:
    "Prefabricated bunk bed accommodation cabin designed for workforce and site accommodation needs. Built with durable steel structure and customizable amenities for comfortable long-term usage.",
  deliveryTime: "10-15 days",
  image: "/images/cabins/bunk-bed-cabin-40x10x8-5.png",
},
{
  id: "prefab-project-office-cabin-20x10x8-5",
  name: "Portable Project Office Cabin 20x10x8.5",
  price: 255000,
  priceUnit: "Unit",
  material: "MS Frame",
  builtType: "Prefab",
  usage: "Office",
  feature: "Durable & Easy Relocation",
  shape: "Rectangular",
  size: "20x10x8.5 ft",
  color: "White",
  origin: "Made in India",
  description:
    "Prefabricated portable office cabin designed for project offices, conference cabins, manager cabins, sales offices, and site office applications. Built with strong MS frame and GI sheet panels for durability, easy installation, and relocation.",
  deliveryTime: "7-10 days",
  image: "/images/cabins/project-office-cabin-20x10x8-5.png",
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
  {
  id: "fabricated-portable-canteen-container-20x8x8-5",
  name: "Portable Canteen Container 20x8x8.5",
  price: 210000,
  priceUnit: "Unit",
  material: "Mild Steel",
  builtType: "Fabricated",
  usage: "Canteen",
  feature: "Attached Toilet, AC Provision & Pantry Setup",
  shape: "Rectangular",
  size: "20x8x8.5 ft",
  color: "White",
  origin: "Made in India",
  description:
    "Fabricated portable canteen container designed for hygienic food preparation and serving at construction sites, factories, offices, schools, hospitals, and remote locations. Built with durable MS structure, insulation, ventilation, electrical fittings, and customizable interior setup for efficient daily operations.",
  deliveryTime: "10-15 days",
  image: "/images/cabins/portable-canteen-container-20x8x8-5.png",
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