import { ArrowRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";

const ExamBoards = ({boards,cta}) => {
    

    return (
        <section className="py-16 max-w-5xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-8 text-gray-900 text-center">
                Choose Your <span className="text-teal-600">Exam Board</span>
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {boards.map((board, index) => (
                    <li key={index}>
                        <Link
                            href={board.link}
                            className="group block w-full bg-white border border-gray-200 rounded-xl px-6 py-6
                         text-gray-900 font-medium text-lg tracking-tight shadow-sm
                         transition-transform duration-300 transform hover:-translate-y-1
                         hover:shadow-lg hover:border-teal-600 hover:bg-teal-600 hover:text-white
                         focus:outline-none focus:ring-2 focus:ring-teal-600"
                        >
                            <span className="transition-colors duration-200">
                                {board.name}
                            </span>
                            <span className="float-right text-teal-500 group-hover:text-white group-hover:opacity-80 transition">
                                →
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>

            <p className="mt-10 text-gray-600 text-base font-light text-center hover:text-teal-600">
                <ArrowRightIcon className="w-4 h-4 inline-block text-center" /> {cta}
                
            </p>
        </section>
    );
};

export default ExamBoards;
