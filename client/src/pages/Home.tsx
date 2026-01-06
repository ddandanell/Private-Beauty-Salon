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
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3 blur-2xl" />
              <img 
                src={hygieneImg}
                alt="Hygiene Standards" 
                className="relative rounded-3xl shadow-2xl z-10"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Safety First</span>
              <h2 className="text-4xl font-serif font-bold mb-6 text-slate-900">Hospital-Grade Hygiene. <br/>Zero Compromise.</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Sterilized Tools</h4>
                    <p className="text-muted-foreground">Every metal tool is autoclaved and sealed in medical pouches before your service.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Single-Use Files</h4>
                    <p className="text-muted-foreground">Buffers and files are never reused. Take them home or we recycle them.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Premium Products</h4>
                    <p className="text-muted-foreground">We use only authentic OPI, The Gel Bottle, and CND products imported from overseas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialStrip />
        
        {/* Final CTA */}
        <section className="py-24 bg-secondary text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="container relative z-10 px-4">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to Glow?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Book your slot now. Our mobile techs are roaming Seminyak, Canggu, and beyond.
            </p>
            <a href="/book" className="inline-block bg-white text-secondary font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-transform">
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
