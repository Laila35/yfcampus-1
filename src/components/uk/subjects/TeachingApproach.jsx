"use client";

import { Check } from "lucide-react";
import React from "react";

const points = [
  {
    title: "One to One & Interactive",
    desc: "Live sessions tailored to your child’s pace.",
  },
  {
    title: "Curriculum-Aligned",
    desc: "AQA, Edexcel, OCR & Cambridge compliant.",
  },
  {
    title: "Goal-Based",
    desc: "Set targets for confidence and exam achievement.",
  },
  {
    title: "Flexible & Affordable",
    desc: "30-minute or 1-hour plans with weekly reports.",
  },
];

const TeachingApproach = () => {
  const handleCardClick = (index) => {
    console.log(`Card ${index + 1} clicked`);
    // Add your navigation logic here
    // Example: router.push(`/uk/feature/${index + 1}`);
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          How Our Subjects Are Taught
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Personalized, curriculum-aligned tutoring that builds confidence and delivers results.
        </p>
      </div>

      {/* Grid Layout like Image 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {points.map((point, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className="group cursor-pointer bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:bg-teal-50 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            {/* Check Icon */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200 transition-colors duration-300">
                <Check className="w-5 h-5 text-teal-600" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
            
            {/* Hidden hover effect border */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-teal-400/20 transition-all duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Closing Line - Updated to match Image 1 */}
      <div className="mt-12 max-w-3xl mx-auto">
        <div className="text-center">
          <p className="text-gray-700 leading-relaxed text-lg">
            Our tutors blend academic expertise with encouragement so students enjoy learning 
            and see measurable results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeachingApproach;