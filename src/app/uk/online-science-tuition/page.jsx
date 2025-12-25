"use client"
import React, { useEffect } from 'react';
import TestimonialCard from '@/components/TestimonialCard';
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { useCountry } from '@/app/context/CountryContext';
import ChooseUsScience from '@/components/landingPage/ChooseUsScience';
import CallToAction from '@/components/CallToAction';


const GradeLevelCard = ({ title, description }) => {
  return (
    <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
      <h3 className="text-xl font-semibold text-teal-700 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const UkScience = () => {

  const { country } = useCountry()
  const router = useRouter();

  const topics = [
    {
      image: '/Images/physics.webp', // Use the path to your physics image
      title: 'Physics',
      description: 'GCSE and A-Level topics including forces, energy, waves, and electromagnetism.',
    },
    {
      image: '/Images/chemistry.webp', // Use the path to your chemistry image
      title: 'Chemistry',
      description: 'GCSE and A-Level topics like atomic structure, bonding, and organic chemistry.',
    },
    {
      image: '/Images/biology.webp', // Use the path to your biology image
      title: 'Biology',
      description: 'GCSE and A-Level topics covering genetics, evolution, and physiology.',
    },
  ];


  const TopicCovered = ({ image, title, description }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="h-32 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-teal-600 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );

  const gradeLevels = [
    {
      title: 'Primary School (Years 1-6)',
      description:
        'Build a solid foundation in the basics of science, aligned with the UK National Curriculum.',
    },
    {
      title: 'Secondary School (Years 7-11)',
      description:
        'Strengthen knowledge in key areas of physics, chemistry, and biology, preparing students for GCSE exams.',
    },
    {
      title: 'A-Level (Years 12-13)',
      description:
        'Focused tuition on advanced topics in physics, chemistry, and biology to prepare for A-Level exams.',
    },
  ];

  useEffect(() => {
    if (country) {
      
      if (country === 'United Kingdom') {
        // Do nothing, render the current component
        return;
      } else {
        // Redirect to the corresponding URL based on country
        switch (country) {
          case 'Canada':
            router.push('/ca/online-science-tuition');
            break;
          case 'Australia':
            router.push('/au/online-science-tuition');
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
          case 'New Zealand':
            router.push('/nz/online-science-tuition');
            break;
          case 'India':
            router.push('/in/online-science-tuition');
            break;
          case 'Hong Kong':
            router.push('/hk/online-science-tuition');
            break;
          case 'United Arab Emirates':
            router.push('/ae/online-science-tuition');
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
          Online Science Tuition in the UK | GCSE and A-Level Science Tutors | YFC
        </title>
        <meta
          name="description"
          content="Looking for expert online science tuition in the UK? YFC offers personalized tutoring in Physics, Chemistry, and Biology for GCSE and A-Level students. Free trial available!"
        />
        <meta
          name="keywords"
          content="online science tuition UK, GCSE science tuition, A-Level science tutoring, UK science tutors, GCSE physics tuition, A-Level biology preparation, chemistry tutors UK, GCSE biology revision"
        />
        <meta
          property="og:title"
          content="Online Science Tuition in the UK | GCSE and A-Level Science Tutors | YFC"
        />
        <meta property="og:url" content="https://yfcampus.com/online-science-tuition/" />
        <meta
          property="og:image"
          content="URL_to_the_image.jpg"
        />
        <meta
          property="og:description"
          content="Looking for expert online science tuition in the UK? YFC offers personalized tutoring in Physics, Chemistry, and Biology for GCSE and A-Level students. Free trial available!"
        />
        <link
          rel="canonical"
          href="https://yfcampus.com/online-science-tuition/"
          title="science Tuition"
          aria-label="Maths Tuition"
        />
        <link
          rel="alternate"
          href="https://yfcampus.com/maths-tuition/"
          title="Maths Tuition"
          aria-label="Maths Tuition"
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
          <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/science_banner.webp")' }}>
            <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
            <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
              Online Science Tuition for UK Students | GCSE and A-Level Focused Tutoring
            </h1>
          </section>



          {/* Intro section */}
          <section className="mb-8 p-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
            <p className="mt-2 text-gray-700">
              At YFC, we provide specialized online science tuition tailored to the UK curriculum, supporting students in Physics, Chemistry, and Biology. Whether preparing for GCSE or A-Level exams, our expert tutors offer personalized guidance and support for students in the UK.

            </p>
          </section>

          <section className="mb-8">
            <ChooseUsScience />
          </section>

          {/* Maths Topics Covered Section */}
          <section className="mb-[70px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">Science Subjects Covered</h2>
            <p className="mb-9 text-center text-gray-700">
              Our UK science tuition covers all key areas of the National Curriculum, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
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
              From primary school to A-Levels, our tailored science tuition supports students at every stage.
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




          <section className="mb-[70px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">
              How Our UK Online Science Tuition Works
            </h2>
            <p className="mb-9 text-center text-gray-700">
              Discover a personalized and effective approach to mastering science with our UK online tuition for students.
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
                  We assess the student’s current science knowledge and areas for improvement.
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
                  A custom plan is developed to meet the specific needs of the student.
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
                  We offer sessions at convenient times to fit around your family’s schedule.
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
                  Parents receive regular reports to keep track of their child’s progress.
                </p>
              </div>
            </div>
          </section>


          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-7 text-center text-teal-700">
              GCSE & A-Level Science Exam Preparation
            </h2>
            <div className="flex flex-col lg:flex-row">
              {/* Left Side: Heading and Description */}
              <div className="lg:w-1/2 p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  Focused Preparation for Success
                </h3>
                <p className="text-gray-700 mb-4">
                  We provide focused preparation for UK science exams. Our tutors cover:
                </p>
                <p className="text-gray-700">
                  GCSE Science (Edexcel, AQA, OCR): Ensure students master key topics and are well-prepared for exams.
                </p>
                <p className="text-gray-700 mt-2">
                  A-Level Science (Edexcel, AQA, OCR): Comprehensive support in preparing for A-Level physics, chemistry, and biology exams.
                </p>
              </div>

              {/* Right Side: Four Boxes */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4 p-6">
                {/* Box 1 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">GCSE Science</h4>
                  <p className="text-gray-700">Ensure mastery of key topics and readiness for exams.</p>
                </div>
                {/* Box 2 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">A-Level Science</h4>
                  <p className="text-gray-700">Comprehensive support in physics, chemistry, and biology preparation.</p>
                </div>
                {/* Box 3 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">Exam Technique</h4>
                  <p className="text-gray-700">Strategies and tips to excel in science exams.</p>
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
                  text="Thanks to YFC’s tutoring, my son’s understanding of A-Level biology improved dramatically, and he scored an A* in his final exam!"
                  author="Linda, Parent"
                  image="/Images/emma.webp" // Replace with the actual image URL or path
                />
              </div>

              {/* Testimonial 2 */}
              <div
                style={{ scrollSnapAlign: 'start' }}
                className="flex-shrink-0 w-full sm:w-96 lg:w-[32%]"
              >
                <TestimonialCard
                  text="The personalized approach to GCSE physics really helped me get the grades I needed. The tutor explained difficult concepts so clearly!"
                  author="Emily, Student"
                  image="/Images/jame.webp" // Replace with the actual image URL or path
                />
              </div>
            </div>
          </section>

          <CallToAction
            heading="Achieve Science Success with YFC!"
            description="Contact us today to book a free trial session and give your child the support they need to excel in their science studies."
            buttonText="Sign Up for a Free Trial"
            buttonLink="/contact"
          />




        </div>)}


    </>
  );
};

export default UkScience;
