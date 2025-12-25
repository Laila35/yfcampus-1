import React from "react";
import { Poppins, Inter, Bebas_Neue } from "next/font/google";

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const HeroSection = ({ heading, subheading, para }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 py-20 px-6 max-w-6xl mx-auto">
      {/* Left: Heading & Subheading */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h1
          className={`text-4xl md:text-5xl font-bold leading-tight text-gray-900 ${bebas.className}`}
        >
          {heading}
        </h1>

        <h3
          className={`text-lg md:text-xl font-semibold text-gray-700 ${poppin.className}`}
        >
          {subheading}
        </h3>
      </div>

      {/* Right: Paragraph */}
      <div className="w-full md:w-1/2">
        <p
          className={`text-base md:text-lg leading-relaxed text-gray-600 ${inter.className}`}
        >
          {para}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
