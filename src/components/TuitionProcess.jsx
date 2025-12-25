import React from 'react';



const ScienceTuitionProcess = () => {
    return (
        <section className="mb-[70px]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-teal-700">
                How Our Online Science Tuition Works
            </h2>
            <p className="mb-9 text-center text-gray-700">
                Discover a personalized and effective approach to mastering science with our online tuition for students.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step) => (
                    <div key={step.number} className="relative p-6 bg-teal-50 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="absolute top-[-20px] left-0 w-12 h-12 bg-teal-600 text-white font-bold text-2xl rounded-full flex items-center justify-center shadow-md">
                            {step.number}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {step.title}
                        </h3>
                        <p className="text-gray-600">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ScienceTuitionProcess;
