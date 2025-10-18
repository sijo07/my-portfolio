import { motion } from "framer-motion";
import { styles } from "../utils/style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section
      className={`relative w-full h-screen mx-auto bg-gradient-to-b from-violet-900 to-black`}
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5"></div>

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
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-purple-300">Sijo</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces <br className="sm:block hidden" />
            and web applications
          </p>
        </motion.div>
      </div>

      <ComputersCanvas />

      <div className="absolute right-10 bottom-32 xs:right-1/2 xs:translate-x-1/2 xs:bottom-10 flex justify-center items-center">
        <a href="#about">
          {/* Outer Container */}
          <div className="w-[30px] h-[60px] rounded-3xl border-4 border-purple-400 flex flex-col justify-start items-center p-2 overflow-hidden">
            {/* Inner Dots */}
            {[0, 0.2, 0.4].map((delay, index) => (
              <motion.div
                key={index}
                initial={{ y: 0, scale: 0.7, opacity: 0.6 }}
                animate={{
                  y: [0, 18, 0],
                  scale: [0.7, 1.1, 0.7],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay,
                }}
                className="w-1 h-1 rounded-ful bg-purple-400 mb-1 shadow-lg"
              />
            ))}
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
