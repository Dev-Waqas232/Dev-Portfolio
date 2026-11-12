import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillGroups } from '../data/skills';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tech <span className="text-gradient">Stack</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </motion.div>

          <dl className="bg-bg-secondary/60 border border-border-primary rounded-xl divide-y divide-border-primary">
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                variants={fadeUp}
                className="md:grid md:grid-cols-[200px_1fr] md:gap-6 px-5 md:px-6 py-5"
              >
                <dt className="text-sm font-semibold text-text-primary mb-3 md:mb-0 md:pt-1">{group.title}</dt>
                <dd className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1 rounded-md bg-bg-tertiary text-primary-300 border border-border-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
