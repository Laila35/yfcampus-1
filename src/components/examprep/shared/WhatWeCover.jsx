import React from "react";
import { asText } from "@prismicio/client";

const WhatWeCover = ({ data }) => {
  if (!data || data.length === 0)
    return (
      <section className="py-16 px-6 text-center text-gray-500">
        <p>No topics available yet.</p>
      </section>
    );

  // ✅ 1. Group subtopics by title
  const groupedTopics = data.reduce((acc, item) => {
    const title = asText(item.title) || "Untitled Topic";
    const subtopic = item.subtopics?.trim();

    if (!acc[title]) acc[title] = [];
    if (subtopic) acc[title].push(subtopic);
    return acc;
  }, {});

  // ✅ 2. Convert to array for mapping
  const topicsArray = Object.entries(groupedTopics).map(([title, subtopics]) => ({
    title,
    subtopics,
  }));

  return (
    <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-teal-700 mb-12">
        What We Cover
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {topicsArray.map((topic, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300"
          >
            {/* Title Header */}
            <div className="bg-gradient-to-r from-teal-500 to-teal-700 p-4">
              <h3 className="text-white text-lg font-semibold text-center">
                {topic.title}
              </h3>
            </div>

            {/* Subtopics */}
            <div className="p-4 min-h-[100px]">
              {topic.subtopics.length > 0 ? (
                <ul className="space-y-2">
                  {topic.subtopics.map((sub, i) => (
                    <li
                      key={i}
                      className="text-teal-800 hover:text-teal-600 transition"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 italic text-center">Coming Soon...</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeCover;
