import Image from "next/image";
import React from "react";
 
const WhatWeProvide = ({ features}) => {
   

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          What <span className="text-teal-600">We Provide</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:bg-teal-50"
            >
              <div className="mb-3"> 
                <Image
                  src={feature.icon}
                  alt={feature.alt}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-base font-semibold text-gray-800">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;
