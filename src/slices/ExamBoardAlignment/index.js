/**
 * @typedef {import("@prismicio/client").Content.ExamBoardAlignmentSlice} ExamBoardAlignmentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExamBoardAlignmentSlice>} ExamBoardAlignmentProps
 * @type {import("react").FC<ExamBoardAlignmentProps>}
 */
const ExamBoardAlignment = ({ slice }) => {
    const boards = slice.primary.examborads.map((board) => board.board)
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
             className="py-16 px-6 md:px-10   to-white"
        >
             
      {/* Header */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h2 className="text-4xl   font-bold text-gray-900 mb-4 tracking-wide animate-fade-in">
          Exam Board Alignment
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">{slice.primary.subline}</p>
      </div>

      {/* Boards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        { boards .map((board, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 
                       hover:shadow-xl hover:-translate-y-1 hover:bg-teal-50 group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-500 
                           scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <h3 className="text-lg font-medium text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
              {board}
            </h3>
          </div>
        ))}
      </div>

      {/* Conclusion */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-lg text-gray-700 leading-relaxed bg-teal-100 py-4 px-6 rounded-lg shadow-sm">
          {slice.primary.closingline ||""}
        </p>
      </div>
    </section>
        
    );
};

export default ExamBoardAlignment;
