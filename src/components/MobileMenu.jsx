import { useState } from "react";
import Link from "next/link";

export default function Navbar({ shortCourses, regularCourses, isMenuOpen, setIsMenuOpen }) {
    const [dropdowns, setDropdowns] = useState({
        dropdownOpenHelp: false,
        dropdownOpenRegularCourse: false,
        dropdownOpenShortCourse: false,
        dropdownOpenTeacher: false,
    });

    const handleDropdownToggle = (key) => {
        setDropdowns((prevState) => ({
            dropdownOpenHelp: false,
            dropdownOpenRegularCourse: false,
            dropdownOpenShortCourse: false,
            dropdownOpenTeacher: false,
            [key]: !prevState[key],
        }));
    };

    const handleCloseMenu = (key) => {
        setIsMenuOpen(false);
        setDropdowns((prevState) => ({
            [key]: !prevState[key],
        }));
    };

    return (
<div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden bg-teal-600 m-2 p-4 rounded-xl transition-transform transform ${isMenuOpen ? 'translate-y-2' : '-translate-y-full'} duration-300`}>
<nav className="flex flex-col gap-y-3 text-white">
                <div onClick={() => setIsMenuOpen(false)} className="hover:text-green-400 font-medium cursor-pointer transition-colors duration-200">
                    <Link aria-label="home" href="/">Home</Link>
                </div>

                {/* Subjects Dropdown */}
                <div className="relative ">
                    <div className="flex items-center justify-between">
                            <Link aria-label="subjects" href="/subjects">Subjects</Link>
                        <button aria-label="DropDown toggle" onClick={() => handleDropdownToggle('dropdownOpenRegularCourse')} className="flex items-center text-white hover:text-green-400" type="button">
                            <svg
                                className="w-4 h-4 ml-2 transition-transform duration-200"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>
                    </div>
                    {dropdowns.dropdownOpenRegularCourse && (
                        <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-72 transition-opacity duration-200 opacity-100">
                            <ul className="py-2">
                                <li><Link href="/online-maths-tuition" aria-label="online-maths-tuition" className="block px-4 py-2 hover:bg-gray-100">Maths Tuition</Link></li>
                                <li><Link href="/online-science-tuition" aria-label="online-science-tuition" className="block px-4 py-2 hover:bg-gray-100">Science Tuition</Link></li>
                                <li><Link href="/online-english-tuition" aria-label="online-english-tuition" className="block px-4 py-2 hover:bg-gray-100">English Tuition</Link></li>
                                <li><Link href="/online-computer-science-tuition" aria-label="online-computer-science-tuition" className="block px-4 py-2 hover:bg-gray-100">Computer Science Tuition</Link></li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Language Courses Dropdown */}
                <div className="relative">
                    <div className="flex items-center justify-between">
                        <Link aria-label="language courses" href="/online-language-courses">Language Courses</Link>
                        <button aria-label="Dropdown Toggle" onClick={() => handleDropdownToggle('dropdownOpenShortCourse')} className="flex items-center text-white hover:text-green-400" type="button">
                            <svg
                                className="w-4 h-4 ml-2 transition-transform duration-200"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>
                    </div>
                    {dropdowns.dropdownOpenShortCourse && (
                        <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-72 transition-opacity duration-200 opacity-100">
                            <ul className="py-2">
                                <li><Link aria-label="online arabic course" href="/online-arabic-course" className="block px-4 py-2 hover:bg-gray-100">Arabic Language Course</Link></li>
                                <li><Link aria-label="online urdu course" href="/online-urdu-course" className="block px-4 py-2 hover:bg-gray-100">Urdu Language Course</Link></li>
                                <li><Link aria-label="online esl courses" href="/online-esl-course" className="block px-4 py-2 hover:bg-gray-100">English as a Second Language (ESL)</Link></li>
                                <li><Link aria-label="online persian course" href="/online-persian-course" className="block px-4 py-2 hover:bg-gray-100">Persian Language Course</Link></li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Test Preparation */}
                <div onClick={() => setIsMenuOpen(false)} className="hover:text-green-400 font-medium cursor-pointer transition-colors duration-200">
                    <Link aria-label="online test preparation" href="/online-test-preparation">Test Preparation</Link>
                </div>

                {/* <div onClick={() => setIsMenuOpen(false)} className="hover:text-green-400 font-medium cursor-pointer transition-colors duration-200">
                    <Link href="/blog">Blog</Link>
                </div> */}

                <div onClick={() => setIsMenuOpen(false)} className="hover:text-green-400 font-medium cursor-pointer transition-colors duration-200">
                    <Link aria-label="contact us" href="/contact-us">Contact Us</Link>
                </div>
            </nav>
        </div>
    );
}
