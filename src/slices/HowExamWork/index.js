import { ArrowDown } from "lucide-react";

/**
 * @typedef {import("@prismicio/client").Content.HowExamWorkSlice} HowExamWorkSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HowExamWorkSlice>} HowExamWorkProps
 * @type {import("react").FC<HowExamWorkProps>}
 */
const HowExamWork = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <section className="py-16 px-4 text-center">
                 <h2 className="text-3xl   font-bold mb-12 text-teal-700">
                    {slice.primary.title}
                 </h2>
                 <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
                   {slice.primary.steps.map((step, index) => (
                     <div key={index} className="flex flex-col items-center gap-2 w-full">
                       {/* Step Card */}
                       <div className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-lg border-l-4 border-teal-500 bg-white shadow-sm hover:shadow-md transition transform hover:-translate-y-1 w-full">
                         <div className="flex-1">
                           <h3 className="text-xl md:text-2xl font-semibold text-teal-700 mb-1">
                             {step.title}
                           </h3>
                           <p className="text-gray-700">{step.description}</p>
                         </div>
                       </div>
           
                       {/* Arrow to next step */}
                       {index < slice.primary.steps.length - 1 && (
                         <ArrowDown className="w-6 h-6 text-teal-500 animate-bounce" />
                       )}
                     </div>
                   ))}
                 </div>
               </section>
        </section>
    );
};

export default HowExamWork;
