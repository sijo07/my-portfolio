import React from "react";
import { skillsData } from "../constants";
import { AnimatedBackground } from "../components";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-[#dfd9ff] px-6 py-20"
    >
      <h1 className="text-5xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
        Skills
      </h1>

      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {skillsData.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="text-lg font-semibold mb-2">{skill.name}</span>
            <div className="w-full bg-gray-800 rounded-full h-4">
              <div
                className="h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="mt-1 text-sm text-gray-400">{skill.level}%</span>
          </motion.div>
        ))}
      </div>

      <AnimatedBackground />
    </section>
  );
};

export default Skills;
