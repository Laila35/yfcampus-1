 import React from "react";

const WhoItsFor = ({ whoIts_for }) => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-teal-700 mb-14 tracking-tight">
          Who It’s For
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {whoIts_for.map((item, index) => (
            <div
              key={index}
              className="group relative border border-transparent bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:border-teal-200 transition-all duration-300 ease-out"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-100/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <h3 className="relative text-lg font-semibold text-gray-800 leading-relaxed">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
