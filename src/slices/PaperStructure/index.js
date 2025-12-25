/**
 * @typedef {import("@prismicio/client").Content.PaperStructureSlice} PaperStructureSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PaperStructureSlice>} PaperStructureProps
 * @type {import("react").FC<PaperStructureProps>}
 */
const PaperStructure = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12"
    >
      <main className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Paper Structure</h1>

        {/* Sections */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {slice.primary.sections.map((section, index) => (
            <div 
              key={index} 
              className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <div className="space-y-2">
                <p><span className="font-medium">Calculator:</span> {section.calculator}</p>
                <p><span className="font-medium">Questions:</span> {section.question}</p>
                <p><span className="font-medium">Minutes:</span> {section.minutes}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Questions Included */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Questions Included</h2>
          <div className="flex flex-wrap gap-3">
            {slice.primary.question_included.map((item, index) => (
              <span 
                key={index} 
                className="px-4 py-2 rounded-full font-medium border border-gray-300"
              >
                {item.question_type}
              </span>
            ))}
          </div>
        </div>

        {/* Topic Covers */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Covers</h2>
          <div className="flex flex-wrap gap-3">
            {slice.primary.topiccover.map((item, index) => (
              <span 
                key={index} 
                className="px-4 py-2 rounded-full font-medium border border-gray-300"
              >
                {item.topic}
              </span>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default PaperStructure;
