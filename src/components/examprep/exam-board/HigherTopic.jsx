"use client";
import React from "react";
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";

const HigherTopic = ({ topics,   linkContent }) => {
  return (
    <section className="py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-900 mb-4"> Higher Tier Topics
</h1>
          <div className="w-24 h-1.5 bg-teal-600 rounded-full mx-auto mb-2"></div>
          <div className="w-16 h-1 bg-teal-400 rounded-full mx-auto"></div>
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {topics?.map((topicObj, index) => (
            
  
            <div
              key={index}
              className="group relative p-5 rounded-2xl border-2 border-teal-100 hover:border-teal-300 transition-all duration-300 hover:scale-[1.02] hover:rotate-1"
            >
             
              {/* Corner Decoration */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Star className="w-5 h-5 text-teal-400 fill-current" />
              </div>

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 group-hover:bg-teal-200 transition-colors duration-300 overflow-hidden">
                  {topicObj.icon && (
                    <Image
                      src={topicObj.icon}
                      alt={topicObj.altxt}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-teal-900 group-hover:text-teal-800 transition-colors duration-300">
                    {topicObj.text}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-teal-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore topic
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link Section */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 group bg-teal-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-200 transition-all duration-300 hover:gap-4 hover:scale-105"
          >
            <span>{linkContent}</span>
            <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HigherTopic;
