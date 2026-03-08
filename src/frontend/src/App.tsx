import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import AboutSection from "./components/AboutSection";
import AdminPage from "./components/AdminPage";
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

// ─── Root layout ─────────────────────────────────────────────────────────────

function RootLayout() {
  return (
    <>
      <Toaster />
      <Outlet />
    </>
  );
}

// ─── Main site page ───────────────────────────────────────────────────────────

function MainSite() {
  return (
    <>
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

// ─── Route tree ───────────────────────────────────────────────────────────────

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: MainSite,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminPage,
});

const routeTree = rootRoute.addChildren([indexRoute, adminRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return <RouterProvider router={router} />;
}
