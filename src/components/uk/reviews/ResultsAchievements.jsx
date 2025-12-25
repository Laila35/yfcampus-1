"use client";

import React from "react";
import { Trophy, Star, BarChart3, Award } from "lucide-react";

const achievements = [
  {
    category: "GCSE Maths",
    result: "92% of students improved by at least one grade within 3 months",
    icon: <Trophy className="w-6 h-6 text-teal-600" />,
  },
  {
    category: "A-Level Maths",
    result: "87% achieved Grade A or higher in 2024",
    icon: <Award className="w-6 h-6 text-teal-600" />,
  },
  {
    category: "KS2 SATs",
    result: "96% achieved “Above Expected” scores",
    icon: <BarChart3 className="w-6 h-6 text-teal-600" />,
  },
  {
    category: "English & Science",
    result: "90%+ improved writing, comprehension, and analytical skills",
    icon: <BarChart3 className="w-6 h-6 text-teal-600" />,
  },
  {
    category: "Parent Satisfaction",
    result: "4.9★ average rating from over 1,000 families",
    icon: <Star className="w-6 h-6 text-teal-600" />,
  },
];

export default function ResultsAchievements() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
        Results & Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-white shadow-sm border border-gray-100 p-6 rounded-2xl hover:shadow-md transition-all"
          >
            <div className="p-3 bg-teal-50 rounded-full">{item.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                {item.category}
              </h3>
              <p className="text-gray-600 mt-1 leading-relaxed">
                {item.result}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
