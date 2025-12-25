import { Users, Laptop, Brain, ClipboardCheck, Quote } from "lucide-react";

const IconMap = {
  Users,
  Laptop,
  Brain,
  ClipboardCheck,
  Quote,
};

const MeetOurTutorCommon = ({ points }) => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 bg-white flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-8 tracking-tight">
        Meet Our Computer Science Tutors
      </h2>

      {/* Subheading */}
      <p className="text-center text-gray-600 mb-14 text-base sm:text-lg md:text-xl max-w-3xl">
        Our tutors are certified educators and software engineers who:
      </p>

      {/* Tutor Qualities */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl w-full">
        {points.map(({ icon, text }, index) => {
          const Icon = IconMap[icon];
          return (
            <li
              key={index}
              className="flex items-start gap-4 p-5 sm:p-6 rounded-xl border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all duration-300 bg-white"
            >
              <div className="flex-shrink-0 mt-1">
                <Icon className="text-teal-500 w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <p className="text-gray-900 font-medium text-base sm:text-lg leading-relaxed">
                {text}
              </p>
            </li>
          );
        })}
      </ul>

      {/* Quote Section */}
      <div className="mt-16 max-w-4xl w-full relative">
        <div className="relative border border-teal-500 rounded-2xl bg-teal-50 p-8 sm:p-10 shadow-md overflow-hidden">
          {/* Top Quote Icon */}
          <Quote className="text-teal-500 w-10 h-10 absolute -top-0 left-6    p-1 rounded-full shadow-sm" />

          <blockquote className="italic text-gray-800 text-lg sm:text-xl leading-relaxed mt-6">
            “We help students not just memorise syntax — but think like programmers.”
          </blockquote>

          {/* Bottom Quote Icon */}
          <div className="flex justify-end mt-4">
            <Quote className="text-teal-400 w-8 h-8" />
          </div>

          <p className="mt-4 text-gray-700 font-semibold text-right">
            – Lead Computer Science Tutor, Your Future Campus UK
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTutorCommon;
