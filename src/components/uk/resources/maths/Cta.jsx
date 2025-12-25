 import React from 'react';

const MathsCalltoAction = ({desc}) => {
  return (
    <section className="py-12 flex justify-center">
      <div className="bg-teal-600 text-white rounded-2xl p-8 shadow-lg text-center max-w-3xl w-full">
        <h2 className="text-3xl font-semibold mb-4 sm:text-2xl">
          {desc}
        </h2>
        <a
          href="/book-trial"
          className="mt-6 inline-block bg-white text-teal-600 font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:bg-teal-50"
        >
          Book a Free Trial
        </a>
      </div>
    </section>
  );
};

export default MathsCalltoAction;
