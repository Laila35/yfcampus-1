import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.Level1KeyStagesSlice} Level1KeyStagesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<Level1KeyStagesSlice>} Level1KeyStagesProps
 * @type {import("react").FC<Level1KeyStagesProps>}
 */
const Level1KeyStages = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="py-20 px-6 md:px-12  "
        >
            
      <h2 className="text-3xl   font-bold text-gray-900 text-center mb-16">
        Key Stages & Focus Areas
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {slice.primary.stages.map((stage, index) => (
          <div
            key={index}
            className="relative bg-white p-8 rounded-3xl border border-teal-100 
            shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            {/* Accent strip */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-500 to-teal-800 rounded-t-3xl"></div>

            {/* Content */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-teal-700 mb-3">
                {stage.title}
              </h3>
              <div className="text-gray-700 leading-relaxed text-[15px]">
                <PrismicRichText field={stage.desc} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
       
    );
};

export default Level1KeyStages;
