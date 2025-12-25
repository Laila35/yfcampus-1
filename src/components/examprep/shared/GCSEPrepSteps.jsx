import React from "react";
 
import Image from "next/image";

 

const GCSEPrepProfessional = ({steps,level}) => {
  return (
    <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-teal-800 mb-16">
        How Our {level} Exam Prep Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {steps.map((step, index) => {
        
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition transform hover:-translate-y-1"
            >
              {/* Step Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
                    <Image
                    src={step.icon}
                    width={10}
                    height={10}
                    alt={step.altxt}
                     className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-teal-800">{step.title}</h3>
                </div>
                <div className="text-sm font-semibold text-teal-600">Step {index + 1}</div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GCSEPrepProfessional;
