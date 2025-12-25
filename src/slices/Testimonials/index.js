import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSlice} TestimonialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSlice>} TestimonialsProps
 * @type {import("react").FC<TestimonialsProps>}
 */
const Testimonials = ({ slice }) => {
    const testimonials = slice.primary.qoutes.map((t) => {
        return{
            quote:t.quote,
            author:t.author_name
        }
    })
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="py-12 sm:py-12"
        >
           
                  <div className="max-w-7xl mx-auto sm:px-[3.6rem] px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-semibold mb-12">
                      What Parents <span className="text-teal-600">Say</span> 
                    </h2>
            
                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {testimonials.map((t, idx) => (
                        <div
                          key={idx}
                          className="relative bg-gray-50 p-8 rounded-3xl shadow overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
                        >
                          {/* Decorative quote icons */}
                          <FaQuoteLeft className="absolute top-4 left-4 text-teal-200 text-3xl opacity-40" />
                          <FaQuoteRight className="absolute bottom-4 right-4 text-teal-200 text-3xl opacity-40" />
            
                          {/* Quote */}
                          <p className="text-gray-800 text-md italic mb-6">{t.quote}</p>
            
                          {/* Author */}
                          <p className="text-gray-900 font-bold text-right">{t.author}</p>
                        </div>
                      ))}
                    </div>
                  </div>
               
        </section>
    );
};

export default Testimonials;
