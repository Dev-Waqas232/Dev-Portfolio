import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '../data/experience';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Section Title */}
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </motion.div>

          {/* Timeline */}
          <ol>
            {experience.map((job, i) => {
              const isCurrent = !job.end;
              const isLast = i === experience.length - 1;
              const dates = `${job.start} – ${job.end ?? 'Present'}`;

              return (
                <motion.li
                  key={`${job.company}-${job.start}`}
                  variants={fadeUp}
                  className="md:grid md:grid-cols-[170px_1fr] md:gap-x-8"
                >
                  {/* Date column (desktop) */}
                  <div className="hidden md:block text-right pt-6">
                    <p className="text-sm font-medium text-text-primary">{dates}</p>
                    {isCurrent && (
                      <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-primary-500/15 text-primary-300 border border-primary-500/30">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Line + card */}
                  <div className={`relative pl-8 ${isLast ? '' : 'pb-8'}`}>
                    {/* Vertical line */}
                    <span
                      className={`absolute left-0 top-0 w-px bg-border-secondary ${isLast ? 'h-8' : 'h-full'}`}
                      aria-hidden="true"
                    />
                    {/* Dot */}
                    <span
                      className={`absolute left-0 top-7 -translate-x-1/2 w-3 h-3 rounded-full ring-4 ring-bg-primary ${
                        isCurrent ? 'bg-primary-400 shadow-[0_0_12px_rgb(var(--color-primary-400))]' : 'bg-border-secondary'
                      }`}
                      aria-hidden="true"
                    />

                    <article className="bg-bg-secondary/60 border border-border-primary rounded-xl p-5 md:p-6 hover:border-primary-500/40 transition-colors duration-300">
                      {/* Date (mobile) */}
                      <div className="md:hidden flex items-center gap-2 mb-2">
                        <p className="text-xs font-medium text-text-tertiary">{dates}</p>
                        {isCurrent && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary-500/15 text-primary-300 border border-primary-500/30">
                            Current
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg md:text-xl font-semibold text-text-primary">{job.role}</h3>
                      <p className="text-primary-400 font-medium mb-4">
                        {job.company}
                        {job.product && (
                          <>
                            <span className="text-text-tertiary/60"> · </span>
                            <a
                              href={job.product.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-text-primary underline decoration-primary-500/50 underline-offset-4 hover:decoration-primary-400"
                            >
                              {job.product.name} ↗
                            </a>
                          </>
                        )}
                      </p>

                      <ul className="space-y-2 mb-5">
                        {job.highlights.map((point) => {
                          const h = typeof point === 'string' ? { text: point } : point;
                          return (
                            <li key={h.text} className="flex gap-3 text-sm md:text-[15px] text-text-secondary leading-relaxed">
                              <span className="text-primary-400 mt-0.5" aria-hidden="true">▹</span>
                              <span>
                                {'project' in h && (
                                  <>
                                    {h.url ? (
                                      <a
                                        href={h.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-text-primary underline decoration-primary-500/50 underline-offset-4 hover:decoration-primary-400"
                                      >
                                        {h.project} ↗
                                      </a>
                                    ) : (
                                      <span className="font-semibold text-text-primary">{h.project}</span>
                                    )}
                                    <span className="text-text-tertiary/60"> · </span>
                                  </>
                                )}
                                {h.text}
                              </span>
                            </li>
                          );
                        })}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {job.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-1 rounded-md bg-bg-tertiary text-primary-300 border border-border-secondary"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </article>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
