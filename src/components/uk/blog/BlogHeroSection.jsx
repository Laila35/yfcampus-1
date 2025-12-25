"use client";
import { Button } from "@/components/ui/button";
import React from "react";
 import { FaWhatsapp } from "react-icons/fa";

const BlogHeroSection = () => {
  return (
    <section className="py-12 px-6 md:px-16   my-4">
      <div className="max-w-6xl mx-auto flex flex-col items-start gap-6">
        {/* Text content */}
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
           Learning Hub & Blog – Tips, Insights & Success Strategies
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
            Explore expert learning advice, study tips, and parental guides to help students succeed in UK curriculum subjects and exams.
           </h3>
          <p className="text-gray-600 leading-relaxed">
            Welcome to the Your Future Campus UK Learning Hub — your go-to source for educational insights, learning tips, and practical advice from professional tutors.
 Here, we share expert articles and parent-friendly resources that cover everything from exam preparation and subject techniques to study motivation and time management.
 Whether your child is preparing for GCSE Maths, improving English grammar, or learning coding basics, our blog provides actionable advice and real-world learning strategies to make studying enjoyable and effective.

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

export default BlogHeroSection;
