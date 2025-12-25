/**
 * @typedef {import("@prismicio/client").Content.SubjectWeTeachSlice} SubjectWeTeachSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SubjectWeTeachSlice>} SubjectWeTeachProps
 * @type {import("react").FC<SubjectWeTeachProps>}
 */

import React from "react";
import * as Icons from "lucide-react";
import { PrismicRichText } from "@prismicio/react";

const SubjectWeTeach = ({ slice }) => {
  const subjects = slice?.primary?.subject_we_teach || [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 px-6 md:px-12  "
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl  font-bold text-gray-900">
          Subjects We Teach
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {subjects.map((subject, index) => {
          const Icon = Icons[subject.icon] || Icons.Dna;
          return (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-teal-400 to-teal-300" />
              <div className="flex flex-col items-center text-center px-6 py-10">
                <div className="mb-4 bg-teal-50 p-4 rounded-full group-hover:bg-teal-100 transition-all duration-300">
                  <Icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{subject.title}</h3>
                <div className="text-gray-600 text-sm mb-4">
                  <PrismicRichText field={subject.desc} />
                </div>
                {subject.href.text && (
                  <a
                    href={subject.href.url}
                    className="text-white font-medium bg-teal-600 hover:bg-teal-700 transition-all duration-300 py-2 px-4 rounded-full inline-flex items-center gap-1 shadow-sm hover:shadow-md"
                  >
                    {subject.href.text} <Icons.ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SubjectWeTeach;
