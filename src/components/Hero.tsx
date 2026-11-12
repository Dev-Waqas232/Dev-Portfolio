import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "../data/contact";

const NAME = "Waqas Munir";

const Hero = () => {
  const socialLinks = [
    { icon: FiGithub, href: contactInfo.github, label: "GitHub" },
    { icon: FiLinkedin, href: contactInfo.linkedin, label: "LinkedIn" },
    { icon: FiMail, href: `mailto:${contactInfo.email}`, label: "Email" },
    { icon: FaWhatsapp, href: contactInfo.whatsapp, label: "WhatsApp" },
  ];

  let letterIndex = 0;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Static ambient background (no infinite animations) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 text-sm md:text-lg text-primary-400/80 font-light italic tracking-wide"
          >
            hey, i&apos;m
          </motion.p>

          {/* Name: words never break mid-word */}
          <h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-6 tracking-tight"
            style={{ fontFamily: "'Sora', sans-serif" }}
            aria-label={NAME}
          >
            {NAME.split(" ").map((word, w) => (
              <span key={word} className="inline-block whitespace-nowrap" aria-hidden="true">
                {word.split("").map((letter) => {
                  const i = letterIndex++;
                  return (
                    <motion.span
                      key={i}
                      initial={{ y: -60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 150, damping: 14, delay: 0.15 + i * 0.04 }}
                      className="text-gradient inline-block"
                    >
                      {letter}
                    </motion.span>
                  );
                })}
                {w < NAME.split(" ").length - 1 && <span className="inline-block w-3 md:w-6" />}
              </span>
            ))}
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-3xl font-light text-text-primary mb-6 uppercase tracking-[0.3em]"
          >
            Software Engineer
          </motion.h2>

          {/* Pitch */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="text-base md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Full-stack engineer building AI-powered products and the infrastructure behind them.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-bg-primary font-bold rounded-xl hover:shadow-lg hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              View My Work →
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-primary-500 text-primary-400 font-bold rounded-xl hover:bg-primary-500/15 hover:-translate-y-0.5 transition-all duration-300"
            >
              Let&apos;s Talk
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group p-4 bg-bg-tertiary/50 border border-border-primary rounded-xl hover:border-primary-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                <social.icon
                  className="text-text-secondary group-hover:text-primary-400 transition-colors duration-300"
                  size={22}
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
