"use client";

import React from "react";
import { MessageCircle, Phone, Mail, ArrowRight } from "lucide-react";

const ReadyToBeginCTA = ({
  heading,
  subtitle,
  steps,
  number,
  email,
  cta
}) => {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto my-12">
      {/* Content Box */}
      <div className="relative bg-teal-600 text-white overflow-hidden rounded-3xl p-8 ">
        {/* Soft Radial Highlights */}
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)] rounded-full blur-3xl opacity-30 -z-10" />
        <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] rounded-full blur-3xl opacity-20 -z-10" />

        <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {/* Headings */}
          <h2 className="text-2xl sm:text-3xl     font-extrabold">{heading}</h2>
          <p className="text-base sm:text-lg md:text-xl font-medium">{subtitle}</p>
          <p className="text-sm sm:text-base md:text-lg opacity-90">{steps}</p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 mb-10">
            <a
              href={`https://wa.me/${number.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-white/15 rounded-full hover:bg-white/25 transition-all duration-300"
            >
              <MessageCircle size={20} />
              <span className="font-semibold">{number}</span>
            </a>

            <a
              href={`tel:${number.replace(/\D/g, "")}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-white/15 rounded-full hover:bg-white/25 transition-all duration-300"
            >
              <Phone size={20} />
              <span className="font-semibold">{number}</span>
            </a>

            <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-white/15 rounded-full hover:bg-white/25 transition-all duration-300"
            >
              <Mail size={20} />
              <span className="font-semibold">{email}</span>
            </a>
          </div>

          {/* CTA Button */}
          <a
            href= {cta.url || "/uk/book-lesson"}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition-all duration-300"
          >
            {cta.text || "Book a Free Trial Lesson"}
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBeginCTA;
