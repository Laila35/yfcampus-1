"use client";

export default function LevelWiseSummary() {
  const levels = [
    {
      level: "Early Learning",
      stage: "Ages 3–6 (Nursery–Year 1)",
      price: "£30–£65 / month",
    },
    {
      level: "Primary (KS1–KS2)",
      stage: "Years 1–6",
      price: "£30–£75 / month",
    },
    {
      level: "Secondary (KS3–GCSE)",
      stage: "Years 7–11",
      price: "£45–£95 / month",
    },
    {
      level: "A-Level (Sixth Form)",
      stage: "Years 12–13",
      price: "£55–£115 / month",
    },
    {
      level: "Test Prep (GCSE / A-Level / 11+)",
      stage: "Intensive 2–6 weeks",
      price: "Custom packages available",
    },
  ];

  return (
    <section className="py-16  ">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Level-Wise Summary
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-teal-200 rounded-2xl shadow-sm p-6 text-center hover:shadow-lg hover:border-teal-400 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {item.level}
              </h3>
              <p className="text-sm text-gray-600">{item.stage}</p>
              <p className="mt-2 text-teal-600 font-semibold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
