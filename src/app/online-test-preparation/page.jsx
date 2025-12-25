import Banner from "@/components/Banner";
import React from "react";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import SuccessStories from "@/components/SuccessStories";
import Script from "next/script";

const TestPreparation = () => {
    const breadcrumbData = {
        id: 6,
        name: "Test Preparation",
        link: "/",
    };

    return (
        <>
            <head>
  {/* Basic Meta Tags */}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Your Future Campus (YFC)" />

  {/* Title */}
  <title>Online Test Preparation | SAT, ACT, AP, GCSE, A-Level & More | YFC</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Prepare for standardized tests like SAT, ACT, AP, GCSE, and A-Level with YFC’s expert online test preparation courses. Personalized tutoring, flexible schedules, and a free trial!"
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="online test preparation, SAT tutoring, ACT prep, GCSE tutoring, A-Level tutoring, AP exam preparation, standardized test prep, online coaching, virtual test prep, personalized test prep"
  />

  {/* Open Graph (OG) Tags */}
  <meta property="og:title" content="Online Test Preparation | SAT, ACT, AP, GCSE, A-Level & More | YFC" />
  <meta
    property="og:description"
    content="Prepare for standardized tests like SAT, ACT, AP, GCSE, and A-Level with YFC’s expert online test preparation courses. Personalized tutoring and flexible scheduling. Free trial available!"
  />
  <meta property="og:image" content="https://yfcampus.com/Images/test-preparation.webp" />
  <meta property="og:url" content="https://yfcampus.com/online-test-preparation/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Your Future Campus (YFC)" />
  <meta property="og:locale" content="en_US" />

  {/* Twitter Card Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Online Test Preparation | SAT, ACT, AP, GCSE, A-Level & More | YFC" />
  <meta name="twitter:description" content="Personalized online tutoring for SAT, ACT, AP, GCSE, and A-Level. Expert teachers, flexible schedules, and a free trial. Enroll now with YFC!" />
  <meta name="twitter:image" content="https://yfcampus.com/Images/test-preparation.webp" />
  <meta name="twitter:site" content="@YFC_Global" />
  <meta name="twitter:url" content="https://yfcampus.com/online-test-preparation/" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://yfcampus.com/online-test-preparation/" />

  {/* JSON-LD Structured Data */}
  <Script
    id="jsonld-test-preparation"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Online Test Preparation",
        "description": "Online preparation courses for SAT, ACT, AP, GCSE, and A-Level exams with expert tutors, flexible schedules, and personalized support.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Your Future Campus",
          "url": "https://yfcampus.com",
          "logo": "https://yfcampus.com/Images/test-preparation.webp",
          "sameAs": [
            "https://www.facebook.com/yourfuturecampus/",
            "https://twitter.com/yfcampus/",
            "https://www.linkedin.com/company/yfcampus/",
            "https://www.instagram.com/yourfuturecampus/"
          ]
        },
        "hasCourseInstance": [
          {
            "@type": "CourseInstance",
            "courseMode": "online",
            "instructor": {
              "@type": "Person",
              "name": "Certified Test Prep Instructor"
            },
            "startDate": "2025-07-01",
            "endDate": "2025-12-31",
            "location": {
              "@type": "Place",
              "name": "Virtual Classroom"
            }
          }
        ],
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": "Student"
        },
        "subjectOf": {
          "@type": "CreativeWork",
          "name": "Standardized Test Preparation",
          "about": ["SAT", "ACT", "AP", "GCSE", "A-Level"]
        }
      }),
    }}
  />
</head>




            <Banner breadcrumbData={breadcrumbData} />

            <div className="px-5 md:px-24 mt-10">
                <section className="flex justify-between h-auto gap-3 flex-col md:flex-row">
                    <div className="w-full md:w-3/5">
                        <h1 className="text-3xl font-bold text-teal-700 mb-4">Online Test Preparation | Expert Tutoring for <br /> SAT, ACT, AP, GCSE, A-Level & More</h1>
                        <p className="text-gray-700 leading-relaxed">
                            At Your Future Campus (YFC), we provide specialized online test preparation to help students excel in their academic goals. Whether you're preparing for high school exams, standardized tests, or university entrance exams, our personalized tutoring will ensure you’re ready for success. Our tutors are experts in preparing students for a wide range of exams, including the SAT, ACT, AP, GCSE, A-Level, and more. Our flexible online platform makes it easy to schedule sessions at times that work for you, ensuring comprehensive test prep from the comfort of your home.
                        </p>
                    </div>

                    <div className="w-full md:w-2/5 order-first lg:order-last pl-3">
                        <Image
                            src="/Images/test-preparation.webp"
                            alt="Student preparing for SAT, ACT, and GCSE exams online with YFC tutor"
                            width={700}
                            height={400}
                            className="h-[250px] w-full rounded-md mx-2 md:mx-0"
                        />
                    </div>
                </section>

                {/* Why Choose YFC Section */}
                <section className="px-5 md:px-24 mt-10">
                    <h2 className="text-3xl font-bold text-center mb-4 text-teal-600">Why Choose YFC for Online Test Preparation?</h2>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-8 space-y-4">
                        <li><strong>Expert Tutors:</strong> Our tutors are highly experienced in preparing students for the world’s most important standardized exams.</li>
                        <li><strong>Customized Learning Plans:</strong> We develop personalized study plans based on each student’s strengths and weaknesses.</li>
                        <li><strong>Comprehensive Test Strategies:</strong> We teach proven test-taking strategies, time management skills, and stress-relief techniques.</li>
                        <li><strong>Flexible Online Sessions:</strong> All of our test prep courses are delivered online through Zoom, Teams, or Google Meet, allowing you to learn from anywhere.</li>
                    </ul>
                </section>

                {/* Tests We Prepare Students For Section */}
                <section className="px-5 md:px-24 mt-10">
                    <h2 className="text-3xl font-bold text-center mb-8 mt-1 text-teal-600">Tests We Prepare Students For</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "SAT (Scholastic Assessment Test)", description: "Tailored lessons in Reading, Math, and Writing to maximize your SAT score.", link: "/sat-preparation" },
                            { title: "ACT (American College Testing)", description: "Preparation for English, Math, Reading, Science, and optional Writing sections.", link: "/act-preparation" },
                            { title: "AP (Advanced Placement)", description: "Expert tutoring for AP exams across subjects like AP Calculus, AP Biology, and more.", link: "/ap-preparation" },
                            { title: "GCSE (General Certificate of Secondary Education)", description: "Comprehensive tutoring in core GCSE subjects including Maths, Science, and English.", link: "/gcse-preparation" },
                            { title: "A-Level (Advanced Level)", description: "Focused A-Level tutoring in subjects like Maths, Physics, and Chemistry.", link: "/a-level-preparation" },
                            { title: "IB (International Baccalaureate)", description: "Tailored IB exam preparation in Mathematics, Sciences, English, and Business.", link: "/ib-preparation" },
                            { title: "IELTS (International English Language Testing System)", description: "Focused practice in Listening, Reading, Writing, and Speaking for high scores.", link: "/ielts-preparation" },
                            { title: "TOEFL (Test of English as a Foreign Language)", description: "Comprehensive prep for TOEFL focusing on listening, speaking, reading, and writing skills.", link: "/toefl-preparation" },
                        ].map((test, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-2 border-teal-500 hover:shadow-2xl transition-shadow duration-300 ">
                                <h3 className="text-xl font-bold text-teal-700 mb-2">{test.title}</h3>
                                <p className="text-gray-700 mb-4">{test.description}</p>
                               
                            </div>
                        ))}
                    </div>
                </section>

                {/* How Our Test Preparation Works Section */}
                <section className="px-5 md:px-24 mt-10">
                    <h2 className="text-3xl font-bold text-center mb-8 text-teal-600">How Our Online Test Preparation Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[ 
                            { step: 1, title: "Free Initial Assessment", description: "We begin by assessing your current knowledge and identifying areas for improvement." },
                            { step: 2, title: "Customized Study Plans", description: "We create a study plan based on your strengths, weaknesses, and the test you're preparing for." },
                            { step: 3, title: "Interactive Online Lessons", description: "Our sessions use interactive tools, practice exams, and personalized tutoring to ensure effective learning." },
                            { step: 4, title: "Regular Progress Tracking", description: "We monitor your progress and adjust the study plan as needed to make sure you’re ready for the test day." },
                        ].map((step, index) => (
                            <div key={index} className="relative p-6 bg-teal-50 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <div className="absolute top-[-20px] left-0 w-12 h-12 bg-teal-600 text-white font-bold text-2xl rounded-full flex items-center justify-center shadow-md">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Success Stories Section */}
               <SuccessStories/>

                {/* Call to Action Section */}
                <CallToAction
                    heading="Start Preparing for Success with YFC!"
                    description="Sign up for a free trial session and get expert guidance to help you ace your upcoming exams."
                    buttonText="Sign Up for a Free Trial"
                    buttonLink="/get-register"
                />
            </div>
        </>
    );
};

export default TestPreparation;
