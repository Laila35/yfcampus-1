import Image from "next/image";

export default function ExamStructure({ examItems }) {
  // examItems example:
  // [
  //   { text: "3 Papers (Paper 1: Non-Calculator, Paper 2 & 3: Calculator)", icon: "/Images/Icons/examBoard/ESIcon1.jpg" },
  //   { text: "90 minutes each", icon: "/Images/Icons/examBoard/ESIcon2.jpg" },
  // ]

  return (
    <section className="py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">
        AQA Exam Structure
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Center vertical line */}
        <div className="absolute left-5 top-0 h-full w-1 bg-teal-900 md:left-1/2 md:-translate-x-1/2"></div>

        <ul className="relative space-y-12">
          {examItems.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <li key={i} className="relative flex items-start md:items-center">
                {/* Icon circle */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full z-10 overflow-hidden">
                  <Image
                    src={item.icon}
                    alt= {item.altxt}
                    width={24}
                    height={24}
                  />
                </div>

                {/* Content box */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 p-4 border border-gray-100 rounded-lg shadow-sm transition-shadow duration-200 hover:shadow-md ${
                    isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                  }`}
                >
                  <p className="text-gray-800 text-lg font-medium leading-relaxed mx-2">
                    {item.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
