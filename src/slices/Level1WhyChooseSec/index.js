import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.Level1WhyChooseSecSlice} Level1WhyChooseSecSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<Level1WhyChooseSecSlice>} Level1WhyChooseSecProps
 * @type {import("react").FC<Level1WhyChooseSecProps>}
 */
const Level1WhyChooseSec = ({ slice, context }) => {
  const { stage } = context;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-8 px-4"
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Why Choose Our{" "}
        <span className="text-teal-600">
          {stage.charAt(0).toUpperCase() + stage.slice(1)}
        </span>{" "}
        Tutors
      </h1>

      <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-8">
        {/* ✅ Text Section */}
        <div className="sm:w-1/2 w-full space-y-3">
          {slice.primary.points.map((feature, index) => (
            <p
              key={index}
              className="text-lg font-normal leading-relaxed bg-gray-50 p-4 rounded-xl"
            >
              {feature.point}
            </p>
          ))}
        </div>

        {/* ✅ Image Section with Tailwind aspect ratio */}
        <div className="relative w-full sm:w-1/2 aspect-[4/3]">
          <Image
            src={slice.primary.image.url}
            alt={slice.primary.image.alt || "Why choose tutors image"}
            fill
            className="object-cover rounded-xl hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Level1WhyChooseSec;
