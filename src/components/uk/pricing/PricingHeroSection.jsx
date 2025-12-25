"use client";
import { Button } from "@/components/ui/button";
import React from "react";
 import { FaWhatsapp } from "react-icons/fa";

const PricingHeroSection = () => {
  return (
    <section className="py-12 px-6 md:px-16   my-4">
      <div className="max-w-6xl mx-auto flex flex-col items-start gap-6">
        {/* Text content */}
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Affordable Online Tuition UK – Transparent Pricing for 1-to-1 Lessons
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
            Choose flexible, affordable online tuition plans — one-to-one lessons with qualified UK tutors in Maths, English, Science & more.
          </h3>
          <p className="text-gray-600 leading-relaxed">
            At Your Future Campus UK, we believe high-quality education should be accessible to every family. Our tuition plans are designed to be affordable, flexible, and transparent, with no registration or hidden fees. Parents can choose between 30-minute and 1-hour personalised one-to-one sessions — ideal for both focused learning and extended study support. All lessons follow the UK National Curriculum, taught live by certified tutors who tailor each session to your child’s age, level, and learning goals.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a href="/uk/book-lesson">
            <Button className="bg-teal-700 text-white hover:bg-teal-800 transition">
              Book a FREE Trial Lesson
            </Button>
          </a>
          <a
            href="https://wa.me/447532792318"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-500 text-white hover:bg-green-600 transition flex items-center gap-2">
              <FaWhatsapp className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingHeroSection;
