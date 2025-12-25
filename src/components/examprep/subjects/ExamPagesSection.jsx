import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/solid";

const ExamPagesSection = ({ exams }) => {
  

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Exam <span className="text-teal-600">Preparation</span> Pages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam, idx) => (
            <Link
              key={idx}
              href={exam.link}
              className="group p-6 rounded-2xl border border-gray-200 hover:border-teal-500 hover:shadow-lg transition-all bg-white flex flex-col justify-between text-left"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 group-hover:text-teal-700">
                {exam.title}
              </h3>
              <div className="flex items-center text-teal-600 font-medium group-hover:translate-x-1 transition-transform">
                {exam.text}
                <ArrowRightIcon className="h-5 w-5 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamPagesSection;
