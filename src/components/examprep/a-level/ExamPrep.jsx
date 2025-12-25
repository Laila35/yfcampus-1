import React from "react";

const ExamPrepFeatures = ({ features }) => {
  return (
    <section className="py-12 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
        AQA <span className="text-teal-600">Exam Structure</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, text }, index) => (
          <div
            key={index}
            aria-label={text}
            className="relative p-6 pt-10 border rounded-lg bg-white shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer min-h-[140px] flex flex-col items-center justify-center"
          >
            {/* Floating top icon - half above border */}
            <div className="absolute -top-6 w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md">
              <img
                src={icon?.url}
                alt="feature icon"
                className="w-7 h-7 object-contain"
              />
            </div>

            {/* Feature text */}
            <p className="text-gray-800 font-medium text-center hover:text-teal-600 transition-colors duration-300">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExamPrepFeatures;
