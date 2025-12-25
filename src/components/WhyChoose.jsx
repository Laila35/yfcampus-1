import React from 'react';

const Card = ({ iconPath, title, description }) => {
  return (
    <div className="flex items-start border border-teal-600 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-white">
      <svg
        className="w-10 h-10 text-teal-600 mr-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
      </svg>
      <div>
        <h3 className="font-semibold text-xl text-teal-700">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

// Main component
const WhyChooseYFC = () => {
  return (
    <section className="py-2 text-center p-4">
      <h2 className="text-4xl font-extrabold text-teal-700 mb-10">Why Choose YFC?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card
          iconPath="M12 2v20m10-10H2"
          title="Experienced Tutors"
          description="Our tutors are highly qualified professionals with years of teaching experience, specializing in a wide range of subjects."
        />
        <Card
          iconPath="M12 4v16m8-8H4"
          title="Personalized Learning Plans"
          description="Each student receives a tailored learning plan based on their academic needs and learning goals, focusing on areas needing the most support."
        />
        <Card
          iconPath="M3 8h18M3 12h18m-7 4h7"
          title="Flexible Online Learning"
          description="Lessons are conducted online using Zoom, Teams, or Google Meet, making it easy to fit tutoring into even the busiest schedules."
        />
        <Card
          iconPath="M12 2v20m10-10H2"
          title="Proven Success"
          description="YFC students consistently achieve top marks in exams like SAT, ACT, GCSE, A-Level, and AP, with improved academic performance."
        />
      </div>
    </section>
  );
};

export default WhyChooseYFC;
