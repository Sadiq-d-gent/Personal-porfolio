import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dash from "../assets/dash.png";
import Hub from "../assets/hub.png";
import Resume from "../assets/resume.png";

const SAMPLE = [
  {
    title: "Crypto Dashboard",
    desc: "Realtime charts and theming.",
    tags: ["React", "Chart.js"],
    image: dash,
    link: "#",
  },
  {
    title: "Trading Hub",
    desc: "Order flow UI and trade planner.",
    tags: ["UI", "Trading"],
    image: Hub,
    link: "https://mujiib-trading-hub.vercel.app/",
  },
  {
    title: "Onchain Resume",
    desc: "Web3 frontend & wallet connect.",
    tags: ["Web3", "Wagmi"],
    image: Resume,
    link: "#",
  },
];

export default function Projects() {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    // Scroll animation init (can also use AOS if preferred)
  }, []);

  return (
    <section
      id="projects"
      className="mt-20 bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-lg max-w-7xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-indigo-600 text-center mb-12"
      >
        Selected Projects
      </motion.h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">
        A hand-picked selection of recent work — click preview to see screenshots.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {SAMPLE.map((project, i) => (
          <motion.article
            key={i}
            whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)" }}
            className="rounded-3xl overflow-hidden shadow-md bg-gray-50 dark:bg-gray-800 cursor-pointer transition"
            onClick={() => setPreview(project)}
          >
            <div className="h-52 overflow-hidden rounded-t-3xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6">
              <div className="text-indigo-500 uppercase font-semibold text-xs tracking-wide">
                Featured
              </div>
              <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Preview modal */}
      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setPreview(null)}
          ></div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl w-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="h-96 bg-black/5">
              <img
                src={preview.image}
                alt={preview.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="text-indigo-500 font-semibold text-sm">Preview</div>
              <h3 className="text-2xl font-bold mt-1">{preview.title}</h3>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{preview.desc}</p>
              <div className="mt-6 flex justify-end gap-4">
                <a
                  href={preview.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
                >
                  Open
                </a>
                <button
                  onClick={() => setPreview(null)}
                  className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
