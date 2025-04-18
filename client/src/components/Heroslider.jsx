import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Welcome to HireMeNow",
    subtitle: "Search a job for your future carrier",
    image: "",
  },
  {
    id: 1,
    title: "Welcome to HireMeNow",
    subtitle: "Search a job for your future carrier",
    image: "",
  },
  {
    id: 1,
    title: "Welcome to HireMeNow",
    subtitle: "Search a job for your future carrier",
    image: "",
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
          <img
            src={slides[index].image}
            alt={slides[index].title}
            className="slide-image"
          />
          <div className="slide-content">
            <h1>{slides[index].title}</h1>
            <p>{slides}[index].subtitle</p>
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
