import Image from "next/image";
import React from "react";

const HeroSection = ({ title, subtitle, description, imageUri }) => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-12">

      {/* Left Section */}
      <div className="flex-1 space-y-6">
        <h1 className="text-3xl   font-bold leading-tight">
          {title}
        </h1>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          {description}
        </p>

        <div className="flex items-center gap-4 pt-2">
          <a
            href="/uk/subjects"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all shadow-sm hover:shadow-md"
          >
            Explore Subjects
          </a>
          <a
            href="/uk/pricing"
            className="px-6 py-3 border border-gray-300 text-slate-700 hover:text-slate-900 hover:border-gray-400 rounded-xl font-medium transition-all"
          >
            View Pricing
          </a>
        </div>
      </div>
      {/* Right Section - Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <Image
          src={imageUri}
          alt="Tutoring"
          width={520}          // Proper width
          height={390}         // Proper height → keeps aspect ratio
          className="rounded-2xl shadow-lg object-cover w-full max-w-[520px] h-auto"
          priority
        />
      </div>

    </section>
  );
};
export default HeroSection;
