"use client";

import React from "react";
import { User, UserCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ExploreTutors() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Explore Tutors by Category
        </h2>
        <div className="w-20 h-1 bg-teal-500 rounded-full mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Parents and students can choose based on preference or comfort.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-4xl mx-auto ">
        {/* Male Tutors */}
        <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative flex flex-col h-full">
            <div className="flex items-center gap-5 mb-6">
              <div className="p-4 bg-blue-100 rounded-2xl group-hover:bg-blue-200 transition-colors duration-300">
                <User className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Male Tutors
              </h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
              Ideal for students who feel comfortable with male teachers, often
              specialising in secondary, GCSE, and A-Level STEM subjects.
            </p>
            
            <Link
              href="/uk/tutors/male-tutors"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-all mt-auto"
            >
              View Male Tutors
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
            </Link>
          </div>
        </div>

        {/* Female Tutors */}
        <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative flex flex-col h-full">
            <div className="flex items-center gap-5 mb-6">
              <div className="p-4 bg-pink-100 rounded-2xl group-hover:bg-pink-200 transition-colors duration-300">
                <UserCheck className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Female Tutors
              </h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
              Warm, patient, and skilled in teaching young learners, early
              education, and language-based subjects.
            </p>
            
            <Link
              href="/uk/tutors/female-tutors"
              className="inline-flex items-center gap-2 text-pink-600 font-semibold group-hover:text-pink-700 transition-all mt-auto"
            >
              View Female Tutors
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}