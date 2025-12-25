import Image from "next/image";

const AdditionalSupport = () => {
  const supports = [
    {
      title: "Homework Help",
      link: "/uk/subjects/homework-help",
      image: "/Images/website icons/academic  core logo.png"
    },
    {
      title: "Spoken English",
      link: "/uk/subjects/spoken-english",
      image: "/Images/website icons/exams prep logo.png"
    },
    {
      title: "Coding for Kids",
      link: "/uk/subjects/coding-for-kids",
      image: "/Images/website icons/languages logo.png"
    },
    {
      title: "Revision Courses",
      link: "/uk/subjects/revision",
      image: "/Images/website icons/school level logo.png"
    },
  ]

  return (
    <section className="max-w-7xl mx-auto text-center py-12 px-6 md:px-[3.7rem]">
      {/* Heading */}
      <h2 className="text-3xl md:text-3xl font-semibold mb-10">
        Additional <span className="text-teal-500">Support</span>
      </h2>
      {/* Support options */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        {supports.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="block border border-teal-100 rounded-xl p-6 font-medium bg-white hover:border-teal-600 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col items-center justify-center group"
          >
            {/* Image/Logo Section - Removed green hover effect */}
            <div className="mb-4">
              <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden"> {/* Removed group-hover:bg-teal-50 */}
                {item.image ? (
                  <div className="relative w-12 h-12">
                    <Image
                      src={item.image}
                      alt={`${item.title} icon`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 48px) 100vw, 48px"
                      quality={85}
                    />
                  </div>
                ) : (
                  <span className="text-teal-600 font-bold text-lg">
                    {item.title.charAt(0)}
                  </span>
                )}
              </div>
            </div>
            {/* Title with arrow */}
            <span className="text-gray-800 group-hover:text-teal-700 transition-colors duration-300">
              {item.title} →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default AdditionalSupport;