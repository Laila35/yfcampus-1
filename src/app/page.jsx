"use client";
import WhyChooseYFC from "@/components/WhyChoose";
import KeyFeatures from "@/components/KeyFeatures";
import LanguageCourses from "@/components/LanguageCourses";
import TestPreparation from "@/components/TestPreparation";
import MainSection from "@/components/MainSection";
import PersonalizedLearningPlans from "@/components/PersonalizedLearningPlans";
import HowYFCWorks from "@/components/HowYFCWorks";
import SuccessStories from "@/components/SuccessStories";
import YouTubeVideoSection from "@/components/YouTubeVideoSection";
import StatsSection from "@/components/StatsSection";
import CourseCards from "@/components/ServicesWeOffer";
const Home = () => {
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
      title: "Computer Science (Grades 1-12)",
      description:
        "Master coding, algorithms, and data structures with our Computer Science tutoring designed for GCSE and A-Level students.",
      image: "/Images/developer.webp",
      learnMoreLink: "/online-computer-science-tuition",
    },
  ];
  return (
    <>
    {/* SEO tags and infos */}
    <head>
  <meta charSet="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Your Future Campus | Expert Online Tutoring and Test Preparation</title>
  <meta name="description" content="Your Future Campus (YFC) offers expert online tutoring for subjects like Maths, Science, English, and Computer Science, along with language courses and test preparation for SAT, ACT, AP, GCSE, and A-Level. Personalized tutoring available worldwide!"/>
  <meta name="robots" content="index, follow"/>
  <link rel="canonical" href="https://yfcampus.com" />
  <meta name="keywords" content="online tutoring services, online test preparation, online language courses, SAT tutoring, GCSE tutoring, A-Level tutoring, personalized tutoring, online test prep, learn Arabic online, learn English online, SAT prep, A-Level exam prep"/>

  {/* Open Graph (OG) tags for social media */}
  <meta property="og:title" content="Your Future Campus | Expert Online Tutoring and Test Preparation" />
  <meta property="og:description" content="Your Future Campus (YFC) offers expert online tutoring for subjects like Maths, Science, English, and Computer Science, along with language courses and test preparation for SAT, ACT, AP, GCSE, and A-Level. Personalized tutoring available worldwide!" />
  <meta property="og:site_name" content="Your Future Campus" />
  <meta property="og:url" content="https://yfcampus.com" />
  <meta property="og:image" content="https://yfcampus.com/images/og-image.jpg" />
  <meta property="og:type" content="website" />

  {/* Twitter Card meta tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@yfcampus" />
  <meta name="twitter:creator" content="@yfcampus" />
  <meta name="twitter:title" content="Your Future Campus | Expert Online Tutoring and Test Preparation" />
  <meta name="twitter:description" content="Your Future Campus (YFC) offers expert online tutoring for subjects like Maths, Science, English, and Computer Science, along with language courses and test preparation for SAT, ACT, AP, GCSE, and A-Level. Personalized tutoring available worldwide!" />
  <meta name="twitter:image" content="https://yfcampus.com/images/og-image.jpg" />
  
  <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48"/>
  <meta name="next-size-adjust"/>
</head>
      {/* Main Content Sections */}
      <main>
        <MainSection />
        <CourseCards courses={courseData} />
        <TestPreparation />
        <LanguageCourses />
        <WhyChooseYFC />
        <YouTubeVideoSection />
        <KeyFeatures />
        <PersonalizedLearningPlans />
        <HowYFCWorks />
        <StatsSection />
        <SuccessStories />
      </main>
    
    </>
  );
};
export default Home;
