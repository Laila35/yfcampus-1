import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const SubjectsSection = () => {
  const subjects = [
    {
      category: "Core Academics",
      details: "Maths, English, Science, Computer Science",
      button: "Explore Subjects",
      link: "#",
      image: "/Images/website icons/academic  core logo.png",
    },
    {
      category: "Languages",
      details: "Arabic, Urdu, Persian & English (ESL)",
      button: "Languages ",
      link: "#",
      image: "/Images/website icons/languages logo.png",
    },
    {
      category: "School Levels",
      details: "Primary, Secondary & A-Level Tuition",
      button: "View Pathway ",
      link: "#",
      image: "/Images/website icons/school level logo.png",
    },
    {
      category: "Exam Prep",
      details: "SATs, 11+, GCSE & A-Level Revision",
      button: "Test Preparation ",
      link: "#",
      image: "/Images/website icons/exams prep logo.png",
    },
    {
      category: "Enrichment Courses",
      details: "Coding for Kids, Spoken English, Homework Help",
      button: "View Enrichment ",
      link: "#",
      image: "/Images/website icons/Enrichment courses l logo.png",
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-[3.7rem] py-12">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Subjects We <span className="text-teal-500">Teach</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our range of online tuition programmes for all levels.
        </p>
      </div>

      {/* Cards Grid with adjusted width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7">
        {subjects.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:border-teal-200 group h-[280px] w-full min-w-[220px]"
          >
            {/* Image Section - Centered */}
            <div className="flex flex-col items-center text-center mb-3">
              <div className="mb-3">
                <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden mx-auto">
                  {item.image ? (
                    <div className="relative w-14 h-14">
                      <Image
                        src={item.image}
                        alt={`${item.category} image`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 56px) 100vw, 56px"
                        quality={85}
                      />
                    </div>
                  ) : (
                    <span className="text-teal-600 font-bold text-lg">
                      {item.category.charAt(0)}
                    </span>
                  )}
                </div>
              </div>
              <h3 className="font-semibold text-lg text-gray-800 px-1 whitespace-nowrap">
                {item.category}
              </h3>
            </div>

            {/* Details - Centered */}
            <p className="text-gray-700 text-sm leading-relaxed mb-4 text-center px-1">
              {item.details}
            </p>

            {/* Button - Centered */}
            <div className="mt-auto flex justify-center px-1">
              <a href={item.link || "#"}>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-teal-600 font-medium hover:text-teal-800 group-hover:underline p-0 hover:bg-transparent"
                >
                  {item.button}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubjectsSection;