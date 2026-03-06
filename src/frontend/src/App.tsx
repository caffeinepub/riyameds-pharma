import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import DoctorsSection from "./components/DoctorsSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductsSection from "./components/ProductsSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <DoctorsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
