import { Building2, Quote, Stethoscope } from "lucide-react";
import { motion } from "motion/react";
import { doctors, partnerClinics } from "../data/products";

const avatarGradients = [
  "from-blue-600 to-blue-400",
  "from-teal-600 to-teal-400",
  "from-indigo-600 to-blue-400",
  "from-cyan-600 to-teal-400",
];

export default function DoctorsSection() {
  return (
    <section
      id="partners"
      className="section-padding bg-background cross-pattern"
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
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3 bg-primary/8 px-4 py-1.5 rounded-full">
            Trusted By Experts
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Doctors &{" "}
            <span className="text-gradient-blue">Partner Network</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Leading medical professionals and premier healthcare institutions
            across India choose Riyameds for their patients.
          </p>
        </motion.div>

        {/* Collaborating Doctors */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Stethoscope size={20} className="text-primary" />
            <h3 className="font-display text-2xl font-bold text-foreground">
              Collaborating Doctors
            </h3>
          </div>
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
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-md`}
                >
                  {doc.initials}
                </div>

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
                <div className="mt-auto bg-muted/50 rounded-xl p-4 relative border border-border/40">
                  <Quote
                    size={14}
                    className="text-primary/30 absolute top-2 left-2"
                  />
                  <p className="text-foreground/65 text-xs leading-relaxed italic pl-3">
                    "{doc.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partner Clinics & Hospitals */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Building2 size={20} className="text-secondary" />
            <h3 className="font-display text-2xl font-bold text-foreground">
              Partner Clinics & Hospitals
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {partnerClinics.map((clinic, i) => (
              <motion.div
                key={clinic.id}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white rounded-2xl border border-border/60 shadow-sm p-5 card-hover text-center group"
                data-ocid={`clinics.item.${i + 1}`}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/15 transition-colors">
                  <Building2 size={18} className="text-primary" />
                </div>
                <h4 className="font-display font-bold text-foreground text-xs leading-tight mb-1">
                  {clinic.name}
                </h4>
                <p className="text-muted-foreground text-xs font-medium">
                  {clinic.city}
                </p>
                <p className="text-primary/60 text-[10px] font-semibold mt-1">
                  {clinic.type}
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
              "linear-gradient(135deg, oklch(0.18 0.12 250) 0%, oklch(0.28 0.14 230) 50%, oklch(0.32 0.14 200) 100%)",
          }}
        >
          <div className="p-10 md:p-14 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              Are you a Healthcare Professional?
            </h3>
            <p className="text-white/65 mb-8 max-w-lg mx-auto leading-relaxed">
              Join our growing network of doctors, clinics, and hospitals that
              trust Riyameds for their patients. Get access to medical samples
              and clinical documentation.
            </p>
            <button
              type="button"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-primary hover:bg-white/95 font-bold px-8 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
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
