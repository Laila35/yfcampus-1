import {
  FileCode2,
  BookOpen,
  ClipboardList,
  Code2,
  Layers,
  PlayCircle,
} from "lucide-react";

const IconMap = {
  FileCode2,
  BookOpen,
  ClipboardList,
  Code2,
  Layers,
  PlayCircle,
};

const ResourcesSection = ({ materials, resourceLinks }) => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 bg-white flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-black mb-12 tracking-tight">
        Resources & Study Materials
      </h2>

      {/* Balanced Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {/* Left Side — Materials List */}
        <ul className="space-y-5">
          {materials.map(({ icon, text }, index) => {
            const Icon = IconMap[icon];
            return (
              <li
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-teal-50 transition-all duration-200"
              >
                <div className="flex-shrink-0 mt-1">
                  {Icon && (
                    <Icon className="text-teal-500 w-6 h-6 sm:w-7 sm:h-7" />
                  )}
                </div>
                <p className="text-gray-900 font-medium text-base sm:text-lg leading-relaxed">
                  {text}
                </p>
              </li>
            );
          })}
        </ul>

        {/* Right Side — Resource Links */}
        <div className="flex flex-col justify-center gap-6">
          {resourceLinks.map(({ title, url }, index) => (
            <a
              key={index}
              href={url}
              className="block border border-teal-400 text-teal-600 font-semibold text-lg sm:text-xl py-4 px-6 rounded-xl text-center hover:bg-teal-50 hover:border-teal-500 transition-all duration-300"
            >
              {title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
