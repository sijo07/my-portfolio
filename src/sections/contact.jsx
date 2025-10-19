import { useRef } from "react";
import { motion } from "framer-motion";
import { AnimatedBackground } from "../components";

const Contact = () => {
  const animatedBgRef = useRef(null);

  // Variants for animations
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0 0 25px rgba(236,72,153,0.8)",
    transition: { duration: 0.3, ease: "easeOut" },
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden py-28 px-6"
    >
      {/* Animated Background */}
      <div
        ref={animatedBgRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      >
        <AnimatedBackground />
      </div>

      {/* Heading Section */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.p
          className="text-purple-300 font-medium uppercase tracking-widest text-lg sm:text-xl"
          variants={fadeUp}
        >
          Contact Me
        </motion.p>
        <motion.h1
          className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl mt-2 drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]"
          variants={fadeUp}
        >
          Get in Touch!
        </motion.h1>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="relative z-10 w-full max-w-2xl bg-black"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.form
          className="w-full flex flex-col gap-5"
          variants={containerVariants}
        >
          <motion.input
            type="text"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg border border-purple-400 bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            variants={fadeUp}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg border border-purple-400 bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            variants={fadeUp}
          />
          <motion.textarea
            placeholder="Your Message"
            required
            rows="5"
            className="p-3 rounded-lg border border-purple-400 bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none transition-all"
            variants={fadeUp}
          />
          <motion.button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg"
            whileHover={buttonHover}
            variants={fadeUp}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
