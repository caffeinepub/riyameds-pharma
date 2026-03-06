import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import DoctorsSection from "./components/DoctorsSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductsSection from "./components/ProductsSection";
import QualitySection from "./components/QualitySection";
import TherapeuticSection from "./components/TherapeuticSection";
import VisionMissionSection from "./components/VisionMissionSection";
import WhatsAppButton from "./components/WhatsAppButton";
import WhyChooseSection from "./components/WhyChooseSection";

export default function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TherapeuticSection />
        <ProductsSection />
        <WhyChooseSection />
        <QualitySection />
        <VisionMissionSection />
        <DoctorsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="918263851791" />
    </>
  );
}
