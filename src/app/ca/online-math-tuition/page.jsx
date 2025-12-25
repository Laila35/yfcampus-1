"use client"
import { chooseUs } from '@/lib/Data';
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
import { useRouter } from "next/navigation";
import Link from 'next/link';


const GradeLevelCard = ({ title, description }) => {
  return (
    <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
      <h3 className="text-xl font-semibold text-teal-700 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const CaMathematics = () => {
  const { country } = useCountry()
  const router = useRouter();
  const topics = [
    {
      icon: <FaCalculator />,
      title: 'Number and Arithmetic',
      description: 'Basic and advanced number operations, fractions, decimals, and percentages.',
    },
    {
      icon: <FaPuzzlePiece />,
      title: 'Algebra',
      description: 'Learn how to solve equations, work with expressions, and explore quadratic functions.',
    },
    {
      icon: <FaShapes />,
      title: 'Geometry and Trigonometry',
      description: 'Understand shapes, angles, transformations, and trigonometric functions.',
    },
    {
      icon: <FaChartBar />,
      title: 'Statistics and Probability',
      description: 'Develop skills in data handling, graphing, statistical analysis, and probability.',
    },
    {
      icon: <FaClipboardList />,
      title: 'Calculus (for high school students)',
      description: 'Master differentiation, integration, and their real-world applications.',
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
      if (country === 'Canada') {
        // Render content for Australia
        return; // Do nothing, render the current component
      } else {
        // If the country is one of the specified countries, redirect to the corresponding URL
        switch (country) {
          case 'Australia':
            router.push('/au/online-maths-tuition');
            break;
          case 'Hong Kong':
            router.push('/hk/online-maths-tuition');
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
          case 'United Kingdom':
            router.push('/uk/online-maths-tuition');
            break;
          case 'New Zealand':
            router.push('/nz/online-maths-tuition');
            break;
          case 'India':
            router.push('/in/online-maths-tuition');
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
          Online Math Tuition in Canada | Expert Math Tutors for Grades 1-12 | YFC
        </title>
        <meta
          name="description"
          content="Looking for expert online math tuition in Canada? YFC offers tailored tutoring for elementary, secondary, and high school students. Get a free trial today!"
        />
        <meta
          name="keywords"
          content="online math tuition Canada, EQAO math tutoring, provincial exam math tutoring, high school math tutors Canada, elementary math tutoring, middle school math tutoring, high school math preparation Canada"
        />
        <meta
          property="og:title"
          content="Online Math Tuition in Canada | Expert Math Tutors | YFC"
        />
        <meta property="og:url" content="https://yfcampus.com/online-math-tuition/" />
        <meta
          property="og:image"
          content="URL_to_the_image.jpg"
        />
        <meta
          property="og:description"
          content="Looking for expert online math tuition in Canada? YFC offers tailored tutoring for elementary, secondary, and high school students. Sign up for a free trial today!"
        />
        <link
          rel="canonical"
          aria-label="online maths tution"

          href="https://yfcampus.com/online-math-tuition/"
        />
        <link
          rel="alternate"
          aria-label="science tuition"

          href="https://yfcampus.com/science-tuition/"
          title="Science Tuition"
        />
        <link
          rel="alternate"
          aria-label="physics tutoring"

          href="https://yfcampus.com/physics-tutoring/"
          title="Physics Tutoring"
        />
        <link
          rel="alternate"
          aria-label="chemistry tutoring"

          href="https://yfcampus.com/chemistry-tutoring/"
          title="Chemistry Tutoring"
        />
        <link
          rel="alternate"
          aria-label="biology tutoring"

          href="https://yfcampus.com/biology-tutoring/"
          title="Biology Tutoring"
        />
      </head>

      {country === 'Canada' && (
        <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
          <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/maths.webp")' }}>
            <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
            <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
              Online Math Tuition for Canadian Students | Personalized Learning from Grades 1-12
            </h1>
          </section>



          {/* Intro section */}
          <section className="mb-8 p-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
            <p className="mt-2 text-gray-700">
              At Your Future Campus (YFC), we provide specialized online math tutoring for students across Canada. Whether your child needs help with elementary math, is preparing for provincial exams, or needs support in advanced calculus, our experienced tutors are here to help. Our flexible online sessions offer Canadian students the opportunity to receive high-quality math tutoring from the comfort of their home.

            </p>
          </section>

          <section className="mb-8">
            <ChooseUs chooseUs={chooseUs} />
          </section>

          {/* Maths Topics Covered Section */}
          <section className="mb-[70px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">Maths Topics Covered</h2>
            <p className="mb-9 text-center text-gray-700">
              Our Canada math tuition covers all the essential topics across various grade levels, including:          </p>
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
              From elementary school to high school, our tailored maths tuition supports students at every stage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Elementary School (Grades 1-6)',
                  description:
                    'Build a strong foundation in basic arithmetic, geometry, and problem-solving skills, tailored to each province’s curriculum.',
                },
                {
                  title: 'Middle School (Grades 7-8)',
                  description:
                    'Strengthen pre-algebra, geometry, and real-world problem-solving to prepare students for high school math. Our tutors ensure students understand key concepts in preparation for high school.',
                },
                {
                  title: 'High School (Grades 9-12)',
                  description:
                    'Prepare for provincial high school exams and advanced math courses such as Functions, Advanced Functions, and Calculus. Our tutors help students excel in these challenging subjects.',
                },
              ].map((level, index) => (
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
                    <p className="text-gray-700">{level.description}</p>

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
              How Our Canadian Online Math Tuition Works
            </h2>
            <p className="mb-9 text-center text-gray-700">
              Discover a personalized and effective approach to mastering math with our Canadian online tuition for students.
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
                  We begin with an assessment to identify the student’s current level and areas needing improvement.
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
                  Based on the assessment, we develop a customized plan to help your child excel in math.
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
                  We offer flexible session times, including evenings and weekends, to fit into your busy schedule.
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
                  Parents receive regular updates to track their child’s progress and areas for improvement.
                </p>
              </div>
            </div>
          </section>


          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-7 text-center text-teal-700">
              Provincial Exam Preparation
            </h2>
            <div className="flex flex-col lg:flex-row">
              {/* Left Side: Heading and Description */}
              <div className="lg:w-1/2 p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  Specialized Support for Canadian Students
                </h3>
                <p className="text-gray-700 mb-4">
                  We specialize in preparing Canadian students for key exams and assessments:
                </p>
                <p className="text-gray-700">
                  Ontario EQAO Math (Grades 3, 6, 9): Focused tutoring for the Education Quality and Accountability Office (EQAO) assessments to ensure students perform well.
                </p>
                <p className="text-gray-700 mt-2">
                  British Columbia Graduation Assessments: Prepare for BC’s Grade 10 and 12 math assessments with targeted tutoring.
                </p>
                <p className="text-gray-700 mt-2">
                  High School Graduation Exams (Alberta, Quebec, etc.): Comprehensive support for provincial graduation exams, ensuring students are ready for success.
                </p>
              </div>

              {/* Right Side: Four Boxes */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4 p-6">
                {/* Box 1 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">Ontario EQAO Math</h4>
                  <p className="text-gray-700">Focused tutoring for Grades 3, 6, and 9 EQAO assessments.</p>
                </div>
                {/* Box 2 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">BC Graduation Assessments</h4>
                  <p className="text-gray-700">Targeted preparation for Grade 10 and 12 math assessments.</p>
                </div>
                {/* Box 3 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">High School Graduation Exams</h4>
                  <p className="text-gray-700">Comprehensive support for provincial graduation exams across Canada.</p>
                </div>
                {/* Box 4 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">Mock Assessments</h4>
                  <p className="text-gray-700">Regular mock assessments to gauge readiness and progress.</p>
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
                  text="YFC’s math tutoring helped my son prepare for his Grade 9 EQAO exam. He gained confidence, and we saw a big improvement in his results!"
                  author="Sarah, Parent"
                  image="/Images/sarah.jpg" // Replace with the actual image URL or path
                />
              </div>

              {/* Testimonial 2 */}
              <div
                style={{ scrollSnapAlign: 'start' }}
                className="flex-shrink-0 w-full sm:w-96 lg:w-[32%]"
              >
                <TestimonialCard
                  text="Thanks to YFC’s tutoring, I was able to improve my calculus grade and feel prepared for my provincial graduation exam. Highly recommend!"
                  author="Liam, High School Student"
                  image="/Images/liam.jpg" // Replace with the actual image URL or path
                />
              </div>
            </div>
          </section>


          <section className="bg-teal-400 text-white p-6 text-center md:p-8 rounded-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Get the Best in Math Education with YFC!
            </h2>
            <p className="mb-4 text-lg md:text-xl">
              Contact us today to book a free trial session and give your child the confidence they need to excel in math.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <Link
              aria-label='signup for free trial'
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

export default CaMathematics;
