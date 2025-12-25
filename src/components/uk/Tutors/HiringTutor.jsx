import React from "react";
import {
    Calculator,
    BookOpen,
    Cpu,
    Globe,
    Smile,
    Mic,
    ArrowRight,
    FlaskConical,
    GraduationCap,
} from "lucide-react";
import Link from "next/link";

export default function SubjectsHiring() {
    const subjects = [
        {
            key: "maths",
            title: "Maths Tutors",
            detail: "KS2 to A-Level",
            icon: <Calculator className="w-6 h-6" />,
        },
        {
            key: "english",
            title: "English Tutors",
            detail: "Reading, Writing, Literature",
            icon: <BookOpen className="w-6 h-6" />,
        },
        {
            key: "science",
            title: "Science Tutors",
            detail: "Physics, Chemistry, Biology",
            icon: <FlaskConical className="w-6 h-6" />,
        },
        {
            key: "computer",
            title: "Computer Science & Coding Tutors",
            detail: null,
            icon: <Cpu className="w-6 h-6" />,
        },
        {
            key: "language",
            title: "Language Tutors",
            detail: "Arabic, Urdu, Persian, ESL",
            icon: <Globe className="w-6 h-6" />,
        },
        {
            key: "early",
            title: "Early Learning & Primary Teachers",
            detail: null,
            icon: <Smile className="w-6 h-6" />,
        },
        {
            key: "spoken",
            title: "Spoken English Coaches",
            detail: null,
            icon: <Mic className="w-6 h-6" />,
        },
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 py-20 bg-white">
         
                
                   
                    <div className="text-center my-10">
                      <h2 className="text-3xl font-bold text-gray-900 ">
                        Subjects We're Hiring For
                    </h2>
                    </div>
          
         

            {/* Subjects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                {subjects.map((subject) => (
                    <div
                        key={subject.key}
                        className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-teal-300 hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                        <div className="flex items-start space-x-4">
                            {/* Icon */}
                            <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors duration-300">
                                <div className="text-teal-600">
                                    {subject.icon}
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-gray-900 text-sm mb-2 leading-tight">
                                    {subject.title}
                                </h3>
                                {subject.detail && (
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {subject.detail}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center">
                <Link href="/uk/subjects">
                <button className="inline-flex items-center gap-2 px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300 shadow-sm">
                    View All Subjects
                    <ArrowRight className="w-4 h-4" />
                </button>
                </Link>
            </div>
        </section>
    );
}