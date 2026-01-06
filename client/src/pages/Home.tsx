import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/features/Hero";
import { ServiceGrid } from "@/components/features/ServiceGrid";
import { LocationStrip } from "@/components/features/LocationStrip";
import { TestimonialStrip } from "@/components/features/TestimonialStrip";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Footer } from "@/components/layout/Footer";
import hygieneImg from "@assets/generated_images/sterilized_nail_tools_in_sealed_pouch_on_marble.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <LocationStrip />
        <ServiceGrid />
        
        {/* Value Prop / Hygiene Section */}
        <section className="py-12 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3 blur-2xl" />
              <img 
                src={hygieneImg}
                alt="Hygiene Standards" 
                className="relative rounded-3xl shadow-2xl z-10 w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-4 block">Safety First</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-slate-900 leading-tight">Hospital-Grade Hygiene. <br/>Zero Compromise.</h2>
              <div className="space-y-4 md:space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <span className="text-xl md:text-2xl">🏥</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg">Sterilized Tools</h4>
                    <p className="text-sm md:text-base text-muted-foreground">Every metal tool is autoclaved and sealed in medical pouches before your service.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <span className="text-xl md:text-2xl">✨</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg">Single-Use Files</h4>
                    <p className="text-sm md:text-base text-muted-foreground">Buffers and files are never reused. Take them home or we recycle them.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <span className="text-xl md:text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg">Premium Products</h4>
                    <p className="text-sm md:text-base text-muted-foreground">We use only authentic OPI, The Gel Bottle, and CND products imported from overseas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialStrip />
        
        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-secondary text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="container relative z-10 px-4">
            <h2 className="text-3xl md:text-6xl font-serif font-bold mb-6 md:mb-8">Ready to Glow?</h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
              Book your slot now. Our mobile techs are roaming Seminyak, Canggu, and beyond.
            </p>
            <a href="/book" className="inline-block bg-white text-secondary font-bold text-base md:text-lg px-8 py-3 md:px-10 md:py-4 rounded-full shadow-xl hover:scale-105 transition-transform">
              Book Appointment
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
