export interface Container {
    id: string;
    name: string;
    price: number;
    priceUnit: string;
    length: string;
    material: string;
    capacity: string;
    type: string;
    color: string;
    origin: string;
    size: string;
    description: string;
    deliveryTime: string;
    image: string;
}

export const containers: Container[] = [
    {
        id: "used-refrigerated-40ft",
        name: "Used Refrigerated Container",
        price: 550000,
        priceUnit: "Piece",
        length: "40 feet",
        material: "Aluminium Alloy",
        capacity: "20 ton",
        type: "Reefer Container",
        color: "White",
        origin: "Made in India",
        size: "40x8x9.6 feet",
        description: "We have an eminent name for offering a vast array of Portable Refrigerated Container. Temperature controlled unit ideal for perishable goods.",
        deliveryTime: "4 days",
        image: "/images/containers/reefer-40ft.png"
    },
    {
        id: "used-shipping-40ft-hc",
        name: "40 Feet Used Shipping Container",
        price: 199000,
        priceUnit: "Piece",
        length: "40 feet",
        material: "Mild Steel",
        capacity: "20 ton",
        type: "Dry Container",
        color: "Blue",
        origin: "Made in India",
        size: "40x8x9.6 feet",
        description: "Our organization is well known in the market for providing a broad assortment of Freight Shipping Container. High cube variant with extra height.",
        deliveryTime: "2 days",
        image: "/images/containers/dry-40ft-hc.png"
    },
    {
        id: "cargo-shipping-40ft",
        name: "Cargo Shipping Container",
        price: 185000,
        priceUnit: "Piece",
        length: "40 feet",
        material: "Mild Steel",
        capacity: "20 ton",
        type: "Dry Container",
        color: "White",
        origin: "Made in India",
        size: "40x8x8.6 feet",
        description: "Standard 40 feet used shipping container in excellent condition. Perfect for cargo storage and transport.",
        deliveryTime: "2 days",
        image: "/images/containers/cargo-40ft.png"
    },
    {
        id: "used-cargo-20ft",
        name: "Used Cargo Container",
        price: 110000,
        priceUnit: "Piece",
        length: "20 feet",
        material: "Mild Steel",
        capacity: "20 ton",
        type: "Dry Container",
        color: "Blue",
        origin: "Made in India",
        size: "20x8x8.6 feet",
        description: "Used shipping container ideal for godown purpose. Compact size suitable for smaller storage needs.",
        deliveryTime: "2 days",
        image: "/images/containers/cargo-20ft.png"
    },
    {
        id: "used-portable-20ft",
        name: "Used Shipping Container",
        price: 95000,
        priceUnit: "Piece",
        length: "20 feet",
        material: "Mild Steel",
        capacity: "20 ton",
        type: "Dry Container",
        color: "Blue",
        origin: "Made in India",
        size: "20x8x8.6 feet",
        description: "Being the foremost company, we are offering an exclusive array of Used Portable Container. Budget-friendly option for storage.",
        deliveryTime: "2 days",
        image: "/images/containers/portable-20ft.png"
    }
];
