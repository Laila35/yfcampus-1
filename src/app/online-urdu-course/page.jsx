import Banner from "@/components/Banner";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import { FaLanguage } from 'react-icons/fa';
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import SuccessStories from "@/components/SuccessStories";

const UrduCourse = () => {
    const breadcrumbData = {
        id: 3,
        name: "Urdu Language",
        link: "/",
    };

    return (
        <>
            <head>
                <title>Learn Urdu Online | Professional Urdu Language Classes | YFC</title>
                <meta
                    name="description"
                    content="Looking to learn Urdu online? YFC offers personalized Urdu lessons for beginners to advanced learners, covering speaking, reading, and writing. Free trial available!"
                />
                <meta
                    name="keywords"
                    content="learn Urdu online, Urdu language classes, online Urdu tutoring, Urdu lessons for beginners, Urdu course online, YFC Urdu classes"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Learn Urdu Online | Professional Urdu Language Classes | YFC" />
                <meta property="og:description" content="Learn Urdu from native-speaking tutors online at YFC. Speaking, grammar, reading & writing skills covered. Free trial available." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yfcampus.com/courses/learn-urdu-online" />
                <meta property="og:image" content="https://yfcampus.com/Images/learn-urdu-online.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Learn Urdu Online | Professional Urdu Language Classes | YFC" />
                <meta name="twitter:description" content="Looking to learn Urdu online? YFC offers personalized Urdu lessons for all levels. Free trial available!" />
                <meta name="twitter:image" content="https://yfcampus.com/Images/learn-urdu-online.webp" />
                <link rel="canonical" href="https://yfcampus.com/courses/learn-urdu-online" />
            <Script
                type="application/ld+json"
                id="urdu-course-jsonld"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        name: "Online Urdu Language Course",
                        description: "Looking to learn Urdu online? YFC offers personalized Urdu lessons for beginners to advanced learners, covering speaking, reading, and writing.",
                        provider: {
                            "@type": "Organization",
                            name: "Your Future Campus",
                            sameAs: "https://yfcampus.com",
                            logo: "https://yfcampus.com/Images/yfc-logo.png",
                        },
                        educationalCredentialAwarded: "Certificate of Completion",
                        inLanguage: "ur",
                        image: "https://yfcampus.com/Images/learn-urdu-online.webp",
                    })
                }}
            />
            </head>


            <Banner breadcrumbData={breadcrumbData} />

            <div className="px-5 md:px-24 mt-10">
                <section className="flex justify-between h-auto gap-3 flex-col md:flex-row">
                    <div className="w-full md:w-3/5">
                        <h1 className="text-3xl font-bold text-teal-700 mb-4">Learn Urdu Online | Beginner to Advanced Urdu Language Tutoring</h1>
                        <p className="text-gray-700 leading-relaxed">
                            Join Your Future Campus (YFC) for a comprehensive online Urdu course tailored to your goals. Whether you're a complete beginner or seeking fluency, our native-speaking tutors offer personalized instruction in speaking, grammar, reading, and writing. With cultural insights and flexible scheduling, YFC makes it easy to achieve fluency in Urdu from anywhere in the world.
                        </p>
                        <p className="text-gray-700 mt-4">
                            Our Urdu course is perfect for travelers, heritage learners, students preparing for Urdu exams, or professionals needing Urdu for work. We combine modern teaching methods with cultural immersion, ensuring every lesson is both effective and engaging.
                        </p>
                    </div>

                    <div className="w-full md:w-2/5 order-first lg:order-last pl-3">
                        <Image
                            src="/Images/learn-urdu-online.webp"
                            alt="Student learning Urdu online with YFC tutor"
                            width={700}
                            height={400}
                            className="h-[250px] w-full rounded-md border border-teal-600 transition-transform duration-300 transform hover:scale-105 mx-2 md:mx-0"
                        />
                    </div>
                </section>

                <section className="px-5 md:px-24 mt-10">
                    <h2 className="text-3xl font-bold text-center mb-4 text-teal-600">Why Learn Urdu with YFC?</h2>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-8 space-y-4">
                        <li><strong>Native-Speaking Tutors:</strong> Learn from experienced tutors who are fluent in Urdu and understand effective teaching methods.</li>
                        <li><strong>Flexible Online Classes:</strong> Schedule lessons at your convenience—perfect for students, professionals, and global learners.</li>
                        <li><strong>Goal-Oriented Curriculum:</strong> Whether for travel, exams, or personal growth, our curriculum helps you meet your objectives.</li>
                        <li><strong>Interactive Learning Tools:</strong> Engage with multimedia content, speaking drills, writing practice, and comprehension exercises.</li>
                        <li><strong>Free Trial Class:</strong> Experience our teaching quality risk-free with a complimentary first session.</li>
                    </ul>
                </section>

                <section className="px-5 md:px-24 mt-10">
                    <h2 className="text-3xl font-bold text-center mb-4 text-teal-600">What You Will Learn in Our Urdu Course</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[{
                            title: "Urdu Alphabet and Script",
                            description: "Master the Urdu writing system, pronunciation, and script formation.",
                            icon: <FaLanguage />
                        }, {
                            title: "Grammar Essentials",
                            description: "Understand sentence structure, tenses, and verb conjugation.",
                            icon: "🔠"
                        }, {
                            title: "Conversational Fluency",
                            description: "Develop confidence in real-life conversations through interactive sessions.",
                            icon: "🗣️"
                        }, {
                            title: "Reading and Writing",
                            description: "Learn to read Urdu texts and express yourself clearly in writing.",
                            icon: "📖"
                        }, {
                            title: "Cultural Literacy",
                            description: "Explore Urdu’s cultural roots through idioms, traditions, and customs.",
                            icon: "🌍"
                        }, {
                            title: "Classical & Modern Literature",
                            description: "Analyze poetic and narrative texts from classical to modern Urdu literature.",
                            icon: "📚"
                        }].map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-2 border-teal-500 transform hover:scale-105 transition-transform duration-300">
                                <div className="flex items-center space-x-4">
                                    <div className="text-4xl text-teal-600">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-teal-700">{item.title}</h3>
                                </div>
                                <p className="mt-4 text-gray-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="px-5 md:px-24 mt-10">
                    <h2 className="text-3xl font-bold text-center mb-4 text-teal-600">How Our Online Urdu Course Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[{
                            step: 1,
                            title: "Free Initial Assessment",
                            description: "We evaluate your Urdu proficiency and create a custom learning path."
                        }, {
                            step: 2,
                            title: "Tailored Lessons",
                            description: "Courses are adapted to your needs—from everyday Urdu to professional use."
                        }, {
                            step: 3,
                            title: "Live Interactive Classes",
                            description: "Participate in real-time sessions with feedback, Q&A, and speaking practice."
                        }, {
                            step: 4,
                            title: "Ongoing Progress Reports",
                            description: "Stay motivated with regular feedback and track your language milestones."
                        }].map((step, index) => (
                            <div key={index} className="relative p-6 bg-teal-50 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <div className="absolute top-[-20px] left-0 w-12 h-12 bg-teal-600 text-white font-bold text-2xl rounded-full flex items-center justify-center shadow-md">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <SuccessStories />

                <CallToAction
                    heading="Start Learning Urdu with YFC Today!"
                    description="Sign up now for a free trial class and take the first step towards mastering the Urdu language."
                    buttonText="Sign Up for a Free Trial"
                    buttonLink="/get-register"
                />
            </div>
        </>
    );
};

export default UrduCourse;
