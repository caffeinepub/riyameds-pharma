import { Heart, Microscope, Target, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "6+", label: "Products", icon: Microscope },
  { value: "100+", label: "Partner Clinics", icon: Heart },
  { value: "50,000+", label: "Happy Customers", icon: TrendingUp },
];

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To provide accessible, effective, and genuine healthcare solutions that improve lives and empower healthcare professionals.",
  },
  {
    icon: TrendingUp,
    title: "Our Vision",
    desc: "To be India's most trusted pharmaceutical company, known for scientific integrity, genuine ingredients, and patient-first values.",
  },
  {
    icon: Heart,
    title: "Our Values",
    desc: "Transparency in every ingredient, quality in every product, compassion in every interaction. No shortcuts, no compromises.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.98 0.005 145) 0%, oklch(0.96 0.015 145) 100%)",
      }}
      data-ocid="about.section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
                About Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Science Meets{" "}
                <span className="text-gradient-green">Genuine Care</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                RiyaMeds Pharma Private Limited was founded with a singular
                vision: to deliver genuine, science-backed pharmaceutical
                products that truly make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We combine cutting-edge research with natural ingredients to
                create products that healthcare professionals trust and patients
                love. As a new entrant to India's pharmaceutical market, we
                bring fresh perspectives, rigorous quality standards, and an
                unwavering commitment to transparency.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="bg-white rounded-2xl p-5 text-center shadow-sm border border-border/60 green-glow"
                  data-ocid={`about.stat.card.${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div className="font-display font-bold text-2xl text-foreground">
                    {value}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium mt-1">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Mission/Vision/Values */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5"
          >
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-white rounded-2xl p-6 border border-border/60 shadow-sm flex gap-5 items-start card-hover"
                data-ocid={`about.pillar.card.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Logo/Brand */}
            <div className="mt-6 bg-secondary rounded-2xl p-6 flex items-center gap-5">
              <img
                src="/assets/uploads/image-1.png"
                alt="RiyaMeds Pharma"
                className="h-16 w-auto object-contain bg-white rounded-xl p-2"
              />
              <div>
                <div className="font-display font-bold text-white text-lg">
                  RiyaMeds Pharma Pvt. Ltd.
                </div>
                <div className="text-white/60 text-sm mt-1">
                  Registered under Indian Pharmaceutical Standards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
