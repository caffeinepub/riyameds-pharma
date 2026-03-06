import {
  Activity,
  ArrowRight,
  Droplets,
  Pill,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const therapeuticAreas = [
  {
    title: "Musculoskeletal Pain Management",
    subtitle: "Pain Relief & Recovery",
    description:
      "We develop formulations designed to reduce inflammation, relieve pain and support faster recovery for orthopedic and musculoskeletal conditions.",
    icon: Activity,
    features: [
      "Acute & Chronic Pain Relief",
      "Post-Operative Recovery",
      "Sports Injury Management",
      "Arthritic Conditions",
      "Orthopedic Support",
    ],
    products: ["Inflamora S", "Inflamora", "Voltacure", "Voltacure-S"],
    gradient: "from-primary/10 to-primary/5",
    accentColor: "primary",
    borderColor: "border-primary/20",
    image: "/assets/uploads/afb48733-e728-476e-a1ca-4a447058daa3-1.png",
  },
  {
    title: "Dermatology",
    subtitle: "Skin Health & Beauty",
    description:
      "Our dermatology range focuses on acne control, skin renewal and advanced skincare solutions designed for long-term skin health.",
    icon: Sparkles,
    features: [
      "Acne Control & Treatment",
      "Skin Renewal & Exfoliation",
      "Deep Hydration Therapy",
      "Body Acne Solutions",
      "Oil & Sebum Control",
    ],
    products: ["Benza Clean", "Dermaviska Cream", "Dermaviska Spray"],
    gradient: "from-secondary/10 to-secondary/5",
    accentColor: "secondary",
    borderColor: "border-secondary/20",
    image: "/assets/uploads/9aeb521f-8dda-46c6-a5ea-016dee4cf613-5.png",
  },
];

const icons: Record<string, typeof Pill> = {
  Pill,
  Shield,
  Droplets,
  Zap,
};
void icons;

export default function TherapeuticSection() {
  return (
    <section
      id="therapeutic"
      className="section-padding"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.975 0.012 220) 0%, oklch(0.97 0.018 230) 100%)",
      }}
      data-ocid="therapeutic.section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3 bg-primary/8 px-4 py-1.5 rounded-full">
            Therapeutic Areas
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Areas of <span className="text-gradient-blue">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Riyameds Pharma focuses on therapeutic areas with significant unmet
            needs, delivering targeted solutions that make a real difference.
          </p>
        </motion.div>

        {/* Therapeutic Area Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {therapeuticAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className={`bg-white rounded-3xl border ${area.borderColor} shadow-sm overflow-hidden card-hover`}
                data-ocid={`therapeutic.item.${i + 1}`}
              >
                {/* Top color band */}
                <div
                  className="h-1.5 w-full"
                  style={{
                    background:
                      i === 0
                        ? "linear-gradient(90deg, oklch(0.45 0.21 250), oklch(0.52 0.16 184))"
                        : "linear-gradient(90deg, oklch(0.52 0.16 184), oklch(0.45 0.21 250))",
                  }}
                />

                <div className="p-8">
                  <div className="flex items-start gap-5 mb-6">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                        area.accentColor === "primary"
                          ? "bg-primary/10"
                          : "bg-secondary/10"
                      }`}
                    >
                      <Icon
                        size={26}
                        className={
                          area.accentColor === "primary"
                            ? "text-primary"
                            : "text-secondary"
                        }
                      />
                    </div>
                    {/* Title */}
                    <div>
                      <div
                        className={`text-xs font-semibold tracking-widest uppercase mb-1 ${
                          area.accentColor === "primary"
                            ? "text-primary"
                            : "text-secondary"
                        }`}
                      >
                        {area.subtitle}
                      </div>
                      <h3 className="font-display font-bold text-foreground text-xl">
                        {area.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                    {area.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2.5 mb-6">
                    {area.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <ArrowRight
                          size={14}
                          className={
                            area.accentColor === "primary"
                              ? "text-primary flex-shrink-0"
                              : "text-secondary flex-shrink-0"
                          }
                        />
                        <span className="text-sm text-foreground/75 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Product tags */}
                  <div className="flex flex-wrap gap-2">
                    {area.products.map((prod) => (
                      <span
                        key={prod}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${
                          area.accentColor === "primary"
                            ? "bg-primary/8 border-primary/15 text-primary"
                            : "bg-secondary/8 border-secondary/15 text-secondary"
                        }`}
                      >
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Gastro mention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-white rounded-2xl border border-border/60 shadow-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
              <Pill size={22} className="text-foreground/60" />
            </div>
            <div>
              <div className="font-display font-bold text-foreground text-base">
                Gastroenterology
              </div>
              <div className="text-muted-foreground text-sm">
                Pantaprix & Dompancid — Complete gastric management solutions
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            {["Pantaprix", "Dompancid"].map((p) => (
              <span
                key={p}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-muted border border-border text-muted-foreground"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
