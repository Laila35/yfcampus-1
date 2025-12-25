import React from "react";
import { FileText, Clock, Scale, PenTool } from "lucide-react";

const ExamStructure = () => {
  const items = [
    { icon: FileText, title: "3 Papers", subtitle: "Pure, Statistics & Mechanics" },
    { icon: Clock, title: "2 Hours Each", subtitle: "Timed exam papers" },
    { icon: Scale, title: "Equal Weighting", subtitle: "Across all units" },
    { icon: PenTool, title: "Mixed Question Types", subtitle: "Short & long-form problem solving" },
  ];

  return (
    <section className="bg-white text-gray-900 p-8 md:p-10 rounded-xl shadow-lg mt-8 border border-gray-100 max-w-5xl mx-auto">
     <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
  <span className="text-gray-800">AQA</span>{" "}
  <span className="text-blue-600">Exam Structure</span>
</h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <div className="text-blue-600 flex-shrink-0 bg-blue-50 p-3 rounded-lg">
              <item.icon className="w-7 h-7" aria-hidden="true" />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-600 mt-1">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExamStructure;
