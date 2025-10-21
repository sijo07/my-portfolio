import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { AnimatedBackground, AnimatedUnderline } from "../components";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://getform.io/f/14ebe776-f3da-4bcf-a8af-85222e57a410",
        {
          method: "POST",
          body: new FormData(e.target),
        }
      );
      if (response.ok) {
        setStatus("Ping! I got your message 📨");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("Oops! Something went wrong.");
      }
    } catch {
      setStatus("Error sending message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col justify-center items-center px-10 lg:px-20 py-28 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-black/20 mix-blend-screen"></div>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-3 h-3 rounded-full bg-purple-400/40 blur-md"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ y: [0, -40, 0], opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          className="w-full lg:w-1/2 text-left space-y-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-purple-300 text-lg font-semibold uppercase tracking-widest">
            Contact
            <AnimatedUnderline />
          </h3>

          <motion.h2
            className="text-white text-4xl sm:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Let’s build something <br />
            <span className="text-purple-400">amazing together.</span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg max-w-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            I’m always open to new collaborations, creative ideas, or just a
            friendly chat. Feel free to reach out using any of the options below
            — I’ll get back to you as soon as possible.
          </motion.p>

          <motion.div
            className="flex gap-5 pt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.6 }}
          >
            {[
              {
                icon: <FaLinkedin size={24} />,
                href: "https://www.linkedin.com/in/clementsijo/",
                label: "LinkedIn",
              },
              {
                icon: <FaEnvelope size={24} />,
                href: "mailto:clementsijo@gmail.com",
                label: "Email",
              },
              {
                icon: <FaPhone size={24} />,
                href: "tel:+918921386007",
                label: "Phone",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{
                  scale: 1.2,
                  boxShadow: "0 0 15px rgba(168,85,247,0.7)",
                }}
                className="p-4 rounded-full bg-gray-900 border border-purple-400/40 text-purple-300 hover:text-white hover:bg-purple-500/20 transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 bg-gradient-to-b from-gray-900 to-black border border-purple-500/20 rounded-2xl p-8 shadow-[0_0_40px_rgba(168,85,247,0.2)]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h3
            className="text-2xl font-semibold text-purple-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Send a Message
            <AnimatedUnderline />
          </motion.h3>

          <form onSubmit={handleSubmit} className="space-y-5 relative">
            <input
              type="text"
              name="name"
              placeholder="Who’s coding this message?"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-black/30 border border-purple-500/40 text-white placeholder-gray-400 placeholder:text-xs lg:placeholder:text-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Drop your inbox — I’ll deploy my reply soon🚀"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-black/30 border border-purple-500/40 text-white placeholder-gray-400 placeholder:text-xs lg:placeholder:text-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Dial-up vibes? Drop your digits!"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-black/30 border border-purple-500/40 text-white placeholder-gray-400 placeholder:text-xs lg:placeholder:text-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Drop your message here — I’m all ears"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-black/30 border border-purple-500/40 text-white placeholder-gray-400 placeholder:text-xs lg:placeholder:text-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-500 outline-none resize-none transition-all"
            />
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
