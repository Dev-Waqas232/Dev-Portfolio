import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiX, FiLock } from 'react-icons/fi';
import { projects } from '../data/projects';
import { CaseStudy } from '../types';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Tag = ({ children }: { children: string }) => (
  <span className="text-xs px-2 py-1 rounded-md bg-bg-tertiary text-primary-300 border border-border-secondary">
    {children}
  </span>
);

const LiveLink = ({ url, className = '' }: { url: string; className?: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-1 text-sm font-medium text-text-primary hover:text-primary-300 transition-colors ${className}`}
  >
    Live site <FiArrowUpRight size={16} />
  </a>
);

/* ---------- Case study modal ---------- */

const CaseStudyModal = ({ project, onClose }: { project: CaseStudy; onClose: () => void }) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const facts = [
    { label: 'Role', value: project.role },
    { label: 'Company', value: project.company },
    ...(project.client ? [{ label: 'Client', value: project.client }] : []),
    ...(project.status ? [{ label: 'Status', value: project.status }] : []),
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end md:items-center justify-center bg-black/70 backdrop-blur-sm md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${project.id}-title`}
        className="relative w-full md:max-w-3xl max-h-[92vh] overflow-y-auto bg-bg-secondary border border-border-secondary rounded-t-2xl md:rounded-2xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 bg-bg-secondary/95 backdrop-blur-sm border-b border-border-primary px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-wider text-primary-400 mb-1">{project.category}</p>
            <h3 id={`${project.id}-title`} className="text-2xl font-bold text-text-primary">
              {project.title}
            </h3>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close case study"
            className="shrink-0 p-2 rounded-lg bg-bg-tertiary text-text-secondary hover:text-text-primary transition-colors"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="px-6 py-6 space-y-8">
          <p className="text-lg text-text-secondary leading-relaxed">{project.summary}</p>

          {/* Facts */}
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-xs uppercase tracking-wider text-text-tertiary/70 mb-1">{f.label}</dt>
                <dd className="text-sm font-medium text-text-primary">{f.value}</dd>
              </div>
            ))}
          </dl>

          {/* Key results */}
          <div className="flex flex-wrap gap-2">
            {project.metrics.map((m) => (
              <span
                key={m}
                className="text-sm px-3 py-1.5 rounded-lg bg-primary-500/10 text-primary-300 border border-primary-500/25"
              >
                {m}
              </span>
            ))}
          </div>

          <section>
            <h4 className="text-sm uppercase tracking-wider text-text-tertiary/70 mb-3">What I built</h4>
            <ul className="space-y-3">
              {project.built.map((b) => (
                <li key={b} className="flex gap-3 text-text-secondary leading-relaxed">
                  <span className="text-primary-400 mt-0.5" aria-hidden="true">▹</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="text-sm uppercase tracking-wider text-text-tertiary/70 mb-3">Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </section>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-bg-primary font-semibold"
            >
              Visit live site <FiArrowUpRight size={18} />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ---------- Section ---------- */

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {/* Section Title */}
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Selected <span className="text-gradient">Work</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4" />
            <p className="text-text-secondary max-w-2xl mx-auto">
              Production systems I&apos;ve built for clients. Open any project for the full case study.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((p) => (
              <motion.article
                key={p.id}
                variants={fadeUp}
                className="group flex flex-col bg-bg-secondary/60 border border-border-primary rounded-xl p-6 hover:border-primary-500/50 transition-colors duration-300"
              >
                {p.imageUrl && (
                  <img
                    src={p.imageUrl}
                    alt={`${p.title} screenshot`}
                    loading="lazy"
                    className="mb-5 rounded-lg border border-border-primary aspect-[16/9] object-cover object-top"
                  />
                )}

                <div className="flex items-center justify-between gap-3 mb-3">
                  <p className="text-xs uppercase tracking-wider text-primary-400">{p.category}</p>
                  {p.status && (
                    <span className="shrink-0 inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-bg-tertiary text-text-tertiary border border-border-secondary">
                      {p.status === 'Private' && <FiLock size={10} />}
                      {p.status}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-text-primary mb-1">{p.title}</h3>
                <p className="text-xs text-text-tertiary/80 mb-3">
                  {p.role} · {p.company}
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">{p.summary}</p>

                <ul className="flex flex-wrap gap-2 mb-5">
                  {p.metrics.map((m) => (
                    <li
                      key={m}
                      className="text-xs px-2.5 py-1 rounded-md bg-primary-500/10 text-primary-300 border border-primary-500/25"
                    >
                      {m}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.slice(0, 5).map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                  {p.tech.length > 5 && (
                    <span className="text-xs px-2 py-1 text-text-tertiary/70">+{p.tech.length - 5} more</span>
                  )}
                </div>

                <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-border-primary">
                  <button
                    onClick={() => setActive(p)}
                    className="text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    Read case study →
                  </button>
                  {p.url && <LiveLink url={p.url} />}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && <CaseStudyModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
