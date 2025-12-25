"use client";

import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    title: "From Struggling to Top of the Class",
    text: "My daughter was always nervous about maths, but within two months of lessons with Your Future Campus, she moved from average to top of her group. Her confidence has skyrocketed.",
    author: "Mrs. Eleanor H., Manchester (Year 6 Parent)",
  },
  {
    title: "GCSE Grade 9 Achieved!",
    text: "The tutors helped me not only understand maths but also enjoy it! The exam preparation and mock sessions were a huge help — I got a Grade 9 in GCSE Maths.",
    author: "Olivia T., Birmingham (GCSE Student)",
  },
  {
    title: "Perfect Tutor Match",
    text: "They assigned a tutor who was perfect for my son’s personality. The assessment before trial made all the difference.",
    author: "Mr. James K., London (Year 8 Parent)",
  },
  {
    title: "A-Level Maths Made Simple",
    text: "I was completely lost with mechanics and calculus, but my tutor explained everything patiently and in simple steps. I’m now predicted an A!",
    author: "Hamza M., Leeds (A-Level Student)",
  },
  {
    title: "Flexible, Friendly, and Professional",
    text: "The best part is how flexible the timings are. Lessons fit perfectly around school, and the tutors are always professional and supportive.",
    author: "Mrs. Farah I., Bradford (GCSE Parent)",
  },
  {
    title: "Excellent Support for International Students",
    text: "Even though we live in Canada, my children follow the UK curriculum online through YFC. It’s just like having a school at home!",
    author: "Mrs. Sarah A., Toronto (Parent of Year 4 & Year 9 Students)",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl   font-bold text-gray-900">
          Student & Parent Testimonials
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="bg-teal-100 text-gray-800 rounded-xl p-6 shadow-sm border border-teal-200 hover:shadow-md transition-shadow duration-300"
          >
            <Quote className="w-8 h-8 text-teal-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="mb-4 text-gray-700">{item.text}</p>
            <p className="font-medium text-gray-600">{item.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
