"use client";
import React, { useState } from "react";
import * as Icons from "lucide-react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.SatKs1SliceSlice} SatKs1SliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SatKs1SliceSlice>} SatKs1SliceProps
 * @type {import("react").FC<SatKs1SliceProps>}
 */
const SatKs1Slice = ({ slice }) => {
  // Use lowercase keys safely
  const sections = slice?.primary?.sections || [];
  console.log("items text",slice.primary.sections[0].items[0].text);

  // Use first section as default (fallback)
  const [activeId, setActiveId] = useState(sections[0]?.ide || "");

  // Find section safely
  const activeSection = sections.find((s) => s.ide === activeId);

  // Defensive guard to prevent crash
  if (!activeSection) {
    console.warn("No active section found");
    return null;
  }

  const ActiveIcon = Icons[activeSection.icon] || Icons.Circle;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-w-3xl mx-auto p-6 text-center"
    >
      <h2 className="text-3xl font-bold text-teal-700 mb-6">
        {slice.primary.title}
      </h2>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {sections.map((section) => {
          const Icon = Icons[section.icon] || Icons.Circle;
          return (
            <button
              key={section.ide}
              onClick={() => setActiveId(section.ide)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-colors duration-300 border ${
                activeId === section.ide
                  ? "bg-teal-600 text-white border-teal-600 shadow-md"
                  : "bg-white text-teal-700 border-teal-300 hover:bg-teal-50"
              }`}
            >
              <Icon size={18} />
              {section.title}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="bg-white shadow-md rounded-2xl border border-teal-100 p-6 text-left grid gap-3">
        {activeSection.items?.map((item, idx) => {
          const PointIcon = Icons.Circle;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 rounded-lg bg-teal-50 border border-teal-100 px-4 py-2 text-teal-900 font-medium"
            >
              <PointIcon size={14} className="text-teal-600" />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SatKs1Slice;
