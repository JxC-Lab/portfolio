import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Filter } from "lucide-react";

const AllProjects = () => {
  const allDomains = [...new Set(projects.flatMap((p) => p.domains))];
  const allTechs = [...new Set(projects.flatMap((p) => p.technologies))];
  const [activeDomain, setActiveDomain] = useState<string | null>(null);
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = projects.filter((p) => {
    if (activeDomain && !p.domains.includes(activeDomain)) return false;
    if (activeTech && !p.technologies.includes(activeTech)) return false;
    return true;
  });

  return (
    <section id="all-projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Bibliothèque</p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Tous les <span className="text-gradient">Projets</span>
            </h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 text-sm border border-border px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-foreground"
            >
              <Filter className="w-4 h-4" /> Filtrer
            </button>
          </div>
        </motion.div>

        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mb-8 space-y-4"
          >
            <div>
              <p className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Domaine</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveDomain(null)}
                  className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                    !activeDomain ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Tous
                </button>
                {allDomains.map((d) => (
                  <button
                    key={d}
                    onClick={() => setActiveDomain(d === activeDomain ? null : d)}
                    className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                      activeDomain === d ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Technologie</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveTech(null)}
                  className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                    !activeTech ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Toutes
                </button>
                {allTechs.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTech(t === activeTech ? null : t)}
                    className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                      activeTech === t ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <div className="space-y-4">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl p-6 hover:glow-border transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-foreground">{project.title}</h3>
                    {project.featured && (
                      <span className="text-[10px] font-mono bg-primary/10 text-primary px-2 py-0.5 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 md:justify-end shrink-0">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono bg-secondary text-secondary-foreground px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground font-mono whitespace-nowrap shrink-0">
                  {project.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">Aucun projet ne correspond aux filtres sélectionnés.</p>
        )}
      </div>
    </section>
  );
};

export default AllProjects;
