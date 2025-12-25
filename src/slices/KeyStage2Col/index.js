import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.KeyStage2ColSlice} KeyStage2ColSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<KeyStage2ColSlice>} KeyStage2ColProps
 * @type {import("react").FC<KeyStage2ColProps>}
 */
const KeyStage2Col = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="py-16" id="key-stages"
        >
            
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Key Stages We Cover
        </h2>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {slice.primary.stages.map((stage, index) => (
            <div
              key={index}
              className="bg-white border border-teal-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-2xl font-bold text-teal-600 mb-2">
                {stage.title}
              </h3>
              <p className="text-gray-700 font-medium mb-3">{stage.subtitle}</p>
              <div className="text-gray-600 leading-relaxed"> <PrismicRichText field={stage.desc} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
        
    );
};

export default KeyStage2Col;
