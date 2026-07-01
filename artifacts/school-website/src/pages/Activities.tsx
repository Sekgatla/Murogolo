import { motion } from "framer-motion";
import { Trophy, Medal, Music, Leaf, Users, ShieldAlert } from "lucide-react";

export default function Activities() {
  const activities = [
    {
      title: "Cultural Activities",
      icon: Music,
      desc: "Celebrating our heritage through traditional dance, music, and drama. These activities foster pride in our African roots and build creative expression."
    },
    {
      title: "School Competitions",
      icon: Medal,
      desc: "Regular academic and creative competitions within the school to encourage excellence, healthy rivalry, and public speaking skills."
    },
    {
      title: "Environmental Awareness",
      icon: Leaf,
      desc: "Teaching learners to care for their surroundings through gardening, recycling drives, and environmental stewardship programmes."
    },
    {
      title: "Community Outreach",
      icon: Users,
      desc: "Projects designed to give back to Ha Muila Village, teaching learners compassion, empathy, and the value of community service."
    },
    {
      title: "Leadership Development",
      icon: ShieldAlert,
      desc: "Prefect programs and classroom monitor roles that instill responsibility, integrity, and early leadership skills in our senior phase learners."
    }
  ];

  return (
    <div className="w-full">
      <section className="bg-primary py-24 text-center text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            School Activities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-serif text-primary-foreground/80 max-w-2xl mx-auto italic"
          >
            Education beyond the classroom walls.
          </motion.p>
        </div>
      </section>

      {/* Featured Activity */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row shadow-2xl overflow-hidden rounded-3xl"
          >
            <div className="lg:w-1/2 bg-secondary text-secondary-foreground p-12 md:p-20 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
              <div className="flex items-center gap-4 mb-8 text-secondary-foreground/80 uppercase tracking-widest font-bold text-sm relative z-10">
                <Trophy className="h-6 w-6" />
                <span>Featured Programme</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 relative z-10">Sports & Athletics</h2>
              <p className="text-xl md:text-2xl leading-relaxed mb-12 relative z-10 font-serif">
                Physical education is vital for health and teamwork. We offer various sports, athletics training, and participate in local inter-school competitions to build sportsmanship.
              </p>
              <div className="w-24 h-2 bg-primary relative z-10" />
            </div>
            <div className="lg:w-1/2 h-[500px] lg:h-auto relative">
              <img 
                src="/images/sports.png" 
                alt="Children playing sports" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities List */}
      <section className="py-32 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">More Programmes</h2>
            <p className="text-2xl font-serif text-muted-foreground">Discover the diverse range of activities we offer to enrich our learners' experience.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {activities.map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-start md:items-center py-16 border-b-2 border-border/80 last:border-0"
              >
                <div className="md:w-1/4 flex justify-center md:justify-start">
                  <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center shadow-lg text-primary border border-border/50">
                    <activity.icon className="h-10 w-10" />
                  </div>
                </div>
                <div className="md:w-3/4 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">{activity.title}</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {activity.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
