"use client";

import React from "react";
import { LocateFixed } from "lucide-react";
import { useRouter } from "next/navigation";

const CommonCta = ({ heading, subtitle, email, location }) => {
  const router = useRouter();

  const handleBookTrial = () => {
    // Navigate to the UK book-lesson page
    router.push("/uk/book-lesson");
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto">
      <div className="bg-teal-600 text-white rounded-3xl p-8 sm:p-12 shadow-lg flex flex-col items-center space-y-6 sm:space-y-8">
        
        {/* Headings */}
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            {heading}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Book a Free Trial Lesson Button */}
        <div className="flex justify-center items-center w-full">
          <button
            onClick={handleBookTrial}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-full font-bold hover:bg-white/90 transition-all duration-300 w-full sm:w-auto text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95"
          >
            Book a Free Trial Lesson
          </button>
        </div>

        {/* Location (Optional) - Only show if location prop is provided */}
        {location && (
          <div className="flex justify-center items-center gap-2 text-white/90 text-sm sm:text-base text-center mt-4">
            <LocateFixed size={18} />
            <p>{location}</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default CommonCta;