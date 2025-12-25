import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.ResourceHeroSectionSlice} ResourceHeroSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ResourceHeroSectionSlice>} ResourceHeroSectionProps
 * @type {import("react").FC<ResourceHeroSectionProps>}
 */
const ResourceHeroSection = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="relative max-w-6xl mx-auto py-32 px-6 sm:px-12 lg:px-24 text-center bg-cover bg-center bg-no-repeat my-10 rounded-3xl overflow-hidden"
      style={{
        backgroundImage: `url(${slice.primary.image.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center ",
      }}
        >
              
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
           {slice.primary.heading}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-6">
          {slice.primary.subline}
        </h2>
        <div className="text-lg sm:text-xl md:text-2xl mb-8">
          <PrismicRichText field={slice.primary.desc} />
        </div>
        <a
          href="/maths-resources"
          className="inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Explore Resources
        </a>
      </div>
    </section>
             
             
      
    );
};

export default ResourceHeroSection;
