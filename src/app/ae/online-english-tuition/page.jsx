"use client"
import ChooseUsEnglish from '@/components/landingPage/ChooseUsEnglish'
import React from 'react'
import TestimonialCard from '@/components/TestimonialCard'
import CallToAction from '@/components/CallToAction'
import { useCountry } from '@/app/context/CountryContext';
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { useEffect } from 'react';
const AeEnglish = () => {
    const { country } = useCountry()
    const router = useRouter();
    const topics = [
        {
            image: '/Images/reading.webp',
            title: 'Reading Comprehension',
            description: 'Build strong reading skills and understanding of texts for IGCSE, CBSE, and UAE Ministry exams.',
        },
        {
            image: '/Images/writing.webp',
            title: 'Writing Skills',
            description: 'Improve creative writing, essays, and structured writing tasks for board exams.',
        },
        {
            image: '/Images/grammer.webp',
            title: 'Grammar & Punctuation',
            description: 'Strengthen grammar and punctuation for clearer, more accurate writing.',
        },
        {
            image: '/Images/literature.webp',
            title: 'English Literature',
            description: 'Study key literary texts from the IGCSE, CBSE, and UAE Ministry syllabi, focusing on themes and analysis.',
        },
    ];



    const TopicCovered = ({ image, title, description }) => (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={image} alt={title} className="h-40 w-full object-cover" />
            <div className="py-4 px-2 text-center"> {/* Center text in this container */}
                <h3 className="text-xl font-bold text-teal-600 mb-2 whitespace-nowrap overflow-hidden">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );

    const gradeLevels = [
        {
            title: 'Primary School (Grades 1-6)',
            description: 'Focus on building strong foundations in reading, writing, and grammar.',
        },
        {
            title: 'Secondary School (Grades 7-11)',
            description: 'Preparation for IGCSE, CBSE, and UAE Ministry exams, with a focus on reading comprehension, writing, and literature.',
        },
        {
            title: 'Senior Secondary (Grades 12-13)',
            description: 'Advanced support for students preparing for IGCSE, CBSE, and UAE Ministry English exams.',
        },
    ];

    useEffect(() => {
        if (country) {
            // Check if the country is 'United Arab Emirates'
            if (country === 'United Arab Emirates') {
                // Render content for the United Arab Emirates
                return; // Do nothing, render the current component
            } else {
                // If the country is one of the specified countries, redirect to the corresponding URL
                switch (country) {
                    case 'Canada':
                        router.push('/ca/online-english-tuition');
                        break;
                    case 'Hong Kong':
                        router.push('/hk/online-english-tuition');
                        break;
                    case 'Singapore':
                        router.push('/sg/online-english-tuition');
                        break;
                    case 'Malaysia':
                        router.push('/my/online-english-tuition');
                        break;
                    case 'Philippines':
                        router.push('/ph/online-english-tuition');
                        break;
                    case 'United States':
                        router.push('/us/online-english-tuition');
                        break;
                    case 'United Kingdom':
                        router.push('/uk/online-english-tuition');
                        break;
                    case 'New Zealand':
                        router.push('/nz/online-english-tuition');
                        break;
                    case 'India':
                        router.push('/in/online-english-tuition');
                        break;
                    case 'Australia':
                        router.push('/au/online-english-tuition');
                        break;
                    case 'South Africa':
                        router.push('/za/online-english-tuition');
                        break;
                    default:
                        router.push('/online-english-tuition'); // Default fallback for English
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
                    Online English Tuition in UAE | Expert Tutors for IGCSE, CBSE, and UAE Ministry | YFC
                </title>
                <meta
                    name="description"
                    content="Looking for expert online English tuition in UAE? YFC offers personalized tutoring in reading, writing, grammar, and literature for IGCSE, CBSE, and UAE Ministry exams. Free trial available!"
                />
                <meta
                    name="keywords"
                    content="online English tuition UAE, IGCSE English tutors UAE, CBSE English tutoring UAE, UAE Ministry English tutoring, online reading tutoring UAE, IGCSE English exam prep, UAE English tutors, online writing tutoring UAE"
                />
                <meta
                    property="og:title"
                    content="Online English Tuition in UAE | Expert Tutors for IGCSE, CBSE, and UAE Ministry | YFC"
                />
                <meta property="og:url" content="https://yfcampus.com/uae/online-english-tuition/" />
                <meta
                    property="og:image"
                    content="URL_to_the_image.jpg"
                />
                <meta
                    property="og:description"
                    content="Looking for expert online English tuition in UAE? YFC offers personalized tutoring in reading, writing, grammar, and literature for IGCSE, CBSE, and UAE Ministry exams. Free trial available!"
                />
                <link
                aria-label="Courses of yfcampus"
                    rel="canonical"
                    href="https://yfcampus.com/uae/online-english-tuition/"
                />
                <link
                    rel="alternate"
                    aria-label="Courses of yfcampus"

                    href="https://yfcampus.com/uae/online-maths-tuition/"
                    title="Maths Tuition"
                />
                <link
                    rel="alternate"
                    aria-label="Courses of yfcampus"

                    href="https://yfcampus.com/uae/online-science-tuition/"
                    title="Science Tuition"
                />
                <link
                    rel="alternate"
                    aria-label="Courses of yfcampus"

                    href="https://yfcampus.com/uae/online-english-tuition/"
                    title="English Tuition"
                />
            </head>

            {country === 'United Arab Emirates' && (
                <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
                    <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/english.webp")' }}>
                        <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
                        <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
                            Online English Tuition for UAE Students | IGCSE, CBSE, and UAE Ministry Focused Tutoring
                        </h1>
                    </section>

                    {/* Intro section */}
                    <section className="mb-8 p-4">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
                        <p className="mt-2 text-gray-700">
                            At YFC, we provide specialized online English tuition for students across the UAE, tailored to the IGCSE, CBSE, and UAE Ministry curricula. Our experienced tutors offer personalized support in reading, writing, grammar, and literature, helping students excel in their English studies and prepare for key exams.
                        </p>
                    </section>

                    {/* choose us */}
                    <section className="mb-8">
                        <ChooseUsEnglish />
                    </section>

                    {/* topics cover */}
                    <section className="mb-[70px]">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">English Subjects Covered </h2>
                        <p className="mb-9 text-center text-gray-700">
                            Our English tuition in UAE covers all essential skills across various year levels, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-2">
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
                            From primary school to high school, our tailored English tuition supports students at every stage of their learning journey.
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

                    {/* how it works */}
                    <section className="mb-[70px]">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">
                            How Our UAE Online English Tuition Works
                        </h2>
                        <p className="mb-9 text-center text-gray-700">
                            Discover a personalized and effective approach to mastering English with our online tuition for students in the UAE.
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
                                    We assess each student’s current English level and identify areas needing improvement.
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
                                    A custom learning plan is created based on the student's academic needs and goals.
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
                                    Sessions are scheduled at convenient times to accommodate the student’s availability.
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
                                    Parents receive regular updates on their child’s progress in English.
                                </p>
                            </div>
                        </div>
                    </section>



                    {/* Exam Preparation */}
                    <section className="mb-8">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-7 text-center text-teal-700">
                            IGCSE, CBSE, and UAE Ministry Exam Preparation
                        </h2>
                        <div className="flex flex-col lg:flex-row">
                            {/* Left Side: Heading and Description */}
                            <div className="lg:w-1/2 p-6">
                                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                                    Focused Support for Success
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    We provide focused preparation for the key English exams in the UAE:
                                </p>
                                <p className="text-gray-700">
                                    IGCSE English: Comprehensive support for students preparing for IGCSE English language and literature exams.
                                </p>
                                <p className="text-gray-700 mt-2">
                                    CBSE English (Class 10 and 12): Tailored tutoring for students preparing for CBSE board exams.
                                </p>
                                <p className="text-gray-700 mt-2">
                                    UAE Ministry Exams: Focused preparation for students following the UAE Ministry curriculum, helping them excel in their English exams.
                                </p>
                            </div>

                            {/* Right Side: Four Boxes */}
                            <div className="lg:w-1/2 grid grid-cols-2 gap-4 p-6">
                                {/* Box 1 */}
                                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                                    <h4 className="text-lg font-semibold text-teal-700 mb-2">IGCSE English</h4>
                                    <p className="text-gray-700">Comprehensive support for IGCSE English language and literature exams.</p>
                                </div>
                                {/* Box 2 */}
                                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                                    <h4 className="text-lg font-semibold text-teal-700 mb-2">CBSE English (Class 10 and 12)</h4>
                                    <p className="text-gray-700">Tailored tutoring for CBSE board exams in English.</p>
                                </div>
                                {/* Box 3 */}
                                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                                    <h4 className="text-lg font-semibold text-teal-700 mb-2">UAE Ministry Exams</h4>
                                    <p className="text-gray-700">Focused preparation for English exams under the UAE Ministry curriculum.</p>
                                </div>
                                {/* Box 4 */}
                                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                                    <h4 className="text-lg font-semibold text-teal-700 mb-2">Mock Exams</h4>
                                    <p className="text-gray-700">Regular mock exams to assess readiness for IGCSE, CBSE, and UAE Ministry English exams.</p>
                                </div>
                            </div>
                        </div>
                    </section>




                    {/* success stories */}
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
                                    text="Thanks to YFC, my son improved his scores in the IGCSE English exam. The tutor was patient and provided excellent guidance."
                                    author="Fatima, Parent"
                                    image="/Images/fatima.jpg"
                                />
                            </div>

                            {/* Testimonial 2 */}
                            <div
                                style={{ scrollSnapAlign: 'start' }}
                                className="flex-shrink-0 w-full sm:w-96 lg:w-[32%]"
                            >
                                <TestimonialCard
                                    text="YFC’s tutoring helped me improve my writing and reading comprehension for my CBSE exams. I scored higher than expected!"
                                    author="Ahmed, Student"
                                    image="/Images/ahmed.jpg"
                                />
                            </div>
                        </div>
                    </section>


                    {/* Call to Action Section */}
                    <CallToAction
                        heading="Boost Your English Skills with YFC!"
                        description="Contact us today to book a free trial session and help your child excel in their English studies."
                        buttonText="Sign Up for a Free Trial"
                        buttonLink="/get-register"
                    />


                </div>
            )}
        </>
    )
}

export default AeEnglish