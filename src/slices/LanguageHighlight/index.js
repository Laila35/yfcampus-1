"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * @typedef {import("@prismicio/client").Content.LanguageHighlightSlice} LanguageHighlightSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LanguageHighlightSlice>} LanguageHighlightProps
 * @type {import("react").FC<LanguageHighlightProps>}
 */
const LanguageHighlight = ({ slice }) => {
  const courseHighlights = slice?.primary?.languagehighlight || [];
  const [activeLang, setActiveLang] = useState(courseHighlights[0]);
const subtitle =  slice?.primary?.subtitle || '';
  if (!courseHighlights.length) {
    return (
      <section className="py-16 text-center text-gray-600">
        <p>No language highlights available.</p>
      </section>
    );
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-50 to-white my-4"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl  font-bold mb-6 text-gray-800 text-center">
      {slice.primary.heading}
      </h2>
      <h3 className="text-center mb-4">  
        <span>{subtitle.split(".")[0]}</span> <br />
        <span className="text-gray-800">{subtitle.split(".")[1]}</span>
</h3>

      {/* Language Tabs */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
        {courseHighlights.map((course) => (
          <button
            key={course.lang}
            onClick={() => setActiveLang(course)}
            className={`px-5 md:px-8 py-2.5 md:py-3 rounded-full border font-medium text-sm md:text-base transition-all duration-300 transform ${
              activeLang?.lang === course.lang
                ? "bg-teal-600 text-white border-teal-600 scale-105 shadow-md"
                : "bg-white text-gray-800 border-gray-300 hover:bg-teal-50 hover:text-teal-700"
            }`}
          >
            {course.lang}
          </button>
        ))}
      </div>

      {/* Active Language Section */}
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 md:p-10 lg:p-14 rounded-3xl shadow-md border border-gray-100 transition-all duration-500 text-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-600 mb-6">
          {activeLang?.title}
        </h3>

        <ul className="list-disc list-inside space-y-3 sm:space-y-4 text-gray-700 text-left leading-relaxed text-sm sm:text-base md:text-lg">
          {activeLang?.points?.map((point, index) => (
            <li key={index} className="hover:text-teal-700 transition-colors">
              {point.text}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center gap-2">
          {activeLang?.cta?.text && (
            <Link
              href={activeLang.cta.url || "#"}
              className="inline-block bg-teal-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base md:text-lg hover:bg-teal-700 hover:shadow-lg transition-all duration-300"
            >
              {activeLang.cta.text} <ArrowRight className="inline-block ml-2" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default LanguageHighlight;
