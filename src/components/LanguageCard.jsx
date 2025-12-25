import { FaLanguage } from "react-icons/fa";

const LanguageCard = ({ icon, title, description }) => {
  return (
    <div className="border-2 border-teal-500 p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg">
      {/* Flex Container for Icon and Title */}
      <div className="flex items-center justify-center mb-4">
        {/* Icon */}
        <div className="text-teal-600 text-4xl mr-3"> {/* Adjusted size */}
          {icon}
        </div>
        {/* Title */}
        <h3 className="text-xl font-bold text-teal-800">
          {title}
        </h3>
      </div>
      {/* Description */}
      <p className="text-gray-700 font-medium">
        {description}
      </p>
    </div>
  );
};

export default LanguageCard;
