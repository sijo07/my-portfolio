import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { myProjects } from "../constants/index.js";
import { CanvasLoader } from "../components/canvas";
import { AnimatedBackground, DemoComputer } from "../components";
import { motion, AnimatePresence } from "framer-motion";

const projectCount = myProjects.length;

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

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const detailsRef = useRef(null);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prev) => {
      let nextIndex;
      if (direction === "previous") {
        nextIndex = prev === 0 ? projectCount - 1 : prev - 1;
      } else {
        nextIndex = prev === projectCount - 1 ? 0 : prev + 1;
      }

      detailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return nextIndex;
    });
  };

  const current = myProjects[selectedProjectIndex] || {
    title: "Loading...",
    desc: "",
    subdesc: "",
    tags: [],
    href: "#",
    texture: null,
  };

  return (
    <section
      id="projects"
      ref={detailsRef}
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center 
                 gap-12 lg:gap-20 px-6 lg:px-24 py-20 bg-black overflow-hidden"
    >
      {/* Glowing Orbit Background */}
      <AnimatedBackground className="absolute inset-0 -z-10" />

      {/* Project Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedProjectIndex + "-text"}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="z-10 w-full lg:w-1/2 text-left text-white space-y-6"
        >
          <motion.p
            variants={itemVariants}
            className="text-purple-400 font-medium uppercase tracking-widest"
          >
            Project Showcase
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-transparent bg-clip-text bg-gradient-to-r 
                       from-purple-400 via-pink-500 to-purple-400 
                       text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-3 
                       drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]"
          >
            {current.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base sm:text-lg mt-6 max-w-[600px] leading-relaxed"
          >
            {current.desc}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-sm sm:text-base mt-3"
          >
            {current.subdesc}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mt-6"
          >
            {current.tags.map((tag, i) => (
              <div
                key={i}
                className="p-2 rounded-lg bg-gradient-to-r 
                           from-purple-800/40 to-pink-800/30 
                           backdrop-blur-sm border border-purple-700/40"
              >
                <img src={tag.path} alt={tag.name} className="w-6 h-6" />
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5 mt-10"
          >
            <button
              className="p-3 bg-gradient-to-r from-purple-900 to-violet-800 
                         rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] 
                         transition-all"
              onClick={() => handleNavigation("previous")}
            >
              <GrFormPreviousLink size={25} />
            </button>
            <button
              className="p-3 bg-gradient-to-r from-violet-800 to-pink-700 
                         rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] 
                         transition-all"
              onClick={() => handleNavigation("next")}
            >
              <GrFormNextLink size={25} />
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* 3D Model */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedProjectIndex}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative z-10 w-full lg:w-1/2 
                     h-[320px] sm:h-[420px] md:h-[480px] 
                     flex justify-center items-center"
        >
          <div className="w-full h-full rounded-2xl">
            <Canvas>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group
                    scale={window.innerWidth < 1024 ? 2.2 : 2.3}
                    position={
                      window.innerWidth < 1024 ? [-0.3, -3.0, 0] : [-0.5, -3, 0]
                    }
                    rotation={[0, -0.1, 0]}
                  >
                    <DemoComputer texture={current.texture} />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls
                enableZoom={false}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                minAzimuthAngle={-Math.PI / 6}
                maxAzimuthAngle={Math.PI / 6}
              />
            </Canvas>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Projects;
