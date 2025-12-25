import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCountry } from "@/app/context/CountryContext";


const SpecialClasses = () => {

  const { country } = useCountry();
  return (
    <>
      {/* Header */}
      <h1 className="text-2xl  lg:text-4xl font-extrabold text-center text-black">
        Welcome to <span className="text-teal-600 ">Your Future Campus</span>
      </h1>

      {/* Subheader */}
      <h2 className="text-lg lg:text-2xl font-semibold text-center text-gray-700 mt-4">
        Unlock Your Academic Potential with Expert Tuition Classes
      </h2>


      {/* Introduction */}
      <p className="text-left pt-6 text-base lg:text-lg text-gray-600">
        Your Future Campus  is dedicated to providing personalized tuition
        classes in a variety of subjects, empowering students to achieve academic success
        through flexible online learning.
      </p>
      <br />

      <hr className="mb-6 border-teal-600" />

     {/* WhatsApp Contact */}
     {country === 'United States' || country === 'Canada' ? (
        <Link
        aria-label="Whatsapp contact"
        href="https://wa.me/19142791693" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mt-4 cursor-pointer"
          >
            <img
              src="/Images/Icons/whatsapp.svg"
              alt="WhatsApp Icon"
              className="w-6 mr-2 h-auto"
            />
            <span>+19142791693</span>
        </Link>
      ) : country === 'Australia' || country === 'New Zealand' ? (
        <Link
        aria-label="Whatsapp contact"
        href="https://wa.me/61480050048" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mt-4 cursor-pointer"
          >
            <img
              src="/Images/Icons/whatsapp.svg"
              alt="WhatsApp Icon"
              className="w-6 mr-2 h-auto"
            />
            <span>+61480050048</span>
        
        </Link>
      ) : (
        <Link
        aria-label="Whatsapp contact"
        href="https://wa.me/447862067920" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mt-4 cursor-pointer"
          >
            <img
              src="/Images/Icons/whatsapp.svg"
              alt="WhatsApp Icon"
              className="w-6 mr-2 h-auto"
            />
            <span>+447532792318</span>
        </Link>
      )}
    </>
  );
};

export default SpecialClasses;
