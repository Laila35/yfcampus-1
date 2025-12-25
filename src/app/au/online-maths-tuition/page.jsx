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




const AuMathematics = () => {
  const { country } = useCountry()
  const router = useRouter();
  const topics = [
    {
      icon: <FaCalculator />, // You might want to change this icon
      title: 'Number and Algebra',
      description: 'Develop core arithmetic and algebra skills, including linear equations, quadratic functions, and more.',
    },
    {
      icon: <FaShapes />, // You might want to keep this or change it
      title: 'Measurement and Geometry',
      description: 'Understand shapes, measurement units, angles, and geometric reasoning.',
    },
    {
      icon: <FaChartBar />, // You might want to keep this or change it
      title: 'Statistics and Probability',
      description: 'Learn how to handle data, interpret graphs, and calculate probabilities.',
    },
    {
      icon: <FaPuzzlePiece />, // Consider a different icon for trigonometry
      title: 'Trigonometry',
      description: 'Explore angles, trigonometric ratios, and applications in real-world problems.',
    },
    {
      icon: <FaClipboardList />, // You might want to keep this or change it
      title: 'Calculus (for Senior Secondary Students)',
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
      if (country === 'Australia') {
        // Render content for Australia
        return; // Do nothing, render the current component
      } else {
        // If the country is one of the specified countries, redirect to the corresponding URL
        switch (country) {
          case 'Canada':
            router.push('/ca/online-math-tuition');
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


  if (!country || country !== 'Australia') {
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
          Online Maths Tuition in Australia | Expert Maths Tutors for Grades 1-12 | YFC
        </title>
        <meta
          name="description"
          content="Looking for expert online maths tuition in Australia? YFC offers personalized maths tutoring for primary, secondary, and senior secondary students. Get a free trial today!"
        />
        <meta
          name="keywords"
          content="online maths tuition Australia, NAPLAN maths tutoring, HSC maths tutoring, VCE maths tutors Australia, primary school maths tutoring, senior secondary maths tutoring, Australian maths curriculum"
        />
        <meta
          property="og:title"
          content="Online Maths Tuition in Australia | Expert Maths Tutors | YFC"
        />
        <meta property="og:url" content="https://yfcampus.com/online-maths-tuition/" />
        <meta
          property="og:image"
          content="URL_to_the_image.jpg"
        />
        <meta
          property="og:description"
          content="Looking for expert online maths tuition in Australia? YFC offers personalized maths tutoring for primary, secondary, and senior secondary students. Get a free trial today!"
        />
        <link
         aria-label="Online Maths Tution"
          rel="canonical"
          href="https://yfcampus.com/online-maths-tuition/"
        />
        <link
          rel="alternate"
           aria-label="Yfcampus Science Tution"
          href="https://yfcampus.com/science-tuition/"
          title="Science Tuition"
        />
        <link
          rel="alternate"
           aria-label="yfcampus Physics tutoring"
          href="https://yfcampus.com/physics-tutoring/"
          title="Physics Tutoring"
        />
        <link
          rel="alternate"
           aria-label="Chemistry Tutoring"
          href="https://yfcampus.com/chemistry-tutoring/"
          title="Chemistry Tutoring"
        />
        <link
          rel="alternate"
          aria-label="Biology Tutoring"

          href="https://yfcampus.com/biology-tutoring/"
          title="Biology Tutoring"
        />
      </head>

      {country === 'Australia' && (
        <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
          <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/maths.webp")' }}>
            <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
            <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
              Online Maths Tuition for Australian Students | Tailored Learning for All Grade Levels          </h1>
          </section>



          {/* Intro section */}
          <section className="mb-8 p-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
            <p className="mt-2 text-gray-700">
              At Your Future Campus (YFC), we offer specialized online maths tutoring for students across Australia, tailored to the Australian Curriculum. Whether your child needs support in primary school, is preparing for NAPLAN, or is aiming for top results in Senior Secondary Maths, our experienced tutors are here to help. With flexible online tutoring sessions, Australian students can excel in maths from the comfort of their home.

            </p>
          </section>

          <section className="mb-8">
            <ChooseUs chooseUs={chooseUs} />
          </section>

          {/* Maths Topics Covered Section */}
          <section className="mb-[70px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">Maths Topics Covered</h2>
            <p className="mb-9 text-center text-gray-700">
              Our Australia maths tuition covers all essential topics across the curriculum:
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
              Our tailored maths tuition supports students at every stage, aligned with the Australian curriculum.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Primary School (Grades 1-6)',
                  description:
                    'Build a solid foundation in basic arithmetic, geometry, and problem-solving aligned with the Australian National Curriculum for primary students.',
                },
                {
                  title: 'Middle School (Grades 7-10)',
                  description:
                    'Strengthen algebra, geometry, and real-world problem-solving skills. Our tutors ensure students are well-prepared for NAPLAN and secondary school maths assessments.',
                },
                {
                  title: 'Senior Secondary (Grades 11-12)',
                  description:
                    'Prepare for key exams such as the HSC and VCE, focusing on General Maths, Mathematical Methods, and Specialist Maths. Our tutors help students tackle these challenging topics with confidence.',
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
              How Our Australian Online Maths Tuition Works
            </h2>
            <p className="mb-9 text-center text-gray-700">
              Discover a personalized and effective approach to mastering maths with our Australian online tuition for students.
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
                  We start with a detailed assessment to determine the student’s current maths level and areas for improvement.
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
                  Based on the assessment, our tutors create a tailored plan to help students excel in their maths studies.
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
                  Choose convenient session times that fit into your schedule, including evenings and weekends.
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
                  Parents receive regular updates on their child's progress, including areas of improvement and achievements.
                </p>
              </div>
            </div>
          </section>



          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-7 text-center text-teal-700">
              NAPLAN, HSC, and VCE Maths Exam Preparation
            </h2>
            <div className="flex flex-col lg:flex-row">
              {/* Left Side: Heading and Description */}
              <div className="lg:w-1/2 p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  Focused Preparation for Success
                </h3>
                <p className="text-gray-700 mb-4">
                  Our maths tutors provide specialized support for students preparing for crucial exams in Australia:
                </p>
                <p className="text-gray-700">
                  <strong>NAPLAN (Years 3, 5, 7, 9):</strong> Our tutoring helps students build confidence and master the skills needed to perform well in the NAPLAN assessments.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>HSC Maths (New South Wales):</strong> Focused support for Mathematics Advanced, Mathematics Extension 1, and Mathematics Extension 2 exams.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>VCE Maths (Victoria):</strong> Tailored preparation for Mathematical Methods, General Mathematics, and Specialist Mathematics.
                </p>
              </div>

              {/* Right Side: Four Boxes */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4 p-6">
                {/* Box 1 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">NAPLAN Preparation</h4>
                  <p className="text-gray-700">Build confidence and master essential skills for the NAPLAN assessments.</p>
                </div>
                {/* Box 2 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">HSC Maths Support</h4>
                  <p className="text-gray-700">Specialized tutoring for Mathematics Advanced, Extension 1, and Extension 2.</p>
                </div>
                {/* Box 3 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">VCE Maths Coaching</h4>
                  <p className="text-gray-700">Tailored sessions for Mathematical Methods, General Maths, and Specialist Maths.</p>
                </div>
                {/* Box 4 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">Mock Exams</h4>
                  <p className="text-gray-700">Regular mock exams to assess readiness and boost exam confidence.</p>
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
                  text="YFC’s maths tutoring helped my daughter prepare for her HSC exams, and she improved her grades significantly! The personalized lessons and flexible scheduling were perfect."
                  author="Megan, Parent"
                  image="/Images/megan.jpg" // Replace with the actual image URL or path
                />
              </div>

              {/* Testimonial 2 */}
              <div
                style={{ scrollSnapAlign: 'start' }}
                className="flex-shrink-0 w-full sm:w-96 lg:w-[32%]"
              >
                <TestimonialCard
                  text="Thanks to YFC, I scored top marks in my VCE Maths Methods exam. The tutor made complex concepts easy to understand, and the practice sessions were incredibly helpful."
                  author="Josh, Student"
                  image="/Images/josh.jpg" // Replace with the actual image URL or path
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
               aria-label='Get a free trial'
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

export default AuMathematics;
