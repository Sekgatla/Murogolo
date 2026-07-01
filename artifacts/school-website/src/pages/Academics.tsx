import { motion } from "framer-motion";
import { BookOpen, Calculator, Globe, Languages, Lightbulb, Microscope, Palette, Monitor } from "lucide-react";

export default function Academics() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary py-20 text-center text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Academics
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Building a strong foundation for lifelong learning.
          </motion.p>
        </div>
      </section>

      {/* Phases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 p-10 rounded-3xl border border-primary/10"
            >
              <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-primary-foreground font-serif font-bold text-2xl">FP</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Foundation Phase</h2>
              <p className="text-xl font-medium text-secondary-foreground mb-6">Grade R – Grade 3</p>
              <p className="text-muted-foreground leading-relaxed">
                The early years are critical. We focus on basic literacy, numeracy, and life skills, ensuring that every child learns to read, write, and understand numbers in a supportive, play-based and structured environment.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary/10 p-10 rounded-3xl border border-secondary/20"
            >
              <div className="bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-secondary-foreground font-serif font-bold text-2xl">ISP</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Intermediate & Senior Phase</h2>
              <p className="text-xl font-medium text-primary mb-6">Grade 4 – Grade 7</p>
              <p className="text-muted-foreground leading-relaxed">
                As learners mature, the curriculum expands to include a broader range of subjects. We cultivate critical thinking, problem-solving, and independence, preparing learners for high school and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Learning Areas</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg">
              Our comprehensive curriculum is designed to develop well-rounded learners capable of succeeding in a modern world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, name: "Home Language" },
              { icon: Languages, name: "First Additional Language" },
              { icon: Calculator, name: "Mathematics" },
              { icon: Microscope, name: "Natural Sciences" },
              { icon: Globe, name: "Social Sciences" },
              { icon: Lightbulb, name: "Life Skills" },
              { icon: Monitor, name: "Technology" },
              { icon: Palette, name: "Creative Arts" },
            ].map((subject, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-background hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="bg-primary/5 group-hover:bg-primary group-hover:text-primary-foreground p-4 rounded-full mb-6 transition-colors text-primary">
                  <subject.icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif font-bold text-lg">{subject.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
