"use client"
import { chooseUs } from '@/lib/Data';
import Link from 'next/link';
import ChooseUs from '@/components/landingPage/ChooseUs';
import React, { useEffect } from 'react';
import TestimonialCard from '@/components/TestimonialCard';
import TopicCovered from '@/components/TopicsCovered';
import {
  FaCalculator,
  FaShapes,
  FaPuzzlePiece,
  FaChartBar,
  FaClipboardList,
} from 'react-icons/fa';
import { useCountry } from '@/app/context/CountryContext';
import { useRouter } from "next/navigation"; // Import useRouter for navigation


const UaeMathematics = () => {
  const { country } = useCountry()
  const router = useRouter();
  const topics = [
    {
      icon: <FaCalculator />, // You can change this icon if needed
      title: 'Number Operations',
      description: 'Strengthen core number skills, fractions, and percentages.',
    },
    {
      icon: <FaShapes />, // You can keep or change this icon
      title: 'Algebra and Geometry',
      description: 'Solve equations, work with geometric shapes, and understand theorems.',
    },
    {
      icon: <FaPuzzlePiece />, // Consider a different icon for trigonometry if desired
      title: 'Trigonometry and Calculus',
      description: 'Advanced topics for senior students preparing for exams.',
    },
    {
      icon: <FaChartBar />, // You can keep or change this icon
      title: 'Statistics and Probability',
      description: 'Build skills in data handling and probability calculations.',
    },
  ];



  const gradeLevels = [
    {
      title: 'Primary School (Grades 1-6)',
      description: 'Basic arithmetic, geometry, and problem-solving skills.',
    },
    {
      title: 'Secondary School (Grades 7-11)',
      description: 'Strengthen algebra and geometry skills, preparing for key exams such as IGCSE and CBSE.',
    },
    {
      title: 'Senior Secondary (Grades 11-12)',
      description: 'Focused tutoring on advanced topics like calculus, statistics, and algebra, aligned with CBSE and UAE Ministry requirements.',
    },
  ];

  useEffect(() => {
    if (country) {
      // Check if the country is 'United States'
      if (country === 'United Arab Emirates') {
        // Render content for the United States
        return; // Do nothing, render the current component
      } else {
        // If the country is one of the specified countries, redirect to the corresponding URL
        switch (country) {
          case 'Canada':
            router.push('/ca/online-science-tuition');
            break;
          case 'Hong Kong':
            router.push('/hk/online-science-tuition');
            break;
          case 'Singapore':
            router.push('/sg/online-science-tuition');
            break;
          case 'Malaysia': // Corrected spelling
            router.push('/my/online-science-tuition');
            break;
          case 'Philippines': // Corrected spelling
            router.push('/ph/online-science-tuition');
            break;
          case 'United States':
            router.push('/us/online-science-tuition');
            break;
          case 'United Kingdom':
            router.push('/uk/online-science-tuition');
            break;
          case 'New Zealand':
            router.push('/nz/online-science-tuition');
            break;
          case 'India':
            router.push('/in/online-science-tuition');
            break;
          case 'Australia':
            router.push('/au/online-science-tuition');
            break;
          case 'South Africa':
            router.push('/za/online-science-tuition');
            break;
          default:
            router.push('/online-science-tuition'); // Default fallback if the country doesn't match any cases
        }
      }
    }
  }, [country, router]);
  if (!country || country !== 'United Arab Emirates') {
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
          Online Maths Tuition in UAE | Expert Tutors for Grades 1-12 | YFC
        </title>
        <meta
          name="description"
          content="Looking for expert online maths tuition in UAE? YFC offers personalized tutoring for IGCSE, CBSE, and UAE Ministry curriculum. Free trial available!"
        />
        <meta
          name="keywords"
          content="online maths tuition UAE, IGCSE maths tutoring, CBSE maths tutoring, UAE Ministry maths curriculum, primary school maths tutoring, senior secondary maths tutoring"
        />
        <meta
          property="og:title"
          content="Online Maths Tuition in UAE | Expert Tutors | YFC"
        />
        <meta property="og:url" content="https://yfcampus.com/online-maths-tuition-uae/" />
        <meta
          property="og:image"
          content="URL_to_the_image.jpg"
        />
        <meta
          property="og:description"
          content="Looking for expert online maths tuition in UAE? YFC offers personalized tutoring for IGCSE, CBSE, and UAE Ministry curriculum. Free trial available!"
        />
        <link
          rel="canonical"
          aria-label="Courses of yfcampus"

          href="https://yfcampus.com/online-maths-tuition-uae/"
        />
        <link
                        aria-label="Courses of yfcampus"

          rel="alternate"
          href="https://yfcampus.com/science-tuition-uae/"
          title="Science Tuition"
        />
        <link
                        aria-label="Courses of yfcampus"

          rel="alternate"
          href="https://yfcampus.com/physics-tutoring-uae/"
          title="Physics Tutoring"
        />
        <link
                        aria-label="Courses of yfcampus"

          rel="alternate"
          href="https://yfcampus.com/chemistry-tutoring-uae/"
          title="Chemistry Tutoring"
        />
        <link
                        aria-label="Courses of yfcampus"

          rel="alternate"
          href="https://yfcampus.com/biology-tutoring-uae/"
          title="Biology Tutoring"
        />
      </head>


      {country === 'United Arab Emirates' && (
        <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
          <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/maths.webp")' }}>
            <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
            <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
              Online Maths Tuition for UAE Students | IGCSE, CBSE, and UAE Ministry Exam Preparation
            </h1>
          </section>



          {/* Intro section */}
          <section className="mb-8 p-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
            <p className="mt-2 text-gray-700">
              At YFC, we provide expert online maths tutoring for students across the UAE, covering the IGCSE, CBSE, and UAE Ministry curricula. Whether your child is preparing for school exams or needs help with math competitions, our tutors are here to help.
            </p>
          </section>

          <section className="mb-8">
            <ChooseUs chooseUs={chooseUs} />
          </section>

          {/* Maths Topics Covered Section */}
          <section className="mb-[70px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">Maths Topics Covered</h2>
            <p className="mb-9 text-center text-gray-700">
              Our UAE maths tuition covers all key topics:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
              {topics.map((topic, index) => (
                <TopicCovered
                  key={index}
                  icon={topic.icon}
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
              From primary school to A-Levels, our tailored maths tuition supports students at every stage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {gradeLevels.map((level, index) => (
                <div
                  key={index}
                  className="relative w-full max-w-sm mx-auto transform hover:rotate-0 hover:shadow-2xl transition duration-500 ease-in-out"
                  style={{ transform: 'rotate(0deg)' }} // Subtle default rotation removed for a flat look
                >
                  {/* Book spine */}
                  <div className="absolute inset-y-0 left-0 w-6 bg-teal-700 rounded-l-lg shadow-inner"></div>

                  {/* Book cover */}
                  <div className="relative bg-gradient-to-br from-teal-50 to-white p-6 border border-gray-200 rounded-r-lg shadow-xl">
                    {/* Cover texture */}
                    <div className="absolute inset-0 bg-white/10 bg-noise-pattern"></div>

                    {/* Title and content */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{level.title}</h3>
                    <p className="text-gray-700">
                      {level.description}
                    </p>

                    {/* Simulated "pages" */}
                    <div className="absolute inset-y-0 right-0 w-2 bg-gray-100 border-l border-gray-300 shadow-inner"></div>
                  </div>

                  {/* Bottom shadow for depth */}
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-300 rounded-b-lg shadow-lg"></div>

                  {/* Spine detailing for realism */}
                  <div className="absolute inset-y-0 left-1 w-1 bg-teal-900 rounded-l-sm shadow-lg"></div>
                </div>
              ))}
            </div>
          </section>




          <section className="mb-[70px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">
              How Our UAE Online Maths Tuition Works
            </h2>
            <p className="mb-9 text-center text-gray-700">
              Discover a personalized and effective approach to mastering maths with our UAE online tuition for students.
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
                  We begin with an assessment of your child’s current level to understand their strengths and areas for improvement.
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
                  Our tutors create a customized learning plan for each student based on their assessment results.
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
                  Sessions are flexible to accommodate different time zones and schedules, ensuring maximum convenience.
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
                  Parents receive regular updates on their child's progress, highlighting improvements and key achievements.
                </p>
              </div>
            </div>
          </section>




          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-7 text-center text-teal-700">
              Exam Preparation
            </h2>
            <div className="flex flex-col lg:flex-row">
              {/* Left Side: Heading and Description */}
              <div className="lg:w-1/2 p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  Focused Preparation for Success
                </h3>
                <p className="text-gray-700 mb-4">
                  We specialize in preparing students for UAE and international exams:
                </p>
                <p className="text-gray-700">
                  <strong>IGCSE Maths:</strong> Focused tutoring for IGCSE students preparing for their final exams.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>CBSE Maths (Class 10 and 12):</strong> Support for CBSE students to excel in their board exams.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>UAE Ministry Curriculum:</strong> Preparation for UAE-specific school exams, ensuring students are ready to succeed.
                </p>
              </div>

              {/* Right Side: Four Boxes */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4 p-6">
                {/* Box 1 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">IGCSE Maths</h4>
                  <p className="text-gray-700">
                    Focused tutoring for IGCSE students preparing for their final exams.
                  </p>
                </div>
                {/* Box 2 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">CBSE Maths Support</h4>
                  <p className="text-gray-700">
                    Support for Class 10 and 12 students preparing for CBSE board exams.
                  </p>
                </div>
                {/* Box 3 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">UAE Ministry Curriculum</h4>
                  <p className="text-gray-700">
                    Tailored preparation for UAE-specific school exams to ensure success.
                  </p>
                </div>
                {/* Box 4 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">Mock Exams</h4>
                  <p className="text-gray-700">
                    Regular mock exams to assess readiness and boost exam confidence.
                  </p>
                </div>
              </div>
            </div>
          </section>





          {/* testimonual section */}
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
                  text="My daughter was struggling with CBSE maths, but thanks to YFC’s tutoring, she improved significantly and scored an A in her final exam."
                  author="Fatima, Parent"
                  image="/Images/fatima.jpg" // Replace with the actual image URL or path
                />
              </div>

              {/* Testimonial 2 */}
              <div
                style={{ scrollSnapAlign: 'start' }}
                className="flex-shrink-0 w-full sm:w-96 lg:w-[32%]"
              >
                <TestimonialCard
                  text="I was nervous about my IGCSE exams, but YFC’s tutors made everything so easy to understand. I feel confident about my results now."
                  author="Ahmed, Student"
                  image="/Images/ahmed.jpg" // Replace with the actual image URL or path
                />
              </div>
            </div>
          </section>



          <section className="bg-teal-400 text-white p-6 text-center md:p-8 rounded-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Succeed in Maths with YFC!
            </h2>
            <p className="mb-4 text-lg md:text-xl">
              Contact us today to book a free trial session and start your journey towards maths excellence.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <Link
                              aria-label="Get Register"

                href="/get-register"
              
                className="bg-white text-teal-500 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition duration-300"
              >
                Sign Up for a Free Trial
              </Link>
            </div>
          </section>







        </div>)}
    </>
  );
};

export default UaeMathematics;
