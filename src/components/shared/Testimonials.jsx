"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialPage = () => {
  const testimonials = [
    "The tutors are patient and skilled. My son now loves Science!",
    "The English teacher helped my child speak confidently at school.",
    "Affordable and flexible — highly recommend!"
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <main className="py-12 px-6 md:px-12 bg-white">
      <div className="max-w-3xl mx-auto text-center relative">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
          Testimonials
        </h1>

        {/* Carousel */}
        <div className="relative" aria-label="Parent testimonials carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="py-16 border border-gray-200 rounded-2xl shadow-sm bg-gray-50"
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
            >
              <p className="text-gray-700 italic text-base leading-relaxed mb-3">
                “{testimonials[index]}”
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-gray-200 shadow hover:bg-gray-100 transition hover:scale-105 focus:outline-teal-600 focus:outline-2 focus:outline-offset-2"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-teal-600" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-gray-200 shadow hover:bg-gray-100 transition hover:scale-105 focus:outline-teal-600 focus:outline-2 focus:outline-offset-2"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-teal-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-3" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-teal-600" : "bg-gray-300 hover:bg-teal-400"
              }`}
              aria-selected={i === index}
              role="tab"
              aria-label={`Go to testimonial ${i + 1}`}
              tabIndex={i === index ? 0 : -1}
            />
          ))}
        </div>

        {/* Read More Button */}
        <a
          href="/uk/reviews"
          className="mt-8 inline-block px-6 py-3 bg-teal-600 text-white font-medium rounded-lg shadow hover:bg-teal-700 transition"
        >
          Read More
        </a>
      </div>
    </main>
  );
};

export default TestimonialPage;
