import { motion } from "framer-motion";
import { FileText, Info, BookOpen, MapPin, User, FileImage } from "lucide-react";

export default function Admissions() {
  const documents = [
    { text: "Learner's Birth Certificate", icon: User },
    { text: "Parent or Guardian ID", icon: FileImage },
    { text: "Proof of Residence", icon: MapPin },
    { text: "Previous School Report (where applicable)", icon: BookOpen },
    { text: "Transfer Letter (for transferring learners)", icon: FileText }
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
            Admissions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-serif text-primary-foreground/80 max-w-2xl mx-auto italic"
          >
            Join the Murogolo family. We welcome learners from our community.
          </motion.p>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
            
            {/* Main Info - Wide text flow */}
            <div className="lg:col-span-6 space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">Application Process</h2>
                <div className="text-xl text-muted-foreground leading-relaxed space-y-6">
                  <p>
                    Applying to Murogolo Primary School is straightforward. We prioritize learners from our local community of Ha Muila Village and surrounding areas in Tshitale. Parents and guardians are encouraged to apply early to secure a space for the upcoming academic year.
                  </p>
                </div>
                
                <div className="bg-secondary/20 p-8 mt-12 flex gap-6 border-l-4 border-secondary rounded-r-xl">
                  <Info className="h-8 w-8 text-secondary-foreground shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl text-secondary-foreground mb-3">Important Notice</h4>
                    <p className="text-lg text-secondary-foreground/90 leading-relaxed">
                      All applications must be submitted in person at the school office during operating hours. We do not currently accept online applications.
                    </p>
                  </div>
                </div>

                <h3 className="text-3xl font-serif font-bold text-foreground mt-16 mb-6">Grade R Enrollments</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  For Grade R admissions, learners must turn 6 years old by the 30th of June in the year of admission. Early childhood education provides the crucial stepping stones for future academic success.
                </p>
              </motion.div>
            </div>

            {/* Required Documents Checklist - Numbered List with Rules */}
            <div className="lg:col-span-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-primary">Required Documents</h3>
                <p className="text-xl text-muted-foreground mb-12">
                  Please bring clear, certified copies of the following documents when submitting your application:
                </p>

                <div className="space-y-0">
                  {documents.map((doc, idx) => (
                    <div key={idx} className="flex gap-6 md:gap-8 items-center py-8 border-b border-border/60 last:border-0">
                      <div className="text-4xl font-serif font-black text-border">
                        {(idx + 1).toString().padStart(2, '0')}
                      </div>
                      <div className="bg-primary/5 p-5 rounded-full">
                        <doc.icon className="h-8 w-8 text-primary" />
                      </div>
                      <span className="text-2xl font-bold font-serif text-foreground">{doc.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-16 pt-8 border-t-[3px] border-primary/20">
                  <p className="text-xl text-muted-foreground">
                    Need help? Contact the school administration office at <strong className="text-foreground">082 668 8165</strong>.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
