/**
 * @typedef {import("@prismicio/client").Content.LearningOutcomeSectionSlice} LearningOutcomeSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LearningOutcomeSectionSlice>} LearningOutcomeSectionProps
 * @type {import("react").FC<LearningOutcomeSectionProps>}
 */
const LearningOutcomeSection = ({ slice, context }) => {
  const { stage } = context;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Enhanced Header */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Learning Outcomes by End of{" "}
          <span className="text-teal-600">{stage}</span>
        </h2>
        <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full mx-auto"></div>
      </div>

      {/* Horizontal Row of Forms */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 lg:gap-4 max-w-6xl mx-auto overflow-x-auto pb-4">
        {slice.primary.outcomes.map((item, index) => (
          <div
            key={index}
            className="group flex-1 min-w-[200px] sm:min-w-0 bg-white border border-gray-200 rounded-xl sm:rounded-xl p-4 sm:p-3 lg:p-4 hover:border-teal-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center"
          >
            {/* Centered Number Badge */}
            <div className="bg-teal-600 text-white font-bold rounded-full w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex items-center justify-center text-sm sm:text-xs lg:text-sm mb-3 sm:mb-2 group-hover:scale-110 group-hover:bg-teal-700 transition-all duration-300">
              {index + 1}
            </div>
            
            {/* Centered Text */}
            <p className="text-gray-800 font-medium text-sm sm:text-xs lg:text-sm leading-tight sm:leading-snug">
              {item.outcome}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningOutcomeSection;