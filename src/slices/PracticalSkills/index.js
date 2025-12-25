import { Check } from "lucide-react";

/**
 * @typedef {import("@prismicio/client").Content.PracticalSkillsSlice} PracticalSkillsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PracticalSkillsSlice>} PracticalSkillsProps
 * @type {import("react").FC<PracticalSkillsProps>}
 */
 

const PracticalSkills = ({ slice }) => {
    const skills = slice.primary.practical_skills.map((i) => i.skill);
    
    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl   font-bold text-gray-900 mb-4">
                    {slice.primary.heading}
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full mx-auto mb-6"></div>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {slice.primary.subline}
                </p>
            </div>

            {/* Skills Grid - Unique Circular Design */}
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Background Pattern */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <div className="relative z-10 flex items-center gap-4">
                                {/* Icon Container */}
                                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                                    <Check 
                                        className="text-teal-600 group-hover:text-white transition-colors duration-300"
                                        size={20} 
                                    />
                                </div>
                                
                                {/* Skill Text */}
                                <span className="text-gray-800 font-medium text-sm sm:text-base leading-relaxed">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Text */}
            <div className="max-w-3xl mx-auto mt-10 sm:mt-14 lg:mt-16 text-center">
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    {slice.primary.closingline}
                </p>
            </div>
        </section>
    );
};

export default PracticalSkills;