import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
  category: string;
  x: number;
  y: number;
  color: string;
  icon: string;
}

const categoryColors = {
  languages: "#8b5cf6",
  frameworks: "#06b6d4",
  database: "#3b82f6",
  ai: "#f59e0b",
  testing: "#14b8a6",
  security: "#f97316",
};

const allTechnologies: TechItem[] = [
  // Programming Languages
  { name: "C++", category: "languages", x: 0, y: 0, color: categoryColors.languages, icon: "⚡" },
  { name: "C", category: "languages", x: 0, y: 0, color: categoryColors.languages, icon: "🔵" },
  { name: "Python", category: "languages", x: 0, y: 0, color: categoryColors.languages, icon: "🐍" },
  { name: "Java", category: "languages", x: 0, y: 0, color: categoryColors.languages, icon: "☕" },
  { name: "SQL", category: "languages", x: 0, y: 0, color: categoryColors.languages, icon: "🗃️" },
  { name: "HTML", category: "languages", x: 0, y: 0, color: categoryColors.languages, icon: "🌐" },

  // Tools & Frameworks
  { name: "Git", category: "frameworks", x: 0, y: 0, color: categoryColors.frameworks, icon: "🌿" },
  { name: "GitHub", category: "frameworks", x: 0, y: 0, color: categoryColors.frameworks, icon: "🐙" },
  { name: "Jupyter", category: "frameworks", x: 0, y: 0, color: categoryColors.frameworks, icon: "📓" },
  { name: "VS Code", category: "frameworks", x: 0, y: 0, color: categoryColors.frameworks, icon: "💻" },

  // Database
  { name: "MySQL", category: "database", x: 0, y: 0, color: categoryColors.database, icon: "🐬" },

  // AI/ML
  { name: "NumPy", category: "ai", x: 0, y: 0, color: categoryColors.ai, icon: "🔢" },
  { name: "Pandas", category: "ai", x: 0, y: 0, color: categoryColors.ai, icon: "🐼" },
  { name: "Scikit-learn", category: "ai", x: 0, y: 0, color: categoryColors.ai, icon: "🤖" },
  { name: "RAG", category: "ai", x: 0, y: 0, color: categoryColors.ai, icon: "🔍" },
  { name: "LLM Agents", category: "ai", x: 0, y: 0, color: categoryColors.ai, icon: "🧠" },

  // Core CS
  { name: "DSA", category: "testing", x: 0, y: 0, color: categoryColors.testing, icon: "🧱" },
  { name: "OOPs", category: "testing", x: 0, y: 0, color: categoryColors.testing, icon: "🧩" },
  { name: "OS Basics", category: "testing", x: 0, y: 0, color: categoryColors.testing, icon: "🖥️" },
  { name: "Networking", category: "testing", x: 0, y: 0, color: categoryColors.testing, icon: "📡" },

  // Security
  { name: "Cyber Security", category: "security", x: 0, y: 0, color: categoryColors.security, icon: "🛡️" },
  { name: "Cryptography", category: "security", x: 0, y: 0, color: categoryColors.security, icon: "🔐" },
  { name: "Cipher/Decipher", category: "security", x: 0, y: 0, color: categoryColors.security, icon: "🔑" },
  { name: "Linux", category: "security", x: 0, y: 0, color: categoryColors.security, icon: "🐧" },
];

export const TechnologiesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [technologies, setTechnologies] = useState<TechItem[]>([]);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const initializePositions = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const positionedTechs = allTechnologies.map((tech, index) => {
        const angle = index * 137.5 * (Math.PI / 180);
        const radius = 50 + index * 12;

        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        return {
          ...tech,
          x: Math.max(60, Math.min(rect.width - 60, x)),
          y: Math.max(60, Math.min(rect.height - 60, y)),
        };
      });

      setTechnologies(positionedTechs);
    };

    initializePositions();
  }, []);

  const connections = useMemo(() => {
    const conns: Array<{ from: TechItem; to: TechItem }> = [];
    const maxConnections = 30;

    technologies.forEach((tech1, i) => {
      if (conns.length >= maxConnections) return;
      technologies.forEach((tech2, j) => {
        if (i >= j || conns.length >= maxConnections) return;
        if (tech1.category === tech2.category) {
          const distance = Math.sqrt(Math.pow(tech1.x - tech2.x, 2) + Math.pow(tech1.y - tech2.y, 2));
          if (distance < 180) {
            conns.push({ from: tech1, to: tech2 });
          }
        }
      });
    });

    return conns;
  }, [technologies]);

  const handleHover = useCallback((name: string | null) => {
    setHoveredTech(name);
  }, []);

  return (
    <section id="technologies" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-center">
            Technologies & <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center mb-12">
            An interactive showcase of my technical expertise. Hover and filter to explore.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.entries(categoryColors).map(([category, color]) => (
              <motion.button
                key={category}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category ? "text-white shadow-lg" : "text-muted-foreground hover:text-white"
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? color : "rgba(255,255,255,0.08)",
                  border: `2px solid ${color}`,
                  boxShadow: selectedCategory === category ? `0 8px 24px ${color}40` : "none",
                }}
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Technologies Grid */}
          <div
            ref={containerRef}
            className="relative w-full h-[600px] md:h-[700px] glass rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl backdrop-blur-xl"
          >
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {connections.map((connection, index) => {
                const isHighlighted =
                  hoveredTech === connection.from.name ||
                  hoveredTech === connection.to.name ||
                  (selectedCategory &&
                    (connection.from.category === selectedCategory || connection.to.category === selectedCategory));

                return (
                  <line
                    key={index}
                    x1={connection.from.x}
                    y1={connection.from.y}
                    x2={connection.to.x}
                    y2={connection.to.y}
                    stroke={isHighlighted ? connection.from.color : "rgba(255,255,255,0.1)"}
                    strokeWidth={isHighlighted ? 2 : 1}
                    opacity={isHighlighted ? 0.6 : 0.3}
                  />
                );
              })}
            </svg>

            {/* Technology nodes */}
            {technologies.map((tech) => {
              const isHighlighted = hoveredTech === tech.name || (selectedCategory && tech.category === selectedCategory);
              const isFiltered = selectedCategory && tech.category !== selectedCategory;

              return (
                <motion.div
                  key={tech.name}
                  className="absolute cursor-pointer group"
                  style={{
                    left: tech.x,
                    top: tech.y,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: isFiltered ? 0.25 : 1,
                    scale: isHighlighted ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                  onMouseEnter={() => handleHover(tech.name)}
                  onMouseLeave={() => handleHover(null)}
                  whileHover={{ scale: 1.25, rotate: 360 }}
                >
                  {isHighlighted && (
                    <motion.div
                      className="absolute inset-0 rounded-full blur-xl"
                      style={{ backgroundColor: tech.color, opacity: 0.5 }}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}

                  <div
                    className="relative w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-2xl border-2 backdrop-blur-sm transition-all duration-300"
                    style={{
                      backgroundColor: `${tech.color}25`,
                      borderColor: tech.color,
                      boxShadow: isHighlighted ? `0 0 30px ${tech.color}60, 0 0 60px ${tech.color}30` : `0 0 20px ${tech.color}30`,
                    }}
                  >
                    <span className="transition-transform duration-300 group-hover:scale-110">{tech.icon}</span>
                  </div>

                  {isHighlighted && (
                    <div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium border whitespace-nowrap"
                      style={{ borderColor: tech.color }}
                    >
                      {tech.name}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {Object.entries(categoryColors).map(([category, color]) => {
              const count = allTechnologies.filter((tech) => tech.category === category).length;
              return (
                <motion.div
                  key={category}
                  className="text-center p-5 rounded-xl glass border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05, y: -4 }}
                  style={{ boxShadow: `0 4px 20px ${color}15` }}
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                >
                  <div className="text-3xl font-bold mb-1" style={{ color }}>{count}</div>
                  <div className="text-xs text-muted-foreground capitalize font-medium">{category}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};