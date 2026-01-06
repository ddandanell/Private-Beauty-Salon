import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/luxury_bali_mobile_nail_spa_setup_by_pool.png";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Luxury Mobile Spa Bali"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/20 to-white/90 mix-blend-overlay" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 pt-20 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto md:mx-0 bg-white/30 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/40 shadow-2xl shadow-black/5"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/90 text-white text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            We Come To Your Villa
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-6 drop-shadow-sm">
            Luxury Mobile <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-600">
              Nails in Bali
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-800 font-medium mb-8 max-w-lg leading-relaxed">
            Professional gel manicures, pedicures, and nail art delivered to your doorstep in Seminyak, Canggu, Ubud & Uluwatu.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/book">
              <Button size="lg" className="rounded-full h-14 px-8 text-lg font-bold shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
                Book Appointment
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full h-14 px-8 text-lg bg-white/80 hover:bg-white border-white/50 text-slate-900 font-medium backdrop-blur-sm shadow-sm"
              onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
            >
              WhatsApp Us
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center md:justify-start gap-6 text-sm font-medium text-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available Today
            </div>
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Tech" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-white bg-white flex items-center justify-center text-xs font-bold text-slate-600">
                +12
              </div>
            </div>
            <span>Techs on the road</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
