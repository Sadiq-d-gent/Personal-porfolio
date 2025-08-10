import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import AnimatedProfileImage from "./AnimatedProfileImage";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="text-indigo-600 font-semibold tracking-wide uppercase">
          Frontend Engineer
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold leading-tight h-37">
          I build{" "}
          <span className="text-indigo-600">
            <Typewriter
              words={["seamless decentralized experiences.", "scalable Web3 frontends.", "trustless user interfaces that power the blockchain future."]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="text-lg opacity-80 max-w-xl">
          Specializing in React, Tailwind, and Web3 frontends — focused on
          performance, accessibility, and delightful user experiences.
        </p>

        <div className="flex gap-5">
          <a
            href="#projects"
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-300"
          >
            Hire Me
          </a>
        </div>

        <div className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            React
          </span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            Tailwind
          </span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            Framer Motion
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center lg:justify-end"
      >
        <AnimatedProfileImage />
      </motion.div>
    </section>
  );
}
