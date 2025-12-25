import { PrismicRichText } from "@prismicio/react";
import * as icons from "lucide-react";
/**
 * @typedef {import("@prismicio/client").Content.TutorTeachingStyleSlice} TutorTeachingStyleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TutorTeachingStyleSlice>} TutorTeachingStyleProps
 * @type {import("react").FC<TutorTeachingStyleProps>}
 */
const TutorTeachingStyle = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="max-w-5xl mx-auto px-6 py-12"
        >
             
        
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold mb-3">{slice.primary.heading}</h2>
                <div className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                  <PrismicRichText field={slice.primary.desc} />
                </div>
              </div>
        
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {slice.primary.points.map((item, index) => {
                  const Icon = icons[item.icon];
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-teal-50 p-4 rounded-2xl shadow-sm hover:shadow-md transition"
                    >
                      <div className="text-teal-600">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-medium text-gray-700">
                        {item.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </section>
    );
};

export default TutorTeachingStyle;
