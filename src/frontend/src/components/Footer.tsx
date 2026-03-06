import { Heart, Mail, MapPin, Phone } from "lucide-react";

const currentYear = new Date().getFullYear();

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Therapeutic Areas", href: "#therapeutic" },
  { label: "Product Portfolio", href: "#products" },
  { label: "Why Choose Us", href: "#whyus" },
  { label: "Quality & Research", href: "#quality" },
  { label: "Vision & Mission", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

const products = [
  "Inflamora S",
  "Inflamora",
  "Voltacure",
  "Voltacure-S",
  "Pantaprix",
  "Dompancid",
  "Benza Clean",
  "Dermaviska Cream",
  "Dermaviska Spray",
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.14 0.1 250) 0%, oklch(0.10 0.07 250) 100%)",
      }}
    >
      {/* Top accent */}
      <div
        className="h-0.5 w-full"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.45 0.21 250), oklch(0.52 0.16 184), oklch(0.45 0.21 250))",
        }}
      />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <div>
              <img
                src="/assets/uploads/image-1.png"
                alt="RiyaMeds Pharma"
                className="h-14 w-auto object-contain bg-white/8 rounded-xl p-1.5"
              />
            </div>
            <p className="text-white/55 text-sm leading-relaxed">
              Riyameds Pharma Private Limited delivers effective, safe, and
              high-quality pharmaceutical solutions in pain management and
              dermatology.
            </p>
            <div className="space-y-2">
              <div className="text-white/40 text-xs font-semibold uppercase tracking-widest">
                Innovation in Care. Excellence in Relief.
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-white text-base">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-white/55 hover:text-teal-300 text-sm transition-colors font-medium"
                    data-ocid={`footer.${link.label.toLowerCase().replace(/[^a-z0-9]/g, "")}.link`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-white text-base">
              Our Products
            </h4>
            <ul className="space-y-2">
              {products.map((p) => (
                <li key={p}>
                  <button
                    type="button"
                    onClick={() => scrollTo("#products")}
                    className="text-white/55 hover:text-teal-300 text-sm transition-colors font-medium"
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-white text-base">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone
                  size={15}
                  className="text-teal-300 flex-shrink-0 mt-0.5"
                />
                <div className="text-white/55 text-sm">
                  <div>+91 98765 43210</div>
                  <div>+91 87654 32109</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-teal-300 flex-shrink-0" />
                <span className="text-white/55 text-sm">info@riyameds.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="text-teal-300 flex-shrink-0 mt-0.5"
                />
                <span className="text-white/55 text-sm leading-relaxed">
                  Riyameds Pharma Pvt. Ltd.,
                  <br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center">
            © {currentYear} Riyameds Pharma Private Limited. All rights
            reserved.
          </p>
          <p className="text-white/35 text-xs flex items-center gap-1.5">
            Built with{" "}
            <Heart size={11} className="text-rose-400 fill-rose-400" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 hover:text-teal-200 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
