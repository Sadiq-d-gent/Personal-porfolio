import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/degent.jpg";

const dots = [
  { top: "10%", left: "15%", delay: 0 },
  { top: "20%", left: "80%", delay: 0.3 },
  { top: "70%", left: "10%", delay: 0.6 },
  { top: "75%", left: "75%", delay: 0.9 },
  { top: "50%", left: "50%", delay: 1.2 },
];

export default function AnimatedProfileImage() {
  return (
    <motion.div
      className="relative w-80 md:w-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-indigo-500"
      animate={{
        y: [0, -20, 0], // bounce vertically 20px
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
      }}
    >
      <img
        src={profilePic}
        alt="Sadiq Ahmad"
        className="w-full h-full object-cover rounded-3xl"
      />

      {dots.map(({ top, left, delay }, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.8, opacity: 0.7, y: 0 }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.7, 1, 0.7],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            delay,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute bg-indigo-500 rounded-full"
          style={{
            width: 15,
            height: 15,
            top,
            left,
            boxShadow: "0 0 8px rgba(99, 102, 241, 0.7)",
          }}
        />
      ))}
    </motion.div>
  );
}
