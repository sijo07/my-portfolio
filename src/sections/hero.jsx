import { motion } from "framer-motion";
import { ComputersCanvas } from "../components/canvas/index.js";
import { AnimatedBackground } from "../components";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-black overflow-hidden">
      <AnimatedBackground />

      {/* Text Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 flex flex-col md:flex-row items-center md:items-start gap-5 mt-[100px] md:mt-[120px] lg:mt-[140px]">
        <motion.div
          variants={{
            hidden: { x: -100, opacity: 0 },
            show: {
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 50,
                damping: 20,
                mass: 0.8,
                delay: 0.5,
                duration: 1.2,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center items-center md:items-start text-center md:text-left"
        >
          <h1 className="font-black text-white lg:text-[70px] md:text-[60px] sm:text-[50px] xs:text-[40px] text-[32px] leading-tight lg:leading-[90px] md:leading-[75px] mt-4">
            Hi, I'm <span className="text-purple-300">Sijo</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] md:text-[26px] sm:text-[22px] xs:text-[18px] text-[16px] leading-relaxed mt-3">
            I develop user interfaces <br className="sm:block hidden" /> and web
            applications
          </p>
        </motion.div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <ComputersCanvas />
      </div>

      <div className="absolute bottom-20 w-full flex justify-center items-center lg:hidden">
        <a href="#about">
          <div className="w-[40px] h-[80px] rounded-3xl border-4 border-purple-400 flex flex-col justify-center items-center p-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ y: -10, opacity: 0 }}
                animate={{
                  y: [0, 12, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.25,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="mb-1"
              >
                <div className="w-3 h-3 border-b-2 border-r-2 border-purple-400 rotate-45" />
              </motion.div>
            ))}
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
