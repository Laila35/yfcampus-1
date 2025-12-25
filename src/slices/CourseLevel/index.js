import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.CourseLevelSlice} CourseLevelSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CourseLevelSlice>} CourseLevelProps
 * @type {import("react").FC<CourseLevelProps>}
 */
const CourseLevel = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="my-16 px-6 md:px-10"
        >
        
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
       {slice.primary.heading? slice.primary.heading:" Course Levels  "}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {slice.primary.levels.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-teal-50 to-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-teal-100"
          >
            <h3 className="text-xl font-bold text-teal-600 mb-2">
              {item.level}
            </h3>
            <p className="text-gray-700 font-medium mb-2">
              {item.suitablefor}
            </p>
            <div className="text-gray-600 text-sm leading-relaxed">
               <PrismicRichText field={item.desc} />
            </div>
          </div>
        ))}
      </div>
   
        </section>
    );
};

export default CourseLevel;
