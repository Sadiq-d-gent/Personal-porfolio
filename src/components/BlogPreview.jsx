import React from "react";
import { motion } from "framer-motion";
import bitcoin from "../assets/bit.jpg";
import blockchain from "../assets/blockchain.jpg";
import dapp from "../assets/dapp.jpg";


const blogPosts = [
  {
    title: "Understanding How Blockchain Works",
    excerpt: "A deep dive into the blockchain ecosystem and how to position yourself effectively...",
    image: blockchain,
    date: "2025-07-01",
    url: "https://yourblog.com/react-hooks",
  },
  {
    title: "What is Bitcoin Blockchain",
    excerpt: "Boost your Knowledge about the core concept of what bitcoin entails...",
    image: bitcoin,
    date: "2025-07-15",
    url: "https://yourblog.com/tailwind-tips",
  },
  {
    title: "Building and Deployment of Accessible Web3 DApps",
    excerpt:
      "How to ensure your web3 applications are usable by everyone, including people with disabilities.",
    image: dapp,
    date: "2025-08-01",
    url: "https://yourblog.com/accessible-web",
  },
];

export default function BlogPreview() {
  return (
    <section
      id="blog"
      className="py-20 bg-gray-50 dark:bg-gray-800 min-h-[70vh]"
    >
      <h2 className="text-4xl font-extrabold text-indigo-600 text-center mb-12">
        Latest Blog Posts
      </h2>

      <div className="grid gap-10 max-w-7xl mx-auto px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map(({ title, excerpt, image, date, url }) => (
          <motion.article
            key={title}
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 flex flex-col overflow-hidden cursor-pointer border border-transparent hover:border-indigo-500 hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            tabIndex={0}
          >
            <motion.div className="relative rounded-lg overflow-hidden mb-4">
              <motion.img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
            </motion.div>

            <h3 className="text-2xl font-bold mb-2 text-indigo-600">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">{excerpt}</p>

            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
              <span>{new Date(date).toLocaleDateString()}</span>
              <motion.a
                href={url}
                className="text-indigo-600 font-semibold relative inline-block"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Read More &rarr;
                <span
                  aria-hidden="true"
                  className="absolute -right-6 top-0 bottom-0 flex items-center"
                />
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
