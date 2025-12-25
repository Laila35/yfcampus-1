"use client";
import React from "react";
import { PrismicRichText } from "@prismicio/react";

const CalltoAction = ({ cta }) => {
  if (!cta || cta.length === 0) return null;

  const call = cta[0]; // Access first (or only) item

  return (
    <section className="py-16 px-4 flex justify-center">
      <div className="bg-teal-600 text-white rounded-2xl p-10 shadow-xl text-center max-w-3xl w-full flex flex-col items-center">
        {/* Description */}
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-snug mb-6">
          {call.desc}
        </h2>

        {/* CTA Button (Rich Text field) */}
        <a
          href="/book-trial"
          className="bg-white text-teal-600 font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-2xl transition-transform hover:-translate-y-1 hover:bg-teal-50"
        >
          <PrismicRichText field={call.title} />
        </a>
      </div>
    </section>
  );
};

export default CalltoAction;
