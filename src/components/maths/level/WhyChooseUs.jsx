import Image from "next/image";

export default function WhyChooseUs({ choose }) {
  if (!choose || choose.length === 0) return null;

  const section = choose[0]; // your Prismic slice object
  const title = section.title || "Why Parents Choose Us";
  const reasons = section.item || [];
  const image = section.image;

  return (
    <section className="py-16 px-6 sm:px-[3.6rem] bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <h2 className="text-3xl sm:text-3xl font-semibold mb-10">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-teal-600">{title.split(" ").slice(-1)}</span>
          </h2>

          <ul className="space-y-6">
            {reasons.map((reason, i) => (
              <li
                key={i}
                className="text-md text-gray-600 leading-relaxed"
              >
                {reason.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Image */}
        {image?.url && (
          <div className="flex justify-center lg:justify-end">
            <Image
              src={image.url}
              alt={image.alt || title}
              width={500}
              height={400}
              className="rounded-2xl shadow-md object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
