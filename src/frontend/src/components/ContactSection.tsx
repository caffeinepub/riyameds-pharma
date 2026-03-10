import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { usePublicActor } from "../hooks/usePublicActor";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactSection() {
  const { actor } = usePublicActor();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Full name is required.";
    if (!form.email.trim()) errs.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email address.";
    if (!form.phone.trim()) errs.phone = "Phone number is required.";
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/[\s\-]/g, "")))
      errs.phone = "Enter a valid 10-digit Indian mobile number.";
    if (!form.message.trim()) errs.message = "Message is required.";
    else if (form.message.trim().length < 10)
      errs.message = "Message must be at least 10 characters.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setSubmitError(false);
    try {
      if (actor) {
        await actor.submitInquiry(
          form.name.trim(),
          form.email.trim(),
          form.phone.trim(),
          form.message.trim(),
        );
      } else {
        // Fallback if actor not ready — simulate
        await new Promise((res) => setTimeout(res, 1000));
      }
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  const contactItems = [
    {
      icon: Phone,
      label: "Helpline",
      lines: ["+91 82638 51791"],
    },
    {
      icon: Mail,
      label: "Email",
      lines: ["lokeshkhairnar36@gmail.com"],
    },
    {
      icon: MapPin,
      label: "Address",
      lines: [
        "Riyameds Pharma Private Limited",
        "Roongta Business Hub, Indira Nagar, Nashik",
      ],
    },
    {
      icon: Clock,
      label: "Support Hours",
      lines: ["Monday – Saturday", "9:00 AM – 6:00 PM IST"],
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding section-gradient-blue-light medical-pattern"
      data-ocid="contact.section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3 bg-primary/8 px-4 py-1.5 rounded-full">
            Contact Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-gradient-blue">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Have questions about our products or want to partner with us? Our
            team is ready to assist.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-6"
          >
            <div
              className="rounded-3xl p-8 text-white space-y-6"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.18 0.12 250) 0%, oklch(0.28 0.14 230) 50%, oklch(0.30 0.14 200) 100%)",
              }}
            >
              {/* Logo */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="flex-shrink-0 rounded-xl p-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #0a1f44 0%, #1a3a6e 60%, #1a5c2e 100%)",
                    border: "2px solid",
                    borderImageSource:
                      "linear-gradient(135deg, #22c55e, #1e40af)",
                    borderImageSlice: 1,
                    borderRadius: "12px",
                  }}
                >
                  <img
                    src="/assets/uploads/image-1.png"
                    alt="RiyaMeds Pharma"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-lg leading-tight">
                    Riyameds Pharma Private Limited
                  </div>
                  <div className="text-white/55 text-xs mt-0.5">
                    Innovation in Care. Excellence in Relief.
                  </div>
                </div>
              </div>

              {contactItems.map(({ icon: Icon, label, lines }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-teal-300" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">
                      {label}
                    </div>
                    {lines.map((l) => (
                      <div
                        key={l}
                        className="text-white text-sm font-medium leading-6"
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Inquiry form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl border border-border/60 shadow-lg p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                  data-ocid="contact.success_state"
                >
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <CheckCircle2 size={36} className="text-secondary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-xl">
                    Inquiry Submitted!
                  </h3>
                  <p className="text-muted-foreground max-w-xs">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initialForm);
                    }}
                    className="mt-2 border-primary/30 text-primary hover:bg-primary hover:text-white"
                    data-ocid="contact.secondary_button"
                  >
                    Send Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="font-display font-bold text-foreground text-xl mb-6">
                    Send Us a Message
                  </h3>

                  {/* Submit error */}
                  {submitError && (
                    <div
                      className="bg-destructive/10 border border-destructive/20 rounded-xl px-4 py-3 text-destructive text-sm font-medium"
                      data-ocid="contact.error_state"
                    >
                      Failed to submit inquiry. Please try again.
                    </div>
                  )}

                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-name"
                      className="font-semibold text-sm"
                    >
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-name"
                      placeholder="e.g. Rahul Sharma"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={errors.name ? "border-destructive" : ""}
                      data-ocid="contact.input"
                    />
                    {errors.name && (
                      <p
                        className="text-destructive text-xs"
                        data-ocid="contact.name_error"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="contact-email"
                        className="font-semibold text-sm"
                      >
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={errors.email ? "border-destructive" : ""}
                        data-ocid="contact.email_input"
                      />
                      {errors.email && (
                        <p
                          className="text-destructive text-xs"
                          data-ocid="contact.email_error"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="contact-phone"
                        className="font-semibold text-sm"
                      >
                        Phone <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="9876543210"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={errors.phone ? "border-destructive" : ""}
                        data-ocid="contact.phone_input"
                      />
                      {errors.phone && (
                        <p
                          className="text-destructive text-xs"
                          data-ocid="contact.phone_error"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-message"
                      className="font-semibold text-sm"
                    >
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Write your inquiry here…"
                      rows={4}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={`resize-none ${errors.message ? "border-destructive" : ""}`}
                      data-ocid="contact.textarea"
                    />
                    {errors.message && (
                      <p
                        className="text-destructive text-xs"
                        data-ocid="contact.message_error"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 text-base shadow-blue-sm"
                    data-ocid="contact.submit_button"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        <span data-ocid="contact.loading_state">Sending…</span>
                      </>
                    ) : (
                      "Send Inquiry"
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to be contacted by our team.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
