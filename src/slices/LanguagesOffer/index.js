import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.LanguagesOfferSlice} LanguagesOfferSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LanguagesOfferSlice>} LanguagesOfferProps
 * @type {import("react").FC<LanguagesOfferProps>}
 */
const LanguagesOffer = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="my-16 px-6 md:px-10"
        >
         
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        {slice.primary.heading}
      </h1>

      <div className={`grid grid-cols-1 sm:grid-cols-2 ${slice.primary.languages.length <=3 ? "md:grid-cols-3" : "md:grid-cols-4"} gap-6`}>
        {slice.primary.languages.map((language) => (
          <div
            key={language.title}
            className="flex flex-col items-start justify-between bg-gradient-to-b from-teal-50 to-white border border-teal-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div>
              <h2 className="text-xl font-semibold text-teal-700">{language.title}</h2>
              <div className="mt-3 text-gray-600 leading-relaxed"><PrismicRichText field={language.desc} /></div>
            </div>
            <a
              href={language.href.url || "#"}
              className="mt-6 inline-block w-full text-center px-4 py-2 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition duration-300"
            >
              {language.href.text}
            </a>
          </div>
        ))}
      </div>
    </section>
       
    );
};

export default LanguagesOffer;
