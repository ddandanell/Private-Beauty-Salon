import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Sparkles, Clock } from "lucide-react";
import { Link } from "wouter";

import bridalImg from "@assets/generated_images/bridal_nail_art_with_lace_details.png";
import acrylicImg from "@assets/generated_images/professional_acrylic_nail_extension_application.png";
import artImg from "@assets/generated_images/elegant_modern_french_tip_nails_with_chrome_accent.png";
import maniImg from "@assets/generated_images/gel_manicure_with_tropical_vibe.png";
import pediImg from "@assets/generated_images/luxury_foot_spa_pedicure_in_bali.png";

const ServiceCategory = ({ title, items, image, reversed = false }: { title: string, items: any[], image: string, reversed?: boolean }) => (
  <div className={`flex flex-col md:flex-row gap-8 items-center py-12 ${reversed ? 'md:flex-row-reverse' : ''}`}>
    <div className="w-full md:w-1/2">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
        <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
      </div>
    </div>
    <div className="w-full md:w-1/2 space-y-6">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">{title}</h2>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-start border-b border-border pb-4 last:border-0">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg">{item.name}</h3>
                {item.popular && <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Popular</span>}
              </div>
              <p className="text-sm text-muted-foreground mt-1 max-w-sm">{item.desc}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                <Clock className="w-3 h-3" /> {item.duration}
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-xl text-primary">{item.price}</div>
              {item.note && <div className="text-[10px] text-muted-foreground">{item.note}</div>}
            </div>
          </div>
        ))}
      </div>
      <Link href="/book">
        <Button className="mt-4 w-full md:w-auto">Book {title}</Button>
      </Link>
    </div>
  </div>
);

export default function Services() {
  const manicures = [
    { name: "Signature Gel Manicure", price: "350k", duration: "60 min", desc: "Includes Russian cuticle prep, shaping, strengthening base coat, and premium gel color.", popular: true },
    { name: "BIAB (Builder Gel) Overlay", price: "450k", duration: "75 min", desc: "Ideal for growing natural nails. Adds strength and structure. Includes gel color.", popular: true },
    { name: "Russian Manicure (No Polish)", price: "250k", duration: "45 min", desc: "Detailed cuticle work and shaping + buff and shine. For a super clean natural look." },
    { name: "Male Manicure", price: "250k", duration: "45 min", desc: "Cuticle care, trim, shape, and matte buff for well-groomed hands." },
  ];

  const pedicures = [
    { name: "Luxury Spa Pedicure", price: "400k", duration: "60 min", desc: "Foot soak, scrub, callus removal, massage, cuticle care, and gel polish.", popular: true },
    { name: "Essential Gel Pedicure", price: "300k", duration: "45 min", desc: "Dry pedicure focusing on toes only. Cuticle, shape, and gel color." },
    { name: "Callus Rehab Treatment", price: "+100k", duration: "Add-on 15 min", desc: "Intensive chemical peel for cracked heels. Baby soft feet guaranteed." },
    { name: "Leg & Foot Massage", price: "150k", duration: "30 min", desc: "Relaxing add-on after a long day of surfing or shopping." },
  ];

  const extensions = [
    { name: "Soft Gel Extensions (Gel-X)", price: "550k", duration: "90 min", desc: "Full coverage tips adhered with gel. Lightweight, natural looking, and soak-off friendly.", popular: true },
    { name: "Acrylic Sculpted Set", price: "650k", duration: "120 min", desc: "Traditional hard acrylics sculpted to your desired length and shape." },
    { name: "Hard Gel Overlay / Refill", price: "450k", duration: "90 min", desc: "Refill for existing extensions or hard gel overlay on natural nails." },
    { name: "Extension Removal", price: "150k", duration: "30-45 min", desc: "Safe removal of acrylics or hard gel. Includes mini manicure." },
  ];

  const nailArt = [
    { name: "Tier 1: Minimalist", price: "+5k-15k / nail", duration: "Variable", desc: "Simple lines, dots, chrome powder, french tips, or single stickers." },
    { name: "Tier 2: Advanced", price: "+20k-35k / nail", duration: "Variable", desc: "Intricate patterns, tortoiseshell, blooming gel, ombre, multiple colors." },
    { name: "Tier 3: Masterpiece", price: "+40k+ / nail", duration: "Variable", desc: "Hand-painted characters, complex 3D art, crystals. Please send inspo pics first!" },
  ];

  const bridal = [
    { name: "The Blushing Bride", price: "850k", duration: "2.5 hrs", desc: "Trial session (2 nails) + Wedding Day Gel Mani & Spa Pedi. Includes glass of bubbly.", popular: true },
    { name: "Bridesmaids Package", price: "300k / person", duration: "Variable", desc: "Min 3 pax. Express Gel Mani for the squad. Add Pedi for +200k." },
    { name: "Groom's Touch-Up", price: "200k", duration: "30 min", desc: "Clean, matte, photo-ready hands for the ring exchange." },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <main className="pt-24 pb-20">
        {/* Header */}
        <div className="bg-secondary text-white py-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="container mx-auto text-center relative z-10">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Menu</span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Full Service Price List</h1>
                <p className="text-white/80 max-w-2xl mx-auto text-lg">
                    Transparent pricing. No hidden transport fees for Seminyak, Canggu & Pererenan. 
                    <br/><span className="text-sm opacity-70 mt-2 block">(Small surcharge applies for Uluwatu, Ubud & Nusa Dua)</span>
                </p>
            </div>
        </div>

        <div className="container mx-auto px-4 mt-12">
            <Tabs defaultValue="all" className="w-full mb-12">
                <TabsList className="w-full justify-start overflow-x-auto bg-transparent border-b border-border h-auto p-0 rounded-none hide-scrollbar">
                    <TabsTrigger value="all" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4 text-base">All Services</TabsTrigger>
                    <TabsTrigger value="mani" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4 text-base">Manicures</TabsTrigger>
                    <TabsTrigger value="pedi" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4 text-base">Pedicures</TabsTrigger>
                    <TabsTrigger value="ext" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4 text-base">Extensions</TabsTrigger>
                    <TabsTrigger value="art" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4 text-base">Nail Art</TabsTrigger>
                    <TabsTrigger value="bridal" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4 text-base">Bridal</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-12 animate-in fade-in-50 duration-500">
                   <ServiceCategory title="Manicures" items={manicures} image={maniImg} />
                   <ServiceCategory title="Pedicures" items={pedicures} image={pediImg} reversed />
                   <ServiceCategory title="Extensions & Acrylics" items={extensions} image={acrylicImg} />
                   <ServiceCategory title="Nail Art" items={nailArt} image={artImg} reversed />
                   <ServiceCategory title="Bridal & Groups" items={bridal} image={bridalImg} />
                </TabsContent>

                {/* Individual tabs for focused view - reusing components */}
                <TabsContent value="mani">
                    <ServiceCategory title="Manicures" items={manicures} image={maniImg} />
                </TabsContent>
                <TabsContent value="pedi">
                    <ServiceCategory title="Pedicures" items={pedicures} image={pediImg} />
                </TabsContent>
                <TabsContent value="ext">
                    <ServiceCategory title="Extensions & Acrylics" items={extensions} image={acrylicImg} />
                </TabsContent>
                <TabsContent value="art">
                    <ServiceCategory title="Nail Art" items={nailArt} image={artImg} />
                </TabsContent>
                 <TabsContent value="bridal">
                    <ServiceCategory title="Bridal & Groups" items={bridal} image={bridalImg} />
                </TabsContent>
            </Tabs>

            {/* Transport Note */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center max-w-3xl mx-auto mb-20">
                <h3 className="font-serif font-bold text-2xl mb-4">📍 Transport & Call-Out Fees</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-2 rounded-full text-green-700 mt-1"><Check className="w-4 h-4" /></div>
                        <div>
                            <h4 className="font-bold">Free Travel Zone</h4>
                            <p className="text-sm text-muted-foreground">Seminyak, Canggu, Pererenan, Kerobokan, Umalas.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="bg-orange-100 p-2 rounded-full text-orange-700 mt-1"><Check className="w-4 h-4" /></div>
                        <div>
                            <h4 className="font-bold">+50k - 100k Surcharge</h4>
                            <p className="text-sm text-muted-foreground">Ubud, Uluwatu, Nusa Dua, Sanur, Jimbaran (per stylist).</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
