import Services from "@/components/sections/Services";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-20"> {/* Offset for sticky header */}
        <Services />
      </div>
      <Footer />
    </main>
  );
}
