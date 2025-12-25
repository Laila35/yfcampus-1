"use client";
import React from "react";
import { CheckCircle2, Quote } from "lucide-react";
import { motion } from "framer-motion";

const BenefitItem = ({ point, index }) => (
  <li
     
    className="flex items-start gap-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-teal-100 p-6 shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
  >
    <div
      aria-hidden="true"
      className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-teal-100 text-teal-600"
    >
      <CheckCircle2 className="w-5 h-5" />
    </div>
    <p className="leading-relaxed">{point}</p>
  </li>
);

const WhyChooseSection = () => {
  const points = [
  "UK-qualified tutors with proven classroom experience",
  "Personalised one-to-one lessons for each child",
  "Curriculum-aligned teaching (AQA, Edexcel, OCR, Cambridge)",
  "Interactive digital classroom with real-time feedback",
  "Affordable monthly plans with flexible scheduling",
  "Free trial lesson before enrolment"
];
const qoute="We make learning engaging, structured, and result-driven — helping every student discover their true potential."
const quoteAuthor=" – Director, Your Future Campus UK"
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="relative py-12 bg-gray-50 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(13,148,136,0.08)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-[3.7rem] text-center">
        {/* Heading */}
        <h2
          
          className="text-3xl font-semibold mb-12"
        >
          Why Parents Choose{" "}
          <span className="text-teal-600">Your Future Campus</span>
        </h2>

        {/* Benefits Grid */}
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {points.map((point, index) => (
            <BenefitItem key={point} point={point} index={index} />
          ))}
        </ul>

        {/* Quote Section */}
        <div
           
          className="mt-24 mx-auto max-w-3xl relative"
        >
          <div className="relative rounded-3xl border border-teal-100 bg-gradient-to-br from-white to-teal-50 shadow p-10">
            <Quote
              className="absolute -top-8 left-1/2 -translate-x-1/2 text-teal-400 w-14 h-14 bg-white rounded-full p-2 shadow"
              strokeWidth={1.5}
            />
            <p className="text-gray-700 italic leading-relaxed mb-6">
              “{qoute}”
            </p>
            <div className="w-20 h-[2px] bg-teal-600 mx-auto mb-4" />
            <p className="font-semibold text-teal-700 ">
               {quoteAuthor}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
