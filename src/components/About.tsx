import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiCode, FiZap, FiHeart, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const stats = [
    { label: 'Months Experience', value: '6+', icon: FiTrendingUp, color: 'from-primary-500 to-accent-500' },
    { label: 'Projects Built', value: '7+', icon: FiCode, color: 'from-accent-500 to-primary-400' },
    { label: 'Tech Stack Items', value: '15+', icon: FiZap, color: 'from-primary-400 to-accent-400' },
    { label: 'Passion Level', value: '100%', icon: FiHeart, color: 'from-accent-400 to-primary-500' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </motion.div>

          {/* Description - Full Width */}
          <motion.div variants={itemVariants} className="mb-12">
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-2xl rounded-lg"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <div className="relative bg-bg-secondary/50 backdrop-blur-sm border border-border-primary rounded-lg p-8 group-hover:border-primary-500/50 transition-all duration-300">
                <motion.h3
                  className="text-2xl font-bold mb-6 text-center"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <span className="text-gradient">Junior Full Stack Developer</span>
                </motion.h3>
                <div className="grid md:grid-cols-3 gap-6 text-text-secondary leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 }}
                  >
                    Hey! I'm <span className="text-primary-400 font-semibold">Waqas Munir</span>,
                    a junior full-stack developer with <span className="text-accent-400 font-semibold">6+ months</span> of
                    hands-on experience building modern web applications. I live and breathe the{' '}
                    <span className="text-primary-400 font-semibold">TypeScript ecosystem</span>!
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    My playground? <span className="text-accent-400 font-semibold">MERN stack</span> (MongoDB, Express, React, Node.js),
                    supercharged with <span className="text-primary-400 font-semibold">Next.js</span> for the frontend
                    and <span className="text-accent-400 font-semibold">Nest.js</span> for robust backend architectures.
                    I turn coffee into clean, scalable code ☕➡️💻
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 }}
                  >
                    What drives me? <span className="text-primary-400 font-semibold">Pure passion</span> for software engineering
                    and an insatiable curiosity for exploring new technologies, languages, and frameworks.
                    Every project is a chance to learn something new and push boundaries! 🚀
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats - 4 Column Grid (Smaller Cards) */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onHoverStart={() => setHoveredStat(index)}
                  onHoverEnd={() => setHoveredStat(null)}
                  className="relative group cursor-pointer"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-lg blur-lg opacity-30 group-hover:opacity-60 transition-all duration-300`}
                    animate={{
                      scale: hoveredStat === index ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 1,
                      repeat: hoveredStat === index ? Infinity : 0,
                    }}
                  />
                  <div className="relative bg-bg-secondary/80 backdrop-blur-sm border border-border-primary rounded-lg p-4 text-center hover:border-primary-500/70 transition-all duration-300 overflow-hidden">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ delay: 0.4 + index * 0.1, type: 'spring', stiffness: 200 }}
                      className="flex justify-center mb-2"
                    >
                      <motion.div
                        animate={{
                          rotate: hoveredStat === index ? [0, 360] : 0,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                      >
                        <stat.icon className={`text-2xl bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
                      </motion.div>
                    </motion.div>

                    {/* Value */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                      className="text-3xl md:text-4xl font-bold text-gradient mb-1"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {stat.value}
                    </motion.div>

                    {/* Label */}
                    <div className="text-text-secondary text-xs md:text-sm font-medium">
                      {stat.label}
                    </div>

                    {/* Animated border on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredStat === index ? [0, 1, 0] : 0,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: hoveredStat === index ? Infinity : 0,
                      }}
                      style={{
                        background: `linear-gradient(90deg, transparent, rgb(var(--color-primary-500)), transparent)`,
                        backgroundSize: '200% 2px',
                        backgroundPosition: 'top',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What I'm Working With - Full Width */}
          <motion.div
            variants={itemVariants}
            className="relative group"
            whileHover={{ scale: 1.01 }}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <div className="relative bg-bg-secondary/80 backdrop-blur-sm border border-border-primary rounded-lg p-6 hover:border-primary-500/50 transition-all duration-300">
              <motion.h4
                className="text-xl font-bold mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="text-gradient">Currently Building</span>
              </motion.h4>
              <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-text-secondary">
                {[
                  'Full-stack web apps with MERN',
                  'Server-side rendered apps with Next.js',
                  'Scalable APIs with Nest.js',
                  'TypeScript-first architectures',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    className="flex items-start group/item"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      className="text-primary-400 mr-3 mt-1"
                      animate={{
                        rotate: [0, 90, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      ▹
                    </motion.span>
                    <span className="group-hover/item:text-primary-400 transition-colors duration-200 text-sm">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles for extra flair */}
      <motion.div
        className="absolute top-1/4 left-10 w-2 h-2 bg-primary-500/30 rounded-full blur-sm"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-20 w-3 h-3 bg-accent-500/30 rounded-full blur-sm"
        animate={{
          y: [0, 40, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
    </section>
  );
};

export default About;




