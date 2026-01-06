import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const locations = [
  "Seminyak", "Canggu", "Pererenan", "Ubud", "Uluwatu", "Sanur", "Nusa Dua", "Jimbaran"
];

export function LocationStrip() {
  return (
    <div className="w-full bg-secondary py-8 md:py-12 overflow-hidden">
      <div className="container mx-auto px-4 mb-6 text-center">
        <p className="text-secondary-foreground/80 font-medium uppercase tracking-widest text-xs md:text-sm mb-2">
          We Come To You
        </p>
        <h3 className="text-xl md:text-2xl font-serif font-bold text-white">
          Available Across Bali's Best Neighborhoods
        </h3>
      </div>
      
      <div className="flex overflow-x-auto pb-4 hide-scrollbar justify-start md:justify-center gap-4 px-4">
        {locations.map((loc) => (
          <div 
            key={loc}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10 whitespace-nowrap",
              "hover:bg-white/20 transition-colors cursor-default"
            )}
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-medium">{loc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
