"use client";
import React from "react";
import { Check } from "lucide-react";

const outcomes = [
  "Gain clarity and confidence in each subject",
  "Develop critical thinking and independent learning skills",
  "Improve exam performance & grades",
  "Build strong foundations for future success",
];

const LearningOutcomes = () => {
  return (
    <div
      className="flex flex-col justify-between border border-gray-200 rounded-2xl p-8 bg-white
      shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(13,148,136,0.15)]
      transition-all duration-300 h-full"
    >
      <div>
        <h2 className="text-xl font-bold  mb-5">
          Learning Outcomes
        </h2>
        <p className="text-gray-700 mb-6">
          Students who join{" "}
          <span className="font-semibold">Your Future Campus</span> will:
        </p>

        <ul className="space-y-4">
          {outcomes.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 border border-gray-100 rounded-lg px-4 py-3
              hover:border-teal-600 transition-all duration-300"
            >
              <Check className="text-teal-600 mt-0.5 w-5 h-5 shrink-0" />
              <span className="text-gray-800">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LearningOutcomes;
