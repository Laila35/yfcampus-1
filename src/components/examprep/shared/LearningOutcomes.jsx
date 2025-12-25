import React from "react";
import { Check } from "lucide-react";

 

const LearningOutcomes = ({heading,outcomes}) => {
  return (
    <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-teal-800 mb-12">
        Learning Outcomes
      </h2>
      <p className="text-center text-gray-700 mb-10 text-lg">
      {heading}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {outcomes.map((outcome, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 bg-white border-l-4 border-r-4 border-teal-600 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center font-semibold">
              {index + 1}
            </div>
            <p className="text-gray-700 text-base leading-relaxed">{outcome}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningOutcomes;
