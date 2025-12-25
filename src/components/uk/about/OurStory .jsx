"use client";
import React from "react";
import Image from "next/image";
import { BookOpen } from "lucide-react";

const OurStory = ( ) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      
      {/* Centered Heading Section */}
      <div className="text-center mb-12 lg:mb-16">
         
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our - Story
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mx-auto"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-72 sm:h-80 lg:h-96 xl:h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Images/about/story.jpg"
              alt="Our Story"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/5 rounded-2xl"></div>
          </div>
        </div>

        {/* Right Content - Paragraph */}
        <div className="w-full lg:w-1/2">
          <div className="max-w-lg">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-400 rounded-r-lg p-4 hover:shadow-md transition-all duration-300">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Your Future Campus began as a small initiative by passionate educators to help students struggling during remote learning.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-400 rounded-r-lg p-4 hover:shadow-md transition-all duration-300">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Today, it's a growing online platform trusted by thousands of families in the UK and abroad.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-400 rounded-r-lg p-4 hover:shadow-md transition-all duration-300">
                <p className="text-gray-700 text-lg leading-relaxed">
                  By combining academic expertise with technology, we've created a system that ensures every student learns smarter, achieves higher, and feels more confident in their studies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;