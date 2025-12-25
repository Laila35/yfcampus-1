"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = ({ heading,  desc }) => {
  const [mainTitle, highlighted] = heading.split(" – ");

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 gap-8 lg:gap-12">

      {/* Text Section */}
      <div className="flex-1 flex flex-col gap-4 md:gap-6 text-center lg:text-left w-full lg:max-w-lg">

        <h1 className="text-3xl sm:text-4xl md:text-5xl   font-bold leading-tight text-gray-900">
          {mainTitle}
          {highlighted && (
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent"> – {highlighted}</span>
          )}
        </h1>

       

        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          {desc}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-6 justify-center lg:justify-start">
          <Link href="/uk/book-lesson" className="hover:cursor-pointer">
            <Button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 text-base md:text-lg shadow-lg hover:shadow-xl">
              Book a Free Trial
            </Button>
          </Link>
          <Link href="/uk/pricing" className="hover:cursor-pointer">
            <Button variant="outline" className="px-8 py-4 border-2 border-teal-600 text-teal-600 rounded-xl font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 text-base md:text-lg">
              UK Pricing
            </Button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center w-full lg:max-w-2xl">
        <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
          <Image
            src="/Images/HeroSection/contact.webp"
            alt="Contact Us – Your Future Campus UK"
            width={600}
            height={500}
            className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-500 ease-out shadow-xl"
            priority
          />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;