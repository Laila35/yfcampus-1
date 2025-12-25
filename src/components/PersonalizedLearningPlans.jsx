import React from 'react';

// Plan Card Component for reusability
const PlanCard = ({ title, description }) => {
  return (
    <div className="border border-teal-600 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-center">
      <h3 className="text-2xl font-semibold text-teal-700 mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Main PersonalizedLearningPlans component
const PersonalizedLearningPlans = () => {
  return (
    <section className="py-4 p-4">
      <h2 className="text-4xl font-extrabold text-teal-700 text-center mb-10">
        Personalized Learning Plans
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-around gap-6 max-w-4xl mx-auto">
        <PlanCard
          title="Consultation"
          description="We begin with a free consultation to assess your needs and set learning goals."
        />
        <PlanCard
          title="Customized Plans"
          description="We create a custom plan tailored to your academic or language learning goals."
        />
      </div>
    </section>
  );
};

export default PersonalizedLearningPlans;
