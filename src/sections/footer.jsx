import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 px-6 sm:px-20 flex flex-col items-center justify-center">
      {/* Top Section: Brand/Name */}
      <div className="text-center mb-6">
        <h2 className="text-purple-300 font-semibold uppercase tracking-widest text-sm sm:text-base">
          Sijo
        </h2>
        <p className="mt-1 text-gray-400 text-sm sm:text-base">
          Full Stack Developer | React.js, Node.js, MongoDB, MySQL
        </p>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mb-6">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors duration-300"
        >
          <FaTwitter size={24} />
        </a>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-800 mb-6" />

      {/* Bottom Section: Copyright */}
      <p className="text-gray-500 text-sm sm:text-base text-center">
        © {new Date().getFullYear()} Sijo. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
