import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiCode, FiZap, FiCpu, FiDatabase, FiLayers, FiTerminal, FiGlobe, FiBox } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { contactInfo } from '../data/contact';

const Hero = () => {
  const socialLinks = [
    { icon: FiGithub, href: contactInfo.github, label: 'GitHub' },
    { icon: FiLinkedin, href: contactInfo.linkedin, label: 'LinkedIn' },
    { icon: FiMail, href: `mailto:${contactInfo.email}`, label: 'Email' },
    { icon: FaWhatsapp, href: contactInfo.whatsapp, label: 'WhatsApp' },
  ];

  // More floating particles scattered across the screen
  const floatingIcons = [
    { icon: FiCode, delay: 0, duration: 4, position: 'top-1/4 right-1/3', size: 40 },
    { icon: FiZap, delay: 1, duration: 5, position: 'bottom-1/3 left-1/4', size: 35 },
    { icon: FiCpu, delay: 0.5, duration: 6, position: 'top-1/3 left-1/5', size: 38 },
    { icon: FiDatabase, delay: 1.5, duration: 5.5, position: 'top-2/3 right-1/4', size: 32 },
    { icon: FiLayers, delay: 2, duration: 4.5, position: 'bottom-1/4 right-1/5', size: 36 },
    { icon: FiTerminal, delay: 0.8, duration: 5.2, position: 'top-1/2 left-1/6', size: 34 },
    { icon: FiGlobe, delay: 1.2, duration: 4.8, position: 'bottom-1/2 right-1/6', size: 40 },
    { icon: FiBox, delay: 1.8, duration: 5.8, position: 'top-3/4 left-1/3', size: 30 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main background blobs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
        />

        {/* Additional floating orbs */}
        <motion.div
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary-400/5 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 80, 0],
            x: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-accent-400/5 rounded-full blur-2xl"
        />

        {/* Scattered floating icon particles */}
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.08, 0.25, 0.08],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: item.delay,
            }}
            className={`absolute ${item.position} hidden md:block`}
          >
            <item.icon className="text-primary-400/15" size={item.size} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Greeting - friendly and professional */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mb-8"
          >
            <motion.span
              className="text-sm md:text-lg text-primary-400/80 font-light italic tracking-wide"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              hey, i'm
            </motion.span>
          </motion.div>

          {/* Name with letter-by-letter falling animation */}
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-6 relative tracking-tight"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            {'Waqas Munir'.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: -100, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 12,
                  delay: 0.2 + index * 0.05,
                }}
                className={`text-gradient inline-block ${letter === ' ' ? 'w-3 md:w-4' : ''}`}
                style={{
                  backgroundSize: '200% auto',
                  textShadow: '0 0 40px rgba(20, 184, 166, 0.3)',
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Role - Software Engineer */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-3xl lg:text-4xl font-light text-text-primary mb-3 tracking-widest uppercase"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: '0.3em'
            }}
          >
            Software Engineer
          </motion.h2>

          {/* Divider line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '200px', opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mb-12"
          />

          {/* CTA Buttons with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-500 text-bg-primary font-bold rounded-xl shadow-2xl hover:shadow-primary-500/60 transition-all duration-300 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-10 py-5 border-2 border-primary-500 text-primary-400 font-bold rounded-xl hover:bg-primary-500/20 transition-all duration-300 group overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10">Let's Talk</span>
            </motion.a>
          </motion.div>

          {/* Social Links with enhanced style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.3 + index * 0.1,
                  type: 'spring',
                  stiffness: 200
                }}
                whileHover={{
                  scale: 1.2,
                  y: -8,
                  rotate: [0, -10, 10, 0],
                }}
                whileTap={{ scale: 0.9 }}
                className="group relative p-4 bg-bg-tertiary/50 backdrop-blur-sm border border-border-primary rounded-xl hover:border-primary-500/50 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon
                  className="text-text-secondary group-hover:text-primary-400 transition-colors duration-300"
                  size={24}
                />
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-primary-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




