import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Travaillons <span className="text-gradient">Ensemble</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Je recherche un contrat de professionnalisation dès septembre 2026 pour ma dernière année d'étude.
            N'hésitez pas à me contacter !
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="mailto:jaad.chokr@outlook.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              jaad.chokr@outlook.com
            </a>
            <a
              href="/CV_Jaad_CHOKR.pdf"
              download
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              <Download className="w-4 h-4" />
              Télécharger CV
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground mb-8">
            <MapPin className="w-4 h-4" />
            <span>Lille, France</span>
            <span className="text-border">|</span>
            <Phone className="w-4 h-4" />
            <span>+33 7 45 66 60 68</span>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
