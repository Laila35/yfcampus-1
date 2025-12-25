import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.Level1AlevelFocusSlice} Level1AlevelFocusSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<Level1AlevelFocusSlice>} Level1AlevelFocusProps
 * @type {import("react").FC<Level1AlevelFocusProps>}
 */
const Level1AlevelFocus = ({ slice,context }) => {
    const topics=slice.primary.topics.map((item)=>item.topic)
    const{stage}=context
    const isOdd = topics.length % 2 !== 0; // check if odd number of topics
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="max-w-6xl mx-auto px-6 py-20"
        >
              <section >
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl  font-bold text-gray-900 dark:text-white">
         A-Level {stage} Focus

        </h1>
        <div className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          <PrismicRichText field={slice.primary.subline} />
        </div>
      </div>

      {/* Topic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
        {topics.map((topic, index) => {
          // if odd count and this is the last element → center it
          const isLastOdd = isOdd && index === topics.length - 1;
          return (
            <div
              key={index}
              className={`px-4 py-4 rounded-full border border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 font-medium hover:bg-teal-100 dark:hover:bg-teal-800/30 transition-all ${
                isLastOdd ? "md:col-span-3 md:justify-self-center w-fit mx-auto" : ""
              }`}
            >
              {index + 1}. {topic}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
        <PrismicRichText field={slice.primary.closingline} />
      </div>
    </section>
 
        </section>
    );
};

export default Level1AlevelFocus;
