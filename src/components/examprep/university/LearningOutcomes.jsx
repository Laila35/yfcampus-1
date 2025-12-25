import React from "react";

const LearningOutcomes = ({ outcomes }) => {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-teal-600 mb-6">
        Learning Outcomes
      </h1>

      {/* Subheading */}
      <h3 className="text-xl md:text-2xl font-medium text-center text-gray-700 mb-14">
        By the end of this course, students will:
      </h3>

      {/* List Section */}
      <div className="space-y-10">
        {outcomes.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center gap-6 group border border-teal-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-white to-teal-50"
          >
            {/* Number Circle */}
            <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-teal-500 flex items-center justify-center font-bold text-teal-600 text-lg group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
              {index + 1}
              {/* Connector Line */}
              {index !== outcomes.length - 1 && (
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-[2px] h-6 bg-teal-300"></div>
              )}
            </div>

            {/* Text */}
            <div className="text-gray-800 text-lg font-medium leading-relaxed tracking-tight">
              {item}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningOutcomes;
