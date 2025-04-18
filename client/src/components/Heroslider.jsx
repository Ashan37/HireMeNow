import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Welcome to HireMeNow",
    subtitle: "Search a job for your future career",
    image: "src/assets/heroslider/image1.jpg",
  },
  {
    id: 2,
    title: "Discover Opportunities",
    subtitle: "Thousands of jobs at your fingertips",
    image: "src/assets/heroslider/image2.jpg",
  },
  {
    id: 3,
    title: "Your Future Starts Here",
    subtitle: "Build your career with confidence",
    image: "src/assets/heroslider/image3.jpg",
  },
];

export default function Heroslider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="heroslider">
      <AnimatePresence>
        <motion.div
          key={slides[index].id}
          className="slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {slides[index].image && (
            <img
              src={slides[index].image}
              alt={slides[index].title}
              className="slide-image"
            />
          )}
          <div className="slide-content">
            <h1>{slides[index].title}</h1>
            <p>{slides[index].subtitle}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <button className="nav-button left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="nav-button right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}
