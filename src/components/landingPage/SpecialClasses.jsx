"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SpecialClasses = () => {
  const pathname = usePathname();
  return (
    <div className="p-6 md:p-8 rounded-lg text-center text-black bg-white ">
      {pathname === "/uk" && (
        <Image
          width={180}
          height={150}
          src="/Images/yfc-logo.png"
          alt="youre future campus logo"
          className="mx-auto mb-4"
        />
      )}
      <h2 className="text-lg  text-teal-600 mb-2">
      Expert 1-on-1 Online Tuition <br/> Learn Anytime, Anywhere!
      </h2>
      <div className="my-4 border-t border-gray-300"></div>
      <ul className="text-gray-900 text-base space-y-3">
      <li>Certified Male & Female Tutors</li>
        <li>24/7 Flexible Scheduling</li>
        <li>Personalized Learning</li>
      </ul>
      <div className="mt-4 border-t border-gray-300"></div>
      <Link href="https://wa.me/447532792318" 
          target="_blank"
          aria-label="Whatsapp Contact"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center text-teal-600 font-semibold hover:text-teal-700"
        >
          <img
            alt="WhatsApp Icon"
            src="/Images/Icons/whatsapp.svg"
            className="w-6 h-auto mr-2"
          />
          +44 7532792318
      </Link>
    </div>
  );
};

export default SpecialClasses;
