import Link from 'next/link';

const CourseCards = ({ courses }) => {
  return (
    <>
      <div className="text-center font-bold text-[28px] lg:text-[44px] text-teal-600 mt-6 mb-6">
        Subjects We Offer
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-4 md:px-8 xl:px-12">
        {courses.map((course, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden bg-white flex flex-col justify-between h-full"
          >
            <div>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-4 flex-grow">
                <h2 className="font-semibold text-lg text-black mb-2">{course.title}</h2>
                <p className="text-gray-700 text-sm mb-4">{course.description}</p>
              </div>
            </div>
            <div className="p-2 flex gap-4 justify-center border-t border-gray-200">
            <Link
  aria-label="Learn More"
  href={course.learnMoreLink}
  className="text-teal-800 border-teal-800 hover:text-white border px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-600 transition"
>
Get More Info 
</Link>

<Link
  aria-label="get free trial"
  href="/get-register"
  className="bg-teal-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-800 transition"
>
  Get Free Trial
</Link>

            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseCards;
