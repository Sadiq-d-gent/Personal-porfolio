import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import me from "../assets/me.jpg";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="mt-24 bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-lg max-w-5xl mx-auto"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-extrabold text-indigo-600 text-center mb-12">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-44 h-44 rounded-full overflow-hidden border-8 border-indigo-500 shadow-lg flex-shrink-0 mx-auto md:mx-0">
          <img
            src={me}
            alt="Sadiq Ahmad"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg max-w-3xl">
          <p>
            I’m a frontend engineer passionate about crafting seamless user experiences at the intersection of blockchain and the web. Leveraging React, Tailwind, and decentralized protocols, I build scalable, secure dApps that empower users in the trustless digital economy.
            With a focus on performance, accessibility, and composability, I bridge traditional web interfaces with Web3 innovations — creating intuitive apps that unlock new possibilities in DeFi, NFTs, and beyond.
            Let’s build the open, permissionless future together.
          </p>
          <p className="mt-4">
            Experienced in React, Web3.js, ether.js, Tailwind CSS, Web3 frontends, and building
            dashboards, trading tools, and interactive websites.
          </p>
          <p className="mt-4 font-semibold text-indigo-600">
            Open to freelance and remote roles.
          </p>
        </div>
      </div>
    </section>
  );
}
