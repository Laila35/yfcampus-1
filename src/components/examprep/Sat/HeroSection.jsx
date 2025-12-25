import React from "react";
import { Poppins, Inter } from "next/font/google";
import Register from "@/components/landingPage/Register";

// Load fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const HeroSection = ({
  heading,
  subheading,
  para,
 cta ,
  ctaButtonLink 
}) => {
  return (
    <section
      className={`flex items-center justify-center min-h-screen w-full 
      
      text-gray-900 py-20 px-6 sm:px-10 ${inter.className}`}
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-14">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-8">
          {/* Heading */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-4xl font-extrabold leading-tight text-gray-900 tracking-tight ${poppins.className}`}
          >
            {heading}
          </h1>

          {/* Subheading */}
          {subheading && (
            <h2 className="text-xl sm:text-xl font-semibold text-gray-700 tracking-wide">
              {subheading}
            </h2>
          )}

          {/* Paragraph */}
          {para && (
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-md mx-auto md:mx-0">
              {para}
            </p>
          )}

          {/* CTA Button */}
          <a
            href={ctaButtonLink}
            className="inline-block mt-6 bg-teal-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-indigo-300"
            aria-label={cta}
          >
            {cta}
          </a>
        </div>

        {/* Right - Form */}
        <div className="md:w-1/2 w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 sm:p-10 lg:p-12 border border-white/40">
          <Register />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
