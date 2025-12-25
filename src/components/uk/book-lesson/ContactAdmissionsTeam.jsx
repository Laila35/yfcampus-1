"use client";

import React from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";

const ContactAdmissionsTeam = () => {
  const heading = "Contact Our Admissions Team";
  const subtitle =
    "We’re here to help you choose the best learning path for your child. Reach out anytime for guidance or questions.";
  const number = "+44 7532 792318";
  const email = "admin@yfcampus.com";
  const desc =
    "Our team is available Monday to Friday, 9:00 AM – 6:00 PM (UK Time Zone).";

  return (
    <section className="relative max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-10">
      {/* Background Accents */}
       
      {/* Main Card */}
      <div className="relative text-center rounded-3xl ">
        
        {/* Heading */}
        <h2 className="text-3xl   font-bold text-teal-600 leading-tight mb-6">
          {heading}
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto mb-12 leading-relaxed">
          {subtitle}
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-8">
          
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${number.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle
              size={22}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="font-semibold text-base">{number}</span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${number.replace(/\D/g, "")}`}
            className="group w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <Phone
              size={22}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="font-semibold text-base">{number}</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="group w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail
              size={22}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="font-semibold text-base">{email}</span>
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-sm sm:text-base text-teal-700">
          {desc}
        </p>
      </div>
    </section>
  );
};

export default ContactAdmissionsTeam;
