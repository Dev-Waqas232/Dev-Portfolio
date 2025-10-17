import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillsData } from '../data/skills';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const levelColors: Record<string, string> = {
    beginner: 'from-primary-900 to-primary-800',
    intermediate: 'from-primary-700 to-primary-600',
    advanced: 'from-primary-600 to-primary-500',
    expert: 'from-primary-500 to-accent-500',
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={categoryVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={categoryVariants}
                className="relative group"
              >
                {/* Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card */}
                <div className="relative bg-bg-secondary/80 backdrop-blur-sm border border-border-primary rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300">
                  {/* Category Title */}
                  <h3 className="text-xl font-bold text-primary-400 mb-6 flex items-center">
                    <span className="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-pulse" />
                    {category.category}
                  </h3>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        custom={skillIndex}
                        whileHover={{ x: 5 }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-text-secondary font-medium text-sm">
                            {skill.name}
                          </span>
                          {skill.level && (
                            <span className="text-xs text-text-tertiary capitalize">
                              {skill.level}
                            </span>
                          )}
                        </div>

                        {/* Skill Level Bar */}
                        {skill.level && (
                          <div className="relative h-1.5 bg-bg-tertiary rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: getLevelWidth(skill.level) } : { width: 0 }}
                              transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                              className={`h-full bg-gradient-to-r ${levelColors[skill.level]} rounded-full`}
                            />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Highlights */}
          <motion.div
            variants={categoryVariants}
            className="mt-16 text-center"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg blur-xl" />
              <div className="relative bg-bg-secondary/80 backdrop-blur-sm border border-border-primary rounded-lg px-8 py-6">
                <p className="text-text-secondary mb-3">Professional Stack</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {['TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'Tailwind CSS'].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full text-sm font-medium text-primary-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper function to determine skill level width
const getLevelWidth = (level: string): string => {
  const levels: Record<string, string> = {
    beginner: '40%',
    intermediate: '60%',
    advanced: '80%',
    expert: '95%',
  };
  return levels[level] || '0%';
};

export default Skills;




