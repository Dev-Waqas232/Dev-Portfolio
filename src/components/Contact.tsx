import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "../data/contact";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission (opens email client)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const mailtoLink = `mailto:${
      contactInfo.email
    }?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    // Reset form
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

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

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
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
            ease: "easeInOut",
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
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto italic">
              Got a project in mind? Let's build something amazing together! 💬
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Column - Contact Form */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.01 }}
              >
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-2xl rounded-lg"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative bg-bg-secondary/90 backdrop-blur-sm border border-border-primary rounded-xl p-8 hover:border-primary-500/50 transition-all duration-300">
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <span className="text-gradient">Send a Message</span>
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Input */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text-primary mb-2"
                      >
                        Your Name
                      </label>
                      <div className="relative">
                        <FiUser
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
                          size={18}
                        />
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-bg-tertiary/50 border border-border-primary rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text-primary mb-2"
                      >
                        Your Email
                      </label>
                      <div className="relative">
                        <FiMail
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
                          size={18}
                        />
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-bg-tertiary/50 border border-border-primary rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-text-primary mb-2"
                      >
                        Your Message
                      </label>
                      <div className="relative">
                        <FiMessageSquare
                          className="absolute left-4 top-4 text-text-secondary"
                          size={18}
                        />
                        <motion.textarea
                          whileFocus={{ scale: 1.01 }}
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full pl-12 pr-4 py-3 bg-bg-tertiary/50 border border-border-primary rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 resize-none"
                          placeholder="Tell me about your project..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-bg-primary font-bold rounded-lg shadow-lg hover:shadow-primary-500/50 transition-all duration-300 ${
                        isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <FiSend size={20} />
                      {isSubmitting ? "Opening Email..." : "Send Message"}
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Quick Contact Options */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* WhatsApp Card - Featured */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-accent-500/30 to-primary-500/30 blur-xl rounded-xl"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl p-8 shadow-2xl overflow-hidden"
                >
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white rounded-full" />
                  </div>

                  <div className="relative flex items-center gap-6">
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl"
                    >
                      <FaWhatsapp className="text-white" size={40} />
                    </motion.div>
                    <div className="flex-1">
                      <h3
                        className="text-2xl font-bold text-white mb-2"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Chat on WhatsApp
                      </h3>
                      <p className="text-white/90 text-sm">
                        Quick response • Available now
                      </p>
                    </div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <span className="text-white text-3xl">→</span>
                    </motion.div>
                  </div>
                </motion.a>
              </motion.div>

              {/* Other Contact Methods */}
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-2xl rounded-lg"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative bg-bg-secondary/90 backdrop-blur-sm border border-border-primary rounded-xl p-6 space-y-4">
                  <h4 className="text-lg font-bold text-text-primary mb-4">
                    Or reach me via:
                  </h4>

                  {/* Email */}
                  <motion.a
                    href={`mailto:${contactInfo.email}`}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-bg-tertiary/50 rounded-lg border border-border-secondary hover:border-primary-500/50 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600">
                      <FiMail className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="text-text-primary font-medium group-hover:text-primary-400 transition-colors">
                        Email
                      </div>
                      <div className="text-text-secondary text-sm">
                        {contactInfo.email}
                      </div>
                    </div>
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-bg-tertiary/50 rounded-lg border border-border-secondary hover:border-primary-500/50 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700">
                      <FiLinkedin className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="text-text-primary font-medium group-hover:text-primary-400 transition-colors">
                        LinkedIn
                      </div>
                      <div className="text-text-secondary text-sm">
                        Let's connect professionally
                      </div>
                    </div>
                  </motion.a>

                  {/* GitHub */}
                  <motion.a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-bg-tertiary/50 rounded-lg border border-border-secondary hover:border-primary-500/50 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary-700 to-primary-800">
                      <FiGithub className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="text-text-primary font-medium group-hover:text-primary-400 transition-colors">
                        GitHub
                      </div>
                      <div className="text-text-secondary text-sm">
                        Check out my code
                      </div>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* Response Time Info */}
              <motion.div
                variants={itemVariants}
                className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 text-center"
              >
                <p className="text-text-secondary text-sm">
                  ⚡{" "}
                  <span className="text-primary-400 font-semibold">
                    Usually reply within 24 hours
                  </span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
