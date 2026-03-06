import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Doctors & Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoAnimated, setLogoAnimated] = useState(false);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Trigger logo animation on mount
    const timer = setTimeout(() => setLogoAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("#home")}
            className="flex items-center gap-3 flex-shrink-0"
            data-ocid="nav.link"
          >
            <img
              ref={logoRef}
              src="/assets/uploads/image-1.png"
              alt="RiyaMeds Pharma"
              className="h-10 md:h-12 w-auto object-contain"
              style={{
                opacity: logoAnimated ? 1 : 0,
                transform: logoAnimated
                  ? "translateY(0) scale(1)"
                  : "translateY(-20px) scale(0.8)",
                transition:
                  "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
              }}
            />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors duration-200 rounded-lg hover:bg-accent"
                data-ocid={`nav.${link.label.toLowerCase().replace(/[^a-z0-9]/g, "")}.link`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={() => handleNav("#contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-5"
              data-ocid="nav.contact.primary_button"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-accent transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                className="text-left px-4 py-3 text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-accent rounded-lg transition-colors"
                data-ocid={`nav.mobile.${link.label.toLowerCase().replace(/[^a-z0-9]/g, "")}.link`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNav("#contact")}
              className="mt-2 bg-primary text-primary-foreground font-semibold"
              data-ocid="nav.mobile.contact.primary_button"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
