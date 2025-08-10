import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Heroicons
import { CodeBracketIcon, RocketLaunchIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

export default function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const experiences = [
    {
      year: "2024 - Present",
      role: "Frontend Developer",
      company: "TechVision Inc.",
      description:
        "Building responsive, high-performance web applications using React.js, Tailwind CSS, and modern JavaScript. Collaborating with designers and backend engineers to deliver stunning user experiences.",
      icon: <CodeBracketIcon className="w-4 h-4 text-white" />,
    },
    {
      year: "2022 - 2024",
      role: "Full Stack Developer",
      company: "InnovateX",
      description:
        "Developed end-to-end solutions using MERN stack. Led a small team of developers and implemented CI/CD pipelines for faster, more reliable deployments.",
      icon: <RocketLaunchIcon className="w-4 h-4 text-white" />,
    },
    {
      year: "2020 - 2022",
      role: "Junior Web Developer",
      company: "CreativeWeb",
      description:
        "Maintained and improved client websites, optimized performance, and worked closely with senior developers to learn advanced coding techniques.",
      icon: <WrenchScrewdriverIcon className="w-4 h-4 text-white" />,
    },
  ];

  return (
    <section
      id="experience"
      className="bg-white dark:bg-gray-900 py-16 px-4 md:px-8"
    >
      <style>
        {`
          @keyframes pulse-glow {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.6);
            }
            50% {
              transform: scale(1.1);
              box-shadow: 0 0 15px 4px rgba(99, 102, 241, 0.5);
            }
          }
          .pulse-dot {
            animation: pulse-glow 2s infinite ease-in-out;
          }
        `}
      </style>

      <div className="container mx-auto">
        <h2
          className="text-4xl font-extrabold text-indigo-600 text-center mb-12"
          data-aos="fade-up"
        >
          Experience
        </h2>

        <p
            className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300 mb-12 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Crafting digital experiences that fuse cutting-edge design with Web3-powered innovation. 
            Every role I’ve taken is a step deeper into building decentralized, scalable, and 
            user-first solutions for the next evolution of the internet.
          </p>

        <div className="relative border-l border-gray-300 dark:border-gray-700 ml-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 ml-4"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Timeline Dot */}
              <div className="absolute flex items-center justify-center w-8 h-8 bg-indigo-500 rounded-full mt-1.5 -left-4 border-4 border-white dark:border-gray-900 pulse-dot">
                {exp.icon}
              </div>

              {/* Card */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1 transition duration-300">
                <span className="text-sm text-indigo-500 font-semibold">
                  {exp.year}
                </span>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-1">
                  {exp.role}{" "}
                  <span className="text-indigo-500">@ {exp.company}</span>
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
