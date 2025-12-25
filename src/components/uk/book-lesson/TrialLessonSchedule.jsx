"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const TrialLessonSchedule = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 sm:py-20 px-4 sm:px-8 lg:px-12">
      {/* Pure Color Card */}
      <div className="relative text-center bg-teal-700 text-white rounded-2xl p-6 sm:p-10 hover:shadow-[0_10px_25px_rgba(13,148,136,0.4)] transition-all duration-500 ease-out border border-teal-600">
        
        {/* Title */}
        <h2 className="text-3xl   font-bold mb-6 tracking-tight">
          Trial Lesson Schedule
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-teal-100 mb-8 leading-relaxed max-w-2xl mx-auto">
          You can choose from flexible timings, available 7 days a week:
        </p>

        {/* Schedule Info */}
        <div className="space-y-2 mb-10">
          <p className="text-base sm:text-lg font-medium">
            Monday to Friday: 9:00 AM – 9:00 PM
          </p>
          <p className="text-base sm:text-lg font-medium">
            Saturday & Sunday: 10:00 AM – 6:00 PM
          </p>
          <p className="text-sm text-teal-200 mt-1">(UK Time Zone)</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5">
          <a
            href="#"
            className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-white text-teal-800 rounded-xl font-semibold text-sm sm:text-base shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            View All Subjects
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>

          <a
            href="#"
            className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-yellow-400 text-teal-900 font-semibold rounded-xl text-sm sm:text-base shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            See Pricing Plans
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Divider line */}
        <div className="mt-12 h-1 w-24 mx-auto bg-white/80 rounded-full" />
      </div>
    </section>
  );
};

export default TrialLessonSchedule;
