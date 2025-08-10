import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const socials = [
  {
    name: "Twitter",
    href: "https://twitter.com/yourhandle",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.61 1.794-1.574 2.163-2.724-.949.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.723 0-4.932 2.21-4.932 4.932 0 .39.045.765.13 1.124-4.094-.205-7.725-2.165-10.156-5.144-.423.722-.666 1.56-.666 2.457 0 1.7.865 3.197 2.18 4.076-.803-.026-1.56-.247-2.22-.616v.062c0 2.376 1.693 4.355 3.946 4.802-.413.112-.849.172-1.296.172-.318 0-.626-.03-.928-.086.626 1.956 2.444 3.381 4.6 3.422-1.68 1.317-3.808 2.102-6.114 2.102-.398 0-.79-.023-1.175-.069 2.179 1.397 4.768 2.214 7.557 2.214 9.054 0 14-7.497 14-13.986 0-.21 0-.423-.015-.633.962-.694 1.8-1.562 2.46-2.549z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourhandle",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663h-3.553V9h3.414v1.561h.05c.476-.9 1.637-1.851 3.37-1.851 3.604 0 4.27 2.372 4.27 5.455v6.287zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07 0-1.143.926-2.07 2.07-2.07s2.07.927 2.07 2.07c0 1.143-.926 2.07-2.07 2.07zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .772 0 1.726v20.547C0 23.23.792 24 1.771 24h20.451c.978 0 1.778-.77 1.778-1.726V1.726C24 .772 23.203 0 22.225 0z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/yourhandle",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.729.083-.729 1.205.086 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.774.418-1.304.762-1.604-2.665-.3-5.466-1.332-5.466-5.931 0-1.311.47-2.382 1.235-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.004 2.045.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.234 1.91 1.234 3.222 0 4.61-2.803 5.628-5.475 5.922.43.37.814 1.103.814 2.222v3.293c0 .32.217.694.825.576C20.565 21.796 24 17.298 24 12c0-6.628-5.372-12-12-12z" />
      </svg>
    ),
  },

  {
    name: "WhatsApp",
    href: "https://wa.me/yourwhatsappphonenumber",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M20.52 3.48a11.957 11.957 0 00-16.92 0 11.953 11.953 0 000 16.92l-1.6 4.16 4.32-1.6a11.956 11.956 0 0014.2-14.2zM12 20.4a8.4 8.4 0 01-4.56-1.344l-.324-.192-2.736 1.008.96-2.928-.204-.312A8.4 8.4 0 1112 20.4zm4.536-6.72c-.252-.126-1.488-.732-1.72-.816-.232-.084-.4-.126-.568.126s-.652.816-.8.984c-.148.168-.296.192-.548.072-.252-.126-1.064-.392-2.028-1.252-.75-.666-1.256-1.488-1.404-1.74-.148-.252-.016-.384.11-.51.112-.112.252-.292.378-.438.126-.148.168-.252.252-.42.084-.168.042-.312-.018-.438-.06-.126-.568-1.368-.776-1.872-.204-.492-.412-.426-.568-.434l-.484-.009c-.168 0-.438.06-.666.312s-.876.856-.876 2.088.896 2.424 1.02 2.592c.126.168 1.764 2.688 4.284 3.768.6.258 1.068.412 1.432.528.6.192 1.148.168 1.58.102.482-.072 1.488-.608 1.7-1.196.212-.588.212-1.092.148-1.196-.06-.084-.232-.126-.484-.252z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  }

  return (
    <section
      id="contact"
      className="mt-20 bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-lg max-w-5xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-indigo-600 text-center mb-12"
      >
        Work with me
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 grid grid-cols-1 gap-6"
          aria-label="Contact form"
        >
          <input
            required
            name="name"
            className="p-4 rounded-lg border dark:border-gray-700 dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="Your name"
          />
          <input
            required
            type="email"
            name="email"
            className="p-4 rounded-lg border dark:border-gray-700 dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="Email"
          />
          <textarea
            required
            name="message"
            rows={6}
            className="p-4 rounded-lg border dark:border-gray-700 dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
            placeholder="Tell me about your project"
          />
          <button
            type="submit"
            className="px-6 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            {sent ? "Sent ✓" : "Send message"}
          </button>
        </form>

        {/* Socials */}
        <aside
          aria-label="Social media links"
          className="flex-1 flex flex-col justify-center items-center gap-6 text-gray-700 dark:text-gray-300"
        >
          <h3 className="text-xl font-semibold mb-4">Find me online</h3>
          <ul className="flex gap-6">
            {socials.map(({ name, href, icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="text-indigo-600 hover:text-indigo-800 dark:hover:text-indigo-400 transition transform hover:scale-110"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center text-sm opacity-70">
            Or email me directly at{" "}
            <a
              href="mailto:sadiq@example.com"
              className="text-indigo-600 hover:underline"
            >
              sadiqahmadelif01@gmail.com
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
