"use client"
import { chooseUs } from '@/lib/Data';
import ChooseUs from '@/components/landingPage/ChooseUs';
import React, { useEffect } from 'react';
import TestimonialCard from '@/components/TestimonialCard';
import TopicCovered from '@/components/TopicsCovered';
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import {
  FaCalculator,
  FaShapes,
  FaPuzzlePiece,
  FaChartBar,
  FaClipboardList,
} from 'react-icons/fa';
import { useCountry } from '@/app/context/CountryContext';
import Link from 'next/link';
// import { useCountry } 



const GradeLevelCard = ({ title, description }) => {
  return (
    <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
      <h3 className="text-xl font-semibold text-teal-700 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const UsMathematics = () => {
  const { country } = useCountry()
  const router = useRouter(); // Get the router instance

  const topics = [
    {
      icon: <FaCalculator />,
      title: 'Number Operations',
      description: 'Master the fundamentals of addition, subtraction, multiplication, and division.',
    },
    {
      icon: <FaPuzzlePiece />,
      title: 'Algebra',
      description: 'Learn how to solve equations, work with expressions, and explore quadratic functions.',
    },
    {
      icon: <FaShapes />,
      title: 'Geometry',
      description: 'Understand shapes, angles, transformations, and the Pythagorean theorem.',
    },
    {
      icon: <FaChartBar />,
      title: 'Statistics and Probability',
      description: 'Build skills in data handling, graphing, and probability calculations.',
    },
    {
      icon: <FaClipboardList />,
      title: 'Calculus (for advanced students)',
      description: 'Explore differentiation, integration, and their real-world applications.',
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
      
      if (country === 'United States') {
       
        return; 
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
          case 'United Kingdom':
            router.push('/us/online-maths-tuition');
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
          Online Math Tuition in the USA | Expert Math Tutors | YFC
        </title>
        <meta
          name="description"
          content="Looking for expert online math tuition in the USA? YFC offers personalized math tutoring for Grades 1 to 12, covering elementary, middle, and high school. Free trial available!"
        />
        <meta
          name="keywords"
          content="online math tuition USA, SAT math tutoring, ACT math tutoring, math tutors USA, AP calculus tutoring, elementary math tutoring, high school math tutoring"
        />
        <meta
          property="og:title"
          content="Online Math Tuition in the USA | SAT & ACT Math Tutors | YFC"
        />
        <meta property="og:url" content="https://yfcampus.com/online-math-tuition/" />
        <meta
          property="og:image"
          content="URL_to_the_image.jpg"
        />
        <meta
          property="og:description"
          content="Looking for expert online math tuition in the USA? YFC offers tailored tutoring for SAT and ACT math, as well as AP calculus and elementary math. Sign up for a free trial today!"
        />
        <link
          rel="canonical"
          href="https://yfcampus.com/online-math-tuition/"
          title="math Tuition"
          aria-label="math Tuition"
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

      {country === 'United States' && (
        <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
          <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/maths.webp")' }}>
            <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
            <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
              Online Math Tuition for USA Students | Personalized Learning for All Grade Levels
            </h1>
          </section>



          {/* Intro section */}
          <section className="mb-8 p-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
            <p className="mt-2 text-gray-700">
              At Your Future Campus (YFC), we provide specialized online math tutoring tailored to the needs of USA students. Whether your child needs help with elementary math, is preparing for high school exams, or is aiming for top scores on the SAT, our experienced tutors are here to help. With flexible online sessions, students across the USA can get expert math guidance from the comfort of their home.

            </p>
          </section>


          <section className="mb-8">
            <ChooseUs chooseUs={chooseUs} />
          </section>

          {/* Maths Topics Covered Section */}
          <section className="mb-[70px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">Maths Topics Covered</h2>
            <p className="mb-9 text-center text-gray-700">
              Our USA math tuition covers all essential topics across various grade levels, including:
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
              From elementary school to high school, our tailored maths tuition supports students at every stage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Elementary School (Grades 1-5)',
                  description:
                    'Build a solid foundation in basic arithmetic, geometry, and problem-solving, ensuring students excel in their elementary math classes.',
                },
                {
                  title: 'Middle School (Grades 6-8)',
                  description:
                    'Strengthen pre-algebra and geometry skills to prepare for more advanced math in high school. Our tutors help students tackle more complex equations and real-world applications.',
                },
                {
                  title: 'High School (Grades 9-12)',
                  description:
                    'Prepare for key exams like the SAT, ACT, and AP Calculus with focused tutoring on algebra, geometry, trigonometry, and calculus.',
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
              How Our USA Online Math Tuition Works
            </h2>
            <p className="mb-9 text-center text-gray-700">
              Discover a personalized and effective approach to mastering math with our USA online tuition for students.
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
                  We assess the student's current math level to identify areas that need improvement.
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
                  Based on the assessment, our tutors create a custom learning plan tailored to the student's needs.
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
                  Our tutors are available for flexible session times, including evenings and weekends, to accommodate your schedule.
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
                  Parents receive regular progress reports to monitor their child’s development and address any areas of concern.
                </p>
              </div>
            </div>
          </section>


          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-7 text-center text-teal-700">
              SAT, ACT, and AP Math Exam Preparation
            </h2>
            <div className="flex flex-col lg:flex-row">
              {/* Left Side: Heading and Description */}
              <div className="lg:w-1/2 p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  Focused Preparation for Success
                </h3>
                <p className="text-gray-700 mb-4">
                  Our math tutors provide focused support for students preparing for major exams in the USA:
                </p>
                <p className="text-gray-700">
                  SAT Math: Master all key topics on the SAT Math sections, including algebra, geometry, and problem-solving strategies. We offer extensive practice using past papers and mock exams.
                </p>
                <p className="text-gray-700 mt-2">
                  ACT Math: Learn to tackle questions on algebra, geometry, trigonometry, and more with targeted preparation.
                </p>
                <p className="text-gray-700 mt-2">
                  AP Calculus: For advanced students, we offer tutoring in AP Calculus AB and BC, covering differentiation, integration, and applications of calculus.
                </p>
              </div>

              {/* Right Side: Four Boxes */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4 p-6">
                {/* Box 1 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">SAT Math</h4>
                  <p className="text-gray-700">Master all key topics with extensive practice using past papers and mock exams.</p>
                </div>
                {/* Box 2 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">ACT Math</h4>
                  <p className="text-gray-700">Targeted preparation for questions on algebra, geometry, and trigonometry.</p>
                </div>
                {/* Box 3 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">AP Calculus</h4>
                  <p className="text-gray-700">Tutoring in AP Calculus AB and BC, focusing on differentiation and integration.</p>
                </div>
                {/* Box 4 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">Mock Exams</h4>
                  <p className="text-gray-700">Regular mock exams to assess progress and readiness for real exams.</p>
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
                  text="YFC helped my son boost his SAT Math score by 150 points! The personalized attention and practice sessions were exactly what he needed."
                  author="Jessica, Parent"
                  image="/Images/jessica.jpg" // Replace with the actual image URL or path
                />
              </div>

              {/* Testimonial 2 */}
              <div
                style={{ scrollSnapAlign: 'start' }}
                className="flex-shrink-0 w-full sm:w-96 lg:w-[32%]"
              >
                <TestimonialCard
                  text="My daughter struggled with algebra until we found YFC. Now she's excelling in her high school math class and feels confident about the upcoming ACT!"
                  author="Thomas, Parent"
                  image="/Images/thomas.jpg" // Replace with the actual image URL or path
                />
              </div>
            </div>
          </section>

          <section className="bg-teal-400 text-white p-6 text-center md:p-8 rounded-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Get Top Grades in Math with YFC!
            </h2>
            <p className="mb-4 text-lg md:text-xl">
              Contact us today to book a free trial session with one of our expert math tutors and set your child up for math success.
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





        </div>)}
    </>
  );
};

export default UsMathematics;
