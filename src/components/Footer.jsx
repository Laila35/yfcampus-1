import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCountry } from "@/app/context/CountryContext";
import {faInstagram,faFacebook,faLinkedin,faXTwitter,faYoutube,faTiktok,faPinterest,} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import FooterForm from "./footerForm";
const Footer = () => {
const {country} = useCountry();
const currentYear = new Date().getFullYear();  
return (
    <>
      {/* Container for grid layout */}
      <div className="container mx-auto p-10 my-10">
        {/* Grid layout for footer content */}
        <div className="flex flex-col p-2  gap-8 lg:grid lg:grid-cols-5 lg:gap-6">
          {/* Logo and Contact Section */}
          <div className="flex flex-col items-start lg:items-start gap-4">
            <Image
              width={200}
              height={150}
              src="/Images/yfc-logo.png"
              alt="yfcampus Logo"
              // className="w-[200px] h-[100px] sm:w-[150px] sm:h-[150px]"
            />
   <Link
  aria-label="admin mail"
  href="mailto:admin@yfcampus.com"
  className="text-teal-900 font-bold text-[10px] sm:text-[14px] lg:text-[16px] text-center lg:text-left inline"
>
  admin@yfcampus.com
</Link>
            <div className="flex flex-col items-center gap-2">
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
          className="text-teal-600 text-[14px] font-bold  hover:text-teal-800"
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
          Phone: +447532792318
        </Link>
        )}
        </div>
        </div>
{/* About Us Section */}
<div className="flex flex-col gap-3 sm:gap-4 items-start lg:items-start">
  <div className="text-black font-bold text-[14px] sm:text-[16px]">
    About Us
  </div>
  {[
    { href: "/customer-service", label: "Customer Service" },
    { href: "/get-register", label: "Register Now" },
    { href: "/pricing", label: "Fee and Schedule Plan" },
  ].map((link, index) => (
    <Link
    aria-label=" link"
      key={index}
      href={link.href}
      className=" text-teal-700  px-3 py-1 rounded-full text-xs transition duration-300  hover:bg-teal-600 hover:text-white"
      >
      {link.label}
    </Link>
  ))}
  <Link
  aria-label="privacy policy"
    href="/privacy-policy"
    className="text-teal-700 px-3 py-1 rounded-full text-xs transition duration-300 hover:bg-teal-600 hover:text-white"
  >
Privacy Policy
  </Link>
  <Link
    href="/terms-of-service"
    aria-label="terms-of-service"
    className="text-teal-700 px-3 py-1 rounded-full text-xs transition duration-300 hover:bg-teal-600 hover:text-white"
  >
Terms of Service
</Link>
  <Link
    href="/data-deletion"
    aria-label="data-deletion"
    className="text-teal-700 px-3 py-1 rounded-full text-xs transition duration-300 hover:bg-teal-600 hover:text-white"
  >
Data Deletion Policy
</Link>
  <Link
    href="/refund-policy"
    aria-label="refund-policy"
    className="text-teal-700 px-3 py-1 rounded-full text-xs transition duration-300 hover:bg-teal-600 hover:text-white"
  >
Refund Policy
</Link>

</div>
  {/* Subjects Section */}
<div className="flex flex-col gap-3 sm:gap-4 items-start lg:items-start">
  <div className="text-black font-bold text-[16px]">Subjects</div>
  <Link
    href="/online-maths-tuition"
    aria-label="online-maths-tuition"
    className="text-teal-700 px-3 py-1 rounded-full text-xs transition duration-300 hover:bg-teal-600 hover:text-white"
  >
    Maths Tuition
  </Link>
  <Link
    href="/online-science-tuition"
    aria-label="online-science-tuition"
    className="text-teal-700 px-3 py-1 rounded-full text-xs transition duration-300 hover:bg-teal-600 hover:text-white"
  >
    Science Tuition
  </Link>
  <Link
    href="/online-english-tuition"
    aria-label="online-english-tuition"
    className="text-teal-700 px-3 py-1 rounded-full text-xs transition duration-300 hover:bg-teal-600 hover:text-white"
  >
    English Tuition
  </Link>
  <Link
    href="/online-computer-science-tuition"
    aria-label="online-computer-science-tuition"
    className="text-teal-700 px-3 py-1 rounded-full text-xs transition duration-300 hover:bg-teal-600 hover:text-white"
  >
    Computer Science Tuition
  </Link>
</div>
{/* Courses Section */}
<div className="flex flex-col gap-3 sm:gap-4 items-start lg:items-start">
  <div className="text-black font-bold text-[16px]">Courses</div>
  <Link
    href="/online-arabic-course"
    aria-label="online-arabic-course"
    className="text-teal-700 px-3 py-1 rounded-full text-xs transition duration-300 hover:bg-teal-600 hover:text-white"
  >
    Arabic Language Course
  </Link>
  <Link
    href="/online-urdu-course"
    aria-label="online-urdu-course"
    className="text-teal-700 px-3 py-1 rounded-full text-xs transition duration-300 hover:bg-teal-600 hover:text-white"
  >
    Urdu Language Course
  </Link>
  <Link
    href="/online-esl-course"
    aria-label="online-esl-course"
    className="text-teal-700 px-3 py-1 rounded-full text-xs transition duration-300 hover:bg-teal-600 hover:text-white"
  >
    English as a Second Language (ESL)
  </Link>
  <Link
    href="/online-persian-course"
    aria-label="online-persian-course"
    className="text-teal-700 px-3 py-1 rounded-full text-xs transition duration-300 hover:bg-teal-600 hover:text-white"
  >
    Persian Language Course
  </Link>
</div>
          {/* Contact Form Section */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
             <FooterForm />
          </div>
          
          </div>
      </div>
      {/*  footer */}
      <div className=" py-2 w-full mx-auto  flex flex-col items-center ">
        {/* Social links */}
      <div className="flex flex-wrap justify-center gap-4 px-2">
      {[
           { href: "https://x.com/yfcampus", icon: faXTwitter, hoverColor: "hover:text-blue-500" },
           { href: "https://www.facebook.com/yourfuturecampus", icon: faFacebook, hoverColor: "hover:text-blue-700" },
           { href: "https://www.pinterest.com/yourfuturecampus", icon: faPinterest, hoverColor: "hover:text-red-500" },
           { href: "https://www.linkedin.com/company/yourfuturecampus/", icon: faLinkedin, hoverColor: "hover:text-blue-600" },
           { href: "https://www.instagram.com/yourfuturecampus", icon: faInstagram, hoverColor: "hover:text-pink-500" },
           { href: "https://www.youtube.com/@yourfuturecampus", icon: faYoutube, hoverColor: "hover:text-red-600" },
           { href: "https://www.tiktok.com/@yourfuturecampus", icon: faTiktok, hoverColor: "hover:text-black" },
          
          ].map(({ href, icon, hoverColor }, index) => (
      <Link
      aria-label="social links"
       key={index}
       href={href}
       target="_blank"
       className={`transition-transform duration-300 transform hover:scale-110 ${hoverColor}`}
      >
      <FontAwesomeIcon size="lg" color="black" icon={icon} className="transition-colors" />
      </Link>
      ))}
      </div>
      {/* footer content */}
    {/* Footer content */}
<div className="text-white text-[14px] mt-2 p-2 text-center">
  <address>
    <h2 className="text-black sm:text-gray-900 md:text-gray-900 font-medium sm:font-semibold">
      Copyright © {currentYear} Your Future Campus LTD. All Rights Reserved.
    </h2>
  </address>
  <p className="text-gray-800 sm:text-sm md:text-base font-normal leading-relaxed">
    A registered company in London, UK. All materials on this site, including courses, content, and design, are protected by copyright and may not be reproduced, distributed, or transmitted without permission.
  </p>
  <p className="text-gray-800 text-sm sm:text-base font-semibold">
    YOUR FUTURE CAMPUS (SMC-PRIVATE) LIMITED
  </p>
</div>
      </div>
    </>
  );
}; 
export default Footer;
