import React from "react";
import { motion } from "framer-motion";
import { aboutData, educationData, internshipData } from "../constants";
import { profile } from "../assets/index.js";
import { AnimatedBackground, AnimatedUnderline } from "../components";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row justify-between items-center px-10 lg:px-20 py-28 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-black/20 mix-blend-screen"></div>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => {
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            return (
              <motion.span
                key={`dot-${i}`}
                className="absolute w-3 h-3 rounded-full bg-purple-400/40 blur-md"
                style={{ top: `${top}%`, left: `${left}%` }}
                animate={{ y: [0, -40, 0], opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 3 + Math.random() * 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-start text-left space-y-6">
        <motion.h3
          className="text-purple-300 text-lg font-semibold uppercase tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
          <AnimatedUnderline />
        </motion.h3>

        <motion.h2
          className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {aboutData.title}
          <AnimatedUnderline width="w-32" height="h-2" duration={0.8} />
        </motion.h2>

        <motion.p
          className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-[600px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          {aboutData.description}
        </motion.p>

        <motion.div
          className="mt-6 w-full flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          <motion.div
            className="flex-1 space-y-4"
            variants={{ hidden: {}, visible: {} }}
          >
            <motion.h3
              className="text-purple-300 text-lg font-semibold uppercase tracking-widest"
              variants={fadeUp}
            >
              Education
              <AnimatedUnderline />
            </motion.h3>
            {educationData.map((edu, index) => (
              <motion.div
                key={`${edu.institution}-${index}`}
                className="text-white"
                variants={fadeUp}
              >
                <p className="font-bold text-lg">{edu.degree}</p>
                <p className="text-base font-semibold text-gray-400 lining-nums">
                  {edu.institution}&nbsp;&nbsp;
                  <span className="font-bold text-2xl">|</span>&nbsp;&nbsp;
                  {edu.year}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex-1 space-y-4"
            variants={{ hidden: {}, visible: {} }}
          >
            <motion.h3
              className="text-purple-300 text-lg font-semibold uppercase tracking-widest"
              variants={fadeUp}
            >
              Internship
              <AnimatedUnderline />
            </motion.h3>
            {internshipData.map((intern, index) => (
              <motion.div
                key={`${intern.company}-${index}`}
                className="text-white"
                variants={fadeUp}
              >
                <p className="font-bold text-lg">{intern.position}</p>
                <p className="text-base font-semibold text-gray-400 lining-nums">
                  {intern.company}&nbsp;&nbsp;
                  <span className="font-bold text-2xl">|</span>&nbsp;&nbsp;
                  {intern.period}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.a
          href={aboutData.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Resume"
          className="block md:inline-block mx-auto md:mx-0 bg-transparent border-2 border-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300 ease-in-out text-white text-lg font-semibold py-4 px-10 rounded-xl mt-6"
          variants={fadeUp}
        >
          Resume
        </motion.a>
      </div>

      <motion.div
        className="relative z-10 w-full md:w-1/2 flex justify-center items-center mt-16 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.img
          src={profile}
          alt="Profile photo"
          className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] rounded-full object-cover shadow-[0_0_40px_rgba(168,85,247,0.5)]"
          animate={{
            scale: [1, 1.03, 1],
            boxShadow: [
              "0 0 40px rgba(168,85,247,0.4)",
              "0 0 80px rgba(168,85,247,0.6)",
              "0 0 40px rgba(168,85,247,0.4)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default About;
