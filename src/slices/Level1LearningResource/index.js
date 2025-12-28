import Link from "next/link";

/**
 * @typedef {import("@prismicio/client").Content.Level1LearningResourceSlice} Level1LearningResourceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<Level1LearningResourceSlice>} Level1LearningResourceProps
 * @type {import("react").FC<Level1LearningResourceProps>}
 */
const Level1LearningResource = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="py-6 px-6 md:px-10 mx-auto max-w-7xl"
        >
          
                  {/* Header */}
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {slice.primary.heading}
                    </h2>
                  </div>
            
                  {/* Text-Only Cards – 5 Columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
                    {slice.primary.resources.map((item, index) => (
                      <div
                        key={index}
                        className="group relative bg-white rounded-2xl py-8 px-4 
                          shadow-md hover:shadow-2xl transition-all duration-300 
                          border border-gray-200 hover:border-teal-600 
                          hover:-translate-y-2 origin-center 
                          flex items-center justify-center text-center"
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        {/* Title – Adjusted for no icon */}
                        <h3 className="text-base font-semibold text-gray-800 leading-tight px-2">
                          {item.resource}
                        </h3>
            
                        {/* Solid Hover Border */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent 
                          group-hover:border-teal-600 pointer-events-none 
                          transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
            
                  {/* CTA Buttons – No icon */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {slice.primary.resource_link.map(({link}, index) => (
                      <Link
                        key={index}
                        href={link.url || "#"}
                        className="group flex items-center gap-3 px-6 py-3 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 hover:shadow-xl transition-all duration-300 hover:scale-105 focus-visible:ring-4 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                      >
                        <span>{link.text}</span>
                        <svg
                          className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                
        </section>
    );
};

export default Level1LearningResource;
