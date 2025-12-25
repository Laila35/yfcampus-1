"use client";
import React from "react";
import { Lightbulb, Rocket } from "lucide-react";
const iconMap = {
  Lightbulb,
  Rocket,
}
const MissionVisionSection = ( ) => {
  const mission = [
     {
      title:"Our Mission",
      desc:"To provide high-quality, affordable, and personalised online education that inspires students to achieve academic excellence, confidence, and lifelong learning skills.",
      icon:"Lightbulb"
     },
     {
      title:"Our Vision",
      desc:"To become the UK’s most trusted and student-focused online learning platform — connecting learners with certified tutors who make education engaging, measurable, and meaningful.",
      icon:"Rocket"
     }
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Section Heading */}
      <h2 className="text-3xl   font-bold  text-center mb-14">
        Our Mission & Vision
      </h2>

      {/* Cards Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {mission.map((item, index) => {
          const Icon=iconMap[item.icon]
          return (
          
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-2xl border border-transparent hover:border-teal-100 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full">
              <Icon className="w-8 h-8 text-teal-600" />  
            </div>
            <h3 className="text-xl font-semibold text-teal-600 mb-2">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        )
        })}
      </div>
    </section>
  );
};

export default MissionVisionSection;
