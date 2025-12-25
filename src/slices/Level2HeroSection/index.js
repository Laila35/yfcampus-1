import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import LandingRegister from "@/components/ContactForm";

const Level2HeroSection = ({ slice }) => {
    // Extract title and split at the dash
    const title = slice.primary.title || "";
    const parts = title.split("–");
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="relative overflow-hidden bg-white py-16 lg:py-20"
        >
             
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
        
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl font-bold mb-5 leading-snug">
            {parts.length > 1 ? (
              <>
                <span className="text-teal-600">{parts[0].trim()}</span>
                <span className="text-gray-900"> – {parts[1].trim()}</span>
              </>
            ) : (
              <span className="text-gray-900">{title}</span>
            )}
          </h1>

          <div className="text-gray-700 text-base mb-7 leading-relaxed max-w-xl mx-auto lg:mx-0">
            <PrismicRichText field={slice.primary.desc} />
           </div>

          <Link
            href={slice.primary.cta.url || "#"}
            className="inline-block bg-teal-600 text-white font-semibold px-7 py-3.5 rounded-xl shadow-md hover:bg-teal-700 transition-all"
          >
            {slice.primary.cta.text}
          </Link>
        </div>

        {/* Form Section - Reduced width */}
        <div className="flex-1 max-w-md lg:max-w-sm">
          <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
            <LandingRegister />
          </div>
        </div>
       
      </div>
     
        </section>
    );
};

export default Level2HeroSection;