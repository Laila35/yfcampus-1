import React from "react";
import { PrismicRichText } from "@prismicio/react";

const LevelHero = ({ hero }) => {
    const words = hero.title?.split(" ") || [];
    const lastWord = words.pop(); // take out the last word
    const firstPart = words.join(" ");
    return (
        <section className="relative   py-12">
            <div className="max-w-4xl mx-auto text-center px-6">
                {/* Title */}
                <h1 className="text-2xl sm:text-4xl font-semibold mb-6 leading-tight">
                    {firstPart}{" "}
                    <span className="text-teal-500">{lastWord}</span>
                </h1>

                {/* Subline */}
                <p className="text-xl text-gray-700 mb-8">{hero.subline}</p>

                {/* Description */}
                <div className="prose prose-sm leading-7 text-gray-600 mx-auto">
                    <PrismicRichText field={hero.description} />
                </div>

                {/* CTA Buttons */}
                <div className="mt-10 flex justify-center gap-4">
                    <a
                        href="#courses"
                        className=" rounded-lg bg-gradient-to-r from-[#006666] to-[#00332d] text-white  hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#00332d] hover:to-[#006666] px-6 py-2 shadow-lg transition"
                    >
                        Explore Courses
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LevelHero;
