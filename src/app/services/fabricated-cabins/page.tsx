import { cabins } from "@/data/cabins";
import CabinListing from "@/components/cabins/CabinListing";

export default function FabricatedCabinsPage() {
  const fabricatedCabins = cabins.filter((c) => c.builtType === "Fabricated");

  return (
    <CabinListing
      cabins={fabricatedCabins}
      typeLabel="Fabricated"
      heroDescription="Heavy-duty fabricated steel cabins engineered for long-term use on industrial sites, construction zones, and permanent installations."
      heroImage="/images/prefab-cabins.png"
    />
  );
}