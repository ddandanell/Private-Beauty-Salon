import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  }
];

export function TestimonialStrip() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-background p-6 rounded-2xl shadow-sm border border-border/50">
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
              <div className="flex text-primary">
                {[...Array(review.rating)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
