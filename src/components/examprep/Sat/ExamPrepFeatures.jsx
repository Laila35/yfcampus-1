"use client";

import React from "react";
import { Poppins, Inter } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function ExamPrepFeatures({ features = [] }) {
  return (
    <section className={`relative py-24 px-6 md:px-16 ${inter.className}`}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2
          className={`text-4xl font-bold mb-6 text-gray-900 tracking-tight ${poppins.className}`}
        >
          Exam Prep Features
        </h2>

        {/* Decorative Line */}
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-16 rounded-full"></div>

        {/* Features Grid (Minimal, No Backgrounds) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10 justify-items-center">
          {features.length > 0 ? (
            features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105"
              >
                {/* Icon/Image */}
                {feature.icon?.url && (
                  <div className="w-16 h-16 mb-5 flex items-center justify-center">
                    <Image
                      src={feature.icon.url}
                      alt={feature.icon.alt || "Feature icon"}
                      width={64}
                      height={64}
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Title */}
                <h3
                  className={`text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors duration-300 ${poppins.className}`}
                >
                  {feature.title}
                </h3>

                {/* Decorative underline */}
                <div className="w-10 h-[2px] bg-teal-400 mb-4 group-hover:w-16 transition-all duration-300 rounded-full"></div>

                {/* Description */}
                {feature.description && (
                  <p className="text-gray-600 text-base leading-relaxed max-w-[280px]">
                    {feature.description}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-lg">No features found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
