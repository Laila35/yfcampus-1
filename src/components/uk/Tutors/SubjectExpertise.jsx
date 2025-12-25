"use client";

import React from "react";
import { Calculator, BookOpen, FlaskConical, Laptop, Globe, Mic, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SubjectExpertise() {
  const subjects = [
    {
      icon: <Calculator className="w-8 h-8 text-teal-600" />,
      title: "Maths",
      desc: "Primary to A-Level, including GCSE exam preparation",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-teal-600" />,
      title: "English",
      desc: "Reading, writing, grammar, literature & spoken English",
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-teal-600" />,
      title: "Science",
      desc: "Physics, Chemistry, and Biology for KS3–A-Level",
    },
    {
      icon: <Laptop className="w-8 h-8 text-teal-600" />,
      title: "Computer Science",
      desc: "Coding, Python, algorithms & ICT skills",
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-600" />,
      title: "Languages",
      desc: "Arabic, Urdu, Persian, and English as a Second Language",
    },
    {
      icon: <Mic className="w-8 h-8 text-teal-600" />,
      title: "Spoken English",
      desc: "Confidence building for children and bilingual families",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl   font-bold text-gray-900 mb-2">
          Subject Expertise
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Our UK tutors cover a wide range of subjects with personalized guidance.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {subjects.map((subj, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center text-center p-6 pt-14 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-teal-50"
          >
            {/* Floating Icon */}
            <div className="absolute -top-8 flex justify-center items-center w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 group-hover:scale-110 transition-transform">
              {subj.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl  font-semibold text-gray-900 mb-2 mt-2 group-hover:text-teal-600 transition-colors">
              {subj.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {subj.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Explore Button */}
      <div className="flex justify-center mt-12 sm:mt-16">
        <Link
          href="#"
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold bg-teal-500 hover:bg-teal-600 shadow-lg hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105"
        >
          Explore All Subjects
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
