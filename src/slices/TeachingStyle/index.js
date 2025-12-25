/**
 * @typedef {import("@prismicio/client").Content.TeachingStyleSlice} TeachingStyleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeachingStyleSlice>} TeachingStyleProps
 * @type {import("react").FC<TeachingStyleProps>}
 */
"use client";

import React from "react";
import { PrismicRichText } from "@prismicio/react";
import * as LucideIcons from "lucide-react";
import { Button } from "@/components/ui/button";

const TeachingStyle = ({ slice }) => {
  const { heading, subtitle, tag_line, teachingitems } = slice.primary;
  console.log(slice.primary)

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16   rounded-2xl"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">
          {heading || "Our Teaching Style"}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-10">
            {subtitle}
          </p>
        )}

        {/* Teaching Items */}
        <div className={`grid ${teachingitems?.length <= 3 ? "md:grid-cols-3" : "md:grid-cols-4"} gap-8`}>
          {teachingitems?.map((item, index) => {
            const { icon, label, description, color } = item;
            const IconComponent = LucideIcons[icon] || LucideIcons.HelpCircle;

            return (
              <div
                key={index}
                className="  rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center text-center"
              >
                <div className={`p-3 rounded-full bg-gray-50 mb-4`}>
                  <IconComponent
                    size={36}
                    strokeWidth={2}
                    className={color || "text-teal-600"}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {label}
                </h3>
                <div className="text-gray-600 text-sm">
                  <PrismicRichText field={description} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Tag Line */}
        {tag_line && (
          <p className="mt-10 text-gray-700 text-lg">{tag_line}</p>
        )}
      </div>
      {slice.primary.cta && (
        <div className="flex justify-center mt-10">
          <Button as="a" href={slice.primary.cta.url}>
            {slice.primary.cta.text}
          </Button>
        </div>
      )}
    </section>
  );
};

export default TeachingStyle;
