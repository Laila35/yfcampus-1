import CommonCta from "@/components/shared/CommonCta";
 import CoreValues from "@/components/uk/about/CoreValues"; 
import GlobalPresence from "@/components/uk/about/GlobalPresence";
import HeroSection from "@/components/uk/about/Hero";
import MeetOurTutors from "@/components/uk/about/MeetOurTutors";
import MissionVisionSection from "@/components/uk/about/MissionVisionSection";
import OurStory from "@/components/uk/about/OurStory ";
import TeachingPhilosophy from "@/components/uk/about/TeachingPhilosophy";
import WhatParentsSay from "@/components/uk/about/WhatParentsSay"; 
    
import Script from "next/script";
import React from "react";
const url=process.env.NEXT_PUBLIC_BASE_URL+"/uk/about";
const keywords = [
  "about your future campus uk",
  "online tutoring company uk",
  "best online tuition platform uk",
  "qualified uk tutors online",
  "personalised online lessons uk"
];

 export const metadata = {
     title:"About Your Future Campus UK | Online One-to-One Learning Platform",
     description:"Learn more about Your Future Campus UK — offering personalised online tuition with UK-qualified tutors for Maths, English, Science & more. Free trial available.",
robots:{index:true,follow:true},
alternates:{canonical:url},
keywords:keywords.map((k) => k),
OpenGraph: {
  title: "About Your Future Campus UK | Online One-to-One Learning Platform",
  description:"Learn more about Your Future Campus UK — offering personalised online tuition with UK-qualified tutors for Maths, English, Science & more. Free trial available.",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/about`,
  images: [
    {
      url: '/Images/about/about.avif',
      width: 800,
      height: 600,
      alt: 'About Your Future Campus UK | Online One-to-One Learning Platform',
    },
    
  ],
  siteName: 'Your Future Campus UK',
  locale: 'en_GB',
  type: 'website',
},
twitter:{
  card: 'summary_large_image',
  title: "About Your Future Campus UK | Online One-to-One Learning Platform",
  description:"Learn more about Your Future Campus UK — offering personalised online tuition with UK-qualified tutors for Maths, English, Science & more. Free trial available.",
  images: [
    {
      url: '/Images/about/about.avif',
      width: 800,
      height: 600,
      alt: 'About Your Future Campus UK | Online One-to-One Learning Platform',
    },
  ]
}
 }
const page = async () => {
    const BASE_URL =
        process.env.NEXT_PUBLIC_BASE_URL || "https://www.yfcampus.com";
     
   
     
    //herosection
    const title =
        "About Your Future Campus UK – Empowering Students to Succeed";
    const subtitle =
        "Building confident learners through personalised one-to-one online tuition across the UK and worldwide.";
    const desc =
        "At Your Future Campus UK, our mission is simple — to help every student discover their true learning potential.We provide interactive, one-to-one online lessons across Maths, English, Science, and Computer Studies, delivered by expert UK tutors.Each lesson is tailored to the individual student’s pace, goals, and curriculum level, ensuring effective and enjoyable learning from KS1 to A-Level. Founded with a vision to make quality education accessible for all, Your Future Campus now serves students in the UK, Europe, North America, and Australia — building bridges between teachers, students, and families through technology and trust.";
    const image = "/Images/HeroSection/aboutPage.jpeg";

    const heading =
        "Ready to join our growing community of confident learners?";
    const number = "+44 7532 792318";
    const email = "admin@yfcampus.com";
    const cta = {
        text: "Book Your Free Trial ",
        url: "/uk/book-lesson",
    };

    const breadcrumbSchema = {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                item: {
                    "@id": BASE_URL,
                    name: "Home",
                },
            },
            {
                "@type": "ListItem",
                position: 2,
                item: {
                    "@id": `${BASE_URL}/uk/about`,
                    name: "About",
                },
            },
        ],
    };
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Your Future Campus UK",
        url: BASE_URL,
        logo: `${BASE_URL}/yfc-logo.png`,
        sameAs: [
            "https://www.facebook.com/yourfuturecampus",
            "https://www.instagram.com/yourfuturecampus",
            "https://www.linkedin.com/company/yourfuturecampus",
        ],
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+44 7000 000000",
            contactType: "Customer Support",
            availableLanguage: ["English"],
        },
    };

    const aboutPageSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Your Future Campus UK | Online One-to-One Learning Platform" ,
        url: `${BASE_URL}/uk/about`,
        description:  "Learn more about Your Future Campus UK — offering personalised online tuition with UK-qualified tutors for Maths, English, Science & more. Free trial available.",
        mainEntity: {
            "@type": "Organization",
            name: "Your Future Campus UK",
            url: BASE_URL,
        },
    };

    return (
        <main>
            <HeroSection
                title={title}
                subtitle={subtitle}
                desc={desc}
                image={image}
            />
            <MissionVisionSection />
            <TeachingPhilosophy />
            <GlobalPresence />
            <MeetOurTutors />
            <CoreValues />
            <OurStory />
            <WhatParentsSay />
            <CommonCta
                heading={heading}
                subtitle={
                    " Book your free assessment today and meet your perfect tutor."
                }
                number={number}
                email={email}
                cta={cta}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
                strategy="afterInteractive"
            />
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
                strategy="afterInteractive"
            />
            <Script
                id="about-page-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(aboutPageSchema),
                }}
                strategy="afterInteractive"
            />
        </main>
    );
};

export default page;
