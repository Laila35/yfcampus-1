 
import CommonCta from '@/components/shared/CommonCta';
import FaqsSection from '@/components/shared/FAQS';
 ;
import AcadmicSubject from '@/components/uk/subjects/AcadmicSubject';
import EnrichmentCourses from '@/components/uk/subjects/EnrichmentCourses';
import ExamPreparation from '@/components/uk/subjects/ExamPreparation';
import HeroSection from '@/components/uk/subjects/HeroSection';
import LearningStages from '@/components/uk/subjects/LearningStages';
import LearningAndPricingSection from '@/components/uk/subjects/pricingAnd_outcomes/LearningAndPricingSection';
import TeachingApproach from '@/components/uk/subjects/TeachingApproach';
import React from 'react'
const page = () => {
  const title="Online Tuition Subjects UK – Explore All Courses for Primary to A-Level Students";
  const subtitle="Find the perfect one-to-one online tutor for your child in Maths, English, Science, Languages & more — taught by qualified UK teachers.";
  const desc="At Your Future Campus UK, we make learning personal, interactive, and goal-driven.Our expert tutors teach students from Early Learning (age 3+) to A-Level, covering core academic subjects and enrichment programmes.Whether your child needs help catching up, exam preparation, or extra challenge, our one-to-one online lessons build confidence and mastery in every topic.Each lesson follows the UK National Curriculum, aligned with AQA, Edexcel, OCR, and Cambridge IGCSE boards.Explore our subjects below and start your free trial to see why families across the UK choose Your Future Campus for trusted, high-quality online education."
  const faqs = [
  {
    question: "Which subjects do you teach?",
    answer:
      "All core academic subjects — Maths, English, Science, Computer Science, and Languages — plus Coding and Spoken English.",
  },
  {
    question: "Are lessons aligned with UK schools?",
    answer:
      "Yes — all courses follow the National Curriculum and exam board requirements.",
  },
  {
    question: "Can I combine different subjects in one plan?",
    answer:
      "Yes — you can mix subjects like Maths and Science or English and Coding.",
  },
  {
    question: "Do you teach both Primary and Secondary students?",
    answer: "Yes — we teach students from ages 3 to 18.",
  },
  {
    question: "Is there a trial lesson before enrolment?",
    answer:
      "Yes — a free trial lesson and assessment are included before joining.",
  },
];
 const ctaHeading="Start Learning with Your Future Campus Today";
 const ctaSubheading="Book your free trial lesson and connect with qualified UK tutors who make learning engaging and effective.";
 const number=" +44 7532 792318";
 const email=" admin@yfcampus.com";
 const cta={
  text:"Book Your Free Trial",
  url:"/uk/book-lesson"
 }
  return (
    <main>
      <HeroSection title={title}   desc={desc} />
      <AcadmicSubject />
      <LearningStages />
      <ExamPreparation />
      <EnrichmentCourses />
      <TeachingApproach />
      <LearningAndPricingSection />
      <CommonCta heading={ctaHeading} subtitle={ctaSubheading} number={number} email={email} cta={cta}/>
      <FaqsSection  heading=" FAQ – Subjects Overview" faqs={faqs}/>
    </main>
  )
}
export default page
