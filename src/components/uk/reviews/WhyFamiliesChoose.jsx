"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function WhyFamiliesChoose() {
  const points = [
    "One-to-one online learning tailored for each student",
    "Qualified UK tutors with real classroom experience",
    "Regular progress reports for parents",
    "Safe, flexible, and interactive learning environment",
    "Proven results in exams and school performance",
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Why Families Choose Your Future Campus
        </h2>

        <ul className="space-y-4 text-left">
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-center gap-3 border border-teal-100 bg-teal-50 rounded-xl p-4 hover:bg-teal-100 transition-all"
            >
              <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0" />
              <span className="text-gray-800 text-lg">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
