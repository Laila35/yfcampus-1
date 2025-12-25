/**
 * @typedef {import("@prismicio/client").Content.SkillWeDevelopeSLiceSlice} SkillWeDevelopeSLiceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SkillWeDevelopeSLiceSlice>} SkillWeDevelopeSLiceProps
 * @type {import("react").FC<SkillWeDevelopeSLiceProps>}
 */
import * as Icons from "lucide-react";
const SkillWeDevelopeSLice = ({ slice }) => {
    console.log(slice.primary.skills)
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="max-w-6xl mx-auto px-4 py-10"
        > 
                  <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
                    {slice.primary.heading}
                  </h2>
            
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {slice.primary.skills.map((skill, index) => {
                      const Icon = Icons[skill.icon];
                      return (
                        <div
                          key={index}
                          className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 p-5 flex flex-col items-center text-center"
                        >
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${skill.color}`}
                          >
                            <Icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-base font-semibold mb-2 text-gray-800">
                            {skill.area}
                          </h3>
                          <p className="text-gray-600 text-sm leading-snug">
                            {skill.activities}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                
        </section>
    );
};

export default SkillWeDevelopeSLice;
