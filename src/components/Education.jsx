import React from "react";
import { motion } from "framer-motion";
import buk from "../assets/buk.jpg";
import stemlab from "../assets/stem.png";
import mustibrah from "../assets/musti.jpg";

const educationData = [
  {
    period: "2023 - present",
    school: "Bayero University Kano",
    degree: "Bachelor of Science in Information Technology",
    description:
      "Focused on software development, web technologies, and database management with strong project work in full-stack development.",
    logo: buk,
  },
  {
    period: "2022 - 2024",
    school: "Stem Innovators Hub",
    degree: "National Diploma in Software Engineering",
    description:
      "Comprehensive study of programming languages, networking fundamentals, and system analysis.",
    logo: stemlab,
  },
  {
    period: "2014 - 2023",
    school: "Mustibrah Model School, Kano",
    degree: "Secondary School Certificate",
    description:
      "General education with emphasis on science and mathematics.",
    logo: mustibrah,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="mt-24 max-w-5xl mx-auto py-20 px-6 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl text-gray-900 dark:text-white relative overflow-visible"
    >
      <h2 className="text-4xl font-extrabold text-indigo-600 text-center mb-12">
        Education
      </h2>

      <p
          className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300 mb-12 leading-relaxed"
      >
          A journey of continuous learning and innovation — from mastering the 
          fundamentals of computer science to diving deep into Web3, software 
          engineering, and modern development practices.
      </p>

      <div className="relative border-l-4 border-indigo-600 pl-12 space-y-16">
        {educationData.map(({ period, school, degree, description, logo }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Connector circle */}
            <span className="absolute -left-8 top-1 w-8 h-8 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-900 shadow-lg"></span>

            {/* Card */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-indigo-500 hover:scale-[1.03] hover:shadow-indigo-600 transition-transform cursor-default">
              <div className="flex items-center gap-6 mb-6">
                <img
                  src={logo}
                  alt={`${school} logo`}
                  className="w-20 h-20 rounded-lg object-contain border-2 border-indigo-500 shadow-indigo-700 shadow-lg"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900 dark:text-white">
                    {degree}
                  </h3>
                  <p className="text-indigo-300 text-sm mt-1">{period}</p>
                  <p className="text-indigo-400 font-semibold">{school}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
