"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const subjects = [
  {
    title: "Maths Tuition UK",
    description:
      "Master problem-solving, reasoning & exam skills from KS1 to A-Level with interactive tutors.",
    link: "/uk/subjects/maths",
    image: "/Images/website icons/exams prep logo.png",
  },
  {
    title: "English Tuition UK",
    description:
      "Improve reading, writing, grammar & literature skills with qualified UK teachers.",
    link: "/uk/subjects/english",
    image: "/Images/website icons/school level logo.png",
  },
  {
    title: "Science Tuition UK",
    description:
      "Physics, Chemistry & Biology from KS2 to A-Level — learn through experiments & practical examples.",
    link: "/uk/subjects/science",
    image: "/Images/website icons/exams prep logo.png",
  },
  {
    title: "Computer Science Tuition UK",
    description:
      "Learn coding, algorithms & computing concepts aligned with GCSE & A-Level boards.",
    link: "/uk/subjects/computer-science",
    image: "/Images/website icons/Enrichment courses l logo.png",
  },
  {
    title: "Languages Tuition UK",
    description:
      "Learn Arabic, Urdu, Persian & English (ESL) with native speakers for fluency & cultural confidence.",
    link: "/uk/subjects/languages",
    image: "/Images/website icons/languages logo.png",
  },
];

const AcademicSubjects = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      {/* Enhanced Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Core Academic <span className="text-teal-600">Subjects</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full mx-auto"></div>
      </div>

      {/* Enhanced Grid - All cards with equal width */}
      <div className="max-w-7xl mx-auto">
        {/* First 3 subjects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {subjects.slice(0, 3).map((subject, index) => (
            <SubjectCard key={index} subject={subject} />
          ))}
        </div>
        
        {/* Last 2 subjects centered with equal width */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {subjects.slice(3, 5).map((subject, index) => (
              <SubjectCard key={index + 3} subject={subject} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Subject Card Component for reusability
const SubjectCard = ({ subject }) => {
  return (
    <div className="group relative flex flex-col bg-white border border-gray-100 rounded-2xl p-6 hover:border-teal-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 min-h-[340px] w-full">
      {/* Image Container - Centered - Removed hover effects */}
      <div className="flex justify-center mb-4">
        <div className="relative w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center">
          {/* Actual Image component - Removed group-hover effects */}
          <Image 
            src={subject.image} 
            alt={subject.title}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 flex flex-col">
        {/* Title with no-wrap to prevent UK from breaking */}
        <div className="mb-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-700 transition-colors duration-300 leading-tight whitespace-nowrap">
            {subject.title}
          </h3>
        </div>

        {/* Description - Centered */}
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-600 text-sm leading-relaxed text-center line-clamp-3">
            {subject.description}
          </p>
        </div>
      </div>

      {/* Button - Centered at Bottom */}
      <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-teal-100 transition-colors duration-300">
        <Link href={subject.link} className="block">
          <Button
            variant="outline"
            className="w-full border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-300 font-medium py-2.5"
          >
            Learn More →
          </Button>
        </Link>
      </div>

      {/* Subtle Hover Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-teal-500/10 transition-all duration-500 pointer-events-none"></div>
    </div>
  );
};

export default AcademicSubjects;