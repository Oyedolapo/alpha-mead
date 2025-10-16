// components/HeroSlider.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "../constants/data";

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative w-full h-[50vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* ✅ Static image background */}
      <div className="absolute inset-0">
        <img
          src={slides[current].image}
          alt={slides[current].title || `Slide ${current + 1}`}
          className="w-full h-full object-cover object-top select-none transition-opacity duration-1000 ease-in-out"
        />
      </div>

      {/* ✅ Text overlay (animated only if overlay: true) */}
      <AnimatePresence mode="wait">
        {slides[current].overlay && (
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 bg-black/50 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 text-white"
          >
            <motion.h1
              key={slides[current].title}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-century-gothic leading-tight max-w-3xl"
            >
              {slides[current].title}
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="text-sm sm:text-lg md:text-xl lg:text-sm max-w-2xl mb-6 text-gray-100"
            >
              {slides[current].description}
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-fit border border-white/50 text-white px-6 sm:px-8 py-2 sm:py-3 rounded uppercase text-xs sm:text-sm font-semibold tracking-wider hover:bg-white/10 transition-all"
            >
              Read More
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full transition"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full transition"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
