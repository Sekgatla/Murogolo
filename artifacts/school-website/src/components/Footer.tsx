import { Link } from "wouter";
import { BookOpen, MapPin, Phone, Clock, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-lg">
                <BookOpen className="h-6 w-6" />
              </div>
              <span className="font-serif font-bold text-2xl">Murogolo</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm mt-4 leading-relaxed max-w-xs">
              A community school rooted in African warmth, nurturing children from Grade R through Grade 7.
            </p>
            <p className="font-serif italic text-secondary text-lg mt-4">
              "Learning Today, Leading Tomorrow."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 border-b border-primary-foreground/20 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/academics" className="text-primary-foreground/80 hover:text-secondary transition-colors">Academics</Link></li>
              <li><Link href="/activities" className="text-primary-foreground/80 hover:text-secondary transition-colors">Activities</Link></li>
              <li><Link href="/admissions" className="text-primary-foreground/80 hover:text-secondary transition-colors">Admissions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 border-b border-primary-foreground/20 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>082 668 8165</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>
                  Ha Muila Village, Kwaaidraai<br />
                  Tshitale, Makhado<br />
                  Limpopo, South Africa
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>
                  P.O. Box 354<br />
                  Muila, Limpopo
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 border-b border-primary-foreground/20 pb-2 inline-block">School Hours</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex gap-3 items-center">
                <Clock className="h-5 w-5 text-secondary shrink-0" />
                <div>
                  <p className="font-semibold text-white">Monday - Friday</p>
                  <p>07:30 - 14:30</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Murogolo Primary School. All rights reserved.</p>
          <p>Kwaaidraai, Tshitale, Makhado</p>
        </div>
      </div>
    </footer>
  );
}
