import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width:768px)").matches;

  if (isMobile) return null;

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;

    gsap.set([cursor, cursorBorder], { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.2,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.2,
      ease: "power3.out",
    });
    const xBorderTo = gsap.quickTo(cursorBorder, "x", {
      duration: 0.4,
      ease: "power3.out",
    });
    const yBorderTo = gsap.quickTo(cursorBorder, "y", {
      duration: 0.4,
      ease: "power3.out",
    });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xBorderTo(e.clientX);
      yBorderTo(e.clientY);
    };

    const handleMouseDown = () => {
      gsap.to(cursor, { scale: 0.7, duration: 0.15, ease: "power3.out" });
      gsap.to(cursorBorder, { scale: 0.8, opacity: 0.4, duration: 0.2 });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2, ease: "elastic.out(1, 0.3)" });
      gsap.to(cursorBorder, { scale: 1, opacity: 0.6, duration: 0.3 });
    };

    const handleHoverIn = () => {
      gsap.to(cursorBorder, {
        scale: 1.8,
        opacity: 0.2,
        borderColor: "#D8B4FE",
        duration: 0.3,
      });
      gsap.to(cursor, { backgroundColor: "#D8B4FE", duration: 0.3 });
    };

    const handleHoverOut = () => {
      gsap.to(cursorBorder, {
        scale: 1,
        opacity: 0.6,
        borderColor: "#D8B4FE",
        duration: 0.3,
      });
      gsap.to(cursor, { backgroundColor: "#D8B4FE", duration: 0.3 });
    };

    // Optional: subtle idle pulsing
    const idlePulse = gsap.to(cursor, {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 1.5,
      paused: true,
    });

    let idleTimeout;
    const startIdlePulse = () => idlePulse.restart(true);
    const stopIdlePulse = () => idlePulse.pause(0);

    const resetIdle = () => {
      clearTimeout(idleTimeout);
      stopIdlePulse();
      idleTimeout = setTimeout(startIdlePulse, 3000); // start pulse after 3s idle
    };

    window.addEventListener("mousemove", (e) => {
      moveCursor(e);
      resetIdle();
    });

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    const hoverElements = document.querySelectorAll("a, button, .hoverable");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverIn);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    resetIdle(); // start idle timer

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverIn);
        el.removeEventListener("mouseleave", handleHoverOut);
      });
      clearTimeout(idleTimeout);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[16px] h-[16px] bg-purple-700 rounded-full pointer-events-none z-[9999] mix-blend-difference shadow-[0_0_20px_rgba(216,180,254,0.6)]"
      />
      <div
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] border border-purple-500 rounded-full pointer-events-none z-[9998] mix-blend-difference opacity-60 backdrop-blur-[2px]"
      />
    </>
  );
};

export default Cursor;
