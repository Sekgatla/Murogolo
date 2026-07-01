import { motion } from "framer-motion";
import { ArrowRight, Compass, Shield, Users, BookOpen, Heart, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ThreeScene } from "@/components/ThreeScene";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.png"
            alt="Murogolo Primary School Building"
            className="w-full h-full object-cover opacity-20 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-90">
            <ThreeScene />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm font-bold tracking-wider uppercase mb-2">
              Welcome to our Community
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
              Learning Today,<br />
              <span className="text-secondary">Leading Tomorrow.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              Murogolo Primary School is a proud community school in Ha Muila Village, nurturing children from Grade R through Grade 7 with African warmth and excellence.
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8 h-14 text-lg"
                data-testid="btn-enroll"
              >
                <Link href="/admissions">Enroll Your Child</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 font-bold px-8 h-14 text-lg"
                data-testid="btn-discover"
              >
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars - Authentic Layout */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          {/* Vision Full-Width Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-primary-foreground p-12 md:p-20 rounded-3xl mb-12 flex flex-col md:flex-row gap-8 items-center justify-between shadow-xl"
          >
            <div className="md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Our Vision</h2>
              <div className="w-16 h-1 bg-secondary mt-6" />
            </div>
            <div className="md:w-2/3">
              <p className="text-2xl md:text-3xl font-serif leading-relaxed">
                To be a leading primary school that inspires excellence, integrity, creativity, and lifelong learning in every learner.
              </p>
            </div>
          </motion.div>

          {/* Mission & Values Side-by-Side */}
          <div className="grid md:grid-cols-2 gap-16 mt-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="pl-8 border-l-4 border-secondary"
            >
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-foreground">Our Mission</h3>
              <ol className="space-y-8 text-xl text-muted-foreground list-decimal list-outside ml-6 marker:text-secondary marker:font-bold marker:text-2xl">
                <li className="pl-4">Providing quality education tailored to community needs.</li>
                <li className="pl-4">Promoting academic excellence in all subjects.</li>
                <li className="pl-4">Encouraging partnerships between school, parents, and community.</li>
              </ol>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 p-10 rounded-[40px]"
            >
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-foreground">Core Values</h3>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: Shield, text: "Respect" },
                  { icon: Star, text: "Integrity" },
                  { icon: Compass, text: "Excellence" },
                  { icon: Check, text: "Responsibility" },
                  { icon: Users, text: "Teamwork" },
                  { icon: BookOpen, text: "Discipline" }
                ].map((val, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="text-secondary bg-white p-3 rounded-full shadow-sm">
                      <val.icon className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-lg text-foreground">{val.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal's Message - Pull Quote */}
      <section className="py-32" style={{ backgroundColor: "#faf7f2" }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            <div className="md:w-2/3 relative">
              <span className="absolute -top-16 -left-12 text-9xl text-secondary/30 font-serif leading-none">"</span>
              <blockquote className="text-4xl md:text-5xl font-serif text-foreground leading-snug italic relative z-10">
                Welcome to Murogolo Primary School. We are proud to serve our community by providing quality education and creating opportunities for every learner to succeed.
              </blockquote>
            </div>
            
            <div className="hidden md:block w-px h-64 bg-border/80"></div>
            
            <div className="md:w-1/3 border-t md:border-t-0 pt-12 md:pt-0 border-border/80">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-white shadow-xl">
                <img src="/images/principal.png" alt="Principal" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-3xl font-bold font-serif text-primary mb-2">Mr. Mulalo</h4>
              <p className="text-muted-foreground uppercase tracking-widest text-sm font-bold mb-6">Principal of Murogolo</p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                "Our school is committed to academic excellence, discipline, and personal development in Ha Muila Village."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA Banner - Two Column */}
      <section className="py-32 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-8xl md:text-[150px] font-serif font-black leading-none mb-4 -ml-2 tracking-tighter">6</h2>
              <h3 className="text-4xl md:text-6xl font-serif font-bold leading-tight">Impact Areas.<br/>1 Choice.</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-secondary-foreground/20 pl-10 md:pl-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
                Help Us Grow
              </h2>
              <p className="text-secondary-foreground/90 text-2xl mb-10 leading-relaxed font-serif italic">
                Your donation provides books, uniforms, sports kits, and opportunities for learners who need it most. Every rand makes a difference.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-12 h-16 text-xl w-full md:w-auto shadow-xl"
                data-testid="btn-donate-home"
              >
                <Link href="/donate">
                  Support Our Learners <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
