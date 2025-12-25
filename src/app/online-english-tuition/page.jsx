"use client"
import FlagSectionEnglish from '@/components/FlagSectionEnglish'
import ChooseUsEnglish from '@/components/landingPage/ChooseUsEnglish'
import React from 'react'
import CallToAction from '@/components/CallToAction'
import { useEffect } from 'react'
import { useCountry } from '../context/CountryContext'
import { useRouter } from 'next/navigation'
import SuccessStories from '@/components/SuccessStories'
const English = () => {
    const { country } = useCountry()
    const router = useRouter();
    const topics = [
        {
            image: '/Images/reading.webp', // Use the path to your reading image
            title: 'Reading Skills',
            description: 'Improve understanding of texts through vocabulary building, critical thinking, and comprehension strategies.',
        },
        {
            image: '/Images/writing.webp', // Use the path to your writing image
            title: 'Writing Skills',
            description: 'Enhance writing techniques, including creative writing, essays, reports, and structured writing tasks.',
        },
        {
            image: '/Images/grammer.webp', // Use the path to your grammar image
            title: 'Grammar & Punctuation',
            description: 'Strengthen grammar, punctuation, and sentence structure, focusing on accuracy and fluency in writing.',
        },
        {
            image: '/Images/literature.webp', // Use the path to your literature image
            title: 'English Literature',
            description: 'Analyze classic and modern texts, exploring themes, characters, and literary devices for deeper understanding.',
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
            description: 'Focus on building a strong foundation in reading, writing, and grammar. Our tutors help young learners develop essential English language skills while boosting confidence.',
        },
        {
            title: 'Middle School (Grades 7-8)',
            description: 'Strengthen reading comprehension, essay writing, and grammar skills to prepare students for higher academic challenges. We emphasize critical thinking and literary analysis for middle school students.',
        },
        {
            title: 'High School (Grades 9-12)',
            description: 'Support for students working on advanced writing tasks, grammar refinement, and literature studies. Our tutors prepare students for key exams such as GCSEs, A-Levels, SAT, and more.',
        },
    ];
   

    return (
        <>
            <head>
                <title>
                    Online English Tuition | Expert Tutors for Reading, Writing, and Literature | YFC
                </title>
                <meta
                    name="description"
                    content="Looking for expert online English tuition? YFC offers personalized tutoring in reading comprehension, writing skills, and English literature for Grades 1 to 12. Book a free trial today!"
                />
                <meta
                    name="keywords"
                    content="online English tuition, English tutors, reading comprehension tutoring, writing skills tutoring, English literature tutoring, personalized English tutoring, grades 1-12 English classes, English exam preparation"
                />
                <meta
                    property="og:title"
                    content="Online English Tuition | Expert Tutors for Reading, Writing, and Literature | YFC"
                />
                <meta property="og:url" content="https://yfcampus.com/online-english-tuition/" />
                <meta
                    property="og:image"
                    content="URL_to_the_image.jpg"
                />
                <meta
                    property="og:description"
                    content="Looking for expert online English tuition? YFC offers personalized tutoring in reading comprehension, writing skills, and English literature for Grades 1 to 12. Book a free trial today!"
                />
                <link
                    rel="canonical"
                    href="https://yfcampus.com/online-english-tuition/"
                    title="online english Tuition"
                    aria-label="online english Tuition"
                />
                <link
                    rel="alternate"
                    href="https://yfcampus.com/online-maths-tuition/"
                    title="Maths Tuition"
                    aria-label="Maths Tuition"
                />
                <link
                    rel="alternate"
                    href="https://yfcampus.com/online-science-tuition/"
                    title="Science Tuition"
                    aria-label="Science Tuition"
                />
                <link
                    rel="alternate"
                    href="https://yfcampus.com/online-english-tuition/"
                    title="English Tuition"
                    aria-label="English Tuition"
                />
            </head>
            <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
                <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/english.webp")' }}>
                    <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
                    <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
                        Online English Tuition for All Grade Levels | Personalized Tutoring in Reading, Writing, and Literature
                    </h1>
                </section>

                {/* Intro section */}
                <section className="mb-8 p-4">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
                    <p className="mt-2 text-gray-700">
                        At Your Future Campus (YFC), we provide comprehensive online English tuition for students from Grades 1 to 12. Our expert tutors offer personalized lessons tailored to each student’s needs, covering reading comprehension, writing skills, grammar, and literature. Whether your child is learning the basics of English or preparing for higher-level exams, our flexible online sessions ensure they receive top-notch English tutoring from the comfort of their home.
                    </p>
                </section>
                <section className="mb-8">
                </section>
                <section className="mb-8">
                    <ChooseUsEnglish />
                </section>
                <section className="mb-[70px]">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">English Subjects Covered</h2>
                    <p className="mb-9 text-center text-gray-700">
                        Our English tuition covers all essential skills across various grade levels, including:
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

                <section className="mb-[70px]">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">
                        How Our Online English Tuition Works
                    </h2>
                    <p className="mb-9 text-center text-gray-700">
                        Discover a personalized and effective approach to mastering English with our online tuition for students.
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
                                We start by assessing the student’s current English proficiency to identify strengths and areas for improvement.
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
                                Based on the assessment, we create a customized learning plan tailored to the student’s needs and academic goals.
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
                                Our sessions can be scheduled at convenient times, including evenings and weekends, to accommodate the student’s availability.
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
                                Parents receive regular updates on their child’s progress and areas for continued development.
                            </p>
                        </div>
                    </div>
                </section>
               
{/* Succes Stories */}
<SuccessStories/>

                <CallToAction
                    heading="Master English with YFC!"
                    description="Contact us today to book a free trial session and help your child succeed in reading, writing, grammar, and literature."
                    buttonText="Sign Up for a Free Trial"
                    buttonLink="/get-register"
                />


            </div>
        </>

    )
}

export default English