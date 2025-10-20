import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "../constants";
import { AnimatedBackground, AnimatedUnderline } from "../components";

gsap.registerPlugin(ScrollTrigger);

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 85%",
        },
      }
    );
  });

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-start justify-start gap-12 px-6 lg:px-24 py-20 bg-black overflow-hidden"
    >
      {/* Animated Background */}
      <AnimatedBackground className="absolute inset-0 -z-10" />

      {/* Section Title */}
      <motion.div
        className="z-10 w-full text-left text-purple-300 mt-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-lg font-semibold uppercase tracking-widest mb-6">
          Tech Stack
          <AnimatedUnderline />
        </h3>
      </motion.div>

      {/* Skills Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          className="z-10 w-full grid gap-6 grid-cols-3 md:grid-cols-5 lg:grid-cols-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="tech-card flex flex-col items-center justify-center bg-gray-900 hover:bg-gray-800 transition-all duration-300 w-24 h-44 lg:w-24 lg:h-44 md:w-32 md:h-60 rounded-2xl shadow-lg p-4 cursor-pointer"
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 250 },
              }}
              variants={itemVariants}
            >
              <motion.img
                src={skill.path}
                alt={skill.name}
                className="w-10 h-10 sm:w-16 sm:h-16 object-contain mb-4"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <p className="text-white font-semibold text-xs sm:text-sm text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;
