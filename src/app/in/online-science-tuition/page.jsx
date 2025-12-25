"use client"
import ChooseUs from '@/components/landingPage/ChooseUs';
import React, { useEffect } from 'react';
import TestimonialCard from '@/components/TestimonialCard';
import TopicCovered from '@/components/TopicsCovered';
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { useCountry } from '@/app/context/CountryContext';
import ChooseUsScience from '@/components/landingPage/ChooseUsScience';
import CallToAction from '@/components/CallToAction';

const InScience = () => {

  const { country } = useCountry()
  const router = useRouter(); // Get the router instance

  const topics = [
    {
      image: '/Images/physics.webp', // Use the path to your physics image
      title: 'Physics',
      description: 'Mechanics, thermodynamics, electromagnetism, waves, and modern physics.',
    },
    {
      image: '/Images/chemistry.webp', // Use the path to your chemistry image
      title: 'Chemistry',
      description: 'Atomic structure, chemical bonding, reactions, organic chemistry, and stoichiometry.',
    },
    {
      image: '/Images/biology.webp', // Use the path to your biology image
      title: 'Biology',
      description: 'Cell biology, genetics, human anatomy, ecology, and evolution.',
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
      title: 'Primary School (Grades 1-5)',
      description: 'Introduction to basic scientific concepts, including the scientific method, plants, animals, and the environment.',
    },
    {
      title: 'Middle School (Grades 6-8)',
      description: 'Intermediate topics in physics, chemistry, and biology, preparing students for high school science courses.',
    },
    {
      title: 'Secondary School (Grades 9-12)',
      description: 'Advanced topics and exam preparation for Class 10 and Class 12 Board Exams, ensuring students are ready for university-level science.',
    },
  ];



  useEffect(() => {
    if (country) {
      // Check if the country is 'Australia'
      if (country === 'India') {
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
          case 'United Kingdom':
            router.push('/uk/online-science-tuition');
            break;
          case 'New Zealand':
            router.push('/nz/online-science-tuition');
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
          Online Science Tuition in India | Expert Tutors for CBSE, ICSE, and State Boards | YFC
        </title>
        <meta
          name="description"
          content="Looking for expert online science tuition in India? YFC offers personalized tutoring in Physics, Chemistry, and Biology for CBSE, ICSE, and state board students. Get a free trial today!"
        />
        <meta
          name="keywords"
          content="online science tuition India, CBSE science tutoring, ICSE science tutoring, state board science tutors, physics tutoring India, chemistry tutoring India, biology tutoring India"
        />
        <meta
          property="og:title"
          content="Online Science Tuition in India | Expert Tutors | YFC"
        />
        <meta
          property="og:url"
          content="https://yfcampus.com/online-science-tuition-india/"
        />
        <meta
          property="og:image"
          content="URL_to_the_image.jpg"
        />
        <meta
          property="og:description"
          content="Looking for personalized science tutoring in India? YFC offers specialized support for CBSE, ICSE, and state board exam preparation. Get a free trial today!"
        />
        <link
          rel="canonical"
          href="https://yfcampus.com/online-science-tuition-india/"
          aria-label='online science tuition india'
          title='online science tuition india'
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


      {country === 'India' && (

        <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
          <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/science_banner.webp")' }}>
            <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
            <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
              Online Science Tuition for Indian Students | CBSE, ICSE, and State Board Focused Tutoring
            </h1>
          </section>

          {/* Intro section */}
          <section className="mb-8 p-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
            <p className="mt-2 text-gray-700">
              At YFC, we provide specialized online science tutoring for students across India, aligned with the CBSE, ICSE, and State Board curricula. Whether your child is in primary school, preparing for Class 10 Board Exams, or aiming for top scores in Class 12 Science, our expert tutors are here to guide them every step of the way. With flexible online sessions, Indian students can excel in science from the comfort of their homes.
            </p>
          </section>


          <section className="mb-8">
            <ChooseUsScience />
          </section>

          {/* Science Topics Covered Section */}
          <section className="mb-[70px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">Science Subjects Covered</h2>
            <p className="mb-9 text-center text-gray-700">
              Our India science tuition covers all essential topics across various grade levels, including:
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
            <h2 className="text-2xl mb-9 lg:text-3xl font-bold  text-center text-teal-700">
              How Our India Online Science Tuition Works
            </h2>
            <p className="mb-9 text-center text-gray-700">
              Discover a personalized and effective approach to mastering science with our online tuition for students in Australia.
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
                  We assess your child’s current science level to identify areas for improvement.
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
                  Our tutors create a tailored learning plan to help your child excel in science.
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
                  Choose session times that fit your schedule, including evenings and weekends.
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
                  Parents receive detailed progress reports to track their child’s development.
                </p>
              </div>
            </div>
          </section>




          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-7 text-center text-teal-700">
              CBSE & ICSE Exam Preparation
            </h2>
            <div className="flex flex-col lg:flex-row">
              {/* Left Side: Heading and Description */}
              <div className="lg:w-1/2 p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  Focused Preparation for Success
                </h3>
                <p className="text-gray-700 mb-4">
                  We specialize in preparing Indian students for key science exams:
                </p>
                <p className="text-gray-700">
                  CBSE Science (Class 10 and 12): Focused tutoring to help students excel in their CBSE Board exams.
                </p>
                <p className="text-gray-700 mt-2">
                  ICSE Science (Class 10 and 12): Tailored lessons for students aiming to achieve top marks in ICSE exams.
                </p>
                <p className="text-gray-700 mt-2">
                  State Board Science: Support for students preparing for their state board exams, with specific focus on curriculum requirements.
                </p>
              </div>

              {/* Right Side: Four Boxes */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4 p-6">
                {/* Box 1 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">CBSE Science (Class 10)</h4>
                  <p className="text-gray-700">Focused tutoring to help students excel in their CBSE Board exams.</p>
                </div>
                {/* Box 2 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">CBSE Science (Class 12)</h4>
                  <p className="text-gray-700">Focused tutoring to help students excel in their CBSE Board exams.</p>
                </div>
                {/* Box 3 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">ICSE Science (Class 10)</h4>
                  <p className="text-gray-700">Tailored lessons for students aiming to achieve top marks in ICSE exams.</p>
                </div>
                {/* Box 4 */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">ICSE Science (Class 12)</h4>
                  <p className="text-gray-700">Tailored lessons for students aiming to achieve top marks in ICSE exams.</p>
                </div>
                {/* Additional Box for State Board Science */}
                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out col-span-2">
                  <h4 className="text-lg font-semibold text-teal-700 mb-2">State Board Science</h4>
                  <p className="text-gray-700">Support for students preparing for their state board exams, with specific focus on curriculum requirements.</p>
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
                  text="YFC’s science tutoring helped my son score 95% in his CBSE Class 12 physics exam. The personalized attention and practice sessions were invaluable."
                  author="Meena, Parent"
                  image="/Images/jame.webp" // Replace with the actual image URL or path for the parent
                />
              </div>

              {/* Testimonial 2 */}
              <div
                style={{ scrollSnapAlign: 'start' }}
                className="flex-shrink-0 w-full sm:w-96 lg:w-[32%]"
              >
                <TestimonialCard
                  text="I was struggling with ICSE biology, but YFC’s tutors helped me understand the concepts better, and I improved my grades!"
                  author="Raj, Student"
                  image="/Images/emma.webp" // Replace with the actual image URL or path for the student
                />
              </div>
            </div>
          </section>


          <CallToAction
            heading="Excel in Science with YFC!"
            description="Contact us today to book a free trial session and give your child the support they need to excel in science."
            buttonText="Sign Up for a Free Trial"
            buttonLink="/get-register"
          />



        </div>)}


    </>
  );
};

export default InScience;
