import { motion } from "framer-motion";
import { ComputersCanvas } from "../components/canvas/index.js";
import { AnimatedBackground } from "../components";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-black">
      <AnimatedBackground />
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 sm:px-16 flex flex-row items-start gap-5">
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
          className="flex flex-col justify-center items-start"
        >
          <h1 className="font-black text-white lg:text-[70px] sm:text-[60px] lg:mt-2 xs:text-[50px] text-[40px] lg:leading-[98px] mt-8">
            Hi, I'm <span className="text-purple-300">Sijo</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            I develop user interfaces <br className="sm:block hidden" /> and web
            applications
          </p>
        </motion.div>
      </div>
      <ComputersCanvas />
    </section>
  );
};
export default Hero;
