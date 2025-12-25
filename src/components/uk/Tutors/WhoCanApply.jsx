import React from "react";
import { Users, ClipboardCheck, ChevronRight, CheckCircle } from "lucide-react";

const WhoCanApply = () => {
  const applicants = [
    "UK-qualified teachers (QTS, PGCE, B.Ed., or equivalent)",
    "University graduates with strong subject expertise",
    "Tutors with proven online teaching experience",
    "Professionals passionate about education and mentoring",
  ];

  const requirements = [
    "Excellent English communication skills",
    "Stable internet connection and quiet workspace",
    "Laptop or desktop with webcam and headset",
    "Familiarity with Zoom, Skype, or Google Meet",
    "Commitment to punctuality and professionalism",
    "Minimum 10 hours per week availability",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Main Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-gray-900">
          Who Can Apply & Essential Requirements
        </h2>
        
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Who Can Apply */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border-t-4 border-teal-500">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-7 h-7 text-teal-600" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Who Can Apply
            </h3>
          </div>

          <ul className="space-y-3 text-gray-700 leading-relaxed">
            {applicants.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 hover:text-teal-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-teal-500 mt-1" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-gray-600 italic flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-teal-500" />
            Previous classroom experience is preferred but not essential if you
            demonstrate excellent communication and teaching ability.
          </p>
        </div>

        {/* Essential Requirements */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border-t-4 border-teal-500">
          <div className="flex items-center gap-3 mb-6">
            <ClipboardCheck className="w-7 h-7 text-teal-600" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Essential Requirements
            </h3>
          </div>

          <ul className="space-y-3 text-gray-700 leading-relaxed">
            {requirements.map((req, index) => (
              <li
                key={index}
                className="flex items-start gap-3 hover:text-teal-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-teal-500 mt-1" />
                {req}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
