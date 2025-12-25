/**
 * @typedef {import("@prismicio/client").Content.ScienceExamBoardSlice} ScienceExamBoardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ScienceExamBoardSlice>} ScienceExamBoardProps
 * @type {import("react").FC<ScienceExamBoardProps>}
 */
import{BrainCircuit, CheckCircle2} from 'lucide-react'
import {PrismicRichText} from '@prismicio/react'
const ScienceExamBoard = ({ slice }) => {
    const points = slice.primary.examborads.map((p) => p.desc);
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="py-16 px-6 md:px-12"
        >
              
      <div className="max-w-4xl mx-auto bg-teal-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col items-center text-center px-6 py-12">
          {/* Heading with Icon */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <BrainCircuit className="w-10 h-10 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Exam Board Alignment
            </h2>
          </div>

          {/* Bullet Points */}
          <ul className="text-base md:text-lg leading-relaxed text-left max-w-2xl space-y-4">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <PrismicRichText field={point} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
       
    );
};

export default ScienceExamBoard;
