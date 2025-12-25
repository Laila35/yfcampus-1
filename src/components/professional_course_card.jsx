import { FaBusinessTime } from "react-icons/fa";

const PrCourseCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-10  rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl border border-teal-600">
      {/* Icon */}
      <div className="text-teal-500 text-4xl mb-4"> {/* Changed icon color */}
        {icon}
      </div>
      {/* Title */}
      <h3 className="text-xl font-semibold text-teal-800 mb-2"> {/* Changed title color */}
        {title}
      </h3>
      {/* Description */}
      <p className="text-gray-600 font-medium">
        {description}
      </p>
    </div>
  );
};

export default PrCourseCard;
