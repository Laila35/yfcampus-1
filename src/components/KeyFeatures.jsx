import React from 'react';

// Card component to encapsulate each key feature
const FeatureCard = ({ iconPath, title, description }) => {
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

// Main Key Features component
const KeyFeatures = () => {
  return (
    <section className="py-4 p-4">
      <h2 className="text-4xl font-extrabold text-teal-700 text-center mb-10">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <FeatureCard
          iconPath="M12 4v16m8-8H4"
          title="Free Initial Consultation"
          description="We start with a free consultation to assess the student’s needs and set clear academic goals."
        />
        <FeatureCard
          iconPath="M12 4v16m8-8H4"
          title="Interactive Online Platform"
          description="Lessons are delivered using real-time video, digital whiteboards, and instant feedback from tutors."
        />
        <FeatureCard
          iconPath="M12 4v16m8-8H4"
          title="One-on-One Tutoring"
          description="Students receive focused attention from expert tutors in a productive learning environment."
        />
        <FeatureCard
          iconPath="M12 4v16m8-8H4"
          title="Progress Reports"
          description="Parents and students receive regular progress reports to track improvement and adjust learning plans as needed."
        />
        <FeatureCard
          iconPath="M12 4v16m8-8H4"
          title="Global Access"
          description="Available to students worldwide, with tutors familiar with international curricula in the UK, USA, Canada, Australia, and beyond."
        />
        <FeatureCard
          iconPath="M12 4v16m8-8H4"
          title="Personalized Tutoring"
          description="Join our online academy where expert tutors provide personalized guidance in a variety of subjects, helping students excel academically and gain confidence."
        />
      </div>
    </section>
  );
};

export default KeyFeatures;
