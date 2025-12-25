import React from "react";
import Image from "next/image";

const WhyChooseUs = ({ items,board }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Why Choose {board} Exam Prep
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              {item.icon && (
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image
                    src={item.icon}
                    alt={item.altxt || "icon"}
                    width={64}
                    height={64}
                    className="mx-auto"
                  />
                </div>
              )}
              <p className="text-gray-700 text-lg font-medium leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ✅ Make sure this is at the bottom:
export default WhyChooseUs;
