import React from "react";
import { motion } from "framer-motion";
import { profile } from "../assets";
import AboutMotion from "./animation/AboutMotion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row justify-between items-center px-10 lg:px-20 py-28 overflow-hidden bg-gradient-to-b from-[#050011] via-[#090016] to-[#0a0018]"
    >
      {/* === Layered Background Animations === */}
      <div className="absolute inset-0 z-0">
        <AboutMotion />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10 mix-blend-screen"></div>

        {/* Floating glow particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-3 h-3 rounded-full bg-purple-400/40 blur-md"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            ></motion.span>
          ))}
        </div>
      </div>

      {/* === Left Section (Information) === */}
      <div className="relative z-10 w-full md:w-[50%] flex flex-col justify-center items-start text-left space-y-6">
        <motion.h3
          className="text-purple-400 text-lg font-semibold uppercase tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h3>

        <motion.h2
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 text-5xl sm:text-6xl lg:text-7xl font-extrabold drop-shadow-[0_0_20px_rgba(168,85,247,0.7)] leading-tight"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
         Web Developer
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg leading-relaxed max-w-[600px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          I’m a developer who blends creativity with logic — crafting
          interactive digital experiences that feel alive. I love building
          responsive and efficient web applications, from stunning front-end
          designs to robust back-end systems. My mission: turn complex ideas
          into intuitive, engaging interfaces.
        </motion.p>

        {/* Skills / Tech icons */}
        <motion.div
          className="flex flex-wrap justify-start md:justify-start gap-6 text-4xl mt-4 sm:mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase].map(
            (Icon, i) => (
              <motion.div
                key={i}
                className="text-purple-400 hover:text-pink-500 transition-colors duration-300"
                whileHover={{ scale: 1.4, rotate: 15 }}
              >
                <Icon />
              </motion.div>
            )
          )}
        </motion.div>

        <motion.a
          href="https://drive.google.com/file/d/1YJ3Yk1bXKXJ3F2q8KX9zZL5x6YzZl5yW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="block md:inline-block mx-auto md:mx-0 bg-gradient-to-r from-purple-700 to-violet-600 hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] transition-all duration-300 ease-in-out text-white text-lg font-semibold py-4 px-10 rounded-xl mt-8"
        >
          Resume
        </motion.a>
      </div>

      <motion.div
        className="relative z-10 w-full md:w-[50%] flex justify-center items-center mt-20 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Wavy Circle Border */}
        <svg
          className="absolute w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] -z-10"
          viewBox="0 0 200 200"
        >
          <motion.path
            d="M100,10 C140,10 190,50 190,100 C190,150 140,190 100,190 C60,190 10,150 10,100 C10,50 60,10 100,10 Z"
            fill="transparent"
            stroke="url(#grad)"
            strokeWidth="4"
            strokeDasharray="628"
            strokeDashoffset="628"
            animate={{
              d: [
                "M100,10 C140,10 190,50 190,100 C190,150 140,190 100,190 C60,190 10,150 10,100 C10,50 60,10 100,10 Z",
                "M100,10 C150,20 180,60 190,100 C180,140 150,180 100,190 C50,180 20,140 10,100 C20,60 50,20 100,10 Z",
                "M100,10 C140,10 190,50 190,100 C190,150 140,190 100,190 C60,190 10,150 10,100 C10,50 60,10 100,10 Z",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Rotating Glow Circles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full border-2 border-purple-700 shadow-[0_0_60px_rgba(168,85,247,0.5)] sm:shadow-[0_0_80px_rgba(168,85,247,0.5)] -z-5"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 40px rgba(168,85,247,0.5)",
                "0 0 100px rgba(236,72,153,0.7)",
                "0 0 40px rgba(168,85,247,0.5)",
              ],
              borderRadius: ["50%", "48%", "50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3, // staggered rotation
            }}
          />
        ))}

        {/* Profile Image */}
        <motion.img
          src={profile}
          alt="Profile photo"
          className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full object-cover"
          animate={{
            scale: [1, 1.03, 1],
            boxShadow: [
              "0 0 30px rgba(168,85,247,0.4)",
              "0 0 80px rgba(236,72,153,0.6)",
              "0 0 30px rgba(168,85,247,0.4)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default About;
