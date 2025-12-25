import React from "react";
import {
  Calculator,
  BookOpen,
  Atom,
  Laptop,
  Languages,
  Mic,
  Code,
  Notebook,
} from "lucide-react";

const SubjectsIncluded = () => {
  const subjects = [
    { icon: Calculator, title: "Maths" },
    { icon: BookOpen, title: "English" },
    { icon: Atom, title: "Science (Physics, Chemistry, Biology)" },
    { icon: Laptop, title: "Computer Science" },
    { icon: Languages, title: "Languages (Arabic, Urdu, Persian, ESL)" },
    { icon: Mic, title: "Spoken English" },
    { icon: Code, title: "Coding for Kids" },
    { icon: Notebook, title: "Homework Help & Revision Courses" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-teal-700 mb-8">
          Subjects Included
        </h2>
        <p className="text-gray-600 mb-10">
          All pricing covers one-to-one tuition in the following subjects:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map(({ icon: Icon, title }, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-teal-50 border border-teal-100 rounded-xl py-4 px-6 text-gray-800 font-medium shadow-sm hover:shadow-md hover:bg-teal-100 transition-all duration-300"
            >
              <div className="p-2 bg-teal-100 rounded-lg">
                <Icon className="text-teal-700 w-6 h-6" />
              </div>
              <span className="text-base">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsIncluded;
