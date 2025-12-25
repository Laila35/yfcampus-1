import Image from "next/image";
import React from "react";

const OutcomeList = ({ outcomes }) => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Learning <span className="text-teal-600">Outcomes</span>
          </h1>
        </div>
        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {outcomes?.map((outcome, idx) => (
            <div
              key={idx}
              className="group relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 hover:translate-y-[-4px]"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-white opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>

              <div className="relative flex items-start space-x-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 group-hover:bg-teal-200 rounded-xl flex items-center justify-center transition-colors duration-300">
                  <Image
                    src={outcome?.image?.url || "/Images/icons/courseIcon1.png"}
                    width={30}
                    height={30}
                    alt={outcome?.image?.alt || "Outcome Icon"}
                    className="object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="text-gray-800 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">
                    {outcome?.description?.[0]?.text}
                  </p>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-teal-500 rounded-full blur-sm"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomeList;
