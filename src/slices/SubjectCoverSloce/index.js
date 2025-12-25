/**
 * @typedef {import("@prismicio/client").Content.SubjectCoverSloceSlice} SubjectCoverSloceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SubjectCoverSloceSlice>} SubjectCoverSloceProps
 * @type {import("react").FC<SubjectCoverSloceProps>}
 */
const SubjectCoverSloce = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
             <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 ">
        Subjects We Cover
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-teal-600 shadow-sm">
          <thead>
            <tr className="bg-teal-600">
              <th className="border border-teal-600 px-6 py-3 text-left text-white font-semibold">
                Subject
              </th>
              <th className="border border-teal-600 px-6 py-3 text-left text-white font-semibold">
                Homework Support Includes
              </th>
            </tr>
          </thead>
          <tbody>
            {slice.primary.subjects.map((item, index) => (
              <tr
                key={index}
                className={`transition-colors duration-200 ${
                  index % 2 === 0 ? "bg-white" : "bg-teal-50"
                } hover:bg-teal-100`}
              >
                <td className="border border-teal-200 px-6 py-4 font-medium text-gray-800">
                  {item.subject}
                </td>
                <td className="border border-teal-200 px-6 py-4 text-gray-700">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
        </section>
    );
};

export default SubjectCoverSloce;
