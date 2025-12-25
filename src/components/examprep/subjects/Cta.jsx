import React from "react";
import Link from "next/link";

const Cta = ({ cta }) => {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-teal-700 py-16 px-6 text-center rounded-2xl mx-4 md:mx-12 my-12 relative overflow-hidden">
      {/* Optional subtle background shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -z-0"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full -z-0"></div>

      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-relaxed">
          {cta}
        </h2>
        <Link
          href="/book-trial"
          className="inline-block bg-white text-teal-700 font-semibold text-lg sm:text-xl px-8 py-4 rounded-full shadow-lg hover:bg-teal-100 hover:scale-105 transition-transform duration-300"
        >
          👉 Book a Free Trial Lesson
        </Link>
      </div>
    </section>
  );
};

export default Cta;
