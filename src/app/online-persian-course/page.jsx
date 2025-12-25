import Banner from "@/components/Banner";
import React from "react";
import Image from "next/image";
import { FaLanguage } from "react-icons/fa";
import CallToAction from "@/components/CallToAction";
import SuccessStories from "@/components/SuccessStories";
import Script from "next/script";

export const metadata = {
    title: "Learn Persian (Farsi) Online | Personalized Persian Language Tutoring | YFC",
    description:
        "Learn Persian (Farsi) online with expert tutoring from YFC. Our Persian language course is available for all levels, from beginner to advanced learners. Free trial available!",
};

const PersianCourse = () => {
    const breadcrumbData = {
        id: 5,
        name: "Persian Language",
        link: "/",
    };

    return (
        <>
            <head>
                {/* Basic Meta Tags */}
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Your Future Campus (YFC)" />

                {/* Title */}
                <title>
                    Learn Persian (Farsi) Online | Personalized Persian Language
                    Tutoring | YFC
                </title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Learn Persian (Farsi) online with expert tutoring from YFC. Our Persian language course is available for all levels, from beginner to advanced learners. Free trial available!"
                />

                {/* Meta Keywords */}
                <meta
                    name="keywords"
                    content="learn Persian online, Farsi tutoring, Persian language course, online Farsi class, native Persian tutors, Persian for beginners, advanced Persian course"
                />

                {/* Open Graph Meta Tags */}
                <meta
                    property="og:title"
                    content="Learn Persian (Farsi) Online | Personalized Persian Language Tutoring | YFC"
                />
                <meta
                    property="og:description"
                    content="Enroll in our Persian (Farsi) language course and learn from native-speaking tutors online. Free trial sessions and personalized plans available."
                />
                <meta
                    property="og:image"
                    content="https://yfcampus.com/Images/Courses/farsi-language-learn.webp"
                />
                <meta
                    property="og:url"
                    content="https://yfcampus.com/online-persian-course"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:site_name"
                    content="Your Future Campus (YFC)"
                />
                <meta property="og:locale" content="en_US" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Learn Persian (Farsi) Online | Personalized Persian Language Tutoring | YFC"
                />
                <meta
                    name="twitter:description"
                    content="Master Persian (Farsi) online from beginner to advanced level with native tutors. Join our flexible online course today."
                />
                <meta
                    name="twitter:image"
                    content="https://yfcampus.com/Images/Courses/farsi-language-learn.webp"
                />
                <meta name="twitter:site" content="@YFC_Global" />

                {/* Canonical URL */}
                <link
                    rel="canonical"
                    href="https://yfcampus.com/online-persian-course"
                />
               <Script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Course",
                            name: "Online Persian (Farsi) Language Course",
                            description:
                                "Learn Persian online with native-speaking tutors through Your Future Campus (YFC). Personalized lesson plans for all levels.",
                            provider: {
                                "@type": "Organization",
                                name: "Your Future Campus",
                                sameAs: "https://yfcampus.com",
                                logo: "https://yfcampus.com/Images/yfc-logo.png",
                            },
                            educationalCredentialAwarded:
                                "Certificate of Completion",
                            inLanguage: "fa",
                            image: "https://yfcampus.com/Images/Courses/farsi-language-learn.webp",
                        }),
                    }}/>



      </head>

        <div className="px-5 md:px-24 mt-10">
                {/* Intro Section */}
                <section className="flex justify-between h-auto gap-3 flex-col md:flex-row">
                    <div className="w-full md:w-3/5">
                        <h1 className="text-3xl font-bold text-teal-700 mb-4">
                            Learn Persian (Farsi) Online | Beginner to Advanced
                            Persian Tutoring
                        </h1>
                        <p className="text-gray-700 leading-relaxed">
                            At Your Future Campus (YFC), we offer structured and
                            engaging online Persian (Farsi) language courses for
                            all levels. Our native-speaking tutors use modern
                            teaching techniques to help you master Persian
                            writing, grammar, and conversation with confidence.
                            Whether you're planning a trip to Iran, studying
                            Persian culture, or just exploring a new language,
                            our courses are tailored to your goals.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            From the Persian alphabet to advanced sentence
                            structures and cultural expressions, YFC makes
                            language learning accessible, interactive, and
                            results-driven. With 1-on-1 sessions and
                            personalized progress tracking, you’ll learn faster
                            and more effectively than traditional classroom
                            methods.
                        </p>
                    </div>

                    <div className="w-full md:w-2/5 order-first lg:order-last pl-3">
                        <Image
                            src="/Images/Courses/farsi-language-learn.webp"
                            alt="Student learning Persian online with YFC tutor"
                            width={400}
                            height={700}
                            className="h-[450px] w-full rounded-md border border-teal-600 transition-transform duration-300 transform hover:scale-105 mx-2 md:mx-0"
                        />
                    </div>
                </section>

                {/* Why Learn Persian */}
                <section className="mt-10">
                    <h2 className="text-3xl font-bold text-center mb-4 text-teal-600">
                        Why Learn Persian with YFC?
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-8 space-y-4">
                        <li>
                            <strong>Native-Speaking Tutors:</strong> Our tutors
                            are fluent, culturally aware, and experienced in
                            teaching Persian to non-native speakers.
                        </li>
                        <li>
                            <strong>Tailored Lessons:</strong> Every student
                            receives a custom lesson plan aligned with their
                            current level and personal goals.
                        </li>
                        <li>
                            <strong>Flexible Scheduling:</strong> Book classes
                            at your convenience — morning, evening, or weekends.
                        </li>
                        <li>
                            <strong>Interactive Platform:</strong> Our virtual
                            classroom includes screen sharing, whiteboards,
                            assignments, and quizzes.
                        </li>
                        <li>
                            <strong>Global Access:</strong> No matter where you
                            live, join live Persian classes from anywhere with
                            just an internet connection.
                        </li>
                    </ul>
                </section>

                {/* Who Should Enroll */}
                <section className="mt-10">
                    <h2 className="text-3xl font-bold text-center mb-4 text-teal-600">
                        Who Should Enroll in Our Persian Course?
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Our Persian language program is perfect for:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-8 space-y-3">
                        <li>
                            Travelers visiting Iran, Afghanistan, or Tajikistan
                        </li>
                        <li>
                            Heritage learners wanting to reconnect with their
                            culture
                        </li>
                        <li>Students preparing for Persian language exams</li>
                        <li>
                            Business professionals working with Persian-speaking
                            clients
                        </li>
                        <li>Language lovers expanding their polyglot skills</li>
                    </ul>
                </section>

                {/* Benefits of Learning Persian */}
                <section className="mt-10">
                    <h2 className="text-3xl font-bold text-center mb-4 text-teal-600">
                        Benefits of Learning Persian
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                        <div>
                            <p className="mb-2">
                                <strong>✓ Deep Cultural Insight:</strong>{" "}
                                Persian is a gateway to classical literature,
                                poetry, and Middle Eastern history.
                            </p>
                            <p className="mb-2">
                                <strong>✓ Career Opportunities:</strong> Fluency
                                in Persian opens doors in diplomacy,
                                international relations, and translation.
                            </p>
                        </div>
                        <div>
                            <p className="mb-2">
                                <strong>✓ Travel Confidence:</strong>{" "}
                                Communicate with locals and experience Iran and
                                other Persian-speaking regions authentically.
                            </p>
                            <p className="mb-2">
                                <strong>✓ Personal Growth:</strong> Learning a
                                new script and language structure enhances
                                cognitive skills and memory.
                            </p>
                        </div>
                    </div>
                </section>

                {/* What You Will Learn */}
                <section className="mt-10">
                    <h2 className="text-3xl font-bold text-center mb-4 text-teal-600">
                        What You Will Learn in Our Persian Course
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Persian Alphabet & Script",
                                description:
                                    "Master reading and writing the Persian script from scratch.",
                                icon: "🔠",
                            },
                            {
                                title: "Grammar Essentials",
                                description:
                                    "Understand verb forms, noun usage, tenses, and sentence structures.",
                                icon: "📚",
                            },
                            {
                                title: "Conversational Persian",
                                description:
                                    "Build everyday vocabulary and engage in real-life dialogues.",
                                icon: "🗣️",
                            },
                            {
                                title: "Listening & Pronunciation",
                                description:
                                    "Improve comprehension and accent with audio exercises.",
                                icon: "🎧",
                            },
                            {
                                title: "Persian Culture & Etiquette",
                                description:
                                    "Explore traditions, festivals, and social customs of Persian-speaking communities.",
                                icon: "🕌",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-6 border-2 border-teal-500 transform hover:scale-105 transition-transform duration-300"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="text-3xl text-teal-600">
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

                {/* Our Teaching Approach */}
                <section className="mt-10">
                    <h2 className="text-3xl font-bold text-center mb-4 text-teal-600">
                        Our Teaching Methodology
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-center mb-6">
                        Our online Persian classes are designed with the student
                        in mind — flexible, personalized, and results-driven.
                    </p>
                    <div className="grid md:grid-cols-4 gap-6 text-gray-700">
                        {[
                            {
                                step: "1",
                                title: "Free Trial & Assessment",
                                description:
                                    "Try a lesson and let us evaluate your current level.",
                            },
                            {
                                step: "2",
                                title: "Goal Setting",
                                description:
                                    "We work with you to set achievable, clear language goals.",
                            },
                            {
                                step: "3",
                                title: "Live Sessions",
                                description:
                                    "Join engaging classes via Zoom or our online portal.",
                            },
                            {
                                step: "4",
                                title: "Progress Reports",
                                description:
                                    "Track your improvement with regular updates and feedback.",
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
                                <p className="text-gray-600">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Success Stories */}
                <SuccessStories />

                {/* Call to Action */}
                <div className="mt-10">
                    <CallToAction
                        heading="Start Learning Persian Today!"
                        description="Join thousands of learners and experience expert-led Persian tutoring tailored just for you. Book your free trial today!"
                        buttonText="Book a Free Trial"
                        buttonLink="/get-register"
                    />
                </div>
            </div>
        </>
    );
};

export default PersianCourse;
