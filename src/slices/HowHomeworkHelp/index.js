/**
 * @typedef {import("@prismicio/client").Content.HowHomeworkHelpSlice} HowHomeworkHelpSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HowHomeworkHelpSlice>} HowHomeworkHelpProps
 * @type {import("react").FC<HowHomeworkHelpProps>}
 */
const HowHomeworkHelp = ({ slice }) => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="max-w-6xl mx-auto px-4 py-16"
        >
            
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 ">
    {slice.primary.heading}
      </h2>

      <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto">
        {slice.primary.subline}
      </p>

      {/* Desktop zig-zag design */}
      <div className="hidden md:block relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-gray-200 h-full"></div>

        {slice.primary.steps.map((step, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`mb-16 flex flex-col md:flex-row w-full ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Left side */}
              <div className="md:w-1/2 flex justify-center md:justify-end">
                {isLeft && (
                  <div className="flex items-center space-x-6 md:space-x-8">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-teal-600 text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-xs md:max-w-sm">
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Right side */}
              <div className="md:w-1/2 flex justify-center md:justify-start">
                {!isLeft && (
                  <div className="flex items-center space-x-6 md:space-x-8">
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-xs md:max-w-sm">
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-teal-600 text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile stacked design */}
      <div className="md:hidden flex flex-col items-center space-y-8">
        {slice.primary.steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold mb-4">
              {index + 1}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xs">
              <h3 className="font-semibold text-lg text-gray-800 mb-1">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
         
    );
};

export default HowHomeworkHelp;
