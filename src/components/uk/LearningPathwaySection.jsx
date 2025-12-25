import { ArrowRightCircle } from "lucide-react";

const LearningPathwaySection = ( ) => {
  const pathways = [
  {
    stage: "Early Learning (Ages 3–6)",
    focus: "Phonics, numbers & confidence through fun lessons",
    button: "Early Learning",
    link: "/uk/subjects/early-learning",
  },
  {
    stage: "Primary (KS1–KS2)",
    focus: "Maths, English & Science foundation + SATs prep",
    button: "Primary",
    link: "/uk/subjects/primary",
  },
  {
    stage: "Secondary (KS3–GCSE)",
    focus: "Core subjects & exam readiness",
    button: "Secondary",
    link: "/uk/subjects/secondary",
  },
  {
    stage: "A-Level (Sixth Form)",
    focus: "Advanced tutoring for top grades & university entry",
    button: "A-Level",
    link: "/uk/subjects/a-level",
  }
];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-3xl font-semibold mb-4">
          Our Learning <span className="text-teal-500">Pathway</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A step-by-step journey from foundational skills to academic mastery.
        </p>
      </div>

      {/* Timeline */}
      <ol className="relative flex flex-col items-center space-y-12 before:absolute before:left-1/2 before:top-0 before:h-full before:w-1 before:-translate-x-1/2 before:bg-teal-600">
        {pathways.map((item, index) => (
          <li
            key={index}
            className="relative z-10 w-full md:w-2/3 lg:w-1/2 flex flex-col items-center text-center"
          >
            {/* Dot */}
            <span className="absolute left-1/2 top-0 w-6 h-6 bg-teal-600 rounded-full border-4 border-white shadow-lg -translate-x-1/2 z-10"></span>

            {/* Content Card */}
            <div className="mt-6 bg-white border border-teal-100 rounded-xl p-6  hover:shadow transition duration-300 w-full">
              <h3 className=" font-semibold  mb-2">
                {item.stage}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{item.focus}</p>
              <a
                href={item.link}
                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-800 font-medium transition-all"
                aria-label={`Learn more about ${item.stage}`}
              >
                {item.button}
                <ArrowRightCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default LearningPathwaySection;
