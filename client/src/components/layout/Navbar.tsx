import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Areas", href: "/areas" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        "bg-white/95 backdrop-blur-md shadow-sm py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-serif font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity">
            Private Beauty <span className="text-primary">Salon</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href ? "text-primary font-semibold" : "text-foreground"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary">
            <Instagram className="h-4 w-4" />
          </Button>
          <Link href="/book">
            <Button className="rounded-full px-6 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className="text-lg font-medium p-2 hover:bg-accent rounded-md text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Link href="/book">
              <Button className="w-full mt-2" size="lg" onClick={() => setIsOpen(false)}>
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
