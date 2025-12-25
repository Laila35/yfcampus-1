import React from 'react';
import Link from 'next/link'; 

const LanguageCourseCard = ({ title, description, link, imageUrl }) => {
  return (
    <div className="flex flex-col border p-4 rounded-lg shadow-sm transition-transform transform  hover:shadow-2xl bg-white w-full sm:w-72">
      {/* Image section */}
      <div className="mb-3 h-40 overflow-hidden rounded-lg">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-lg" />
      </div>

      {/* Course Title */}
      <h3 className="text-xl font-semibold text-teal-700 mb-1">{title}</h3>

      {/* Course Description */}
      <p className="text-gray-600 mb-4 text-sm">{description}</p>

    {/* Button section */}
<div className="mt-auto flex justify-center space-x-4">

{/* Learn More button */}
   <Link
        href={link}
        aria-label="Learn More"
        className=" p-2 text-teal-700 border border-teal-700 rounded-xl "
      >
        Get More Info
      </Link>

      {/* Get Free Trial Button */}
      <Link
        href="/get-register"
        aria-label="Get Free Trial"
        className="bg-teal-700 p-2 text-white rounded-xl "
      >
        Get Free Trial
      </Link>

</div>
</div>
  );
};

const LanguageCourses = () => {
  return (
    <section className="py-4 px-4">
      <h2 className="text-3xl font-extrabold text-teal-700 text-center mb-8">
        Language Courses
      </h2>

      <div className="flex justify-evenly flex-wrap">
        <LanguageCourseCard
          title="Arabic Language Course"
          description="Learn Arabic online, from basic to advanced levels, covering both classical Arabic and modern dialects."
          link="/online-arabic-course"
          imageUrl="/Images/Courses/Arabic Language Online.webp" // Replace with actual image URL
        />
        <LanguageCourseCard
          title="Urdu Language Course"
          description="Personalized Urdu lessons for beginners or advanced learners, focusing on reading, writing, and speaking fluently."
          link="/online-urdu-course"
          imageUrl="/Images/Courses/urdu.jpg" // Replace with actual image URL
        />
        <LanguageCourseCard
          title="Persian Language Course"
          description="Learn Persian (Farsi) for cultural or professional purposes with personalized online tutoring."
          link="/online-persian-course"
          imageUrl="/Images/Courses/farsi-language-learn.webp" // Replace with actual image URL
        />
        <LanguageCourseCard
          title="English as a Second Language (ESL)"
          description="Improve your English speaking, writing, and comprehension skills with our ESL course tailored for non-native speakers."
          link="/online-esl-course"
          imageUrl="/Images/Courses/esl-course.webp" // Replace with actual image URL
        />
      </div>
    </section>
  );
};

export default LanguageCourses;
