import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import FAQ from "@/components/sections/FAQ";
import HowItWorks from "@/components/sections/HowItWorks";
import ClientFeedback from "@/components/sections/ClientFeedback";
import GetInTouch from "@/components/sections/GetInTouch";


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <FAQ />
      <ClientFeedback />
      <GetInTouch />
      
    </>
  );
}
