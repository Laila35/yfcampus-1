import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
// Import the form component
import ContactForm from "@/components/ContactForm";

/**
 * @typedef {import("@prismicio/client").Content.HeroSectionSlice} HeroSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSectionSlice>} HeroSectionProps
 * @type {import("react").FC<HeroSectionProps>}
 */
const HeroSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white px-0 sm:px-8 lg:px-20 max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-0 items-start">
        {/* LEFT COLUMN */}
        <div className="space-y-2 text-center md:text-left pr-0">
          <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold leading-tight">
            <span className="text-gray-900">KS1 Maths Tuition – </span>
            <span className="text-teal-600">Reception, Year 1 & Year 2</span>
          </h1>

          <div className="text-gray-600 text-sm sm:text-base leading-relaxed tracking-tight">
            <PrismicRichText field={slice.primary.desc} />
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-1.5 justify-center md:justify-start">
            {slice.primary.cta?.url && (
              <a href={slice.primary.cta.url}>
                <button className="bg-teal-600 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-xl font-medium hover:bg-teal-700 transition-all shadow-sm hover:shadow-md text-sm">
                  {slice.primary.cta.text}
                </button>
              </a>
            )}

            {slice.primary.meet_our_tutor?.url && (
              <a href={slice.primary.meet_our_tutor.url}>
                <button className="border border-teal-600 text-teal-600 px-4 py-2 sm:px-5 sm:py-2 rounded-xl font-medium hover:bg-teal-50 transition-all shadow-sm hover:shadow-md text-sm">
                  {slice.primary.meet_our_tutor.text}
                </button>
              </a>
            )}
          </div>
        </div>
        
        {/* RIGHT COLUMN - FORM */}
        <div className="bg-white w-full p-4 rounded-xl shadow-lg border border-gray-100 max-w-md md:max-w-lg mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;