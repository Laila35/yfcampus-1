import { Button } from "@/components/ui/button";
import React from "react";

const matchPoints = [
  "Student’s age, subject, and learning goals",
  "Preferred teaching style (strict, supportive, or interactive)",
  "Gender preference (male or female tutor)",
  "Availability & schedule",
];

const MatchTutors = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl   font-bold text-center text-gray-900 mb-12">
        How We Match Tutors to Students
      </h2>

      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {matchPoints.map((point, i) => (
          <div
            key={i}
            className="flex items-start md:items-center gap-4 p-5 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <span className="text-teal-600 font-bold text-lg md:text-xl">{i + 1}.</span>
            <p className="text-gray-700 text-base md:text-lg">{point}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300">
          Book a Free Trial
        </Button>
      </div>
    </section>
  );
};

export default MatchTutors;
