"use client";
import React from "react";
import Link from "next/link";
// 👉 Import your existing form component here
import LandingRegister from "@/components/ContactForm";

const HeroSection = ({ title, description }) => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between py-1 mt-1 px-1 sm:px-[1.7rem] max-w-7xl mx-auto">
      {/* LEFT SIDE: TEXT CONTENT - Aligned to top */}
      <div className="md:w-1/2 w-full text-center md:text-left space-y-2 md:pt-8">
        {/* Title with teal color for the second half */}
        <h2 className="text-3xl md:text-4xl font-bold">
          {title.includes("Personalised Online Learning") ? (
            <>
              Personalised Online Learning
              <span className="block text-teal-600 font-bold">
                with Qualified UK Tutors
              </span>
            </>
          ) : title.includes(" – ") ? (
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
        <p className="text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0 pt-4">
          {description || "Build your child's confidence and academic success through one-to-one lessons in Maths, English, Science, Computer Science, and Languages. Each session is tailored to the student's level, taught live by experienced UK teachers."}
        </p>
        
        {/* ✅ Book a Free Trial Lesson Button */}
        <div className="pt-6">
          <Link 
            href="/uk/book-lesson" 
            className="inline-block px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
          >
            Book a Free Trial Lesson
          </Link>
        </div>
        
      </div>
      
      {/* RIGHT SIDE: FORM - Aligned to top */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-end items-start mt-10 md:mt-0">
        {/* ✅ PLACE YOUR FORM COMPONENT HERE */}
        <div className="w-full max-w-md p-6 border border-gray-200 rounded-xl shadow-sm bg-white">
          <div className="mb-4">
          </div>
          <LandingRegister />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;