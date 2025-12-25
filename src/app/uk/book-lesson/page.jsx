import Faqs from "@/components/shared/FAQ";
import AfterRegisterSteps from "@/components/uk/book-lesson/AfterRegisterSteps";
import ContactAdmissionsTeam from "@/components/uk/book-lesson/ContactAdmissionsTeam";
import HeroSection from "@/components/uk/book-lesson/HeroSection";
import Registration from "@/components/uk/book-lesson/QuickRegistrationForm/Registration";
import TrialLessonSchedule from "@/components/uk/book-lesson/TrialLessonSchedule";
import WhyChooseTrial from "@/components/uk/book-lesson/WhyChooseTrial";
 import { createClient } from "@/prismicio";
 import Script from "next/script";
import CommonCta from "@/components/shared/CommonCta";
import FaqsSection from "@/components/shared/FAQS";
const keywords = [
  "book free trial lesson uk",
  "online tutoring registration uk",
  "start online tuition uk",
  "one to one tutor booking uk",
  "schedule free class online uk"
];

export const metadata={
  title:"Book a Free Trial Lesson | Your Future Campus UK",
  description:"Book a free trial lesson with Your Future Campus UK. One-to-one online tuition in Maths, English, Science & more with UK-qualified tutors. No registration fee.",
  robots:{index:true,follow:true},
  keywords:keywords.map((k) => k),
  alternates:{
    canonical:`${process.env.NEXT_PUBLIC_BASE_URL}/uk/book-lesson`
  },
  openGraph:{
    title:"Book a Free Trial Lesson | Your Future Campus UK",
    description:"Book a free trial lesson with Your Future Campus UK. One-to-one online tuition in Maths, English, Science & more with UK-qualified tutors. No registration fee.",
    images:[
      {
        url:"/Images/HeroSection/book.jpg",
        width:800,
        height:600,
        alt:"Book a Free Trial Lesson | Your Future Campus UK"
      }
    ],
    url:`${process.env.NEXT_PUBLIC_BASE_URL}/uk/book-lesson`,
    siteName:"Your Future Campus UK",
    locale:"en_GB",
    type:"website"
  },
  twitter: {
    card: 'summary_large_image',
    title:"Book a Free Trial Lesson | Your Future Campus UK",
    images: [
      {
        url: '/Images/HeroSection/book.jpg',
        width: 800,
        height: 600,
        alt: 'Book a Free Trial Lesson | Your Future Campus UK',
      },
    ],
    description:"Book a free trial lesson with Your Future Campus UK. One-to-one online tuition in Maths, English, Science & more with UK-qualified tutors. No registration fee.",
  }
}
const page = async () => {
    const BASE_URL = "https://www.yfcampus.com";
     
   const cta={
    text:"Start Free Trial ",
    url:"/uk/book-lesson"
   }
 const faqs = [
  {
    question: "How long is the free trial lesson?",
    answer: "You can choose between 30 minutes or 1 hour."
  },
  {
    question: "Do we need to install any app?",
    answer: "Yes — we use Zoom, Skype, or Google Meet, whichever is easiest for you."
  },
  {
    question: "Can parents attend the session?",
    answer: "Yes — parents are welcome to join or observe the trial."
  },
  {
    question: "What happens after the trial?",
    answer: "We’ll send a short progress note and discuss class scheduling options."
  },
  {
    question: "Is there any obligation to continue?",
    answer: "No — the free trial is 100% commitment-free."
  }
];

//  schema_json_ld
 const faqsSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity:
      faqs?.map((faq) => ({
        "@type": "Question",
        name: faq?.question || "",
        acceptedAnswer: {
          "@type": "Answer",
          text: faq?.answer || "",
             
        },
      })) || [],
  };
  //breacd schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item:BASE_URL ,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Book Lesson",
        item:  BASE_URL+"/uk/book-lesson",
      },
    ],
  }
  const itemPageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemPage",
  name:  "Book a Free Trial Lesson | Your Future Campus UK",
  url:  BASE_URL+"/uk/book-lesson",
  description:"Book a free trial lesson with Your Future Campus UK. One-to-one online tuition in Maths, English, Science & more with UK-qualified tutors. No registration fee.",
     
  mainEntity: {
    "@type": "Service",
    name: "Free Trial Online Tutoring Lesson",
    provider: {
      "@type": "Organization",
      name: "Your Future Campus UK",
      url:  BASE_URL ,
      logo:`${process.env.NEXT_PUBLIC_BASE_URL}/Images/yfc-logo.png` || "", // replace with actual logo URL
      sameAs: [
        "https://www.facebook.com/yourfuturecampus",
        "https://www.instagram.com/yourfuturecampus",
        "https://www.linkedin.com/company/yourfuturecampus"
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom"
    },
    serviceType: "Online Tutoring and Trial Lessons",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "Student"
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
      description:"Book a free trial lesson with Your Future Campus UK. One-to-one online tuition in Maths, English, Science & more with UK-qualified tutors. No registration fee.",
      availability: "https://schema.org/InStock",
      url:  BASE_URL+"/uk/book-lesson",
    }
  },
  
};

    return (
        <main className="mx-10">
            <HeroSection
             
               
            />
            <Registration />
            <AfterRegisterSteps    />
            <WhyChooseTrial
                
            />
            <TrialLessonSchedule
                 
            />
            <ContactAdmissionsTeam
                 
            />
           <FaqsSection
           faqs={faqs}
           heading={" FAQ – Free Trial Lessons"}
           />
            <CommonCta heading={"Ready to Begin?"}
            subtitle={"Give your child the gift of confident learning — book your free trial today.One simple form → One friendly call → One lesson that makes a difference"}
            number={" +44 7532 792318"}
            email={"admin@yfcampus.com"}
            cta={cta}
            />
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemPageSchema) }}
                strategy={"afterInteractive"}
            />
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqsSchema) }}
                strategy={"afterInteractive"}
            />
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                strategy={"afterInteractive"}
            />
        </main>
    );
};

export default page;
