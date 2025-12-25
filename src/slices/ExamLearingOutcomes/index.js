import { CheckCircle2 } from "lucide-react";

/**
 * @typedef {import("@prismicio/client").Content.ExamLearingOutcomesSlice} ExamLearingOutcomesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExamLearingOutcomesSlice>} ExamLearingOutcomesProps
 * @type {import("react").FC<ExamLearingOutcomesProps>}
 */
const ExamLearingOutcomes = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                    <h2 className="text-3xl   font-bold mb-4 sm:mb-6 text-teal-700 tracking-tight">
                        Learning Outcomes
                    </h2>
                    <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed px-4">
                        {slice.primary.title}
                    </p>
                </div>

                {/* Outcomes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {slice.primary.outcomes.map((item, index) => (
                        <div
                            key={index}
                            className="group relative flex items-start gap-3 sm:gap-4 bg-gradient-to-br from-white to-teal-50/30 p-5 sm:p-6 lg:p-7 rounded-md shadow-sm border border-teal-100/50 hover:shadow-xl hover:border-teal-200 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Icon with animated background */}
                            <div className="relative flex-shrink-0">
                                <div className="absolute inset-0 bg-teal-100 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CheckCircle2 className="relative w-6 h-6 sm:w-7 sm:h-7 text-teal-600 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                            </div>

                            {/* Text Content */}
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1">
                                {item.outcome}
                            </p>

                            {/* Straight accent line */}
                            <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-teal-500 to-teal-300 w-0 group-hover:w-full transition-all duration-500 rounded-md"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExamLearingOutcomes;