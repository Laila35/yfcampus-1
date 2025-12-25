"use client";
import React, { useState, useMemo } from "react";

const WhatWeCover = ({ whats_covered = [] }) => {
  // 🧩 Group data by KS level
  const groupedLevels = useMemo(() => {
    const levels = {};
    whats_covered.forEach((item) => {
      const levelKey = item.level || "unknown";
      if (!levels[levelKey]) {
        levels[levelKey] = {
          id: levelKey,
          title:
            levelKey === "ks1"
              ? "KS1 SATs (Year 2)"
              : levelKey === "ks2"
              ? " KS2 SATs (Year 6)"
              : levelKey.toUpperCase(),
          topics: [],
        };
      }

      const topicTitle = Array.isArray(item.title)
        ? item.title[0]?.text || ""
        : item.title || "";

      const topicList = Array.isArray(item.topics)
        ? item.topics.map((t) => t.text || t.topic || "").filter(Boolean)
        : [];

      levels[levelKey].topics.push({
        title: topicTitle,
        subtopics: topicList,
      });
    });
    return Object.values(levels);
  }, [whats_covered]);

  const [active, setActive] = useState(groupedLevels[0]?.id || "");
  const current = groupedLevels.find((l) => l.id === active);

  return (
    <section className="py-20 px-6 md:px-12   text-center">
      {/* 🔹 Section Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-12 tracking-tight">
        What We Cover
      </h2>

      {/* 🔹 Level Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {groupedLevels.map((level) => (
          <button
            key={level.id}
            onClick={() => setActive(level.id)}
            className={`px-8 py-3 rounded-full text-lg font-semibold border-2 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 ${
              active === level.id
                ? "bg-gradient-to-r from-teal-600 to-teal-500 text-white border-teal-600 shadow-md scale-105"
                : "bg-white text-teal-700 border-teal-300 hover:bg-teal-50 hover:border-teal-400"
            }`}
          >
            {level.title}
          </button>
        ))}
      </div>

      {/* 🔹 Topics Grid */}
      {current && (
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 transition-all duration-500 ease-in-out">
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {current.topics.map((topicGroup, i) => (
                <article
                  key={i}
                  className="group bg-gradient-to-b from-teal-50 to-white border border-teal-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Topic Heading */}
                  {topicGroup.title && (
                    <h3 className="text-xl font-semibold text-teal-700 mb-4 flex items-center gap-2">
                      <span className="text-teal-500 text-2xl group-hover:rotate-90 transition-transform duration-300">
                        ▸
                      </span>
                      {topicGroup.title}
                    </h3>
                  )}

                  {/* Subtopics List */}
                  <ul className="space-y-2 text-gray-700 leading-relaxed pl-6 list-disc">
                    {topicGroup.subtopics?.map((sub, j) => (
                      <li key={j} className="text-base">
                        {sub}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhatWeCover;
