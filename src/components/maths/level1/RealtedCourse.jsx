import React from "react";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";

const RelatedCourse = ({ courses }) => {
  if (!courses || courses.length === 0) return null;

  // Helper: check if btn RichText contains a hyperlink span
  const hasHyperlink = (btn) => {
    if (!btn) return false;
    return btn.some((block) =>
      block.spans?.some((span) => span.type === "hyperlink")
    );
  };

  return (
    <div className="py-12 px-4">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-12 text-center">
        Related <span className="text-teal-600">Courses</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {courses.map((course, idx) => {
          const linked = hasHyperlink(course.btn);

          return linked ? (
            <div
              key={idx}
              className="rounded-xl bg-gradient-to-r from-[#006666] to-[#00332d] text-white px-6 py-3 shadow-md hover:shadow-lg transition flex items-center justify-center"
            >
              <PrismicRichText field={course.btn} />
            </div>
          ) : (
            <div
              key={idx}
              className="rounded-xl bg-white border border-[#006666] text-[#006666] px-6 py-3 shadow-md transition flex items-center justify-center"
            >
              <PrismicRichText field={course.btn} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedCourse;
