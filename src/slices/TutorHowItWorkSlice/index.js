import { Button } from "@/components/ui/button";

/**
 * @typedef {import("@prismicio/client").Content.TutorHowItWorkSliceSlice} TutorHowItWorkSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TutorHowItWorkSliceSlice>} TutorHowItWorkSliceProps
 * @type {import("react").FC<TutorHowItWorkSliceProps>}
 */
const TutorHowItWorkSlice = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="max-w-6xl mx-auto px-6 py-16"
        >
           
                   <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                   {slice.primary.heading}
                   </h2>
             
                   <div className="flex flex-col gap-6 max-w-3xl mx-auto">
                     {slice.primary.points.map((item, i) => (
                       <div
                         key={i}
                         className="flex items-start md:items-center gap-4 p-5 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300"
                       >
                         <span className="text-teal-600 font-bold text-lg md:text-xl">{i + 1}.</span>
                         <p className="text-gray-700 text-base md:text-lg">{item.point}</p>
                       </div>
                     ))}
                   </div>
             
                   <div className="text-center mt-12">
                     <a href={slice.primary.cta.url}>
                        <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300">
                       {slice.primary.cta.text}
                     </Button>
                     </a>
                   </div>
                 
        </section>
    );
};

export default TutorHowItWorkSlice;
