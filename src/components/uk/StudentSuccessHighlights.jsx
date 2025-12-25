import { GraduationCap, Star, BookOpen } from "lucide-react";

const iconMap = {
  GraduationCap,
  Star,
  BookOpen,
};

const StudentSuccessHighlights = () => {
  const highlights = [
    {
      text: "Improved GCSE grades by 2 levels in 8 weeks",
      icon: "GraduationCap",
    }, {
      text: " 96% of parents reported increased confidence after 1 month",
      icon: "Star",
    }, {
      text: "Over 1,000 students enrolled globally across 15 countries",
      icon: "BookOpen",
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-[3.7rem] py-12">
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-16">
        Student Success <span className="text-teal-500">Stories</span>
      </h2>

      {/* Highlights Grid - Added same hover effect as LessonStepsSection */}
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map(({ icon, text }, index) => {
          const IconComponent = iconMap[icon];
          return (
            <li
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex items-start gap-4 hover:border-teal-500 cursor-pointer group transition-all duration-300"
            >
              {IconComponent && (
                <div className="bg-teal-600 p-2 rounded-full text-white group-hover:bg-teal-700 transition-colors duration-300">
                  <IconComponent className="w-6 h-6" aria-hidden="true" />
                </div>
              )}
              <p className="text-gray-700 group-hover:text-gray-800 leading-relaxed">
                {text}
              </p>
            </li>
          );
        })}
      </ul>

      {/* Quote Section - Updated with same hover effect */}
      <div className="mt-20 max-w-4xl mx-auto text-center relative px-8 py-12 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-teal-500 cursor-pointer group transition-all duration-300">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-teal-600 rounded-full p-2 border-4 border-white group-hover:text-teal-700 transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 12h.01M15 12h.01M7 16h10M7 8h10M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        <p className="italic text-gray-700 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300">
          “My daughter's Maths improved from Grade 5 to Grade 8 in just one term! The personalised lessons really work.”
        </p>
        <footer className="not-italic text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
          – Parent, London
        </footer>
      </div>
    </section>
  );
};

export default StudentSuccessHighlights;