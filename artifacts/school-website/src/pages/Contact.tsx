import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Users } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full">
      <section className="bg-primary py-24 text-center text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-serif text-primary-foreground/80 max-w-2xl mx-auto italic"
          >
            We'd love to hear from you. Our doors are always open to our community.
          </motion.p>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-24">

            {/* Editorial Contact List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Contact Information</h2>
              <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
                Whether you have questions about admissions, activities, or want to get involved, our administration team is ready to assist you.
              </p>

              <div className="space-y-12 pl-8 border-l-[6px] border-secondary">
                <div className="flex gap-8 items-start">
                  <Phone className="h-10 w-10 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground uppercase tracking-widest text-sm">Phone Number</h3>
                    <p className="text-3xl font-serif font-bold">082 668 8165</p>
                  </div>
                </div>

                <div className="flex gap-8 items-start">
                  <MapPin className="h-10 w-10 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground uppercase tracking-widest text-sm">Physical Address</h3>
                    <p className="text-2xl font-serif leading-relaxed text-muted-foreground">
                      Ha Muila Village, Kwaaidraai<br />
                      Tshitale, Makhado<br />
                      Limpopo, South Africa
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 items-start">
                  <Mail className="h-10 w-10 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground uppercase tracking-widest text-sm">Postal Address</h3>
                    <p className="text-2xl font-serif leading-relaxed text-muted-foreground">
                      P.O. Box 354<br />
                      Muila, Limpopo
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 items-start">
                  <Clock className="h-10 w-10 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground uppercase tracking-widest text-sm">Operating Hours</h3>
                    <p className="text-2xl font-serif leading-relaxed text-muted-foreground">
                      Monday – Friday<br />
                      07:30 – 14:30
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Parents & Community Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <div className="bg-primary p-12 lg:p-20 shadow-2xl text-primary-foreground rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                <Users className="h-16 w-16 text-secondary mb-10 relative z-10" />
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 relative z-10">Parents & Community</h2>
                <p className="text-primary-foreground/90 text-xl leading-relaxed mb-12 font-serif italic relative z-10">
                  Education is a partnership. We strongly believe that the involvement of parents, guardians, and the broader Kwaaidraai community is essential to the success of our learners.
                </p>

                <h3 className="text-sm uppercase tracking-widest font-bold mb-8 text-secondary relative z-10">How to Get Involved</h3>
                <ul className="space-y-6 mb-8 relative z-10">
                  <li className="flex items-start gap-4">
                    <div className="mt-2 w-2 h-2 bg-secondary rounded-full shrink-0" />
                    <span className="text-lg">Join the School Governing Body (SGB) meetings</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-2 w-2 h-2 bg-secondary rounded-full shrink-0" />
                    <span className="text-lg">Volunteer for school events and sports days</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-2 w-2 h-2 bg-secondary rounded-full shrink-0" />
                    <span className="text-lg">Participate in community cleanup and outreach</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-2 w-2 h-2 bg-secondary rounded-full shrink-0" />
                    <span className="text-lg">Attend regular parent-teacher consultations</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Find Us</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8" />
            <p className="text-2xl text-muted-foreground font-serif">
              Ha Muila Village, Kwaaidraai, Tshitale, Makhado — Limpopo, South Africa
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="shadow-2xl rounded-3xl overflow-hidden border-8 border-white"
          >
            <iframe
              title="Murogolo Primary School Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=29.85%2C-23.15%2C30.10%2C-22.95&layer=mapnik&marker=-23.053%2C29.978"
              width="100%"
              height="600"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              data-testid="map-embed"
            />
          </motion.div>

          <div className="text-center mt-12">
            <a
              href="https://www.openstreetmap.org/?mlat=-23.053&mlon=29.978#map=13/-23.053/29.978"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-primary font-bold hover:text-primary/80 transition-colors uppercase tracking-widest text-sm bg-white px-8 py-4 rounded-full shadow-md"
              data-testid="link-open-map"
            >
              <MapPin className="h-5 w-5" />
              Open in full map
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
