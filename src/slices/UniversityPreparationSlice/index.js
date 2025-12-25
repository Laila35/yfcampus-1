/**
 * @typedef {import("@prismicio/client").Content.UniversityPreparationSliceSlice} UniversityPreparationSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<UniversityPreparationSliceSlice>} UniversityPreparationSliceProps
 * @type {import("react").FC<UniversityPreparationSliceProps>}
 */
import Link from "next/link";
import * as Icons from "lucide-react";
const UniversityPreparationSlice = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
        >
            
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
        {slice.primary.heading}
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {slice.primary.items.map((item,index) => {
          const IconComponent = Icons[item.icon] || Icons.BookOpen;
          return (
            <div
              key={index}
              className="group bg-white rounded-xl border border-gray-100 
                         shadow-sm hover:shadow-md hover:-translate-y-0.5 
                         transition-all duration-300 text-center 
                         p-6 flex flex-col items-center justify-center"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-50 group-hover:bg-teal-100 transition">
                <IconComponent className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="mt-4 text-[15px] md:text-base font-semibold text-gray-800 leading-snug">
                {item.item}
              </h3>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10">
        <Link
          href={slice.primary.cta.url || "#"}
          className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 
                     text-white font-semibold py-2.5 px-6 rounded-full text-sm 
                     transition-colors duration-300"
        >
          <span>{slice.primary.cta.text}</span>
          <Icons.ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
        
    );
};

export default UniversityPreparationSlice;
