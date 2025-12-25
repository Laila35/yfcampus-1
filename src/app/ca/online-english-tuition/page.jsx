"use client"
import ChooseUsEnglish from '@/components/landingPage/ChooseUsEnglish'
import React from 'react'
import TestimonialCard from '@/components/TestimonialCard'
import CallToAction from '@/components/CallToAction'
import { useCountry } from '@/app/context/CountryContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const UsEnglish = () => {
  const { country } = useCountry()
  const router = useRouter();

  const topics = [
    {
      image: '/Images/reading.webp',
      title: 'Reading Comprehension',
      description: 'Improve understanding of texts through vocabulary, analysis, and critical thinking.',
    },
    {
      image: '/Images/writing.webp',
      title: 'Writing Skills',
      description: 'Enhance writing techniques, including essays, creative writing, and structured assignments for provincial exams.',
    },
    {
      image: '/Images/grammer.webp',
      title: 'Grammar & Punctuation',
      description: 'Strengthen grammar and punctuation for clearer, more accurate writing.',
    },
    {
      image: '/Images/literature.webp',
      title: 'English Literature',
      description: 'Study classic and modern literary texts, focusing on themes, characters, and analysis.',
    },
  ];

  const TopicCovered = ({ image, title, description }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <div className="py-4 px-2 text-center"> {/* Center text in this container */}
        <h3 className="text-xl font-bold text-teal-600 mb-2 whitespace-nowrap overflow-hidden">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );

  const gradeLevels = [
    {
      title: 'Elementary School (Grades 1-5)',
      description: 'Build strong reading, writing, and grammar foundations in alignment with provincial standards.',
    },
    {
      title: 'Middle School (Grades 6-8)',
      description: 'Strengthen comprehension and writing skills to prepare for high school English.',
    },
    {
      title: 'High School (Grades 9-12)',
      description: 'Advanced support for provincial exams and graduation assessments, focusing on English language and literature.',
    },
  ];
  useEffect(() => {
    if (country) {
      // Check if the country is 'Australia'
      if (country === 'Canada') {
        // Do nothing, render the current component
        return;
      } else {
        // Redirect to the corresponding URL based on country
        switch (country) {
          case 'Australia':
            router.push('/au/online-english-tuition');
            break;
          case 'Hong Kong':
            router.push('/hk/online-english-tuition');
            break;
          case 'Singapore':
            router.push('/sg/online-english-tuition');
            break;
          case 'Malaysia': // Corrected spelling
            router.push('/my/online-english-tuition');
            break;
          case 'Philippines': // Corrected spelling
            router.push('/ph/online-english-tuition');
            break;
          case 'United States':
            router.push('/us/online-english-tuition');
            break;
          case 'United Kingdom':
            router.push('/uk/online-english-tuition');
            break;
          case 'New Zealand':
            router.push('/nz/online-english-tuition');
            break;
          case 'India':
            router.push('/in/online-english-tuition');
            break;
          case 'United Arab Emirates':
            router.push('/ae/online-english-tuition');
            break;
          case 'South Africa':
            router.push('/za/online-english-tuition');
            break;
          default:
            router.push('/online-english-tuition'); // Default fallback if the country doesn't match any cases
        }
      }
    }
  }, [country, router]);

  if (!country || country !== 'Canada') {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <div className="loader mb-4"></div>
          <h2 className="text-xl font-semibold">Loading, please wait...</h2>
        </div>
      </div>
    );
  }
  return (
    <>
      <head>
        <title>
          Online English Tuition in Canada | Personalized Tutoring for All Grades | YFC
        </title>
        <meta
          name="description"
          content="Looking for expert online English tuition in Canada? YFC offers personalized tutoring in reading, writing, grammar, and literature for all grades, including provincial exams. Free trial available!"
        />
        <meta
          name="keywords"
          content="online English tuition Canada, provincial exam English tutoring, reading and writing tutors Canada, online writing tutoring Canada, provincial English exam prep, EQAO reading tutoring Canada"
        />
        <meta
          property="og:title"
          content="Online English Tuition in Canada | Personalized Tutoring for All Grades | YFC"
        />
        <meta property="og:url" content="https://yfcampus.com/ca/online-english-tuition/" />
        <meta
          property="og:image"
          content="URL_to_the_image.jpg"
        />
        <meta
          property="og:description"
          content="Looking for expert online English tuition in Canada? YFC offers personalized tutoring in reading, writing, grammar, and literature for all grades, including provincial exams. Free trial available!"
        />
        <link
                  aria-label="online english tuition"
          rel="canonical"
          href="https://yfcampus.com/ca/online-english-tuition/"
        />
        <link
          rel="alternate"
          aria-label="maths tution"
          href="https://yfcampus.com/ca/online-math-tuition/"
          title="Maths Tuition"
        />
        <link
          rel="alternate"
          aria-label="science tuition"
          href="https://yfcampus.com/ca/online-science-tuition/"
          title="Science Tuition"
        />
        <link
          rel="alternate"
          aria-label="english tuition"

          href="https://yfcampus.com/ca/online-english-tuition/"
          title="English Tuition"
        />
      </head>


      {country === 'Canada' && (
        <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
          <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/english.webp")' }}>
            <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
            <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
              Online English Tuition for Canadian Students | Personalized Tutoring for All Grades
            </h1>
          </section>

          {/* Intro section */}
          <section className="mb-8 p-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
            <p className="mt-2 text-gray-700">
              At YFC, we provide comprehensive online English tuition for students across Canada, following provincial curricula. Whether your child is preparing for elementary, middle school, or high school English, our expert tutors offer personalized support in reading, writing, grammar, and literature, helping students excel in their studies.
            </p>
          </section>

          {/* choose us */}
          <section className="mb-8">
            <ChooseUsEnglish />
          </section>

          {/* topics cover */}
          <section className="mb-[70px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">English Subjects Covered </h2>
            <p className="mb-9 text-center text-gray-700">
              Our English tuition covers all essential skills across various grade levels, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-2">
              {topics.map((topic, index) => (
                <TopicCovered
                  key={index}
                  image={topic.image}
                  title={topic.title}
                  description={topic.description}
                />
              ))}
            </div>
          </section>

          {/* Grade Levels We Support Section */}
          <section className="mb-[70px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">
              Grade Levels We Support
            </h2>
            <p className="mb-9 text-center text-gray-700">
              From primary school to high school, our tailored English tuition supports students at every stage of their learning journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {gradeLevels.map((level, index) => (
                <div
                  key={index}
                  className="relative w-full max-w-md mx-auto transition-transform duration-300 ease-in-out transform hover:shadow-xl" // Changed max-w-sm to max-w-md
                >
                  {/* Professional and modern box style */}
                  <div className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between h-full">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{level.title}</h3>
                    <p className="text-gray-600">{level.description}</p> {/* Removed flex-grow */}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* how it works */}
          <section className="mb-[70px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">
              How Our Canada Online English Tuition Works
            </h2>
            <p className="mb-9 text-center text-gray-700">
              Discover a personalized and effective approach to mastering English with our online tuition for students.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative p-6 bg-teal-50 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Number */}
                <div className="absolute top-[-20px] left-0 w-12 h-12 bg-teal-600 text-white font-bold text-2xl rounded-full flex items-center justify-center shadow-md">
                  1
                </div>
                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Free Initial Assessment
                </h3>
                <p className="text-gray-600">
                  We assess each student’s current level and identify areas for improvement.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative p-6 bg-teal-50 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Number */}
                <div className="absolute top-[-20px] left-0 w-12 h-12 bg-teal-600 text-white font-bold text-2xl rounded-full flex items-center justify-center shadow-md">
                  2
                </div>
                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Personalized Learning Plan
                </h3>
                <p className="text-gray-600">
                  A tailored learning plan is developed based on the student's academic needs and goals.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative p-6 bg-teal-50 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Number */}
                <div className="absolute top-[-20px] left-0 w-12 h-12 bg-teal-600 text-white font-bold text-2xl rounded-full flex items-center justify-center shadow-md">
                  3
                </div>
                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Flexible Scheduling
                </h3>
                <p className="text-gray-600">
                  Sessions are available at times that fit into the family’s routine.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative p-6 bg-teal-50 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Number */}
                <div className="absolute top-[-20px] left-0 w-12 h-12 bg-teal-600 text-white font-bold text-2xl rounded-full flex items-center justify-center shadow-md">
                  4
                </div>
                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Regular Progress Reports
                </h3>
                <p className="text-gray-600">
                  Parents receive regular updates on their child’s progress and improvements in reading and writing.
                </p>
              </div>
            </div>
          </section>

          {/* Exam Preparation */}
          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-7 text-center text-teal-700">
              Provincial Exam Preparation
            </h2>
            <div className="flex flex-col lg:flex-row">
              {/* Left Side: Heading and Description */}
              <div className="lg:w-1/2 p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  Focused Support for Success
                </h3>
                <p className="text-gray-700 mb-4">
                  We provide focused support for the following key exams:
                </p>
                <p className="text-gray-700">
                  EQAO (Ontario): Tutoring for reading and writing assessments aligned with EQAO.
                </p>
                <p className="text-gray-700 mt-2">
                  Provincial Graduation Exams: Support for students across various provinces, helping them prepare for graduation exams.
                </p>
              </div>

              {/* Right Side: Four Boxes */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4 p-6">
                {/* Box 1 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">EQAO Reading</h4>
                  <p className="text-gray-700">Tutoring for reading assessments aligned with EQAO standards.</p>
                </div>
                {/* Box 2 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">EQAO Writing</h4>
                  <p className="text-gray-700">Focused support for writing assessments in the EQAO.</p>
                </div>
                {/* Box 3 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">Graduation Exam Prep</h4>
                  <p className="text-gray-700">Comprehensive support for provincial graduation exam preparation.</p>
                </div>
                {/* Box 4 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">Mock Exams</h4>
                  <p className="text-gray-700">Regular mock exams to assess readiness for provincial exams.</p>
                </div>
              </div>
            </div>
          </section>

          {/* success stories */}
          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">
              Success Stories
            </h2>
            <div className="flex overflow-x-auto justify-center space-x-4 snap-x snap-mandatory">
              {/* Testimonial 1 */}
              <div
                style={{ scrollSnapAlign: 'start' }}
                className="flex-shrink-0 w-full sm:w-96 lg:w-[32%]"
              >
                <TestimonialCard
                  text="Thanks to YFC’s tutoring, my daughter did much better on her EQAO reading test. The personalized lessons were great."
                  author="Lisa, Parent"
                  image="/Images/emma.webp"
                />
              </div>

              {/* Testimonial 2 */}
              <div
                style={{ scrollSnapAlign: 'start' }}
                className="flex-shrink-0 w-full sm:w-96 lg:w-[32%]"
              >
                <TestimonialCard
                  text="YFC helped me improve my writing skills for the graduation exams. I felt much more prepared and confident."
                  author="David, Student"
                  image="/Images/jame.webp"
                />
              </div>
            </div>
          </section>


          {/* call to action setion */}
          <CallToAction
            heading="Excel in English with YFC!"
            description="Contact us today to book a free trial session and give your child the support they need to excel in English."
            buttonText="Sign Up for a Free Trial"
            buttonLink="/get-register"
          />

        </div>)}
    </>

  )
}

export default UsEnglish