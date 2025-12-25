"use client";

import { User, Clipboard, CheckCircle } from "lucide-react";

export default function HowToEnrol() {
  const steps = [
    {
      icon: User,
      title: "Submit Your Details",
      description: "Fill out a short form with name, email, phone, grade, and learning goals.",
    },
    {
      icon: Clipboard,
      title: "Free Assessment",
      description: "We’ll schedule a short pre-trial assessment to match the best tutor.",
    },
    {
      icon: CheckCircle,
      title: "Book Your Trial or Start Regular Classes",
      description: "Begin your journey confidently with a UK-certified teacher.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-teal-700 mb-10">How to Enrol</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center bg-white rounded-2xl p-6 pt-14 border border-teal-100 shadow-sm hover:shadow-md hover:border-teal-400 transition-all duration-300"
            >
              {/* Floating Icon */}
              <div className="absolute -top-6 p-3 bg-teal-100 rounded-full">
                <step.icon className="w-8 h-8 text-teal-600" />
              </div>

              <h3 className="font-semibold text-teal-700 mb-2 text-center">{step.title}</h3>
              <p className="text-gray-700 text-sm text-center">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="/book-trial"
            className="inline-block bg-teal-600 text-white font-medium py-3 px-8 rounded-xl hover:bg-teal-700 transition-colors duration-200"
          >
            Book Free Trial Lesson →
          </a>
        </div>
      </div>
    </section>
  );
}
