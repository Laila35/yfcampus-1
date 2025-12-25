import Image from "next/image";
import React from "react";

const ReviewHeroSection = ({ title, subtitle, description,imageUri }) => {
    return (
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12 gap-10">
            {/* Left Section - Text */}
            <div className="flex-1 space-y-4">
                <h1 className="text-3xl    font-bold leading-tight">
                    {title}
                </h1>

                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                   {subtitle}
                </h3>

                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                   {description}
                </p>
            </div>

            {/* Right Section - Image */}
            <div className="flex-1 relative w-full min-h-[250px] md:min-h-[400px]">
                <Image
                    src={imageUri}
                    alt="tutoring"
                    fill
                    className="object-cover rounded-2xl shadow-lg"
                    priority
                />
            </div>
        </section>
    );
};

export default ReviewHeroSection;
