import { Inter, Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const HeroSection = ({ title, description, imageSrc }) => {
  const [firstPart, secondPart] = title.split("–");

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      
      {/* Left — Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6 md:space-y-8 z-10">
        {/* Split Heading */}
        <h1 className={`text-3xl   font-semibold tracking-tight leading-tight ${poppins.className}`}>
          <span className="block text-black">{firstPart}</span>
          <span className="block text-teal-600">{secondPart}</span>
        </h1>

        {/* Description */}
        <p className={` text-gray-600 leading-relaxed ${inter.className}`}>
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-4 md:mt-6">
          <a
            href="/uk/book-lesson"
            className="inline-block px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
          >
            Book a Free Trial
          </a>
          <a
            href="/uk/pricing"
            className="inline-block px-6 py-3 border border-teal-600 text-teal-600 font-semibold rounded-xl hover:bg-teal-50 transition-colors"
          >
            View Pricing
          </a>
        </div>
      </div>

      {/* Right — Image */}
     <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10 flex-shrink-0">
  <div className="relative w-full max-w-[560px] sm:max-w-[420px] md:max-w-[560px] rounded-3xl shadow-2xl overflow-hidden aspect-[3/2] sm:aspect-[4/3]">
    <Image
      src={imageSrc}
      alt="Hero Illustration"
      fill
      className="object-cover"
      priority
    />
  </div>
</div>

</section>
       
  );
};

export default HeroSection;
