import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.TutorHeroSectionSlice} TutorHeroSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TutorHeroSectionSlice>} TutorHeroSectionProps
 * @type {import("react").FC<TutorHeroSectionProps>}
 */
const TutorHeroSection = ({ slice }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Section - Content */}
        <div className="space-y-6 order-2  ">
          <h1 className="text-3xl font-bold leading-tight text-slate-900">
            {slice.primary.heading}
          </h1>

          <div className="text-gray-700 leading-relaxed text-base space-y-4">
            <PrismicRichText field={slice.primary.desc} />
          </div>

          <div className="flex items-center gap-4 pt-2 flex-wrap">
            <a
              href="/uk/subjects"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
            >
              Explore Subjects
            </a>
<a
  href="/uk/pricing"
  className="px-6 py-3 bg-teal-900 text-white border border-teal-200 
             hover:bg-teal-700 hover:border-teal-300 
             rounded-xl font-medium transition-all duration-300 ease-in-out"
>
  View Pricing
</a>

          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative order-2 ">
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
            <Image
              src={slice.primary.image.url}
              alt={slice.primary.image.alt || "Tutoring"}
              fill
              sizes="(max-width: 768px) 100vw, 
                     (max-width: 1024px) 100vw, 
                     50vw"
              className="object-cover"
              priority
            />
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default TutorHeroSection;