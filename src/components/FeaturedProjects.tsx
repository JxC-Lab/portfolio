import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects, type Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <Link to={`/projet/${project.id}`}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass rounded-xl p-6 hover:glow-border transition-all duration-300 h-full"
    >
    <div className="flex items-start justify-between mb-4">
      <div>
        <p className="font-mono text-xs text-primary uppercase tracking-wider mb-1">
          {project.date}
        </p>
        <h3 className="text-xl font-semibold text-foreground group-hover:text-gradient transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground">{project.organization}</p>
      </div>
      {project.featured && (
        <span className="shrink-0 text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded">
          Featured
        </span>
      )}
    </div>

    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mb-4">
      {project.technologies.slice(0, 5).map((tech) => (
        <span
          key={tech}
          className="text-xs font-mono bg-secondary text-secondary-foreground px-2 py-1 rounded"
        >
          {tech}
        </span>
      ))}
      {project.technologies.length > 5 && (
        <span className="text-xs font-mono text-muted-foreground">
          +{project.technologies.length - 5}
        </span>
      )}
    </div>

    <div className="flex flex-wrap gap-2">
      {project.domains.map((domain) => (
        <span
          key={domain}
          className="text-xs text-muted-foreground border border-border px-2 py-0.5 rounded-full"
        >
          {domain}
        </span>
      ))}
    </div>
    </motion.div>
  </Link>
);

const FeaturedProjects = () => {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Projets <span className="text-gradient">Phares</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#all-projects"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Voir tous les projets <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
