"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Coding for Kids UK",
    focus:
      "Fun Python & Scratch projects designed to spark creativity and logical thinking for ages 7–14.",
    link: "/uk/subjects/coding-for-kids",
  },
  {
    title: "Spoken English UK",
    focus:
      "Confidence-building spoken English sessions focused on pronunciation, fluency & expression.",
    link: "/uk/subjects/spoken-english",
  },
];

const EnrichmentCourses = () => {
  return (
    <section className="py-12 px-6 md:px-12  ">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl   font-semibold ">
          Creative & <span className="text-teal-600">Enrichment Courses</span>
        </h2>
      </div>

      {/* Items Container */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {courses.map((course, index) => (
          <div
            key={index}
            className="group relative rounded-xl border border-gray-100 bg-white  
            hover:border-teal-500 transition-all duration-300
              p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                {course.focus}
              </p>
            </div>

            <div className="flex justify-end">
              <Link href={course.link}>
                <Button
                  variant="outline"
                  className="border-teal-600 text-teal-700 hover:bg-gradient-to-r from-teal-600 to-emerald-500 hover:text-white 
                    transition-all duration-300 font-medium rounded-lg"
                >
                  Explore →
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnrichmentCourses;
