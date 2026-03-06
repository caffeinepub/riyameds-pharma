import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";
import { testimonials } from "../data/products";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={16}
          className={
            s <= rating
              ? "fill-amber-400 text-amber-400"
              : "text-muted-foreground/20"
          }
        />
      ))}
    </div>
  );
}

const avatarColors = [
  "from-primary to-primary/60",
  "from-secondary to-secondary/60",
  "from-primary/70 to-secondary",
  "from-secondary/80 to-primary/70",
];

export default function TestimonialsSection() {
  return (
    <section
      className="section-padding"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.96 0.015 145) 0%, oklch(0.98 0.005 145) 100%)",
      }}
      data-ocid="testimonials.section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Real Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Customers <span className="text-gradient-green">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Real experiences from real people whose lives have been improved by
            RiyaMeds products.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-border/60 shadow-sm p-6 card-hover flex flex-col"
              data-ocid={`testimonials.item.${i + 1}`}
            >
              {/* Quote icon */}
              <Quote size={28} className="text-primary/25 mb-4 flex-shrink-0" />

              {/* Text */}
              <p className="text-foreground/75 text-sm leading-relaxed flex-1 italic mb-5">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {t.name}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {t.location}
                  </div>
                </div>
                <div className="ml-auto">
                  <StarRating rating={t.rating} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom band */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-12"
        >
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "50,000+", label: "Satisfied Customers" },
            { value: "100+", label: "Partner Clinics" },
            { value: "4", label: "Expert Doctors" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display font-bold text-3xl text-foreground">
                {value}
              </div>
              <div className="text-muted-foreground text-sm">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
