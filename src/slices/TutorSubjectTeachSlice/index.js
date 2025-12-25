import { ArrowRight } from "lucide-react";

/**
 * @typedef {import("@prismicio/client").Content.TutorSubjectTeachSliceSlice} TutorSubjectTeachSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TutorSubjectTeachSliceSlice>} TutorSubjectTeachSliceProps
 * @type {import("react").FC<TutorSubjectTeachSliceProps>}
 */
const TutorSubjectTeachSlice = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="max-w-7xl mx-auto px-6 py-12"
        >
        
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
       {slice.primary.heading}
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {slice.primary.subjects.map((subject, idx) => (
          <div
            key={idx}
            className="flex flex-col p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-teal-400 bg-white"
          >
            <h3 className="text-xl font-semibold mb-3 text-teal-600">
              {subject.title}
            </h3>
            <p className="text-gray-700">{subject.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href={slice.primary.cta.url}>
            <button className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow  transition">
          {slice.primary.cta.text} <ArrowRight className="inline-block ml-2" />
        </button>
        </a>
      </div>
    </section>
        
    );
};

export default TutorSubjectTeachSlice;
