import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiLayers, FiCpu, FiServer, FiZap } from 'react-icons/fi';

const quickFacts = [
  { label: 'Current role', value: 'Associate Software Engineer, OptimaGeeks' },
  { label: 'Experience', value: '2+ years' },
  { label: 'Focus', value: 'Full-stack & AI systems' },
  { label: 'Based in', value: 'Lahore, Pakistan' },
  { label: 'Education', value: 'BSCS, University of Agriculture (CGPA 3.69)' },
];

const focusAreas = [
  {
    icon: FiLayers,
    title: 'Full-Stack Engineering',
    text: 'Scalable web apps and type-safe APIs, from clinical platforms to SaaS products.',
    tags: ['React', 'Next.js', 'NestJS', 'PostgreSQL'],
  },
  {
    icon: FiCpu,
    title: 'AI Systems & RAG',
    text: 'LLM-powered automation: request classification, context-aware responses and retrieval-augmented generation.',
    tags: ['LangChain', 'LangGraph', 'FastAPI', 'RAG'],
  },
  {
    icon: FiServer,
    title: 'DevOps & Delivery',
    text: 'I ship what I build: CI/CD pipelines, Linux VPS administration and Nginx deployments.',
    tags: ['CI/CD', 'Linux', 'Nginx'],
  },
  {
    icon: FiZap,
    title: 'AI-Native Engineering',
    text: 'Building with AI coding agents like Claude Code to go from idea to production faster.',
    tags: ['Claude Code', 'AI Agents'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Section Title */}
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </motion.div>

          {/* Bio + Quick Facts */}
          <div className="grid lg:grid-cols-5 gap-10 mb-14">
            <motion.div variants={fadeUp} className="lg:col-span-3 space-y-5 text-text-secondary text-lg leading-relaxed">
              <p>
                I'm <span className="text-text-primary font-semibold">Waqas Munir</span>, an Associate Software
                Engineer with <span className="text-text-primary font-semibold">2+ years</span> of experience
                building full-stack products with React, Next.js, NestJS, TypeScript and PostgreSQL.
              </p>
              <p>
                Lately my work centers on <span className="text-primary-400 font-semibold">AI-powered systems</span>,
                including LLM integrations, RAG and AI automation. I also handle the{' '}
                <span className="text-primary-400 font-semibold">DevOps</span> side: building{' '}
                <span className="text-primary-400 font-semibold">CI/CD pipelines</span>, administering{' '}
                <span className="text-primary-400 font-semibold">Linux servers</span> and deploying with{' '}
                <span className="text-primary-400 font-semibold">Nginx</span>.
              </p>
              <p>
                What keeps me going is a genuine <span className="text-primary-400 font-semibold">love for learning</span>.
                I enjoy exploring new technologies and ideas in software engineering, and these days that
                includes building alongside AI coding tools.
              </p>
            </motion.div>

            <motion.dl
              variants={fadeUp}
              className="lg:col-span-2 bg-bg-secondary/60 border border-border-primary rounded-xl p-6 divide-y divide-border-primary self-start"
            >
              {quickFacts.map((fact) => (
                <div key={fact.label} className="py-3 first:pt-0 last:pb-0">
                  <dt className="text-xs uppercase tracking-wider text-text-tertiary/70 mb-1">{fact.label}</dt>
                  <dd className="text-text-primary font-medium">{fact.value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Focus Areas */}
          <motion.h3 variants={fadeUp} className="text-xl font-semibold mb-6 text-text-primary">
            What I work on
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {focusAreas.map((area) => (
              <motion.div
                key={area.title}
                variants={fadeUp}
                className="flex flex-col bg-bg-secondary/60 border border-border-primary rounded-xl p-5 hover:border-primary-500/50 transition-colors duration-300"
              >
                <area.icon className="text-primary-400 mb-3" size={24} />
                <h4 className="font-semibold text-text-primary mb-2">{area.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{area.text}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-bg-tertiary text-primary-300 border border-border-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
