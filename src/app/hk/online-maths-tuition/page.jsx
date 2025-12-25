"use client"
import { chooseUs } from '@/lib/Data';
import ChooseUs from '@/components/landingPage/ChooseUs';
import React, { useEffect } from 'react';
import TestimonialCard from '@/components/TestimonialCard';
import TopicCovered from '@/components/TopicsCovered';
import CallToAction from '@/components/CallToAction';
import {
  FaCalculator,
  FaShapes,
  FaPuzzlePiece,
  FaChartBar,
  FaClipboardList,
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useCountry } from '@/app/context/CountryContext';

const HkMathematics = () => {
  const { country } = useCountry()
  const router = useRouter();

  const topics = [
    {
      icon: <FaCalculator />, // You might want to change this icon
      title: 'Arithmetic and Number Theory',
      description: 'Basics for younger students and advanced number theory for IGCSE and HKDSE students.',
    },
    {
      icon: <FaShapes />, // You might want to keep this or change it
      title: 'Algebra and Geometry',
      description: 'Algebraic equations, geometric principles, and problem-solving for secondary and high school students.',
    },
    {
      icon: <FaPuzzlePiece />, // Consider a different icon for trigonometry
      title: 'Trigonometry and Calculus',
      description: 'Advanced topics such as trigonometry and calculus, helping students prepare for HKDSE and IGCSE exams.',
    },
    {
      icon: <FaChartBar />, // You might want to keep this or change it
      title: 'Statistics and Probability',
      description: 'Support with statistics and data analysis, essential for higher-level maths exams.',
    },
  ];

  const gradeLevels = [
    {
      title: 'Primary School (Years 1-6)',
      description:
        'Basic arithmetic and geometry, aligned with the Hong Kong curriculum.',
    },
    {
      title: 'Middle School (Years 7-9)',
      description:
        'Algebra, geometry, and trigonometry, preparing students for IGCSE and HKDSE exams.',
    },
    {
      title: 'Senior Secondary (Years 10-12)',
      description:
        'Advanced maths tutoring for HKDSE and IGCSE exams, focusing on calculus and statistics.',
    },
  ];

  useEffect(() => {
    if (country) {
      // Check if the country is 'Australia'
      if (country === 'Hong Kong') {
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
  if (!country || country !== 'Hong Kong') {
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
          Online Maths Tuition in Hong Kong | HKDSE and IGCSE Maths Tutors | YFC
        </title>
        <meta
          name="description"
          content="Looking for expert online maths tuition in Hong Kong? YFC offers personalized maths tutoring for HKDSE and IGCSE students. Free trial available!"
        />
        <meta
          name="keywords"
          content="online maths tuition Hong Kong, HKDSE maths tutors, IGCSE maths tutoring Hong Kong, online maths classes HK, IGCSE maths exam prep, HKDSE maths exam tutoring, algebra and calculus tutoring Hong Kong"
        />
        <meta
          property="og:title"
          content="Online Maths Tuition in Hong Kong | HKDSE and IGCSE Maths Tutors | YFC"
        />
        <meta property="og:url" content="https://yfcampus.com/hk/online-maths-tuition" />
        <meta
          property="og:image"
          content="URL_to_the_image.jpg"
        />
        <meta
          property="og:description"
          content="Looking for expert online maths tuition in Hong Kong? YFC offers personalized maths tutoring for HKDSE and IGCSE students. Free trial available!"
        />
        <link
                aria-label="online maths tuition"

          rel="canonical"
          href="https://yfcampus.com/hk/online-maths-tuition"
        />
        <link
          rel="alternate"
          aria-label="online science tuition"

          href="https://yfcampus.com/hk/online-science-tuition"
          title="Science Tuition"
        />
        <link
          rel="alternate"
          aria-label="online english tuition"

          href="https://yfcampus.com/hk/online-english-tuition"
          title="English Tuition"
        />
      </head>


      {country === 'Hong Kong' && (
        <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
          <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/maths.webp")' }}>
            <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
            <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
              Online Maths Tuition for Hong Kong Students | HKDSE and IGCSE Focused Tutoring
            </h1>
          </section>

          {/* Intro section */}
          <section className="mb-8 p-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
            <p className="mt-2 text-gray-700">
              At YFC, we provide specialized online maths tuition for students in Hong Kong, preparing them for HKDSE and IGCSE exams. Our expert tutors offer personalized support in arithmetic, algebra, geometry, and calculus, ensuring students excel in their maths studies.
            </p>
          </section>

          <section className="mb-8">
            <ChooseUs chooseUs={chooseUs} />
          </section>

          {/* Maths Topics Covered Section */}
          <section className="mb-[70px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">Maths Topics Covered</h2>
            <p className="mb-9 text-center text-gray-700">
              Our Hong Kong maths tuition covers all essential topics across the curriculum:
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
              Our tailored maths tuition supports students at every stage, aligned with the Hong Kong curriculum.            </p>
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
              How Our Hong Kong Online Maths Tuition Works
            </h2>
            <p className="mb-9 text-center text-gray-700">
              Discover a personalized and effective approach to mastering maths with our Hong Kong online tuition for students.
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
                  We assess each student’s current level and areas for improvement.
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
                  A tailored plan is developed to help the student succeed in maths.
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
                  Sessions are available at times that work best for the student.
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
                  Parents receive regular updates on their child’s progress.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-7 text-center text-teal-700">
              HKDSE and IGCSE Exam Preparation
            </h2>
            <div className="flex flex-col lg:flex-row">
              {/* Left Side: Heading and Description */}
              <div className="lg:w-1/2 p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  Focused Preparation for Success
                </h3>
                <p className="text-gray-700 mb-4">
                  We provide targeted support for the key exams in Hong Kong:
                </p>
                <p className="text-gray-700">
                  <strong>IGCSE Maths:</strong> Focused preparation for students taking the IGCSE maths exams, covering key topics like algebra and geometry.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>HKDSE Maths:</strong> Tailored tutoring for students preparing for the HKDSE maths exams, including advanced topics like calculus.
                </p>
              </div>

              {/* Right Side: Four Boxes */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4 p-6">
                {/* Box 1 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">IGCSE Maths Support</h4>
                  <p className="text-gray-700">Focused preparation covering key topics like algebra and geometry.</p>
                </div>
                {/* Box 2 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">HKDSE Maths Tutoring</h4>
                  <p className="text-gray-700">Tailored sessions including advanced topics like calculus.</p>
                </div>
                {/* Box 3 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">Mock Exams</h4>
                  <p className="text-gray-700">Regular mock exams to assess readiness and boost exam confidence.</p>
                </div>
                {/* Box 4 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">Progress Tracking</h4>
                  <p className="text-gray-700">Regular updates on progress to ensure students stay on track.</p>
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
                  text="YFC helped my daughter improve her IGCSE maths scores. The tutor explained difficult concepts in a way that was easy to understand."
                  author="Mei, Parent"
                  image="/Images/megan.jpg" // Replace with the actual image URL or path
                />
              </div>

              {/* Testimonial 2 */}
              <div
                style={{ scrollSnapAlign: 'start' }}
                className="flex-shrink-0 w-full sm:w-96 lg:w-[32%]"
              >
                <TestimonialCard
                  text="Thanks to YFC, I scored higher in my HKDSE maths exam. The lessons were very helpful, and the tutor was excellent."
                  author="Lee, Student"
                  image="/Images/josh.jpg" // Replace with the actual image URL or path
                />
              </div>
            </div>
          </section>



          <CallToAction
            heading="Master Maths with YFC!"
            description="Contact us today to book a free trial session and help your child excel in maths."
            buttonText="Sign Up for a Free Trial"
            buttonLink="/get-register"
          />

        </div>
      )}
    </>
  )
}

export default HkMathematics
