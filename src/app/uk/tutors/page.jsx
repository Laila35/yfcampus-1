import CommonCta from '@/components/shared/CommonCta'
import ExploreTutors from '@/components/uk/Tutors/ExploreTutors'
import HeroSection from '@/components/uk/Tutors/HeroSection'
import MatchTutors from '@/components/uk/Tutors/MatchTutors'
import MeetTutors from '@/components/uk/Tutors/MeetTutors'
import StudentFeedback from '@/components/uk/Tutors/StudentFeedback'
import SubjectExpertise from '@/components/uk/Tutors/SubjectExpertise'
import TeachingStandard from '@/components/uk/Tutors/TeachingStandard'
import Script from 'next/script'
 
const url=process.env.NEXT_PUBLIC_BASE_URL+"/uk/tutors";
 export const metadata = {
   title:' Meet Our Tutors | Qualified UK Online Teachers | Your Future Campus UK',
   description:'Meet our qualified and trusted UK tutors. One-to-one online lessons in Maths, English, Science & more by verified male and female teachers.', 
   robots:{index:true,follow:true},
   alternates:{canonical:url},
  keywords:[
  "online tutors uk",
  "qualified tutors uk",
  "male and female tutors uk",
  "private tutors online uk",
  "experienced teachers uk online"
],
openGraph: {
  title: ' Meet Our Tutors | Qualified UK Online Teachers | Your Future Campus UK',
  description:'Meet our qualified and trusted UK tutors. One-to-one online lessons in Maths, English, Science & more by verified male and female teachers.',
  url:url,
  images: [
    {
      url: '/Images/HeroSection/tutoring.avif',
      width: 800,
      height: 600,
      alt: 'Meet Our Tutors | Qualified UK Online Teachers | Your Future Campus UK',
    },
    
  ],
  siteName: 'Your Future Campus UK',
  locale: 'en_GB',
  type: 'website',
},
twitter: {
  card: 'summary_large_image',
  title: ' Meet Our Tutors | Qualified UK Online Teachers | Your Future Campus UK',
  description:'Meet our qualified and trusted UK tutors. One-to-one online lessons in Maths, English, Science & more by verified male and female teachers.',
  images: [
    {
      url: '/Images/HeroSection/tutoring.avif',
      width: 800,
      height: 600,
      alt: 'Meet Our Tutors | Qualified UK Online Teachers | Your Future Campus UK',
    },
  ],
 }

}

const UkTutors = () => {
  const title="Meet Our Tutors – Qualified & Trusted UK Online Teachers";
  const subline=" Learn from experienced, certified, and passionate UK tutorswho bring learning to life — one student at a time.";
  const desc=" At Your Future Campus UK, our tutors are at the heart of everything we do. Each teacher is UK-qualified, background-checked, and trained to deliver engaging,one-to-one online lessons aligned with the UK NationalCurriculum. Whether your child needs help in Maths, English,Science, or any other subject, our dedicated tutors ensureevery lesson is personal, effective, and inspiring. Wehandpick our tutors based on academic excellence,communication skills, and classroom experience, ensuringyour child learns from the very best."
  const BASE_URL=process.env.NEXT_PUBLIC_BASE_URL;
  const heading=' Start Learning with the Right Tutor Today';
  const subtitle=' Book your free trial now and get matched with the perfect tutor for your child’s needs.';
  const number='+44 7532 792318';
  const email='admin@yfcampus.com';
  const cta={
    text:'Book a Free Trial',
    url:"/uk/book-lesson"
  }
  const points = [
    "UK-qualified or equivalent certified teachers",
    "Experience in British schools or online teaching",
    "Background-checked and verified by our HR team",
    "Fluent English communication",
    "Continuous professional training",
    "Friendly, patient, and results-focused approach",
  ];
  const qoute="“We don’t just teach — we connect, motivate, and inspire every student to love learning.”"
  const author="– Head of Academics, Your Future Campus UK"
   const breadcrumbSchema={
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": BASE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "UK Tutors",
        "item":  BASE_URL+"/uk/tutors",
      },
    ],
   }
   const ItemlistSchema={
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "UK Tutors – Your Future Campus",
  "description": "Meet our qualified and trusted UK tutors. One-to-one online lessons in Maths, English, Science & more by verified male and female teachers.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "url": "/uk/tutors/sarah-thompson",
      "item": {
        "@type": "Person",
        "name": "Sarah Thompson",
        "jobTitle": "English Tutor",
        "alumniOf": "University of London",
        "description": "BA English Literature, 10+ years’ teaching experience in British primary schools.",
        "teaches": [
          {
            "@type": "Course",
            "name": "English",
            "educationalLevel": "Primary to A-Level",
            "about": "Reading, writing, grammar, literature & spoken English"
          }
        ]
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "url": "/uk/tutors/mohammed-khan",
      "item": {
        "@type": "Person",
        "name": "Mohammed Khan",
        "jobTitle": "Maths & Science Tutor",
        "alumniOf": "University of Manchester",
        "description": "MSc Physics, Experienced A-Level and GCSE tutor with 7 years of online teaching.",
        "teaches": [
          {
            "@type": "Course",
            "name": "Maths",
            "educationalLevel": "Primary to A-Level, including GCSE exam preparation"
          },
          {
            "@type": "Course",
            "name": "Science",
            "educationalLevel": "KS3–A-Level",
            "about": "Physics, Chemistry, and Biology"
          }
        ]
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "url": "/uk/tutors/aisha-patel",
      "item": {
        "@type": "Person",
        "name": "Aisha Patel",
        "jobTitle": "Primary Tutor",
        "alumniOf": "University of Birmingham",
        "description": "B.Ed Primary Education, Specialist in Early Learning and KS1 foundational skills.",
        "teaches": [
          {
            "@type": "Course",
            "name": "Primary Education",
            "educationalLevel": "Early Learning & KS1"
          }
        ]
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "url": "/uk/tutors/daniel-roberts",
      "item": {
        "@type": "Person",
        "name": "Daniel Roberts",
        "jobTitle": "Computer Science Tutor",
        "alumniOf": "King’s College London",
        "description": "BSc Computer Science, Coding mentor for KS3–A-Level students, focusing on Scratch & Python.",
        "teaches": [
          {
            "@type": "Course",
            "name": "Computer Science",
            "educationalLevel": "KS3–A-Level",
            "about": "Coding, Python, algorithms & ICT skills"
          }
        ]
      }
    }
  ]
}
const OrganizationSchema={
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Future Campus UK",
  "url":  BASE_URL+"/uk/tutors",
  "logo": "https://www.yfcampus.com/Images/yfc-logo.png",
  "sameAs": [
    "https://www.facebook.com/YourFutureCampusUK",
    "https://twitter.com/YFCampusUK",
    "https://www.linkedin.com/company/your-future-campus-uk"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+44 7532 792318",
      "contactType": "customer service",
      "areaServed": "GB",
      "availableLanguage": "English"
    },
    {
      "@type": "ContactPoint",
      "email": "admin@yfcampus.com",
      "contactType": "support",
      "areaServed": "GB",
      "availableLanguage": "English"
    }
  ],
   
}

const feedbacks = [
  "Our tutor made Science so easy to understand — my daughter loves her lessons!",
  "Professional and patient. The tutor made learning fun and effective.",
  "Highly recommend! My son’s confidence in Maths improved dramatically.",
];
  return (
    <main>
      <HeroSection title={title} subtitle={subtitle} description={desc} imageUri={"/Images/HeroSection/tutoring.avif"} />
      <TeachingStandard title={"Our Teaching Standards"} points={points}  qoute={qoute} qoute_author={author}/>
      <ExploreTutors />
      <SubjectExpertise />
      <MeetTutors />
      <MatchTutors />
      <StudentFeedback feedbacks={feedbacks} heading={"Student & Parent Feedback"}   />
      <CommonCta heading={heading} subtitle={subtitle} number={number} email={email} cta={cta}/>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ItemlistSchema) }}
      />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema) }}
      />
    </main>
  )
}

export default UkTutors
