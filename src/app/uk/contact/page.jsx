 
import CommonCta from "@/components/shared/CommonCta";
import ReadyToBeginCTA from "@/components/shared/ReadyToBeginCTA";
import ContactInfo from "@/components/uk/contact/ContactInfo";
import HeroSection from "@/components/uk/contact/HeroSection";
import PartnershipCollaboration from "@/components/uk/contact/PartnershipCollaboration";
import StudentParentSupport from "@/components/uk/contact/StudentParentSupport";
import { createClient } from "@/prismicio";
 
 
import Script from "next/script";
 import React from "react";
  const url=process.env.NEXT_PUBLIC_BASE_URL+"/uk/contact";
  const keywords = [
  "contact your future campus uk",
  "online tuition help uk",
  "education support contact uk",
  "online tutoring customer service uk",
  "whatsapp online tutor uk"
];

  export const metadata = {
      title:"Contact Us | Help & Support | Your Future Campus UK",
      description:"Contact Your Future Campus UK for general questions, technical support, or partnership inquiries. Our team responds within 12 hours via WhatsApp or email.",
      robots:{index:true,follow:true},
      alternates:{canonical:url},
      keywords:keywords.map((k) => k),
      openGraph: {
        title:"Contact Us | Help & Support | Your Future Campus UK",
        description:"Contact Your Future Campus UK for general questions, technical support, or partnership inquiries. Our team responds within 12 hours via WhatsApp or email.",
        url: url,
        images: [
          {
            url: '/Images/HeroSection/contact.avif',
            width: 800,
            height: 600,
            alt: 'Contact Us | Help & Support | Your Future Campus UK',
          },
        ],
       },
      twitter: {
        card: 'summary_large_image',
        title:"Contact Us | Help & Support | Your Future Campus UK",
        description:"Contact Your Future Campus UK for general questions, technical support, or partnership inquiries. Our team responds within 12 hours via WhatsApp or email.",
        images: [
          {
            url: '/Images/HeroSection/contact.avif',
            width: 800,
            height: 600,
            alt: 'Contact Us | Help & Support | Your Future Campus UK',
          },
        ]
      }
  }
const page = async() => {
     
 
 
 
 //json_ld schema
 const breadcrumbSchema={
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/contact`,
      },
    ],
 }
 // ContactPage schema
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Us – Your Future Campus UK",
  description:
    "Contact Your Future Campus UK for general questions, technical support, or partnership inquiries. Our team responds within 12 hours via WhatsApp or email.",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/contact`,
  publisher: {
    "@type": "Organization",
    name: "Your Future Campus UK",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    logo: `${process.env.NEXT_PUBLIC_BASE_URL}/yfc-logo.png`,
  },
};

// Organization schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Your Future Campus UK",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  logo: `${process.env.NEXT_PUBLIC_BASE_URL}/yfc-logo.png`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+44 20 8004 0000",
      contactType: "Customer Support",
      email: "support@yfcampus.com",
      areaServed: "GB",
      availableLanguage: ["English"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/yourfuturecampus",
    "https://www.instagram.com/yourfuturecampus",
    "https://www.linkedin.com/company/yourfuturecampus",
  ],
};
const cta={
    text:"Book Your Free Trial",
    url:"/uk/book-lesson"
}
const heading="Contact Us – Your Future Campus UK"
const subtitle="We’re here to help! Reach out to our team for any questions, support, or partnership inquiries.";
const desc="Whether you’re a parent, student, or school representative, we’d love to hear from you.At Your Future Campus UK, our support team is always ready to assist — from enrollment and scheduling to technical or academic queries.You can contact us easily via WhatsApp, email, or the quick contact form below, and we’ll respond within 12 hours (Monday–Saturday).For trial class requests, please use our Book a Lesson form to ensure your message reaches the right academic advisor."
    return (
        <main className="mx-10">
            <HeroSection heading={  heading} subtitle={subtitle} desc={desc}   />
            <ContactInfo   />
            <PartnershipCollaboration   />
            <StudentParentSupport  />
              <CommonCta
              heading="Have a question or need quick support?"
              subtitle={" Message us directly on WhatsApp or email us today."}
              number={" +44 7532 792318"}
              email={"admin@yfcampus.com"}
cta={cta}
              />
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
                strategy="afterInteractive"
            />
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                strategy="afterInteractive"
            />
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                strategy="afterInteractive"
            />
        </main>
    );
};

export default page;
