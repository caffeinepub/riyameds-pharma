import {
  CheckCircle2,
  Eye,
  Heart,
  Lightbulb,
  Shield,
  Target,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const missionPoints = [
  "Provide safe and effective pharmaceutical products",
  "Improve patient outcomes through innovative formulations",
  "Build long-term trust with healthcare professionals",
  "Expand access to advanced treatments in pain management and dermatology",
];

const coreValues = [
  {
    icon: Shield,
    title: "Quality",
    description:
      "We maintain strict quality standards across all formulations.",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously improve our products using modern pharmaceutical science.",
    color: "secondary",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We operate with transparency and ethical healthcare practices.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Patient Focus",
    description: "Our products are designed to improve comfort and recovery.",
    color: "secondary",
  },
];

export default function VisionMissionSection() {
  return (
    <section
      id="vision"
      className="section-padding section-gradient-light"
      data-ocid="vision.section"
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
            Vision & Mission
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-blue">Purpose & Direction</span>
          </h2>
        </motion.div>

        {/* Vision + Mission */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden"
          >
            <div
              className="p-8 text-white h-full"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.18 0.12 250) 0%, oklch(0.30 0.16 230) 100%)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                  <Eye size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">
                    Our
                  </div>
                  <h3 className="font-display font-bold text-white text-2xl">
                    Vision
                  </h3>
                </div>
              </div>
              <blockquote className="text-white/85 text-lg leading-relaxed font-medium border-l-4 border-teal-400/60 pl-5">
                "To become a trusted pharmaceutical brand recognized for
                delivering reliable and innovative healthcare solutions that
                improve patient quality of life."
              </blockquote>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl border border-border/60 shadow-sm p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target size={24} className="text-primary" />
              </div>
              <div>
                <div className="text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-0.5">
                  Our
                </div>
                <h3 className="font-display font-bold text-foreground text-2xl">
                  Mission
                </h3>
              </div>
            </div>
            <div className="space-y-4">
              {missionPoints.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={14} className="text-secondary" />
                  </div>
                  <p className="text-foreground/80 text-base leading-snug font-medium">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="font-display font-bold text-foreground text-2xl sm:text-3xl">
            Core Values
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreValues.map(({ icon: Icon, title, description, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-border/60 shadow-sm p-6 text-center card-hover"
              data-ocid={`vision.value.card.${i + 1}`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                }`}
              >
                <Icon
                  size={26}
                  className={
                    color === "primary" ? "text-primary" : "text-secondary"
                  }
                />
              </div>
              <h4 className="font-display font-bold text-foreground text-lg mb-2">
                {title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
