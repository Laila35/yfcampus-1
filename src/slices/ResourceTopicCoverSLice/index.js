/**
 * @typedef {import("@prismicio/client").Content.ResourceTopicCoverSLiceSlice} ResourceTopicCoverSLiceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ResourceTopicCoverSLiceSlice>} ResourceTopicCoverSLiceProps
 * @type {import("react").FC<ResourceTopicCoverSLiceProps>}
 */
import * as Icons from "lucide-react";
const ResourceTopicCoverSLice = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
             <section className="my-16 px-4">
                  <h2 className="text-4xl font-bold text-teal-700 text-center mb-12">
                    Topics Covered
                  </h2>
            
                  <div className="max-w-3xl mx-auto space-y-6">
                    {slice.primary.topic.map((topic, index) => {
                      const Icon = Icons[topic.icon] || Icons.Book;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-5 border border-teal-100 rounded-xl shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-200 bg-white"
                        >
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-600 shrink-0">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                              {topic.title}
                            </h3>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
        </section>
    );
};

export default ResourceTopicCoverSLice;
