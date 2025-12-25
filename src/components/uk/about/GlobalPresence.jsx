"use client";
import React from "react";
import { MapPin } from "lucide-react";

const GlobalPresence = () => {
    const regions = [
        {
            flag: "🇬🇧",
            country: "United Kingdom",
            desc: "KS1–A-Level students following the National Curriculum",
        },
        {
            flag: "🇺🇸",
            country: "United States",
            desc: "Aligned with Common Core and AP courses",
        },
        {
            flag: "🇨🇦",
            country: "Canada & Australia",
            desc: "International British curriculum students",
        },
        {
            flag: "🌏",
            country: "Europe & Middle East",
            desc: " Bilingual and ESL learners",
        },
    ];
    return (
        <section className="max-w-5xl mx-auto px-6 py-16">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-14">
                <h2 className="text-3xl   font-bold  ">Our Global Presence</h2>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mt-3 leading-relaxed">
                    Though proudly based in the UK, we serve students across:
                </p>
            </div>

            {/* Regions Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
                {regions.map((region, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-5 p-6 rounded-xl border border-teal-200 hover:bg-teal-50 transition-all duration-300"
                    >
                        <div className="flex items-center justify-center w-12 h-12 text-2xl font-semibold rounded-full bg-teal-100 text-teal-700">
                            {region.flag}
                        </div>
                        <div>
                            <h3 className="flex items-center gap-2 text-lg font-semibold text-teal-700 mb-1">
                                <MapPin className="w-5 h-5 text-teal-500" />{" "}
                                {region.country}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {region.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GlobalPresence;
