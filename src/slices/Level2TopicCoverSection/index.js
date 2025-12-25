import Image from "next/image";

const Level2TopicCoverSection = ({ slice }) => {
  const topics = Array.isArray(slice.primary.topics) ? slice.primary.topics : [];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
        Topics We Cover
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {topics.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white rounded-xl p-4 sm:p-5 border border-gray-200 hover:border-teal-300 transition-colors"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
              <Image
                src={slice.primary.image?.url || "/icons/book.svg"}
                alt={slice.primary.image?.alt || item.topic || "Topic icon"}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-900 text-base sm:text-lg font-medium">
              {item.topic || "Unnamed Topic"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Level2TopicCoverSection;