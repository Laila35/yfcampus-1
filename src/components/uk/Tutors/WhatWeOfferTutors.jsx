import React from "react";
import { PoundSterling, Clock, GraduationCap, Globe, Laptop, TrendingUp } from "lucide-react";
 
export default function WhatWeOfferTutors() {
  const benefits = [
    { 
      key: "pay", 
      title: "Competitive Pay", 
      detail: "Hourly pay based on subject and experience", 
      icon: <PoundSterling className="w-6 h-6" /> 
    },
    { 
      key: "hours", 
      title: "Flexible Hours", 
      detail: "Choose your preferred schedule", 
      icon: <Clock className="w-6 h-6" /> 
    },
    { 
      key: "support", 
      title: "Continuous Support", 
      detail: "Training, materials & regular workshops", 
      icon: <GraduationCap className="w-6 h-6" /> 
    },
    { 
      key: "students", 
      title: "Global Students", 
      detail: "Teach motivated learners from the UK, USA, Canada, Australia & more", 
      icon: <Globe className="w-6 h-6" /> 
    },
    { 
      key: "platform", 
      title: "Digital Platform Access", 
      detail: "Lesson tracking, scheduling, and reporting tools", 
      icon: <Laptop className="w-6 h-6" /> 
    },
    { 
      key: "growth", 
      title: "Growth Opportunities", 
      detail: "Supervisor & senior tutor roles available", 
      icon: <TrendingUp className="w-6 h-6" /> 
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What We Offer Tutors
        </h2>
        <div className="w-24 h-1 bg-teal-500 rounded-full mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Join our platform and enjoy benefits designed to support your teaching career
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit) => (
          <div
            key={benefit.key}
            className="group bg-white rounded-xl border border-gray-200 p-8 hover:border-teal-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors duration-300">
                <div className="text-teal-600">
                  {benefit.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="font-semibold text-gray-900 text-lg mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional CTA Section */}
      <div className="text-center mt-16 pt-8 border-t border-gray-200">
        <p className="text-gray-600 mb-6">
          Ready to start your teaching journey with us?
        </p>
        <a href="#application-form">
        <button className="inline-flex items-center gap-2 px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300 shadow-md">
          Apply Now
          <TrendingUp className="w-4 h-4" />
        </button>
        </a>
      </div>
    </section>
  );
}