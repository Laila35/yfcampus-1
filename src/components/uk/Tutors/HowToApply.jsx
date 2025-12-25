import React from "react";
import { FileText, Upload, Users, Video, Mail, ArrowRight } from "lucide-react";

export default function HowToApply() {
  const steps = [
    {
      id: 1,
      text: "Fill out the Online Application Form below (or via HR email).",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      id: 2,
      text: "Submit your CV, educational certificates, and introduction video (optional).",
      icon: <Upload className="w-6 h-6" />,
    },
    {
      id: 3,
      text: "Our HR team will review your application and contact shortlisted candidates.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      id: 4,
      text: "Successful applicants will be invited for an online interview and training session.",
      icon: <Video className="w-6 h-6" />,
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-center bg-gradient-to-b from-white to-gray-50">
      <h2 className="text-3xl font-semibold mb-12 text-gray-800">How to Apply</h2>

      <ol className="space-y-6 text-left max-w-2xl mx-auto">
        {steps.map((step) => (
          <li
            key={step.id}
            className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-teal-100 flex-shrink-0">
              <div className="text-teal-600">{step.icon}</div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{step.text}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-col items-center gap-4">
        <a
          href="#application-form"
          className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-full font-medium text-sm hover:bg-teal-700 transition-transform hover:scale-105 shadow-md"
        >
          Apply Now <ArrowRight className="w-4 h-4" />
        </a>

        <p className="text-sm text-gray-600 flex items-center gap-2">
          <Mail className="w-4 h-4 text-teal-600" />
          Or email your CV directly to:{" "}
          <a
            href="mailto:hr@yfcampus.com"
            className="font-medium text-teal-700 hover:underline"
          >
            hr@yfcampus.com
          </a>
        </p>
      </div>
    </section>
  );
}
