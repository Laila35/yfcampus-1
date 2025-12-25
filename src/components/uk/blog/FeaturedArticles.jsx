"use client";

import React from "react";
import { Calculator, BookOpen, Atom, Cpu, School } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Top 10 GCSE Maths Revision Mistakes – And How to Avoid Them",
    description: "Discover the most common pitfalls students make during revision and how to overcome them using smart practice routines.",
    icon: <Calculator size={20} />,
  },
  {
    id: 2,
    title: "5 Ways to Improve English Writing for GCSE Exams",
    description: "Tutor-recommended writing structures and vocabulary techniques to boost grades and clarity.",
    icon: <BookOpen size={20} />,
  },
  {
    id: 3,
    title: "Understanding Newton's Laws – GCSE Physics Simplified",
    description: "A student-friendly breakdown of motion, forces, and mechanics with simple real-life examples.",
    icon: <Atom size={20} />,
  },
  {
    id: 4,
    title: "Why Learning to Code Early Builds Logical Thinking",
    description: "Learn how computer programming helps students improve maths and problem-solving skills from KS2 onwards.",
    icon: <Cpu size={20} />,
  },
  {
    id: 5,
    title: "The Parent's Guide to Supporting Online Learning at Home",
    description: "Simple steps to create a positive study environment and monitor progress effectively.",
    icon: <School size={20} />
  }
];

export default function FeaturedArticles() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Featured Articles
        </h2>
         <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
          Expert insights and practical tips to support student success
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500 transition-colors duration-300">
              <div className="text-teal-600 group-hover:text-white transition-colors duration-300">
                {article.icon}
              </div>
            </div>
            
            {/* Content */}
            <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight group-hover:text-teal-700 transition-colors duration-300">
              {article.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {article.description}
            </p>
          </div>
        ))}
      </div>

       
    </section>
  );
}