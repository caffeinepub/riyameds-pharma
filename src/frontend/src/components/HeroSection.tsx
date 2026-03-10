import { Button } from "@/components/ui/button";
import {
  Activity,
  Award,
  ChevronDown,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

function handleScroll(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function HeroProductImage({ src, name }: { src: string; name: string }) {
  const [error, setError] = useState(false);
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  if (error) {
    return (
      <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white/15 border border-white/20">
        <span className="text-white font-bold text-sm tracking-wide">
          {initials}
        </span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={name}
      className="w-16 h-16 object-contain"
      onError={() => setError(true)}
    />
  );
}

const trustBadges = [
  { icon: ShieldCheck, text: "GMP Certified Manufacturing" },
  { icon: FlaskConical, text: "Scientifically Formulated" },
  { icon: Award, text: "Doctor Trusted" },
  { icon: Activity, text: "Clinically Tested" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Hero background */}
      <div className="absolute inset-0 z-0 hero-gradient" />

      {/* Medical dot pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, oklch(0.85 0.05 200) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glowing orbs */}
      <div
        className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "oklch(0.52 0.16 184)" }}
      />
      <div
        className="absolute bottom-20 left-10 w-[350px] h-[350px] rounded-full opacity-15 blur-3xl"
        style={{ background: "oklch(0.55 0.2 250)" }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[75vh]">
            {/* Left: Text content */}
            <div className="space-y-8">
              {/* Eyebrow badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2.5 border border-white/20 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-semibold tracking-wide"
              >
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse-dot" />
                Riyameds Pharma Private Limited
              </motion.div>

              {/* Main headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-3"
              >
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-bold text-white leading-[1.08] tracking-tight">
                  Advancing Healthcare
                  <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.75 0.18 184), oklch(0.85 0.12 220))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Through Trusted
                  </span>
                  <br />
                  <span className="text-white">Pharma Solutions</span>
                </h1>
              </motion.div>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-lg text-white/75 leading-relaxed max-w-lg font-body"
              >
                Riyameds Pharma Private Limited is dedicated to developing
                high-quality therapeutic solutions for pain management and
                dermatology.
              </motion.p>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-sm font-semibold tracking-widest uppercase text-teal-300/80"
              >
                Innovation in Care. Excellence in Relief.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => handleScroll("#products")}
                  className="bg-white text-primary hover:bg-white/95 font-bold px-8 py-4 text-base shadow-lg hover:scale-105 transition-all duration-200"
                  data-ocid="hero.primary_button"
                >
                  Explore Products
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleScroll("#contact")}
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-bold px-8 py-4 text-base backdrop-blur-sm transition-all duration-200"
                  data-ocid="hero.secondary_button"
                >
                  Contact Us
                </Button>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
              >
                {trustBadges.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 text-white/65 text-xs font-medium"
                  >
                    <Icon size={14} className="text-teal-300 flex-shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Product showcase */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-lg">
                {/* Main product showcase grid */}
                <div
                  className="relative rounded-3xl p-8 backdrop-blur-md border border-white/15"
                  style={{ background: "oklch(1 0 0 / 0.07)" }}
                >
                  <div className="text-center mb-6">
                    <p className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase">
                      Product Portfolio
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      {
                        src: "/assets/uploads/afb48733-e728-476e-a1ca-4a447058daa3-1.png",
                        name: "Inflamora S",
                      },
                      {
                        src: "/assets/uploads/dc6cc1b5-d17c-4e5a-80ee-3516fad08197-7.png",
                        name: "Voltacure-S",
                      },
                      {
                        src: "/assets/uploads/9aeb521f-8dda-46c6-a5ea-016dee4cf613-5.png",
                        name: "Benza Clean",
                      },
                      {
                        src: "/assets/uploads/21e41145-906a-48da-a278-271609159934-6.png",
                        name: "Voltacure",
                      },
                      {
                        src: "/assets/uploads/aa3f881f-88f2-42fb-95ff-d7cdc6533647-9.png",
                        name: "Dermaviska",
                      },
                      {
                        src: "/assets/uploads/75e1d5fc-133d-4dac-aab4-e3c0d4f1218e-4.png",
                        name: "Derma Spray",
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                        className="rounded-2xl p-3 flex flex-col items-center gap-2 border border-white/10 hover:border-white/25 transition-all duration-300 hover:scale-105 cursor-pointer"
                        style={{ background: "oklch(1 0 0 / 0.08)" }}
                      >
                        <HeroProductImage src={item.src} name={item.name} />
                        <span className="text-white/60 text-[10px] font-semibold text-center leading-tight">
                          {item.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-white/40 text-xs">
                      9 Premium Pharmaceutical Products
                    </p>
                  </div>
                </div>

                {/* Floating stat cards */}
                <div
                  className="absolute -top-4 -left-6 rounded-2xl px-4 py-3 border border-white/15 backdrop-blur-md"
                  style={{ background: "oklch(1 0 0 / 0.12)" }}
                >
                  <div className="text-white font-bold text-lg font-display">
                    9+
                  </div>
                  <div className="text-white/55 text-xs">Products</div>
                </div>
                <div
                  className="absolute -bottom-4 -right-6 rounded-2xl px-4 py-3 border border-white/15 backdrop-blur-md"
                  style={{ background: "oklch(1 0 0 / 0.12)" }}
                >
                  <div className="text-teal-300 font-bold text-lg font-display">
                    GMP
                  </div>
                  <div className="text-white/55 text-xs">Certified</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <button
          type="button"
          onClick={() => handleScroll("#about")}
          className="text-white/40 hover:text-white/70 transition-colors animate-float"
          aria-label="Scroll down"
        >
          <ChevronDown size={30} />
        </button>
      </div>
    </section>
  );
}
