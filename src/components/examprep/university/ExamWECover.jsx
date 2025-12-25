import React from 'react';

const ExamWECover = ({ exams_we_cover }) => {
  return (
    <section className="py-12 px-6">
      <h1 className="text-center text-4xl font-bold text-teal-600 mb-10 tracking-wide">
        Exams We Cover
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {exams_we_cover.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-teal-400"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500 to-teal-300 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

            <h2 className="text-xl font-semibold text-gray-800 text-center group-hover:text-teal-600 transition-colors duration-300">
              {item}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExamWECover;
