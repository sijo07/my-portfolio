import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { GrFormNextLink, GrFormPreviousLink, GrLink } from "react-icons/gr";
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
                       from-purple-500 via-pink-600 to-purple-600 
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
            className="flex flex-wrap gap-4 mt-6 justify-start"
          >
            {current.tags.map((tag, i) => (
              <div
                key={i}
                className="relative group p-[2px] rounded-xl bg-gray-700 hover:to-purple-500 transition-all duration-300 ease-in-out"
              >
                <div
                  className="flex items-center justify-center w-12 h-12 bg-black/40 backdrop-blur-md rounded-xl border border-purple-700 
                   group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300"
                >
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="w-7 h-7 object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
                  />
                </div>
                <span className="absolute mt-2 left-1/2 -translate-x-1/2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tag.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5 mt-10"
          >
            <button
              className="p-3 bg-gradient-to-l from-purple-800 to-pink-900 
                         rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] 
                         transition-all"
              onClick={() => handleNavigation("previous")}
            >
              <GrFormPreviousLink size={25} />
            </button>
            <button
              className="p-3 bg-gradient-to-r from-purple-800 to-pink-900 
                         rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] 
                         transition-all"
              onClick={() => handleNavigation("next")}
            >
              <GrFormNextLink size={25} />
            </button>
            <a
              href={current.href}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center
             bg-gradient-to-r from-purple-800 to-pink-900 
             rounded-full shadow-lg 
             hover:shadow-[0_0_25px_rgba(236,72,153,0.8)]
             transition-all focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <GrLink size={24} className="text-white" />
            </a>
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
