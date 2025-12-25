"use client";
import Image from "next/image";
import React from "react";
import { ArrowRight, Book, BookOpen, PlayCircle } from "lucide-react";
import Link from "next/link";

const HeroSection = ({ title,  desc, image }) => {
  return (
    <section className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      {/* Left Content */}
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight sm:leading-snug">
            {title.split(" – ")[0]}{" "}
            <span className="block text-teal-600 font-semibold mt-1 sm:mt-2">
              {title.split(" – ")[1]}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {desc.split(" – ")[0]}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
          <Link href="/uk/book-lesson" className="hover:cursor-pointer">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-base transition-colors duration-200 flex items-center justify-center gap-2">
              Book a Free Trial
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
         <Link href="/uk/subjects" className="hover:cursor-pointer">
          
          <button className="border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-base transition-colors duration-200 flex items-center justify-center gap-2">
            
            Learn More
            <ArrowRight className="w-4 h-4" />
          </button>
         </Link>
        </div>
      </div>

      {/* Right Image - Landscape proportions */}
      <div className="flex-1 w-full max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={image}
            alt={"About Your Future Campus UK – Empowering Students to Succeed"}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;