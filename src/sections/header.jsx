import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../utils/style";
import { staggerContainer, fadeIn, zoomIn } from "../utils/motion";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Header = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  // Header scroll effect
  useEffect(() => {
    const header = document.getElementById("header");
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add(
          "bg-black/90",
          "shadow-md",
          "backdrop-blur-md",
          "border-b",
          "border-purple-700"
        );
        header.classList.remove("bg-transparent");
      } else {
        header.classList.remove(
          "bg-black/90",
          "shadow-md",
          "backdrop-blur-md",
          "border-b",
          "border-purple-700"
        );
        header.classList.add("bg-transparent");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll lock when modal open
  useEffect(() => {
    if (contactFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [contactFormOpen]);

  return (
    <>
      {/* Header */}
      <motion.header
        id="header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          duration: 1,
        }}
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 bg-transparent`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-2xl font-bold cursor-pointer uppercase pt-1">
              Clementsijo L
            </p>
          </Link>

          {/* Desktop Nav Links */}
          <motion.ul
            className="hidden md:flex flex-row items-center list-none mx-auto gap-10"
            variants={staggerContainer(0.15, 0.6)}
            initial="hidden"
            animate="show"
          >
            {navLinks.map((nav, index) => (
              <motion.li
                key={nav.id}
                variants={fadeIn("down", "spring", 0.2 * index, 0.75)}
                className={`text-[18px] font-medium cursor-pointer relative group hover:text-purple-100 ${
                  active === nav.title ? "text-white" : "text-gray-300"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`} className="relative">
                  {nav.title}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-purple-500 transition-all duration-300 ${
                      active === nav.title ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Desktop Icons + Button */}
          <motion.div
            className="hidden md:flex items-center gap-4"
            variants={staggerContainer(0.1, 1)}
            initial="hidden"
            animate="show"
          >
            <motion.a
              variants={fadeIn("down", "spring", 1, 0.8)}
              href="https://github.com/sijo07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>

            <motion.a
              variants={fadeIn("down", "spring", 1.1, 0.8)}
              href="https://www.linkedin.com/in/clementsijo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>

            <motion.button
              onClick={openContactForm}
              variants={zoomIn(1.2, 0.6)}
              className="ml-4 px-4 py-2 rounded-xl border-2 border-purple-700 text-white font-bold hover:bg-gradient-to-r from-purple-700 to-violet-700 hover:text-white transition-all duration-500 capitalize"
            >
              Hire me
            </motion.button>
          </motion.div>

          {/* Mobile Menu */}
          <div className="md:hidden flex justify-end items-center relative z-50">
            {!toggle && (
              <motion.img
                whileTap={{ scale: 0.8 }}
                src={menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain cursor-pointer"
                onClick={() => setToggle(true)}
              />
            )}

            <AnimatePresence>
              {toggle && (
                <motion.div
                  key="mobileMenu"
                  initial={{ opacity: 0, y: "-100%" }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 120, damping: 18 },
                  }}
                  exit={{
                    opacity: 0,
                    y: "-100%",
                    transition: { duration: 0.3 },
                  }}
                  className="fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 z-40"
                >
                  <motion.img
                    whileTap={{ scale: 0.8 }}
                    src={close}
                    alt="close"
                    onClick={() => setToggle(false)}
                    className="absolute top-6 right-6 w-[28px] h-[28px] object-contain cursor-pointer hover:rotate-90 transition-transform duration-300"
                  />

                  {/* Mobile Nav Links */}
                  <motion.ul
                    className="flex flex-col items-center gap-6 list-none"
                    variants={staggerContainer(0.15, 0.2)}
                    initial="hidden"
                    animate="show"
                  >
                    <motion.li
                      variants={fadeIn("down", "spring", 0, 0.5)}
                      className={`text-[20px] font-medium cursor-pointer ${
                        active === "Home" ? "text-white" : "text-gray-400"
                      } hover:text-teal-400 transition-colors duration-300`}
                      onClick={() => {
                        setToggle(false);
                        setActive("Home");
                        window.scrollTo(0, 0);
                      }}
                    >
                      <a href="#">Home</a>
                    </motion.li>

                    {navLinks.map((nav, index) => (
                      <motion.li
                        key={nav.id}
                        variants={fadeIn(
                          "down",
                          "spring",
                          0.1 * (index + 1),
                          0.5
                        )}
                        className={`text-[20px] font-medium cursor-pointer ${
                          active === nav.title ? "text-white" : "text-gray-400"
                        } hover:text-teal-400 transition-colors duration-300`}
                        onClick={() => {
                          setToggle(false);
                          setActive(nav.title);
                        }}
                      >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Social Icons */}
                  <motion.div
                    className="flex items-center gap-6 mt-6"
                    variants={staggerContainer(0.15, 0.5)}
                    initial="hidden"
                    animate="show"
                  >
                    <motion.a
                      variants={fadeIn("up", "spring", 0.2, 0.5)}
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-teal-500"
                    >
                      <FiGithub className="w-6 h-6" />
                    </motion.a>

                    <motion.a
                      variants={fadeIn("up", "spring", 0.3, 0.5)}
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-teal-500"
                    >
                      <FiLinkedin className="w-6 h-6" />
                    </motion.a>
                  </motion.div>

                  {/* Hire Me Button */}
                  <motion.button
                    variants={zoomIn(0.5, 0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    onClick={() => {
                      setToggle(false);
                      openContactForm();
                    }}
                    className="px-4 py-2 rounded-xl border-2 border-purple-700 text-white font-bold transition-all duration-300 capitalize"
                  >
                    Hire me
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            key="contactFormOverlay"
            className="fixed top-0 left-0 w-screen h-screen bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key="contactFormContent"
              className="w-full max-w-md sm:max-w-lg rounded-xl shadow-2xl p-6 sm:p-8 border border-purple-700 overflow-auto"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-white capitalize">
                  Get in touch
                </h1>
                <button onClick={closeContactForm}>
                  <FiX className="w-6 h-6 text-white hover:text-purple-400 transition-colors" />
                </button>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-lg text-white placeholder-purple-300 border border-purple-700 focus:ring-2 focus:ring-purple-400 outline-none"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-lg text-white placeholder-purple-300 border border-purple-700 focus:ring-2 focus:ring-purple-400 outline-none"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                />
                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full px-4 py-2 rounded-lg text-white placeholder-purple-300 border border-purple-700 focus:ring-2 focus:ring-purple-400 outline-none"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="block mx-auto px-4 py-2 rounded-xl border-2 border-purple-700 text-white font-bold 
                       bg-gradient-to-r from-purple-700 to-violet-700 
                       hover:from-violet-700 hover:to-purple-700 
                       transition-all duration-500 capitalize"
                >
                  Send
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
