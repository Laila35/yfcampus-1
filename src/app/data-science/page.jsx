import Banner from "@/components/Banner";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChartBar } from 'react-icons/fa'; // Example icon for data science

export const metadata = {
    title: 'Data Science & Analytics | YFC Solutions',
    description: "Explore our comprehensive online Data Science & Analytics courses at Your Future Campus Solutions (YFC).",
};

const DataScienceCourse = () => {
    const breadcrumbData = {
        id: 2,
        name: "Data Science",
        link: "/",
    };

    return (
        <>
            <head>
                <title>Data Science & Analytics | YFC Solutions</title>
                <meta
                    name="description"
                    content="Join YFC's Data Science & Analytics courses to master data-driven techniques for better decision-making."
                />
                <meta
                    name="keywords"
                    content="Data Science, Analytics, Online Courses, Learn Data Science"
                />
                <meta
                    property="og:title"
                    content="Data Science & Analytics Courses | YFC Solutions"
                />
                <meta
                    property="og:url"
                    content="https://yfcampus.com/data-science/"
                />
                <meta
                    property="og:image"
                    content="URL_to_the_image.jpg"
                />
                <meta
                    property="og:description"
                    content="Join YFC's Data Science & Analytics courses to master data-driven techniques for better decision-making."
                />
            </head>

            <Banner breadcrumbData={breadcrumbData} />

            <div className="px-5 md:px-24 mt-10">
                <section className="flex justify-between h-auto gap-3 flex-col md:flex-row">
                    <div className="w-full md:w-3/5">
                        <p className="text-gray-700 leading-relaxed">
                            Your Future Campus Solutions (YFC) offers comprehensive online Data Science & Analytics courses accessible globally. These courses cover essential techniques for analyzing data and making informed decisions. You'll start with the basics of data manipulation and gradually progress to advanced analytical methods using popular tools and programming languages.
                        </p>
                    </div>

                    <div className="w-full md:w-2/5 order-first lg:order-last pl-3">
                        <Image
                            src="/Images/data-science.webp"
                            alt="Data Science illustration"
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
                        At Your Future Campus Solutions (YFC), we offer a variety of online Data Science & Analytics courses designed for learners at every level. Whether you're just starting or looking to advance your skills, we have a course that fits your needs.
                    </p>

                    {/* Courses Container */}
                    <div className="flex justify-between mt-7 flex-wrap">
                        {/* Course Box */}
                        {[
                            { name: "Data Analysis with Python", icon: <FaChartBar /> },
                            { name: "Machine Learning Fundamentals", icon: "🤖" },
                            { name: "Data Visualization Techniques", icon: "📊" },
                        ].map((course, index) => (
                            <div key={index} className="relative w-full md:w-1/3 p-4">
                                <Link aria-label="courses" href="/data-science/[courseName]" as={`/data-science/${course.name.replace(/\s+/g, '-').toLowerCase()}`}>
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 relative group h-64 border-2 border-teal-500 hover:shadow-xl transform hover:scale-105 flex flex-col">
                                        {/* Front Side */}
                                        <div className="flex-grow flex flex-col items-center justify-center">
                                            <div className="text-6xl mb-2 text-teal-600">{course.icon}</div>
                                            <h3 className="text-xl font-bold text-teal-700 text-center">{course.name}</h3>
                                        </div>

                                        {/* Back Side (Details) */}
                                        <div className="absolute inset-0 bg-teal-600 text-white flex items-center justify-center text-center transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-6">
                                            <p className="text-sm">
                                                Explore {course.name} to gain essential skills in data analysis and visualization, helping you make data-driven decisions.
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

export default DataScienceCourse;
