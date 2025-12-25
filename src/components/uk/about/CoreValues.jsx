"use client";
import React from "react";
import { Award, ClipboardCheck, Heart, Lightbulb,   ShieldCheck   } from "lucide-react";
import { icon } from "@fortawesome/fontawesome-svg-core";
const iconMap = {
  Award,
  ClipboardCheck,
  Heart,
  Lightbulb,
  ShieldCheck
}
const CoreValues = ( ) => {
   
const values=[
  {
    title:"Excellence",
    desc:"Delivering the highest teaching standards in every lesson.",
    icon:"Award"
  },
  {
    title:"Integrity",
    desc:"Transparent pricing, honest communication, and fair policies.",
    icon:"ClipboardCheck"
  },
  {
    title:"Empathy",
    desc:"Understanding each child’s unique learning journey.",
    icon:"Heart"
  },
  {
    title:"Innovation",
    desc:"Using digital tools to make education interactive and effective.",
    icon  :"Lightbulb"
  },
  {
    title:"Accountability",
    desc:"Measurable progress and consistent feedback.",
    icon:"ShieldCheck"
  }
]
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl  font-bold text-gray-900">
          Our Core Values
        </h2>
         
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {values.map((v, i) => {
          const Icon=iconMap[v.icon]
          return(
          <div
            key={i}
            className="flex flex-col items-center text-center bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="bg-teal-50 p-4 rounded-full mb-4"> <Icon className="w-8 h-8 text-teal-700" /></div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              {v.title}
            </h3>
            <p className="text-gray-600 text-base sm:text-sm leading-relaxed">
              {v.desc}
            </p>
          </div>
        )
        })}
      </div>
    </section>
  );
};

export default CoreValues;
