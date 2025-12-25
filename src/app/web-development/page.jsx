import Banner from "@/components/Banner";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export const metadata = {
    title: 'Web Development | YFC Solutions',
    description: "Explore our comprehensive online web development courses at Your Future Campus Solutions (YFC).",
};

const WebDevelopment = () => {
    const breadcrumbData = {
        id: 1,
        name: "web-development",
        link: "/",
    };

    return (
        <>
            <head>
                <title>Web Development | YFC Solutions</title>
                <meta
                    name="description"
                    content="Join YFC's web development courses to master coding and programming skills. Enroll now!"
                />
                <meta
                    name="keywords"
                    content="Web Development, Online Courses, HTML, CSS, JavaScript, React"
                />
                <meta
                    property="og:title"
                    content="Web Development Courses | YFC Solutions"
                />
                <meta
                    property="og:url"
                    content="https://yfcampus.com/web-development/"
                />
                <meta
                    property="og:image"
                    content="URL_to_the_image.jpg"
                />
                <meta
                    property="og:description"
                    content="Join YFC's web development courses to master coding and programming skills. Enroll now!"
                />
            </head>

            <Banner breadcrumbData={breadcrumbData} />

            <div className="px-5 md:px-24 mt-10">
                <section className="flex justify-between h-auto gap-3 flex-col md:flex-row">
                    <div className="w-full md:w-3/5">
                        <p className="text-gray-700 leading-relaxed">
                            Your Future Campus Solutions (YFC) offers comprehensive online web development courses accessible globally. Web development encompasses the coding and programming aspects of creating websites. As you embark on this learning journey, you'll start with the fundamentals, such as writing simple HTML pages, and progressively advance to developing complex, feature-rich applications designed for a variety of internet-connected devices.
                        </p>
                    </div>

                    <div className="w-full md:w-2/5 order-first lg:order-last pl-3">
                        <Image
                            src="/Images/web-heo.webp"
                            alt="Web development illustration"
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
                        At Your Future Campus Solutions (YFC), we offer a wide variety of online web development courses designed for learners at every level. Whether you're just starting out or seeking to refine your expertise, we have a course that fits your needs.
                    </p>

                    {/* Courses Container */}
                    <div className="flex justify-between mt-7 flex-wrap">
                        {/* Course Box */}
                        {[
                            { name: "HTML & CSS Fundamentals", icon: "🌐" },
                            { name: "JavaScript Essentials", icon: "📜" },
                            { name: "React Development", icon: "⚛️" },
                        ].map((course, index) => (
                            <div key={index} className="relative w-full md:w-1/3 p-4">
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 relative group h-64 border-2 border-teal-500 hover:shadow-xl transform hover:scale-105 flex flex-col">
                                    {/* Front Side */}
                                    <div className="flex-grow flex flex-col items-center justify-center">
                                        <div className="text-6xl mb-2 text-teal-600">{course.icon}</div>
                                        <h3 className="text-xl font-bold text-teal-700 text-center">{course.name}</h3>
                                    </div>

                                    {/* Back Side (Details) */}
                                    <div className="absolute inset-0 bg-teal-600 text-white flex items-center justify-center text-center transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-6">
                                        <p className="text-sm">
                                            Dive into {course.name} to master the foundational skills necessary for web development, including best practices and modern techniques.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default WebDevelopment;
