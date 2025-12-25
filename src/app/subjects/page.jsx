import React from "react";
import Banner from "@/components/Banner";
import CallToAction from "@/components/CallToAction";
import TestimonialCard from "@/components/TestimonialCard";
import ServicesWeOffer from "@/components/ServicesWeOffer";
import Image from "next/image";
import CourseCards from "@/components/ServicesWeOffer";
import SuccessStories from "@/components/SuccessStories";

export const metadata = {
    title: 'Online Tuition Classes for Academic Subjects | Your Future Campus',
    description: "Enroll in expert-led online tuition classes for Maths, Science, English, and more with Your Future Campus. Our experienced tutors provide flexible, curriculum-aligned learning for students in the UK, USA, Canada, Australia, and New Zealand.",
};

const SubjectSection = ({ title, metaDescription, content, keywords }) => (
    <section className="px-5 md:px-24 mt-10">
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords.join(", ")} />
        <h2 className="text-3xl font-bold text-center mb-4 text-teal-600">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{content}</p>
    </section>
);

const subjects = () => {


    const courseData = [
        {
          title: "Maths Tuition (Grades 1-12)",
          description:
            "Expert maths tutoring from primary through A-Level and GCSE, covering topics like algebra, geometry, calculus, and more.",
          image: "/Images/maths.webp",
          learnMoreLink: "/online-maths-tuition",
        },
        {
          title: "Science Tuition (Grades 1-12)",
          description:
            "In-depth tutoring for Physics, Chemistry, and Biology, helping students build strong foundations for GCSE and A-Level exams.",
          image: "/Images/science_banner.webp",
          learnMoreLink: "/online-science-tuition",
        },
        {
          title: "English Tuition (Grades 1-12)",
          description:
            "Personalized English tutoring for reading comprehension, writing skills, and exam preparation for GCSE and A-Level.",
          image: "/Images/english.webp",
          learnMoreLink: "/online-english-tuition",
        },
        {
          title: "Computer Science Tuition (Grades 9-12)",
          description:
            "Master coding, algorithms, and data structures with our Computer Science tutoring designed for GCSE and A-Level students.",
          image: "/Images/developer.webp",
          learnMoreLink: "/online-computer-science-tuition",
        },
      ];
      
    const breadcrumbData = {
        id: 3,
        name: "Online Tuition Classes for Academic Subjects",
        link: "/",
    };

    return (
        <>
            <head>
                <title>Online Tuition Classes for Academic Subjects | Your Future Campus</title>
                <meta name="description" content="Enroll in expert-led online tuition classes for Maths, Science, English, and more with Your Future Campus." />
            </head>

            <Banner breadcrumbData={breadcrumbData} />

          <div>
            <div className="px-5 md:px-24 mt-10">
              
                        <h1 className="text-3xl font-bold text-teal-700 mb-4">Online Tuition Classes for Academic Subjects at Your Future Campus</h1>
                <section className="flex justify-between  h-auto gap-3 flex-col md:flex-row">
                    <div className="w-full md:w-3/5">
                        <p className="text-gray-700 leading-relaxed">
                            At Your Future Campus, we specialize in delivering high-quality online tuition across core academic subjects, including Maths, Science, Physics, Chemistry, Biology, and English. Our expert tutors provide a personalized approach, ensuring students receive targeted support tailored to their curriculum.
                        </p>
                    </div>
                    <Image 
                    src={"/Images/subjects.webp"}
                    width={300}
                    height={300}

                    />
                </section>

                </div>
                <CourseCards courses={courseData} />

                {/* Success Stories Section */}
                <SuccessStories />

                {/* Call to Action Section */}
                <CallToAction
                    heading="Enroll Today in Online Tuition Classes at Your Future Campus"
                    description="Ready to get started with expert-led online tuition? Enroll today to experience personalized, curriculum-aligned support in Maths, Science, English, and more."
                    buttonText="Join Your Future Campus"
                    buttonLink="/get-register"
                />
            </div>
        </>
    );
};

export default subjects;
