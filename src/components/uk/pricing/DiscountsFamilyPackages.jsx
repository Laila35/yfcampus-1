"use client";

import { Gift } from "lucide-react";

export default function DiscountsFamilyPackages() {
  const discounts = [
    {
      title: "Sibling Discount",
      description: "10% off for each additional child.",
    },
    {
      title: "Referral Reward",
      description: "Invite friends & get £10 credit after their first month.",
    },
    {
      title: "Multi-Subject Discount",
      description: "Save 15% when enrolling in two or more subjects.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-teal-700 mb-10">Discounts & Family Packages</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {discounts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-teal-50 rounded-2xl p-6 border border-teal-100 shadow-sm hover:shadow-md hover:border-teal-400 transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-teal-100 rounded-full">
                <Gift className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-teal-700 mb-2 text-center">{item.title}</h3>
              <p className="text-gray-700 text-sm text-center">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block bg-teal-600 text-white font-medium py-3 px-8 rounded-xl hover:bg-teal-700 transition-colors duration-200"
          >
            Contact Us to Apply Discounts →
          </a>
        </div>
      </div>
    </section>
  );
}
