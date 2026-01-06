import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Trophy, GraduationCap, Users, Heart, ShieldCheck, Zap } from "lucide-react";

import teamImg from "@assets/generated_images/stylish_balinese_nail_team_with_male_center_lead.png";
import scooterImg from "@assets/generated_images/nail_tech_on_scooter_in_bali_rice_fields.png";
import expertImg from "@assets/generated_images/master_nail_tech_teaching_precise_application.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                Since 2016
              </Badge>
              <h1 className="text-4xl md:text-7xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                We Didn't Invent Mobile Spa. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-600">
                  We Perfected It.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                10 years. 50,000+ Manicures. One obsession: Being the absolute best nail squad in Bali.
              </p>
            </div>
          </div>
        </section>

        {/* The Origin Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/10 rounded-3xl transform -rotate-3"></div>
                <img 
                  src={scooterImg} 
                  alt="Private Beauty Salon Origins" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">
                  Started From A Scooter
                </h2>
                <div className="prose prose-lg text-slate-600">
                  <p>
                    Picture this: 2016. One beat-up Scoopy. One oversized kit bag. And a refusal to compromise on quality. While others were cutting corners with cheap acrylics in dark salons, we were dodging potholes in Canggu to bring <strong>5-star luxury</strong> directly to your villa.
                  </p>
                  <p>
                    They called us crazy. "You can't do high-end art on a coffee table," they said. "The humidity will ruin the gel," they warned.
                  </p>
                  <p className="font-bold text-slate-900 text-xl">
                    We proved them all wrong.
                  </p>
                  <p>
                    Ten years later, that single scooter has turned into a fleet. That kit bag is now a mobile laboratory of the world's best products. But the hustle? The hustle never changed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Expertise / "We Know What We're Doing" */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 transform origin-top"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 space-y-8">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                  We Don't Hire Techs. <br/>
                  <span className="text-primary">We Train Masters.</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="bg-white/10 p-3 rounded-xl text-primary">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">The "Nomad Academy" Standard</h3>
                      <p className="text-white/70">
                        Every tech goes through our rigorous 3-month bootcamp. We don't care if they have 5 years experience elsewhere—if they can't paint a french tip with their eyes closed, they don't wear our uniform.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-white/10 p-3 rounded-xl text-primary">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Certified & Sanitized</h3>
                      <p className="text-white/70">
                        We hold international certifications in hygiene and chemical safety. We know exactly what's in our bottles and why it matters. No mystery powders. No dodgy drills.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-white/10 p-3 rounded-xl text-primary">
                      <Zap className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">10 Years of "Oops-Proof" Experience</h3>
                      <p className="text-white/70">
                        Spilled champagne? Power cut at the villa? Dog jumped on your lap? We've seen it all. Our hands are steady even when the Bali chaos isn't.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                 <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                    <img src={expertImg} alt="Master Class Training" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-8">
                        <p className="font-serif italic text-xl">"Perfection isn't an accident. It's practice."</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Team Vibe */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-16">Meet The Squad</h2>
            
            <div className="relative max-w-5xl mx-auto mb-16 group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl transform rotate-1 transition-transform group-hover:rotate-0 duration-500"></div>
                <img 
                    src={teamImg} 
                    alt="The Private Beauty Salon Team" 
                    className="relative rounded-2xl shadow-xl w-full object-cover"
                />
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                             <img src="https://i.pravatar.cc/150?u=komang" alt="Komang" />
                        </div>
                        <div>
                            <h4 className="font-bold">Komang (Founder)</h4>
                            <p className="text-xs text-primary font-bold uppercase">The Boss</p>
                        </div>
                    </div>
                    <p className="text-sm text-slate-600">"I started this because I hated waiting in traffic for a mani. Now I make sure you never have to."</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                             <img src="https://i.pravatar.cc/150?u=wayan" alt="Wayan" />
                        </div>
                        <div>
                            <h4 className="font-bold">Wayan</h4>
                            <p className="text-xs text-primary font-bold uppercase">Head Trainer</p>
                        </div>
                    </div>
                    <p className="text-sm text-slate-600">"If the cuticle isn't perfect, I don't sleep. I train every girl here to be as obsessed as I am."</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                             <img src="https://i.pravatar.cc/150?u=putu" alt="Putu" />
                        </div>
                        <div>
                            <h4 className="font-bold">Putu</h4>
                            <p className="text-xs text-primary font-bold uppercase">Art Director</p>
                        </div>
                    </div>
                    <p className="text-sm text-slate-600">"You show me a Pinterest pic, I'll make it better. That's a promise."</p>
                </div>
            </div>

             <div className="mt-20">
                <h3 className="text-2xl font-bold mb-6">Ready to see what 10 years of obsession looks like?</h3>
                <Link href="/book">
                    <Button size="lg" className="rounded-full px-12 h-16 text-lg shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all">
                        Book An Appointment
                    </Button>
                </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
