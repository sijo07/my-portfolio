import React from "react";
import { motion } from "framer-motion";
import { aboutData, educationData } from "../constants";
import { profile } from "../assets/index.js";
import { AnimatedBackground } from "../components";

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
          {[...Array(12)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-3 h-3 rounded-full bg-purple-400/40 blur-md"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ y: [0, -40, 0], opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* === Left Section === */}
      <div className="relative z-10 w-full md:w-[50%] flex flex-col justify-center items-start text-left space-y-6">
        <motion.h3
          className="text-purple-300 text-lg font-semibold uppercase tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h3>

        <motion.h2
          className="text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {aboutData.title}
        </motion.h2>

        <motion.p
          className="text-white-100 text-lg leading-relaxed max-w-[600px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          {aboutData.description}
        </motion.p>

        {/* === Education Section === */}
        <motion.div
          className="mt-6 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-purple-300 text-xl font-semibold">Education</h3>
          {educationData.map((edu, i) => (
            <div key={i} className="text-white">
              <p className="font-bold">{edu.degree}</p>
              <p className="text-sm font-semibold text-gray-400 lining-nums">
                {edu.institution}&nbsp;|&nbsp;{edu.year}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.a
          href={aboutData.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block md:inline-block mx-auto md:mx-0 bg-transparent border-2 border-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300 ease-in-out text-white text-lg font-semibold py-4 px-10 rounded-xl mt-8"
        >
          Resume
        </motion.a>
      </div>

      {/* === Right Section (Profile Image + Glowing Circles) === */}
      <motion.div
        className="relative z-10 w-full md:w-[50%] flex justify-center items-center mt-20 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Profile Image with purple glow */}
        <motion.img
          src={profile}
          alt="Profile photo"
          className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full object-cover shadow-[0_0_40px_rgba(168,85,247,0.5)]"
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
