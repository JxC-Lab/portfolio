import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowLeft, Calendar, Building2, Target, Lightbulb, Trophy, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Projet introuvable</h1>
          <Link to="/" className="text-primary hover:underline">
            ← Retour au portfolio
          </Link>
        </div>
      </div>
    );
  }

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <Link
              to="/#all-projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Retour aux projets
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              {project.featured && (
                <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded">
                  Featured
                </span>
              )}
              {project.domains.map((domain) => (
                <span
                  key={domain}
                  className="text-xs text-muted-foreground border border-border px-2 py-0.5 rounded-full"
                >
                  {domain}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Building2 className="w-4 h-4" />
                {project.organization}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {project.date}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          {/* Context */}
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.context}
            </p>
          </motion.div>

          {/* Technologies */}
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }}>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-sm bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Objectives */}
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Objectifs</h2>
            </div>
            <ul className="space-y-3">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-mono flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  {obj}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Challenges */}
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.25 }}>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Défis & Problématiques</h2>
            </div>
            <div className="space-y-3">
              {project.challenges.map((challenge, i) => (
                <div
                  key={i}
                  className="glass rounded-lg p-4 border-l-2 border-primary/40"
                >
                  <p className="text-muted-foreground text-sm">{challenge}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Results */}
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }}>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Résultats</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.results.map((result, i) => (
                <div
                  key={i}
                  className="glass rounded-lg p-4 hover:glow-border transition-all duration-300"
                >
                  <p className="text-sm text-foreground">{result}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Navigation between projects */}
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.35 }}>
            <div className="border-t border-border pt-8 flex justify-between items-center">
              {(() => {
                const idx = projects.findIndex((p) => p.id === project.id);
                const prev = projects[idx - 1];
                const next = projects[idx + 1];
                return (
                  <>
                    {prev ? (
                      <Link
                        to={`/projet/${prev.id}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        ← {prev.title.length > 30 ? prev.title.slice(0, 30) + "…" : prev.title}
                      </Link>
                    ) : (
                      <span />
                    )}
                    {next ? (
                      <Link
                        to={`/projet/${next.id}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors text-right"
                      >
                        {next.title.length > 30 ? next.title.slice(0, 30) + "…" : next.title} →
                      </Link>
                    ) : (
                      <span />
                    )}
                  </>
                );
              })()}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-muted-foreground border-t border-border">
        <p>© 2026 Jaad CHOKR — Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default ProjectDetail;
