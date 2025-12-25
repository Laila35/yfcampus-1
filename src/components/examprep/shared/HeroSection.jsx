import Image from "next/image";
import React from "react";

const HeroSection = ({title,desc, subheading,image}) => {
    return (
        <section className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12 p-6 md:p-12   rounded-3xl   overflow-hidden">
            {/* Image Section */}

            {/* Content Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-gray-800">
                <h1 className="font-semibold   text-gray-900   text-3xl drop-shadow-sm">
                    {title}
                </h1>

                <h3 className="text-[clamp(1rem,2.2vw,1.25rem)] font-semibold text-gray-700">
                     {subheading[0]?.text}
                </h3>

                <p className="text-sm md:text-base leading-relaxed text-gray-600">
                   {desc[0]?.text}
                </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                    <Image
                        src={image?.url}
                        alt={image?.alt}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
