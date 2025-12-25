"use client"
import FlagSectionEnglish from '@/components/FlagSectionEnglish'
import ChooseUsEnglish from '@/components/landingPage/ChooseUsEnglish'
import React from 'react'
import TestimonialCard from '@/components/TestimonialCard'
import CallToAction from '@/components/CallToAction'
import { useEffect } from 'react'
import { useCountry } from '../context/CountryContext'
import { useRouter } from 'next/navigation'
import SuccessStories from '@/components/SuccessStories'

const ComputerScience = () => {
    const { country } = useCountry()
    const router = useRouter();

    const topics = [
        {
            image: '/Images/web-heo.webp',
            title: 'Programming Languages',
            description: 'Learn popular languages like Python, Java, C++, JavaScript, tailored to your level and goals.',
        },
        {
            image: '/Images/algorithms.webp',
            title: 'Algorithms and Data Structures',
            description: 'Develop problem-solving skills by mastering key algorithms, data structures, and computational thinking.',
        },
        {
            image: '/Images/systems.jpg',
            title: 'Computer Systems and Architecture',
            description: 'Explore CPU architecture, memory, networking, and cybersecurity for a solid technical foundation.',
        },
        {
            image: '/Images/ai.webp',
            title: 'Artificial Intelligence and Machine Learning (Optional)',
            description: 'Get an introduction to AI and machine learning concepts, ideal for advanced learners.',
        },
    ];

    const TopicCovered = ({ image, title, description }) => (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={image} alt={title} className="h-40 w-full object-cover" />
            <div className="py-6 px-4 text-center">
                <h3 className="text-xl font-bold text-blue-600 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );

    const gradeLevels = [
        {
            title: 'Primary School (Grades 1-6)',
            description: 'Early introduction to coding and computational thinking, building a foundation for future learning.',
        },
        {
            title: 'Middle School (Grades 7-9)',
            description: 'Learn programming basics, data structures, and problem-solving through interactive lessons and hands-on projects.',
        },
        {
            title: 'High School (Grades 10-12)',
            description: 'Advanced topics like algorithms, programming, software development, and system design, preparing students for exams.',
        },
        {
            title: 'University and Adult Learners',
            description: 'Support for undergraduates or adults, from introductory programming to advanced software development.',
        },
    ];

    
    return (
        <>
            <head>
                <title>
                    Online Computer Science Tuition | Personalized Tutoring for All Grades | YFC
                </title>
                <meta
                    name="description"
                    content="Looking for expert online computer science tuition? YFC offers personalized tutoring in programming, algorithms, and exam preparation for all levels. Free trial available!"
                />
                <meta
                    name="keywords"
                    content="online computer science tuition, computer science tutors, online coding classes, programming tutors online, computer science exam preparation"
                />
            </head>
            <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
                <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/web-heo.webp")' }}>
                    <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
                    <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
                        Online Computer Science Tuition | Personalized Tutoring for All Grades and Levels
                    </h1>
                </section>

                <section className="mb-8 p-4">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-700">Introduction:</h2>
                    <p className="mt-2 text-gray-700">
                        At YFC, we provide comprehensive online computer science tuition for students of all grades and levels. Our expert tutors offer personalized lessons in programming, data structures, algorithms, and more. Whether you’re learning basics or preparing for exams, our flexible online format and tailored plans ensure effective guidance to excel in computer science.
                    </p>
                </section>
                
                <section className="mb-8">
                </section>
                
                <section className="mb-8">
                    <ChooseUsEnglish />
                </section>
                
                <section className="mb-[70px]">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-gray-700">Computer Science Topics Covered</h2>
                    <p className="mb-9 text-center text-gray-700">
                        Our curriculum covers essential computer science topics, including:
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
                
                <section className="mb-[70px]">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-gray-700">Grade Levels We Support</h2>
                    <p className="mb-9 text-center text-gray-700">
                        From primary to university level, our personalized computer science tuition supports all stages.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {gradeLevels.map((level, index) => (
                            <div key={index} className="relative w-full max-w-md mx-auto transition-transform duration-300 ease-in-out transform hover:shadow-xl">
                                <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 flex flex-col justify-between h-full">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{level.title}</h3>
                                    <p className="text-gray-600">{level.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section className="mb-[70px]">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">
                        How Our Online Computer Science Tuition Works
                    </h2>
                    <p className="mb-9 text-center text-gray-700">
                        Discover a personalized and effective approach to mastering Computer Science with our online tuition for students.
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
                                We start by assessing the student’s current Computer Science proficiency to identify strengths and areas for improvement.
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
                
             {/* Success Stories */}
             <SuccessStories/>
                
                <CallToAction
                    heading="Master Computer Science with YFC!"
                    description="Contact us today to book a free trial session and help your child excel in computer science."
                    buttonText="Sign Up for a Free Trial"
                    buttonLink="/get-register"
                />
            </div>
        </>
    )
}

export default ComputerScience
