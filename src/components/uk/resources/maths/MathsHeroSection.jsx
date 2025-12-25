// components/MathsHeroSectionWithBG.js
import React from 'react';

const MathsHeroSectionWithBG = () => {
  const title = "Free Maths Resources – Worksheets, Past Papers & Study Guides";
  const subline = "Helping UK students master Maths from KS1 to A-Level with structured, curriculum-aligned materials.";
  const intro = "Learning maths is easier with the right practice materials. At Your Future Campus, we provide a wide collection of free maths resources for UK students, from KS1 to A-Level. You’ll find printable worksheets, past papers, and revision guides designed to match the UK National Curriculum and exam board requirements (AQA, Edexcel, OCR). Whether your child is preparing for SATs, GCSE, or A-Level, or simply needs extra practice with fractions, algebra, or geometry, these resources provide structured, step-by-step support.";

  // Replace with any high-res image URL you want
  const backgroundImage = "/images/HeroSection/resource.avif";

  return (
    <section
      className="relative max-w-6xl mx-auto py-32 px-6 sm:px-12 lg:px-24 text-center bg-cover bg-center bg-no-repeat my-10 rounded-3xl overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage});`,
        backgroundSize: "cover",
        backgroundPosition: "center ",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-6">
          {subline}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          {intro}
        </p>
        <a
          href="/maths-resources"
          className="inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Explore Resources
        </a>
      </div>
    </section>
  );
};

export default MathsHeroSectionWithBG;
