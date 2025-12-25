import CommonCta from '@/components/shared/CommonCta';
import HeroSection from '@/components/uk/Tutors/HeroSection'
import SubjectsHiring from '@/components/uk/Tutors/HiringTutor';
import HowToApply from '@/components/uk/Tutors/HowToApply';
import StudentFeedback from '@/components/uk/Tutors/StudentFeedback';
import TeachingStandard from '@/components/uk/Tutors/TeachingStandard';
import TutorApplicationForm from '@/components/uk/Tutors/TutorFrom';
import WhatWeOfferTutors from '@/components/uk/Tutors/WhatWeOfferTutors';
import WhoCanApply from '@/components/uk/Tutors/WhoCanApply';
import Script from 'next/script';
import React from 'react'
export const metadata = {
  title:' Become a Tutor at Your Future Campus UK',
  description:"Apply now to join Your Future Campus UK as an online tutor. Teach one-to-one classes in Maths, English, Science & more. Flexible hours & competitive pay.",
  robots:{index:true,follow:true},
  keywords:[
     "online tutoring jobs uk",
  "become an online tutor uk",
  "teach from home uk",
  "tutor recruitment uk",
  "apply for online teaching uk"
  ],
  alternates:{canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/tutors/join`},
  OpenGraph: {
    title: "Become a Tutor at Your Future Campus UK",
    description:"Apply now to join Your Future Campus UK as an online tutor. Teach one-to-one classes in Maths, English, Science & more. Flexible hours & competitive pay.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/tutors/join`,
    images: [
      {
        url: '/Images/HeroSection/join.avif',
        width: 800,
        height: 600,
        alt: 'Become a Tutor at Your Future Campus UK',
      },
      
    ],
    siteName: 'Your Future Campus UK',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Become a Tutor at Your Future Campus UK",
    description:"Apply now to join Your Future Campus UK as an online tutor. Teach one-to-one classes in Maths, English, Science & more. Flexible hours & competitive pay.",
    images: [
      {
        url: '/Images/HeroSection/join.avif',
        width: 800,
        height: 600,
        alt: 'Become a Tutor at Your Future Campus UK',
      },
    ],
   }
}
const page = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const title="Become a Tutor at Your Future Campus UK – Teach, Inspire & Empower Students";
  const subline="Join our growing team of UK-qualified tutors and make a real difference through flexible, one-to-one online teaching.";
  const description="At Your Future Campus UK, we’re always looking for passionate and qualified educators to join our online teaching team.We work with students across the UK and worldwide — helping them succeed in Maths, English, Science, Languages, Computer Science, and more.As a YFC tutor, you’ll have the flexibility to teach from home, set your availability, and connect with learners who value quality and dedication.If you’re a skilled communicator, patient teacher, and love inspiring students, we’d love to welcome you to our growing community of educators.";
  const points=[
   " Work from anywhere in the UK — 100% remote",
"  Teach one-to-one classes at your preferred times",
"  Earn competitive hourly rates",
 " Receive training and digital teaching support",
"  Connect with motivated students globally",
"  Join a professional, friendly academic team"

  ]
  const qoute="“We believe great teachers change lives — and our tutors make learning personal, engaging, and meaningful.”";
  const author=" – Director, Your Future Campus UK"
  const feedbacks=[
   " “Our tutor made Science so easy to understand — my daughter loves her lessons!”",
"  “Professional and patient. The tutor made learning fun and effective.”",
" “Highly recommend! My son’s confidence in Maths improved dramatically.”",

  ]
  const heading="Join Our Team Today";
  const subtitle="Begin your rewarding journey as an online tutor with Your Future Campus UK.Teach from anywhere, inspire students globally, and be part of a team that values education and excellence.";
  const number="+44 7532 792318";
  const email="hr@yfcampus.com";
  const cta={text:"Apply Now",url:"/uk/book-lesson"}
  const location="Remote (UK-based or international tutors welcome)"
  const BreadCrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}` },
    { "@type": "ListItem", "position": 2, "name": "Tutors", "item": `${BASE_URL}/uk/tutors` },
    { "@type": "ListItem", "position": 3, "name": "Join Our Team", "item": `${BASE_URL}/uk/tutors/join` }
  ]
}

const ItemPageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemPage",
  "name": "Become a Tutor UK | Online Tutoring Jobs | Your Future Campus",
  "description": "Apply now to join Your Future Campus UK as an online tutor. Teach one-to-one classes in Maths, English, Science & more. Flexible hours & competitive pay.",
  "url": `${BASE_URL}/uk/tutors/join`,
  "image": `${BASE_URL}/Images/HeroSection/join.avif`,
  "author": { "@type": "Organization", "name": "Your Future Campus UK", "url": `${BASE_URL}/uk/tutors/join` },
  "publisher": { "@type": "Organization", "name": "Your Future Campus UK", "url": `${BASE_URL}/uk/tutors/join` }
}

const JobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Online Tutor – Your Future Campus UK",
  "description": "Join Your Future Campus UK as an online tutor. Teach Maths, English, Science, Languages, Computer Science, and more. Flexible hours, competitive pay, and full support provided.",
  "identifier": { "@type": "PropertyValue", "name": "Your Future Campus UK", "value": "YFC-UK-TUTOR-001" },
  "datePosted": "2025-11-08",
  "validThrough": "2025-12-31T23:59",
  "employmentType": "PART_TIME",
  "hiringOrganization": { "@type": "Organization", "name": "Your Future Campus UK", "sameAs": "https://www.yfcampus.com", "logo": `${BASE_URL}/Images/yfc-logo.png` },
  "jobLocation": { "@type": "Place", "address": { "@type": "PostalAddress", "addressLocality": "Remote", "addressRegion": "UK", "addressCountry": "GB" } },
  "baseSalary": { "@type": "MonetaryAmount", "currency": "GBP", "value": { "@type": "QuantitativeValue", "value": 25, "unitText": "HOUR" } }
}


  return (
    <main>
      <HeroSection title={title} subtitle={subline} description={description} imageUri={"/Images/HeroSection/join.avif"}/>
      <TeachingStandard points={points} qoute={qoute} qoute_author={author} title={" Why Join Your Future Campus"}/>
      <SubjectsHiring/>
      <WhoCanApply/>
      <WhatWeOfferTutors/>
     <HowToApply/>
      <TutorApplicationForm/>
      <StudentFeedback feedbacks={feedbacks} heading={" What Our Tutors Say"}/>
      <CommonCta heading={heading} subtitle={subtitle} number={number} email={email} cta={cta} location={location} />
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadCrumbSchema) }} />
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ItemPageSchema) }} />
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JobPostingSchema) }} />
    </main>
  )
}

export default page
