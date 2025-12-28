"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LandingRegister from "@/components/ContactForm"; // Import the contact form

// Typewriter component for optimal performance
const TypewriterTitle = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Only animate once on first render
    if (hasAnimated) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    } else {
      setHasAnimated(true);
    }
  }, [currentIndex, text, speed, hasAnimated]);

  // Return full text if animation completed or if it's the initial render
  if (hasAnimated || currentIndex === text.length) {
    return (
      <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-3xl font-bold text-gray-900 leading-tight tracking-tight">
        {text}
      </h1>
    );
  }

  return (
    <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-3xl font-bold text-gray-900 leading-tight tracking-tight">
      {displayText}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

const HeroSection = ({
  title = "Welcome to Our Platform",
  desc = "Explore projects, learn new skills, and connect with a vibrant community.",
  image = "/Images/subjects.webp",
}) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-6 lg:px-4 py-5 gap-12">
      
      {/* Text Section */}
      <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left space-y-6">
        {/* Animated Title */}
        <TypewriterTitle text={title} speed={30} />

        {/* Description */}
        <p className="text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
          {desc}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mt-6">
          <Link href="/uk/pricing">
            <Button variant="none" className="px-8 py-4 bg-gradient-to-tl from-teal-600 to-emerald-600 text-white">
              View Pricing
            </Button>
          </Link>
          <Link href="/uk/tutors">
            <Button variant="none" className="px-8 py-4 bg-gradient-to-tr from-gray-600 to-gray-800 text-white hover:from-gray-700 hover:to-gray-900">
              Become a Tutor
            </Button>
          </Link>
        </div>
      </div>

      {/* Form Section - Replaced Image with Contact Form */}
      <div className="md:w-1/2 w-full">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-lg w-full mx-auto">
          {/* Optional: Add a title for the form */}
          {/* Contact Form */}
          <LandingRegister />
          
          {/* Optional: Add some trust indicators */}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;