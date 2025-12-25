import Image from "next/image";
import React from "react";

const HeroSection = ({ heading, subheading, desc, image, alt }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16   rounded-2xl  max-w-6xl mx-auto overflow-hidden gap-4">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-teal-700 leading-tight">
          {heading}
        </h1>

        <h3 className="text-xl   font-semibold text-gray-800 tracking-tighter">
          {subheading}
        </h3>

        <p className="text-base sm:text-lg text-gray-600 tracking-tight">
          {desc}
        </p>
      </div>

      {/* Right Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-[500px] mt-8 md:mt-0 rounded-2xl overflow-hidden shadow-lg">
        <Image
          src= {image}
          alt= {alt}
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
