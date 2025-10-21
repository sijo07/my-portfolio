import { motion } from "framer-motion";
import { AnimatedBackground, AnimatedUnderline } from "../components";
import { skillsData } from "../constants";
import { Marquee } from "../components";

const Skills = () => {
  const mid = Math.ceil(skillsData.length / 2);
  const firstRow = skillsData.slice(0, mid);
  const secondRow = skillsData.slice(mid);

  const hoverVariant = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 250 },
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-start justify-start gap-10 px-4 sm:px-16 lg:px-24 py-16 sm:py-20 bg-black overflow-hidden"
    >
      <AnimatedBackground className="absolute inset-0 -z-10" />

      <motion.div
        className="z-10 w-full text-left text-purple-300"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-lg sm:text-xl font-semibold uppercase tracking-widest mt-8">
          Tech Stack
          <AnimatedUnderline />
        </h3>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 w-full sm:hidden justify-items-center">
        {[...firstRow, ...secondRow].map((skill) => (
          <motion.div
            key={skill.name}
            className="tech-card flex flex-col items-center justify-center bg-gray-900 hover:bg-gray-800 transition-all duration-300 w-32 h-20 rounded-lg shadow-md p-2 cursor-pointer"
            whileHover={hoverVariant}
          >
            <motion.img
              src={skill.path}
              alt={skill.name}
              className="w-8 h-8 mb-1 object-contain"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="text-white font-semibold text-[10px] text-center whitespace-nowrap">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="relative hidden sm:flex flex-col items-center justify-center w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-4 sm:mt-8 overflow-hidden space-y-4">
        <Marquee pauseOnHover className="[--duration:25s]" repeat={2}>
          {firstRow.map((skill) => (
            <motion.div
              key={skill.name}
              className="tech-card flex flex-col items-center justify-center bg-gray-900 hover:bg-gray-800 transition-all duration-300 w-28 sm:w-32 md:w-36 h-36 sm:h-40 md:h-44 rounded-2xl shadow-lg p-4 cursor-pointer flex-shrink-0 mx-2"
              whileHover={hoverVariant}
            >
              <motion.img
                src={skill.path}
                alt={skill.name}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-3"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <p className="text-white font-semibold text-sm sm:text-base text-center whitespace-nowrap">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:25s]" repeat={2}>
          {secondRow.map((skill) => (
            <motion.div
              key={skill.name}
              className="tech-card flex flex-col items-center justify-center bg-gray-900 hover:bg-gray-800 transition-all duration-300 w-28 sm:w-32 md:w-36 h-36 sm:h-40 md:h-44 rounded-2xl shadow-lg p-4 cursor-pointer flex-shrink-0 mx-2"
              whileHover={hoverVariant}
            >
              <motion.img
                src={skill.path}
                alt={skill.name}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-3"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <p className="text-white font-semibold text-sm sm:text-base text-center whitespace-nowrap">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </Marquee>

        <div className="absolute left-0 w-32 sm:w-48 md:w-64 h-full pointer-events-none bg-gradient-to-r from-black to-transparent z-20"></div>
        <div className="absolute right-0 w-32 sm:w-48 md:w-64 h-full pointer-events-none bg-gradient-to-l from-black to-transparent z-20"></div>
      </div>
    </section>
  );
};

export default Skills;
