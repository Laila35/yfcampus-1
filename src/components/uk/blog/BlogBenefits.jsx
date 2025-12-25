"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    id: 1,
    text: "AI-Optimised Content: Every article is designed to answer real parent and student search queries.",
  },
  {
    id: 2,
    text: "Curriculum-Aligned: All tips follow the UK National Curriculum and exam-board guidelines.",
  },
  {
    id: 3,
    text: "Practical & Actionable: Clear steps and worksheets for home learning.",
  },
  {
    id: 4,
    text: "Multi-Subject Expertise: Articles from UK tutors across all subjects.",
  },
  {
    id: 5,
    text: "Regular Updates: New guides and videos added weekly.",
  },
];

export default function BlogBenefits() {
  return (
    <section className="max-w-4xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Why Our Blog Matters</h2>
      <div className="flex flex-col gap-4 text-left md:text-left">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <CheckCircle className="text-green-500 mt-1" size={24} />
            <p className="text-gray-700">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
