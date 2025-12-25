"use client";
import React from "react";
import Image from "next/image";

const LessonStepsSection = () => {
  const steps = [
    {
      title: "Assessment & Matching",
      description: "We assess the student's level and assign the perfect tutor.",
      image: "/Images/prc/computer tution  l logo.png" // Update with actual filename
    },
    {
      title: "Personalised Plan",
      description: "Lessons are tailored to goals and school syllabus.",
      image: "/Images/prc/English tution  l logo.png" // Update with actual filename
    },
    {
      title: "Interactive Sessions",
      description: "Live lessons using whiteboards, visuals & examples.",
      image: "/Images/prc/maths  tution KSI to L1 l logo.png" // Update with actual filename
    },
    {
      title: "Weekly Reports",
      description: "Parents receive progress summaries and tips.",
      image: "/Images/prc/Science tution  l logo.png" // Update with actual filename
    },
    {
      title: "Continuous Support",
      description: "Tutors monitor improvement and provide feedback after each class.",
      image: "/Images/prc/computer tution  l logo.png" // Update with actual filename
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-[3.7rem] py-12">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-3xl font-semibold mb-3">
          How Our Lessons <span className="text-teal-500">Work</span> 
        </h2>
      </div>

      {/* Steps Grid - Modified to center the last two cards */}
      <div className="flex flex-col items-center">
        {/* First 3 cards in 3-column grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-8">
          {steps.slice(0, 3).map((step, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm transition-all duration-300 hover:border-teal-500 cursor-pointer group flex flex-col items-center"
            > 
              {/* Centered Image */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden border-2 border-gray-100">
                  {step.image ? (
                    <div className="relative w-14 h-14">
                      <Image
                        src={step.image}
                        alt={`${step.title} icon`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 56px) 100vw, 56px"
                        quality={85}
                      />
                    </div>
                  ) : (
                    <span className="text-teal-600 font-bold text-xl">
                      {step.title.charAt(0)}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-semibold mb-3 group-hover:text-teal-800 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-800 leading-relaxed">
                  {step.description}
                </p>
              </div>  
            </div>
          ))}
        </div>

        {/* Last 2 cards centered in their own row */}
        <div className="flex flex-col md:flex-row justify-center gap-8 w-full">
          {steps.slice(3).map((step, index) => (
            <div
              key={index + 3}
              className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm transition-all duration-300 hover:border-teal-500 cursor-pointer group w-full md:w-[400px] flex flex-col items-center"
            > 
              {/* Centered Image */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden border-2 border-gray-100">
                  {step.image ? (
                    <div className="relative w-14 h-14">
                      <Image
                        src={step.image}
                        alt={`${step.title} icon`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 56px) 100vw, 56px"
                        quality={85}
                      />
                    </div>
                  ) : (
                    <span className="text-teal-600 font-bold text-xl">
                      {step.title.charAt(0)}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-semibold mb-3 group-hover:text-teal-800 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-800 leading-relaxed">
                  {step.description}
                </p>
              </div>  
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LessonStepsSection;