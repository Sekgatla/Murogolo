import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, BookOpen, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/activities", label: "Activities" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" data-testid="nav-logo">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
            <BookOpen className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl leading-tight text-primary">Murogolo</span>
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Primary School</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary border-b-2 border-secondary pb-1" : "text-foreground"
                }`}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/donate"
            className={`text-sm font-medium transition-colors hover:text-secondary flex items-center gap-1 ${
              location === "/donate" ? "text-secondary" : "text-foreground"
            }`}
            data-testid="nav-link-donate"
          >
            <Heart className="h-4 w-4" />
            Donate
          </Link>
          <Button
            asChild
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 ml-2 font-bold"
            data-testid="nav-apply-btn"
          >
            <Link href="/admissions">Apply Now</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="nav-mobile-toggle"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium p-2 rounded-md transition-colors ${
                    isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/donate"
              className={`text-base font-medium p-2 rounded-md transition-colors flex items-center gap-2 ${
                location === "/donate" ? "bg-secondary/10 text-secondary" : "text-foreground hover:bg-muted"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Heart className="h-4 w-4" />
              Donate
            </Link>
            <Button
              asChild
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full font-bold mt-2"
            >
              <Link href="/admissions" onClick={() => setMobileMenuOpen(false)}>Apply Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
