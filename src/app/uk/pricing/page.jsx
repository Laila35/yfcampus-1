 import CommonCta from '@/components/shared/CommonCta'
import FaqsSection from '@/components/shared/FAQS'
import DiscountsFamilyPackages from '@/components/uk/pricing/DiscountsFamilyPackages'
import HowToEnrol from '@/components/uk/pricing/HowToEnrol'
import LevelWiseSummary from '@/components/uk/pricing/LevelWiseSummary'
import PricingHeroSection from '@/components/uk/pricing/PricingHeroSection'
import PricingPaln from '@/components/uk/pricing/PricingPaln'
import SubjectsIncluded from '@/components/uk/pricing/SubjectsIncluded'
import WhatsIncluded from '@/components/uk/pricing/WhatsIncluded'
import Script from 'next/script'
import React from 'react'
const keywords = [
  "online tuition prices uk",
  "affordable private tutors uk",
  "1 to 1 tutor cost uk",
  "online tutoring rates uk",
  "uk tuition fees for online classes"
];







 export const metadata={
  title:"Online Tuition Prices UK | Affordable One-to-One Tutors | Your Future Campus UK",
  description:"View our affordable online tuition prices for Primary to A-Level students. One-to-one lessons with UK-qualified tutors. Flexible 30-minute or 1-hour plans.",
  robots:{index:true,follow:true},
  keywords:keywords.map((k) => k),
  alternates:{canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/pricing`},
  OpenGraph: {
    title: "Online Tuition Prices UK | Affordable One-to-One Tutors | Your Future Campus UK",
    description:"View our affordable online tuition prices for Primary to A-Level students. One-to-one lessons with UK-qualified tutors. Flexible 30-minute or 1-hour plans.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/pricing`,
    publisher:"Your Future Campus UK",
    images: [
      
    ],
    siteName: 'Your Future Campus UK',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Online Tuition Prices UK | Affordable One-to-One Tutors | Your Future Campus UK",
    description:"View our affordable online tuition prices for Primary to A-Level students. One-to-one lessons with UK-qualified tutors. Flexible 30-minute or 1-hour plans.",
    images: [
      
    ]
  }
 }
 const page = () => {
  const heading="Start Learning Today";
  const subtitle="Choose your plan, book your free trial, and let our qualified UK tutors help your child succeed.";
  const number=" +44 7532 792318";
  const email="admin@yfcampus.com";
  const cta={
    text:"Book a FREE Trial Lesson",
    url:"/uk/book-lesson"
  }
  const faqs = [
  {
    question: "Are prices the same for all subjects?",
    answer: "Yes — pricing applies across all subjects, with no hidden fees.",
  },
  {
    question: "Can we change lesson frequency later?",
    answer: "Yes — upgrade or downgrade plans anytime.",
  },
  {
    question: "Is payment monthly or per lesson?",
    answer: "Monthly in advance — no contracts required.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "Debit/Credit Card, PayPal, and Bank Transfer.",
  },
  {
    question: "Is there a registration or material fee?",
    answer: "No — all resources and study materials are included.",
  },
];
const faqsSchema={
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}
const breadcrumbSchema={
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${process.env.NEXT_PUBLIC_BASE_URL}/`
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Pricing",
      "item": `${process.env.NEXT_PUBLIC_BASE_URL}/uk/pricing`
    }
  ]
};
const ItemPageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemPage",
  "name": "Affordable Online Tuition UK – Transparent Pricing for 1-to-1 Lessons",
  "description": "View our affordable online tuition prices for Primary to A-Level students. One-to-one lessons with UK-qualified tutors. Flexible 30-minute or 1-hour plans.",
  "url": `${process.env.NEXT_PUBLIC_BASE_URL}/uk/pricing`,
  "keywords": keywords,
  "publisher": {
    "@type": "Organization",
    "name": "Your Future Campus UK",
    "logo": {
      "@type": "ImageObject",
      "url": `${process.env.NEXT_PUBLIC_BASE_URL}/yfc-logo.png`
    }
  },
  
  "mainEntity": {
    "@type": "Course",
    "name": "Online One-to-One Tuition UK",
    "description": "Personalized online lessons for Maths, English, Science, Coding, Languages, and more."
  }
};

   return (
     <main className='mx-4 md:mx-14'>
       <PricingHeroSection />
       <PricingPaln/>
       <SubjectsIncluded/>
       <LevelWiseSummary/>
       <WhatsIncluded/>
       <HowToEnrol/>
       <DiscountsFamilyPackages/>
       <CommonCta heading={heading} subtitle={subtitle} number={number} email={email} cta={cta}/>
       <FaqsSection faqs={faqs} heading={"FAQ – Tuition Fees & Plans"}/>
       <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqsSchema) }} />
       <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
       <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ItemPageSchema) }} />
     </main>
   )
 }
 
 export default page
 