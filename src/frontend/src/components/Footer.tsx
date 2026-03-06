import { Heart, Mail, MapPin, Phone } from "lucide-react";

const currentYear = new Date().getFullYear();

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Doctors & Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
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
          "linear-gradient(180deg, oklch(0.18 0.07 258) 0%, oklch(0.12 0.05 258) 100%)",
      }}
    >
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/assets/uploads/image-1.png"
                alt="RiyaMeds Pharma"
                className="h-12 w-auto object-contain bg-white/10 rounded-xl p-1.5"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              RiyaMeds Pharma Private Limited delivers genuine, science-backed
              pharmaceutical products that healthcare professionals trust and
              patients love. Genuine Care. Trusted Science.
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors" />
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors" />
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors" />
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
                    className="text-white/60 hover:text-primary text-sm transition-colors font-medium"
                    data-ocid={`footer.${link.label.toLowerCase().replace(/[^a-z0-9]/g, "")}.link`}
                  >
                    {link.label}
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
                  size={16}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <div className="text-white/60 text-sm">
                  <div>+91 98765 43210</div>
                  <div>+91 87654 32109</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span className="text-white/60 text-sm">info@riyameds.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <span className="text-white/60 text-sm leading-relaxed">
                  123 Pharma Park, Andheri East,
                  <br />
                  Mumbai – 400069, Maharashtra
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs text-center">
            © {currentYear} RiyaMeds Pharma Private Limited. All rights
            reserved.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1.5">
            Built with <Heart size={12} className="text-red-400 fill-red-400" />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
