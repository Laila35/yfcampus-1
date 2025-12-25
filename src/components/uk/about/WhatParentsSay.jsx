"use client";
import React from "react";
import { MessageCircleHeart } from "lucide-react";

 
 
const WhatParentsSay = ({btn, }) => {
  const testimonials=[
    {
      qoute:"“Your Future Campus transformed how my son studies. The one-to-one lessons helped him go from Grade 5 to Grade 8 in Maths within a term!”",
      author:" – Sarah, London"
    },
    {
      qoute:"“As a working parent, flexible timings made all the difference. My daughter actually looks forward to her online Science classes!”",
      author:" – Muhammad A., Birmingham"
    }
  ]
   
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-16">
        
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 mb-2">
          What Parents Say
        </h2>
        
      </div>

      {/* Testimonials */}
      <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-6 rounded-2xl bg-teal-50 border border-teal-100 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <p className="text-gray-700 italic leading-relaxed mb-4 text-base sm:text-lg">
              {item.qoute}
            </p>
            <p className="font-semibold text-teal-600 text-sm sm:text-base mt-auto text-right">
              {item.author}
            </p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
        <a href= "/uk/reviews">
          <button className="px-6 py-3 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors shadow-md">
       Read more feedback
        </button>
        </a>
        <a href= "/uk/reviews">
          <button className="px-6 py-3 rounded-full border border-teal-600 text-teal-700 font-medium hover:bg-teal-50 transition-colors shadow-sm">
          Reviews & Success Stories

        </button>
        </a>
      </div>
    </section>
  );
};

export default WhatParentsSay;
