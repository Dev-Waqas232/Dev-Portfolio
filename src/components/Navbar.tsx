import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiUser, FiCode, FiBriefcase, FiMail } from 'react-icons/fi';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Navigation items with icons
  const navItems = [
    { name: 'Home', href: '#home', icon: FiHome },
    { name: 'About', href: '#about', icon: FiUser },
    { name: 'Skills', href: '#skills', icon: FiCode },
    { name: 'Projects', href: '#projects', icon: FiBriefcase },
    { name: 'Contact', href: '#contact', icon: FiMail },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Find the section that's currently in view
      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;

          if (scrollPosition >= elementTop) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
      {/* Vertical Navigation Bar */}
      <div className="flex flex-col gap-4 bg-bg-secondary/80 backdrop-blur-md rounded-xl p-3 border border-border-primary shadow-2xl">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.href.slice(1);

          return (
            <motion.button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
              title={item.name}
              aria-label={item.name}
            >
              {/* Icon Container */}
              <div className={`
                relative w-11 h-11 rounded-lg flex items-center justify-center
                transition-all duration-300
                ${isActive
                  ? 'bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg shadow-primary-500/50'
                  : 'bg-bg-tertiary hover:bg-bg-tertiary/80'
                }
              `}>
                <item.icon
                  className={`transition-colors duration-300 ${
                    isActive ? 'text-bg-primary' : 'text-primary-400'
                  }`}
                  size={20}
                />

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-primary-500/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </div>

              {/* Active indicator line */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -left-5 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-500 rounded-r-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}

              {/* Tooltip on hover */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
              >
                <span className="text-sm font-medium text-text-primary bg-bg-secondary/95 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary-500/30 shadow-lg">
                  {item.name}
                </span>
              </motion.div>
            </motion.button>
          );
        })}
      </div>

        {/* Decorative glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 blur-2xl -z-10 rounded-xl" />
      </motion.nav>
    </div>
  );
};

export default Navbar;




