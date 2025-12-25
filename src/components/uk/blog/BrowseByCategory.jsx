 "use client";

import React from "react";
import { Book, Cpu, Beaker, Brain, Calculator, School } from "lucide-react";

const categories = [
  {
    title: "Maths Tips & Practice Guides",
    description:
      "Revision methods, tricky topics explained, and exam strategies for GCSE & A-Level Maths.",
    icon: <Calculator className="w-6 h-6 text-white" />,
    color: "bg-teal-600",
  },
  {
    title: "English Skills & Grammar Help",
    description:
      "Writing, reading, and speaking confidence tips for KS1–A-Level learners.",
    icon: <Book className="w-6 h-6 text-white" />,
    color: "bg-blue-500",
  },
  {
    title: "Science & STEM Insights",
    description:
      "Study hacks, practical experiments, and concept breakdowns in Physics, Chemistry & Biology.",
    icon: <Beaker className="w-6 h-6 text-white" />,
    color: "bg-green-500",
  },
  {
    title: "Computer & Coding",
    description:
      "Tutorials on computer basics, coding languages, and logical problem-solving.",
    icon: <Cpu className="w-6 h-6 text-white" />,
    color: "bg-purple-500",
  },
  {
    title: "Parent Guides & Education Advice",
    description:
      "How parents can support learning at home, manage study schedules, and track progress.",
    icon: <School className="w-6 h-6 text-white" />,
    color: "bg-yellow-500",
  },
  {
    title: "Study Motivation & Learning Skills",
    description:
      "Time management, focus-building, and online learning techniques for all ages.",
    icon: <Brain className="w-6 h-6 text-white" />,
    color: "bg-pink-500",
  },
];

export default function BrowseByCategory() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl   font-bold mb-4">
          Browse by Category
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Easily explore articles by learning stage or focus area.
        </p>
      </div>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-lg transition"
          >
            {/* Floating Icon */}
            <div
              className={`absolute -top-6 flex items-center justify-center w-12 h-12 rounded-full ${cat.color} shadow-lg`}
            >
              {cat.icon}
            </div>

            {/* Card Content */}
            <h3 className="mt-6 text-xl font-semibold mb-2">{cat.title}</h3>
            <p className="text-gray-600 text-sm">{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
