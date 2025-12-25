import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.ExploreStageSlice} ExploreStageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExploreStageSlice>} ExploreStageProps
 * @type {import("react").FC<ExploreStageProps>}
 */
const ExploreStage = ({ slice }) => {
 
    const levels=slice.primary.stages.map((s)=>{
        return{
            name:s.name,
            href:s.href,
             
        }
    })
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="py-12  sm:py-12"
        >
             
      <div className="max-w-7xl mx-auto px-6 sm:px-[3.6rem] text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12">
          Explore Maths <span className="text-teal-600">by Level</span> 
        </h2>
        

        {/* Levels Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {levels.map((level) => (
            <a
              key={level.name}
              href={level.href}
              className="group relative flex flex-col items-center gap-2 hover:border-teal-600 hover:border rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="relative bg-teal-100 rounded-full p-5 flex items-center justify-center w-12 h-12 ">
                <Image src= {slice.primary.image.url} alt={slice.primary.image.alt} fill className=" object-cover" />
              </div>
              <span className="text-sm font-semibold text-gray-900 text-center group-hover:text-teal-600">
                {level.name}
              </span>
              <span className="mt-2 text-sm text-gray-500 group-hover:text-teal-500">
                Learn More →
              </span>
            </a>
          ))}
        </div>
      </div>
   
        </section>
    );
};

export default ExploreStage;
