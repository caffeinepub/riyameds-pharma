import { Quote } from "lucide-react";
import { motion } from "motion/react";
import { doctors, partnerClinics } from "../data/products";

const avatarColors = [
  "from-primary to-primary/70",
  "from-secondary to-secondary/70",
  "from-primary/80 to-secondary/80",
  "from-secondary/80 to-primary/60",
];

export default function DoctorsSection() {
  return (
    <section
      id="partners"
      className="section-padding bg-background"
      data-ocid="partners.section"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Trusted By Experts
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Doctors &{" "}
            <span className="text-gradient-green">Partner Network</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Leading medical professionals and premier healthcare institutions
            across India choose RiyaMeds for their patients.
          </p>
        </motion.div>

        {/* ── Collaborating Doctors ── */}
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            Collaborating Doctors
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc, i) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-border/60 shadow-sm p-6 card-hover flex flex-col text-center"
                data-ocid={`doctors.item.${i + 1}`}
              >
                {/* Avatar */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-md`}
                >
                  {doc.initials}
                </div>

                {/* Info */}
                <h4 className="font-display font-bold text-foreground text-base mb-0.5">
                  {doc.name}
                </h4>
                <p className="text-primary font-semibold text-xs mb-0.5">
                  {doc.specialization}
                </p>
                <p className="text-muted-foreground text-xs mb-4">
                  {doc.qualification}
                </p>

                {/* Quote */}
                <div className="mt-auto bg-accent/40 rounded-xl p-4 relative">
                  <Quote
                    size={14}
                    className="text-primary/40 absolute top-2 left-2"
                  />
                  <p className="text-foreground/70 text-xs leading-relaxed italic pl-4">
                    "{doc.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Partner Clinics & Hospitals ── */}
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            Partner Clinics & Hospitals
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {partnerClinics.map((clinic, i) => (
              <motion.div
                key={clinic.id}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-border/60 shadow-sm p-5 card-hover text-center group"
                data-ocid={`clinics.item.${i + 1}`}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {clinic.icon}
                </div>
                <h4 className="font-display font-bold text-foreground text-sm leading-tight mb-1">
                  {clinic.name}
                </h4>
                <p className="text-muted-foreground text-xs font-medium">
                  {clinic.city}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.07 258) 0%, oklch(0.32 0.1 210) 50%, oklch(0.22 0.07 258) 100%)",
          }}
        >
          <div className="p-10 md:p-14 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              Are you a Healthcare Professional?
            </h3>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Join our growing network of doctors, clinics, and hospitals that
              trust RiyaMeds for their patients. Get access to medical samples
              and clinical documentation.
            </p>
            <button
              type="button"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-primary/30"
              data-ocid="partners.cta.primary_button"
            >
              Become a Partner
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
