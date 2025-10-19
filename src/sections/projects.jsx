// components/Projects.jsx
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { myProjects } from "../constants/index.js";
import { CanvasLoader } from "../components/canvas";
import { AnimatedBackground, DemoComputer } from "../components";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prev) => {
      if (direction === "previous")
        return prev === 0 ? projectCount - 1 : prev - 1;
      else return prev === projectCount - 1 ? 0 : prev + 1;
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      ".fadeIn",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );
  }, [selectedProjectIndex]);

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
      className="relative flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 py-28 overflow-hidden"
    >
      {/* Glowing Orbit Background */}
      <AnimatedBackground className="z-0" />

      {/* Left Side */}
      <div className="relative z-10 w-full lg:w-1/2 text-left text-white space-y-6">
        <p className="text-purple-400 font-medium uppercase tracking-widest fadeIn">
          Project Showcase
        </p>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 text-5xl sm:text-6xl font-extrabold mt-3 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] fadeIn">
          {current.title}
        </h2>
        <p className="text-gray-400 text-lg mt-6 max-w-[600px] leading-relaxed fadeIn">
          {current.desc}
        </p>
        <p className="text-gray-500 mt-3 fadeIn">{current.subdesc}</p>

        <div className="flex flex-wrap gap-3 mt-6 fadeIn">
          {current.tags.map((tag, i) => (
            <div
              key={i}
              className="p-2 rounded-lg bg-gradient-to-r from-purple-800/40 to-pink-800/30 backdrop-blur-sm border border-purple-700/40"
            >
              <img src={tag.path} alt={tag.name} className="w-6 h-6" />
            </div>
          ))}
        </div>

        <a
          href={current.href}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-10 bg-gradient-to-r from-purple-700 to-violet-600 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-300 text-white text-lg font-semibold py-3 px-8 rounded-xl fadeIn"
        >
          Visit Project
        </a>

        <div className="flex items-center gap-5 mt-10 fadeIn">
          <button
            className="p-3 bg-gradient-to-r from-purple-900 to-violet-800 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all"
            onClick={() => handleNavigation("previous")}
          >
            <img src="/assets/left-arrow.png" alt="Prev" className="w-5 h-5" />
          </button>
          <button
            className="p-3 bg-gradient-to-r from-violet-800 to-pink-700 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] transition-all"
            onClick={() => handleNavigation("next")}
          >
            <img src="/assets/right-arrow.png" alt="Next" className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Right Side: 3D Computer */}
      <div className="relative z-10 w-full lg:w-1/2 h-[400px] sm:h-[450px] md:h-[500px] mt-10 lg:mt-0 flex justify-center items-center">
        <div className="w-full h-full rounded-2xl">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group
                  scale={window.innerWidth < 1024 ? 1.9 : 2.3}
                  position={
                    window.innerWidth < 1024 ? [-0.3, -2, 0] : [-0.5, -3, 0]
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
      </div>
    </section>
  );
};

export default Projects;
