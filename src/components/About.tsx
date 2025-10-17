import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Happy Clients', value: '30+' },
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-2xl rounded-lg" />
                <div className="relative bg-bg-secondary/50 backdrop-blur-sm border border-border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary-400 mb-4">
                    Full Stack Developer & Software Engineer
                  </h3>
                  <div className="space-y-4 text-text-secondary leading-relaxed">
                    <p>
                      I'm a passionate full-stack developer with extensive experience in building
                      scalable web applications and elegant user interfaces. I specialize in modern
                      JavaScript/TypeScript ecosystems and love creating seamless digital experiences.
                    </p>
                    <p>
                      With expertise in React, Next.js, Node.js, and NestJS, I transform ideas into
                      production-ready applications. I'm constantly learning and adapting to new
                      technologies to deliver cutting-edge solutions.
                    </p>
                    <p>
                      I believe in writing clean, maintainable code and following best practices.
                      My goal is to build products that not only meet requirements but exceed
                      expectations in performance, scalability, and user experience.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative bg-bg-secondary/80 backdrop-blur-sm border border-border-primary rounded-lg p-6 text-center hover:border-primary-500/50 transition-colors duration-300">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                        className="text-4xl md:text-5xl font-bold text-gradient mb-2"
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-text-secondary text-sm font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                variants={itemVariants}
                className="mt-8 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg blur-xl" />
                <div className="relative bg-bg-secondary/80 backdrop-blur-sm border border-border-primary rounded-lg p-6">
                  <h4 className="text-xl font-bold text-primary-400 mb-3">What I Do</h4>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">▹</span>
                      <span>Full-stack web application development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">▹</span>
                      <span>RESTful API & GraphQL development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">▹</span>
                      <span>Database design and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">▹</span>
                      <span>Cloud deployment and DevOps</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;




