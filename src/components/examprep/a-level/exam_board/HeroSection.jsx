"use client";
import Image from "next/image";
import React from "react";

const HeroSection = ({ title, subtitle, description, image, image_alt }) => {
    return (
        <section className="relative py-20 px-6 md:px-16 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 relative z-10">
                {/* Left: Text Section */}
                <div className="text-left order-2 md:order-1">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-700 leading-tight mb-6">
                        {title}
                    </h1>

                    <h3 className="text-lg sm:text-xl text-gray-800 font-semibold mb-4">
                        {subtitle}
                    </h3>

                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                        {description}
                    </p>
                </div>

                {/* Right: Hero Image */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                    <div className="relative w-[280px] sm:w-[400px] md:w-[480px] aspect-square rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={image}
                            alt={image_alt}
                            fill
                            sizes="(max-width: 768px) 80vw, 40vw"
                            priority
                            className="object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
