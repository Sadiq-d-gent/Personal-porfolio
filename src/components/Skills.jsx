import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your skill icons from assets
import jsLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import nodeLogo from "../assets/node.png";
import tailwindLogo from "../assets/tailwindcss.png";
import pythonLogo from "../assets/python.png";
import gitLogo from "../assets/git.png";
import solLogo from "../assets/solidity.png";
import webLogo from "../assets/web3dotjs.png";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    { name: "JavaScript", icon: jsLogo },
    { name: "React.js", icon: reactLogo },
    { name: "Node.js", icon: nodeLogo },
    { name: "Tailwind CSS", icon: tailwindLogo },
    { name: "Python", icon: pythonLogo },
    { name: "Git/GitHub", icon: gitLogo },
    { name: "Solidity", icon: solLogo },
    { name: "Web3.js", icon: webLogo },
  ];

  return (
    <section
      id="skills"
      className="bg-gray-50 dark:bg-gray-900 py-16 px-4 md:px-8"
    >
      <style>
        {`
          @keyframes smooth-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-smooth-bounce {
            animation: smooth-bounce 2s ease-in-out infinite;
          }
        `}
      </style>
      <div className="container mx-auto">
        <h2
          className="text-4xl font-extrabold text-indigo-600 text-center mb-12"
          data-aos="fade-up"
        >
          Skills
        </h2>

                <p
          className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300 mb-12 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          A curated set of tools and technologies that power my journey — from 
          crafting sleek UIs to building scalable backends, with a strong foundation 
          in modern development practices.
        </p>
        <div
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center"
          data-aos="fade-up"
        >
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="w-40 h-40 flex flex-col items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 animate-smooth-bounce transform transition duration-300 hover:scale-110 hover:shadow-xl hover:shadow-indigo-500/50"
              style={{
                animationDelay: `${idx * 0.3}s`,
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
