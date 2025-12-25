
"use client"
import ChooseUsEnglish from '@/components/landingPage/ChooseUsEnglish'
import React from 'react'
import TestimonialCard from '@/components/TestimonialCard'
import CallToAction from '@/components/CallToAction'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useCountry } from '@/app/context/CountryContext'
const UsEnglish = () => {
  const { country } = useCountry()
  const router = useRouter();
  const topics = [
    {
      image: '/Images/reading.webp',
      title: 'Reading Comprehension',
      description: 'Improve understanding of complex texts, focusing on vocabulary and critical thinking for standardized exams.',
    },
    {
      image: '/Images/writing.webp',
      title: 'Writing Skills',
      description: 'Enhance essay writing, reports, and creative writing skills, with a focus on SAT and AP English requirements.',
    },
    {
      image: '/Images/grammer.webp',
      title: 'Grammar & Punctuation',
      description: 'Refine grammar skills, focusing on clarity, accuracy, and fluency in writing.',
    },
    {
      image: '/Images/literature.webp',
      title: 'English Literature',
      description: 'Study key literary texts, including AP English Literature materials, focusing on analysis and interpretation.',
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
      description: 'Build strong reading and writing foundations in alignment with the Common Core standards.',
    },
    {
      title: 'Middle School (Grades 6-8)',
      description: 'Strengthen comprehension and writing skills to prepare for high school English challenges and standardized tests.',
    },
    {
      title: 'High School (Grades 9-12)',
      description: 'Advanced support for SAT, ACT, and AP English exam preparation, including literature analysis and essay writing.',
    },
  ];
  useEffect(() => {
    if (country) {
      // Check if the country is 'Australia'
      if (country === 'United States') {
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
          case 'United Kingdom':
            router.push('/uk/online-english-tuition');
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

  if (!country || country !== 'United States') {
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
          Online English Tuition in the USA | SAT and AP English Tutors | YFC
        </title>
        <meta
          name="description"
          content="Looking for expert online English tuition in the USA? YFC offers personalized tutoring in reading, writing, grammar, and literature for all grades, including SAT and AP exams. Free trial available!"
        />
        <meta
          name="keywords"
          content="online English tuition USA, SAT English tutoring, AP English tutors USA, online reading tutors USA, online writing tutoring USA, SAT English exam prep, AP English literature tutoring, USA English tutors"
        />
        <meta
          property="og:title"
          content="Online English Tuition in the USA | SAT and AP English Tutors | YFC"
        />
        <meta property="og:url" content="https://yfcampus.com/us/online-english-tuition/" />
        <meta
          property="og:image"
          content="URL_to_the_image.jpg"
        />
        <meta
          property="og:description"
          content="Looking for expert online English tuition in the USA? YFC offers personalized tutoring in reading, writing, grammar, and literature for all grades, including SAT and AP exams. Free trial available!"
        />
        <link
          rel="canonical"
          href="https://yfcampus.com/us/online-english-tuition/"
          title="english Tuition"
          aria-label="english Tuition"
        />
        <link
          rel="alternate"
          href="https://yfcampus.com/us/online-math-tuition/"
          title="Maths Tuition"
          aria-label="Maths Tuition"
        />
        <link
          rel="alternate"
          href="https://yfcampus.com/us/online-science-tuition/"
          title="Science Tuition"
          aria-label="Science Tuition"
        />
        <link
          rel="alternate"
          href="https://yfcampus.com/us/online-english-tuition/"
          title="English Tuition"
          aria-label="English Tuition"
        />
      </head>

      {country === 'United States' && (
        <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
          <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/english.webp")' }}>
            <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
            <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
              Online English Tuition for USA Students | SAT and AP Exam Focused Tutoring
            </h1>
          </section>

          {/* Intro section */}
          <section className="mb-8 p-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
            <p className="mt-2 text-gray-700">
              At YFC, we offer comprehensive online English tuition for students across the USA, with personalized support for reading comprehension, writing, grammar, and literature. Our expert tutors help students excel in English at all levels, including preparation for the SAT, ACT, and AP English exams.
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
              How Our USA Online English Tuition Works
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
                  We assess the student's current English proficiency to identify areas needing improvement.
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
                  A tailored learning plan is developed to help the student meet their academic goals.
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
                  Sessions are scheduled at times that fit into the family’s routine.
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
                  Parents receive updates on their child’s progress, including improvements in reading and writing.
                </p>
              </div>
            </div>
          </section>

          {/* Exam Preparation */}
          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-7 text-center text-teal-700">
              SAT, ACT, and AP Exam Preparation
            </h2>
            <div className="flex flex-col lg:flex-row">
              {/* Left Side: Heading and Description */}
              <div className="lg:w-1/2 p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  Focused Preparation for Success
                </h3>
                <p className="text-gray-700 mb-4">
                  We provide targeted preparation for key English exams in the USA:
                </p>
                <p className="text-gray-700">
                  SAT and ACT English: Focused support for students preparing for the SAT and ACT English sections.
                </p>
                <p className="text-gray-700 mt-2">
                  AP English Language and Composition: Tailored tutoring for students preparing for the AP English exams, including essay writing and literary analysis.
                </p>
              </div>

              {/* Right Side: Four Boxes */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4 p-6">
                {/* Box 1 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">SAT English</h4>
                  <p className="text-gray-700">Focused support for students preparing for the SAT English sections.</p>
                </div>
                {/* Box 2 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">ACT English</h4>
                  <p className="text-gray-700">Preparation for ACT English with tailored strategies and practice.</p>
                </div>
                {/* Box 3 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">AP English Language</h4>
                  <p className="text-gray-700">Tailored tutoring for AP English exams, including essay writing.</p>
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
                  text="Thanks to YFC, my daughter improved her SAT English score significantly. The writing practice was especially helpful."
                  author="Jane, Parent"
                  image="/Images/emma.webp"
                />
              </div>

              {/* Testimonial 2 */}
              <div
                style={{ scrollSnapAlign: 'start' }}
                className="flex-shrink-0 w-full sm:w-96 lg:w-[32%]"
              >
                <TestimonialCard
                  text="YFC’s AP English tutoring helped me get a 5 on my AP exam. The literature analysis lessons were exactly what I needed."
                  author="Alex, Student"
                  image="/Images/jame.webp"
                />
              </div>
            </div>
          </section>

          {/* call to action setion */}
          <CallToAction
            heading="Boost Your English Scores with YFC!"
            description="Contact us today to book a free trial session and give your child the support they need to excel in English."
            buttonText="Sign Up for a Free Trial"
            buttonLink="/get-register"
          />
        </div>)}
    </>

  )
}

export default UsEnglish