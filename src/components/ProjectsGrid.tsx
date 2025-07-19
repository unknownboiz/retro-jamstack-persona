import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Heart } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Retro Music Player",
    description: "A nostalgic music player with vinyl animations and retro UI elements",
    tech: ["React", "Three.js", "Framer Motion"],
    year: "2024",
    views: "1,337",
    likes: "69",
    color: "spacehey-pink",
    emoji: "🎵"
  },
  {
    id: 2,
    title: "CRT Terminal Chat",
    description: "Real-time chat app with authentic CRT monitor aesthetic and green phosphor glow",
    tech: ["Socket.io", "CSS3", "JavaScript"],
    year: "2024",
    views: "420",
    likes: "42",
    color: "crt-green",
    emoji: "💻"
  },
  {
    id: 3,
    title: "Pixel Art Gallery",
    description: "Interactive gallery showcasing 8-bit artwork with hover animations",
    tech: ["Vue.js", "Canvas API", "GSAP"],
    year: "2023",
    views: "888",
    likes: "77",
    color: "spacehey-purple",
    emoji: "🎨"
  },
  {
    id: 4,
    title: "Vaporwave Dashboard",
    description: "Analytics dashboard with synthwave aesthetics and neon data visualizations",
    tech: ["D3.js", "React", "Tailwind"],
    year: "2023",
    views: "666",
    likes: "55",
    color: "spacehey-blue",
    emoji: "📊"
  },
  {
    id: 5,
    title: "Glitch Text Generator",
    description: "Create glitchy text effects with customizable parameters and export options",
    tech: ["Canvas", "TypeScript", "CSS"],
    year: "2024",
    views: "1,001",
    likes: "101",
    color: "spacehey-yellow",
    emoji: "⚡"
  },
  {
    id: 6,
    title: "Matrix Rain Screensaver",
    description: "Browser-based Matrix-style digital rain with customizable characters",
    tech: ["WebGL", "GLSL", "JavaScript"],
    year: "2023",
    views: "1,999",
    likes: "199",
    color: "crt-green",
    emoji: "🟢"
  }
];

export const ProjectsGrid = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              MY PROJECTS
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of retro-inspired projects that blend nostalgia with modern technology ✨
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                rotateX: 5,
                rotateY: 5
              }}
              className="group perspective-1000"
            >
              <div className="retro-card h-full transform-gpu transition-all duration-300 group-hover:shadow-glow-pink">
                {/* Project header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{project.emoji}</span>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1 hover:text-spacehey-pink transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1 hover:text-spacehey-blue transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Project title and year */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg leading-tight">{project.title}</h3>
                  <span className="text-xs text-muted-foreground font-mono">{project.year}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs font-mono bg-${project.color}/20 text-${project.color} border border-${project.color}/30 rounded-none`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {project.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {project.views}
                    </span>
                  </div>
                  <motion.div
                    className={`w-3 h-3 rounded-full bg-${project.color}`}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-spacehey opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            className="spacehey-button text-lg px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects on GitHub →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};