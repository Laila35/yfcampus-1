"use client";
import React from "react";
import Link from "next/link";
// 👉 Import your existing form component here
import LandingRegister from "@/components/ContactForm";

const HeroSection = ({ title, description }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-6 mt-12 px-6 sm:px-[3.7rem] max-w-7xl mx-auto">
      {/* LEFT SIDE: TEXT CONTENT */}
      <div className="md:w-1/2 w-full text-center md:text-left space-y-6">
        {/* Title */}
        <h2 className="text-3xl md:text-3xl font-semibold">
          {title.includes(" – ") ? (
            <>
              {title.split(" – ")[0]}
              <span className="block text-teal-600 font-semibold">
                {title.split(" – ")[1]}
              </span>
            </>
          ) : (
            title
          )}
        </h2>
        
        {/* Description */}
        <p className="text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
          {description}
        </p>
        
        {/* ✅ Book a Free Trial Lesson Button */}
        <div className="pt-2">
          <Link 
            href="/uk/book-lesson" 
            className="inline-block px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
          >
            Book a Free Trial Lesson
          </Link>
        </div>
      </div>
      
      {/* RIGHT SIDE: FORM (REPLACED IMAGE) */}
      <div className="md:w-1/2 w-full flex justify-center sm:justify-end items-center mt-10 md:mt-0">
        {/* ✅ PLACE YOUR FORM COMPONENT HERE */}
        <div className="w-full max-w-md p-6 border border-gray-200 rounded-xl shadow-sm">
          <LandingRegister />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;