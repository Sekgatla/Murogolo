import { motion } from "framer-motion";
import { Heart, MapPin, Star, Users } from "lucide-react";

export default function About() {
  return (
    <div className="w-full">
      <section className="bg-primary py-24 text-center text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            About Murogolo
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-serif text-primary-foreground/80 max-w-2xl mx-auto italic"
          >
            A community school rooted in African warmth.
          </motion.p>
        </div>
      </section>

      {/* Story Section - Asymmetric offset */}
      <section className="py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 pt-12"
            >
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8">Our Background</h2>
              <div className="w-20 h-1 bg-secondary mb-10" />
              <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                <p>
                  Located in the heart of Ha Muila Village, Kwaaidraai, Tshitale, Makhado, Limpopo, Murogolo Primary School stands as a beacon of hope and opportunity for our local children.
                </p>
                <p>
                  We cater to learners from Grade R through Grade 7, providing a crucial foundation for their lifelong educational journey. Our school is more than just a building; it is a community hub where children are nurtured, challenged, and supported to become the leaders of tomorrow.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative lg:-mt-16"
            >
              <div className="aspect-[4/5] w-full rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="/images/learning.png" 
                  alt="Children Learning" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1/2 -right-12 w-48 h-48 bg-secondary rounded-full -z-10 blur-3xl opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Callout */}
      <section className="py-32 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-5xl">
          <Star className="h-16 w-16 mx-auto mb-10 text-accent-foreground/50" />
          <h3 className="text-4xl md:text-6xl font-serif leading-tight italic">
            "Education is the most powerful weapon which you can use to change the world."
          </h3>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-20 max-w-3xl leading-tight">
            We believe in holistic education that shapes character alongside intellect.
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
            {[
              {
                icon: Heart,
                title: "Nurturing Environment",
                desc: "We provide a safe, inclusive, and deeply caring atmosphere where every child feels valued and respected."
              },
              {
                icon: Star,
                title: "Academic Excellence",
                desc: "Our dedicated educators are committed to unlocking the potential of every learner, encouraging them to strive for greatness."
              },
              {
                icon: MapPin,
                title: "Deeply Rooted",
                desc: "We celebrate our African heritage and local culture, drawing strength and pride from our community."
              },
              {
                icon: Users,
                title: "Community Partnership",
                desc: "We actively collaborate with parents, guardians, and local leaders, knowing that education is a shared responsibility."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="mt-2 shrink-0">
                  <feature.icon className="h-12 w-12 text-secondary" />
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-bold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-xl leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-32 bg-primary text-primary-foreground border-t-[16px] border-secondary">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/3">
            <Users className="h-24 w-24 text-secondary mb-8" />
            <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight">Our Village,<br/>Our School</h2>
          </div>
          <div className="md:w-2/3 border-l-4 md:border-l-[6px] border-primary-foreground/20 pl-8 md:pl-16">
            <p className="text-2xl md:text-3xl font-serif text-primary-foreground/90 leading-relaxed italic">
              Murogolo Primary School is deeply embedded in Ha Muila Village. We rely on the strength of our School Governing Body (SGB) and local community members who volunteer their time, resources, and wisdom to improve our facilities and support our learners.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
