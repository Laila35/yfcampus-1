import React from "react";
import { CheckCircle2 } from "lucide-react";

const WhatYoullMaster = ({ masterList }) => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold text-teal-600 mb-14">
        What You’ll Master
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {masterList.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white/60 backdrop-blur-sm border border-teal-100 shadow-sm rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-2 hover:border-teal-300 transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-500 to-teal-400 text-white shadow-md mb-5 group-hover:scale-110 transition-transform duration-300">
              <CheckCircle2 size={30} />
            </div>

            {/* Text */}
            <h2 className="text-base md:text-lg font-semibold text-gray-800 leading-relaxed group-hover:text-teal-600 transition-colors duration-300">
              {item}
            </h2>

            {/* Decorative underline */}
            <div className="mt-3 w-12 h-[3px] bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatYoullMaster;
