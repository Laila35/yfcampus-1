import React from 'react';
import Banner from '@/components/Banner';
import { FaChalkboardTeacher, FaCalendarAlt, FaBook, FaGlobe } from "react-icons/fa";

import Image from 'next/image';
import SuccessStories from '@/components/SuccessStories';
import LanguageCourses from '@/components/LanguageCourses';

export default function OnlineLanguageCourses() {
  const breadcrumbData = {
      id: 3,
      name: "Online Language Courses ESL-Arabic-Urdu-Persian",
      link: "/",
  };
  return (
    <div className="container mx-auto px-4 py-2">
      {/* Page Title and Meta Tags */}
      <head>
        <title>Online Language Courses | Arabic, Urdu, Persian, ESL | YFC</title>
        <meta
          name="description"
          content="Looking to learn a new language online? YFC offers expert tutoring in Arabic, Urdu, Persian, and English as a Second Language (ESL) for beginners to advanced learners. Free trial available!"
        />
      </head>
      <div className='m-2 mb-4'>
      <Banner breadcrumbData={breadcrumbData} />

      </div>

{/* Main Headline */}
<h1 className="text-xl font-extrabold text-teal-600 text-center mb-8">
  Learn Arabic, Urdu, Persian, and English Online | Personalized Language Courses
</h1>

{/* Introduction */}
<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-4 lg:px-16 mb-16">
  <div className="text-center lg:text-left max-w-lg">
    <p className="text-lg text-gray-700 mb-6">
      At <strong className="font-bold text-teal-600">Your Future Campus (YFC)</strong>, we provide online language courses designed for all levels—whether you're a beginner or an advanced learner. Our expert tutors guide you through the fundamentals of languages like Arabic, Urdu, Persian, and English as a Second Language (ESL), offering personalized lessons that fit your needs. All classes are conducted online, so you can learn from the comfort of your home at a time that suits you.
    </p>
  </div>
  <div className="mt-6 lg:mt-0">
    <Image
      src="/Images/multilangs.webp"
      alt="Language Learning Illustration"
      width={400}
      height={300}
      className="rounded-lg "
    />
  </div>
</div>

{/* Why Choose YFC */}
<section className="mb-16 px-4 lg:px-16">
  <h2 className="text-3xl font-bold text-teal-600 text-center mb-12">Why Choose YFC for Online Language Courses?</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        title: "Expert Tutors",
        description: "Our tutors are native speakers or language experts with years of teaching experience.",
        icon: <FaChalkboardTeacher size={40} className="text-teal-600 mb-4" />,
      },
      {
        title: "Flexible Scheduling",
        description: "Learn at your own pace with online lessons available via Zoom, Teams, or Google Meet.",
        icon: <FaCalendarAlt size={40} className="text-teal-600 mb-4" />,
      },
      {
        title: "Customized Lessons",
        description: "Each course is tailored to your skill level, from basic to advanced.",
        icon: <FaBook size={40} className="text-teal-600 mb-4" />,
      },
      {
        title: "Global Access",
        description: "You can join our online language courses from anywhere in the world.",
        icon: <FaGlobe size={40} className="text-teal-600 mb-4" />,
      },
    ].map((item, index) => (
      <div key={index} className="flex flex-col items-center text-center border border-gray-200 p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow">
        {item.icon}
        <h3 className="text-xl font-semibold text-teal-600 mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.description}</p>
      </div>
    ))}
  </div>
</section>

{/* Courses We Offer */}
<LanguageCourses />


{/* Success Stories */}
<SuccessStories />



    </div>
  );
}
