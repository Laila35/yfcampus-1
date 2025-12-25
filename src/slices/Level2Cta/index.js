import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.Level2CtaSlice} Level2CtaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<Level2CtaSlice>} Level2CtaProps
 * @type {import("react").FC<Level2CtaProps>}
 */
const Level2Cta = ({ slice }) => {
    return (
         <section
                    data-slice-type={slice.slice_type}
                    data-slice-variation={slice.variation}
                    className="py-12 flex justify-center"
                >
                     
              <div className="bg-teal-600 text-white rounded-2xl p-8 shadow-lg text-center max-w-3xl w-full">
                <div className="text-3xl font-semibold mb-4 sm:text-2xl">
                  <PrismicRichText field={slice.primary.desc} />
                </div>
                <a
                  href= {slice.primary.cta.url}
                  className="mt-6 inline-block bg-white text-teal-600 font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:bg-teal-50"
                >
                 {slice.primary.cta.text}
                </a>
              </div>
            </section>
    );
};

export default Level2Cta;
