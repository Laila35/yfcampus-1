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
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Link from 'next/link';



const GradeLevelCard = ({ title, description }) => {
  return (
    <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
      <h3 className="text-xl font-semibold text-teal-700 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const NzMathematics = () => {
  const { country } = useCountry()
  const router = useRouter(); // Get the router instance
  const topics = [
    {
      icon: <FaCalculator />, // Icon for Number and Algebra
      title: 'Number and Algebra',
      description: 'Master core number operations, algebraic expressions, and linear/quadratic functions.',
    },
    {
      icon: <FaShapes />, // Icon for Measurement and Geometry
      title: 'Measurement and Geometry',
      description: 'Learn about angles, measurement units, geometric shapes, and reasoning.',
    },
    {
      icon: <FaChartBar />, // Icon for Statistics and Probability
      title: 'Statistics and Probability',
      description: 'Build skills in data analysis, probability calculations, and graph interpretation.',
    },
    {
      icon: <FaPuzzlePiece />, // Changed icon for Trigonometry
      title: 'Trigonometry',
      description: 'Explore trigonometric functions and their applications in real-world problems.',
    },
    {
      icon: <FaClipboardList />, // Changed icon for Calculus
      title: 'Calculus (for Senior Students)',
      description: 'Understand differentiation, integration, and their practical applications.',
    },
  ];


  useEffect(() => {
    if (country) {
      // Check if the country is 'Australia'
      if (country === 'New Zealand') {
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
          case 'United Kingdom':
            router.push('/uk/online-maths-tuition');
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
  if (!country || country !== 'New Zealand') {
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
          Online Maths Tuition in New Zealand | NCEA Maths Tutors for Grades 1-12 | YFC
        </title>
        <meta
          name="description"
          content="Looking for expert online maths tuition in New Zealand? YFC offers personalized maths tutoring for NCEA and school students. Get a free trial today!"
        />
        <meta
          name="keywords"
          content="online maths tuition New Zealand, NCEA maths tutoring, maths tutors New Zealand, online maths classes NZ, primary maths tutoring NZ, secondary maths tuition, NCEA Level 1-3 tutoring"
        />
        <meta
          property="og:title"
          content="Online Maths Tuition in New Zealand | NCEA Maths Tutors | YFC"
        />
        <meta property="og:url" content="https://yfcampus.com/online-maths-tuition-nz/" />
        <meta
          property="og:image"
          content="URL_to_the_image.jpg"
        />
        <meta
          property="og:description"
          content="Looking for expert online maths tuition in New Zealand? YFC offers personalized maths tutoring for NCEA and school students. Get a free trial today!"
        />
        <link
          rel="canonical"
          href="https://yfcampus.com/online-maths-tuition-nz/"
          title="online maths tuition"
          aria-label="online maths tuition"
        />
        <link
          rel="alternate"
          href="https://yfcampus.com/science-tuition-nz/"
          title="Science Tuition NZ"
          aria-label="Science Tuition NZ"
        />
        <link
          rel="alternate"
          href="https://yfcampus.com/physics-tutoring-nz/"
          title="Physics Tutoring NZ"
          aria-label="Physics Tutoring NZ"
        />
        <link
          rel="alternate"
          href="https://yfcampus.com/chemistry-tutoring-nz/"
          title="Chemistry Tutoring NZ"
          aria-label="Chemistry Tutoring NZ"
        />
        <link
          rel="alternate"
          href="https://yfcampus.com/biology-tutoring-nz/"
          title="Biology Tutoring NZ"
          aria-label="Biology Tutoring NZ"
        />
      </head>


      {country === 'New Zealand' && (
        <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
          <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/maths.webp")' }}>
            <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
            <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
              Online Maths Tuition for New Zealand Students | NCEA Maths Tutoring and More        </h1>
          </section>



          {/* Intro section */}
          <section className="mb-8 p-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
            <p className="mt-2 text-gray-700">
              At Your Future Campus (YFC), we provide specialized online maths tutoring for students across New Zealand, following the New Zealand Curriculum. Whether your child is in primary school, needs help with intermediate maths, or is preparing for NCEA exams, our experienced tutors are here to help. With flexible online sessions, students in New Zealand can excel in maths from the comfort of their home.
            </p>
          </section>

          <section className="mb-8">
            <ChooseUs chooseUs={chooseUs} />
          </section>

          {/* Maths Topics Covered Section */}
          <section className="mb-[70px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">Maths Topics Covered</h2>
            <p className="mb-9 text-center text-gray-700">
              Our New Zealand maths tuition covers all essential topics across various year levels:
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
              Our tailored maths tuition supports students at every stage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Primary School (Years 1-6)',
                  description:
                    'Develop a strong foundation in basic arithmetic, geometry, and problem-solving skills aligned with the New Zealand Curriculum.',
                },
                {
                  title: 'Intermediate (Years 7-8)',
                  description:
                    'Strengthen algebra, geometry, and real-world problem-solving skills in preparation for secondary school.',
                },
                {
                  title: 'Secondary and NCEA (Years 9-12)',
                  description:
                    'Prepare for NCEA Level 1-3 exams with targeted tutoring in algebra, trigonometry, calculus, and more advanced topics.',
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
              How Our New Zealand Online Maths Tuition Works
            </h2>
            <p className="mb-9 text-center text-gray-700">
              Discover a personalized and effective approach to mastering maths with our New Zealand online tuition for students.
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
                  We start with a comprehensive assessment to determine the student’s current level and areas needing improvement.
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
                  Based on the assessment, we create a tailored plan that aligns with the student’s learning goals and curriculum.
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
                  Choose convenient session times, including evenings and weekends, to suit your busy schedule.
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
                  Regular Progress Updates
                </h3>
                <p className="text-gray-600">
                  Parents receive detailed progress reports to track their child’s development and address any concerns.
                </p>
              </div>
            </div>
          </section>




          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-7 text-center text-teal-700">
              NCEA Exam Preparation
            </h2>
            <div className="flex flex-col lg:flex-row">
              {/* Left Side: Heading and Description */}
              <div className="lg:w-1/2 p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  Focused Preparation for Success
                </h3>
                <p className="text-gray-700 mb-4">
                  We provide targeted tutoring to prepare students for the NCEA maths exams at all levels:
                </p>
                <p className="text-gray-700">
                  <strong>NCEA Level 1:</strong> Foundational topics including algebra, geometry, and statistics.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>NCEA Level 2:</strong> Intermediate topics like advanced algebra, trigonometry, and calculus.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>NCEA Level 3:</strong> Advanced calculus, statistics, and preparation for university-level maths.
                </p>
              </div>

              {/* Right Side: Four Boxes */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4 p-6">
                {/* Box 1 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">NCEA Level 1 Preparation</h4>
                  <p className="text-gray-700">Master foundational topics like algebra and geometry for Level 1 success.</p>
                </div>
                {/* Box 2 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">NCEA Level 2 Support</h4>
                  <p className="text-gray-700">Strengthen understanding of advanced algebra, trigonometry, and calculus.</p>
                </div>
                {/* Box 3 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">NCEA Level 3 Coaching</h4>
                  <p className="text-gray-700">Prepare for university-level maths with advanced calculus and statistics tutoring.</p>
                </div>
                {/* Box 4 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">Mock Exams</h4>
                  <p className="text-gray-700">Regular mock exams to assess readiness and build confidence for the real exams.</p>
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
                  text="Thanks to YFC, my daughter passed her NCEA Level 2 exam with flying colors! The tutor was excellent, and the lessons were always engaging."
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
                  text="YFC helped me understand complex calculus topics, and I improved my NCEA Level 3 score significantly. I couldn’t have done it without them."
                  author="Liam, Student"
                  image="/Images/liam.jpg" // Replace with the actual image URL or path
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
              aria-label='Signup for free trial'
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

export default NzMathematics;
