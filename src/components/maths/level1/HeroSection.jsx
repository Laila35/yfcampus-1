import Image from "next/image";

const HeroSection = ({ hero }) => {
  // Pick first item if hero is an array
  const item = Array.isArray(hero) ? hero[0] : hero;

  return (
    <div className="flex items-center bg-white px-6">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 px-4 sm:px-6 lg:px-8 py-12  max-w-7xl mx-auto w-full">
        
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center sm:justify-start">
          <div className="relative w-full max-w-lg h-60 lg:h-80 rounded overflow-hidden px-1">
            <Image
              src={item?.image?.url || "/Images/HeroSection/hero.avif"}
              alt={item?.image?.alt || "Happy child learning maths with tutor"}
              width={500}
              height={500}
              className="object-cover"
              priority
            />
            {/* Badge */}
             
          </div>
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-2">
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {item?.title}
            </h1>
            <p className=" text-lg leading-8 text-gray-600 text-justify">
              {item?.description?.[0]?.text}
            </p>
          </div>

          <div className=" flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a className="rounded-2xl bg-gradient-to-r from-[#006666] to-[#00332d] text-white hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#00332d] hover:to-[#006666] px-6 py-2 shadow-lg transition">
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
