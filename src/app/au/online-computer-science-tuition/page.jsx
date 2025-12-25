import React from 'react';
import { FaCode, FaLaptopCode, FaBookOpen } from 'react-icons/fa';
export const metadata = {
  title: 'Computer Science | YFC Solutions',
  description: "Explore our comprehensive online web development courses at Your Future Campus Solutions (YFC).",
};
const AuComputerScience = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto font-sans">
      <h1 className="text-4xl font-bold text-center mb-4 text-teal-800">Computer Science Programs for Australian Students</h1>
      <p className="text-lg text-center mb-10">
        At Your Future Campus, we offer comprehensive Computer Science education tailored to the Australian Curriculum, enabling students to thrive in a digital world from Kindergarten through Year 12.
      </p>

      <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Primary School (Kindergarten to Year 6)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Coding Card */}
        <div className="p-5 border border-teal-400 rounded-lg shadow-lg bg-white flex flex-col items-center text-center hover:bg-teal-50 hover:shadow-xl transition duration-200 max-w-xs mx-auto">
          <FaCode className="text-4xl text-teal-600 mb-3" />
          <h3 className="text-2xl font-semibold text-teal-600">Basic Coding</h3>
          <p className="mt-2">
            Introduce students to the fundamentals of coding with fun and engaging activities that spark their interest in technology.
          </p>
        </div>

        {/* Digital Literacy Card */}
        <div className="p-5 border border-teal-400 rounded-lg shadow-lg bg-white flex flex-col items-center text-center hover:bg-teal-50 hover:shadow-xl transition duration-200 max-w-xs mx-auto">
          <FaLaptopCode className="text-4xl text-teal-600 mb-3" />
          <h3 className="text-2xl font-semibold text-teal-600">Digital Literacy</h3>
          <p className="mt-2">
            Teach essential digital skills, including safe internet usage, online research, and effective communication.
          </p>
        </div>

        {/* Computational Thinking Card */}
        <div className="p-5 border border-teal-400 rounded-lg shadow-lg bg-white flex flex-col items-center text-center hover:bg-teal-50 hover:shadow-xl transition duration-200 max-w-xs mx-auto">
          <FaBookOpen className="text-4xl text-teal-600 mb-3" />
          <h3 className="text-2xl font-semibold text-teal-600">Computational Thinking</h3>
          <p className="mt-2">
            Develop problem-solving skills through algorithmic thinking and logical reasoning exercises.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-10">
        <h3 className="text-2xl font-semibold text-teal-600 mb-4">Support Offered:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li className="flex items-center">
            <span className="text-teal-600 mr-2">✔️</span> Homework assistance
          </li>
          <li className="flex items-center">
            <span className="text-teal-600 mr-2">✔️</span> Regular assessments to track progress
          </li>
          <li className="flex items-center">
            <span className="text-teal-600 mr-2">✔️</span> Preparation for NAPLAN in Years 3 and 5
          </li>
        </ul>
      </div>

      {/* Lower Secondary School Section */}
      <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Lower Secondary School (Year 7 to Year 10)</h2>
      <p className="text-lg text-center mb-10">
        Covering intermediate programming, digital technologies, and problem-solving.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Intermediate Programming Card */}
        <div className="p-5 border border-teal-400 rounded-lg shadow-lg bg-white flex flex-col items-center text-center hover:bg-teal-50 hover:shadow-xl transition duration-200 max-w-xs mx-auto">
          <FaCode className="text-4xl text-teal-600 mb-3" />
          <h3 className="text-2xl font-semibold text-teal-600">Intermediate Programming</h3>
          <p className="mt-2">
            Build on foundational coding skills with intermediate programming concepts and projects.
          </p>
        </div>

        {/* Digital Technologies Card */}
        <div className="p-5 border border-teal-400 rounded-lg shadow-lg bg-white flex flex-col items-center text-center hover:bg-teal-50 hover:shadow-xl transition duration-200 max-w-xs mx-auto">
          <FaLaptopCode className="text-4xl text-teal-600 mb-3" />
          <h3 className="text-2xl font-semibold text-teal-600">Digital Technologies</h3>
          <p className="mt-2">
            Explore various digital tools and technologies that are shaping our world today.
          </p>
        </div>

        {/* Problem-Solving Card */}
        <div className="p-5 border border-teal-400 rounded-lg shadow-lg bg-white flex flex-col items-center text-center hover:bg-teal-50 hover:shadow-xl transition duration-200 max-w-xs mx-auto">
          <FaBookOpen className="text-4xl text-teal-600 mb-3" />
          <h3 className="text-2xl font-semibold text-teal-600">Problem-Solving</h3>
          <p className="mt-2">
            Enhance critical thinking skills through various problem-solving activities and challenges.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-10">
        <h3 className="text-2xl font-semibold text-teal-600 mb-4">Support Offered:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li className="flex items-center">
            <span className="text-teal-600 mr-2">✔️</span> Homework assistance
          </li>
          <li className="flex items-center">
            <span className="text-teal-600 mr-2">✔️</span> Preparation for NAPLAN in Year 7 and 9, and other state-specific assessments.
          </li>
          <li className="flex items-center">
            <span className="text-teal-600 mr-2">✔️</span> End-of-year exams preparation
          </li>
          <li className="flex items-center">
            <span className="text-teal-600 mr-2">✔️</span> Internal assessments to monitor progress
          </li>
        </ul>
      </div>

      {/* Senior Secondary School Section */}
      <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">Senior Secondary School (Year 11 to Year 12)</h2>
      <p className="text-lg text-center mb-10">
        Advanced programming, data structures, and preparation for state-specific senior exams.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Advanced Programming Card */}
        <div className="p-5 border border-teal-400 rounded-lg shadow-lg bg-white flex flex-col items-center text-center hover:bg-teal-50 hover:shadow-xl transition duration-200 max-w-xs mx-auto">
          <FaCode className="text-4xl text-teal-600 mb-3" />
          <h3 className="text-2xl font-semibold text-teal-600">Advanced Programming</h3>
          <p className="mt-2">
            Dive into advanced programming concepts, including algorithms and data structures.
          </p>
        </div>

        {/* Data Structures Card */}
        <div className="p-5 border border-teal-400 rounded-lg shadow-lg bg-white flex flex-col items-center text-center hover:bg-teal-50 hover:shadow-xl transition duration-200 max-w-xs mx-auto">
          <FaLaptopCode className="text-4xl text-teal-600 mb-3" />
          <h3 className="text-2xl font-semibold text-teal-600">Data Structures</h3>
          <p className="mt-2">
            Learn about different data structures and their applications in computer science.
          </p>
        </div>

        {/* Exam Preparation Card */}
        <div className="p-5 border border-teal-400 rounded-lg shadow-lg bg-white flex flex-col items-center text-center hover:bg-teal-50 hover:shadow-xl transition duration-200 max-w-xs mx-auto">
          <FaBookOpen className="text-4xl text-teal-600 mb-3" />
          <h3 className="text-2xl font-semibold text-teal-600">Exam Preparation</h3>
          <p className="mt-2">
            Intensive preparation for state-specific exams, including personalized study plans.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-10">
        <h3 className="text-2xl font-semibold text-teal-600 mb-4">Support Offered:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li className="flex items-center">
            <span className="text-teal-600 mr-2">✔️</span> Homework assistance
          </li>
          <li className="flex items-center">
            <span className="text-teal-600 mr-2">✔️</span> Preparation for HSC, VCE, and other state-specific assessments.
          </li>
          <li className="flex items-center">
            <span className="text-teal-600 mr-2">✔️</span> Mock exams and revision sessions
          </li>
          <li className="flex items-center">
            <span className="text-teal-600 mr-2">✔️</span> End-of-year exams preparation
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AuComputerScience;
