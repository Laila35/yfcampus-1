import { Button } from "@/components/ui/button";
import { PrismicRichText } from "@prismicio/react";
import { Star } from "lucide-react";

/**
 * @typedef {import("@prismicio/client").Content.TutorTestimonialSliceSlice} TutorTestimonialSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TutorTestimonialSliceSlice>} TutorTestimonialSliceProps
 * @type {import("react").FC<TutorTestimonialSliceProps>}
 */
const TutorTestimonialSlice = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="max-w-6xl mx-auto px-6 py-16"
        >
         
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Student & Parent Feedback
                  </h2>
            
                  <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
                    {slice.primary.feedbacks.map((item, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-center mb-4">
                          <Star className="w-5 h-5 text-yellow-400 mr-2" />
                          <Star className="w-5 h-5 text-yellow-400 mr-2" />
                          <Star className="w-5 h-5 text-yellow-400 mr-2" />
                          <Star className="w-5 h-5 text-yellow-400 mr-2" />
                          <Star className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div className="text-gray-700 text-base md:text-lg">
                            <PrismicRichText field={item.feedback} />
                        </div>
                      </div>
                    ))}
                  </div>
            
                  <div className="text-center mt-10">
                    <a href={slice.primary.cta.url}>
                        <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300">
                       {
                           slice.primary.cta.text
                       }
                    </Button>
                    </a>
                  </div>
                </section>
        
    );
};

export default TutorTestimonialSlice;
