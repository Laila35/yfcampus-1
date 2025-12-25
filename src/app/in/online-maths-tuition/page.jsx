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

const InMathematics = () => {
  const { country } = useCountry()
  const router = useRouter();
  const topics = [
    {
      icon: <FaCalculator />, // Icon for Arithmetic and Number Systems
      title: 'Arithmetic and Number Systems',
      description: 'Master basic number operations and Vedic maths techniques for quick calculations.',
    },
    {
      icon: <FaPuzzlePiece />, // Icon for Algebra
      title: 'Algebra',
      description: 'Learn to solve equations, work with expressions, and tackle complex problems.',
    },
    {
      icon: <FaShapes />, // Icon for Geometry
      title: 'Geometry',
      description: 'Explore shapes, angles, theorems, and geometric proofs.',
    },
    {
      icon: <FaClipboardList />, // Change to a suitable trigonometry icon
      title: 'Trigonometry',
      description: 'Study trigonometric functions, identities, and real-world applications.',
    },
    {
      icon: <FaChartBar />, // Icon for Calculus
      title: 'Calculus (for Class 11-12 Students)',
      description: 'Master differentiation, integration, and their applications in real-life problems.',
    },
  ];



  useEffect(() => {
    if (country) {
      // Check if the country is 'Australia'
      if (country === 'India') {
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
  if (!country || country !== 'India') {
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
          Online Maths Tuition in India | Expert Tutors for Grades 1-12 | YFC
        </title>
        <meta
          name="description"
          content="Looking for expert online maths tuition in India? YFC offers personalized maths tutoring for CBSE, ICSE, and state boards. Get a free trial today!"
        />
        <meta
          name="keywords"
          content="online maths tuition India, CBSE maths tutoring, ICSE maths tutors, state board maths tuition, online maths classes India, primary maths tutoring India, secondary maths tuition"
        />
        <meta
          property="og:title"
          content="Online Maths Tuition in India | Expert Tutors | YFC"
        />
        <meta property="og:url" content="https://yfcampus.com/online-maths-tuition-india/" />
        <meta
          property="og:image"
          content="URL_to_the_image.jpg"
        />
        <meta
          property="og:description"
          content="Looking for expert online maths tuition in India? YFC offers personalized maths tutoring for CBSE, ICSE, and state boards. Get a free trial today!"
        />
        <link
          rel="canonical"
          href="https://yfcampus.com/online-maths-tuition-india/"
          title='online maths tuition india'
          aria-label='online maths tuition india'
        />
        <link
          rel="alternate"
          href="https://yfcampus.com/science-tuition-india/"
          title="Science Tuition India"
          aria-label="Science Tuition India"
        />
        <link
          rel="alternate"
          href="https://yfcampus.com/physics-tutoring-india/"
          title="Physics Tutoring India"
          aria-label="Physics Tutoring India"
        />
        <link
          rel="alternate"
          href="https://yfcampus.com/chemistry-tutoring-india/"
          title="Chemistry Tutoring India"
          aria-label="Chemistry Tutoring India"
        />
        <link
          rel="alternate"
          href="https://yfcampus.com/biology-tutoring-india/"
          title="Biology Tutoring India"
          aria-label="Biology Tutoring India"
        />
      </head>



      {country === 'India' && (
        <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
          <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/maths.webp")' }}>
            <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
            <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
              Online Maths Tuition for Indian Students | CBSE, ICSE, and State Board Focused Tutoring
            </h1>
          </section>



          {/* Intro section */}
          <section className="mb-8 p-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
            <p className="mt-2 text-gray-700">
              At YFC, we provide specialized online maths tutoring for students across India, aligned with the CBSE, ICSE, and State Board curricula. Whether your child is in primary school, preparing for Class 10 Board Exams, or aiming for top scores in Class 12 Maths, our expert tutors are here to guide them every step of the way.
            </p>
          </section>

          <section className="mb-8">
            <ChooseUs chooseUs={chooseUs} />
          </section>

          {/* Maths Topics Covered Section */}
          <section className="mb-[70px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">Maths Topics Covered</h2>
            <p className="mb-9 text-center text-gray-700">
              Our India maths tuition covers essential topics across various grades:
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
                  title: 'Primary School (Grades 1-5)',
                  description:
                    'Build a strong foundation in basic arithmetic, problem-solving, and early geometry.',
                },
                {
                  title: 'Middle School (Grades 6-8)',
                  description:
                    'Strengthen core concepts in algebra, geometry, and trigonometry to prepare for secondary school exams.',
                },
                {
                  title: 'Secondary School (Grades 9-12)',
                  description:
                    'Prepare for Class 10 and 12 Board Exams, with a focus on advanced topics such as calculus, probability, and algebra.',
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
              How Our India Online Maths Tuition Works
            </h2>
            <p className="mb-9 text-center text-gray-700">
              Discover a personalized and effective approach to mastering maths with our online tuition for students in India.
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
                  We assess your child’s current maths level and identify areas for improvement.
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
                  Our tutors create a tailored learning plan to help your child succeed.
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
                  Choose session times that suit your schedule, including evenings and weekends.
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
                  Parents receive regular updates to track their child’s progress.
                </p>
              </div>
            </div>
          </section>





          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-7 text-center text-teal-700">
              Board Exam Preparation
            </h2>
            <div className="flex flex-col lg:flex-row">
              {/* Left Side: Heading and Description */}
              <div className="lg:w-1/2 p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  Focused Preparation for Success
                </h3>
                <p className="text-gray-700 mb-4">
                  We specialize in preparing students for the most important exams in India:
                </p>
                <p className="text-gray-700">
                  <strong>CBSE Maths (Class 10 and 12):</strong> Focused tutoring to help students excel in their board exams.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>ICSE Maths (Class 10):</strong> Tailored lessons for students aiming to achieve top marks in ICSE exams.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>State Board Maths:</strong> Support for students preparing for their state board exams, focusing on curriculum requirements.
                </p>
              </div>

              {/* Right Side: Four Boxes */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4 p-6">
                {/* Box 1 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">CBSE Maths Preparation</h4>
                  <p className="text-gray-700">Master key concepts to excel in Class 10 and 12 board exams.</p>
                </div>
                {/* Box 2 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">ICSE Maths Support</h4>
                  <p className="text-gray-700">Receive tailored lessons aimed at achieving top marks in ICSE exams.</p>
                </div>
                {/* Box 3 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">State Board Coaching</h4>
                  <p className="text-gray-700">Focused tutoring aligned with state board curriculum for comprehensive understanding.</p>
                </div>
                {/* Box 4 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">Mock Exams</h4>
                  <p className="text-gray-700">Regular mock exams to assess readiness and build confidence for the board exams.</p>
                </div>
              </div>
            </div>
          </section>





          {/* Testimonial Section */}
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
                  text="YFC’s tutoring helped my son score 95% in his CBSE Class 12 maths exam. The personalized attention and practice sessions were invaluable."
                  author="Meena, Parent"
                  image="/Images/meena.jpg" // Replace with the actual image URL or path
                />
              </div>

              {/* Testimonial 2 */}
              <div
                style={{ scrollSnapAlign: 'start' }}
                className="flex-shrink-0 w-full sm:w-96 lg:w-[32%]"
              >
                <TestimonialCard
                  text="I was struggling with Class 10 maths, but YFC’s tutors helped me understand the concepts better, and I improved my grades!"
                  author="Raj, Student"
                  image="/Images/raj.jpg" // Replace with the actual image URL or path
                />
              </div>
            </div>
          </section>


          <section className="bg-teal-400 text-white p-6 text-center md:p-8 rounded-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Get Top Marks in Maths with YFC!
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







        </div>)}
    </>
  );
};

export default InMathematics;
