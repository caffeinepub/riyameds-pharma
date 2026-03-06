import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home", ocid: "nav.home_link" },
  { label: "About Us", href: "#about", ocid: "nav.about_link" },
  {
    label: "Therapeutic Areas",
    href: "#therapeutic",
    ocid: "nav.therapeutic_link",
  },
  { label: "Products", href: "#products", ocid: "nav.products_link" },
  { label: "Why Us", href: "#whyus", ocid: "nav.whyus_link" },
  { label: "Contact", href: "#contact", ocid: "nav.contact_link" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    // Trigger logo animation after a brief delay
    const timer = setTimeout(() => setLogoVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-xl shadow-lg shadow-blue-900/8"
          : "bg-white/95 backdrop-blur-md shadow-sm"
      }`}
    >
      {/* Top accent bar */}
      <div
        className="h-0.5 w-full"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.45 0.21 250), oklch(0.52 0.16 184), oklch(0.45 0.21 250))",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("#home")}
            className="flex items-center flex-shrink-0"
            data-ocid="nav.home_link"
          >
            <img
              src="/assets/uploads/image-1.png"
              alt="RiyaMeds Pharma Private Limited"
              className={`h-10 md:h-14 w-auto object-contain transition-none ${
                logoVisible ? "animate-logo-enter" : "opacity-0"
              }`}
              style={{ animationFillMode: "forwards" }}
            />
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                className="px-3.5 py-2 text-sm font-semibold text-foreground/75 hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/8"
                data-ocid={link.ocid}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={15} className="text-secondary" />
              <span>+91 98765 43210</span>
            </a>
            <Button
              onClick={() => handleNav("#contact")}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-5 shadow-blue-sm"
              data-ocid="nav.contact_link"
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-foreground/75 hover:text-primary hover:bg-primary/8 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-xl">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                className="text-left px-4 py-3 text-sm font-semibold text-foreground/75 hover:text-primary hover:bg-primary/8 rounded-lg transition-colors"
                data-ocid={link.ocid}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNav("#contact")}
              className="mt-2 bg-primary text-white font-semibold"
              data-ocid="nav.contact_link"
            >
              Enquire Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
