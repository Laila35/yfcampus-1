/**
 * @typedef {import("@prismicio/client").Content.Level1TutorsSlice} Level1TutorsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<Level1TutorsSlice>} Level1TutorsProps
 * @type {import("react").FC<Level1TutorsProps>}
 */
import { PrismicRichText } from "@prismicio/react";
import * as Icons from "lucide-react";
const Level1Tutors = ({ slice,context }) => {
    const{stage} = context;
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="py-20 px-6 md:px-10 bg-gray-50/0"
        >
         
                  <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      Meet Our <span className="text-teal-600">{stage.charAt(0).toUpperCase() + stage.slice(1)} Tutors</span>
                    </h2>
            
                    <p className="text-gray-700 mb-12 text-lg max-w-3xl mx-auto">
                      {slice.primary.subline}
                    </p>
            
                    {/* Feature Grid */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                      {slice.primary.qualities.map((item, index) => {
                        const IconComponent = Icons[item.icon]; // dynamically select icon
                        return (
                          <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-teal-200"
                          >
                            <div className="flex flex-col items-center gap-4 text-center">
                              {IconComponent && <IconComponent className="w-7 h-7 text-teal-600" />}
                              <p className="text-gray-800 font-medium">{item.title}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
            
                    {/* Quote Section */}
                    <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-teal-100">
                      <blockquote className="italic text-gray-700 text-lg leading-relaxed">
                        <PrismicRichText field={slice.primary.quote} />
                      </blockquote>
                      <p className="mt-4 text-sm text-teal-700 font-semibold">
                        {slice.primary.author_name}
                      </p>
                    </div>
                  </div>
            
        </section>
    );
};

export default Level1Tutors;
