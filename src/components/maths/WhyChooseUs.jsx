import { CheckCircleIcon } from "@heroicons/react/solid";

export default function WhyChooseUs() {
  const points = [
    "DBS-checked UK & international tutors",
    "One-to-one personalised lessons",
    "Covers KS1 → KS5 (GCSE, A-Level, SATs)",
    "Past papers & mock exam support",
    "Flexible timings for UK families",
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 sm:px-[3.6rem] py-16">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold">
            Why Choose{" "}
            <span className="text-teal-600">Your Future Campus</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Trusted by UK families for personalised, curriculum-aligned online
            tuition that delivers real academic results.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="
                group
                bg-gray-50
                rounded-2xl
                p-6
                text-center
                shadow-sm
                transition-all duration-300
                hover:bg-teal-600 hover:shadow-xl hover:-translate-y-1
              "
            >
              {/* Icon */}
              <div
                className="
                  mx-auto
                  flex items-center justify-center
                  h-14 w-14
                  rounded-full
                  bg-white
                  mb-4
                  transition-colors duration-300
                  group-hover:bg-white
                "
              >
                <CheckCircleIcon className="h-7 w-7 text-teal-600" />
              </div>

              {/* Text */}
              <p
                className="
                  text-sm font-medium
                  text-gray-800
                  leading-relaxed
                  transition-colors duration-300
                  group-hover:text-white
                "
              >
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
