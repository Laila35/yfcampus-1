"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

const MeetOurTutors = ( ) => {
  const qualities = [
    "Qualified and experienced in UK education standards",
    "Experts in their subject areas (Maths, English, Science, Computer Science)",
    "Friendly, professional, and background-verified",
    "Skilled at helping students prepare for GCSE, A-Level, and SATs exams"
  ]
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Meet Our Tutors
        </h2>
         <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
          Our tutors are:
        </p>
      </div>

      {/* Tutor Qualities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {qualities.map((q, i) => (
          <div
            key={i}
            className="group flex items-start gap-5 p-6 bg-white border border-gray-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-teal-100 text-teal-600 rounded-xl group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <p className="text-gray-700 text-base leading-relaxed font-medium">{q}</p>
          </div>
        ))}
      </div>

      {/* Closing Text */}
      <div className="mt-16 max-w-3xl mx-auto text-center">
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 rounded-2xl p-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            We carefully match each student with the right tutor through a short
            assessment before classes begin — ensuring the best learning
            partnership and a truly personalised educational experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTutors;