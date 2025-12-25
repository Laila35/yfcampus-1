import Banner from "@/components/Banner";
import React from "react";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import { FaLanguage } from 'react-icons/fa';
import CallToAction from "@/components/CallToAction";
import SuccessStories from "@/components/SuccessStories";

export const metadata = {
  title: 'Learn Arabic Online | Personalized Arabic Language Tutoring | YFC',
  description: 'Learn Arabic online with personalized tutoring from YFC. Beginners to advanced, classical & modern Arabic. Free trial available!',
};

const ArabicCourse = () => {
  const breadcrumbData = { id: 2, name: "Arabic Language", link: "/" };

  return (
    <>
    <head>

      <title>Learn Arabic Online | Personalized Arabic Language Tutoring | YFC</title>
<meta name="description" content="Learn Arabic online with personalized tutoring from YFC. Beginners to advanced, classical & modern Arabic. Free trial available!" />
<meta name="keywords" content="learn Arabic online, Arabic tutoring, online Arabic course, Arabic classes online, classical Arabic, modern Arabic, YFC Arabic" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://yfcampus.com/courses/learn-arabic-online" />

{/* <!-- Open Graph --> */}
<meta property="og:title" content="Learn Arabic Online | Personalized Arabic Language Tutoring | YFC" />
<meta property="og:description" content="Learn Arabic online with personalized tutoring from YFC. Beginners to advanced, classical & modern Arabic. Free trial available!" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://yfcampus.com/courses/learn-arabic-online" />
<meta property="og:image" content="https://yfcampus.com/Images/Courses/learn-arabic.webp" />

{/* <!-- Twitter Card --> */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Learn Arabic Online | Personalized Arabic Language Tutoring | YFC" />
<meta name="twitter:description" content="Learn Arabic online with personalized tutoring from YFC. Beginners to advanced, classical & modern Arabic. Free trial available!" />
<meta name="twitter:image" content="https://yfcampus.com/Images/Courses/learn-arabic.webp" />

  <Script
        type="application/ld+json"
        id="arabic-course-jsonld"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Online Arabic Language Course",
            description: metadata.description,
            provider: {
              "@type": "Organization",
              name: "Your Future Campus",
              sameAs: "https://yfcampus.com",
              logo: "https://yfcampus.com/Images/yfc-logo.png"
            },
            educationalCredentialAwarded: "Certificate of Completion",
            inLanguage: "ar",
            image: "https://yfcampus.com/Images/Courses/learn-arabic.webp"
          })
        }}
      />


</head>
      <Banner breadcrumbData={breadcrumbData} />

      <div className="px-5 md:px-24 mt-10">
        {/* Intro Section */}
        <section className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="md:w-3/5">
            <h1 className="text-3xl font-bold text-teal-700 mb-4">
              Learn Arabic Online | Beginner to Advanced Arabic Tutoring
            </h1>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Your Future Campus (YFC), our comprehensive online Arabic course helps learners of all levels—from absolute beginners to advanced speakers—achieve fluency. Our expert tutors will guide you through classical Arabic (Fusha) and your choice of regional dialects, using personalized lesson plans in reading, writing, listening, and speaking.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you aim to study Arabic literature, travel across the Arab world, communicate professionally, or connect with family and culture, our flexible online format and immersive content provide the tools you need to succeed.
            </p>
          </div>
          <div className="md:w-2/5">
            <Image
              src="/Images/Courses/learn-arabic.webp"
              alt="Student learning Arabic online with YFC tutor"
              width={600}
              height={400}
              className="h-[250px] w-full rounded-2xl border border-teal-600 hover:scale-105 transition-transform"
            />
          </div>
        </section>

        {/* Why Learn Arabic */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-teal-600 mb-4">
            Why Learn Arabic with YFC?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li><strong>Expert Native Tutors:</strong> Fluent in classical and dialectal Arabic, trained for your success.</li>
            <li><strong>Tailored Curriculum:</strong> Classes targeted to your goals—be it casual conversation, religious texts, or business communication.</li>
            <li><strong>Convenient Online Platform:</strong> Zoom, Teams, or Meet—learn from home, on your schedule.</li>
            <li><strong>Engaging Multimedia Lessons:</strong> Videos, audio drills, exercises—learn using best practices.</li>
            <li><strong>Free Trial Available:</strong> Try before you commit with a complimentary session.</li>
          </ul>
        </section>

        {/* Course Learning Outcomes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-teal-600 mb-4">
            What You'll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Arabic Alphabet & Pronunciation", desc: "Build a strong foundation with correct script and phonetics.", icon: <FaLanguage /> },
              { title: "Grammar & Sentence Structure", desc: "Master grammar rules, verb conjugation, syntax and vocabulary expansion.", icon: "🔠" },
              { title: "Conversational Fluency", desc: "Practice real-life dialogues focused on your region or purpose.", icon: "🗣️" },
              { title: "Reading & Writing Skills", desc: "Read classical and modern texts, write essays and messages confidently.", icon: "📖" },
              { title: "Cultural & Literary Familiarity", desc: "Immerse in traditional and modern works to appreciate language nuance.", icon: "🌍" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg border-2 border-teal-500 hover:scale-105 transition-transform">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl text-teal-600">{item.icon}</div>
                  <h3 className="text-xl font-bold text-teal-700">{item.title}</h3>
                </div>
                <p className="mt-4 text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Course Flow */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-teal-600 mb-4">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Free Assessment", desc: "We evaluate your current Arabic level & set clear goals." },
              { step: 2, title: "Personalized Lessons", desc: "Classes tailored to your goals using a custom curriculum." },
              { step: 3, title: "Live Interactive Sessions", desc: "Engage in real-time lessons with immediate feedback." },
              { step: 4, title: "Progress & Certification", desc: "Track your progress, earn certificates, and celebrate success." },
            ].map((s, index) => (
              <div key={index} className="relative p-6 bg-teal-50 rounded-lg shadow-lg hover:shadow-2xl">
                <div className="absolute -top-5 left-0 w-12 h-12 bg-teal-600 text-white font-bold text-2xl rounded-full flex items-center justify-center">{s.step}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <SuccessStories />

        {/* Call to Action */}
        <CallToAction
          heading="Start Learning Arabic with YFC Today!"
          description="Book your free trial session and begin your Arabic journey now."
          buttonText="Sign Up for Free Trial"
          buttonLink="/get-register"
        />
      </div>
    </>
  );
};

export default ArabicCourse;
