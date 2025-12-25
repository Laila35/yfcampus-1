/**
 * @typedef {import("@prismicio/client").Content.KeyStagesSlice} KeyStagesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<KeyStagesSlice>} KeyStagesProps
 * @type {import("react").FC<KeyStagesProps>}
 */
import { PrismicRichText } from "@prismicio/react";
const KeyStages = ({ slice }) => {
    const title = slice.primary.heading
  
    const stages = slice.primary.stages.map((stage) => {
        return{
            stage: stage.stage,
            age: stage.age,
            focus: stage.focus,
        }
    })
  
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
             className="py-16 bg-white"
        >
          
      <div className="max-w-6xl mx-auto px-6 text-center">
        {title && (
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            {title}
          </h2>
        )}

        {stages.length === 0 ? (
          <p className="text-gray-500 text-sm">No stages available.</p>
        ) : (
          <div className={`grid gap-8 md:grid-cols-2  ${stages.length <= 3 ? "lg:grid-cols-3" : `lg:grid-cols-${stages.length}`}`}>
            {stages.map((item, index) => (
              <div
                key={index}
                className="relative bg-gray-50 border-t-4 border-teal-500 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 p-6 text-left"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.stage || "Untitled Stage"}
                </h3>

                {item.age ? (
                  <p className="text-sm text-teal-600 mb-4">{item.age?item.age:""}</p>
                ) : (
                  <div className="mb-2"></div>
                )}

                <div
                  className={`text-gray-700 leading-relaxed ${
                    item.age
                      ? "text-sm"
                      : "text-base font-medium mt-2"
                  }`}
                >
                  <PrismicRichText field={item.focus} />
                </div>
              </div>
            ))}
            
            
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
  {slice.primary.cta &&
    slice.primary.cta.map((item, index) => (
      <a
        key={index}
        href={item.link.url}
        className="bg-teal-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:bg-teal-500"
      >
        {item.link.text}
      </a>
    ))}
</div>

    
        </section>
    );
};

export default KeyStages;
