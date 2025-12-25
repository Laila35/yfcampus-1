import React from "react";

const HeroSection = ({ title, subtitle, description }) => {
    return (
        <section className="  py-20 px-6 sm:px-8 lg:px-12 text-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8">
                {/* Main Heading */}
                <h1 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-gray-900">
                    {title.split(" – ")[0]} <br />
                    <span className="text-teal-600">
                        {title.split(" – ")[1]}
                    </span>
                </h1>

                {/* Subheading */}
                <h2 className="  font-medium italic text-gray-800">
                    {subtitle}
                </h2>

                {/* Paragraph */}
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
