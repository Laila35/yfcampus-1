import { PrismicRichText } from "@prismicio/react";
import { CheckCircle } from "lucide-react";

/**
 * @typedef {import("@prismicio/client").Content.LearnigOutcomeSlice} LearnigOutcomeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LearnigOutcomeSlice>} LearnigOutcomeProps
 * @type {import("react").FC<LearnigOutcomeProps>}
 */
const LearnigOutcome = ({ slice }) => {
    const outcomes = slice.primary.outcome.map((o) => o.outcome);
    
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="py-20 px-4 sm:px-8 md:px-16 bg-white flex flex-col items-center"
        > 
            {/* Heading */}
            <h2 className="text-3xl font-bold text-center text-black mb-10 tracking-tight">
                {slice.primary.heading ? slice.primary.heading : "Learning Outcomes"}
            </h2>

            {/* Horizontal Outcomes Container */}
            <div className="max-w-6xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {outcomes.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-200 hover:border-teal-400 hover:shadow-md transition-all duration-300 bg-white"
                        >
                            <div className="mb-4">
                                <CheckCircle
                                    className="text-teal-500 w-10 h-10"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="text-gray-900 font-medium text-base sm:text-lg leading-relaxed">
                                <PrismicRichText field={item} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearnigOutcome;