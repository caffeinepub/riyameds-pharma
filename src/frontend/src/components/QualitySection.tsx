import {
  Award,
  CheckCircle2,
  ClipboardCheck,
  FlaskConical,
  Microscope,
  Shield,
} from "lucide-react";
import { motion } from "motion/react";

const qualityPillars = [
  {
    icon: Shield,
    title: "GMP Certified Manufacturing",
    description:
      "Our manufacturing partners maintain Good Manufacturing Practice (GMP) certification ensuring consistent quality, purity, and potency in every batch.",
  },
  {
    icon: FlaskConical,
    title: "Scientific Formulation",
    description:
      "Products are developed using evidence-based pharmaceutical science with optimal combinations of active ingredients for maximum therapeutic effect.",
  },
  {
    icon: ClipboardCheck,
    title: "Rigorous Quality Control",
    description:
      "Every batch undergoes multi-point quality testing covering identity, purity, strength, and microbiological compliance before release.",
  },
  {
    icon: Microscope,
    title: "Research & Development",
    description:
      "Continuous investment in pharmaceutical R&D helps us improve existing formulations and develop new solutions for emerging healthcare needs.",
  },
];

const certifications = [
  "Good Manufacturing Practice (GMP)",
  "Drug and Cosmetics Act Compliant",
  "Schedule H / H1 Prescription Standards",
  "WHO Quality Guidelines",
  "Indian Pharmacopoeia (IP) Standards",
  "Quality Management System",
];

export default function QualitySection() {
  return (
    <section
      id="quality"
      className="section-padding section-gradient-blue-light medical-pattern"
      data-ocid="quality.section"
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
            Quality & Research
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Quality <span className="text-gradient-blue">Standards</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Quality is not just a standard — it's the foundation of everything
            we do at Riyameds Pharma.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Quality Pillars */}
          <div className="space-y-5">
            {qualityPillars.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-border/60 shadow-sm p-6 flex gap-5 items-start card-hover"
                data-ocid={`quality.item.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-base mb-2">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Certifications + visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Main quality card */}
            <div
              className="rounded-3xl p-8 text-white space-y-6"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.18 0.12 250) 0%, oklch(0.28 0.14 230) 50%, oklch(0.32 0.14 200) 100%)",
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Award size={28} className="text-teal-300" />
                <div className="font-display font-bold text-white text-xl">
                  Quality Commitments
                </div>
              </div>

              <p className="text-white/70 leading-relaxed">
                At Riyameds Pharma, every product embodies our unwavering
                commitment to pharmaceutical excellence. From raw material
                sourcing to final product release, we maintain the highest
                standards at every step.
              </p>

              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-teal-300 flex-shrink-0"
                    />
                    <span className="text-white/80 text-sm font-medium">
                      {cert}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Brand assurance */}
            <div className="bg-white rounded-2xl border border-secondary/20 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 size={22} className="text-secondary" />
                <span className="font-display font-bold text-foreground text-base">
                  Brand Assurance
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every Riyameds product is authentic, properly labeled, and
                dispensed through registered medical channels. We stand behind
                the quality and safety of every formulation that bears our name.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
