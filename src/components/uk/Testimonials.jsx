"use client";
import React from "react";
import { Star } from "lucide-react";
const testimonials = [
  "The tutors are patient and skilled. My son now loves Science!",
  "The English teacher helped my child speak confidently at school.",
  "Affordable and flexible — highly recommend!",
];
const Testimonials = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 md:px-10 py-10"> {/* Reduced from py-16 */}
      <h2 className="text-4xl font-extrabold text-teal-700 text-center mb-10 tracking-wide"> {/* Reduced from mb-16 */}
        Testimonials
      </h2>
      <ul className="space-y-8"> {/* Reduced from space-y-12 */}
        {testimonials.map((text, index) => (
          <li
            key={index}
            className={`
              flex items-start gap-6 bg-gradient-to-r from-teal-100 to-teal-50 rounded-3xl p-6 shadow-md  /* Reduced from p-8 */
              transition-all duration-300 cursor-pointer group relative overflow-hidden
              hover:from-teal-200 hover:to-teal-100
              ${index % 2 === 0 ? "animate-pulse [animation-duration:2s]" : ""}
            `}
          >
            {/* Animated border effect for every second testimonial */}
            {index % 2 === 0 && (
              <div className="absolute inset-0 border-2 border-teal-300 rounded-3xl animate-ping [animation-duration:2s] pointer-events-none group-hover:border-teal-500 opacity-20"></div>
            )}
            <Star
              className={`
                w-8 h-8 text-teal-600 flex-shrink-0 mt-1 transition-all duration-300
                group-hover:text-teal-700 group-hover:scale-110
                ${index % 2 === 0 ? "animate-bounce [animation-duration:2s]" : ""}
              `}
              aria-hidden="true"
            />
            <p className="text-gray-900 text-lg font-semibold italic drop-shadow-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-800"> {/* Reduced from text-xl */}
              {`"${text}"`}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-10 text-center"> {/* Reduced from mt-16 */}
        <a
          href="/reviews"
          className="relative inline-block text-teal-600 font-semibold group"
          aria-label="Read more testimonials on our Reviews Page"
        >
          Read more on our Reviews Page →
          <span
            aria-hidden="true"
            className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
          />
        </a>
      </div>
    </section>
  );
};

export default Testimonials;