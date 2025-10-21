import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socials = [
    { icon: <FaGithub size={22} />, href: "https://github.com/sijo07" },
    {
      icon: <FaLinkedin size={22} />,
      href: "https://www.linkedin.com/in/clementsijo/",
    },
  ];

  return (
    <footer className="relative bg-black text-white py-6 sm:py-10 px-6 sm:px-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-center lg:mt-0 mt-2">
        <div className="flex flex-col items-center justify-center">
          <a href="#hero" className="flex flex-col items-center mb-1">
            <span className="relative w-5 h-8 border-2 border-purple-400 rounded-full flex items-start justify-center overflow-hidden">
              <span className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full animate-scrollUp" />
            </span>
          </a>
          <a
            href="#hero"
            className="text-purple-400 hover:text-white font-semibold text-sm mt-1  transition-colors duration-300"
          >
            Back to Top
          </a>
        </div>

        <div className="text-purple-400 font-bold text-2xl sm:text-4xl animate-bounce">
          &lt;/&gt;
        </div>

        <div className="flex gap-3">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2  rounded-full bg-gray-900/40 border border-purple-500/30 text-purple-300 hover:text-white hover:scale-110 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-800 my-4" />
      <p className="text-gray-500 text-xs sm:text-sm text-center">
        © {new Date().getFullYear()} Clementsijo | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
