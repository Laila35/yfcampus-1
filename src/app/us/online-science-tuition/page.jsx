"use client"
import ChooseUs from '@/components/landingPage/ChooseUs';
import React, { useEffect } from 'react';
import TestimonialCard from '@/components/TestimonialCard';
import TopicCovered from '@/components/TopicsCovered';
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { useCountry } from '@/app/context/CountryContext';
import ChooseUsScience from '@/components/landingPage/ChooseUsScience';
import CallToAction from '@/components/CallToAction';


const UsScience = () => {

  const { country } = useCountry()
  const router = useRouter(); // Get the router instance

  const topics = [
    {
      image: '/Images/physics.webp', // Use the path to your physics image
      title: 'Physics',
      description: 'SAT Physics, AP Physics, and high school-level physics.',
    },
    {
      image: '/Images/chemistry.webp', // Use the path to your chemistry image
      title: 'Chemistry',
      description: 'SAT Chemistry, AP Chemistry, and general high school chemistry.',
    },
    {
      image: '/Images/biology.webp', // Use the path to your biology image
      title: 'Biology',
      description: 'SAT Biology, AP Biology, and high school biology.',
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
      title: 'Elementary School (Grades 1-5)',
      description:
        'Build foundational skills in science, including understanding ecosystems, the human body, and simple experiments.',
    },
    {
      title: 'Middle School (Grades 6-8)',
      description:
        'Prepare for middle school science tests and projects, focusing on core topics like electricity, matter, and life sciences.',
    },
    {
      title: 'High School (Grades 9-12)',
      description:
        'Support in advanced topics and test preparation for AP and SAT science exams, including physics, chemistry, and biology.',
    },
  ];

  useEffect(() => {
    if (country) {

      if (country === 'United States') {
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
          case 'United Kingdom':
            router.push('/uk/online-science-tuition');
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
          Online Science Tuition in the USA | Expert Tutors for Grades 1-12 | YFC
        </title>
        <meta
          name="description"
          content="Looking for expert online science tuition in the USA? YFC offers personalized tutoring in Physics, Chemistry, and Biology for all grade levels, including AP exam prep. Free trial available!"
        />
        <meta
          name="keywords"
          content="online science tuition USA, grade level science tuition, AP exam prep, USA science tutors, physics tuition USA, chemistry tutoring USA, biology tutoring USA"
        />
        <meta
          property="og:title"
          content="Online Science Tuition in the USA | Expert Tutors for Grades 1-12 | YFC"
        />
        <meta property="og:url" content="https://yfcampus.com/online-science-tuition/" />
        <meta
          property="og:image"
          content="URL_to_the_image.jpg"
        />
        <meta
          property="og:description"
          content="Looking for expert online science tuition in the USA? YFC offers personalized tutoring in Physics, Chemistry, and Biology for all grade levels, including AP exam prep. Free trial available!"
        />
        <link
          rel="canonical"
          href="https://yfcampus.com/online-science-tuition/"
          title="science Tuition"
          aria-label="science Tuition"
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


      {country === 'United States' && (
        <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
          <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/science_banner.webp")' }}>
            <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
            <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
              Online Science Tuition for USA Students | Expert Tutors for All Grade Levels
            </h1>
          </section>

          {/* Intro section */}
          <section className="mb-8 p-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
            <p className="mt-2 text-gray-700">
              At YFC, we offer specialized online science tuition tailored to the needs of students in the USA. Our experienced tutors provide support in Physics, Chemistry, and Biology, with a focus on personalized learning and exam preparation for SATs, AP exams, and more.
            </p>
          </section>


          <section className="mb-8">
            <ChooseUsScience />
          </section>

          {/* Maths Topics Covered Section */}
          <section className="mb-[70px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">Science Subjects Covered</h2>
            <p className="mb-9 text-center text-gray-700">
              Our US science tuition covers all key areas of the National Curriculum, including:
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
              How Our USA Online Science Tuition Works
            </h2>
            <p className="mb-9 text-center text-gray-700">
              Discover a personalized and effective approach to mastering science with our USA online tuition for students.
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
                  We begin with an assessment to determine the student’s current level and areas for improvement.
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
                  A custom learning plan is created to meet the student’s needs.
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
                  Sessions can be scheduled at times that work best for the student and family.
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
                  Parents receive regular updates to track progress and highlight areas that need more focus.
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
                  text="I improved my SAT Chemistry score by 150 points after just a few weeks of tutoring with YFC. The sessions were tailored to my needs and really helped"
                  author="Lisa, Student"
                  image="/Images/emma.webp" // Replace with the actual image URL or path
                />
              </div>

              {/* Testimonial 2 */}
              <div
                style={{ scrollSnapAlign: 'start' }}
                className="flex-shrink-0 w-full sm:w-96 lg:w-[32%]"
              >
                <TestimonialCard
                  text="Thanks to YFC, my daughter scored a 5 on her AP Biology exam! The tutor made complex topics so easy to understand."

                  author="Jake, Parent"
                  image="/Images/jame.webp" // Replace with the actual image URL or path
                />
              </div>
            </div>
          </section>

          <CallToAction
            heading="Achieve Science Success with YFC!"
            description="Contact us today to book a free trial session and give your child the support they need to excel in science."
            buttonText="Sign Up for a Free Trial"
            buttonLink="/get-register"
          />





        </div>)}


    </>
  );
};

export default UsScience;
