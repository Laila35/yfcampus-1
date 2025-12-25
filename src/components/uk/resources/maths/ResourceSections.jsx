"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { CheckCircle } from "lucide-react"; // optional icon for each point
import Link from "next/link";

const ResourceSections = () => {
  const resources = [
    {
      title: "Worksheets",
      closing_line: "All worksheets are printable and come with answer keys.",
      points: [
        "KS1 Maths Worksheets",
        "KS2 Maths Worksheets",
        "KS3 Maths Worksheets",
        "GCSE Maths Worksheets",
        "A-Level Maths Worksheets",
      ],
    },
    {
      title: "Past Papers",
      closing_line:
        "Includes past papers with mark schemes & examiner reports.",
      points: [
        "GCSE Past Papers – AQA, Edexcel, OCR",
        "A-Level Past Papers – AQA, Edexcel, OCR",
        "SAT Maths Practice Papers",
      ],
    },
    {
      title: "Study Guides",
      closing_line: "Simple notes, checklists, and formula sheets for revision.",
      points: [
        "KS2 Maths Study Guide",
        "GCSE Maths Revision Guide",
        "A-Level Maths Study Guide",
      ],
    },
  ];

  const [activeTab, setActiveTab] = React.useState("Worksheets");
  const activeResource = resources.find((r) => r.title === activeTab);

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 ">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
        Maths Resources
      </h1>

      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {resources.map(({ title }) => (
          <Button
            key={title}
            variant={activeTab === title ? "default" : "outline"}
            className="transition hover:scale-105"
            onClick={() => setActiveTab(title)}
          >
            {title}
          </Button>
        ))}
      </div>

      {/* Active Tab Content */}
      {activeResource && (
        <div className="max-w-3xl mx-auto  rounded-2xl shadow-lg p-8 text-center transition-all duration-300">
          <div className="grid gap-4 mb-6">
            {activeResource.points.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-teal-50 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition"
              >
                 <Link href="/"><CheckCircle className="w-6 h-6 text-teal-600" /></Link>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700">{activeResource.closing_line}</p>
        </div>
      )}
    </section>
  );
};

export default ResourceSections;
