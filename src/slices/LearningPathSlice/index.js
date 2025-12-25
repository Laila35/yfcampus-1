/**
 * @typedef {import("@prismicio/client").Content.LearningPathSliceSlice} LearningPathSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LearningPathSliceSlice>} LearningPathSliceProps
 * @type {import("react").FC<LearningPathSliceProps>}
 */
const LearningPathSlice = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="max-w-5xl mx-auto px-4 py-12"
        >
              
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-gray-800">
        {slice.primary.heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {slice.primary.stages.map((stage, index) => (
          <div
            key={index}
            className="bg-teal-100 rounded-3xl p-6 md:p-8 text-center text-teal-800 shadow-sm hover:shadow-md hover:bg-teal-200 transition-all duration-300"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              {stage.age}
            </h3>
            <p className="text-sm md:text-base leading-snug opacity-90">
              {stage.stage}
            </p>
          </div>
        ))}
      </div>
    </section>
        
    );
};

export default LearningPathSlice;
