/**
 * @typedef {import("@prismicio/client").Content.GcseWhatsCoverSlice} GcseWhatsCoverSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GcseWhatsCoverSlice>} GcseWhatsCoverProps
 * @type {import("react").FC<GcseWhatsCoverProps>}
 */
const GcseWhatsCover = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
             <section className="what-we-cover py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What We Cover</h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {slice.primary.topics.map((topic, index) => (
            <li key={index} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">{topic.title}</h3>
              {topic.details && <p className="mt-2 text-gray-600">{topic.details}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
        </section>
    );
};

export default GcseWhatsCover;
