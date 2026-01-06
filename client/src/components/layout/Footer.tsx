import { Link } from "wouter";
import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link href="/">
              <a className="text-2xl font-serif font-bold text-foreground">
                Bali Nail <span className="text-primary">Nomads</span>
              </a>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bali's premier mobile nail salon. We bring luxury spa services directly to your villa, hotel, or home.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-slate-900">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services"><a className="hover:text-primary">Gel Manicure</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary">Spa Pedicure</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary">BIAB Nails</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary">Bridal Packages</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary">Group Bookings</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-slate-900">Areas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/areas"><a className="hover:text-primary">Seminyak</a></Link></li>
              <li><Link href="/areas"><a className="hover:text-primary">Canggu & Pererenan</a></Link></li>
              <li><Link href="/areas"><a className="hover:text-primary">Ubud</a></Link></li>
              <li><Link href="/areas"><a className="hover:text-primary">Uluwatu</a></Link></li>
              <li><Link href="/areas"><a className="hover:text-primary">Nusa Dua</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-slate-900">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>WhatsApp: +62 812 3456 7890</li>
              <li>Email: hello@balinailnomads.com</li>
              <li>Daily: 9:00 AM - 8:00 PM</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; 2026 Bali Nail Nomads. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
