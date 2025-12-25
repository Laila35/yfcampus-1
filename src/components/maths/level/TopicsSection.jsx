"use client";
import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
const TopicsSection = ({ topics = [] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    if (!topics || topics.length === 0) {
        return null;
    }

    return (
        <section className="bg-gray-50 py-12 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
                    Topics <span className="text-teal-600">We Cover</span>
                </h2>

                {/* Tabs */}
                <div className="flex justify-center gap-6 mb-6 flex-wrap">
                    {topics.map((topic, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`px-6 py-1 rounded-2xl font-semibold transition-all ${
                                activeIndex === idx
                                    ? "bg-gradient-to-r from-[#006666] to-[#00332d] text-white shadow-lg"
                                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                            }`}
                        >
                            {topic.year}
                        </button>
                    ))}
                </div>

                {/* Active Content */}
                <div className="bg-white rounded-2xl   p-8 border border-gray-100">
                    <Link
                        href={topics[activeIndex].link}
                        className="block text-xl font-bold text-teal-600 text-center hover:underline mb-8"
                    >
                        {topics[activeIndex].year} Topics
                    </Link>

                    {/* Grid Items */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {topics[activeIndex].items?.map((item, i, arr) => (
                            <li
                                key={i}
                                className={`flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition
                ${arr.length % 2 === 1 && i === arr.length - 1 ? "sm:col-span-2 justify-center" : ""}`}
                            >
                                <CheckCircleIcon className="h-6 w-6 text-teal-600 flex-shrink-0" />
                                <span className="text-gray-800">
                                    {typeof item === "string"
                                        ? item
                                        : item.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default TopicsSection;
