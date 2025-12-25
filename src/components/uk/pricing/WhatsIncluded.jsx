"use client";

import { CheckCircle } from "lucide-react";

export default function WhatsIncluded() {
  const features = [
    "One-to-one personalised live lessons",
    "Certified UK tutors",
    "Free initial assessment",
    "Weekly progress report",
    "Homework & worksheets",
    "Student portal access",
    "Flexible scheduling",
    "Free rescheduling (with notice)",
  ];

  return (
    <section className="py-16  ">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What’s Included in Every Plan
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border border-teal-100 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-300"
            >
              <CheckCircle className="text-teal-500 w-5 h-5" />
              <p className="text-gray-700 text-sm font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
