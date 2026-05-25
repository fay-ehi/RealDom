import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import TrustSection from "@/components/sections/TrustSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PropertyShowcase from "@/components/sections/PropertyShowcase";
import LandlordSection from "@/components/sections/LandlordSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TrustSection />
      <FeaturesSection />
      <PropertyShowcase />
      <LandlordSection />
      <WaitlistSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
