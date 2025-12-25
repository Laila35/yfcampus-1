"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.ExamPreparationHighlightsSlice} ExamPreparationHighlightsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExamPreparationHighlightsSlice>} ExamPreparationHighlightsProps
 * @type {import("react").FC<ExamPreparationHighlightsProps>}
 */

const ExamPreparationHighlights = ({ slice }) => {
  const { exam_section = [], cta = [] } = slice.primary;

  // === Step 1: Combine exam_section + cta arrays ===
  const examSections = exam_section.map((section) => {
    // Match related CTA links using same identifier
    const relatedLinks = cta
      .filter((linkItem) => linkItem.ide === section.ide)
      .map((linkItem) => ({
        text: linkItem.link.text,
        url: linkItem.link.url || "#",
      }));

    return {
      id: section.ide,
      buttonName: section.button_name,
      title: section.title,
      description: section.description, // Keep as Rich Text
      points: section.points || [], // Keep as-is (Rich Text or array)
      links: relatedLinks,
    };
  });

  const [activeSection, setActiveSection] = useState(examSections[0]);

  // === Step 2: Render UI ===
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-gray-50"
    >
      {/* Background accent */}
      

      {/* Heading */}
      <div className="relative text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Comprehensive Exam Preparation
        </h2>
        <p className="text-gray-600 text-base max-w-2xl mx-auto">
          One-to-one online tutoring designed to boost confidence, accuracy, and
          top results across SATs, 11+, GCSE, A-Level, and University Entrance Exams.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-12">
        {examSections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section)}
            className={`px-6 py-2.5 md:px-8 md:py-3 rounded-full border font-medium text-sm md:text-base transition-all duration-300 ${
              activeSection.id === section.id
                ? "bg-teal-600 text-white border-teal-600 shadow-lg scale-105"
                : "bg-white text-gray-800 border-gray-300 hover:bg-teal-50 hover:text-teal-700"
            }`}
          >
            {section.buttonName}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeSection && (
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10 md:p-12 lg:p-16 transition-all duration-500 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-teal-700 mb-4">
            {activeSection.title}
          </h3>

          <div className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
           {activeSection.description && <PrismicRichText field={activeSection.description} />}
          </div>

          {/* ✅ Handle Rich Text OR plain text points safely */}
          <ul className="list-disc list-inside text-left text-gray-700 space-y-3 mb-10 text-sm md:text-base leading-relaxed">
            {activeSection.points.map((point, idx) => (
              <li key={idx} className="hover:text-teal-700 transition-colors">
                {Array.isArray(point) ? (
                  <PrismicRichText field={point} />
                ) : typeof point === "object" && point.text ? (
                  point.text
                ) : (
                  point
                )}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap justify-center gap-3">
            {activeSection.links.length > 0 ? (
              activeSection.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.url}
                  className="inline-flex items-center bg-teal-600 text-white px-6 py-2.5 rounded-full font-medium text-sm md:text-base hover:bg-teal-700 hover:shadow-lg transition-all"
                >
                  {link.text} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              ))
            ) : (
              <p className="text-gray-500 italic">
                No specific links available for this exam.
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ExamPreparationHighlights;
