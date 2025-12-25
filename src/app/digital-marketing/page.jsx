import Banner from "@/components/Banner";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { FaBullhorn } from 'react-icons/fa'; // Example icon for digital marketing

export const metadata = {
    title: 'Digital Marketing | YFC Solutions',
    description: "Explore our comprehensive online Digital Marketing courses at Your Future Campus Solutions (YFC).",
};

const DigitalMarketingCourse = () => {
    const breadcrumbData = {
        id: 3,
        name: "Digital Marketing",
        link: "/",
    };

    return (
        <>
            <head>
                <title>Digital Marketing | YFC Solutions</title>
                <meta
                    name="description"
                    content="Join YFC's Digital Marketing courses to master effective online marketing strategies."
                />
                <meta
                    name="keywords"
                    content="Digital Marketing, Online Courses, SEO, Social Media, Content Marketing"
                />
                <meta
                    property="og:title"
                    content="Digital Marketing Courses | YFC Solutions"
                />
                <meta
                    property="og:url"
                    content="https://yfcampus.com/digital-marketing/"
                />
                <meta
                    property="og:image"
                    content="URL_to_the_image.jpg"
                />
                <meta
                    property="og:description"
                    content="Join YFC's Digital Marketing courses to master effective online marketing strategies."
                />
            </head>

            <Banner breadcrumbData={breadcrumbData} />

            <div className="px-5 md:px-24 mt-10">
                <section className="flex justify-between h-auto gap-3 flex-col md:flex-row">
                    <div className="w-full md:w-3/5">
                        <p className="text-gray-700 leading-relaxed">
                            Your Future Campus Solutions (YFC) offers comprehensive online Digital Marketing courses accessible globally. These courses will teach you the essential skills for successful online marketing, including SEO, social media strategies, content marketing, and analytics. You'll learn how to craft effective campaigns and analyze their performance to drive growth.
                        </p>
                    </div>

                    <div className="w-full md:w-2/5 order-first lg:order-last pl-3">
                        <Image
                            src="/Images/digital-marketing.webp"
                            alt="Digital Marketing illustration"
                            width={700}
                            height={400}
                            className="h-[250px] w-full rounded-md border border-teal-600 transition-transform duration-300 transform hover:scale-105 mx-2 md:mx-0"
                        />
                    </div>
                </section>

                {/* Courses Section */}
                <section className="px-5 md:px-24 mt-10">
                    <h2 className="text-3xl font-bold text-center mb-4 text-teal-600">Courses</h2>
                    <p className="text-center text-gray-600 mb-6">
                        At Your Future Campus Solutions (YFC), we offer a variety of online Digital Marketing courses designed for learners at every level. Whether you're just starting or looking to advance your skills, we have a course that fits your needs.
                    </p>

                    {/* Courses Container */}
                    <div className="flex justify-between mt-7 flex-wrap">
                        {/* Course Box */}
                        {[
                            { name: "SEO Fundamentals", icon: <FaBullhorn /> },
                            { name: "Social Media Marketing", icon: "📱" },
                            { name: "Content Marketing Strategies", icon: "✍️" },
                        ].map((course, index) => (
                            <div key={index} className="relative w-full md:w-1/3 p-4">
                                <Link aria-label="courses" href="/digital-marketing/[courseName]" as={`/digital-marketing/${course.name.replace(/\s+/g, '-').toLowerCase()}`}>
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 relative group h-64 border-2 border-teal-500 hover:shadow-xl transform hover:scale-105 flex flex-col">
                                        {/* Front Side */}
                                        <div className="flex-grow flex flex-col items-center justify-center">
                                            <div className="text-6xl mb-2 text-teal-600">{course.icon}</div>
                                            <h3 className="text-xl font-bold text-teal-700 text-center">{course.name}</h3>
                                        </div>

                                        {/* Back Side (Details) */}
                                        <div className="absolute inset-0 bg-teal-600 text-white flex items-center justify-center text-center transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-6">
                                            <p className="text-sm">
                                                Discover {course.name} to learn how to optimize your online presence and engage effectively with your audience.
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default DigitalMarketingCourse;
