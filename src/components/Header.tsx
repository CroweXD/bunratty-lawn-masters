import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/80 backdrop-blur-md">
      <div className="container-narrow flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <a href="#" className="text-xl font-heading text-primary-foreground tracking-tight">
          Bunratty Grass Cutting
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Free Quote
          </a>
        </nav>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-foreground/95 border-t border-primary-foreground/10 px-4 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block text-center bg-primary text-primary-foreground px-5 py-3 rounded-md font-semibold text-sm"
          >
            Free Quote
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
