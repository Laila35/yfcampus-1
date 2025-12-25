import React from "react";

const CTASection = ({ ctaContent }) => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center p-8 max-w-4xl mx-auto
      bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500
      rounded-3xl shadow-2xl"
    >
      
      {/* Text Content */}
      <div className="flex flex-col gap-2 text-white md:text-left text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold drop-shadow-lg">
          {ctaContent.title}
        </h1>
        <h3 className="text-lg md:text-xl font-medium drop-shadow">
          Limited seats are available
        </h3>
      </div>

      {/* Button */}
      <div className="mt-6 md:mt-0">
        <a
          href="#"
          className="inline-block whitespace-nowrap bg-teal-400 text-teal-900 font-bold px-10 py-3 rounded-2xl shadow-lg hover:bg-teal-300 transition transform hover:text-gray-900"
        >
          {ctaContent.buttonText}
        </a>
      </div>
    </section>
  );
};

export default CTASection;
