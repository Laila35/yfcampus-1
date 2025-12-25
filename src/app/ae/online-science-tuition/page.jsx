"use client"
import React, { useEffect } from 'react';
import TestimonialCard from '@/components/TestimonialCard';
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { useCountry } from '@/app/context/CountryContext';
import ChooseUsScience from '@/components/landingPage/ChooseUsScience';
import CallToAction from '@/components/CallToAction';
// Images for each topic






const AeScience = () => {

    const { country } = useCountry()
    const router = useRouter(); // Get the router instance

    const topics = [
        {
            image: '/Images/physics.webp', // Use the path to your physics image
            title: 'Physics',
            description: 'Topics include forces, motion, electricity, and magnetism for IGCSE, CBSE, and UAE Ministry exams.',
        },
        {
            image: '/Images/chemistry.webp', // Use the path to your chemistry image
            title: 'Chemistry',
            description: 'Atomic structure, bonding, organic chemistry, and advanced topics for senior students preparing for exams.',
        },
        {
            image: '/Images/biology.webp', // Use the path to your biology image
            title: 'Biology',
            description: 'Cell biology, genetics, evolution, and human physiology for IGCSE, CBSE, and UAE Ministry students.',
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
            title: 'Primary School (Grades 1-6)',
            description: 'Introduction to science basics, including plants, animals, and the human body, aligned with the UAE Ministry curriculum.',
        },
        {
            title: 'Middle School (Grades 7-11)',
            description: 'Intermediate topics in physics, chemistry, and biology, preparing students for IGCSE, CBSE, and UAE Ministry exams.',
        },
        {
            title: 'Senior Secondary (Grades 11-13)',
            description: 'Advanced support for IGCSE, CBSE, and UAE Ministry science exams, focusing on core subjects and exam strategies.',
        },
    ];


    useEffect(() => {
        if (country) {
            // Check if the country is 'Australia'
            if (country === 'United Arab Emirates') {
                // Do nothing, render the current component
                return;
            } else {
                // Redirect to the corresponding URL based on country
                switch (country) {
                    case 'Canada':
                        router.push('/ca/online-science-tuition');
                        break;
                    case 'Hong Kong':
                        router.push('/hk/online-science-tuition');
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
                    case 'India':
                        router.push('/in/online-science-tuition');
                        break;
                    case 'Australia':
                        router.push('/au/online-science-tuition');
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

    if (!country || country !== 'United Arab Emirates') {
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
                    Online Science Tuition in UAE | Expert Tutors for IGCSE, CBSE, and UAE Ministry | YFC
                </title>
                <meta
                    name="description"
                    content="Looking for expert online science tuition in UAE? YFC offers personalized tutoring in Physics, Chemistry, and Biology for IGCSE, CBSE, and UAE Ministry exams. Free trial available!"
                />
                <meta
                    name="keywords"
                    content="online science tuition UAE, physics tutoring UAE, chemistry tutoring UAE, biology tutors UAE"
                />
                <meta
                    property="og:title"
                    content="Online Science Tuition in UAE | Expert Tutors for IGCSE, CBSE, and UAE Ministry | YFC"
                />
                <meta property="og:url" content="https://yfcampus.com/online-science-tuition-uae/" />
                <meta
                    property="og:image"
                    content="URL_to_the_image.jpg"
                />
                <meta
                    property="og:description"
                    content="Looking for personalized science tutoring in UAE? YFC offers specialized support for IGCSE, CBSE, and UAE Ministry exam preparation. Get a free trial today!"
                />
                <link
                aria-label="Courses of yfcampus"

                    rel="canonical"
                    href="https://yfcampus.com/online-science-tuition-uae/"
                />
                <link
                                aria-label="Courses of yfcampus"

                    rel="alternate"
                    href="https://yfcampus.com/maths-tuition/"
                    title="Maths Tuition"
                />
                <link
                                aria-label="Courses of yfcampus"

                    rel="alternate"
                    href="https://yfcampus.com/physics-tutoring/"
                    title="Physics Tutoring"
                />
                <link
                                aria-label="Courses of yfcampus"

                    rel="alternate"
                    href="https://yfcampus.com/chemistry-tutoring/"
                    title="Chemistry Tutoring"
                />
                <link
                                aria-label="Courses of yfcampus"

                    rel="alternate"
                    href="https://yfcampus.com/biology-tutoring/"
                    title="Biology Tutoring"
                />
            </head>

            {country === 'United Arab Emirates' && (
                <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
                    <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/science_banner.webp")' }}>
                        <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
                        <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
                            Online Science Tuition for UAE Students | IGCSE, CBSE, and UAE Ministry Exam Preparation
                        </h1>
                    </section>

                    {/* Intro section */}
                    <section className="mb-8 p-4">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
                        <p className="mt-2 text-gray-700">
                            At YFC, we provide specialized online science tutoring for students across the UAE, covering the IGCSE, CBSE, and UAE Ministry curricula. Whether your child is preparing for their school exams or needs support in physics, chemistry, or biology, our experienced tutors offer personalized tutoring for students in the UAE.
                        </p>
                    </section>


                    <section className="mb-8">
                        <ChooseUsScience />
                    </section>

                    {/* Science Topics Covered Section */}
                    <section className="mb-[70px]">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">Science Subjects Covered</h2>
                        <p className="mb-9 text-center text-gray-700">
                            Our UAE science tuition covers all essential topics across various grade levels, including:
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
                            How Our UAE Online Science Tuition Works
                        </h2>
                        <p className="mb-9 text-center text-gray-700">
                            Discover a personalized and effective approach to mastering science with our online tuition for students in the UAE.
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
                                    We assess each student’s current level and identify areas for improvement.
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
                                    A custom plan is developed based on the student’s specific needs.
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
                                    Sessions can be scheduled at convenient times for the student and family.
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
                                    Parents receive regular updates on their child’s progress and areas for improvement.
                                </p>
                            </div>
                        </div>
                    </section>



                    <section className="mb-8">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-7 text-center text-teal-700">
                            IGCSE, CBSE, and UAE Ministry Exam Preparation
                        </h2>
                        <div className="flex flex-col lg:flex-row">
                            {/* Left Side: Heading and Description */}
                            <div className="lg:w-1/2 p-6">
                                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                                    Focused Preparation for Success
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    We provide focused preparation for key science exams:
                                </p>
                                <p className="text-gray-700">
                                    IGCSE Science: Comprehensive support for students preparing for IGCSE exams in physics, chemistry, and biology.
                                </p>
                                <p className="text-gray-700 mt-2">
                                    CBSE Science (Class 10 and 12): Focused preparation for students taking CBSE board exams in science.
                                </p>
                                <p className="text-gray-700 mt-2">
                                    UAE Ministry Exams: Support for students following the UAE Ministry curriculum, with preparation for science exams.
                                </p>
                            </div>

                            {/* Right Side: Four Boxes */}
                            <div className="lg:w-1/2 grid grid-cols-2 gap-4 p-6">
                                {/* Box 1 */}
                                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                                    <h4 className="text-lg font-semibold text-teal-700 mb-2">IGCSE Science</h4>
                                    <p className="text-gray-700">
                                        Comprehensive support for students preparing for IGCSE exams in physics, chemistry, and biology.
                                    </p>
                                </div>
                                {/* Box 2 */}
                                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                                    <h4 className="text-lg font-semibold text-teal-700 mb-2">CBSE Science</h4>
                                    <p className="text-gray-700">
                                        Focused preparation for students taking CBSE board exams in science.
                                    </p>
                                </div>
                                {/* Box 3 */}
                                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                                    <h4 className="text-lg font-semibold text-teal-700 mb-2">UAE Ministry Exams</h4>
                                    <p className="text-gray-700">
                                        Support for students following the UAE Ministry curriculum, with preparation for science exams.
                                    </p>
                                </div>
                                {/* Box 4 */}
                                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                                    <h4 className="text-lg font-semibold text-teal-700 mb-2">Tailored Strategies</h4>
                                    <p className="text-gray-700">
                                        Personalized strategies to enhance exam performance and confidence.
                                    </p>
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
                                    text="Thanks to YFC, my daughter improved her scores in her IGCSE biology exams. The tutor was great at explaining difficult concepts."
                                    author="Fatima, Parent"
                                    image="/Images/emma.webp" // Keeping the existing image
                                />
                            </div>

                            {/* Testimonial 2 */}
                            <div
                                style={{ scrollSnapAlign: 'start' }}
                                className="flex-shrink-0 w-full sm:w-96 lg:w-[32%]"
                            >
                                <TestimonialCard
                                    text="I was able to achieve high marks in my CBSE physics exam thanks to the personalized lessons from YFC’s tutor."
                                    author="Ahmed, Student"
                                    image="/Images/jame.webp" // Keeping the existing image
                                />
                            </div>
                        </div>
                    </section>




                    <CallToAction
                        heading="Achieve Science Success with YFC!"
                        description="Contact us today to book a free trial session and help your child excel in science."
                        buttonText="Sign Up for a Free Trial"
                        buttonLink="/get-register"
                    />


                </div>
            )}


        </>
    );
};

export default AeScience;
