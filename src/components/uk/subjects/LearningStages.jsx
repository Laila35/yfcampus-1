"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const stages = [
  {
    title: "Early Learning",
    age: "Ages 3–6 (Nursery to Year 1)",
    focus:
      "Phonics, reading, counting & confidence-building through fun and interactive activities.",
    link: "/uk/subjects/early-learning",
  },
  {
    title: "Primary Tuition",
    age: "KS1 & KS2 (Years 1–6)",
    focus:
      "Core Maths, English & Science with SATs preparation and conceptual understanding.",
    link: "/uk/subjects/primary",
  },
  {
    title: "Secondary Tuition",
    age: "KS3 & GCSE (Years 7–11)",
    focus:
      "Subject mastery & exam readiness across Maths, Science, English & Computer Science.",
    link: "/uk/subjects/secondary",
  },
  {
    title: "A-Level Tuition",
    age: "Sixth Form (Years 12–13)",
    focus:
      "Advanced STEM and English courses designed for university entrance success.",
    link: "/uk/subjects/a-level",
  },
];

const LearningStages = () => {
  return (
    <section className="py-16 px-6 md:px-12 ">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl  font-semibold text-gray-900 ">
          Stage-Based Learning Paths
        </h2>
         
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stages.map((stage, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between
              shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(13,148,136,0.15)]
              transition-all duration-300 hover:-translate-y-1"
          >
            {/* Gradient bar on top (appears on hover) */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-600 to-emerald-400 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

            {/* Text Content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {stage.title}
              </h3>
              <p className="text-sm text-teal-700 font-medium mb-3">
                {stage.age}
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {stage.focus}
              </p>
            </div>

            {/* Button */}
            <div className="mt-6">
              <Link href={stage.link}>
                <Button
                  variant="outline"
                  className="w-full border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white 
                    transition-all duration-300 font-medium rounded-lg"
                >
                  View →
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningStages;
