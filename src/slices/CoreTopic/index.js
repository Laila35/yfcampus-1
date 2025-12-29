import { ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * @typedef {import("@prismicio/client").Content.CoreTopicSlice} CoreTopicSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CoreTopicSlice>} CoreTopicProps
 * @type {import("react").FC<CoreTopicProps>}
 */
const CoreTopic = ({ slice, context }) => {
  const { stage } = context;
  const topics = slice.primary.topics.map((i) => i.topic);
  const yearsLink = slice.primary.years.map((i) => ({
    label: i.label,
    href: i.href,
  }));
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Core Topics Section */}
      <div className="mb-12 sm:mb-16 lg:mb-20">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Core
            <span className="text-teal-600">
              {" " + stage.toUpperCase() + " "}
            </span>
            Topics Covered
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full mx-auto"></div>
        </div>
        {/* Topics Grid */}
        <div
          className={`grid grid-cols-1 ${
            topics.length <= 2
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : topics.length === 3
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          } gap-4 sm:gap-5 lg:gap-6`}
        >
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className="group bg-teal-50 text-center font-medium text-gray-800 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-teal-100 hover:border-teal-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default"
            >
              <div className="relative">
                <span className="text-sm sm:text-base lg:text-lg">
                  {topic}
                </span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-teal-500 group-hover:w-8 group-hover:-translate-x-4 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Enhanced Divider */}
      <div className="relative my-8 sm:my-12 lg:my-16">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-teal-100"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-gray-500 font-medium">
            Explore Year Pages
          </span>
        </div>
      </div>
      {/* Year Pages Section */}
      <div className="mt-8 sm:mt-12 lg:mt-16">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            <span className="text-teal-600">
              {stage.toUpperCase() + " "}
            </span>
            Year Pages
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full mx-auto"></div>
        </div>
        {/* CENTERED Year Links Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-4xl w-full">
            {yearsLink.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group flex items-center justify-between bg-teal-600 text-white px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl font-medium hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-sm sm:text-base truncate mr-3">
                  {item.label}
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoreTopic;
