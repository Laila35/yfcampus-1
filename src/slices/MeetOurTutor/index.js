import { Quote, UserCheck } from "lucide-react";

/**
 * @typedef {import("@prismicio/client").Content.MeetOurTutorSlice} MeetOurTutorSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MeetOurTutorSlice>} MeetOurTutorProps
 * @type {import("react").FC<MeetOurTutorProps>}
 */
import { PrismicRichText } from "@prismicio/react";
 
const MeetOurTutor = ({ slice,context }) => {
    const {subject}=context;
    const tutorPoints=slice.primary.meet_our_tutor.map((p)=>p.tutorpoints) ||[]
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
             className="py-16 px-6 md:px-12 max-w-5xl mx-auto"
        >
            
                   {/* Header */}
                   <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                       Meet Our {subject} Tutors
                     </h2>
                     <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
                  {slice.primary.subline}
                     </p>
                   </div>
             
                   {/* Tutor Qualities Cards */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                     {tutorPoints.map((point, index) => (
                       <div
                         key={index}
                         className="flex items-start gap-4 p-6 rounded-xl border-l-4 border-teal-600 bg-white dark:bg-gray-900 shadow hover:shadow-lg transition-all duration-300"
                       >
                         <UserCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                         <p className="text-gray-800 dark:text-gray-200 font-medium text-base sm:text-lg">
                           {point}
                         </p>
                       </div>
                     ))}
                   </div>
             
                   {/* Quote Section */}
                   <div className="relative bg-teal-600 text-white rounded-2xl p-10 md:p-16 shadow-xl overflow-hidden">
                     {/* Top-left Quote Icon */}
                     <Quote className="absolute top-0 left-4 w-16 h-16 opacity-20 md:w-14 md:h-14" />
             
                     {/* Quote Text */}
                     <div className="text-center text-lg md:text-2xl font-semibold leading-relaxed mb-8">
                       <PrismicRichText field={slice.primary.qoute} />
                     </div>
             
                     {/* Bottom-right Quote Icon */}
                     <Quote className="absolute bottom-0 right-4 w-16 h-16 opacity-20 md:w-14 md:h-14 rotate-180" />
             
                     {/* Attribution */}
                     <p className="text-center text-sm md:text-base font-medium opacity-90 mt-8">
                       {slice.primary.author}
                     </p>
                   </div>
                 </section>
       
    );
};

export default MeetOurTutor;
