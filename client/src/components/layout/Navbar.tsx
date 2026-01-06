import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import scooterIcon from "@assets/generated_images/minimalist_gold_line_art_scooter_icon.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

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
        "bg-white shadow-sm py-5"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity flex items-center gap-4 whitespace-nowrap">
            <img src={scooterIcon} alt="Scooter Logo" className="h-10 w-auto object-contain" />
            <span>Private Beauty <span className="text-primary">Salon</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary tracking-wide",
                location === link.href ? "text-primary font-semibold" : "text-foreground"
              )}
            >
                {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border/50">
            <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary w-10 h-10">
                <Instagram className="h-5 w-5" />
            </Button>
            <Link href="/book">
                <Button className="rounded-full px-8 h-10 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                Book Now
                </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium p-2 hover:bg-accent rounded-md text-foreground"
                onClick={() => setIsOpen(false)}
              >
                  {link.name}
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
