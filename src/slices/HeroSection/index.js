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
      className="bg-white pt-4 sm:pt-8 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto" // Reduced top padding
    >
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"> {/* Increased gap between columns */}
        
        {/* LEFT COLUMN */}
        <div className="space-y-6 text-center md:text-left"> {/* Increased space-y */}
          <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold leading-tight"> {/* Slightly smaller on mobile */}
            <span className="text-gray-900">KS1 Maths Tuition – </span>
            <span className="text-teal-600">Reception, Year 1 & Year 2</span>
          </h1>

          <div className="text-gray-600 text-sm sm:text-base leading-relaxed tracking-tight mb-4"> {/* Added margin-bottom */}
            <PrismicRichText field={slice.primary.desc} />
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start"> {/* Increased gap and padding-top */}
            {slice.primary.cta?.url && (
              <a href={slice.primary.cta.url}>
                <button className="bg-teal-600 text-white px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-xl font-medium hover:bg-teal-700 transition-all shadow-sm hover:shadow-md text-sm"> {/* Smaller button */}
                  {slice.primary.cta.text}
                </button>
              </a>
            )}

            {slice.primary.meet_our_tutor?.url && (
              <a href={slice.primary.meet_our_tutor.url}>
                <button className="border border-teal-600 text-teal-600 px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-xl font-medium hover:bg-teal-50 transition-all shadow-sm hover:shadow-md text-sm"> {/* Smaller button */}
                  {slice.primary.meet_our_tutor.text}
                </button>
              </a>
            )}
          </div>
        </div>
        
        {/* RIGHT COLUMN - FORM WITH REDUCED WIDTH */}
        <div className="bg-white w-full p-5 rounded-xl shadow-lg border border-gray-100 max-w-sm mx-auto md:mx-0 md:ml-auto md:translate-x-0 lg:translate-x-8"> {/* Removed excessive translate-x */}
          <ContactForm />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;