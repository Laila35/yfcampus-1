import { Circle, ChevronRight } from "lucide-react";

export default function FoundationTopics({ topics, variant ,  topicsContent }) {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-teal-800 mb-16 relative">
         Foundation Tier Topics
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-teal-500 rounded-full mt-4"></div>
        </h2>

        <div className="grid gap-6">
          {topics.map((topic, index) => {
            if (variant === "simple") {
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 group p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-teal-100/50 border border-transparent hover:border-teal-100"
                >
                  <div className="relative">
                    <Circle className="text-teal-500 w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-teal-500 rounded-full opacity-0 group-hover:opacity-20 animate-pulse"></div>
                  </div>
                  <span className="text-gray-800 text-lg font-semibold group-hover:text-teal-700 transition-all duration-300 transform group-hover:translate-x-1">
                    {topic}
                  </span>
                  <ChevronRight className="w-4 h-4 text-teal-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              );
            } else if (variant === "modern") {
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 group p-5 rounded-2xl transition-all duration-400 hover:bg-gradient-to-r hover:from-white hover:to-teal-50/80 border border-gray-100 hover:border-teal-200 hover:shadow-md"
                >
                  <div className="relative flex items-center justify-center">
                    <div className="w-3 h-3 bg-teal-500 rounded-full transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-teal-400/40"></div>
                    <div className="absolute w-6 h-6 border-2 border-teal-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                  <span className="text-gray-800 text-lg font-medium group-hover:text-teal-800 transition-colors duration-300">
                    {topic}
                  </span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  </div>
                </div>
              );
            } else if (variant === "minimal") {
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 group py-4 border-b border-gray-100 last:border-b-0 transition-all duration-300 hover:border-teal-300"
                >
                  <div className="w-1.5 h-1.5 bg-teal-400 rounded-full transition-transform duration-300 group-hover:scale-150"></div>
                  <span className="text-gray-700 text-lg group-hover:text-teal-600 group-hover:font-medium transition-all duration-300">
                    {topic}
                  </span>
                </div>
              );
            } else if (variant === "card") {
              return (
                <div
                  key={index}
                  className="group p-6 rounded-xl border border-gray-200 transition-all duration-300 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100/30 hover:transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-teal-500 group-hover:scale-110">
                      <span className="text-teal-600 font-bold text-sm group-hover:text-white transition-colors duration-300">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-gray-800 text-lg font-semibold group-hover:text-teal-700 transition-colors duration-300">
                      {topic}
                    </span>
                  </div>
                </div>
              );
            } else if (variant === "gradient") {
              return (
                <div
                  key={index}
                  className="group p-5 rounded-xl bg-gradient-to-r from-white to-gray-50 border border-gray-100 transition-all duration-400 hover:from-teal-50 hover:to-white hover:border-teal-200 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <ChevronRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <span className="text-gray-800 text-lg font-medium group-hover:text-teal-800 transition-colors duration-300 flex-1">
                      {topic}
                    </span>
                  </div>
                </div>
              );
            }
          })}
        </div>

        {topicsContent && (
          <div className="mt-12 p-10 rounded-2xl bg-[#E6F4F1] border border-[#C8E6E0] shadow-sm">
  <div className="text-gray-800 text-lg sm:text-xl leading-relaxed text-center font-medium tracking-wide">
    {topicsContent}
  </div>
</div>



        )}
      </div>
    </section>
  );
}