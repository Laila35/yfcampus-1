"use client"
import ChooseUsEnglish from '@/components/landingPage/ChooseUsEnglish'
import React from 'react'
import TestimonialCard from '@/components/TestimonialCard'
import CallToAction from '@/components/CallToAction'
import { useEffect } from 'react'
import { useCountry } from '@/app/context/CountryContext'
import { useRouter } from 'next/navigation'
const InEnglish = () => {
    const { country } = useCountry()
    const router = useRouter();
    const topics = [
        {
            image: '/Images/reading.webp',
            title: 'Reading Comprehension',
            description: 'Improve understanding of texts for CBSE, ICSE, and State Board exams.',
        },
        {
            image: '/Images/writing.webp',
            title: 'Writing Skills',
            description: 'Enhance essay writing, creative writing, and structured assignments for board exams.',
        },
        {
            image: '/Images/grammer.webp',
            title: 'Grammar & Punctuation',
            description: 'Strengthen grammar and punctuation for clearer, more accurate writing.',
        },
        {
            image: '/Images/literature.webp',
            title: 'English Literature',
            description: 'Study key literary texts from the CBSE, ICSE, and State Board syllabi, focusing on themes, characters, and analysis.',
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
            title: 'Primary School (Grades 1-5)',
            description: 'Focus on building strong reading and writing foundations, aligned with the Indian curriculum.',
        },
        {
            title: 'Middle School (Grades 6-8)',
            description: 'Strengthen reading comprehension and writing skills, preparing students for Class 10 board exams.',
        },
        {
            title: 'Secondary School (Grades 9-12)',
            description: 'Advanced support for Class 10 and Class 12 CBSE, ICSE, and State Board exams, focusing on English language and literature.',
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
                        router.push('/ca/online-english-tuition');
                        break;
                    case 'Hong Kong':
                        router.push('/hk/online-english-tuition');
                        break;
                    case 'Singapore':
                        router.push('/sg/online-english-tuition');
                        break;
                    case 'Malaysia': // Corrected spelling
                        router.push('/my/online-english-tuition');
                        break;
                    case 'Philippines': // Corrected spelling
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
                    case 'Australia':
                        router.push('/au/online-english-tuition');
                        break;
                    case 'United Arab Emirates':
                        router.push('/ae/online-english-tuition');
                        break;
                    case 'South Africa':
                        router.push('/za/online-english-tuition');
                        break;
                    default:
                        router.push('/online-english-tuition'); // Default fallback if the country doesn't match any cases
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
                    Online English Tuition in India | CBSE, ICSE, and State Board English Tutors | YFC
                </title>
                <meta
                    name="description"
                    content="Looking for expert online English tuition in India? YFC offers personalized tutoring in reading, writing, grammar, and literature for CBSE, ICSE, and State Board students. Free trial available!"
                />
                <meta
                    name="keywords"
                    content="online English tuition India, CBSE English tutoring, ICSE English tutors, State Board English tutoring India, CBSE English exam prep, ICSE English language tutoring, online writing tutors India, State Board English classes online"
                />
                <meta
                    property="og:title"
                    content="Online English Tuition in India | CBSE, ICSE, and State Board English Tutors | YFC"
                />
                <meta property="og:url" content="https://yfcampus.com/in/online-english-tuition/" />
                <meta
                    property="og:image"
                    content="URL_to_the_image.jpg"
                />
                <meta
                    property="og:description"
                    content="Looking for expert online English tuition in India? YFC offers personalized tutoring in reading, writing, grammar, and literature for CBSE, ICSE, and State Board students. Free trial available!"
                />
                <link
                aria-label='online english tuition'
                    rel="canonical"
                    href="https://yfcampus.com/in/online-english-tuition/"
                />
                <link
                    rel="alternate"
                    href="https://yfcampus.com/in/online-maths-tuition/"
                    title="Maths Tuition"
                    aria-label="Maths Tuition"
                />
                <link
                    rel="alternate"
                    href="https://yfcampus.com/in/online-science-tuition/"
                    title="Science Tuition"
                    aria-label="Science Tuition"
                />
                <link
                    rel="alternate"
                    href="https://yfcampus.com/in/online-english-tuition/"
                    title="English Tuition"
                    aria-label="English Tuition"
                />
            </head>
            {country === 'India' && (
                <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
                    <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/english.webp")' }}>
                        <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
                        <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
                            Online English Tuition for Indian Students | CBSE, ICSE, and State Board Focused Tutoring
                        </h1>
                    </section>

                    {/* Intro section */}
                    <section className="mb-8 p-4">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
                        <p className="mt-2 text-gray-700">
                            At YFC, we provide expert online English tuition tailored to the Indian curriculum, including CBSE, ICSE, and State Board exams. Our experienced tutors offer personalized support in reading, writing, grammar, and literature, helping students excel in their English studies from primary school to senior secondary levels.
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
                            Our English tuition in India covers all essential skills across various grade levels, including:
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
                            How Our India Online English Tuition Works
                        </h2>
                        <p className="mb-9 text-center text-gray-700">
                            Discover a personalized and effective approach to mastering English with our online tuition for students in India.
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
                                    We assess the student's current English skills to identify strengths and areas for improvement.
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
                                    A custom learning plan is developed to help the student succeed in reading, writing, and literature.
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
                                    Sessions are scheduled at convenient times for the student and family.
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
                                    Parents receive updates on their child’s progress, including improvements in English language and literature.
                                </p>
                            </div>
                        </div>
                    </section>



                    {/* Exam Preparation */}
                    <section className="mb-8">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-7 text-center text-teal-700">
                            CBSE, ICSE, and State Board Exam Preparation
                        </h2>
                        <div className="flex flex-col lg:flex-row">
                            {/* Left Side: Heading and Description */}
                            <div className="lg:w-1/2 p-6">
                                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                                    Focused Support for Success
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    We provide targeted preparation for the key Indian board exams:
                                </p>
                                <p className="text-gray-700">
                                    CBSE English (Class 10 and 12): Comprehensive support for students preparing for CBSE English language and literature exams.
                                </p>
                                <p className="text-gray-700 mt-2">
                                    ICSE English (Class 10): Tailored lessons for students preparing for the ICSE board exams, focusing on key English skills.
                                </p>
                                <p className="text-gray-700 mt-2">
                                    State Board English: Focused preparation for State Board exams, aligned with each state’s specific syllabus.
                                </p>
                            </div>

                            {/* Right Side: Four Boxes */}
                            <div className="lg:w-1/2 grid grid-cols-2 gap-4 p-6">
                                {/* Box 1 */}
                                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                                    <h4 className="text-lg font-semibold text-teal-700 mb-2">CBSE English (Class 10)</h4>
                                    <p className="text-gray-700">Comprehensive support for Class 10 CBSE English exams.</p>
                                </div>
                                {/* Box 2 */}
                                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                                    <h4 className="text-lg font-semibold text-teal-700 mb-2">CBSE English (Class 12)</h4>
                                    <p className="text-gray-700">Focused assistance for Class 12 CBSE English exam preparation.</p>
                                </div>
                                {/* Box 3 */}
                                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                                    <h4 className="text-lg font-semibold text-teal-700 mb-2">ICSE English (Class 10)</h4>
                                    <p className="text-gray-700">Tailored support for ICSE English board exam preparation.</p>
                                </div>
                                {/* Box 4 */}
                                <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
                                    <h4 className="text-lg font-semibold text-teal-700 mb-2">State Board English</h4>
                                    <p className="text-gray-700">Focused preparation aligned with State Board exam syllabi.</p>
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
                                    text="Thanks to YFC, my daughter scored 90% in her CBSE English exam. The tutor’s personalized approach really made a difference."
                                    author="Priya, Parent"
                                    image="/Images/emma.webp"
                                />
                            </div>

                            {/* Testimonial 2 */}
                            <div
                                style={{ scrollSnapAlign: 'start' }}
                                className="flex-shrink-0 w-full sm:w-96 lg:w-[32%]"
                            >
                                <TestimonialCard
                                    text="YFC helped me prepare for my ICSE English exams. I was able to improve my writing and literature analysis."
                                    author="Rohan, Student"
                                    image="/Images/jame.webp"
                                />
                            </div>
                        </div>
                    </section>




                    {/* Call to Action Section */}
                    <CallToAction
                        heading="Ace Your English Exams with YFC!"
                        description="Contact us today to book a free trial session and help your child excel in English."
                        buttonText="Sign Up for a Free Trial"
                        buttonLink="/get-register"
                    />



                </div>
            )}
        </>

    )
}

export default InEnglish