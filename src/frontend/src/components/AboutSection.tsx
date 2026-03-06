import {
  Building2,
  CheckCircle2,
  FlaskConical,
  Heart,
  Microscope,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "9+", label: "Products", icon: FlaskConical },
  { value: "GMP", label: "Certified Manufacturing", icon: Building2 },
  { value: "2+", label: "Therapeutic Areas", icon: Microscope },
  { value: "Pan India", label: "Distribution", icon: TrendingUp },
];

const highlights = [
  "High-quality therapeutic formulations",
  "Musculoskeletal pain management specialists",
  "Advanced dermatology solutions",
  "Trusted manufacturing partners",
  "Strict pharmaceutical quality standards",
  "Patient-centered innovation",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding section-gradient-light medical-pattern"
      data-ocid="about.section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm tracking-widest uppercase mb-3 bg-secondary/10 px-4 py-1.5 rounded-full">
            About Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-gradient-blue">Riyameds Pharma</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story + Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <p className="text-foreground/80 leading-relaxed text-lg">
                <strong className="text-foreground">
                  Riyameds Pharma Private Limited
                </strong>{" "}
                is a rapidly growing Indian pharmaceutical company committed to
                delivering effective, safe and high-quality healthcare
                solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The company focuses primarily on musculoskeletal pain management
                and dermatology therapies. Our formulations are designed to
                provide fast relief, improved recovery and better patient
                comfort.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a strong focus on quality, innovation and patient care,
                Riyameds Pharma continues to expand its portfolio to address
                evolving healthcare needs. We work with trusted manufacturing
                partners and follow strict pharmaceutical quality standards to
                ensure consistent product excellence.
              </p>
            </div>

            {/* Highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={16}
                    className="text-secondary flex-shrink-0"
                  />
                  <span className="text-sm font-medium text-foreground/80">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Logo banner */}
            <div
              className="rounded-2xl p-6 flex items-center gap-5 border border-primary/10"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.18 0.12 250) 0%, oklch(0.26 0.13 230) 100%)",
              }}
            >
              <img
                src="/assets/uploads/image-1.png"
                alt="RiyaMeds Pharma"
                className="h-16 w-auto object-contain bg-white/10 rounded-xl p-2 flex-shrink-0"
              />
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">
                  Riyameds Pharma Private Limited
                </div>
                <div className="text-white/55 text-sm mt-1">
                  Registered Indian Pharmaceutical Company
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map(({ value, label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm border border-border/60 card-hover medical-glow"
                  data-ocid={`about.stat.card.${i + 1}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{
                      background:
                        i % 2 === 0
                          ? "oklch(0.45 0.21 250 / 0.1)"
                          : "oklch(0.52 0.16 184 / 0.1)",
                    }}
                  >
                    <Icon
                      size={22}
                      className={
                        i % 2 === 0 ? "text-primary" : "text-secondary"
                      }
                    />
                  </div>
                  <div className="font-display font-bold text-2xl text-foreground">
                    {value}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium mt-1 leading-tight">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Values grid */}
            <div className="bg-white rounded-2xl border border-border/60 shadow-sm p-6 space-y-4">
              <h3 className="font-display font-bold text-foreground text-lg flex items-center gap-2">
                <Heart size={18} className="text-primary" />
                Our Core Values
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Quality", color: "primary" },
                  { label: "Innovation", color: "secondary" },
                  { label: "Integrity", color: "primary" },
                  { label: "Patient Focus", color: "secondary" },
                ].map(({ label, color }) => (
                  <div
                    key={label}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold text-center border ${
                      color === "primary"
                        ? "bg-primary/8 border-primary/15 text-primary"
                        : "bg-secondary/8 border-secondary/15 text-secondary"
                    }`}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
