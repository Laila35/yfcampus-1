import React from "react";
import { FaUserGraduate, FaBookOpen, FaRegClock, FaPencilAlt } from 'react-icons/fa';

const ChooseUsEnglish = () => {
    const chooseUs = [
        {
            id: 1,
            icon: <FaUserGraduate className="text-teal-500 text-5xl" />, // Icon for Qualified English Tutors
            name: "Qualified English Tutors",
            option: "Our experienced tutors specialize in English language instruction across various grade levels."
        },
        {
            id: 2,
            icon: <FaBookOpen className="text-teal-500 text-5xl" />, // Icon for Personalized Learning Plans
            name: "Personalized Learning Plans",
            option: "Each student receives a tailored learning plan that targets their unique strengths and areas of improvement."
        },
        {
            id: 3,
            icon: <FaRegClock className="text-teal-500 text-5xl" />, // Icon for Flexible Online Sessions
            name: "Flexible Online Sessions",
            option: "Enjoy convenient, interactive sessions via Zoom, Teams, or Google Meet, designed to fit into your schedule."
        },
        {
            id: 4,
            icon: <FaPencilAlt className="text-teal-500 text-5xl" />, // Icon for Comprehensive English Skills
            name: "Comprehensive English Skills",
            option: "We cover reading, writing, grammar, and literature, ensuring students are well-prepared for exams and academic success."
        },
    ];

    return (
        <div className="py-8 cursor-pointer"> {/* Padding removed from the main container */}
            <div className="text-center mb-12 px-4">
                <h2 className="text-2xl lg:text-3xl font-bold text-teal-500 mb-4"> {/* Reduced heading size */}
                    Why Choose YFC for English Tuition?
                </h2>
                <div className="font-medium text-gray-700 text-[16px] xl:text-[17px] md:text-[16px] max-w-4xl mx-auto">
                    Our key features ensure the best learning experience for you.
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 "> {/* Increased spacing */}
                {chooseUs.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white border border-teal-200 shadow-md rounded-[20px] flex flex-col justify-center items-center p-2 h-[180px] w-full sm:w-[48%] md:w-[44%] lg:w-[23%] relative overflow-hidden transition-shadow duration-300 hover:shadow-lg group" // Increased box size and padding
                    >
                        <div className="flex flex-col items-center">
                            {item.icon}
                            <div className="text-teal-800 font-bold text-center mt-2">
                                {item.name}
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-teal-100 opacity-0 flex items-center justify-center text-center text-teal-600 font-medium transition-opacity duration-300 group-hover:opacity-100">
                            <div className="px-4">{item.option}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChooseUsEnglish;
