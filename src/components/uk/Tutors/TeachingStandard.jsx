import { Check, GraduationCap, Quote } from "lucide-react";
import React from "react";

const TeachingStandard = ({ points ,qoute, qoute_author,title}) => {
 

  return (
    <section className="max-w-7xl mx-auto mt-16 px-6">
      {/* Centered Heading */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-3">
          <GraduationCap className="h-10 w-10 bg-teal-500 text-white rounded-full p-2" />
          <h1 className="text-3xl font-bold text-gray-800">
           {title}
          </h1>
        </div>
         
      </div>

      {/* Left-Aligned Points */}
      <div className="max-w-3xl mx-auto space-y-4">
        {points.map((point, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 transition"
          >
            <Check className="h-6 w-6 text-teal-600 flex-shrink-0" />
            <p className="text-lg text-gray-700">{point}</p>
          </div>
        ))}
      </div>

      {/* Testimonial - Elegant Card */}
<div className="relative max-w-2xl mx-auto mt-12 p-8 text-center bg-white border border-teal-300 rounded-2xl shadow-lg">
  <Quote className="absolute -top-5 left-1/2 -translate-x-1/2 h-10 w-10 text-teal-500 bg-white rounded-full p-2 shadow-md" />

  <p className="italic text-xl text-gray-800 leading-relaxed mt-6">
    {qoute}
  </p>

  <div className="mt-4 border-t border-teal-200 pt-3">
    <h4 className="font-semibold text-gray-700">
   {qoute_author}
    </h4>
  </div>
</div>

    </section>
  );
};

export default TeachingStandard;
