import React from "react";

const PricingPlan = () => {
  const pricingPlans = [
    {
      plan: "Starter Plan",
      lesson_duration: "30 Minutes",
      sessions_per_month: "8 Lessons (2 per week)",
      price: "£30/month",
      suitable_for: "Light support / younger students",
    },
    {
      plan: "Standard Plan",
      lesson_duration: "30 Minutes",
      sessions_per_month: "12 Lessons (3 per week)",
      price: "£45/month",
      suitable_for: "Balanced weekly learning",
    },
    {
      plan: "Extended Plan",
      lesson_duration: "30 Minutes",
      sessions_per_month: "16 Lessons (4 per week)",
      price: "£55/month",
      suitable_for: "Regular full support",
    },
    {
      plan: "Premium Plan",
      lesson_duration: "30 Minutes",
      sessions_per_month: "20 Lessons (5 per week)",
      price: "£65/month",
      suitable_for: "Daily academic focus",
    },
    {
      plan: "1-Hour Starter Plan",
      lesson_duration: "1 Hour",
      sessions_per_month: "8 Lessons (2 per week)",
      price: "£55/month",
      suitable_for: "In-depth weekly sessions",
    },
    {
      plan: "1-Hour Standard Plan",
      lesson_duration: "1 Hour",
      sessions_per_month: "12 Lessons (3 per week)",
      price: "£75/month",
      suitable_for: "Comprehensive coverage",
    },
    {
      plan: "1-Hour Extended Plan",
      lesson_duration: "1 Hour",
      sessions_per_month: "16 Lessons (4 per week)",
      price: "£95/month",
      suitable_for: "Exam preparation focus",
    },
    {
      plan: "1-Hour Premium Plan",
      lesson_duration: "1 Hour",
      sessions_per_month: "20 Lessons (5 per week)",
      price: "£115/month",
      suitable_for: "Full intensive programme",
    },
  ];

  return (
    <section className="py-16  ">
      {/* Heading */}
      <h1 className="text-center text-4xl font-bold   mb-12">
        Pricing Plans (All Subjects & Levels)
      </h1>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {pricingPlans.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-white border border-teal-100 rounded-2xl shadow-md hover:shadow-xl hover:border-teal-400 transition-all duration-300 p-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">
                {item.plan}
              </h3>

              <div className="text-3xl font-bold text-teal-600 mb-4">
                {item.price}
              </div>

              <ul className="text-gray-700 text-sm space-y-2">
                <li>
                  <span className="font-medium text-gray-800">
                    Lesson Duration:
                  </span>{" "}
                  {item.lesson_duration}
                </li>
                <li>
                  <span className="font-medium text-gray-800">
                    Sessions/Month:
                  </span>{" "}
                  {item.sessions_per_month}
                </li>
                <li>
                  <span className="font-medium text-gray-800">
                    Suitable For:
                  </span>{" "}
                  {item.suitable_for}
                </li>
              </ul>
            </div>

            <button className="mt-6 bg-teal-600 text-white rounded-xl py-2.5 font-medium text-sm hover:bg-teal-700 transition-colors duration-200">
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      {/* Custom Plan Section */}
      <div className="max-w-3xl mx-auto mt-16 bg-white border border-teal-100 shadow-md rounded-2xl text-center py-8 px-6">
        <p className="text-gray-700 text-lg mb-4">
          💡 <span className="font-semibold text-teal-700">Custom study plans</span> are available for families booking multiple children or subjects.
        </p>
        <a
          href="/contact"
          className="inline-block bg-teal-600 text-white font-medium py-2.5 px-6 rounded-xl hover:bg-teal-700 transition-colors duration-200"
        >
          Contact for Custom Plan →
        </a>
      </div>
    </section>
  );
};

export default PricingPlan;
