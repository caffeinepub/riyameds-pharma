import {
  Award,
  CheckCircle2,
  FlaskConical,
  Microscope,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: Shield,
    title: "High Quality Formulations",
    description:
      "Every product is manufactured to strict pharmaceutical quality standards with GMP-certified processes.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Doctor-Trusted Combinations",
    description:
      "Our therapeutic combinations are endorsed by healthcare professionals for proven clinical efficacy.",
    color: "secondary",
  },
  {
    icon: Microscope,
    title: "Specialized Focus Areas",
    description:
      "Deep expertise in musculoskeletal pain management and dermatology allows us to deliver targeted solutions.",
    color: "primary",
  },
  {
    icon: FlaskConical,
    title: "Scientifically Designed",
    description:
      "Formulations developed using modern pharmaceutical science principles for maximum therapeutic benefit.",
    color: "secondary",
  },
  {
    icon: Award,
    title: "Reliable Manufacturing",
    description:
      "We partner with trusted manufacturers who maintain consistent quality and regulatory compliance.",
    color: "primary",
  },
  {
    icon: TrendingUp,
    title: "Growing Innovative Portfolio",
    description:
      "Continuously expanding our product range to address unmet therapeutic needs across India.",
    color: "secondary",
  },
];

const stats = [
  { value: "9+", label: "Products" },
  { value: "3", label: "Therapeutic Areas" },
  { value: "GMP", label: "Manufacturing Standard" },
  { value: "Pan India", label: "Reach" },
];

export default function WhyChooseSection() {
  return (
    <section
      id="whyus"
      className="section-padding"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.18 0.12 250) 0%, oklch(0.24 0.13 240) 50%, oklch(0.20 0.11 250) 100%)",
      }}
      data-ocid="whyus.section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-teal-300 font-semibold text-sm tracking-widest uppercase mb-3 bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.75 0.18 184), oklch(0.85 0.12 220))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Riyameds Pharma
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            We combine scientific rigor with a genuine commitment to patient
            outcomes, building a pharmaceutical company you can trust.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {reasons.map(({ icon: Icon, title, description, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group"
              style={{ background: "oklch(1 0 0 / 0.06)" }}
              data-ocid={`whyus.item.${i + 1}`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  color === "primary" ? "bg-primary/20" : "bg-secondary/20"
                }`}
              >
                <Icon
                  size={22}
                  className={
                    color === "primary" ? "text-blue-300" : "text-teal-300"
                  }
                />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">
                {title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/15"
          style={{ background: "oklch(1 0 0 / 0.08)" }}
        >
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className="px-6 py-8 text-center"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid oklch(1 0 0 / 0.1)"
                    : "none",
              }}
            >
              <div className="font-display font-bold text-3xl text-white mb-1">
                {value}
              </div>
              <div className="text-white/50 text-sm font-medium">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Commitment banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 rounded-2xl p-6 border border-teal-400/20 flex flex-col sm:flex-row items-center gap-5"
          style={{ background: "oklch(0.52 0.16 184 / 0.12)" }}
        >
          <CheckCircle2 size={32} className="text-teal-300 flex-shrink-0" />
          <div>
            <div className="font-display font-bold text-white text-lg">
              Our Commitment to Excellence
            </div>
            <p className="text-white/55 text-sm mt-1">
              Every product we make carries our promise of quality, safety and
              efficacy. No shortcuts, no compromises — just genuine
              pharmaceutical solutions that healthcare professionals and
              patients can trust.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
