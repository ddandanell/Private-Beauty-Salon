import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Car, CheckCircle2, Info } from "lucide-react";
import { Link } from "wouter";
import { PageHero } from "@/components/layout/PageHero";
import mapImg from "@assets/generated_images/stylized_minimal_map_of_bali_service_zones.png";
import heroImg from "@assets/generated_images/scenic_bali_rice_terrace_drive.png";

const locations = [
  // Free Zone (Canggu/Seminyak Hub)
  { name: "Seminyak", zone: "Free Zone", price: "Free", time: "30-45 mins" },
  { name: "Petitenget", zone: "Free Zone", price: "Free", time: "30-45 mins" },
  { name: "Batu Belig", zone: "Free Zone", price: "Free", time: "30-45 mins" },
  { name: "Kerobokan", zone: "Free Zone", price: "Free", time: "30-45 mins" },
  { name: "Umalas", zone: "Free Zone", price: "Free", time: "30-45 mins" },
  { name: "Berawa", zone: "Free Zone", price: "Free", time: "30-45 mins" },
  { name: "Batu Bolong", zone: "Free Zone", price: "Free", time: "30-45 mins" },
  { name: "Echo Beach", zone: "Free Zone", price: "Free", time: "30-45 mins" },
  { name: "Pererenan", zone: "Free Zone", price: "Free", time: "30-45 mins" },

  // Zone 1 (Nearby South)
  { name: "Legian", zone: "Zone 1", price: "50k", time: "45-60 mins" },
  { name: "Kuta", zone: "Zone 1", price: "50k", time: "45-60 mins" },
  { name: "Tuban", zone: "Zone 1", price: "50k", time: "45-60 mins" },
  { name: "Cemagi", zone: "Zone 1", price: "50k", time: "45-60 mins" },
  { name: "Seseh", zone: "Zone 1", price: "50k", time: "45-60 mins" },

  // Zone 2 (The Peninsula & East)
  { name: "Sanur", zone: "Zone 2", price: "100k", time: "60-90 mins" },
  { name: "Jimbaran", zone: "Zone 2", price: "100k", time: "60-90 mins" },
  { name: "Nusa Dua", zone: "Zone 2", price: "100k", time: "60-90 mins" },
  { name: "Benoa", zone: "Zone 2", price: "100k", time: "60-90 mins" },
  { name: "Denpasar", zone: "Zone 2", price: "100k", time: "60-90 mins" },
  
  // Zone 3 (Bukit & Uplands)
  { name: "Uluwatu", zone: "Zone 3", price: "150k", time: "90+ mins" },
  { name: "Pecatu", zone: "Zone 3", price: "150k", time: "90+ mins" },
  { name: "Ungasan", zone: "Zone 3", price: "150k", time: "90+ mins" },
  { name: "Bingin", zone: "Zone 3", price: "150k", time: "90+ mins" },
  { name: "Padang Padang", zone: "Zone 3", price: "150k", time: "90+ mins" },
  { name: "Ubud", zone: "Zone 3", price: "150k", time: "90+ mins" },
];

export default function Areas() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredLocations = locations.filter(loc => 
    loc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <main>
        <PageHero 
            title="Coverage & Travel Fees" 
            subtitle="From the rice fields of Ubud to the cliffs of Uluwatu. Check your area's transport fee below."
            image={heroImg}
        />

        <div className="container mx-auto px-4 mt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
             {/* Map Visual */}
             <div className="bg-slate-50 rounded-3xl p-4 border border-border shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/5 z-10 pointer-events-none"></div>
                <img 
                  src={mapImg} 
                  alt="Bali Coverage Map" 
                  className="w-full h-auto rounded-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 max-w-xs">
                   <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-xs font-bold uppercase text-slate-600">Free Zone (Canggu/Seminyak)</span>
                   </div>
                   <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span className="text-xs font-bold uppercase text-slate-600">Zone 1 (+50k)</span>
                   </div>
                   <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                      <span className="text-xs font-bold uppercase text-slate-600">Zone 2 (+100k)</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span className="text-xs font-bold uppercase text-slate-600">Zone 3 (+150k)</span>
                   </div>
                </div>
             </div>

             {/* Search & List */}
             <div>
                <div className="relative mb-8">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input 
                    className="pl-12 h-14 text-lg rounded-full shadow-sm border-slate-200 focus:border-primary focus:ring-primary/20" 
                    placeholder="Search your village or area..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                   {filteredLocations.length > 0 ? (
                     filteredLocations.map((loc, idx) => (
                       <div key={idx} className="flex items-center justify-between p-5 bg-white rounded-xl border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all group">
                          <div className="flex items-center gap-4">
                             <div className="bg-slate-100 p-3 rounded-full text-slate-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                <MapPin className="w-5 h-5" />
                             </div>
                             <div>
                                <h3 className="font-bold text-lg text-slate-900">{loc.name}</h3>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                   <Car className="w-3 h-3" />
                                   <span>Est. Arrival: {loc.time}</span>
                                </div>
                             </div>
                          </div>
                          <div className="text-right">
                             {loc.price === "Free" ? (
                               <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-green-200 px-3 py-1 text-sm">Free Travel</Badge>
                             ) : (
                               <Badge variant="outline" className="border-slate-200 text-slate-600 px-3 py-1 text-sm bg-slate-50">
                                 +{loc.price} IDR
                               </Badge>
                             )}
                          </div>
                       </div>
                     ))
                   ) : (
                     <div className="text-center py-12 text-muted-foreground">
                        <Info className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        <p>Area not listed? WhatsApp us for a custom quote.</p>
                     </div>
                   )}
                </div>
             </div>
          </div>

          <div className="bg-secondary text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="relative z-10">
               <h2 className="text-3xl font-serif font-bold mb-4">Don't see your area?</h2>
               <p className="text-white/80 mb-8 max-w-lg mx-auto">
                 We cover most of South Bali. If you're a bit further out (like Tabanan or Candidasa), just message us. We might still come to you for a small extra fee!
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Link href="/book">
                    <Button size="lg" className="bg-white text-secondary hover:bg-slate-100 font-bold px-8">
                       Book Now
                    </Button>
                 </Link>
                 <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                    <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8">
                       Ask on WhatsApp
                    </Button>
                 </a>
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
