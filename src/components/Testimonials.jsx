import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sim from "../assets/sim.jpg";
import luke from "../assets/luke.jpg";
import brooke from "../assets/brooke.jpg";


const testimonials = [
  {
    id: 1,
    name: "Salisu (S-Imam)",
    role: "Graphic Designer",
    image: sim,
    text: "Sadiq is a highly skilled frontend engineer who consistently delivers beautiful and performant applications.",
  },
  {
    id: 2,
    name: "Luke Smith",
    role: "CEO at TechCorp",
    image: luke,
    text: "Working with Sadiq was a pleasure — his attention to detail and creative solutions are outstanding.",
  },
  {
    id: 3,
    name: "Brooke Jane",
    role: "UX Designer",
    image: brooke,
    text: "The UI components Sadiq built were not only visually stunning but also accessible and user-friendly.",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
  }),
};

export default function Testimonials() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const intervalRef = useRef(null);

  const paginate = (newDirection) => {
    let newIndex = index + newDirection;
    if (newIndex < 0) newIndex = testimonials.length - 1;
    else if (newIndex >= testimonials.length) newIndex = 0;

    setIndex([newIndex, newDirection]);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [index]);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => paginate(1), 6000);
  };

  const handleMouseEnter = () => clearInterval(intervalRef.current);
  const handleMouseLeave = () => startAutoSlide();

  return (
    <section
      id="testimonials"
      className="max-w-4xl mx-auto mt-20 p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-lg"
    >
      <h2 className="text-4xl font-extrabold text-indigo-600 text-center mb-12">
        What people say
      </h2>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden rounded-3xl"
        style={{ minHeight: 380 }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={testimonials[index].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 flex flex-col items-center text-center bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl"
          >
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-24 h-24 rounded-full mb-6 object-cover shadow-lg"
              loading="lazy"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-6 italic text-lg">
              "{testimonials[index].text}"
            </p>
            <div className="font-semibold text-indigo-600 text-xl">
              {testimonials[index].name}
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              {testimonials[index].role}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Prev button */}
        <button
          onClick={() => paginate(-1)}
          aria-label="Previous testimonial"
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white/90 dark:hover:bg-gray-800/90 transition z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={() => paginate(1)}
          aria-label="Next testimonial"
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white/90 dark:hover:bg-gray-800/90 transition z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-4">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex([idx, idx > index ? 1 : -1])}
            aria-label={`Go to testimonial ${idx + 1}`}
            className={`w-4 h-4 rounded-full transition-colors ${
              idx === index
                ? "bg-indigo-600 dark:bg-indigo-400"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-indigo-300 dark:hover:bg-indigo-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
