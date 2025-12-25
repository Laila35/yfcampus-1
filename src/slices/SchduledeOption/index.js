/**
 * @typedef {import("@prismicio/client").Content.SchduledeOptionSlice} SchduledeOptionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SchduledeOptionSlice>} SchduledeOptionProps
 * @type {import("react").FC<SchduledeOptionProps>}
 */
const SchduledeOption = ({ slice }) => {
    
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
             className="max-w-4xl mx-auto px-4 py-16"
        >
             
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6 ">
      {slice.primary.heading}
      </h2>

      <p className="text-center text-gray-700 mb-12">
        {slice.primary.tag_line}
      </p>

      <div className="flex flex-col space-y-8">
        {slice.primary.schedules.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
        
    );
};

export default SchduledeOption;
