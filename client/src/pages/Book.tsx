import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check, Calendar, MapPin, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const services = [
  { id: "gel-mani", name: "Gel Manicure", price: "350k", duration: "60m" },
  { id: "spa-pedi", name: "Spa Pedicure", price: "400k", duration: "60m" },
  { id: "mani-pedi", name: "Mani + Pedi Combo", price: "700k", duration: "120m" },
  { id: "soft-gel", name: "Soft Gel Extensions", price: "550k", duration: "90m" },
  { id: "removal", name: "Gel Removal", price: "100k", duration: "30m" },
];

const locations = [
  "Seminyak", "Canggu", "Pererenan", "Ubud", "Uluwatu", "Sanur", "Nusa Dua"
];

const timeSlots = [
  "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "19:00"
];

export default function Book() {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState({
    service: "",
    location: "",
    date: "",
    time: "",
    name: "",
    whatsapp: ""
  });

  const updateBooking = (key: string, value: string) => {
    setBooking(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const steps = [
    { num: 1, title: "Service" },
    { num: 2, title: "Location" },
    { num: 3, title: "Time" },
    { num: 4, title: "Details" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main className="pt-32 pb-20 container mx-auto px-4 max-w-2xl">
        <div className="mb-8">
          <Link href="/">
            <a className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2 mb-4">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </a>
          </Link>
          <h1 className="text-3xl font-serif font-bold mb-2">Book Your Appointment</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex gap-1">
              {steps.map((s) => (
                <div 
                  key={s.num} 
                  className={cn(
                    "h-2 w-12 rounded-full transition-colors",
                    step >= s.num ? "bg-primary" : "bg-slate-200"
                  )}
                />
              ))}
            </div>
            <span className="ml-2 font-medium text-slate-900">Step {step} of 4</span>
          </div>
        </div>

        <Card className="border-0 shadow-xl overflow-hidden">
          <CardContent className="p-0">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6 md:p-8"
                >
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" /> Select Service
                  </h2>
                  <div className="grid gap-3">
                    {services.map((service) => (
                      <div 
                        key={service.id}
                        className={cn(
                          "flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-primary/50",
                          booking.service === service.id ? "border-primary bg-primary/5" : "border-slate-100"
                        )}
                        onClick={() => updateBooking("service", service.id)}
                      >
                        <div>
                          <div className="font-bold text-slate-900">{service.name}</div>
                          <div className="text-sm text-muted-foreground">{service.duration}</div>
                        </div>
                        <div className="font-bold text-primary">{service.price}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-end">
                    <Button onClick={nextStep} disabled={!booking.service} className="w-full md:w-auto">
                      Continue
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6 md:p-8"
                >
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" /> Select Location
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {locations.map((loc) => (
                      <div 
                        key={loc}
                        className={cn(
                          "p-4 rounded-xl border-2 cursor-pointer transition-all text-center font-medium",
                          booking.location === loc ? "border-primary bg-primary/5 text-primary" : "border-slate-100 hover:border-slate-300"
                        )}
                        onClick={() => updateBooking("location", loc)}
                      >
                        {loc}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-between">
                    <Button variant="ghost" onClick={prevStep}>Back</Button>
                    <Button onClick={nextStep} disabled={!booking.location}>Continue</Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6 md:p-8"
                >
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" /> Select Time
                  </h2>
                  
                  <div className="mb-6">
                     <Label className="mb-2 block">Date</Label>
                     <Input 
                        type="date" 
                        className="w-full text-lg p-3" 
                        onChange={(e) => updateBooking("date", e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                     />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((slot) => (
                      <div 
                        key={slot}
                        className={cn(
                          "p-3 rounded-lg border cursor-pointer transition-all text-center text-sm font-medium",
                          booking.time === slot ? "bg-primary text-white border-primary" : "border-slate-200 hover:border-primary/50"
                        )}
                        onClick={() => updateBooking("time", slot)}
                      >
                        {slot}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-between">
                    <Button variant="ghost" onClick={prevStep}>Back</Button>
                    <Button onClick={nextStep} disabled={!booking.date || !booking.time}>Continue</Button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6 md:p-8"
                >
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" /> Final Details
                  </h2>
                  
                  <div className="space-y-4 mb-8">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="Jane Doe" value={booking.name} onChange={(e) => updateBooking("name", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp Number</Label>
                      <Input id="whatsapp" placeholder="+62 812..." value={booking.whatsapp} onChange={(e) => updateBooking("whatsapp", e.target.value)} />
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg mb-8 text-sm">
                    <h4 className="font-bold mb-2 uppercase text-xs tracking-wider text-muted-foreground">Summary</h4>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>Service</span>
                      <span className="font-medium">{services.find(s => s.id === booking.service)?.name}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200 mt-2">
                      <span>Location</span>
                      <span className="font-medium">{booking.location}</span>
                    </div>
                    <div className="flex justify-between py-1 mt-2">
                      <span>Time</span>
                      <span className="font-medium">{booking.date} at {booking.time}</span>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <Button variant="ghost" onClick={prevStep}>Back</Button>
                    <Button 
                      className="w-full ml-4" 
                      disabled={!booking.name || !booking.whatsapp}
                      onClick={() => alert(`Booking Request Sent!\n\nWe will contact you on WhatsApp at ${booking.whatsapp} to confirm your ${booking.location} appointment.`)}
                    >
                      Confirm Booking
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
