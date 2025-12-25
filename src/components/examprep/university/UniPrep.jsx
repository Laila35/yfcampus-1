"use client";
import React, { useState } from "react";

const UniPrep = ({ uniPrepApproach }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="max-w-6xl mx-auto py-16 px-6 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold text-teal-600 mb-14">
        Our University Prep Approach
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {uniPrepApproach.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-300 cursor-pointer select-none ${
                isActive
                  ? "border-teal-600 shadow-lg shadow-teal-100 bg-white scale-105"
                  : "border-gray-200 shadow-md hover:shadow-lg hover:border-teal-400"
              }`}
            >
              {/* Number Circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold mb-4 transition-colors duration-300 ${
                  isActive
                    ? "bg-teal-600 text-white"
                    : "bg-teal-500 text-white group-hover:bg-teal-600"
                }`}
              >
                {index + 1}
              </div>

              {/* Title & Description */}
              <h2
                className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  isActive ? "text-teal-700" : "text-gray-800 group-hover:text-teal-600"
                }`}
              >
                {item.title}
              </h2>
              <p
                className={`text-sm leading-relaxed transition-colors duration-300 ${
                  isActive ? "text-gray-700" : "text-gray-600"
                }`}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UniPrep;
