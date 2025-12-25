"use client"
import ChooseUsEnglish from '@/components/landingPage/ChooseUsEnglish'
import React from 'react'
import TestimonialCard from '@/components/TestimonialCard'
import CallToAction from '@/components/CallToAction'
import { useCountry } from '@/app/context/CountryContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'


const UkEnglish = () => {
  const { country } = useCountry()
  const router = useRouter();
  const topics = [
    {
      image: '/Images/reading.webp', // Use the path to your reading image
      title: 'Reading Skills',
      description: 'Build understanding of texts through vocabulary building, critical thinking, and analysis.',
    },
    {
      image: '/Images/writing.webp', // Use the path to your writing image
      title: 'Writing Skills',
      description: 'Improve creative writing, essays, and structured tasks for GCSE and A-Level students.',
    },
    {
      image: '/Images/grammer.webp', // Use the path to your grammar image
      title: 'Grammar & Punctuation',
      description: 'Strengthen grammar and punctuation for clearer, more accurate writing.',
    },
    {
      image: '/Images/literature.webp', // Use the path to your literature image
      title: 'English Literature',
      description: 'Study key texts from the GCSE and A-Level syllabi, focusing on themes, characters, and literary analysis.',
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
      title: 'Primary School (Years 1-6)',
      description: 'Focus on reading, writing, and grammar fundamentals to prepare students for secondary education.',
    },
    {
      title: 'Secondary School (Years 7-11)',
      description: 'Comprehensive support for GCSE students, with a focus on writing, grammar, and literature.',
    },
    {
      title: 'A-Level (Years 12-13)',
      description: 'Advanced tutoring in A-Level English literature, writing techniques, and exam preparation.',
    },
  ];
  useEffect(() => {
    if (country) {
      // Check if the country is 'Australia'
      if (country === 'United Kingdom') {
        // Do nothing, render the current component
        return;
      } else {
        // Redirect to the corresponding URL based on country
        switch (country) {
          case 'Canada':
            router.push('/ca/online-english-tuition');
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
          case 'New Zealand':
            router.push('/nz/online-english-tuition');
            break;
          case 'India':
            router.push('/in/online-english-tuition');
            break;
          case 'Australia':
            router.push('/au/online-english-tuition');
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

  if (!country || country !== 'United Kingdom') {
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
          Online English Tuition in the UK | GCSE and A-Level English Tutors | YFC
        </title>
        <meta
          name="description"
          content="Looking for expert online English tuition in the UK? YFC offers personalized tutoring in reading, writing, and literature for GCSE and A-Level students. Free trial available!"
        />
        <meta
          name="keywords"
          content="online English tuition UK, GCSE English tutoring, A-Level English tutors UK, online writing tutors UK, online literature tutors UK, reading comprehension tutoring UK, GCSE English language exam prep"
        />
        <meta
          property="og:title"
          content="Online English Tuition in the UK | GCSE and A-Level English Tutors | YFC"
        />
        <meta property="og:url" content="https://yfcampus.com/uk/online-english-tuition/" />
        <meta
          property="og:image"
          content="URL_to_the_image.jpg"
        />
        <meta
          property="og:description"
          content="Looking for expert online English tuition in the UK? YFC offers personalized tutoring in reading, writing, and literature for GCSE and A-Level students. Free trial available!"
        />
        <link
          rel="canonical"
          href="https://yfcampus.com/uk/online-english-tuition/"
          title="online english tuition"
          aria-label="online english tuition"
        />
        <link
          rel="alternate"
          href="https://yfcampus.com/online-maths-tuition/"
          title="Maths Tuition"
          aria-label="Maths Tuition"
        />
        <link
          rel="alternate"
          href="https://yfcampus.com/online-science-tuition/"
          title="Science Tuition"
          aria-label="Science Tuition"
        />
        <link
          rel="alternate"
          href="https://yfcampus.com/online-english-tuition/"
          title="English Tuition"
          aria-label="English Tuition"
        />
      </head>
      {country === 'United Kingdom' && (
        <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
          <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/english.webp")' }}>
            <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
            <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
              Online English Tuition for UK Students | GCSE and A-Level Focused Tutoring
            </h1>
          </section>

          {/* Intro section */}
          <section className="mb-8 p-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
            <p className="mt-2 text-gray-700">
              At YFC, we offer expert online English tuition tailored to the UK curriculum, including support for GCSE and A-Level exams. Our tutors provide personalized guidance in reading comprehension, writing, grammar, and literature, ensuring that students in the UK achieve academic success in English.
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
              How Our UK Online English Tuition Works
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
                  We assess each student’s English skills to identify areas for improvement.
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
                  A tailored plan is created based on the student's individual needs and goals.
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
                  Choose convenient times for sessions that fit your family's schedule.
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
                  Parents receive updates on their child's progress, including strengths and areas for improvement.
                </p>
              </div>
            </div>
          </section>

          {/* Exam Preparation */}
          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-7 text-center text-teal-700">
              GCSE and A-Level Exam Preparation
            </h2>
            <div className="flex flex-col lg:flex-row">
              {/* Left Side: Heading and Description */}
              <div className="lg:w-1/2 p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  Focused Preparation for Success
                </h3>
                <p className="text-gray-700 mb-4">
                  We provide targeted tutoring for key UK exams:
                </p>
                <p className="text-gray-700">
                  GCSE English Language and Literature: Comprehensive support for students preparing for their GCSE exams.
                </p>
                <p className="text-gray-700 mt-2">
                  A-Level English Literature: Focused preparation for students tackling advanced texts and exam requirements at the A-Level.
                </p>
              </div>

              {/* Right Side: Four Boxes */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4 p-6">
                {/* Box 1 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">GCSE English</h4>
                  <p className="text-gray-700">Comprehensive support for students preparing for their GCSE exams.</p>
                </div>
                {/* Box 2 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">A-Level English</h4>
                  <p className="text-gray-700">Focused preparation for A-Level English literature requirements.</p>
                </div>
                {/* Box 3 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">Exam Technique</h4>
                  <p className="text-gray-700">Strategies and tips to excel in English exams.</p>
                </div>
                {/* Box 4 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">Mock Exams</h4>
                  <p className="text-gray-700">Regular mock exams to assess progress and readiness.</p>
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
                  text="Thanks to YFC’s tutoring, my son improved his GCSE English grades and is now more confident in his writing."
                  author="Sarah, Parent"
                  image="/Images/emma.webp"
                />
              </div>

              {/* Testimonial 2 */}
              <div
                style={{ scrollSnapAlign: 'start' }}
                className="flex-shrink-0 w-full sm:w-96 lg:w-[32%]"
              >
                <TestimonialCard
                  text="I struggled with A-Level English literature, but YFC’s tutor helped me analyze texts more effectively, and I scored higher than expected."
                  author="Emma, Student"
                  image="/Images/jame.webp"
                />
              </div>
            </div>
          </section>

          {/* call to action setion */}
          <CallToAction
            heading="Excel in English with YFC!"
            description="Contact us today to book a free trial session and help your child succeed in their English studies."
            buttonText="Sign Up for a Free Trial"
            buttonLink="/get-register"
          />

        </div>
      )}
    </>

  )
}

export default UkEnglish