import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "../data/contact";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const contactMethods = [
    {
      icon: FiMail,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: "from-primary-600 to-primary-700",
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "github.com",
      href: contactInfo.github,
      color: "from-primary-700 to-primary-800",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "linkedin.com",
      href: contactInfo.linkedin,
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: contactInfo.whatsapp,
      color: "from-accent-500 to-accent-600",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
        />
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left Column - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-2xl rounded-lg" />
                <div className="relative bg-bg-secondary/80 backdrop-blur-sm border border-border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-6">
                    Let's work together!
                  </h3>
                  <p className="text-text-secondary mb-8">
                    Feel free to reach out through any of these platforms. I'll
                    get back to you as soon as possible!
                  </p>

                  {/* Contact Methods */}
                  <div className="space-y-4">
                    {contactMethods.map((method) => (
                      <motion.a
                        key={method.label}
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        whileHover={{ x: 10, scale: 1.02 }}
                        className="flex items-center gap-4 p-4 bg-bg-tertiary/50 rounded-lg border border-border-secondary hover:border-primary-500/50 transition-all duration-300 group"
                      >
                        <div
                          className={`p-3 rounded-lg bg-gradient-to-br ${method.color}`}
                        >
                          <method.icon
                            className="text-text-primary"
                            size={24}
                          />
                        </div>
                        <div>
                          <div className="text-text-primary font-medium group-hover:text-gradient transition-all duration-300">
                            {method.label}
                          </div>
                          <div className="text-text-secondary text-sm">
                            {method.value}
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - CTA */}
            <motion.div variants={itemVariants} className="flex items-center">
              <div className="relative w-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-2xl rounded-lg" />
                <div className="relative bg-bg-secondary/80 backdrop-blur-sm border border-border-primary rounded-lg p-8">
                  <div className="text-center space-y-6">
                    <div className="inline-block p-4 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full">
                      <FiSend className="text-primary-400" size={48} />
                    </div>

                    <h3 className="text-2xl font-bold text-text-primary">
                      Start a Conversation
                    </h3>

                    <p className="text-text-secondary">
                      Whether you have a question, want to discuss a project, or
                      just want to say hi, my inbox is always open.
                    </p>

                    <motion.a
                      href={`mailto:${contactInfo.email}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-text-primary font-semibold rounded-lg shadow-lg hover:shadow-primary-500/50 transition-shadow duration-300"
                    >
                      <FiMail size={20} />
                      Send Email
                    </motion.a>

                    {/* Additional Info */}
                    <div className="pt-6 border-t border-border-primary">
                      <p className="text-text-tertiary text-sm">
                        Response time: Usually within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 blur-xl rounded-lg" />
              <blockquote className="relative text-text-secondary italic text-lg px-8 py-4">
                "The best way to predict the future is to create it."
              </blockquote>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
