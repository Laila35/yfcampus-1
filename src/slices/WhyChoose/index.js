import { BadgeCheck } from "lucide-react";

/**
 * @typedef {import("@prismicio/client").Content.WhyChooseSlice} WhyChooseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WhyChooseSlice>} WhyChooseProps
 * @type {import("react").FC<WhyChooseProps>}
 */
const WhyChoose = ({ slice }) => {
   const points=slice.primary.points.map((p)=>p.builts_point) 
 
 
   
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
             className="py-16 px-6 md:px-12"
        >
             
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl   font-bold text-gray-900 dark:text-gray-100">
          {slice.primary.heading} 
        </h2>
        <div className="h-1 w-20 bg-teal-600 mx-auto mt-3 rounded-full"></div>
      </div>

{/* Points */}

<div className="flex flex-col sm:flex-wrap sm:flex-row max-w-5xl mx-auto gap-6 justify-center">
  {points.map((point, index) => (
    <div
      key={index}
      className="
        flex flex-col items-center justify-center text-center 
        bg-gray-50 dark:bg-gray-800/50
        p-6 rounded-xl

        border-2 border-transparent
        shadow-sm

        hover:border-teal-500
        hover:shadow-green-500/20 hover:shadow-xl

        transition-all duration-300 ease-in-out
        hover:-translate-y-1

        cursor-pointer

        w-full sm:flex-1
        sm:min-w-[200px] sm:max-w-[300px]
      "
    >
      <BadgeCheck className="w-6 h-6 text-teal-600 mb-2" />

      <p className="
        text-lg font-medium leading-relaxed
        text-gray-800 dark:text-gray-200
        line-clamp-2
      ">
        {point}
      </p>
    </div>
  ))}
</div>





    </section>
        
    );
};

export default WhyChoose;
