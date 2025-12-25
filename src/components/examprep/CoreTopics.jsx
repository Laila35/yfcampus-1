// components/CoreTopics.jsx
import React from "react";
import { Infinity, BarChart3, Cog, ArrowRight } from "lucide-react";

const CoreTopics = () => {
    const topics = [
        {
            icon: <Infinity className="w-8 h-8" />,
            title: "Pure Maths",
            desc: "Algebra, Calculus, Sequences, Trigonometry, Logarithms",
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Statistics",
            desc: "Data Analysis, Probability, Hypothesis Testing, Normal Distribution",
        },
        {
            icon: <Cog className="w-8 h-8" />,
            title: "Mechanics",
            desc: "Kinematics, Forces, Newton’s Laws, Moments, Projectiles",
        },
    ];

    return (
        <section className="bg-white text-gray-900 p-8 rounded-xl shadow-lg mt-8 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-800">
                Core Topics Covered
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {topics.map((topic, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition duration-200"
                    >
                        <div className="text-blue-600">{topic.icon}</div>
                        <h3 className="font-semibold text-lg text-gray-800">
                            {topic.title}
                        </h3>
                        <p className="text-sm text-gray-600">{topic.desc}</p>
                    </div>
                ))}
            </div>

            <p className="text-center mt-6 text-sm text-blue-600 cursor-pointer hover:underline flex items-center justify-center gap-1">
                <ArrowRight className="w-4 h-4" />
                View Detailed Topic Lists: Pure • Statistics • Mechanics
            </p>
        </section>
    );
};

export default CoreTopics;
