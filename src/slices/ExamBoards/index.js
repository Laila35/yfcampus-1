import { PrismicRichText } from "@prismicio/react";
import { ArrowRight } from "lucide-react";

/**
 * @typedef {import("@prismicio/client").Content.ExamBoardsSlice} ExamBoardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExamBoardsSlice>} ExamBoardsProps
 * @type {import("react").FC<ExamBoardsProps>}
 */
const ExamBoards = ({ slice ,context}) => {
    const{stage} = context;
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="py-2 px-6 md:px-10 text-center mx-auto max-w-6xl"
        >
          
      {/* Heading */}
      <h2 className="text-3xl   font-bold text-gray-900 mb-4">
        {slice.primary.heading?slice.primary.heading:"Exam Boards Alignment"}
      </h2>

      {/* Description */}
      <div className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-12">
        <PrismicRichText field={slice.primary.desc} />
      </div>

      {/* Board List */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {slice.primary.examboards.map((item, index) => (
          <li key={index}>
            <a
              href={item.href || "#"}
              className="group block relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-transparent hover:bg-gradient-to-br hover:from-teal-50 hover:to-cyan-50 overflow-hidden"
             
            >
              {/* Content */}
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-teal-700 group-hover:text-teal-800 transition-colors duration-300 text-left">
                  {item.board}
                </h3>
                <ArrowRight
                  className="w-6 h-6 text-teal-600 transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
                  aria-hidden="true"
                />
              </div>

              {/* Subtle glow border on hover */}
              <span className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-teal-400/50 pointer-events-none transition-all duration-300"></span>

              {/* Shine effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transition-transform duration-700 skew-x-12"></span>
            </a>
          </li>
        ))}
      </ul>
    </section>
        
    );
};

export default ExamBoards;
