"use client";
import React from "react";
import { Poppins, Inter } from "next/font/google";

// Load fonts with optimized settings
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function SATMathStructure({ topics = [] }) {
  return (
    <section
      className={`relative py-16 px-4 sm:px-8 lg:px-12  ${inter.className}`}
      aria-labelledby="sat-math-structure-title"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2
          id="sat-math-structure-title"
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-gray-900 tracking-tight ${poppins.className}`}
        >
          SAT Math Structure We Cover
        </h2>

        {/* Grid of Topics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {topics.length > 0 ? (
            topics.map((topic) => (
              <article
                key={topic.id || topic.title}
                className="relative bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-center items-center border border-teal-50 overflow-hidden group"
                role="region"
                aria-label={`SAT Math Topic: ${topic.title}`}
              >
                {/* Decorative hover effect */}
                <div className="absolute inset-0 bg-teal-100 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <h3
                  className={`relative text-xl sm:text-2xl font-semibold text-teal-800 mb-4 z-10 ${poppins.className}`}
                >
                  {topic.title}
                </h3>
                <p className="relative text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs z-10">
                  {topic.description}
                </p>
              </article>
            ))
          ) : (
            <p className="text-gray-500 text-base col-span-full">
              No topics available at the moment.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}