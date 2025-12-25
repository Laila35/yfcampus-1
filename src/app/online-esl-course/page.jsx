import Banner from "@/components/Banner";
import React from "react";
import Image from "next/image";
import { FaLanguage } from "react-icons/fa";
import CallToAction from "@/components/CallToAction";
import SuccessStories from "@/components/SuccessStories";
import Script from "next/script";

const ESLCourse = () => {
    const breadcrumbData = {
        id: 4,
        name: "ESL Course",
        link: "/",
    };


return (
    <>
        <head>
            <title>
                Learn English Online | ESL Tutoring for Non-Native Speakers |
                YFC
            </title>
            <meta
                name="description"
                content="Improve your English skills with YFC’s ESL (English as a Second Language) course. Learn English online through personalized lessons. Free trial available!"
            />
            <meta
                name="keywords"
                content="ESL online classes, learn English online, ESL tutoring, online English classes for beginners, English for non-native speakers, English speaking course"
            />
            <meta name="author" content="Your Future Campus" />
            <meta name="robots" content="index, follow" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link
                rel="canonical"
                href="https://yourfuturecampus.com/esl-course"
            />

            {/* Open Graph (Facebook, LinkedIn) */}
            <meta
                property="og:title"
                content="Learn English Online | ESL Tutoring for Non-Native Speakers | YFC"
            />
            <meta
                property="og:description"
                content="Join our ESL course and improve your English speaking, grammar, and writing skills. Online classes, free trial available."
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:url"
                content="https://yourfuturecampus.com/esl-course"
            />
            <meta
                property="og:image"
                content="https://yourfuturecampus.com/Images/Courses/esl-course.webp"
            />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
                name="twitter:title"
                content="Learn English Online | ESL Tutoring for Non-Native Speakers | YFC"
            />
            <meta
                name="twitter:description"
                content="Start learning English online with expert ESL tutors. Personalized lessons, flexible timing, and free trial!"
            />
            <meta
                name="twitter:image"
                content="https://yourfuturecampus.com/Images/Courses/esl-course.webp"
            />
            <meta name="twitter:site" content="@yourfuturecampus" />
            <meta name="twitter:creator" content="@yourfuturecampus" />

            {/* JSON-LD Structured Data */}
            <Script
                type="application/ld+json"
                id="esl-course-jsonld"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        name: "Learn English Online | ESL Tutoring for Non-Native Speakers",
                        description:
                            "Improve your English skills with YFC’s ESL (English as a Second Language) course. Learn English online through personalized lessons in speaking, listening, grammar, writing, and reading.",
                        provider: {
                            "@type": "Organization",
                            name: "Your Future Campus",
                            sameAs: "https://yfcampus.com",
                            logo: "https://yfcampus.com/Images/yfc-logo.png",
                        },
                        educationalCredentialAwarded:
                            "Certificate of Completion",
                        inLanguage: "en",
                        image: "https://yfcampus.com/Images/Courses/esl-course.webp",
                    }),
                }}
            />
        </head>

        <Banner breadcrumbData={breadcrumbData} />

        <div className="px-5 md:px-24 mt-10">
            {/* Intro Section */}
            <section className="flex justify-between h-auto gap-3 flex-col md:flex-row">
                <div className="w-full md:w-3/5">
                    <h1 className="text-3xl font-bold text-teal-700 mb-4">
                        Learn English Online | ESL (English as a Second
                        Language) Tutoring
                    </h1>
                    <p className="text-gray-700 leading-relaxed">
                        At YFC (Your Future Campus), we offer a comprehensive
                        ESL (English as a Second Language) course designed for
                        non-native speakers. Whether you're aiming to improve
                        your communication for daily use, academic success, or
                        career advancement, our expert tutors will guide you
                        through tailored lessons covering speaking, grammar,
                        writing, and listening. Learn English online with
                        confidence—anytime, anywhere.
                    </p>
                </div>

                <div className="w-full md:w-2/5 order-first lg:order-last pl-3">
                    <Image
                        src="/Images/Courses/esl-course.webp"
                        alt="Student learning English online with YFC tutor"
                        width={700}
                        height={400}
                        className="h-[250px] w-full rounded-md border border-teal-600 transition-transform duration-300 transform hover:scale-105 mx-2 md:mx-0"
                    />
                </div>
            </section>

            {/* Why Learn English Section */}
            <section className="px-5 md:px-24 mt-10">
                <h2 className="text-3xl font-bold text-center mb-4 text-teal-600">
                    Why Learn English with YFC?
                </h2>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-8 space-y-4">
                    <li>
                        <strong>Experienced ESL Tutors:</strong> Certified and
                        friendly tutors who specialize in helping non-native
                        speakers improve English fluency.
                    </li>
                    <li>
                        <strong>Customized Learning Plans:</strong> Each student
                        receives a personalized lesson plan based on goals,
                        level, and learning style.
                    </li>
                    <li>
                        <strong>Flexible Online Format:</strong> Attend ESL
                        classes from home or on the go with complete scheduling
                        flexibility.
                    </li>
                    <li>
                        <strong>Real-Life Language Use:</strong> Learn English
                        in context—gain practical communication skills for work,
                        travel, or daily life.
                    </li>
                </ul>
            </section>

            {/* What You Will Learn Section */}
            <section className="px-5 md:px-24 mt-10">
                <h2 className="text-3xl font-bold text-center mb-4 text-teal-600">
                    What You Will Learn in Our ESL Course
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Speaking and Listening",
                            description:
                                "Practice speaking English through real-life conversations, improving your pronunciation, fluency, and listening comprehension.",
                            icon: <FaLanguage />,
                        },
                        {
                            title: "English Grammar",
                            description:
                                "Learn grammar rules that are essential for writing and speaking in English, including sentence structure, tenses, and prepositions.",
                            icon: "🔤",
                        },
                        {
                            title: "Writing Skills",
                            description:
                                "Improve your English writing skills for both formal and informal communication, including emails, essays, and reports.",
                            icon: "✍️",
                        },
                        {
                            title: "Reading Comprehension",
                            description:
                                "Enhance your reading skills with exercises that focus on understanding written English in everyday contexts.",
                            icon: "📖",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 border-2 border-teal-500 transform hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="text-4xl text-teal-600">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-teal-700">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="mt-4 text-gray-700">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* How Our Course Works Section */}
            <section className="px-5 md:px-24 mt-10">
                <h2 className="text-3xl font-bold text-center mb-4 text-teal-600">
                    How Our Online ESL Course Works
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            step: 1,
                            title: "Free Initial Assessment",
                            description:
                                "We assess your current English skills and develop a personalized learning plan.",
                        },
                        {
                            step: 2,
                            title: "Customized Lesson Plans",
                            description:
                                "Lessons are tailored to meet your specific needs, from grammar improvement to conversational practice.",
                        },
                        {
                            step: 3,
                            title: "Interactive Online Classes",
                            description:
                                "Our online ESL classes focus on practical conversation, grammar exercises, and writing assignments.",
                        },
                        {
                            step: 4,
                            title: "Progress Tracking",
                            description:
                                "We provide regular updates on your progress to help you stay on track.",
                        },
                    ].map((step, index) => (
                        <div
                            key={index}
                            className="relative p-6 bg-teal-50 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
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

            {/* Success Stories Section */}
            <SuccessStories />

            {/* Call to Action Section */}
            <CallToAction
                heading="Start Learning English Today!"
                description="Sign up for a free trial session and begin improving your English with YFC’s ESL course."
                buttonText="Sign Up for a Free Trial"
                buttonLink="/get-register"
            />
        </div>
    </>
);
};

export default ESLCourse;
