import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessBox, setShowSuccessBox] = useState(false);

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
        setStatus("Thank you for your message — I’ll be in touch shortly!");
        setFormData({ name: "", email: "", message: "" });
        setShowSuccessBox(true);

        // Auto-close success box & modal after 3 seconds
        setTimeout(() => {
          setShowSuccessBox(false);
          if (onSuccess) onSuccess();
        }, 3000);
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
    <div className="relative">
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg text-white placeholder-purple-300 border border-purple-700 focus:ring-2 focus:ring-purple-400 outline-none bg-black/50"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg text-white placeholder-purple-300 border border-purple-700 focus:ring-2 focus:ring-purple-400 outline-none bg-black/50"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg text-white placeholder-purple-300 border border-purple-700 focus:ring-2 focus:ring-purple-400 outline-none bg-black/50"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          disabled={isSubmitting}
          className={`block mx-auto px-4 py-2 rounded-xl border-2 border-purple-700 text-white font-bold bg-gradient-to-r from-purple-700 to-violet-700 hover:from-violet-700 hover:to-purple-700 transition-all duration-500 capitalize ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </motion.button>
      </form>

      {/* ✅ Success Overlay Box */}
      <AnimatePresence>
        {showSuccessBox && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md rounded-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                scale: [0.95, 1, 0.95],
                opacity: 1,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-center p-6 bg-gradient-to-r from-purple-700/80 to-violet-700/80 rounded-xl border border-purple-400 shadow-lg"
            >
              <p className="text-white text-lg font-semibold">
                {status ||
                  "Thank you for your message — I’ll be in touch shortly!"}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
