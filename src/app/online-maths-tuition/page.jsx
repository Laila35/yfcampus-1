"use client"
import { chooseUs } from '@/lib/Data';
import ChooseUs from '@/components/landingPage/ChooseUs';
import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";
import { useCountry } from '@/app/context/CountryContext';
import {
    FaCalculator,
    FaShapes,
    FaPuzzlePiece,
    FaChartBar,
    FaClipboardList,
} from 'react-icons/fa';
import SuccessStories from '@/components/SuccessStories';
import Link from 'next/link';

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

const GradeLevelCard = ({ title, description }) => {
    return (
        <div className="border border-teal-600 p-4 rounded-lg text-center bg-white shadow-lg hover:bg-teal-50 transition ease-in-out">
            <h3 className="text-xl font-semibold text-teal-700 mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
};




const Mathematics = () => {
    const { country } = useCountry()
    const router = useRouter();
    const topics = [
        {
            icon: <FaCalculator />,
            title: 'Number and Arithmetic',
            description:
                'Master basic number operations, fractions, decimals, and percentages.',
        },
        {
            icon: <FaPuzzlePiece />,
            title: 'Algebra',
            description:
                'Learn to solve equations, work with expressions, and tackle quadratic functions.',
        },
        {
            icon: <FaShapes />,
            title: 'Geometry and Trigonometry',
            description:
                'Understand shapes, angles, transformations, and trigonometric functions.',
        },
        {
            icon: <FaChartBar />,
            title: 'Statistics and Probability',
            description: 'Develop skills in data handling, graphing, and probability.',
        },
        {
            icon: <FaClipboardList />,
            title: 'Calculus (for advanced students)',
            description: 'Explore differentiation, integration, and their real-world applications.',
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


    return (
        <>
            <head>
                <title>
                    Online Maths Tuition | Expert Maths Tutors | YFC
                </title>
                <meta
                    name="description"
                    content="Looking for expert online maths tuition? YFC offers personalized maths tutoring for Grades 1 to 12, covering primary, secondary, and advanced levels. Book a free trial today!"
                />
                <meta
                    name="keywords"
                    content="online maths tuition, online maths tutoring, maths tutors, grades 1-12 maths, personalised maths tuition, flexible online maths classes, primary school maths, secondary school maths, A-Level maths"
                />
                <meta
                    property="og:title"
                    content="Online Maths Tuition | Expert Maths Tutors | YFC"
                />
                <meta property="og:url" content="https://yfcampus.com/online-maths-tuition/" />
                <meta
                    property="og:image"
                    content="URL_to_the_image.jpg"
                />
                <meta
                    property="og:description"
                    content="Looking for expert online maths tuition? YFC offers personalized maths tutoring for Grades 1 to 12, covering primary, secondary, and advanced levels. Book a free trial today!"
                />
                <link
                    rel="canonical"
                    href="https://yfcampus.com/online-maths-tuition/"
                    title="maths  Tuition"
                    aria-label="maths  Tuition"
                />
                <link
                    rel="alternate"
                    href="https://yfcampus.com/science-tuition/"
                    title="Science Tuition"
                    aria-label="Science Tuition"
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


            <div className="p-6 max-w-[90%] mx-auto font-sans bg-white shadow-md rounded-lg">
                <section className="relative bg-cover bg-center h-40 rounded-md md:h-72 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/Images/maths.webp")' }}>
                    <div className="absolute inset-0 bg-teal-800 opacity-70"></div> {/* Darker overlay for better text contrast */}
                    <h1 className="relative text-2xl md:text-4xl font-bold text-center px-4">
                        Online Maths Tuition for All Grade Levels | Personalized Tutoring by Expert Tutors
                    </h1>
                </section>



                {/* Intro section */}
                <section className="mb-8 p-4">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-teal-700">Introduction:</h2>
                    <p className="mt-2 text-gray-700">
                        At Your Future Campus (YFC), we provide online maths tuition for students from Grades 1 to 12. Whether you're looking to improve foundational skills, prepare for exams, or boost your confidence in maths, our expert tutors are here to help. With flexible online sessions and tailored learning plans, we ensure every student reaches their full potential in maths.

                    </p>
                </section>
                <section className="mb-8">
                  
                </section>

                <section className="mb-8">
                    <ChooseUs chooseUs={chooseUs} />
                </section>

                {/* Maths Topics Covered Section */}
                <section className="mb-[70px]">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">Maths Topics Covered</h2>
                    <p className="mb-9 text-center text-gray-700">
                        We offer comprehensive maths tuition for all key areas of the subject, including:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                        {topics.map((topic, index) => (
                            <LanguageCard
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
                        From primary school to A-Levels, our tailored maths tuition supports students at every stage.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {gradeLevels.map((level, index) => (
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
                                    <p className="text-gray-700">
                                        {index === 0 ?
                                            "Focus on building a strong foundation in basic arithmetic, geometry, and problem-solving." :
                                            index === 1 ?
                                                "Develop skills in algebra, trigonometry, geometry, and prepare for critical exams like GCSEs, SATs, or equivalent." :
                                                "Advanced support in calculus, statistics, and more complex mathematical concepts for A-Level, SAT, or other high school exams."
                                        }
                                    </p>

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
                        How Our Online Maths Tuition Works
                    </h2>
                    <p className="mb-9 text-center text-gray-700">
                        Discover a personalized and effective approach to mastering maths with our online tuition for students.
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
                                We begin with a free assessment to understand the student's current level and identify areas for improvement.
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
                                Based on the assessment, our tutors create a customized learning plan tailored to your child's specific needs.
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
                                Choose the times that work best for you. Our tutors are available for flexible online sessions.
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
                                We provide monthly progress reports to keep students and parents informed of achievements and areas needing attention.
                            </p>
                        </div>
                    </div>
                </section>

{/* Succes stories */}
<SuccessStories/>

                <section className="bg-teal-400 text-white p-6 text-center md:p-8 rounded-md">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Ready to Excel in Maths?
                    </h2>
                    <p className="mb-4 text-lg md:text-xl">
                        Contact us today to book a free trial session with one of our expert maths tutors and start your journey towards maths success!
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                        <Link
                        aria-label='Free Trial'
                            href="/get-register"
                            className="bg-white text-teal-500 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition duration-300"
                        >
                            Sign Up for a Free Trial
                        </Link>
                    </div>
                </section>





            </div>
        </>
    );
};

export default Mathematics;
