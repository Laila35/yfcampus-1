import { ArrowRight, BookOpen } from "lucide-react";

/**
 * @typedef {import("@prismicio/client").Content.StudyResourceSlice} StudyResourceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StudyResourceSlice>} StudyResourceProps
 * @type {import("react").FC<StudyResourceProps>}
 */
const StudyResource = ({ slice }) => {
  const items = slice.primary.resourse_items.map((i) => i.item);
  const links = slice.primary.links.map((l) => ({
    text: l.link.text,
    href: l.link.url,
  }));
  // Top row items (first 5 items from your list)
  const topRowItems = items.slice(0, 5);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative py-12 px-4"
    >
      {/* Heading */}
      <div className="text-center mb-8 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {slice.primary.heading}
        </h2>
        <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
          {slice.primary.subline}
        </p>
      </div>

      {/* Main Container - Two Column Layout */}
      <div className="max-w-5xl mx-auto">
        {/* Top Row - 5 Resource Items Only */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
          {topRowItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2 bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-500 hover:shadow-sm transition min-h-[140px] justify-center"
            >
              <div className="w-11 h-11 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-600 mb-2">
                <BookOpen size={20} />
              </div>
              <p className="text-gray-800 text-sm font-medium leading-snug">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Links Section - Vertical download links */}
        <div className="flex justify-center">
          <div className="w-full max-w-md flex flex-col gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href || "#"}
                className="group relative flex items-center justify-between bg-white rounded-lg px-6 py-4 border border-gray-200 hover:bg-teal-50 transition"
              >
                <span className="text-base font-semibold text-gray-800 group-hover:text-teal-700">
                  {link.text}
                </span>
                <ArrowRight
                  className="text-teal-600 group-hover:translate-x-1 transition-transform duration-200"
                  size={18}
                />
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-teal-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyResource;