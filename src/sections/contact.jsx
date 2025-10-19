import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedBackground } from "../components";

const Contact = () => {
  const circleRef = useRef(null);
  const sectionRef = useRef(null);
  const initialTextRef = useRef(null);
  const finalTextRef = useRef(null);
  const animatedBgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.getAll().forEach((st) => st.kill());

    // Initial setup
    gsap.set(circleRef.current, {
      scale: 1,
      backgroundColor: "#6B21A8", // initial color
      mixBlendMode: "overlay",
      opacity: 1,
    });
    gsap.set(initialTextRef.current, { opacity: 1 });
    gsap.set(finalTextRef.current, { opacity: 0 });
    gsap.set(animatedBgRef.current, { opacity: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1000", // adjust scroll length
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(circleRef.current, {
      scale: 12,
      boxShadow: "0 0 120px 60px rgba(167,139,250,0.4)",
      ease: "power2.inOut",
      duration: 1.2,
    })
      .to(
        circleRef.current,
        {
          backgroundColor: "#000000", // fade color during scroll
          opacity: 0.8,
          duration: 1.2,
          ease: "power2.inOut",
        },
        0 // start fading color at the same time as scaling
      )
      .to(
        initialTextRef.current,
        { opacity: 0, duration: 0.3, ease: "power1.out" },
        0
      )
      .to(
        finalTextRef.current,
        { opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
      .to(animatedBgRef.current, { opacity: 0, duration: 0.8 }, 0);

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{ overscrollBehavior: "none" }}
    >
      {/* Animated Background */}
      <div
        ref={animatedBgRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      >
        <AnimatedBackground />
      </div>

      {/* Expanding Circle */}
      <div
        ref={circleRef}
        className="absolute rounded-full shadow-xl flex items-center justify-center z-10"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "12rem",
          height: "12rem",
        }}
      >
        <p
          ref={initialTextRef}
          className="text-white font-bold text-lg sm:text-xl md:text-2xl text-center"
        >
          Scroll Down
        </p>
      </div>

      {/* Final Contact Content */}
      <div
        ref={finalTextRef}
        className="opacity-0 max-w-2xl flex flex-col items-center justify-center text-center px-6 relative z-20 w-full"
      >
        {/* Canvas Background */}
        <AnimatedBackground />

        <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl mb-6 relative z-10">
          Get in Touch!
        </h1>

        <form className="w-full flex flex-col gap-4 relative z-10">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg border border-purple-400 bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg border border-purple-400 bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <textarea
            placeholder="Your Message"
            required
            rows="5"
            className="p-3 rounded-lg border border-purple-400 bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-400 transition-all duration-500 font-semibold shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
