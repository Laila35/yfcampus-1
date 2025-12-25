/**
 * @typedef {import("@prismicio/client").Content.SkillDevelopedSlice} SkillDevelopedSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SkillDevelopedSlice>} SkillDevelopedProps
 * @type {import("react").FC<SkillDevelopedProps>}
 */
const SkillDeveloped = ({ slice }) => {
    const skills = slice.primary.learn_skill.map((i) => i.skill);
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="max-w-6xl mx-auto py-16 px-6"
        >
           
      <h2 className="text-3xl font-semibold text-center mb-12">
       {slice.primary.heading}
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-6 py-3 border border-gray-200 rounded-full text-gray-800 text-base"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
        
    );
};

export default SkillDeveloped;
