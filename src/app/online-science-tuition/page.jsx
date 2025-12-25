"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { useCountry } from '@/app/context/CountryContext';
import CallToAction from '@/components/CallToAction';
import ChooseUsScience from '@/components/landingPage/ChooseUsScience';
import SuccessStories from '@/components/SuccessStories';

const LanguageCard = ({ icon, title, description }) => {
    return (
        <div className="border-2 border-teal-500 p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg">
            <div className="flex items-center justify-center mb-4">
                <div className="text-teal-600 text-4xl mr-3">{icon}</div>
                <h3 className="text-xl font-bold text-teal-800">{title}</h3>
            </div>
            <p className="text-gray-700 font-medium">{description}</p>
        </div>
    );
};

const Science = () => {
    const { country } = useCountry()
    const router = useRouter();
    const topics = [
        {
            image: '/Images/physics.webp', // Use the path to your physics image
            title: 'Physics',
            description: 'Forces, motion, energy, waves, electricity, and magnetism. Advanced topics like thermodynamics, quantum mechanics, and electromagnetism for older students.',
        },
        {
            image: '/Images/chemistry.webp', // Use the path to your chemistry image
            title: 'Chemistry',
            description: 'Atomic structure, chemical reactions, bonding, acids and bases, and organic chemistry. Advanced topics such as electrochemistry, kinetics, and thermodynamics.',
        },
        {
            image: '/Images/biology.webp', // Use the path to your biology image
            title: 'Biology',
            description: 'Cell structure, genetics, human body systems, ecosystems, and evolution. Advanced topics like molecular biology, biotechnology, and physiology.',
        },
    ];


    const TopicCovered = ({ image, title, description }) => (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={image} alt={title} className="h-40 w-full object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold text-teal-600 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
    const gradeLevels = [
        {
            title: 'Primary School (Grades 1-6)',
            description: 'Introduction to the basics of science, including the scientific method, plants, animals, and the environment.',
        },
        {
            title: 'Secondary School (Grades 7-11)',
            description: 'Intermediate topics in physics, chemistry, and biology, preparing students for major exams such as GCSEs, SATs, and equivalent.',
        },
        {
            title: 'High School (Grades 12-13)',
            description: 'Advanced topics in physics, chemistry, and biology, focusing on exam preparation for A-Levels, APs, and university entry exams.',
        },
    ];

    

    return (
        <>
            <head>
                <title>
                    Online Science Tuition | Expert Tutors for Physics, Chemistry, and Biology | YFC
                </title>
                <meta
                    name="description"
                    content="Looking for expert online science tuition? YFC offers personalized tutoring in Physics, Chemistry, and Biology for Grades 1 to 12. Book a free trial today!"
                />
                <meta
                    name="keywords"
                    content="online science tuition, online science tutoring, physics tutors, chemistry tutors, biology tutors, grades 1-12 science, personalized science tuition, flexible online science classes"
                />
                <meta
                    property="og:title"
                    content="Online Science Tuition | Expert Tutors for Physics, Chemistry, and Biology | YFC"
                />
                <meta property="og:url" content="https://yfcampus.com/online-science-tuition/" />
                <meta
                    property="og:image"
                    content="URL_to_the_image.jpg"
                />
                <meta
                    property="og:description"
                    content="Looking for expert online science tuition? YFC offers personalized tutoring in Physics, Chemistry, and Biology for Grades 1 to 12. Book a free trial today!"
                />
                <link
                    rel="canonical"
                    href="https://yfcampus.com/online-science-tuition/"
                    title='online science tuition'
                    aria-label='online science tuition'
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
                    title="Physics Tutoring"
                    aria-label="Physics Tutoring"
                />
                <link
                    rel="alternate"
                    href="https://yfcampus.com/online-science-tuition/"
                    title="Chemistry Tutoring"
                    aria-label="Chemistry Tutoring"
                />
                <link
                    rel="alternate"
                    href="https://yfcampus.com/online-science-tuition/"
                    title="Biology Tutoring"
                    aria-label="Biology Tutoring"
                />
            </head>


            <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
                <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/science_banner.webp")' }}>
                    <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
                    <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
                        Online Science Tuition for All Grade Levels | Personalized Tutoring in Physics, Chemistry, and Biology
                    </h1>
                </section>

                {/* Intro section */}
                <section className="mb-8 p-4">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
                    <p className="mt-2 text-gray-700">
                        At Your Future Campus (YFC), we offer comprehensive online science tuition for students from Grades 1 to 12. Whether you’re looking for support in Physics, Chemistry, or Biology, our expert tutors provide personalized guidance tailored to each student’s needs. Our flexible online sessions ensure that students receive high-quality science tutoring from the comfort of their homes.
                    </p>
                </section>


                <section className="mb-8">
                </section>

                <section className="mb-8">
                    <ChooseUsScience />
                </section>

                {/* Science Topics Covered Section */}
                <section className="mb-[70px]">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">Science Subjects Covered</h2>
                    <p className="mb-9 text-center text-gray-700">
                        Our New Zealand science tuition covers all essential topics across various grade levels, including:
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
                        How Our Online Science Tuition Works
                    </h2>
                    <p className="mb-9 text-center text-gray-700">
                        Discover a personalized and effective approach to mastering science with our online tuition for students.
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
                                We assess each student’s current level to identify areas for improvement.
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
                                Our tutors create a custom learning plan tailored to the student’s unique needs.
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
                                Parents receive regular updates on their child’s progress and areas that need attention.
                            </p>
                        </div>
                    </div>
                </section>

{/* Succes Stories */}
<SuccessStories/>
              
                <CallToAction
                    heading="Master Science with YFC!"
                    description="Contact us today to book a free trial session and give your child the support they need to excel in science."
                    buttonText="Sign Up for a Free Trial"
                    buttonLink="/get-register"
                />






            </div>
        </>
    );
};

export default Science;





