import React from "react";
import Image from "next/image";

const TopicSection = ({ topics }) => {
  if (!topics?.length) return null;

  // Split into full rows of 4 and a remainder
  const fullRows = Math.floor(topics.length / 4);
  const remainder = topics.length % 4;

  return (
    <div className="py-12 px-4 bg-gray-50">
      <h1 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
        Topics <span className="text-teal-600">We Cover</span>
      </h1>

      <div className="max-w-6xl mx-auto space-y-10">
        {/* Full rows (4 per row) */}
        {Array.from({ length: fullRows }).map((_, rowIdx) => (
          <div
            key={rowIdx}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12"
          >
            {topics.slice(rowIdx * 4, rowIdx * 4 + 4).map((topic, idx) => (
              <Card key={idx} topic={topic} />
            ))}
          </div>
        ))}

        {/* Last row (centered if remainder exists) */}
        {remainder > 0 && (
          <div className="flex justify-center gap-8 sm:gap-12 flex-wrap">
            {topics.slice(fullRows * 4).map((topic, idx) => (
              <Card key={idx} topic={topic} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
const Card = ({ topic }) => (
  <div className="relative p-6 pt-10 bg-white rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center w-full max-w-[220px]">
    <div className="absolute -top-6 bg-white p-2 rounded-full shadow-md">
      <Image
        src={topic?.image?.url || "/Images/icons/courseIcon1.png"}
        width={50}
        height={50}
        alt={
          topic?.image?.alt || `Icon for ${topic?.description?.[0]?.text || ""}`
        }
      />
    </div>
    <span className="text-gray-800 mt-2">
      {topic?.description?.[0]?.text}
    </span>
  </div>
);

export default TopicSection;
