import React from "react";
import { Monitor, FileText, CalendarCheck, Volume2, Award } from "lucide-react";

// Icon mapping
const iconMap = {
  Monitor,
  FileText,
  CalendarCheck,
  Volume2,
  Award,
};

const ToolsTeachingMethodsSection = () => {
  const methods = [
    {
      icon: "Monitor",
      title: "Interactive Whiteboard",
      text: "Screen sharing for real-time teaching"
    },
    {
      icon: "FileText",
      title: "Digital Worksheets",
      text: "Assignments & practice exercises"
    },
    {
      icon: "FileText", 
      title: "Mock Tests & Past Papers",
      text: "Practice with previous exam questions"
    },
    {
      icon: "CalendarCheck",
      title: "Audio & Video Resources",
      text: "Materials to aid in study and revision"
    },
    {
      icon: "Award",
      title: "Virtual Reward Badges",
      text: "Motivational badges for younger students"
    }
  ];

  return (
    <section className="bg-white py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl font-semibold tracking-tight">
            Our <span className="text-teal-600">Teaching Tools & Methods</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Discover our step-by-step approach that blends technology and pedagogy.
          </p>
        </div>

        {/* Single Horizontal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {methods.map(({ icon, title, text }, index) => {
            const IconComponent = iconMap[icon];

            return (
              <div 
                key={index} 
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-teal-300 cursor-pointer group flex flex-col items-center text-center h-[280px]"
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-teal-50 transition-colors duration-300">
                    {IconComponent && (
                      <IconComponent className="w-8 h-8 text-teal-600 group-hover:text-teal-700 transition-colors duration-300" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg text-gray-800 mb-3 group-hover:text-teal-800 transition-colors duration-300">
                  {title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsTeachingMethodsSection;