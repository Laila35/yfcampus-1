"use client";

import { CheckCircle } from "lucide-react";

/**
 * @typedef {import("@prismicio/client").Content.Level2OutcomesSlice} Level2OutcomesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<Level2OutcomesSlice>} Level2OutcomesProps
 * @type {import("react").FC<Level2OutcomesProps>}
 */
const Level2Outcomes = ({ slice, context }) => {
  const outcomes = Array.isArray(slice.primary.outcomes) ? slice.primary.outcomes : [];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {slice.primary.heading || "Learning Outcomes"}
        </h2>
        <div className="w-16 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Outcomes Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {outcomes.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-teal-50 to-white border border-teal-200 hover:from-teal-100 hover:to-white transition-all"
          >
            {/* Icon inside circle */}
            <div className="flex-shrink-0 w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>

            {/* Outcome Text */}
            <p className="text-gray-800 font-medium text-base leading-relaxed">
              {item.outcome}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Level2Outcomes;
