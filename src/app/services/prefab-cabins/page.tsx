import { cabins } from "@/data/cabins";
import CabinListing from "@/components/cabins/CabinListing";

export default function PrefabCabinsPage() {
  const prefabCabins = cabins.filter((c) => c.builtType === "Prefab");

  return (
    <CabinListing
      cabins={prefabCabins}
      typeLabel="Prefab"
      heroDescription="High-quality portable office cabins, security cabins, and prefab structures. Ready to move, easy to install, built to last."
      heroImage="/images/prefab-cabins.png"
    />
  );
}