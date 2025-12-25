"use client"
import { chooseUs } from '@/lib/Data';
import ChooseUs from '@/components/landingPage/ChooseUs';
import React, { useEffect } from 'react';
import TestimonialCard from '@/components/TestimonialCard';
import TopicCovered from '@/components/TopicsCovered';
import { useRouter } from "next/navigation"; 
import { useCountry } from '@/app/context/CountryContext';

import {
  FaCalculator,
  FaShapes,
  FaPuzzlePiece,
  FaChartBar,
  FaClipboardList,
} from 'react-icons/fa';
import Link from 'next/link';

const GradeLevelCard = ({ title, description }) => {
  return (
    <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
      <h3 className="text-xl font-semibold text-teal-700 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const UkMathematics = () => {

  const { country } = useCountry()
  const router = useRouter(); // Get the router instance

  const topics = [
    {
      icon: <FaCalculator />,
      title: 'Number and Arithmetic',
      description:
        'Basic and advanced number operations, fractions, percentages, and decimals.',
    },
    {
      icon: <FaShapes />,
      title: 'Algebra',
      description:
        'Solving equations, quadratic functions, simultaneous equations, and inequalities.',
    },
    {
      icon: <FaPuzzlePiece />,
      title: 'Geometry and Trigonometry',
      description:
        'Angles, shapes, Pythagoras theorem, transformations, and trigonometric functions.',
    },
    {
      icon: <FaChartBar />,
      title: 'Statistics and Probability',
      description: 'Data handling, graphing, statistical analysis, and probability.',
    },
    {
      icon: <FaClipboardList />,
      title: 'Calculus (for A-Level students)',
      description: 'Differentiation, integration, and their applications.',
    },
  ];

  const gradeLevels = [
    {
      title: 'Primary School (Years 1-6)',
      description:
        'Build a strong foundation in basic arithmetic, problem-solving, and early geometry to help students succeed in their primary school maths.',
    },
    {
      title: 'Secondary School (Years 7-11)',
      description:
        'Prepare for key exams like GCSEs, covering all topics from algebra and geometry to statistics and trigonometry. We offer focused GCSE Maths revision and practice exams.',
    },
    {
      title: 'A-Level (Years 12-13)',
      description:
        'Our A-Level Maths tuition includes comprehensive support in topics like calculus, mechanics, and statistics, ensuring students are fully prepared for their A-Level exams.',
    },
  ];
  useEffect(() => {
    if (country) {
      // Check if the country is 'Australia'
      if (country === 'United Kingdom') {
        // Render content for Australia
        return; // Do nothing, render the current component
      } else {
        // If the country is one of the specified countries, redirect to the corresponding URL
        switch (country) {
          case 'Canada':
            router.push('/ca/online-math-tuition');
            break;
          case 'Australia':
            router.push('/au/online-maths-tuition');
            break;
          case 'Singapore':
            router.push('/sg/online-maths-tuition');
            break;
          case 'Malaysia':
            router.push('/my/online-maths-tuition');
            break;
          case 'Philippines':
            router.push('/ph/online-maths-tuition');
            break;
          case 'United States':
            router.push('/us/online-math-tuition');
            break;
          case 'New Zealand':
            router.push('/nz/online-maths-tuition');
            break;
          case 'India ':
            router.push('/in/online-maths-tuition');
            break;
          case 'Hong Kong':
            router.push('/hk/online-maths-tuition');
            break;
          case 'United Arab Emirates':
            router.push('/ae/online-maths-tuition');
            break;
          case 'South Africa':
            router.push('/za/online-maths-tuition');
            break;
          default:
            router.push('/online-maths-tuition'); // Default fallback for math
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
          Online Maths Tuition in the UK | GCSE & A-Level Maths Tutors | YFC
        </title>
        <meta
          name="description"
          content="Looking for expert online maths tuition in the UK? YFC offers tailored tutoring for GCSE and A-Level students, as well as younger learners. Sign up for a free trial today!"
        />
        <meta
          name="keywords"
          content="online maths tuition UK, GCSE maths tuition, A-Level maths tutoring, UK maths tutors, GCSE maths revision, A-Level maths preparation, maths tutors UK"
        />
        <meta
          property="og:title"
          content="Online Maths Tuition in the UK | GCSE & A-Level Maths Tutors | YFC"
        />
        <meta property="og:url" content="https://yfcampus.com/online-maths-tuition/" />
        <meta
          property="og:image"
          content="URL_to_the_image.jpg"
        />
        <meta
          property="og:description"
          content="Looking for expert online maths tuition in the UK? YFC offers tailored tutoring for GCSE and A-Level students, as well as younger learners. Sign up for a free trial today!"
        />
        <link
          rel="canonical"
          href="https://yfcampus.com/online-maths-tuition/"
          title="Science Tuition"
          aria-label="Science Tuition"
        />
        <link
          rel="alternate"
          href="https://yfcampus.com/science-tuition/"
          title="Science Tuition"
          aria-label="Science Tuition"
        />
        <link
          rel="alternate"
          href="https://yfcampus.com/physics-tutoring/"
          title="Physics Tutoring"
          aria-label="Physics Tutoring"
        />
        <link
          rel="alternate"
          href="https://yfcampus.com/chemistry-tutoring/"
          title="Chemistry Tutoring"
          aria-label="Chemistry Tutoring"
        />
        <link
          rel="alternate"
          href="https://yfcampus.com/biology-tutoring/"
          title="Biology Tutoring"
          aria-label="Biology Tutoring"
        />
      </head>

      {country === 'United Kingdom' && (
        <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
          <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/maths.webp")' }}>
            <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
            <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
              Online Maths Tuition for UK Students | GCSE & A-Level Focused Tutoring
            </h1>
          </section>



          {/* Intro section */}
          <section className="mb-8 p-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
            <p className="mt-2 text-gray-700">
              At Your Future Campus (YFC), we provide specialized online maths tuition tailored to the UK curriculum. Whether your child is preparing for GCSEs, aiming for top grades in their A-Level exams, or needs help with primary and secondary school maths, our experienced tutors are here to help. With our flexible online tutoring sessions, students across the UK can receive expert maths guidance from the comfort of their home.
            </p>
          </section>

          <section className="mb-8">
            <ChooseUs chooseUs={chooseUs} />
          </section>

          {/* Maths Topics Covered Section */}
          <section className="mb-[70px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">Maths Topics Covered</h2>
            <p className="mb-9 text-center text-gray-700">
              Our UK maths tuition covers all key areas of the National Curriculum, including:
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
              How Our UK Online Maths Tuition Works
            </h2>
            <p className="mb-9 text-center text-gray-700">
              Discover a personalized and effective approach to mastering maths with our UK online tuition for students.
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
                  We begin by assessing your child’s current maths level and identifying areas for improvement.
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
                  Our tutors create a customized learning plan tailored to your child's specific needs and learning goals.
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
                  Choose times that suit your schedule. Our tutors offer flexible session times, including evenings and weekends.
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
                  Parents receive detailed progress reports to track improvement and areas that need further attention.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-7 text-center text-teal-700">
              GCSE & A-Level Maths Exam Preparation
            </h2>
            <div className="flex flex-col lg:flex-row">
              {/* Left Side: Heading and Description */}
              <div className="lg:w-1/2 p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  Focused Preparation for Success
                </h3>
                <p className="text-gray-700 mb-4">
                  We provide focused exam preparation for both GCSE and A-Level maths students. Our tutors cover:
                </p>
                <p className="text-gray-700">
                  GCSE Maths (Edexcel, AQA, OCR): Ensure students master all key topics and are fully prepared with past papers and mock exams.
                </p>
                <p className="text-gray-700 mt-2">
                  A-Level Maths (Edexcel, AQA, OCR): Support students in tackling advanced topics, with a focus on exam technique and problem-solving strategies.
                </p>
                <p className="text-gray-700 mt-2">
                  Further Maths (A-Level): For students taking Further Maths, we provide advanced tutoring on topics like complex numbers, matrices, and differential equations.
                </p>
              </div>

              {/* Right Side: Four Boxes */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4 p-6">
                {/* Box 1 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">GCSE Maths</h4>
                  <p className="text-gray-700">Ensure mastery of key topics with past papers and mock exams.</p>
                </div>
                {/* Box 2 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">A-Level Maths</h4>
                  <p className="text-gray-700">Advanced topics with a focus on exam technique and problem-solving strategies.</p>
                </div>
                {/* Box 3 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">Further Maths</h4>
                  <p className="text-gray-700">Advanced tutoring on complex numbers, matrices, and differential equations.</p>
                </div>
                {/* Box 4 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">Mock Exams</h4>
                  <p className="text-gray-700">Regular mock exams to assess progress and readiness for the real exam.</p>
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
                  text="Thanks to YFC, my daughter achieved an A* in her GCSE Maths! The tutor was patient, and the tailored lessons made all the difference."
                  author="Emma, Parent"
                  image="/Images/emma.webp" // Replace with the actual image URL or path
                />
              </div>

              {/* Testimonial 2 */}
              <div
                style={{ scrollSnapAlign: 'start' }}
                className="flex-shrink-0 w-full sm:w-96 lg:w-[32%]"
              >
                <TestimonialCard
                  text="The A-Level maths tuition I received helped me gain confidence in calculus and ace my exams. I’m so grateful for the support!"
                  author="James, Student"
                  image="/Images/jame.webp" // Replace with the actual image URL or path
                />
              </div>
            </div>
          </section>
          <section className="bg-teal-400 text-white p-6 text-center md:p-8 rounded-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Achieve Maths Success with YFC!
            </h2>
            <p className="mb-4 text-lg md:text-xl">
              Contact us today to book a free trial session and give your child the support they need to excel in maths.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <Link
                aria-label='Free trial'
                href="/get-register"
                className="bg-white text-teal-500 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition duration-300"
              >
                Sign Up for a Free Trial
              </Link>
            </div>
          </section>




        </div>
      )}

    </>
  );
};

export default UkMathematics;
