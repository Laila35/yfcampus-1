"use client"
import React from "react";
import { useCountry } from '@/app/context/CountryContext';
import Link from "next/link";
import { FaCheckCircle, FaEnvelope, FaPhone } from "react-icons/fa";
import { GoogleTagManager } from "@next/third-parties/google";

 const metadata = {
  title: "Thank You | Your Future Campus",
  description:
  "Thank you for submitting the form. We will reach out to you soon.",
};

const ThankYouPage = () => {
  const { country } = useCountry()
  
  return (
    <div className="container mx-auto px-6 py-12">
                <GoogleTagManager gtmId="GTM-5KG5FBG" />

      <div className="bg-white shadow-md rounded-lg border border-teal-600 p-8 text-center">
        <FaCheckCircle className="text-teal-500 text-6xl mx-auto mb-6" />
        <h2 className="text-4xl font-extrabold text-[#003366] mb-4">
          Thank You for Submitting the Form!
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          We appreciate your interest in{" "}
          <span className="text-[#1a73e8]">Your Future Campus</span>. Our team
          will reach out to you soon with more details.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          If you have any immediate questions, feel free to contact us at:
        </p>
        <div className="mt-4 flex flex-col items-center space-y-2">
          {/* Email link */}
          <a aria-label="Admin Email" href="mailto:admin@yfcampus.com" className="text-lg text-blue-600">
            <FaEnvelope className="inline-block mr-3" /> admin@yfcampus.com
          </a>
          {/* phone link */}
          {country === 'United States of america' || country === 'Canada' ? (
          <Link
          aria-label="whatsapp link"
          href="https://wa.me/19142791693"
          className="text-teal-900 text-[14px] font-bold hover:text-teal-700 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
          >
           Phone: +1 914-279-1693
         </Link>
         ) : country === 'Australia' || country === 'New Zealand' ? (
         <Link
         aria-label="whatsapp link"

          href="https://wa.me/61480050048"
          className="text-teal-900 text-[14px] font-bold hover:text-teal-700 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
          >
           Phone: +61 480-050-048
         </Link>
         ) : (
        <Link
        aria-label="whatsapp link"

          href="https://wa.me/447532792318"
          className="text-teal-900 text-[14px] font-bold hover:text-teal-700 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Phone: +44 7532 792318
        </Link>
        )}
        </div>
        <Link
                  aria-label="whatsapp link"

          href="/"
          className="mt-8 inline-block text-teal-600 text-lg font-semibold"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
