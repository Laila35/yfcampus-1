import Image from "next/image";
import React from "react";

const WhyChooseUs = ({ whyChooseAQA }) => {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 text-center mb-12">
        Why Choose <span className="text-teal-600">AQA Exam Prep</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {whyChooseAQA.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="w-20 h-20 mb-4">
              <Image
                src={item.icon}
                alt={item.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
