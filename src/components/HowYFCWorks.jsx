import React from 'react';

// Step Card Component for reusability
const ProcessStep = ({ title, description }) => {
  return (
    <div className="flex flex-col border border-teal-600 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <h3 className="text-2xl font-semibold text-teal-700 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

// Main HowYFCWorks component
const HowYFCWorks = () => {
  const steps = [
    {
      title: "Free Initial Consultation",
      description:
        "We begin with a free consultation to assess your needs and set learning goals.",
    },
    {
      title: "Personalized Learning Plans",
      description:
        "Based on the consultation, we create a custom plan tailored to your academic or language learning goals.",
    },
    {
      title: "Interactive Online Sessions",
      description:
        "All sessions are conducted online using tools like Zoom, Teams, or Google Meet, making learning easy and flexible.",
    },
    {
      title: "Regular Progress Reports",
      description:
        "We provide ongoing feedback and track your progress, adjusting the plan as needed to ensure success.",
    },
  ];

  return (
    <section className="py-4 p-4">
      <h2 className="text-4xl font-extrabold text-teal-700 text-center mb-10">
        How YFC Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <ProcessStep key={index} title={step.title} description={step.description} />
        ))}
      </div>
    </section>
  );
};

export default HowYFCWorks;
