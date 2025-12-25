import Image from 'next/image';
import Link from 'next/link';

const testPreparations = [
  {
    title: "SAT Preparation",
    description:
      "Achieve top scores on the SAT with personalized lessons covering reading, writing, and math.",
    image: "/Images/sat.webp",
    link: "/online-test-preparation",
  },
  {
    title: "ACT Preparation",
    description:
      "Comprehensive tutoring for all sections of the ACT, including English, math, reading, science, and writing.",
    image: "/Images/act.jpg",
    link: "/online-test-preparation",
  },
  {
    title: "GCSE & A-Level Preparation",
    description:
      "Expert tutoring for GCSE and A-Level exams in subjects like Maths, Science, English, and Computer Science.",
    image: "/Images/gcse.webp",
    link: "/online-test-preparation",
  },
  {
    title: "AP Exam Preparation",
    description:
      "Prepare for AP exams across subjects like Calculus, Biology, Chemistry, and English with our expert tutors.",
    image: "/Images/ap.jpg",
    link: "/online-test-preparation",
  },
  {
    title: "IELTS Preparation",
    description:
      "Improve your English language skills for the IELTS exam with personalized lessons focused on speaking, listening, reading, and writing.",
    image: "/Images/ielts.jpg",
    link: "/online-test-preparation",
  },
  {
    title: "TOEFL Preparation",
    description:
      "Enhance your English language skills for the TOEFL exam with tailored lessons focusing on speaking, listening, reading, and writing.",
    image: "/Images/toefl.svg",
    link: "/online-test-preparation",
  },
];

const TestPreparationServices = () => {
  return (
    <div className="text-center py-12">
      <h1 className="font-bold text-[30px] lg:text-[46px] text-teal-600 mb-8">
        Test Preparation Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 b md:px-10 xl:px-10">
        {testPreparations.map((service, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-[180px] rounded-md overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="font-semibold text-lg text-black mt-3 mb-2">
              {service.title}
            </h2>
            <p className="text-sm text-gray-700">{service.description}</p>
            <div className="mt-3 space-x-4">
              {/* Learn More button */}
              <Link
  aria-label="Learn more"
  href={service.link}
  className="text-teal-800 px-4 py-2 border border-teal-800 rounded-md hover:bg-teal-600 hover:text-white transition duration-300"
>
  Get More Info 
</Link>

              {/* Get Register button */}
              <Link
  aria-label="get free trial"
  href="/get-register"
  className="bg-teal-800 text-white px-4 py-2 rounded-md hover:bg-teal-900 transition duration-300"
>
  Get Free Trial
</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestPreparationServices;
