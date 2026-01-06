import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Sarah Jenkins",
    handle: "@sarahj_travels",
    text: "Literally the best manicure I've had in Bali. They came to my villa in Canggu and it was so luxe!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Chloe & The Girls",
    handle: "@chloeweds",
    text: "Booked them for my hens party. 6 girls, prosecco, and perfect nails. The team was amazing.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=chloe"
  },
  {
    name: "Jessica Lee",
    handle: "@jesslee",
    text: "Hygiene is top notch. Sterilized tools in sealed bags. Felt super safe and clean.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=jess"
  },
  {
    name: "Emma Wilson",
    handle: "@emma_eats",
    text: "My gel lasted 4 weeks without a single chip. The nail art was exactly like the photo I showed.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=emma"
  },
  {
    name: "Bali Villa Escapes",
    handle: "@balivilla",
    text: "We exclusively recommend Private Beauty Salon to all our VIP guests. Simply the best mobile service.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=villa"
  },
  {
    name: "Michelle Tan",
    handle: "@michelletan",
    text: "Convenience is unmatched. Having a pedi while looking at my private pool view? Yes please.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=michelle"
  },
  {
    name: "Sophie Anderson",
    handle: "@sophie_a",
    text: "They fixed a botched job I got at a street salon. My natural nails are finally healthy again.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sophie"
  }
];

export function TestimonialStrip() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })
  ]);

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4">Vibe Check</h2>
            <p className="text-muted-foreground">Join 2,000+ happy clients glowing across the island.</p>
          </div>
          <div className="flex gap-4">
            <div className="text-right">
              <div className="font-bold text-2xl">4.9/5</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Google Reviews</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-left">
              <div className="font-bold text-2xl">5.0/5</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Facebook</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative" ref={emblaRef}>
        <div className="flex touch-pan-y gap-6 ml-4">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="flex-[0_0_300px] md:flex-[0_0_400px] min-w-0 relative"
            >
              <div className="bg-background p-6 rounded-2xl shadow-sm border border-border/50 h-full flex flex-col justify-between select-none">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarImage src={review.avatar} />
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-sm">{review.name}</div>
                      <div className="text-xs text-muted-foreground">{review.handle}</div>
                    </div>
                  </div>
                  <p className="text-slate-700 italic mb-4">"{review.text}"</p>
                </div>
                <div className="flex text-primary">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current text-primary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
