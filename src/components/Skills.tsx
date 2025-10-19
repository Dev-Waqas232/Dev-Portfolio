import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiCode, FiLayers, FiServer, FiDatabase, FiTool } from 'react-icons/fi';
import { skillsData } from '../data/skills';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        type: 'spring',
        stiffness: 200,
      },
    },
  };

  // Category configuration with icons and gradients
  const categories = [
    {
      key: 'languages',
      title: 'Languages',
      icon: FiCode,
      gradient: 'from-primary-500 to-accent-500',
      skills: skillsData.languages,
    },
    {
      key: 'frontend',
      title: 'Frontend',
      icon: FiLayers,
      gradient: 'from-accent-500 to-primary-400',
      skills: skillsData.frontend,
    },
    {
      key: 'backend',
      title: 'Backend',
      icon: FiServer,
      gradient: 'from-primary-400 to-accent-400',
      skills: skillsData.backend,
    },
    {
      key: 'database',
      title: 'Database',
      icon: FiDatabase,
      gradient: 'from-accent-400 to-primary-500',
      skills: skillsData.database,
    },
    {
      key: 'tools',
      title: 'Tools & More',
      icon: FiTool,
      gradient: 'from-primary-500 to-accent-500',
      skills: skillsData.tools,
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={categoryVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Tech <span className="text-gradient">Stack</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto italic">
              Tools I use to build amazing things ✨
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.key}
                variants={categoryVariants}
                className="relative"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className={`p-3 bg-gradient-to-br ${category.gradient} rounded-lg shadow-lg`}
                  >
                    <category.icon className="text-bg-primary" size={24} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gradient" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {category.title}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-border-primary to-transparent" />
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      custom={skillIndex}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        rotate: [0, -2, 2, 0],
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group cursor-pointer"
                    >
                      {/* Glow Effect */}
                      <motion.div
                        className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-lg blur opacity-30`}
                        animate={{
                          opacity: hoveredSkill === skill ? [0.3, 0.6, 0.3] : 0.3,
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: hoveredSkill === skill ? Infinity : 0,
                        }}
                      />

                      {/* Tag */}
                      <div className="relative bg-bg-secondary/90 backdrop-blur-sm border border-border-primary rounded-lg px-5 py-3 hover:border-primary-500/70 transition-all duration-300 overflow-hidden">
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                          initial={false}
                        />
                        <span className="relative text-text-primary font-medium text-sm">
                          {skill}
                        </span>
                      </div>

                      {/* Floating particles on hover */}
                      {hoveredSkill === skill && (
                        <>
                          <motion.div
                            initial={{ opacity: 0, scale: 0, y: 0 }}
                            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], y: -20 }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className={`absolute top-0 left-1/4 w-1 h-1 bg-gradient-to-r ${category.gradient} rounded-full`}
                          />
                          <motion.div
                            initial={{ opacity: 0, scale: 0, y: 0 }}
                            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], y: -20 }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                            className={`absolute top-0 right-1/4 w-1 h-1 bg-gradient-to-r ${category.gradient} rounded-full`}
                          />
                        </>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Stack Highlight */}
          <motion.div
            variants={categoryVariants}
            className="mt-16"
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <div className="relative bg-bg-secondary/80 backdrop-blur-sm border border-border-primary rounded-lg p-8 hover:border-primary-500/50 transition-all duration-300">
                <p className="text-center text-text-secondary mb-6 text-sm uppercase tracking-wider">
                  ⚡ Current Main Stack
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  {['TypeScript', 'React', 'Next.js', 'Node.js', 'Nest.js', 'MongoDB', 'Tailwind CSS'].map((tech, i) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
                      whileHover={{
                        scale: 1.15,
                        y: -5,
                        rotate: [0, 5, -5, 0],
                      }}
                      className="px-6 py-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border-2 border-primary-500/50 rounded-full text-sm font-bold text-primary-300 cursor-pointer shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;




