import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';
import { FiGithub, FiExternalLink, FiFilter, FiX } from 'react-icons/fi';
import { projects } from '../data/projects';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Extract all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on selected technologies
  const filteredProjects = useMemo(() => {
    if (selectedTechs.length === 0) return projects;
    return projects.filter(project =>
      selectedTechs.some(tech => project.technologies.includes(tech))
    );
  }, [selectedTechs]);

  // Toggle technology filter
  const toggleTech = (tech: string) => {
    setSelectedTechs(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedTechs([]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Featured <span className="text-gradient">Work</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto italic">
              Projects I've built with passion 💚
            </p>
          </motion.div>

          {/* Filter Section */}
          <motion.div variants={itemVariants} className="mb-12">
            {/* Filter Toggle Button */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <motion.button
                  onClick={() => setShowFilters(!showFilters)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-bg-secondary/80 backdrop-blur-sm border border-border-primary rounded-lg hover:border-primary-500/50 transition-all duration-300"
                >
                  <FiFilter className="text-primary-400" size={18} />
                  <span className="text-text-primary font-medium">Filter by Tech</span>
                  <motion.span
                    animate={{ rotate: showFilters ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-text-secondary"
                  >
                    ▼
                  </motion.span>
                </motion.button>

                {/* Selected Count */}
                {selectedTechs.length > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm text-text-secondary">
                      {selectedTechs.length} selected
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={clearFilters}
                      className="p-1.5 bg-accent-500/20 text-accent-400 rounded-full hover:bg-accent-500/30 transition-colors"
                    >
                      <FiX size={14} />
                    </motion.button>
                  </motion.div>
                )}
              </div>

              {/* Results Count */}
              <div className="text-sm text-text-secondary">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
              </div>
            </div>

            {/* Filter Chips */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    exit={{ y: -20 }}
                    className="bg-bg-secondary/50 backdrop-blur-sm border border-border-primary rounded-lg p-6"
                  >
                    <div className="flex flex-wrap gap-3">
                      {allTechnologies.map((tech, index) => {
                        const isSelected = selectedTechs.includes(tech);
                        return (
                          <motion.button
                            key={tech}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: index * 0.03, type: 'spring' }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleTech(tech)}
                            className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                              isSelected
                                ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-bg-primary shadow-lg shadow-primary-500/30'
                                : 'bg-bg-tertiary text-text-secondary hover:text-text-primary hover:border-primary-500/30 border border-transparent'
                            }`}
                          >
                            {isSelected && (
                              <motion.div
                                layoutId={`selected-${tech}`}
                                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg"
                                initial={false}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                              />
                            )}
                            <span className="relative z-10">{tech}</span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Projects Grid with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTechs.join(',')} // Re-render on filter change
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group"
                >
                  {/* Enhanced Card Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Card */}
                  <div className="relative bg-bg-secondary/90 backdrop-blur-sm border border-border-primary rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 h-full flex flex-col">
                    {/* Project Image Placeholder with Enhanced Animation */}
                    <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 overflow-hidden group-hover:h-52 transition-all duration-300">
                      {project.imageUrl ? (
                        <motion.img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <motion.div
                            className="text-6xl font-bold text-gradient opacity-20"
                            style={{ fontFamily: "'Sora', sans-serif" }}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                          >
                            {index + 1}
                          </motion.div>
                        </div>
                      )}

                      {/* Featured Badge with Animation */}
                      {project.featured && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: index * 0.1, type: 'spring' }}
                          className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-accent-500 text-bg-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                        >
                          ⭐ Featured
                        </motion.div>
                      )}

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-bg-secondary/50 to-transparent opacity-80" />

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <motion.h3
                        className="text-xl font-bold text-text-primary mb-3 group-hover:text-gradient transition-all duration-300"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {project.title}
                      </motion.h3>

                      <p className="text-text-secondary text-sm mb-4 flex-grow leading-relaxed">
                        {project.longDescription || project.description}
                      </p>

                      {/* Technologies with Enhanced Style */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.05 + i * 0.05, type: 'spring' }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                              selectedTechs.includes(tech)
                                ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-bg-primary shadow-md'
                                : 'bg-primary-500/10 text-primary-300 border border-primary-500/20'
                            }`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs px-3 py-1.5 bg-bg-tertiary text-text-secondary rounded-full font-medium">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Links with Enhanced Animation */}
                      <div className="flex gap-4 pt-4 border-t border-border-primary">
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, x: 3 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-text-secondary hover:text-primary-400 transition-colors duration-300 group/link"
                          >
                            <FiGithub size={20} className="group-hover/link:animate-pulse" />
                            <span className="text-sm font-medium">Code</span>
                          </motion.a>
                        )}
                        {project.demoUrl && (
                          <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, x: 3 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-text-secondary hover:text-primary-400 transition-colors duration-300 group/link"
                          >
                            <FiExternalLink size={20} className="group-hover/link:animate-pulse" />
                            <span className="text-sm font-medium">Live</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl mb-4"
              >
                🔍
              </motion.div>
              <p className="text-text-secondary text-lg mb-2">No projects found with the selected filters</p>
              <p className="text-text-tertiary text-sm">Try selecting different technologies or clear filters</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;




