import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/elegant_manicure_in_a_luxury_bali_villa_setting.png";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Luxury Mobile Spa Bali"
          className="w-full h-full object-cover object-center md:object-[center_20%]"
        />
        {/* Cinematic Gradient: Darker on left for text readability, clear on right to show nails */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
      </div>

      {/* Content - Left Aligned Editorial Style */}
      <div className="container relative z-10 px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
             <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase">
                <Star className="w-3 h-3 fill-primary text-primary" /> #1 Mobile Spa
             </span>
             <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold tracking-widest uppercase shadow-lg shadow-primary/20">
                We Come To You
             </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-8 drop-shadow-xl tracking-tight">
            Bali's Best <br />
            <span className="italic text-primary-foreground font-light">Mobile Nails</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-lg leading-relaxed drop-shadow-md border-l-2 border-primary pl-6">
            Skip the traffic. We bring the full luxury salon experience to your villa in Seminyak, Canggu, Ubud & Uluwatu.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <Link href="/book">
              <Button size="lg" className="rounded-full h-16 px-10 text-lg font-bold shadow-2xl shadow-primary/30 hover:scale-105 transition-all duration-300 bg-white text-slate-900 hover:bg-slate-100 border-2 border-white">
                Book Appointment <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full h-16 px-10 text-lg bg-transparent hover:bg-white/10 text-white border-2 border-white/30 backdrop-blur-sm font-medium transition-all"
              onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
            >
              WhatsApp Us
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-white/80 border-t border-white/10 pt-8 max-w-md">
            <div>
                <p className="text-2xl font-serif font-bold text-white">50k+</p>
                <p className="text-xs uppercase tracking-wider opacity-70">Manicures</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
                <p className="text-2xl font-serif font-bold text-white">4.9</p>
                <p className="text-xs uppercase tracking-wider opacity-70">Google Rating</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="flex items-center gap-2">
                 <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 25}`} alt="Tech" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
                <p className="text-xs uppercase tracking-wider opacity-70">Online Now</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
