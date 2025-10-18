import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const zoomRef = useRef(null);

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width:768px)").matches;

  if (isMobile) return null;

  useEffect(() => {
    const cursor = cursorRef.current;
    const zoomLens = zoomRef.current;

    // Center cursor elements
    gsap.set([cursor, zoomLens], { xPercent: -50, yPercent: -50 });

    // Smooth movement using quickTo
    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.18,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.18,
      ease: "power3.out",
    });
    const xZoom = gsap.quickTo(zoomLens, "x", {
      duration: 0.18,
      ease: "power3.out",
    });
    const yZoom = gsap.quickTo(zoomLens, "y", {
      duration: 0.18,
      ease: "power3.out",
    });

    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // Move cursor and zoom lens
      xTo(clientX);
      yTo(clientY);
      xZoom(clientX);
      yZoom(clientY);

      // Move background of zoom lens to simulate magnification
      zoomLens.style.backgroundPosition = `${
        -clientX * 1.5 + window.innerWidth / 2
      }px ${-clientY * 1.5 + window.innerHeight / 2}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    // Hover in: inner cursor expands, outer zoom lens slightly shrinks
    const handleHoverIn = () => {
      gsap.to(cursor, {
        scale: 1.5, // inner circle grows
        backgroundColor: "rgba(255,255,255,0.9)",
        duration: 0.3,
        ease: "power3.out",
        boxShadow: "0 0 15px rgba(255,255,255,0.5)",
      });
      gsap.to(zoomLens, {
        opacity: 1,
        scale: 0.95, // outer lens slightly smaller
        duration: 0.4,
        ease: "power3.out",
      });
    };

    // Hover out: reset cursor and zoom lens
    const handleHoverOut = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#ffffff",
        duration: 0.3,
        ease: "power3.out",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
      });
      gsap.to(zoomLens, {
        opacity: 0,
        scale: 0.9, // original size when not hovered
        duration: 0.4,
        ease: "power3.out",
      });
    };

    // Targets for hover effects
    const hoverTargets = document.querySelectorAll(
      "h1, h2, h3, h4, p, span, strong, em, a, button, img, .hoverable"
    );
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverIn);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverIn);
        el.removeEventListener("mouseleave", handleHoverOut);
      });
    };
  }, []);

  return (
    <>
      {/* Inner cursor circle */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[45px] h-[45px] rounded-full bg-white mix-blend-difference pointer-events-none z-[9999]"
        style={{
          transition: "box-shadow 0.3s ease",
        }}
      />

      {/* Zoom lens */}
      <div
        ref={zoomRef}
        className="fixed top-0 left-0 w-[90px] h-[90px] rounded-full pointer-events-none z-[9998] opacity-0 scale-90 border-2 border-white overflow-hidden mix-blend-normal"
        style={{
          backgroundImage: `url(${window.location.href})`,
          backgroundSize: `${window.innerWidth * 1.8}px ${
            window.innerHeight * 1.8
          }px`,
          backgroundRepeat: "no-repeat",
          transition: "background-position 0.1s ease-out",
        }}
      />
    </>
  );
};

export default Cursor;
