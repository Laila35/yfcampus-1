const levels = [
  { name: "KS1 (Years 1–2)", href: "/uk/subjects/maths/ks1", img: "/images/icons/courseIcon3.png"},
  { name: "KS2 (Years 3–6)", href: "/uk/subjects/maths/ks2", img: "/images/icons/courseIcon3.png" },
  { name: "KS3 (Years 7–9)", href: "/uk/subjects/maths/ks3", img: "/images/icons/courseIcon3.png" },
  { name: "GCSE (Years 10–11)", href: "/uk/subjects/maths/gcse", img: "/images/icons/courseIcon3.png" },
  { name: "A-Level (Years 12–13)", href: "/uk/subjects/maths/a-level/", img: "/images/icons/courseIcon3.png" },
];

export default function ExploreMaths() {
  return (
    <section className="py-12  sm:py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-[3.6rem] text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12">
          Explore Maths <span className="text-teal-600">by Level</span> 
        </h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
          Find the right tuition for your child – from KS1 to A-Level. Interactive lessons designed to build confidence and achieve top grades.
        </p>

        {/* Levels Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {levels.map((level) => (
            <a
              key={level.name}
              href={level.href}
              className="group relative flex flex-col items-center gap-2 hover:border-teal-600 hover:border rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="bg-teal-100 rounded-full p-5 flex items-center justify-center">
                <img src={level.img} alt={level.name} className="h-12 w-12 object-contain" />
              </div>
              <span className="text-sm font-semibold text-gray-900 text-center group-hover:text-teal-600">
                {level.name}
              </span>
              <span className="mt-2 text-sm text-gray-500 group-hover:text-teal-500">
                Learn More →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
