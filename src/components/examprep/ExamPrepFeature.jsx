import React from "react";

const ExamPrepFeatures = ({ features }) => {
  return (
    <section className="bg-white text-gray-900 p-8 md:p-12 rounded-3xl mt-12 border border-gray-100">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-teal-600 tracking-tight">
        Exam Prep Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {features?.map((feature, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center gap-5 p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 border hover:border-teal-600"
          >
            {/* Image container */}
            {feature?.image?.url && (
              <div className="absolute -top-8 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden border">
                <img
                  src={feature.image.url}
                  alt={feature.image.alt || "Feature image"}
                  className="w-10 h-10 object-contain"
                />
              </div>
            )}

            {/* Text */}
            <div className="pt-10 text-center">
              <p className="text-gray-700 font-semibold leading-relaxed text-base md:text-lg">
                {feature?.desc?.[0]?.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExamPrepFeatures;
