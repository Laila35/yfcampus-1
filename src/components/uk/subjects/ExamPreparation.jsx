"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const exams = [
  {
    title: "Test Preparation UK",
    focus: "11+, SATs, GCSE & A-Level exam coaching for top performance and confidence.",
    link: "/uk/exam-preparation/test-prep",
  },
  {
    title: "Revision & Exam Booster UK",
    focus: "Short-term crash courses focused on rapid grade improvement and exam strategy.",
    link: "/uk/exam-preparation/revision",
  },
  {
    title: "Homework Help UK",
    focus: "Daily after-school academic support for assignments, projects & study guidance.",
    link: "/uk/exam-preparation/homework-help",
  },
];

const ExamPreparation = () => {
  return (
    <section className="py-16 px-6 md:px-12  ">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl   font-semibold text-gray-900">
          Exam Preparation <span className="text-teal-600">& Support</span>
        </h2>
        
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {exams.map((exam, index) => (
          <div
            key={index}
            className="relative border border-gray-200 rounded-2xl p-6 flex flex-col justify-between
            
              hover:-translate-y-1 transition-all duration-300 hover:border-t-teal-700 hover:border-t-4"
          >
            {/* Title & Text */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {exam.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {exam.focus}
              </p>
            </div>

            {/* Button */}
            <div className="mt-5">
              <Link href={exam.link}>
                <Button
                  variant="outline"
                  className="w-full border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white 
                    transition-all duration-300 font-medium rounded-lg"
                >
                  View <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExamPreparation;
