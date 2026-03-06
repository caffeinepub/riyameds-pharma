import { Button } from "@/components/ui/button";
import { ArrowDown, Award, ShieldCheck, Users } from "lucide-react";
import { Suspense, lazy } from "react";

const FloatingMedicines = lazy(() => import("./FloatingMedicines"));

const trustBadges = [
  { icon: ShieldCheck, text: "Clinically Tested" },
  { icon: Award, text: "Dermatologist Approved" },
  { icon: Users, text: "50,000+ Customers" },
];

function handleScroll(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-banner.dim_1200x500.jpg"
          alt="RiyaMeds background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 navy-gradient opacity-85" />
        {/* Decorative mesh */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, oklch(0.55 0.18 145 / 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, oklch(0.72 0.2 145 / 0.1) 0%, transparent 40%)`,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left: Text content */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Eyebrow tag */}
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-green-300 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                New in India's Healthcare Market
              </div>

              {/* Main headline */}
              <div className="space-y-2">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                  Genuine Care,
                  <br />
                  <span
                    className="inline-block"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.72 0.2 145), oklch(0.85 0.15 145))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Trusted Science.
                  </span>
                </h1>
              </div>

              {/* Subheadline */}
              <p className="text-lg text-white/80 leading-relaxed max-w-lg font-body">
                RiyaMeds Pharma Private Limited combines cutting-edge
                pharmaceutical research with natural ingredients to deliver
                products that healthcare professionals trust and patients love.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => handleScroll("#products")}
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 text-base shadow-lg shadow-primary/30 transition-all duration-200 hover:scale-105"
                  data-ocid="hero.primary_button"
                >
                  Explore Products
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleScroll("#contact")}
                  className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 font-bold px-8 py-4 text-base backdrop-blur-sm transition-all duration-200"
                  data-ocid="hero.secondary_button"
                >
                  Contact Us
                </Button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 pt-4">
                {trustBadges.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 text-white/70 text-sm"
                  >
                    <Icon size={16} className="text-green-400 flex-shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 3D floating medicines */}
            <div className="hidden lg:flex items-center justify-center animate-fade-in-up delay-200">
              <div className="w-full relative">
                {/* Glow backdrop */}
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, oklch(0.55 0.18 145 / 0.15) 0%, transparent 70%)",
                  }}
                />
                <Suspense
                  fallback={
                    <div className="h-[420px] flex items-center justify-center text-white/40 text-sm">
                      Loading 3D visualization…
                    </div>
                  }
                >
                  <FloatingMedicines />
                </Suspense>
                {/* Caption */}
                <p className="text-center text-white/50 text-xs mt-2 tracking-widest uppercase">
                  Our Flagship Products — Visualized
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <button
          type="button"
          onClick={() => handleScroll("#products")}
          className="text-white/50 hover:text-white/80 transition-colors animate-float"
          aria-label="Scroll down"
        >
          <ArrowDown size={28} />
        </button>
      </div>
    </section>
  );
}
