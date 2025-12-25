import { CheckCircle } from "lucide-react";

const LearningOutcomes = ({ outcomes }) => {
 

  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 bg-white flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-black mb-10 tracking-tight">
        Learning Outcomes
      </h2>

      {/* Outcomes List */}
      <ul className="space-y-6 max-w-4xl w-full">
        {outcomes.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-teal-400 hover:shadow-md transition-all duration-300 bg-white"
          >
            <div className="flex-shrink-0 mt-1">
              <CheckCircle
                className="text-teal-500 w-6 h-6 sm:w-7 sm:h-7"
                aria-hidden="true"
              />
            </div>
            <p className="text-gray-900 font-medium text-base sm:text-lg leading-relaxed">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LearningOutcomes;
