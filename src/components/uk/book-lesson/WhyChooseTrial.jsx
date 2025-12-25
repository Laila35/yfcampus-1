"use client";
import React from "react";
import { Check, Quote } from "lucide-react";

const WhyChooseTrial = ( ) => {
const features = [
  "No payment or commitment required",
  "Personalised one-to-one lesson with a live tutor",
  "Covers real curriculum topics based on your child’s level",
  "Opportunity for parents to observe the session",
  "Feedback shared immediately after class"
];


  return (
    <section className="relative max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tl from-teal-300/50 to-teal-100/30 rounded-lg blur-2xl opacity-50 -z-10" />
      <div className="absolute bottom-10 right-10 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-tl from-teal-200/50 to-teal-50/30 rounded-lg blur-2xl opacity-50 -z-10" />

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl   font-bold text-teal-600 mb-6 tracking-tight uppercase">
          Why Choose Our Free Trial
        </h2>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start sm:items-center gap-4 p-4 sm:p-6 rounded-lg bg-teal-50/50 border border-teal-200/50 shadow-sm hover:shadow-md hover:bg-teal-50/80 transition-all duration-300 ease-in-out min-h-[90px]"
          >
            <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center shadow-inner">
              <Check size={18} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-sm sm:text-base font-medium text-teal-800 leading-relaxed tracking-tight">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Testimonial Card */}
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden shadow-lg">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-teal-200/30 rounded-full blur-3xl opacity-70" />
        <div className="relative z-10">
          <Quote size={30} className="text-teal-100/50 mx-auto mb-6" strokeWidth={1.5} />
          <p className="text-lg sm:text-xl font-light text-white leading-relaxed mb-6 italic tracking-tight">
            “Our trial lessons are not demos — they’re real lessons designed to show measurable improvement in just one session.”
          </p>
          <p className="text-teal-100/80 font-medium text-sm sm:text-base tracking-tight">
            – Director, Your Future Campus UK

          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTrial;
