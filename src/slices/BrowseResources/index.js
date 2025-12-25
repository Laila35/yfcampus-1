"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, FileText, Lightbulb, ArrowRight } from "lucide-react";

/**
 * @typedef {import("@prismicio/client").Content.ResourceCategorySlice} ResourceCategorySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ResourceCategorySlice>} ResourceCategoryProps
 * @type {import("react").FC<ResourceCategoryProps>}
 */
const ResourceCategory = ({ slice ,context}) => {
    const{subject,resource}=context
    
  const categoryData = slice.primary.category || [];

  // Group CTAs by title (e.g. Worksheets, Past Papers)
  const grouped = categoryData.reduce((acc, item) => {
    const title = item.title || "Untitled";
    if (!acc[title]) acc[title] = [];
    acc[title].push(item.cta);
    return acc;
  }, {});

  const categories = Object.keys(grouped);
  const [activeTab, setActiveTab] = React.useState(categories[0]);

  const iconMap = {
    Worksheets: <BookOpen className="w-6 h-6 text-teal-600" />,
    "Past Papers": <FileText className="w-6 h-6 text-teal-600" />,
    "Study Guides": <Lightbulb className="w-6 h-6 text-teal-500" />,
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-20 px-6 sm:px-12 lg:px-24  "
    >
      <div className="text-center mb-16">
        <h1 className="text-3xl   font-bold ">
 {slice.primary.heading}
        </h1>
        <p className="mt-3 text-gray-600 text-lg">
          Explore curated resources by level and type to strengthen your maths skills.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-14 flex-wrap">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeTab === category ? "bg-teal-600" : "outline"}
            onClick={() => setActiveTab(category)}
            className={`
  transition-all duration-300 rounded-lg py-2 px-4 flex items-center gap-2
  ${activeTab === category 
    ? "bg-teal-600 text-white" 
    : "text-teal-600 border-teal-600 hover:bg-teal-50"
  }
`}
          >
            {iconMap[category] || <BookOpen className="w-5 h-5" />}
            <span>{category}</span>
           </Button>
        ))}
      </div>

      {/* Active Category Section */}
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-lg p-10 transition-all duration-500">
        {grouped[activeTab]?.length ? (
          <div className="grid gap-4">
            {grouped[activeTab].map((cta, index) => (
              <Button
                key={cta?.key || index}
                
                className="group flex items-center justify-between bg-slate-50 hover:bg-teal-50 border border-slate-100
                           rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 text-left">
                  <ArrowRight className="w-5 h-5 text-teal-600 group-hover:translate-x-1 transition-transform" />
                  <p className="text-gray-800 font-medium">{cta?.text}</p>
                </div>
              </Button>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center py-6">
            No resources available.
          </p>
        )}
      </div>
    </section>
  );
};

export default ResourceCategory;
