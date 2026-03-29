import { notFound } from "next/navigation";
import { cabins } from "@/data/cabins";
import CabinDetail from "@/components/cabins/CabinDetail";

export function generateStaticParams() {
  return cabins
    .filter((c) => c.builtType === "Fabricated")
    .map((c) => ({ id: c.id }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function FabricatedCabinDetailPage({ params }: PageProps) {
  const { id } = await params;
  const cabin = cabins.find(
    (c) => c.id === id && c.builtType === "Fabricated"
  );

  if (!cabin) notFound();

  return <CabinDetail cabin={cabin} />;
}