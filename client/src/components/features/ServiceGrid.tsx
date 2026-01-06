import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles, Droplets, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

import maniImg from "@assets/generated_images/gel_manicure_with_tropical_vibe.webp";
import pediImg from "@assets/generated_images/luxury_foot_spa_pedicure_in_bali.webp";
import nailArtImg from "@assets/generated_images/elegant_modern_french_tip_nails_with_chrome_accent.webp";

const services = [
  {
    title: "Gel Manicure",
    price: "350k",
    desc: "Russian cuticle prep, strengthening base, and premium gel polish.",
    icon: Sparkles,
    image: maniImg,
    popular: true,
  },
  {
    title: "Spa Pedicure",
    price: "400k",
    desc: "Foot soak, callus removal, scrub, massage, and gel polish.",
    icon: Droplets,
    image: pediImg,
    popular: false,
  },
  {
    title: "Nail Art Tier 1",
    price: "+100k",
    desc: "Simple designs, french tips, chrome, or ombré on all nails.",
    icon: Palette,
    image: nailArtImg,
    popular: false,
  },
  {
    title: "Group Glam",
    price: "Custom",
    desc: "Perfect for hen parties, birthdays, and villa gatherings.",
    icon: Star,
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
    popular: false,
  }
];

export function ServiceGrid() {
  return (
    <section className="py-12 md:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            We bring the full salon experience to you. All services include hospital-grade sterilization and premium imported products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden bg-card/50 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {service.popular && (
                    <span className="absolute top-4 right-4 z-20 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      POPULAR
                    </span>
                  )}
                </div>
                <CardContent className="p-6 relative">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <span className="font-bold text-lg text-primary">{service.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                    {service.desc}
                  </p>
                  <Link href="/book">
                    <Button variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-white border-primary/20">
                      Book This
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <Link href="/services">
              <Button variant="link" className="text-lg text-primary font-serif italic hover:no-underline">
                View Full Menu & Pricing &rarr;
              </Button>
           </Link>
        </div>
      </div>
    </section>
  );
}
